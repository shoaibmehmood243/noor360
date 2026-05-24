"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";

const PILLARS_DATA = [
  {
    icon: "📖",
    name: "Quran Suite",
    desc: "21+ translations, 16+ tafseers, word-by-word analysis and recitations from the world's finest qaris.",
    href: "/features/quran",
  },
  {
    icon: "📜",
    name: "Hadith Collection",
    desc: "All six major books digitised, fully searchable, with Arabic and authenticated translations.",
    href: "/features/hadith",
  },
  {
    icon: "🕌",
    name: "Prayer Tools",
    desc: "GPS prayer times, Qibla compass, Adhan notifications and a daily Salah tracker.",
    href: "/features/prayer",
  },
  {
    icon: "🤲",
    name: "Duas & Dhikr",
    desc: "60+ duas for every occasion, digital Tasbeeh counter, and 99 Names with memorisation tracking.",
    href: "/features/duas",
  },
];

export default function Pillars() {
  return (
    <section className="relative w-full bg-bg-2 py-24 border-t border-gold-border/10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <SectionLabel label="Spiritual Pillars" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide text-text leading-tight">
            Everything you need for your{" "}
            <span className="italic text-gold font-bold">Islamic journey</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-2" />
          <p className="font-body text-sm text-text-2 max-w-xl leading-relaxed mt-1">
            Carefully curated, premium companion suites structured to align with daily worship patterns.
          </p>
        </div>

        {/* PILLARS GRID WITH HAIRLINE SEPARATORS TRICK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-border/20 overflow-hidden rounded-2xl border border-gold-border/20 shadow-xl">
          {PILLARS_DATA.map((pillar, idx) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-bg p-9 flex flex-col justify-between h-[320px] transition-all duration-300 relative border-l-2 border-transparent hover:border-gold hover:bg-bg-4"
            >
              {/* Pillar Body Content */}
              <div>
                <span className="text-[28px] select-none block mb-6">
                  {pillar.icon}
                </span>
                <h3 className="font-display text-24px font-normal text-text group-hover:text-gold-2 transition-colors duration-300">
                  {pillar.name}
                </h3>
                <p className="font-body text-[13px] text-text-3 leading-[1.6] mt-3 max-w-[240px]">
                  {pillar.desc}
                </p>
              </div>

              {/* Dynamic Hover Triggered Link */}
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
              >
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
