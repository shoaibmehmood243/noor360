"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Languages, Sparkles, Volume2, Bookmark, CloudLightning, FileText, ChevronRight, Play } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";

const TRANSLATIONS = [
  { flag: "🇬🇧", lang: "English", translator: "Saheeh International" },
  { flag: "🇵🇰", lang: "Urdu", translator: "F. M. Jalandhari" },
  { flag: "🇸🇦", lang: "Arabic", translator: "Tafseer Al-Jalalayn" },
  { flag: "🇫🇷", lang: "French", translator: "M. Hamidullah" },
  { flag: "🇮🇩", lang: "Indonesian", translator: "Kemenag RI" },
  { flag: "🇹🇷", lang: "Turkish", translator: "Diyanet İşleri" },
  { flag: "🇮🇳", lang: "Hindi", translator: "M. Farooq Khan" },
  { flag: "🇧🇩", lang: "Bengali", translator: "Zohurul Hoque" },
];

const FEATURES = [
  {
    icon: Languages,
    title: "Word-by-Word Analysis",
    desc: "Hover over any word to inspect directly its Arabic root, grammar properties, and audio pronunciations.",
  },
  {
    icon: FileText,
    title: "16+ Tafseer Commentaries",
    desc: "Dive deep into historical contexts with side-by-side scholarly commentaries including Ibn Kathir and Al-Jalalayn.",
  },
  {
    icon: Volume2,
    title: "6 Renowned Reciters",
    desc: "Stunning audio recordings by As-Sudais, Abdul Basit, Alafasy, Husary, Ghamdi, and Shuraim.",
  },
  {
    icon: Bookmark,
    title: "Bookmarks & Notes",
    desc: "Keep notes for specific verses. Cloud-synced backups ensure your logs never get misplaced.",
  },
  {
    icon: CloudLightning,
    title: "Offline Reading",
    desc: "Download surahs, translations, and audio libraries to read and listen offline without any interruptions.",
  },
  {
    icon: BookOpen,
    title: "15-Line Mushaf View",
    desc: "Perfect visual representations mirroring standard Indo-Pak and Uthmani print layouts.",
  },
];

const MODES = [
  {
    title: "Normal Mode",
    desc: "Standard list layout presenting verse lines followed by translations.",
    preview: (
      <div className="flex flex-col gap-2.5 p-3 w-full bg-bg rounded-xl border border-gold-border/10 text-[9px]">
        <div className="text-right font-arabic text-gold leading-normal text-xs pointer-events-none">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ
        </div>
        <p className="text-text-3 italic font-body">In the name of Allah, Most Gracious...</p>
      </div>
    ),
  },
  {
    title: "Word-by-Word",
    desc: "Interactive tiles displaying individual root grammars under each word.",
    preview: (
      <div className="flex justify-end gap-1.5 p-3 w-full bg-bg rounded-xl border border-gold-border/10 text-[9px]">
        <div className="bg-bg-3 border border-gold-border/20 p-1.5 rounded text-right">
          <span className="font-arabic text-gold leading-none block">بِسْمِ</span>
          <span className="text-[7px] text-text-3 block mt-0.5 text-center">In name</span>
        </div>
        <div className="bg-bg-3 border border-gold-border/20 p-1.5 rounded text-right">
          <span className="font-arabic text-gold leading-none block">اللَّهِ</span>
          <span className="text-[7px] text-text-3 block mt-0.5 text-center">of Allah</span>
        </div>
      </div>
    ),
  },
  {
    title: "15-Line Mushaf",
    desc: "Beautiful page layout formatted for classic print recitation styles.",
    preview: (
      <div className="flex flex-col items-center justify-center p-2 w-full bg-bg rounded-xl border border-gold-border/10 min-h-[68px] overflow-hidden">
        {/* Miniature Quran Page Frame */}
        <div
          className="w-full border rounded-md p-1.5 flex flex-col gap-1 bg-bg-2"
          style={{ borderColor: 'var(--gold-border)' }}
        >
          {Array.from({ length: 9 }).map((_, idx) => {
            const widths = ["w-3/4", "w-11/12", "w-5/6", "w-4/5", "w-11/12", "w-3/4", "w-5/6", "w-11/12", "w-2/3"];
            return (
              <div
                key={idx}
                className={`h-[1.5px] ${widths[idx % widths.length]} rounded-full mx-auto`}
                style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }}
              />
            );
          })}
        </div>
      </div>
    ),
  },
];

const QARIS = [
  { name: "Mishary Rashid Alafasy", nameAr: "مشاري العفاسي", flag: "🇰🇼", comingSoon: false },
  { name: "Maher Al Muaiqly", nameAr: "ماهر المعيقلي", flag: "🇸🇦", comingSoon: false },
  { name: "Ali Al-Hudhaify", nameAr: "علي بن عبدالرحمن الحذيفي", flag: "🇸🇦", comingSoon: false },
  { name: "Abu Bakr Ash-Shaatree", nameAr: "أبو بكر الشاطري", flag: "🇸🇦", comingSoon: false },
  { name: "Abdul Rahman Al-Sudais", nameAr: "عبد الرحمن السديس", flag: "🇸🇦", comingSoon: true },
  { name: "Yasir al-Dawsari", nameAr: "ياسر الدوسري", flag: "🇸🇦", comingSoon: true },
];

