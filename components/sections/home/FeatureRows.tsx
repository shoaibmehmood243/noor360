"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Volume2, Settings, ChevronRight, Compass, CheckCircle2 } from "lucide-react";

export default function FeatureRows() {
  return (
    <section className="relative w-full bg-bg py-24 overflow-hidden border-t border-gold-border/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-32">
        
        {/* ROW 1: QURAN READER (Visual Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Visual Block (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            {/* Mock Quran Card */}
            <div className="w-[320px] bg-bg-3 border border-gold-border/30 rounded-3xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[420px]">
              {/* Card Header & Sura Detail */}
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center font-display text-[9px] font-bold border border-gold-border/20">
                    ١
                  </div>
                  <span className="font-semibold text-text">Al-Fatihah</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-text-3">
                    Reading Mode
                  </span>
                  <Settings className="w-3.5 h-3.5 text-text-3 hover:text-gold transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Quranic Arabic Text */}
              <div className="flex flex-col gap-4 text-right my-auto">
                <span className="font-arabic text-gold-2 text-[20px] leading-[2] tracking-wide pointer-events-none select-none">
                  ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
                </span>
                <p className="font-body text-[11px] text-text-2 leading-relaxed text-left italic">
                  "[All] praise is [due] to Allah, Lord of the worlds —"
                </p>
              </div>

              {/* Footer Audio Bar and Options */}
              <div className="flex flex-col gap-3.5 border-t border-gold-border/10 pt-4 mt-auto">
                {/* Audio Playing Header */}
                <div className="flex justify-between items-center text-[10px]">
                  <div className="flex items-center gap-1.5 text-teal">
                    <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                    <span className="font-medium tracking-wide">Mishary Al-Afasy</span>
                  </div>
                  <span className="text-text-3">Verse 2 of 7</span>
                </div>
                {/* Simulated Audio timeline progress */}
                <div className="relative w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[45%] bg-gradient-to-r from-gold to-teal rounded-full" />
                </div>
                {/* Reading Mode Pills */}
                <div className="flex items-center justify-between gap-2 mt-1">
                  <button className="flex-1 bg-gold/10 hover:bg-gold/15 text-gold border border-gold-border/30 rounded-lg py-1.5 text-[10px] font-semibold flex items-center justify-center gap-1 transition-all">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Listen</span>
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-text-2 border border-white/10 rounded-lg py-1.5 text-[10px] font-medium transition-all">
                    Tafseer
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Block (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2"
          >
            {/* Tags Row */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold-border/20 text-[10px] font-bold uppercase tracking-wider">
                Quran
              </span>
              <span className="px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20 text-[10px] font-bold uppercase tracking-wider">
                Audio
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-text-2 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                Multilingual
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-text leading-tight">
              The <span className="italic text-gold font-bold">complete</span> Quran experience
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-text-2 leading-relaxed">
              Unlock a deeply visual and interactive digital library. Effortlessly read, study, and listen to the Holy Quran formatted inside a stunning dark minimalist sanctuary.
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-2.5 text-xs text-text-2 font-body">
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Word-by-word English translation & transliteration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> 16+ authoritative Tafseers for deep study
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Interactive gapless audio playback by 15+ Qaris
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Personalized bookmarking and verse notes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Stunning card layout sharing engine
              </li>
            </ul>

            {/* Link */}
            <Link
              href="/features/quran"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold mt-2 hover:underline"
            >
              <span>Explore Quran Suite</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>

        {/* ROW 2: PRAYER TOOLS (Visual Right, Text Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Text Block (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 order-1"
          >
            {/* Tags Row */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold-border/20 text-[10px] font-bold uppercase tracking-wider">
                Prayer
              </span>
              <span className="px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20 text-[10px] font-bold uppercase tracking-wider">
                Accuracy
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-text-2 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                Tracker
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-text leading-tight">
              Precision <span className="italic text-gold font-bold">prayer timing</span> & tracker
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-text-2 leading-relaxed">
              Align your day with customizable, highly precise GPS-calibrated prayer timings. Monitor your spiritual habits, streaks, and prayers inside clean visual dashboards.
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-2.5 text-xs text-text-2 font-body">
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Global GPS auto-calibration calculation models
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Interactive Qibla compass with sun direction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Spiritual habit calendar & Salah streak tracker
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Beautiful customizable Adhan audio triggers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Custom widgets for iOS lockscreen & Android
              </li>
            </ul>

            {/* Link */}
            <Link
              href="/features/prayer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold mt-2 hover:underline"
            >
              <span>Explore Prayer Tools</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Visual Block (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-2"
          >
            {/* Mock Prayer Visual Grid & Compass */}
            <div className="w-[320px] bg-bg-3 border border-gold-border/30 rounded-3xl p-5 shadow-2xl flex flex-col justify-between gap-5 h-[420px]">
              
              {/* Interactive Prayer 3x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "Fajr", time: "4:32 AM", active: false },
                  { name: "Dhuhr", time: "12:35 PM", active: true },
                  { name: "Asr", time: "3:48 PM", active: false },
                  { name: "Maghrib", time: "6:42 PM", active: false },
                ].map((pr) => (
                  <div
                    key={pr.name}
                    className={`rounded-2xl p-3 border transition-colors ${
                      pr.active
                        ? "bg-teal-dim border-teal text-text shadow-sm"
                        : "bg-bg border-gold-border/10 text-text-2"
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-wider block text-text-3 font-semibold">
                      {pr.name}
                    </span>
                    <span className="text-xs font-bold font-body block mt-0.5">{pr.time}</span>
                  </div>
                ))}
              </div>

              {/* Simulated Qibla Compass Circle */}
              <div className="flex-1 flex items-center justify-center my-2 relative">
                <div className="w-28 h-28 rounded-full border border-gold-border/30 flex items-center justify-center bg-bg relative">
                  {/* Compass pointer */}
                  <Compass className="w-10 h-10 text-gold animate-[spin_10s_linear_infinite]" />
                  <div className="absolute top-1.5 text-[8px] text-gold font-bold tracking-widest">N</div>
                  <div className="absolute bottom-1.5 text-[8px] text-text-3">128° SE</div>
                </div>
              </div>

              {/* Salah Tracker Streaks row */}
              <div className="border-t border-gold-border/10 pt-4 mt-auto">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-text-3">Spiritual streak tracker</span>
                  <span className="text-gold font-semibold">7 Days Streak</span>
                </div>
                <div className="flex items-center justify-between gap-1.5 mt-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span className="text-[8px] text-text-3 font-semibold uppercase">{day}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ROW 3: DUAS & DHIKR (Visual Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Visual Block (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            {/* Mock Tasbeeh Counter Card */}
            <div className="w-[320px] bg-bg-3 border border-gold-border/30 rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-[420px] relative overflow-hidden">
              
              {/* Dua Card stack placeholder behind it */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-bg border border-gold-border/10 rounded-2xl opacity-40 -z-10 shadow-sm" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] h-12 bg-bg border border-gold-border/10 rounded-2xl opacity-60 -z-10 shadow-sm" />

              {/* Main Tasbeeh panel */}
              <div className="flex flex-col items-center justify-between h-full bg-bg border border-gold-border/20 rounded-2xl p-5 z-10">
                <div className="flex flex-col items-center text-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold-border/20 text-[8px] font-bold tracking-widest">
                    TASBIH COUNTER
                  </span>
                  <span className="font-arabic text-gold-2 text-sm mt-1 leading-none pointer-events-none select-none">
                    سُبْحَانَ ٱللَّهِ
                  </span>
                  <span className="text-[10px] text-text-3 italic">Glory be to Allah</span>
                </div>

                {/* Big Display Counter */}
                <div className="flex flex-col items-center justify-center my-4">
                  <span className="font-display text-5xl font-semibold text-text leading-none">
                    33
                  </span>
                  <span className="text-[9px] text-text-3 font-semibold uppercase tracking-wider mt-1.5">
                    OF 33 completed
                  </span>
                </div>

                {/* Big Circular Counter Button */}
                <button className="w-16 h-16 rounded-full bg-gradient-to-r from-gold to-gold-2 hover:to-gold-3 border border-gold flex items-center justify-center text-bg shadow-lg shadow-gold/20 hover:scale-105 active:scale-95 transition-all duration-200">
                  <span className="font-body text-xs font-bold select-none uppercase tracking-wider">TAP</span>
                </button>
              </div>

            </div>
          </motion.div>

          {/* Text Block (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2"
          >
            {/* Tags Row */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold-border/20 text-[10px] font-bold uppercase tracking-wider">
                Supplications
              </span>
              <span className="px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20 text-[10px] font-bold uppercase tracking-wider">
                Tasbih
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-text-2 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                Names of Allah
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-text leading-tight">
              Enrich your <span className="italic text-gold font-bold">daily supplications</span>
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-text-2 leading-relaxed">
              Explore themed supplications for morning, evening, and various life circumstances. Perform Dhikr with a tactile, digital Tasbeeh tracking widget.
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-2.5 text-xs text-text-2 font-body">
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> 60+ themed Duas sourced from Quran & Sunnah
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Daily morning & evening Dhikr reminder flows
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Tactile digital Tasbeeh counter with haptic options
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> 99 Names of Allah with translation and audio
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✦</span> Offline-first sync ensures quick access anywhere
              </li>
            </ul>

            {/* Link */}
            <Link
              href="/features/duas"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold mt-2 hover:underline"
            >
              <span>Explore Duas & Dhikr</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
