import { ImageResponse } from "next/og";

export const alt = "Sanatan Shiv Shakti — Seva · Sanskar · Sanskriti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(135deg, #f59324 0%, #c2410c 50%, #5c141b 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            width: 120,
            height: 120,
            borderRadius: 999,
            border: "3px solid rgba(233,212,154,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          ☼
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            marginTop: 80,
          }}
        >
          Sanatan Shiv Shakti
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#f4e3b8",
            marginTop: 8,
            letterSpacing: 4,
          }}
        >
          Seva · Sanskar · Sanskriti
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          Spiritual &amp; Charitable Organization · Howrah, West Bengal
        </div>
      </div>
    ),
    { ...size },
  );
}
