import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/rate-limit";

const leadSchema = z.object({
  address: z.string().min(5),
  phone: z.string().min(10).max(20),
  email: z.string().email().optional().or(z.literal("")),
  condition: z.enum(["great", "minor", "major", "not-sure"]).optional(),
  timeline: z.enum(["asap", "30days", "60-90days", "not-sure"]).optional(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed } = await checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.from("leads").insert({
      address: result.data.address,
      phone: result.data.phone,
      email: result.data.email || null,
      condition: result.data.condition || null,
      timeline: result.data.timeline || null,
      source: result.data.source || "api",
      status: "new",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
