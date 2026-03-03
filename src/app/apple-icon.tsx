import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D2B45",
          borderRadius: 36,
          fontSize: 100,
        }}
      >
        <span style={{ color: "#F5A40C" }}>&#8962;</span>
      </div>
    ),
    { ...size }
  );
}
