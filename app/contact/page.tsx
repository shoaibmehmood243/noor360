import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Noor360 | Get in Touch",
  description: "Contact the Noor360 team for support, feedback, partnerships or press inquiries.",
  alternates: {
    canonical: "https://noor360.app/contact",
  },
  openGraph: {
    title: "Contact — Noor360 | Get in Touch",
    description: "Contact the Noor360 team for support, feedback, partnerships or press inquiries.",
    url: "https://noor360.app/contact",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Noor360 team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Noor360 | Get in Touch",
    description: "Contact the Noor360 team for support, feedback, partnerships or press inquiries.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Noor360 Support & Partnerships",
    "description": "Reach out to the Noor360 support, legal, or partnerships teams for inquiries, feedback, or bug reports.",
    "url": "https://noor360.app/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Noor360",
      "url": "https://noor360.app",
      "logo": "https://noor360.app/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "hello@noor360.app",
          "contactType": "customer service"
        },
        {
          "@type": "ContactPoint",
          "email": "support@noor360.app",
          "contactType": "technical support"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </>
  );
}
