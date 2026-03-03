import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { suggestAddress, getAssessorData, getZoning } from "./portland-maps";
import { scoreLead, classifyLead } from "./scoring";
import { buildSubject, buildEmailHtml } from "./email-template";
import type { LeadFormData } from "./types";

const NOTIFICATION_EMAIL =
  process.env.LEAD_NOTIFICATION_EMAIL || "connor@stayportland.com";

export async function enrichAndScoreLead(
  leadId: string,
  formData: LeadFormData
) {
  const supabase = await createClient();

  try {
    // 1. Address lookup
    const suggest = await suggestAddress(formData.address);

    // 2. Parallel: assessor + zoning (only if suggest succeeded)
    let assessor = null;
    let zoning = null;
    if (suggest) {
      [assessor, zoning] = await Promise.all([
        suggest.property_id
          ? getAssessorData(suggest.property_id)
          : Promise.resolve(null),
        suggest.latitude && suggest.longitude
          ? getZoning(suggest.latitude, suggest.longitude)
          : Promise.resolve(null),
      ]);
    }

    // 3. Score + classify
    const score = scoreLead(
      suggest,
      assessor,
      zoning,
      formData.timeline,
      formData.condition
    );
    const classification = classifyLead(score, suggest, assessor);

    // 4. Insert enrichment data
    await supabase.from("lead_enrichment").insert({
      lead_id: leadId,
      property_id: suggest?.property_id || null,
      state_id: suggest?.state_id || null,
      latitude: suggest?.latitude || null,
      longitude: suggest?.longitude || null,
      zip_code: suggest?.zip_code || null,
      property_class: assessor?.property_class || null,
      property_class_code: assessor?.property_class_code || null,
      year_built: assessor?.year_built,
      lot_sqft: assessor?.lot_sqft,
      building_sqft: assessor?.building_sqft,
      bedrooms: assessor?.bedrooms,
      bathrooms: assessor?.bathrooms,
      assessed_value: assessor?.assessed_value,
      market_value: assessor?.market_value,
      zone_code: zoning?.zone_code || null,
      zone_desc: zoning?.zone_desc || null,
      score_breakdown: score,
      raw_suggest: suggest?.raw || null,
      raw_assessor: assessor?.raw || null,
      raw_zoning: zoning?.raw || null,
    });

    // 5. Update leads row
    await supabase
      .from("leads")
      .update({
        score: score.total,
        classification,
        enrichment_status: "completed",
        enriched_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    // 6. Send enriched email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails
        .send({
          from: "leads@buyhousesinportland.com",
          to: NOTIFICATION_EMAIL,
          subject: buildSubject(classification, formData.address),
          html: buildEmailHtml({
            formData,
            classification,
            score,
            suggest,
            assessor,
            zoning,
          }),
        })
        .catch((err) => console.error("Resend error:", err));
    }

    console.log(
      `Enrichment complete for lead ${leadId}: score=${score.total}, class=${classification}`
    );
  } catch (err) {
    console.error(`Enrichment failed for lead ${leadId}:`, err);

    // Update status to failed
    try {
      await supabase
        .from("leads")
        .update({ enrichment_status: "failed" })
        .eq("id", leadId);
    } catch {
      // swallow — best-effort status update
    }

    // Fallback: send basic email so the lead doesn't get lost
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails
        .send({
          from: "leads@buyhousesinportland.com",
          to: NOTIFICATION_EMAIL,
          subject: `New Lead: ${formData.address}`,
          html: `
            <h2>New Lead — Buy Houses in Portland</h2>
            <p><strong>Enrichment failed</strong> — sending basic notification.</p>
            <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Address</td><td style="padding:6px 0;font-weight:600;">${formData.address}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Phone</td><td style="padding:6px 0;font-weight:600;">${formData.phone}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Email</td><td style="padding:6px 0;">${formData.email || "—"}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Condition</td><td style="padding:6px 0;">${formData.condition || "—"}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Timeline</td><td style="padding:6px 0;">${formData.timeline || "—"}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#666;">Source</td><td style="padding:6px 0;">${formData.source || "website"}</td></tr>
            </table>
          `,
        })
        .catch((fallbackErr) =>
          console.error("Fallback email also failed:", fallbackErr)
        );
    }
  }
}
