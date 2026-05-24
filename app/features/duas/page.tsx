import type { Metadata } from "next";
import DuasPageContent from "@/components/sections/features/DuasPageContent";

export const metadata: Metadata = {
  title: "Duas & Dhikr — Noor360 | Supplications & Tasbeeh",
  description: "Access 60+ authentic duas for every occasion, a digital Tasbeeh counter, and memorise all 99 Names of Allah.",
  alternates: {
    canonical: "https://noor360.app/features/duas",
  },
  openGraph: {
    title: "Duas & Dhikr — Noor360 | Supplications & Tasbeeh",
    description: "Access 60+ authentic duas for every occasion, a digital Tasbeeh counter, and memorise all 99 Names of Allah.",
    url: "https://noor360.app/features/duas",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor360 Duas & Dhikr Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duas & Dhikr — Noor360 | Supplications & Tasbeeh",
    description: "Access 60+ authentic duas for every occasion, a digital Tasbeeh counter, and memorise all 99 Names of Allah.",
    images: ["/og-image.png"],
  },
};

export default function DuasAndDhikrPage() {
  return <DuasPageContent />;
}
