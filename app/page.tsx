import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageTransition from "@/components/shared/PageTransition";
import Hero from "@/components/sections/home/Hero";
import Pillars from "@/components/sections/home/Pillars";
import FeatureRows from "@/components/sections/home/FeatureRows";
import Stats from "@/components/sections/home/Stats";
import Languages from "@/components/sections/home/Languages";

export const metadata: Metadata = {
  title: "Noor360 — Your Complete Islamic Companion",
  description: "Quran, Hadith, Prayer times, Duas and more — all in one beautifully crafted app for the global Muslim community.",
  alternates: {
    canonical: "https://noor360.app",
  },
  openGraph: {
    title: "Noor360 — Your Complete Islamic Companion",
    description: "Quran, Hadith, Prayer times, Duas and more — all in one beautifully crafted app for the global Muslim community.",
    url: "https://noor360.app",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor360 — Your Complete Islamic Companion",
    description: "Quran, Hadith, Prayer times, Duas and more — all in one beautifully crafted app for the global Muslim community.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  // JSON-LD structured data for the app (SoftwareApplication schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Noor360",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "LifestyleApplication, ReferenceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Quran, Hadith, Prayer times, Duas and more — all in one beautifully crafted app for the global Muslim community.",
    "url": "https://noor360.app",
  };

  return (
    <>
      {/* Insert SEO Rich Snippet Structured JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageTransition>
        <Hero />
        <Pillars />
        <FeatureRows />
        <Stats />
        <Languages />
      </PageTransition>
    </>
  );
}
