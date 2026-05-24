"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Star, Clock, Heart, ArrowRight } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";
import AppStoreButtons from "@/components/shared/AppStoreButtons";

const ANCHORS = [
  { id: "quran", label: "📖 Quran Suite", href: "/features/quran" },
  { id: "hadith", label: "📜 Hadith Hub", href: "/features/hadith" },
  { id: "prayer", label: "🕌 Prayer Tools", href: "/features/prayer" },
  { id: "duas", label: "🤲 Duas & Dhikr", href: "/features/duas" },
];

const SECTIONS = [
  {
    id: "quran",
    pillar: "Pillar 01",
    name: "Quran Suite",
    icon: BookOpen,
    iconColor: "text-gold",
    iconBg: "bg-gold/15",
    desc: "Complete digital Quran reader containing root grammars, translations, and world-class reciters.",
    href: "/features/quran",
    features: [
      {
        title: "Translation Library",
        desc: "Access 21+ global translations including Saheeh International, Clear Quran, and more.",
        tags: ["21+ Langs", "Tafseers"],
      },
      {
        title: "Word-by-Word Analysis",
        desc: "Explore grammar, root vectors, translations, and audio pronunciation for every word.",
        tags: ["Grammar", "Audio"],
      },
      {
        title: "Audio Recitations",
        desc: "Gapless streaming by 15+ world-class Qaris with complete offline download support.",
        tags: ["Offline", "HQ Audio"],
      },
    ],
  },
  {
    id: "hadith",
    pillar: "Pillar 02",
    name: "Hadith Compendium",
    icon: Star,
    iconColor: "text-teal",
    iconBg: "bg-teal/15",
    desc: "Canonical Six books fully digitised with cross-referenced Arabic chains and gradings.",
    href: "/features/hadith",
    features: [
      {
        title: "Canonical Six Books",
        desc: "Full database of Sahih Bukhari, Muslim, Sunan Abu Dawud, and other canonical text libraries.",
        tags: ["Authentic", "Search"],
      },
      {
        title: "Chain Gradings",
        desc: "Side-by-side Arabic and English texts accompanied by academic grading vectors.",
        tags: ["Grading", "Chains"],
      },
      {
        title: "Study Collections",
        desc: "Create folders, bookmarks, and tag hadiths for personalized spiritual study logs.",
        tags: ["Folders", "Bookmarks"],
      },
    ],
  },
  {
    id: "prayer",
    pillar: "Pillar 03",
    name: "Prayer Tools",
    icon: Clock,
    iconColor: "text-gold",
    iconBg: "bg-gold/15",
    desc: "High-precision GPS prayer calculations with spiritual habit streaks and visual compass tools.",
    href: "/features/prayer",
    features: [
      {
        title: "GPS Timing Engine",
        desc: "Automatic worldwide prayer timings with beautiful notifications and lockscreen widgets.",
        tags: ["GPS Lock", "Adhan"],
      },
      {
        title: "Qibla Compass",
        desc: "Visual Qibla locator using sun direction maps and precise device orientation vectors.",
        tags: ["Compass", "Live map"],
      },
      {
        title: "Salah Habit Tracker",
        desc: "Log Fard, Sunnah, and Nawafil salahs dynamically inside a gorgeous streak calendar.",
        tags: ["Streaks", "Calendar"],
      },
    ],
  },
  {
    id: "duas",
    pillar: "Pillar 04",
    name: "Duas & Dhikr",
    icon: Heart,
    iconColor: "text-purple",
    iconBg: "bg-purple/15",
    desc: "Spiritual morning and evening supplications with memorization trackers and Tasbih widgets.",
    href: "/features/duas",
    features: [
      {
        title: "60+ Supplications",
        desc: "Morning, evening, travel, and sleep supplications with authentic grading classifications.",
        tags: ["Quranic", "Sunnah"],
      },
      {
        title: "Tactile Tasbih",
        desc: "Digital dhikr counter with custom target limits and subtle haptic vibration triggers.",
        tags: ["Haptics", "Counter"],
      },
      {
        title: "99 Names of Allah",
        desc: "Study translation, meanings, benefits, and listen to gorgeous name audio clips.",
        tags: ["Memorization", "Audio"],
      },
    ],
  },
];

