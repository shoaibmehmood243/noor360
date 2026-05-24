import type { Metadata } from "next";
import DownloadPageContent from "@/components/sections/download/DownloadPageContent";

export const metadata: Metadata = {
  title: "Download — Noor360 | Free app for iOS & Android",
  description: "Download Noor360 free on the App Store and Google Play. Available on iOS 15+, Android 9+ and Huawei AppGallery.",
  alternates: {
    canonical: "https://noor360.app/download",
  },
  openGraph: {
    title: "Download — Noor360 | Free app for iOS & Android",
    description: "Download Noor360 free on the App Store and Google Play. Available on iOS 15+, Android 9+ and Huawei AppGallery.",
    url: "https://noor360.app/download",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Download Noor360 Islamic App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download — Noor360 | Free app for iOS & Android",
    description: "Download Noor360 free on the App Store and Google Play. Available on iOS 15+, Android 9+ and Huawei AppGallery.",
    images: ["/og-image.png"],
  },
};

export default function DownloadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Noor360",
    "operatingSystem": "iOS, Android, Huawei EMUI",
    "applicationCategory": "LifestyleApplication, ReferenceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Download Noor360 free on the App Store, Google Play and Huawei AppGallery. Experience a beautiful, privacy-respecting Islamic suite with no ads.",
    "url": "https://noor360.app/download",
    "downloadUrl": "https://noor360.app/download",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DownloadPageContent />
    </>
  );
}
