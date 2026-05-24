import type { Metadata } from "next";
import HadithPageContent from "@/components/sections/features/HadithPageContent";

export const metadata: Metadata = {
  title: "Hadith Collection — Noor360 | All 6 Major Books",
  description: "Access all six major Hadith collections — Sahih Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah and Nasai — with Arabic text and full-text search.",
  alternates: {
    canonical: "https://noor360.app/features/hadith",
  },
  openGraph: {
    title: "Hadith Collection — Noor360 | All 6 Major Books",
    description: "Access all six major Hadith collections — Sahih Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah and Nasai — with Arabic text and full-text search.",
    url: "https://noor360.app/features/hadith",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 Hadith Collection Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadith Collection — Noor360 | All 6 Major Books",
    description: "Access all six major Hadith collections — Sahih Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah and Nasai — with Arabic text and full-text search.",
    images: ["/og-image.png"],
  },
};

export default function HadithCollectionPage() {
  return <HadithPageContent />;
}
