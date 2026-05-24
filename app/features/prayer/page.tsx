import type { Metadata } from "next";
import PrayerPageContent from "@/components/sections/features/PrayerPageContent";

export const metadata: Metadata = {
  title: "Prayer Tools — Noor360 | Accurate Times & Qibla",
  description: "Never miss a prayer. Get GPS-accurate prayer times, a live Qibla compass, Adhan notifications and track your daily Salah with streak counting.",
  alternates: {
    canonical: "https://noor360.app/features/prayer",
  },
  openGraph: {
    title: "Prayer Tools — Noor360 | Accurate Times & Qibla",
    description: "Never miss a prayer. Get GPS-accurate prayer times, a live Qibla compass, Adhan notifications and track your daily Salah with streak counting.",
    url: "https://noor360.app/features/prayer",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 Prayer Tools Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Tools — Noor360 | Accurate Times & Qibla",
    description: "Never miss a prayer. Get GPS-accurate prayer times, a live Qibla compass, Adhan notifications and track your daily Salah with streak counting.",
    images: ["/og-image.png"],
  },
};

export default function PrayerToolsPage() {
  return <PrayerPageContent />;
}
