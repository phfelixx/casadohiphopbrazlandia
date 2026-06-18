import { ImageResponse } from "next/og";

export const alt =
  "Casa do Hip Hop de Brazlândia — Transformando vidas através da cultura";
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
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#ffd200",
              color: "#0a0a0a",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            CHH
          </div>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              color: "#a3a3a3",
              fontWeight: 700,
            }}
          >
            BRAZLÂNDIA · DISTRITO FEDERAL
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "120px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            CASA DO
          </div>
          <div
            style={{
              fontSize: "150px",
              fontWeight: 800,
              color: "#ffd200",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            HIP HOP
          </div>
          <div style={{ marginTop: "28px", fontSize: "38px", color: "#f5f1e6" }}>
            Transformando vidas através da cultura.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: "30px", color: "#a3a3a3" }}>
            Oficinas 100% gratuitas · com certificado
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 30px",
              borderRadius: "999px",
              backgroundColor: "#ffd200",
              color: "#0a0a0a",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            @casadohiphopbrazlandia
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

export const runtime = "nodejs";
