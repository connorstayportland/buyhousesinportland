"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { enrichAndScoreLead } from "@/lib/enrichment/enrich-lead";

const leadSchema = z.object({
  address: z.string().min(5, "Please enter a valid property address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20)
    .regex(/^[\d\s\-\+\(\)\.]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  condition: z.enum(["great", "minor", "major", "not-sure"]).optional(),
  timeline: z.enum(["asap", "30days", "60-90days", "not-sure"]).optional(),
  source: z.string().optional(),
});

export type LeadFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const raw = {
    address: formData.get("address") as string,
    phone: formData.get("phone") as string,
    email: (formData.get("email") as string) || undefined,
    condition: (formData.get("condition") as string) || undefined,
    timeline: (formData.get("timeline") as string) || undefined,
    source: (formData.get("source") as string) || "website",
  };

  const result = leadSchema.safeParse(raw);

  if (!result.success) {
    const errors: Record<string, string[]> = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as string;
      if (!errors[field]) errors[field] = [];
      errors[field].push(err.message);
    });
    return {
      success: false,
      message: "Please fix the errors below.",
      errors,
    };
  }

  const supabase = await createClient();
  const leadId = crypto.randomUUID();

  const { error } = await supabase
    .from("leads")
    .insert({
      id: leadId,
      address: result.data.address,
      phone: result.data.phone,
      email: result.data.email || null,
      condition: result.data.condition || null,
      timeline: result.data.timeline || null,
      source: result.data.source || "website",
      status: "new",
    });

  if (error) {
    console.error("Supabase insert error:", error);
    return {
      success: false,
      message: "Something went wrong. Please call us directly at (971) 258-1093.",
    };
  }

  // Fire enrichment pipeline without blocking the response
  enrichAndScoreLead(leadId, {
    address: result.data.address,
    phone: result.data.phone,
    email: result.data.email || null,
    condition: result.data.condition || null,
    timeline: result.data.timeline || null,
    source: result.data.source || null,
  }).catch((err) => console.error("Enrichment error:", err));

  return {
    success: true,
    message:
      "Thank you! We'll be in touch within 24 hours to discuss your options. No obligation.",
  };
}
