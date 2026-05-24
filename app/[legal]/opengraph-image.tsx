import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const revalidate = 86400; // Cache for 24 hours

const legalMap: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
};

export default async function Image({ params }: { params: { legal: string } }) {
  const pageTitle = legalMap[params.legal] || "Legal Documentation";

  let fonts: any[] = [];
  try {
    const [amiriData, cormorantData] = await Promise.all([
      fetch("https://github.com/google/fonts/raw/main/ofl/amiri/Amiri-Regular.ttf", { cache: "force-cache" }).then(res => res.arrayBuffer()),
      fetch("https://github.com/google/fonts/raw/main/ofl/cormorantgaramond/CormorantGaramond-Regular.ttf", { cache: "force-cache" }).then(res => res.arrayBuffer())
    ]);
    fonts = [
      { name: "Amiri", data: amiriData, style: "normal" },
      { name: "Cormorant", data: cormorantData, style: "normal" }
    ];
  } catch (e) {
    console.warn("Failed to load custom remote fonts for OG image, falling back to system fonts.", e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0E1A",
          color: "#F3F4F6",
          padding: "60px 80px",
          justifyContent: "space-between",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background glow orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(10,14,26,0) 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Header/Logo Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#111827",
                border: "2px solid #C9A84C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "32px", color: "#C9A84C", fontWeight: "bold", fontFamily: "Amiri, sans-serif" }}>
                ن
              </span>
            </div>
            <span style={{ fontSize: "36px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "Cormorant, sans-serif" }}>
              Noor<span style={{ color: "#C9A84C" }}>360</span>
            </span>
          </div>
          <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", color: "#94A3B8", fontWeight: "bold" }}>
            Legal & Compliance
          </span>
        </div>

        {/* Center / Body Section */}
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "center", gap: "16px", zIndex: 10, marginTop: "20px" }}>
          <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "3px", color: "#C9A84C", fontWeight: "600" }}>
            Official Document
          </span>
          <span style={{ fontSize: "56px", fontWeight: "700", color: "#F3F4F6", fontFamily: "Cormorant, sans-serif", lineHeight: "1.2" }}>
            {pageTitle}
          </span>
          <span style={{ fontSize: "16px", color: "#94A3B8", marginTop: "8px" }}>
            Noor360 — Your Complete Islamic Companion. Dedicated to absolute transparency, user privacy, and data security.
          </span>
        </div>

        {/* Bottom Bar Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            paddingTop: "20px",
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: "14px", color: "#94A3B8" }}>
            No Ads • No Tracking • Completely Free for the Ummah
          </span>
          <span style={{ fontSize: "14px", color: "#C9A84C", fontWeight: "600", letterSpacing: "1px" }}>
            noor360.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
