import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { enrichAndScoreLead } from "@/lib/enrichment/enrich-lead";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-webhook-secret");
  if (!secret || secret !== process.env.LEAD_ENRICHMENT_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const leadId = body?.lead_id;
  if (!leadId || typeof leadId !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid lead_id" },
      { status: 400 }
    );
  }

  const supabase = await createClient();
  const { data: lead, error } = await supabase
    .from("leads")
    .select("id, address, phone, email, condition, timeline, source")
    .eq("id", leadId)
    .single();

  if (error || !lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  // Run enrichment synchronously for webhook calls
  await enrichAndScoreLead(lead.id, {
    address: lead.address,
    phone: lead.phone,
    email: lead.email,
    condition: lead.condition,
    timeline: lead.timeline,
    source: lead.source,
  });

  return NextResponse.json({ success: true, lead_id: leadId });
}
