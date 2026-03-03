import type {
  Classification,
  ScoreBreakdown,
  SuggestResult,
  AssessorData,
  ZoningData,
  LeadFormData,
} from "./types";

const COLORS: Record<Classification, { bg: string; label: string; tag: string }> = {
  buy_box: { bg: "#16a34a", label: "BUY BOX", tag: "green" },
  network: { bg: "#d97706", label: "NETWORK DEAL", tag: "amber" },
  low_priority: { bg: "#6b7280", label: "LOW PRIORITY", tag: "gray" },
};

const CONDITION_LABELS: Record<string, string> = {
  great: "Great — move-in ready",
  minor: "Minor repairs needed",
  major: "Major work needed",
  "not-sure": "Not sure",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "30days": "Within 30 days",
  "60-90days": "60–90 days",
  "not-sure": "Not sure yet",
};

export function buildSubject(
  classification: Classification,
  address: string
): string {
  const { label } = COLORS[classification];
  return `[${label}] ${address}`;
}

export function buildEmailHtml(opts: {
  formData: LeadFormData;
  classification: Classification;
  score: ScoreBreakdown;
  suggest: SuggestResult | null;
  assessor: AssessorData | null;
  zoning: ZoningData | null;
}): string {
  const { formData, classification, score, suggest, assessor, zoning } = opts;
  const color = COLORS[classification];
  const pct = Math.min(score.total, 100);

  const propertyId = suggest?.property_id || "";
  const portlandMapsUrl = propertyId
    ? `https://www.portlandmaps.com/detail/${propertyId}/`
    : "";
  const googleMapsUrl = suggest
    ? `https://www.google.com/maps/search/?api=1&query=${suggest.latitude},${suggest.longitude}`
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;">

<!-- Header banner -->
<div style="background:${color.bg};padding:16px 24px;">
  <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">
    ${color.label} — Score: ${score.total}/100
  </h1>
</div>

<div style="padding:24px;max-width:640px;">

<!-- Address -->
<h2 style="margin:0 0 20px;color:#0D2B45;font-size:22px;">${formData.address}</h2>

<!-- Two columns -->
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
<tr valign="top">

<!-- Left: Form data -->
<td width="50%" style="padding-right:16px;">
  <h3 style="margin:0 0 8px;color:#0D2B45;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">Lead Info</h3>
  <table style="width:100%;font-size:14px;">
    ${row("Phone", formData.phone)}
    ${row("Email", formData.email || "—")}
    ${row("Condition", formData.condition ? CONDITION_LABELS[formData.condition] ?? formData.condition : "—")}
    ${row("Timeline", formData.timeline ? TIMELINE_LABELS[formData.timeline] ?? formData.timeline : "—")}
    ${row("Source", formData.source || "website")}
  </table>
</td>

<!-- Right: Property data -->
<td width="50%" style="padding-left:16px;border-left:1px solid #e2e8f0;">
  <h3 style="margin:0 0 8px;color:#0D2B45;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">Property Data</h3>
  <table style="width:100%;font-size:14px;">
    ${row("Zip Code", suggest?.zip_code || "—")}
    ${row("Property Class", assessor?.property_class || "—")}
    ${row("Year Built", assessor?.year_built != null ? String(assessor.year_built) : "—")}
    ${row("Lot SqFt", assessor?.lot_sqft != null ? assessor.lot_sqft.toLocaleString() : "—")}
    ${row("Building SqFt", assessor?.building_sqft != null ? assessor.building_sqft.toLocaleString() : "—")}
    ${row("Bed / Bath", formatBedBath(assessor))}
    ${row("Assessed Value", formatDollar(assessor?.assessed_value))}
    ${row("Market Value", formatDollar(assessor?.market_value))}
    ${row("Zoning", zoning ? `${zoning.zone_code} — ${zoning.zone_desc}` : "—")}
  </table>
</td>

</tr>
</table>

<!-- Score bar -->
<div style="margin:24px 0 8px;">
  <h3 style="margin:0 0 8px;color:#0D2B45;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">Score Breakdown</h3>
  <div style="background:#e2e8f0;border-radius:8px;height:24px;overflow:hidden;">
    <div style="background:${color.bg};width:${pct}%;height:100%;border-radius:8px;"></div>
  </div>
  <table style="width:100%;font-size:13px;color:#64748b;margin-top:8px;">
    <tr>
      <td>Zip: ${score.zip_code}/20</td>
      <td>Location: ${score.location_bounds}/5</td>
      <td>SFR: ${score.sfr}/15</td>
      <td>Lot: ${score.lot_size}/15</td>
    </tr>
    <tr>
      <td>Zoning: ${score.zoning}/20</td>
      <td>Timeline: ${score.timeline}/15</td>
      <td>Condition: ${score.condition}/10</td>
      <td><strong>Total: ${score.total}/100</strong></td>
    </tr>
  </table>
</div>

<!-- Quick links -->
${portlandMapsUrl || googleMapsUrl ? `
<div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e8f0;">
  <h3 style="margin:0 0 8px;color:#0D2B45;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">Quick Links</h3>
  ${portlandMapsUrl ? `<a href="${portlandMapsUrl}" style="color:#2563eb;font-size:14px;margin-right:16px;">Portland Maps</a>` : ""}
  ${googleMapsUrl ? `<a href="${googleMapsUrl}" style="color:#2563eb;font-size:14px;">Google Maps</a>` : ""}
</div>
` : ""}

</div>
</body>
</html>`.trim();
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:3px 8px 3px 0;color:#64748b;">${label}</td>
    <td style="padding:3px 0;font-weight:600;color:#0D2B45;">${value}</td>
  </tr>`;
}

function formatBedBath(assessor: AssessorData | null): string {
  if (!assessor) return "—";
  const bed = assessor.bedrooms != null ? String(assessor.bedrooms) : "?";
  const bath = assessor.bathrooms != null ? String(assessor.bathrooms) : "?";
  return `${bed} / ${bath}`;
}

function formatDollar(val: number | null | undefined): string {
  if (val == null) return "—";
  return `$${val.toLocaleString()}`;
}
