"use client";

import React from "react";
import Link from "next/link";
import { Clock, Navigation, Bell, BarChart2, Compass, CheckCircle2, ChevronRight, CornerDownRight } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";

const CALC_METHODS = [
  { short: "MWL", long: "Muslim World League" },
  { short: "ISNA", long: "Islamic Society of North America" },
  { short: "Egypt", long: "Egyptian General Authority of Survey" },
  { short: "Makkah", long: "Umm al-Qura University, Makkah" },
  { short: "Karachi", long: "University of Islamic Sciences, Karachi" },
  { short: "Tehran", long: "Institute of Geophysics, University of Tehran" },
  { short: "Shia", long: "Shia Ithna-Ashari" },
  { short: "Jafari", long: "Jafari Method" },
];

export default function PrayerPageContent() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24">
        <GlowOrb color="teal" size="500px" top="-10%" left="10%" opacity={0.6} />
        <GlowOrb color="gold" size="450px" bottom="5%" right="10%" opacity={0.5} />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <SectionLabel label="Prayer Tools" />
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-text">
                Never miss a prayer <span className="italic text-gold font-bold">again</span>
              </h1>
              <p className="font-body text-sm text-text-2 leading-relaxed max-w-xl">
                Get GPS-accurate global prayer calculations immediately. Monitor your spiritual habits, verify Qibla angles, and receive customizable silent or vocal Adhan notifications.
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

            {/* Right Visual Prayer Dashboard Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[310px] bg-bg-2 border border-gold-border rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-[410px]">
                {/* Simulated Location */}
                <div className="flex justify-between items-center text-[10px] text-text-3">
                  <span>📍 London, UK</span>
                  <span className="font-bold text-teal">NEXT: ASR</span>
                </div>

                {/* Simulated Prayer timings list */}
                <div className="flex flex-col gap-2 my-auto border-y border-gold-border/10 py-5">
                  <div className="flex justify-between items-center text-[11px] text-text-2">
                    <span>Fajr</span>
                    <span>4:32 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-text-2">
                    <span>Dhuhr</span>
                    <span>12:35 PM</span>
                  </div>
                  {/* Active next prayer */}
                  <div className="flex justify-between items-center text-[12px] bg-teal-dim border border-teal/20 text-text px-3 py-2 rounded-xl">
                    <span className="font-bold">Asr</span>
                    <div className="flex items-center gap-1.5 font-bold">
                      <span>3:48 PM</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-text-2">
                    <span>Maghrib</span>
                    <span>6:42 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-text-2">
                    <span>Isha</span>
                    <span>8:15 PM</span>
                  </div>
                </div>

                {/* Countdown & timeline header */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-text-3">Asr in 1h 42m</span>
                    <span className="text-teal font-semibold">68% daily completed</span>
                  </div>
                  <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[68%] bg-teal rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES IN A 2x2 LARGE CARD GRID */}
      <section className="relative w-full bg-bg-2 py-20 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 — Prayer Times */}
            <div className="bg-bg-3 border border-gold-border/20 p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-md">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold border border-gold-border/20 flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">GPS-accurate times</h3>
                <p className="font-body text-xs text-text-2 leading-relaxed">
                  Calibrate calculations directly based on your localized GPS coordinates. Configure high-precision timings with 8 authorized world calculation models.
                </p>
              </div>
              
              {/* Pill list inside card */}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {CALC_METHODS.slice(0, 5).map((m) => (
                  <span key={m.short} className="bg-white/5 border border-white/10 text-[9px] text-text-3 px-2 py-0.5 rounded-full font-body">
                    {m.short}
                  </span>
                ))}
                <span className="text-[9px] text-gold font-body font-bold py-0.5 px-1">+3 more</span>
              </div>
            </div>

            {/* Card 2 — Qibla Compass */}
            <div className="bg-bg-3 border border-gold-border/20 p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-md">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold border border-gold-border/20 flex items-center justify-center shadow-sm">
                  <Navigation className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">Live Qibla Locator</h3>
                <p className="font-body text-xs text-text-2 leading-relaxed">
                  Real-time magnetometer-based direction calibration. An interactive vector compass details bearing alignments based on standard magnetic and sun paths.
                </p>
              </div>

              {/* Mock Compass SVG visual */}
              <div className="mt-6 flex justify-center">
                <div className="w-20 h-20 rounded-full border border-gold-border/30 flex items-center justify-center bg-bg relative">
                  <Compass className="w-8 h-8 text-gold animate-[spin_8s_linear_infinite]" />
                  <div className="absolute top-1 text-[7px] text-gold font-bold">N</div>
                  {/* Arrow pointing NW */}
                  <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-gold rotate-45" />
                </div>
              </div>
            </div>

            {/* Card 3 — Adhan Notifications */}
            <div className="bg-bg-3 border border-gold-border/20 p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-md">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold border border-gold-border/20 flex items-center justify-center shadow-sm">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">Adhan Notifications</h3>
                <p className="font-body text-xs text-text-2 leading-relaxed">
                  Receive visual prompts immediately as the prayer boundary crosses. Personalize notifications with gorgeous Adhan audio recordings from Makkah, Madinah, or silent tones.
                </p>
              </div>

              {/* Mock phone notification card */}
              <div className="mt-6 bg-bg border border-gold-border/20 rounded-2xl p-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Bell className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold text-text uppercase tracking-wider">Noor360</span>
                  <span className="text-[10px] text-text-2 leading-none mt-0.5">Time for Asr (3:48 PM) in London</span>
                </div>
              </div>
            </div>

            {/* Card 4 — Salah Tracker */}
            <div className="bg-bg-3 border border-gold-border/20 p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-md">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold border border-gold-border/20 flex items-center justify-center shadow-sm">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">Salah Tracker</h3>
                <p className="font-body text-xs text-text-2 leading-relaxed">
                  Log Fard and Sunnah daily prayers inside spiritual tracking dashboards. Track your consistencies using continuous daily Salah streak counters.
                </p>
              </div>

              {/* Mock Salah Tracker Visual */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px]">
                  {/* 5 prayer status circles */}
                  <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-dim border border-teal text-teal flex items-center justify-center text-[6px]">✓</div>
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-dim border border-teal text-teal flex items-center justify-center text-[6px]">✓</div>
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-dim border border-teal text-teal flex items-center justify-center text-[6px]">✓</div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white/5 border border-white/10" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white/5 border border-white/10" />
                  </div>
                  <span className="text-gold font-bold font-body">🔥 14 Days Streak</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CALCULATION METHODS SECTION */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Authorized Standards" />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              8 calculation methods supported
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {CALC_METHODS.map((method) => (
              <div
                key={method.short}
                className="bg-bg-2 border border-gold-border/10 hover:border-gold/30 hover:bg-bg-3 px-[18px] py-3 rounded-2xl flex flex-col gap-1 transition-all duration-300 hover:-translate-y-0.5 group cursor-default"
              >
                <span className="font-body text-xs font-bold text-gold group-hover:text-gold-2">
                  {method.short}
                </span>
                <span className="font-body text-[10px] text-text-3 leading-none">
                  {method.long}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BREADCRUMBS & NAVIGATION ROUTING LINKS */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 border-t border-gold-border/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Breadcrumb links */}
        <div className="flex items-center gap-2.5 text-xs font-body text-text-3 font-semibold select-none">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-gold transition-colors">Features</Link>
          <span>/</span>
          <span className="text-gold font-bold">Prayer Tools</span>
        </div>

        {/* Next Link to Duas */}
        <Link
          href="/features/duas"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline group"
        >
          <span>Next: Duas & Dhikr</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

    </div>
  );
}