export default function QuranPageContent() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24">
        <GlowOrb color="gold" size="500px" top="-10%" left="10%" opacity={0.7} />
        <GlowOrb color="teal" size="400px" bottom="5%" right="5%" opacity={0.5} />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <SectionLabel label="Quran Suite" />
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-text">
                The Quran, as it was meant to be{" "}
                <span className="italic text-gold font-bold">experienced</span>
              </h1>

              <div className="flex flex-col gap-1 my-1">
                <span className="font-arabic text-gold-2 text-3xl pointer-events-none select-none">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
                <span className="text-[10px] text-text-3 font-body tracking-wider italic">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </span>
              </div>

              <p className="font-body text-sm text-text-2 leading-relaxed max-w-xl">
                Experience a stunning digital sanctuary. Study root languages, scroll authoritative commentaries, toggle beautiful layouts, and listen to high-definition recitations.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="/download"
                  className="bg-gradient-to-r from-gold to-gold-2 text-bg font-body font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02]"
                >
                  Download Free App
                </Link>
              </div>
            </div>

            {/* Right Visual Quran Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[310px] bg-bg-2 border border-gold-border rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-[410px]">
                {/* Header details */}
                <div className="flex justify-between items-center text-[10px] text-text-3">
                  <span>SURA AL-MULK</span>
                  <span>67:1</span>
                </div>

                {/* Simulated verse lines */}
                <div className="flex flex-col gap-4 text-right my-auto border-y border-gold-border/10 py-6">
                  <span className="font-arabic text-gold-2 text-xl leading-[2] tracking-wide pointer-events-none select-none">
                    تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ
                  </span>
                  <p className="font-body text-[10px] text-text-2 leading-relaxed text-left italic">
                    "Blessed is He in whose hand is dominion..."
                  </p>
                </div>

                {/* Simulated Control panel */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1.5 text-teal text-[10px]">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Husary (Murattal)</span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gold/15 border border-gold-border/30 text-gold flex items-center justify-center hover:scale-105 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRANSLATION SHOWCASE */}
      <section className="relative w-full bg-bg-2 py-20 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-14">
            <SectionLabel label="Multilingual Study" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              21+ translations in your language
            </h2>
            <div className="h-[1px] w-16 bg-gold/30 mt-1" />
          </div>

          <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-4 lg:gap-4 no-scrollbar">
            {TRANSLATIONS.map((tr) => (
              <div
                key={tr.lang}
                className="snap-center shrink-0 min-w-[200px] lg:min-w-0 bg-bg-3 border border-gold-border/20 hover:border-gold/30 hover:bg-bg-4 p-5 rounded-2xl flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl select-none">{tr.flag}</span>
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-text">
                    {tr.lang}
                  </span>
                </div>
                <span className="font-body text-[11px] text-text-3 font-medium leading-none">
                  {tr.translator}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE GRID (3x2) */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Quran Capabilities" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Comprehensive Study Utilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-bg-2 border border-gold-border/10 hover:border-gold/30 p-6 rounded-2xl flex flex-col gap-3 h-[180px] transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-body text-sm font-semibold text-text mt-1">
                    {feat.title}
                  </h3>
                  <p className="font-body text-[13px] text-text-3 leading-[1.6]">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. READING MODES SECTION */}
      <section className="relative w-full bg-bg-2 py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Recitation Formats" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Flexible Reading Layouts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MODES.map((mode) => (
              <div
                key={mode.title}
                className="bg-bg-3 border border-gold-border/20 p-6 rounded-2xl flex flex-col justify-between h-[280px] hover:border-gold/30 transition-all duration-300 shadow-md"
              >
                <div>
                  <h3 className="font-body text-sm font-semibold text-text group-hover:text-gold-2">
                    {mode.title}
                  </h3>
                  <p className="font-body text-[12px] text-text-3 leading-relaxed mt-2">
                    {mode.desc}
                  </p>
                </div>
                {/* HTML screen preview mockup */}
                <div className="mt-6 border border-gold-border/10 p-2.5 rounded-2xl bg-bg-2 flex items-center justify-center">
                  {mode.preview}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECITERS SECTION */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Reciters Library" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Listen to the world's finest qaris
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QARIS.map((qari) => (
              <div
                key={qari.name}
                className="bg-bg-2 border border-gold-border/10 hover:border-gold/30 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 group shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs font-semibold text-text group-hover:text-gold-2 transition-colors">
                      {qari.name}
                    </span>
                    {qari.comingSoon && (
                      <span className="text-[9px] font-body bg-gold/10 text-gold px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider scale-90">
                        Soon
                      </span>
                    )}
                  </div>
                  <span className="font-arabic text-gold/60 text-[11px] leading-relaxed mt-1.5 pointer-events-none select-none">
                    {qari.nameAr}
                  </span>
                </div>
                <span className="text-2xl select-none">{qari.flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BREADCRUMBS & NAVIGATION ROUTING LINKS */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 border-t border-gold-border/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Breadcrumb links */}
        <div className="flex items-center gap-2.5 text-xs font-body text-text-3 font-semibold select-none">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-gold transition-colors">Features</Link>
          <span>/</span>
          <span className="text-gold font-bold">Quran Suite</span>
        </div>

        {/* Next Link to Hadith */}
        <Link
          href="/features/hadith"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline group"
        >
          <span>Next: Hadith Collection</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

    </div>
  );
}
