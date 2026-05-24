import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Noor360 | Privacy & Security",
  description: "Noor360 is committed to absolute privacy. Learn how we safeguard your personal coordinates and preferences locally.",
  alternates: {
    canonical: "https://noor360.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Noor360 | Privacy & Security",
    description: "Noor360 is committed to absolute privacy. Learn how we safeguard your personal coordinates and preferences locally.",
    url: "https://noor360.app/privacy",
    siteName: "Noor360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Noor360",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Noor360 | Privacy & Security",
    description: "Noor360 is committed to absolute privacy. Learn how we safeguard your personal coordinates and preferences locally.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      heading: "Introduction",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Noor360 mobile application and web services.
          </p>
          <p>
            We believe that a companion for your spiritual journey must be built on a foundation of absolute trust and transparency. We design our systems to keep you in full control of your personal data at all times.
          </p>
          <div className="my-2 bg-gold/5 border-l-2 border-gold p-5 rounded-r-2xl text-text leading-relaxed font-body">
            <span className="font-semibold text-gold block mb-1">✦ Essential Notice</span>
            Noor360 does not sell, lease, or monetize your personal data to any third party under any circumstances. Ever.
          </div>
        </div>
      ),
    },
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            To provide our Islamic suite features, we collect only the minimum amount of data required. This is categorised into the following items:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2 mt-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Device Identifier:</strong> We generate an anonymous, randomized Device ID locally on your system. This allows us to personalize your settings and apply standard rate limiting to the AI Scholar feature without identifying you personally.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Location Data (GPS):</strong> To calculate precise local prayer times and Qibla compass directions, we request access to your device's geographical coordinates. This calculation occurs entirely on your local device. The coordinates are never uploaded to or stored on our servers.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Usage Preferences:</strong> Settings such as selected Quran translations, Tafseer commentaries, preferred reciters, audio volumes, and interface languages are stored locally on your device.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Bookmarks and Notes:</strong> Any verses, hadiths, or supplications you mark, alongside custom reflections or notes you take, are stored locally by default. These are only uploaded to our cloud servers if you explicitly choose to create an account to sync your progress across devices.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-use",
      heading: "How We Use Your Information",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            We process the collected data for specific, limited purposes aligned with delivering our features:
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-2.5">
              <span className="text-gold shrink-0">✦</span>
              <span>Calculating highly accurate, GPS-based local prayer times and Qibla compass angles.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-gold shrink-0">✦</span>
              <span>Remembering your translation selections, font scale choices, and audio recitation volumes.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-gold shrink-0">✦</span>
              <span>Administering strict and fair rate limits to protect our AI Scholar resources from malicious activity.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-gold shrink-0">✦</span>
              <span>Improving app speed and reliability using anonymised, aggregated diagnostic analytics.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-storage",
      heading: "Data Storage & Security",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 follows a strict "local-first" data design. The overwhelming majority of your active data—including bookmarks, reading progress, and customized notes—lives safely inside your physical device's secure sandbox storage.
          </p>
          <p>
            In the event that you choose to sync your data by registering a secure account:
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <span>All user data is encrypted at rest using industry-standard AES-256 protocols.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <span>Our primary servers are hosted securely inside data centers located in the European Union (EU).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <span>We utilize Transport Layer Security (TLS) to encrypt all communications between the Noor360 app and our API servers.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-parties",
      heading: "Third-Party Services",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            We leverage a select group of secure third-party services to deliver key data APIs. We ensure that no personally identifiable information (PII) is shared with these vendors:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Anthropic Claude API:</strong> Powers our AI Scholar tool. Only the specific religious query text is sent to the LLM. No Device IDs, locations, or account credentials are shared.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Aladhan API:</strong> Provides global astronomical calculation models. Location coordinates may be shared anonymously to retrieve offline prayer timetables. Learn more at the{" "}
                <a href="https://aladhan.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-2 hover:underline transition-colors font-medium">
                  Aladhan website
                </a>.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">alquran.cloud:</strong> Serves full Arabic texts, translations, and tafseers. No personal data is sent to this database service. Refer to their policy details on{" "}
                <a href="https://alquran.cloud" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-2 hover:underline transition-colors font-medium">
                  alquran.cloud
                </a>.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      heading: "Your Rights",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Regardless of where you reside, we support robust, GDPR and CCPA-aligned privacy controls. You hold full rights to manage your data:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Right to Access:</strong> You can view all preferences and locally cached contents directly in the settings dashboard at any time.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Right to Delete:</strong> You can purge all local caching, settings, and local database rows with a single tap using the "Clear All Data" action inside our Settings menu.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Right to Export:</strong> You can export your bookmarked verses, notes, and progress logs in structured JSON format if you wish to migrate your data elsewhere.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Opt-Out rights:</strong> You can opt-out of anonymised analytic monitoring inside the privacy settings screen at any time.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "children",
      heading: "Children's Privacy",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 is structured to be suitable for all ages and family members. We do not knowingly collect, store, or solicit personal information from children under the age of 13.
          </p>
          <p>
            If we learn that we have accidentally collected personal data from a child under 13, we will delete that information immediately from our database logs.
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
            If you have any questions or concerns regarding our privacy policies, data security, or your rights, please reach out to us at:
          </p>
          <div className="bg-bg-3 border border-gold-border/10 p-5 rounded-2xl flex flex-col gap-1 w-fit font-body">
            <span className="text-[10px] text-text-3 font-semibold uppercase tracking-wider">Privacy operations</span>
            <a href="mailto:privacy@noor360.app" className="text-sm font-semibold text-gold hover:text-gold-2 transition-colors">
              privacy@noor360.app
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      heading: "Cookie Policy",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Noor360 uses only essential, first-party cookies to support your active session preferences. We do not track you across other websites or construct personal analytics:
          </p>
          <ul className="flex flex-col gap-3.5 pl-2 mt-2">
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Session Cookies:</strong> Maintain your selected language preferences, font size settings, and active Quran translation settings during your session.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold shrink-0 mt-1">✦</span>
              <div>
                <strong className="text-text font-semibold">Consent Cookie:</strong> Remembers your cookie preference choice. This is stored directly in your browser's local sandbox storage (<code className="text-gold bg-gold/5 px-1.5 py-0.5 rounded text-xs">localStorage</code>) and is not shared with any database tracking servers.
              </div>
            </li>
          </ul>
          <p className="mt-2 text-xs text-text-3">
            We do not use tracking cookies, advertising cookies, or third-party analytics cookies. You can clear all cached cookies at any time inside your browser's settings panels.
          </p>
        </div>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      eyebrow="Privacy & Security"
      lastUpdated="January 2025"
      sections={sections}
    />
  );
}
