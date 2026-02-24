import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Buy Houses in Portland — Sell Fast for Cash";
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#F5A40C",
            borderRadius: 16,
            marginBottom: 32,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 36 36" fill="none">
            <path d="M18 6L30 16V30H22V22H14V30H6V16L18 6Z" fill="#0D2B45" />
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
          Sell Your Portland Home Fast for Cash
        </h1>

        <p
          style={{
            fontSize: 28,
            color: "#F5A40C",
            margin: "24px 0 0",
            fontWeight: 700,
          }}
        >
          No Repairs · No Commissions · Close in 7 Days
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
