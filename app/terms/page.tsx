import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Noor360 | Terms of Service",
  description: "Read the Terms and Conditions governing the use of our mobile application, Islamic content disclaimers, and AI Scholar guidelines.",
  alternates: {
    canonical: "https://noor360.app/terms",
  },
  openGraph: {
    title: "Terms & Conditions — Noor360 | Terms of Service",
    description: "Read the Terms and Conditions governing the use of our mobile application, Islamic content disclaimers, and AI Scholar guidelines.",
    url: "https://noor360.app/terms",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions Noor360",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Noor360 | Terms of Service",
    description: "Read the Terms and Conditions governing the use of our mobile application, Islamic content disclaimers, and AI Scholar guidelines.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      heading: "Acceptance of Terms",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            By downloading, installing, browsing, or utilizing the Noor360 mobile application, website, and related API services, you agree to be bound by these Terms & Conditions.
          </p>
          <p>
            If you do not agree to these Terms, please do not download, install, or use the Noor360 application or services. We reserve the right to update these terms at any time.
          </p>
        </div>
      ),
    },
    {
      id: "use-of-app",
      heading: "Use of the App",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 grants you a personal, non-exclusive, non-transferable, revocable license to use the app subject to the following rules:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2 mt-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Non-Commercial Scope:</strong> The app and its contents are provided entirely free of charge for your personal, non-commercial use, learning, and spiritual reflection.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Prohibited Conduct:</strong> You must not reverse-engineer, decompile, modify, copy, redistribute, or frame the Noor360 software, assets, source code, or application packages.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Compliance:</strong> You must not use Noor360 in any way that violates local, national, or international laws, or in any manner that impairs the app's performance or servers.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "islamic-content",
      heading: "Islamic Content Disclaimer",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 serves authentic resources sourced from open verified repositories. However, digital resources cannot replace the guidance of scholarly verification.
          </p>
          <div className="my-2 bg-gold/5 border-l-2 border-gold p-5 rounded-r-2xl text-text leading-relaxed font-body">
            <span className="font-semibold text-gold block mb-1">✦ Islamic Content Disclaimer</span>
            The Islamic contents in Noor360—including Quran translations, Hadith collections, Duas, Adhkar, and AI Scholar responses—are provided for educational, study, and informational purposes only. They do not constitute formal religious rulings (fatwas). Always consult qualified Islamic scholars for personal religious matters.
          </div>
        </div>
      ),
    },
    {
      id: "ai-scholar",
      heading: "AI Scholar Terms",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            The Noor360 AI Scholar utilizes advanced large language models grounded in Islamic scholarly data. By using the AI Scholar, you acknowledge the following parameters:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Informational Bounds:</strong> AI Scholar responses are AI-generated. While grounded in classical sources, they are subject to synthetic language errors, misinterpretations, or algorithmic hallucinations.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">No Critical Decisions:</strong> Do not rely solely on AI Scholar outputs for formal legal fatwas, inheritance calculation disputes, medical health decisions, legal conflicts, or financial contracts.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Rate Limiting:</strong> Free tier accounts are limited to a maximum of 20 queries per day per device to prevent resource exhaustions.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Service Discretion:</strong> We reserve the right to alter, update, throttle, or suspend the AI Scholar service at any time without prior notice.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      heading: "Intellectual Property",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            We highly value the intellectual efforts behind religious data and software construction:
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Design & Software:</strong> The Noor360 application design, graphics, custom vectors, user experience, and source code are copyrighted under © 2025 Noor360.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Holy Text:</strong> The original Arabic Quranic text (Uthmani script) is in the public domain. Quran translations, Hadith arrays, and Tafseer books are subject to their respective open licenses or copyrights where applicable.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation",
      heading: "Limitation of Liability",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            NOOR360 IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF DATA ACCURACY, TIMELINESS, OR CONTINUOUS AVAILABILITY.
          </p>
          <p>
            IN NO EVENT SHALL NOOR360, ITS FOUNDERS, CONTRIBUTING DEVELOPERS, OR SPONSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      heading: "Changes to Terms",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. When terms are updated, we will notify users through an in-app notice or by updating the date at the top of this document.
          </p>
          <p>
            Your continued use of Noor360 following the posting of any changes to these Terms constitutes binding acceptance of those changes.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      heading: "Governing Law",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of Pakistan.
          </p>
          <p>
            Any legal action or dispute arising directly out of the use of our software shall be submitted exclusively to the jurisdiction of the competent courts of Karachi, Pakistan.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      heading: "Contact Us",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            If you have any queries, comments, or require legal clarifications regarding these Terms & Conditions, please contact our legal desk:
          </p>
          <div className="bg-bg-3 border border-gold-border/10 p-5 rounded-2xl flex flex-col gap-1 w-fit font-body">
            <span className="text-[10px] text-text-3 font-semibold uppercase tracking-wider">Legal Desk operations</span>
            <a href="mailto:legal@noor360.app" className="text-sm font-semibold text-gold hover:text-gold-2 transition-colors">
              legal@noor360.app
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Terms & Conditions"
      eyebrow="Terms of Service"
      lastUpdated="January 2025"
      sections={sections}
    />
  );
}
