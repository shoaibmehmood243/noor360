import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/ThemeContext";

// Define the requested premium fonts and set up CSS variables matching our design system tokens
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor360 | Premium Spiritual Companion App & Web Suite",
  description: "Experience the Quran, authentic Hadiths, precise Prayer Times, and Tracker utilities beautifully tailored in an elegant modern framework. Elevate your spiritual routine with Noor360.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "selection:bg-gold/25 selection:text-gold",
        cormorant.variable,
        outfit.variable,
        amiri.variable
      )}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var saved = localStorage.getItem('noor360_theme');
              if (saved === 'light') {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              }
            } catch (e) {}
          `,
        }}
      />
      <body className="bg-bg text-text font-body antialiased min-h-screen flex flex-col justify-between transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-[68px]">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
