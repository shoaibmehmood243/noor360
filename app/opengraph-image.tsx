import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Noor360 — Your Complete Islamic Companion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const revalidate = 86400; // Cache for 24 hours

export default async function Image() {
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
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(10,14,26,0) 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Subtle geometric grid simulated background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)",
            backgroundSize: "24px 24px",
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
            Islamic App Suite
          </span>
        </div>

        {/* Center / Body Section */}
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "space-between", zIndex: 10, marginTop: "20px" }}>
          {/* Left Hero Texts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "620px" }}>
            <span style={{ fontSize: "76px", color: "#C9A84C", fontFamily: "Amiri, sans-serif", lineHeight: "1.1" }}>
              نور ٣٦٠
            </span>
            <span style={{ fontSize: "34px", fontWeight: "600", color: "#F3F4F6", fontFamily: "Cormorant, sans-serif", marginTop: "10px" }}>
              Your Complete Islamic Companion
            </span>
            <span style={{ fontSize: "16px", color: "#94A3B8", lineHeight: "1.6", marginTop: "4px" }}>
              Experience the Holy Quran with 21+ translations, all 6 authentic Hadith collections, GPS-accurate prayer times, a live Qibla compass & answers from our smart AI Scholar.
            </span>
          </div>

          {/* Right Pillar Grid */}
          <div style={{ display: "flex", flexWrap: "wrap", width: "340px", gap: "16px", justifyContent: "flex-end" }}>
            {[
              { label: "📖 Quran Suite", bg: "rgba(201,168,76,0.12)" },
              { label: "📜 Hadith Books", bg: "rgba(20,184,166,0.12)" },
              { label: "🕌 Prayer Tools", bg: "rgba(59,130,246,0.12)" },
              { label: "🤲 Duas & Dhikr", bg: "rgba(245,158,11,0.12)" }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  width: "160px",
                  height: "84px",
                  borderRadius: "18px",
                  backgroundColor: p.bg,
                  border: "1px solid rgba(201,168,76,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F3F4F6",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                {p.label}
              </div>
            ))}
          </div>
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
            No Ads • No Tracking • Completely Free for the global Muslim community
          </span>
          <div
            style={{
              padding: "6px 18px",
              borderRadius: "999px",
              background: "linear-gradient(to right, #C9A84C, #E4C05D)",
              color: "#0A0E1A",
              fontSize: "13px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Free on iOS & Android
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
