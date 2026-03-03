import { ImageResponse } from "next/og";
import { getNeighborhoodBySlug, neighborhoods } from "@/lib/neighborhoods";

export const alt = "Buy Houses in Portland — Neighborhoods";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return neighborhoods.map((hood) => ({ slug: hood.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hood = getNeighborhoodBySlug(slug);

  const name = hood?.name ?? "Portland";
  const highlights = hood?.highlights ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D2B45",
          fontFamily: "system-ui, sans-serif",
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 40,
            }}
          >
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <path d="M2 16L18 3L34 16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16V30H30V16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 30V23H22V30" stroke="#F5A40C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 22, color: "#F5A40C", fontWeight: 700 }}>
              Buy Houses in Portland
            </span>
          </div>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Sell My House Fast in {name}, OR
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#94a3b8",
              margin: "20px 0 0",
              lineHeight: 1.4,
            }}
          >
            Licensed Agents · Cash Buyers · No MLS Listing
          </p>
          {highlights.length > 0 && (
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              {highlights.slice(0, 4).map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: 16,
                    color: "#F5A40C",
                    border: "1.5px solid #F5A40C",
                    borderRadius: 20,
                    padding: "6px 16px",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 18, color: "#64748b" }}>
            buyhousesinportland.com/neighborhoods
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