export default function FeaturesPageContent() {
  const [activeSection, setActiveSection] = useState("quran");

  // Smooth scroll callback
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 130; // height of main navbar (68px) + sticky pills row height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scrollspy logic using IntersectionObserver
  useEffect(() => {
    const observers = SECTIONS.map((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec.id);
          }
        },
        {
          rootMargin: "-25% 0px -60% 0px", // triggers as the section crosses viewport focus area
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-text">
      
      {/* 1. PAGE HERO */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden border-b border-gold-border/10">
        <GeometricBg opacity={0.03} color="gold" />
        <GlowOrb color="gold" size="500px" top="-10%" left="50%" className="-translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
          <SectionLabel label="Complete Feature List" />
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight tracking-wide text-text">
            Everything Noor360 <span className="italic text-gold font-bold">offers</span>
          </h1>
          <p className="font-body text-base text-text-2 max-w-xl leading-relaxed mt-2">
            Delve into each detailed spiritual component structured to serve your Quranic, Hadith, Salah, and daily supplication needs.
          </p>
        </div>
      </section>

      {/* 2. PILLAR ANCHOR NAV (Sticky below main navbar) */}
      <div className="sticky top-[68px] z-40 bg-bg/95 backdrop-blur-xl border-b border-gold-border/20 py-4 shadow-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 flex justify-start sm:justify-center overflow-x-auto no-scrollbar gap-3">
          {ANCHORS.map((anchor) => {
            const isActive = activeSection === anchor.id;
            return (
              <button
                key={anchor.id}
                onClick={() => scrollTo(anchor.id)}
                className={`shrink-0 font-body text-xs font-semibold px-[18px] py-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(201,168,76,0.15)]"
                    : "bg-bg-2 border-gold-border/10 text-text-2 hover:border-gold/30 hover:text-gold"
                }`}
              >
                {anchor.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. FOUR PILLAR DEEP-DIVE SECTIONS */}
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col gap-24">
        {SECTIONS.map((sec, secIdx) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              id={sec.id}
              className={`flex flex-col gap-10 scroll-mt-36 ${
                secIdx !== 0 ? "border-t border-gold-border/10 pt-20" : ""
              }`}
            >
              {/* Pillar Large Header */}
              <div className="flex items-center gap-[18px]">
                <div className={`w-12 h-12 rounded-2xl ${sec.iconBg} ${sec.iconColor} border border-gold-border/20 flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-text-3 font-semibold">
                    {sec.pillar}
                  </span>
                  <h2 className="font-display text-2xl md:text-3.5xl font-semibold text-text mt-0.5">
                    {sec.name}
                  </h2>
                </div>
              </div>

              {/* 3-Column Features Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-bg-2 border border-gold-border/10 hover:border-gold/30 p-6 rounded-2xl flex flex-col justify-between h-[190px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,168,76,0.05)]"
                  >
                    <div>
                      <h3 className="font-body text-sm font-semibold text-text group-hover:text-gold-2">
                        {feat.title}
                      </h3>
                      <p className="font-body text-[13px] text-text-3 leading-[1.6] mt-2.5">
                        {feat.desc}
                      </p>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {feat.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-white/5 border border-white/10 text-[9px] text-text-2 px-2 py-0.5 rounded-full font-body"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Page Trigger */}
              <Link
                href={sec.href}
                className="inline-flex items-center gap-2 text-xs font-semibold text-gold w-fit hover:underline group pt-2"
              >
                <span>View full {sec.name} page</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* 4. BOTTOM CTA STRIP */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 text-center border-t border-gold-border/10">
        <GlowOrb color="gold" size="400px" bottom="-10%" left="50%" className="-translate-x-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide text-text leading-tight">
            Ready to start? <span className="italic text-gold font-bold">Download Noor360 free</span>
          </h2>
          <p className="font-body text-sm text-text-2 max-w-md leading-relaxed mt-1">
            Zero ads, zero trackers, absolute privacy. Elevate your spiritual consistency now.
          </p>
          <div className="mt-4">
            <AppStoreButtons />
          </div>
        </div>
      </section>

    </div>
  );
}
