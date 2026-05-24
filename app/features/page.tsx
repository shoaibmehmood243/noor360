import type { Metadata } from "next";
import FeaturesPageContent from "@/components/sections/features/FeaturesPageContent";

export const metadata: Metadata = {
  title: "Features — Noor360 | Complete Islamic App",
  description: "Explore all features of Noor360 — Quran Suite, Hadith Collection, Prayer Tools, Duas & Dhikr.",
  alternates: {
    canonical: "https://noor360.app/features",
  },
  openGraph: {
    title: "Features — Noor360 | Complete Islamic App",
    description: "Explore all features of Noor360 — Quran Suite, Hadith Collection, Prayer Tools, Duas & Dhikr.",
    url: "https://noor360.app/features",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 Features Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Noor360 | Complete Islamic App",
    description: "Explore all features of Noor360 — Quran Suite, Hadith Collection, Prayer Tools, Duas & Dhikr.",
    images: ["/og-image.png"],
  },
};

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
