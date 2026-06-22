import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SmartMaterialCalc — Free Home Improvement Calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f6fbf4 0%, #e8f5e9 100%)",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "#2e7d32",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "14px",
              paddingRight: "14px",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "5px",
                borderRadius: "2px",
                background: "#ffffff",
              }}
            />
            <div
              style={{
                width: "34px",
                height: "6px",
                borderRadius: "2px",
                background: "#e8f5e9",
              }}
            />
            <div
              style={{
                width: "28px",
                height: "7px",
                borderRadius: "2px",
                background: "#a5d6a7",
              }}
            />
            <div
              style={{
                width: "18px",
                height: "5px",
                borderRadius: "2px",
                background: "#ffffff",
                opacity: 0.92,
              }}
            />
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            Smart<span style={{ color: "#81c784" }}>Material</span>Calc
          </div>
        </div>
        <p
          style={{
            marginTop: "32px",
            fontSize: "36px",
            fontWeight: 600,
            color: "#1b5e20",
            lineHeight: 1.3,
            maxWidth: "900px",
          }}
        >
          Free Home Improvement Calculators
        </p>
        <p
          style={{
            marginTop: "16px",
            fontSize: "24px",
            color: "#5c5c5c",
            maxWidth: "800px",
          }}
        >
          Paint · Concrete · Flooring · Outdoor · Lumber · Roofing
        </p>
      </div>
    ),
    { ...size }
  );
}
