"use client";

import React from "react";
import Link from "next/link";
import { Heart, CheckCircle2, ChevronRight, CornerDownRight, Play } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";
import AppStoreButtons from "@/components/shared/AppStoreButtons";

const DUA_CATEGORIES = [
  { emoji: "🌅", name: "Morning Adhkar", count: "12 Duas" },
  { emoji: "🌙", name: "Evening Adhkar", count: "15 Duas" },
  { emoji: "🍽", name: "Food & Eating", count: "6 Duas" },
  { emoji: "🛏", name: "Before Sleep", count: "8 Duas" },
  { emoji: "🌄", name: "Upon Waking", count: "5 Duas" },
  { emoji: "✈️", name: "Travel", count: "8 Duas" },
  { emoji: "🛡", name: "Protection", count: "10 Duas" },
  { emoji: "🏠", name: "Home", count: "4 Duas" },
  { emoji: "💆", name: "Stress & Anxiety", count: "6 Duas" },
  { emoji: "🙏", name: "Gratitude", count: "5 Duas" },
];

const SAMPLE_NAMES = [
  { num: "01", ar: "ٱلرَّحْمَٰنُ", tr: "Ar-Rahmaan", en: "The Exceedingly Merciful" },
  { num: "02", ar: "ٱلرَّحِيمُ", tr: "Ar-Raheem", en: "The Especially Merciful" },
  { num: "03", ar: "ٱلْمَلِكُ", tr: "Al-Malik", en: "The King and Sovereign" },
];

