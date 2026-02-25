import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Buy Houses in Portland — Licensed Agents & Investor Network";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D2B45",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* House icon */}
        <div style={{ display: "flex", marginBottom: 32 }}>
          <svg width="80" height="72" viewBox="0 0 36 32" fill="none">
            <path d="M2 16L18 3L34 16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 16V30H30V16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 30V23H22V30" stroke="#F5A40C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.2,
            padding: "0 80px",
          }}
        >
          Sell Your Portland Home Off-Market
        </h1>

        <p
          style={{
            fontSize: 28,
            color: "#F5A40C",
            margin: "24px 0 0",
            fontWeight: 700,
          }}
        >
          Licensed Agents · Investor Network · No MLS
        </p>

        <p
          style={{
            fontSize: 20,
            color: "#94a3b8",
            margin: "16px 0 0",
          }}
        >
          buyhousesinportland.com
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
