"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";

const LANGUAGES_DATA = [
  { flag: "🇬🇧", name: "English" },
  { flag: "🇵🇰", name: "اردو" },
  { flag: "🇸🇦", name: "عربي" },
  { flag: "🇫🇷", name: "Français" },
  { flag: "🇮🇩", name: "Bahasa" },
  { flag: "🇹🇷", name: "Türkçe" },
  { flag: "🇮🇳", name: "हिन्दी" },
  { flag: "🇧🇩", name: "বাংলা" },
];

export default function Languages() {
  return (
    <section className="relative w-full bg-bg py-24 border-t border-gold-border/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <SectionLabel label="Global Reach" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide text-text leading-tight">
            Your language, <span className="italic text-gold font-bold">your faith</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-2" />
          <p className="font-body text-sm text-text-2 max-w-xl leading-relaxed mt-1">
            Noor360 speaks your language. Fully translated and localized in 8 global languages from day one.
          </p>
        </div>

        {/* LANGUAGES ROW (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto pb-4 lg:pb-0 gap-4 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-4 lg:gap-4 no-scrollbar">
          {LANGUAGES_DATA.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="snap-center shrink-0 min-w-[200px] lg:min-w-0 bg-bg-2 border border-gold-border/10 hover:border-gold/30 hover:bg-bg-3 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group hover:-translate-y-0.5"
            >
              {/* Flag Emoji */}
              <span className="text-3xl select-none group-hover:scale-110 transition-transform duration-300">
                {lang.flag}
              </span>
              {/* Language Name */}
              <span className="font-body text-sm font-semibold text-text group-hover:text-gold-2 transition-colors">
                {lang.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