export default function DuasPageContent() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24">
        <GlowOrb color="purple" size="500px" top="-10%" left="15%" opacity={0.6} />
        <GlowOrb color="gold" size="450px" bottom="5%" right="10%" opacity={0.5} />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <SectionLabel label="Duas & Dhikr" />
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-text">
                Keep your <span className="italic text-gold font-bold">heart connected</span> to Allah
              </h1>
              <p className="font-body text-sm text-text-2 leading-relaxed max-w-xl">
                Access over 60+ authentic themed supplications sourced directly from the Holy Quran and prophetic Sunnah. Align your days with a visual digital Tasbih widget and memorise the 99 Names.
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

            {/* Right Visual Tasbeeh Hero Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[310px] bg-gradient-to-br from-bg-2 to-purple-dim/15 border border-purple/20 rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-[410px]">
                {/* Header details */}
                <div className="flex justify-between items-center text-[10px] text-text-3">
                  <span>SUBHANALLAH</span>
                  <span>LAP 1 OF 3</span>
                </div>

                {/* Animated counter display */}
                <div className="flex flex-col items-center justify-center my-auto gap-4">
                  <span className="font-arabic text-gold-2 text-xl leading-none pointer-events-none select-none">
                    سُبْحَانَ ٱللَّهِ
                  </span>
                  <div className="font-display text-6xl font-light text-text leading-none mt-1">
                    33
                  </div>
                  <span className="text-[9px] text-text-3 font-semibold uppercase tracking-wider">
                    TAP TO COUNT
                  </span>
                </div>

                {/* Circular trigger button */}
                <button className="w-16 h-16 rounded-full bg-gradient-to-r from-purple to-purple-2 border border-purple flex items-center justify-center text-text shadow-lg shadow-purple/20 mt-auto mx-auto hover:scale-105 transition-transform duration-200">
                  <span className="font-body text-xs font-bold uppercase tracking-wider">TAP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUA CATEGORIES SHOWCASE */}
      <section className="relative w-full bg-bg-2 py-20 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Daily Supplications" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Duas for every moment of your day
            </h2>
            <div className="h-[1px] w-16 bg-gold/30 mt-1" />
          </div>

          {/* 5x2 Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {DUA_CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="bg-bg-3 border border-gold-border/10 hover:border-gold/30 p-5 rounded-2xl flex flex-col items-center text-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <span className="text-3xl select-none">{cat.emoji}</span>
                <span className="font-body text-xs font-bold text-text mt-0.5 leading-none">
                  {cat.name}
                </span>
                <span className="text-[10px] text-gold font-bold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold-border/20">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TASBEEH COUNTER SECTION (Purple-tinted bg) */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="absolute inset-0 bg-purple-dim/[0.02] pointer-events-none -z-10" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Dhikr Companion" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Your digital Tasbeeh counter
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Mock Counter Panel */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-[320px] bg-gradient-to-br from-bg-2 to-purple-dim/10 border border-purple/20 p-6 rounded-3xl flex flex-col justify-between h-[360px] shadow-xl">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-text-3 uppercase tracking-wider font-semibold">DAILY DHIKR</span>
                  <span className="text-gold font-bold font-body">✓ Completed</span>
                </div>

                <div className="flex flex-col items-center gap-2 my-auto">
                  <span className="font-arabic text-gold-2 text-base leading-none">
                    أَسْتَغْفِرُ ٱللَّهَ
                  </span>
                  <div className="font-display text-5xl font-light text-text leading-none mt-1">
                    100
                  </div>
                  <span className="text-[8px] text-text-3 font-semibold uppercase tracking-widest mt-1">
                    Astaghfirullah completed
                  </span>
                </div>

                <div className="flex justify-between items-center mt-auto border-t border-gold-border/10 pt-4 text-[9px] text-text-3">
                  <span>Total today: 166</span>
                  <span>Streak: 5 days</span>
                </div>
              </div>
            </div>

            {/* Right Feature List */}
            <div className="lg:col-span-6 flex flex-col gap-6 font-body">
              <ul className="flex flex-col gap-4 text-sm text-text-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text block font-semibold">Auto-Cycles Laps</strong>
                    <span className="text-xs text-text-3 leading-relaxed mt-0.5 block">
                      Seamless transition triggers: SubhanAllah (33) → Alhamdulillah (33) → AllahuAkbar (34).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text block font-semibold">Haptic vibration feedback</strong>
                    <span className="text-xs text-text-3 leading-relaxed mt-0.5 block">
                      A subtle phone vibration clicks on every tap so you can recite with your eyes closed.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text block font-semibold">Dhikr Selector Pills</strong>
                    <span className="text-xs text-text-3 leading-relaxed mt-0.5 block">
                      Toggle 5 classic adhkar formulas instantly or input your own custom Arabic text.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text block font-semibold">Spiritual habit graphs</strong>
                    <span className="text-xs text-text-3 leading-relaxed mt-0.5 block">
                      Verify daily, weekly, and total logs parsed inside spiritual statistics panels.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 99 NAMES SECTION */}
      <section className="relative w-full bg-bg-2 py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Asmaul Husna" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Memorise the 99 Names of Allah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SAMPLE_NAMES.map((name) => (
              <div
                key={name.num}
                className="bg-bg-3 border border-gold-border/20 p-5 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:border-gold/30 hover:bg-bg-4 hover:-translate-y-0.5 shadow-md"
              >
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-gold font-bold font-body">{name.num}</span>
                  <span className="font-arabic text-gold-2 text-sm leading-none pointer-events-none select-none">
                    {name.ar}
                  </span>
                </div>
                <div className="flex flex-col text-left font-body mt-2">
                  <span className="text-xs font-semibold text-text">{name.tr}</span>
                  <span className="text-[10px] text-text-3 leading-none mt-1">{name.en}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Memorisation progress bar mock */}
          <div className="max-w-md mx-auto mt-12 bg-bg border border-gold-border/20 p-5 rounded-2xl flex flex-col gap-3.5 shadow-md">
            <div className="flex justify-between items-center text-[10px] font-body text-text-2">
              <span className="font-semibold">Memorisation progress</span>
              <span className="text-gold font-bold">42 of 99 memorised</span>
            </div>
            <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[42%] bg-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. BREADCRUMBS & NAVIGATION ROUTING LINKS */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 border-t border-gold-border/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Breadcrumb links */}
        <div className="flex items-center gap-2.5 text-xs font-body text-text-3 font-semibold select-none">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-gold transition-colors">Features</Link>
          <span>/</span>
          <span className="text-gold font-bold">Duas & Dhikr</span>
        </div>

        {/* Back Link to Features Overview */}
        <Link
          href="/features"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline group"
        >
          <span>See all features</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* 6. BOTTOM DOWNLOAD STRIP */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 text-center border-t border-gold-border/10">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide text-text leading-tight">
            Download Noor360 free today
          </h2>
          <div className="mt-2">
            <AppStoreButtons />
          </div>
        </div>
      </section>

    </div>
  );
}
