import type { Metadata } from "next";
import QuranPageContent from "@/components/sections/features/QuranPageContent";

export const metadata: Metadata = {
  title: "Quran Suite — Noor360 | 21+ Translations & Audio",
  description: "Read, listen and understand the Quran with 21+ translations, 16+ tafseers, word-by-word analysis and recitations from world-renowned qaris.",
  alternates: {
    canonical: "https://noor360.app/features/quran",
  },
  openGraph: {
    title: "Quran Suite — Noor360 | 21+ Translations & Audio",
    description: "Read, listen and understand the Quran with 21+ translations, 16+ tafseers, word-by-word analysis and recitations from world-renowned qaris.",
    url: "https://noor360.app/features/quran",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 Quran Suite Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Suite — Noor360 | 21+ Translations & Audio",
    description: "Read, listen and understand the Quran with 21+ translations, 16+ tafseers, word-by-word analysis and recitations from world-renowned qaris.",
    images: ["/og-image.png"],
  },
};

export default function QuranSuitePage() {
  return <QuranPageContent />;
}
