"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Apple, Smartphone, HelpCircle, ChevronDown } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";

const REQUIREMENTS = [
  {
    icon: Apple,
    platform: "iOS",
    desc: "iOS 15 or later. Compatible with iPhone and iPad. Optimised for iPhone 13 and above.",
  },
  {
    icon: Smartphone,
    platform: "Android",
    desc: "Android 9.0 (Pie) or later. Compatible with all Android mobile devices. 45MB download size.",
  },
  {
    icon: HelpCircle,
    platform: "Huawei",
    desc: "HarmonyOS 2.0 or later. Compatible with all newer Huawei and Honor devices.",
  },
];

const INCLUSIONS = [
  { icon: "📖", name: "Full Quran" },
  { icon: "📜", name: "All Hadith Books" },
  { icon: "🕌", name: "Prayer Times" },
  { icon: "🤲", name: "60+ Duas" },
  { icon: "🧭", name: "Qibla Compass" },
  { icon: "🔔", name: "Adhan Alerts" },
];

const FAQS = [
  {
    q: "Is Noor360 completely free?",
    a: "Yes — Noor360 is free to download and all core features are included at no cost. This includes the full Quran, all Hadith collections, prayer times, Qibla, and all duas.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. The Quran text and duas work fully offline once downloaded. Prayer times require internet on first load but are cached for 12 hours.",
  },
  {
    q: "What languages does the app support?",
    a: "Noor360 supports 8 languages: English, Urdu, Arabic, French, Bahasa Indonesia, Turkish, Hindi and Bangla.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can use Noor360 fully without an account. Creating an account allows you to sync bookmarks across devices.",
  },
  {
    q: "How accurate are the prayer times?",
    a: "Prayer times are calculated using GPS coordinates with your choice of 8 scholarly calculation methods.",
  },
  {
    q: "Which Quran translations are available?",
    a: "21+ translations including Sahih International, Maududi, Muhammad Asad, and translations in Urdu, French, Indonesian and more.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. See our Privacy Policy for full details. We do not sell or share your data.",
  },
  {
    q: "How do I report a bug or suggest a feature?",
    a: "Use the Contact page or email us at support@noor360.app",
  },
];

