import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const revalidate = 86400; // Cache for 24 hours

const featuresMap: Record<string, { title: string; icon: string; desc: string; color: string }> = {
  quran: {
    title: "Quran Suite",
    icon: "📖",
    desc: "Read, study, and listen to the Holy Quran with 21+ translations, verse-by-verse Tafseers, word-by-word grammar breakdowns, and custom audio recitations.",
    color: "#C9A84C",
  },
  hadith: {
    title: "Hadith Compendium",
    icon: "📜",
    desc: "Search and study all six major canonical Hadith books — Sahih Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah, and Nasai with translations.",
    color: "#14B8A6",
  },
  prayer: {
    title: "Prayer Tools",
    icon: "🕌",
    desc: "Stay punctual with GPS-accurate prayer timetables, 8 astronomical calculation methods, live Qibla compass, and visual daily Salah trackers.",
    color: "#3B82F6",
  },
  duas: {
    title: "Duas & Dhikr",
    icon: "🤲",
    desc: "Enrich your daily worship with 60+ authentic daily supplications, interactive digital Tasbeeh beads, and memorisation tools for the 99 Names of Allah.",
    color: "#F59E0B",
  },
};

export default async function Image({ params }: { params: { slug: string } }) {
  const feature = featuresMap[params.slug] || {
    title: "Islamic App Features",
    icon: "⭐",
    desc: "Explore all beautifully crafted spiritual tools inside Noor360 — built for the global Muslim community.",
    color: "#C9A84C",
  };

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
        {/* Background dynamic color orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: `radial-gradient(circle, ${feature.color}15 0%, rgba(10,14,26,0) 70%)`,
            borderRadius: "50%",
          }}
        />

        {/* Subtle geometric simulated grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
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
                border: `2px solid ${feature.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "32px", color: feature.color, fontWeight: "bold", fontFamily: "Amiri, sans-serif" }}>
                ن
              </span>
            </div>
            <span style={{ fontSize: "36px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "Cormorant, sans-serif" }}>
              Noor<span style={{ color: "#C9A84C" }}>360</span>
            </span>
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: `${feature.color}18`,
              border: `1px solid ${feature.color}40`,
              color: feature.color,
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Noor360 Feature
          </div>
        </div>

        {/* Center / Body Section */}
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", gap: "40px", zIndex: 10, marginTop: "20px" }}>
          {/* Big Icon Shield */}
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "32px",
              backgroundColor: `${feature.color}10`,
              border: `2px solid ${feature.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
            }}
          >
            {feature.icon}
          </div>

          {/* Feature Titles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
            <span style={{ fontSize: "48px", fontWeight: "700", color: "#F3F4F6", fontFamily: "Cormorant, sans-serif" }}>
              {feature.title}
            </span>
            <span style={{ fontSize: "18px", color: "#94A3B8", lineHeight: "1.6", marginTop: "8px" }}>
              {feature.desc}
            </span>
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
            No Ads • No Tracking • Completely Free Islamic Suite
          </span>
          <span style={{ fontSize: "14px", color: feature.color, fontWeight: "600", letterSpacing: "1px" }}>
            Free to download on iOS & Android
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