export default function DownloadPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 text-center">
        <GlowOrb color="gold" size="600px" top="-10%" left="50%" className="-translate-x-1/2" opacity={0.7} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <SectionLabel label="Free to download" />
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight tracking-wide text-text">
            Start your journey with <span className="italic text-gold font-bold">Noor360</span>
          </h1>
          <p className="font-body text-base text-text-2 max-w-xl leading-relaxed">
            All core features included. No account required. No ads. Ever.
          </p>

          {/* Three Large Premium Store Download Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[18px] mt-4">

            {/* APP STORE */}
            <a
              href="#"
              className="h-14 w-[240px] rounded-2xl bg-gradient-to-r from-gold to-gold-2 hover:from-gold-2 hover:to-gold-3 text-bg flex items-center justify-start px-[22px] gap-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(201,168,76,0.2)] group"
            >
              <Apple className="w-6 h-6 fill-current shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[9px] uppercase tracking-wider font-bold opacity-80 leading-none">
                  Free Download
                </span>
                <span className="text-sm font-bold mt-0.5 leading-none font-body">
                  iOS App Store
                </span>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a
              href="#"
              className="h-14 w-[240px] rounded-2xl bg-gradient-to-r from-teal to-[#26bba8] hover:from-[#26bba8] hover:to-teal text-bg flex items-center justify-start px-[22px] gap-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(45,212,191,0.2)] group"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M5.25 3.25c-.27 0-.52.07-.75.22l11.45 6.61 2.92-2.92-13.62-7.85c-.24-.14-.5-.22-.75-.22zM3.25 5v14c0 .35.1.67.27.95l7.98-7.98-7.98-7.98c-.17.28-.27.6-.27.95zm14.15 4.31L13.88 12.8l2.92 2.92 1.45-.84c.6-.35.97-.99.97-1.69s-.37-1.34-.97-1.69l-.85-.49zM5.25 20.75c.26 0 .52-.08.75-.22l13.62-7.85-2.92-2.92-11.45 6.61c.23.15.48.22.75.22z" />
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[9px] uppercase tracking-wider font-bold opacity-80 leading-none">
                  Free Download
                </span>
                <span className="text-sm font-bold mt-0.5 leading-none font-body">
                  Google Play
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 2. DEVICE REQUIREMENTS SECTION */}
      <section className="relative w-full bg-bg-2 py-20 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REQUIREMENTS.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.platform}
                  className="bg-bg-3 border border-gold-border/20 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-body text-base font-semibold text-text">
                    {req.platform} Requirements
                  </h3>
                  <p className="font-body text-xs text-text-3 leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Inclusions" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Everything included. Free.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-4xl mx-auto">
            {INCLUSIONS.map((inc) => (
              <div
                key={inc.name}
                className="bg-bg-2 border border-gold-border/10 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl select-none shrink-0">{inc.icon}</span>
                  <span className="font-body text-sm font-semibold text-text">
                    {inc.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-gold/10 border border-gold-border/20 px-2 py-0.5 rounded-full">
                  <Check className="w-3 h-3 text-gold" />
                  <span className="text-[9px] text-gold font-bold font-body">Free</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QR CODE INSTANT SCANNING STATION */}
      <section className="relative w-full bg-bg-2 py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Instant Access" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Scan to download instantly
            </h2>
          </div>

          {/* QR cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">

            {/* iOS */}
            <div className="bg-bg-3 border border-gold-border/20 p-6 rounded-3xl flex flex-col items-center gap-4 w-full sm:w-[260px] shadow-md hover:border-gold/30 transition-colors">
              <span className="font-body text-xs font-bold text-text">iOS App Store</span>
              <div className="w-[180px] h-[180px] rounded-2xl bg-white flex items-center justify-center relative p-3 group select-none shadow-inner overflow-hidden">
                {/* Simulated QR code layout */}
                <div
                  className="w-[140px] h-[140px] select-none pointer-events-none gap-[1.5px]"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(16, 1fr)',
                    gridTemplateRows: 'repeat(16, 1fr)',
                  }}
                >
                  {Array.from({ length: 256 }).map((_, i) => {
                    const R = Math.floor(i / 16);
                    const C = i % 16;
                    
                    // 1. Check if in Top-Left Anchor (0-6, 0-6)
                    const isTopLeft = R <= 6 && C <= 6;
                    if (isTopLeft) {
                      const r = R;
                      const c = C;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 2. Check if in Top-Right Anchor (0-6, 9-15)
                    const isTopRight = R <= 6 && C >= 9;
                    if (isTopRight) {
                      const r = R;
                      const c = C - 9;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 3. Check if in Bottom-Left Anchor (9-15, 0-6)
                    const isBottomLeft = R >= 9 && C <= 6;
                    if (isBottomLeft) {
                      const r = R - 9;
                      const c = C;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 4. Center cutout for the logo (5-10, 5-10)
                    const isInCenterCutout = R >= 5 && R <= 10 && C >= 5 && C <= 10;
                    if (isInCenterCutout) {
                      return <div key={i} className="w-full h-full opacity-0" />;
                    }

                    // 5. Standard QR data dots
                    const isDataSolid = (i * 7 + 13) % 5 === 0 || (i * 3 + 17) % 7 === 1 || (i % 8 === 0 && R % 2 === 0);
                    return (
                      <div
                        key={i}
                        className={`w-full h-full rounded-[1px] bg-slate-900 ${isDataSolid ? 'opacity-100' : 'opacity-0'}`}
                      />
                    );
                  })}
                </div>
                {/* Logo Badge in the center */}
                <div className="absolute w-[44px] h-[44px] rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5.5 h-5.5 text-slate-900 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.44 1.44-1.38 2.82M15.97 4.17c.66-.8 1.1-1.89.98-3.17-1.05.04-2.15.6-2.81 1.38-.56.66-1.05 1.76-.9 3.01 1.05.08 2.06-.51 2.73-1.22z" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] text-text-3 font-body">
                Point your iPhone camera
              </span>
            </div>

            {/* Android */}
            <div className="bg-bg-3 border border-gold-border/20 p-6 rounded-3xl flex flex-col items-center gap-4 w-full sm:w-[260px] shadow-md hover:border-gold/30 transition-colors">
              <span className="font-body text-xs font-bold text-text">Google Play</span>
              <div className="w-[180px] h-[180px] rounded-2xl bg-white flex items-center justify-center relative p-3 group select-none shadow-inner overflow-hidden">
                {/* Simulated QR code layout */}
                <div
                  className="w-[140px] h-[140px] select-none pointer-events-none gap-[1.5px]"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(16, 1fr)',
                    gridTemplateRows: 'repeat(16, 1fr)',
                  }}
                >
                  {Array.from({ length: 256 }).map((_, i) => {
                    const R = Math.floor(i / 16);
                    const C = i % 16;
                    
                    // 1. Check if in Top-Left Anchor (0-6, 0-6)
                    const isTopLeft = R <= 6 && C <= 6;
                    if (isTopLeft) {
                      const r = R;
                      const c = C;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 2. Check if in Top-Right Anchor (0-6, 9-15)
                    const isTopRight = R <= 6 && C >= 9;
                    if (isTopRight) {
                      const r = R;
                      const c = C - 9;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 3. Check if in Bottom-Left Anchor (9-15, 0-6)
                    const isBottomLeft = R >= 9 && C <= 6;
                    if (isBottomLeft) {
                      const r = R - 9;
                      const c = C;
                      const isSolid = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                      return (
                        <div
                          key={i}
                          className={`w-full h-full rounded-[1px] bg-slate-900 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
                        />
                      );
                    }

                    // 4. Center cutout for the logo (5-10, 5-10)
                    const isInCenterCutout = R >= 5 && R <= 10 && C >= 5 && C <= 10;
                    if (isInCenterCutout) {
                      return <div key={i} className="w-full h-full opacity-0" />;
                    }

                    // 5. Standard QR data dots
                    const isDataSolid = (i * 7 + 13) % 5 === 0 || (i * 3 + 17) % 7 === 1 || (i % 8 === 0 && R % 2 === 0);
                    return (
                      <div
                        key={i}
                        className={`w-full h-full rounded-[1px] bg-slate-900 ${isDataSolid ? 'opacity-100' : 'opacity-0'}`}
                      />
                    );
                  })}
                </div>
                {/* Logo Badge in the center */}
                <div className="absolute w-[44px] h-[44px] rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-slate-900 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.782 12 3.609 22.186c-.347-.323-.559-.79-.559-1.314V3.129c0-.524.212-.99.559-1.315zm11.233 9.174l3.194 1.834c.594.341.97.947.97 1.632 0 .684-.376 1.29-.97 1.631l-3.194 1.835-2.607-2.606 2.607-2.626zm-2.039 2.056L10.233 15.61 3.993 21.85c.294.097.608.15.935.15.452 0 .886-.123 1.258-.337l11.282-6.48-4.664-4.675zm-7.534-11.2c-.327 0-.641.053-.935.15l6.24 6.24 2.57-2.589-11.282-6.48C6.186 2.054 5.752 1.93 5.3 1.93z" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] text-text-3 font-body">
                Point your Android camera
              </span>
            </div>

          </div>

          <span className="block font-body text-xs text-text-3 mt-8">
            Or search <strong className="text-gold font-bold">"Noor360"</strong> on your device's native app store
          </span>
        </div>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Support" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Common questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-bg-2 border border-gold-border/15 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-bg-3 transition-colors"
                  >
                    <span className="font-body text-xs sm:text-sm font-semibold text-text">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Collapsible Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-gold-border/10">
                          <p className="font-body text-[13px] text-text-3 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
