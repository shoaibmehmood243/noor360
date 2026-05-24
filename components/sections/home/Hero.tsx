"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, Heart, Star, Sparkles } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import AppStoreButtons from "@/components/shared/AppStoreButtons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg text-text overflow-hidden flex items-center py-16">
      {/* Dynamic Backgrounds & Lighting */}
      <GeometricBg opacity={0.03} color="gold" />
      <GlowOrb color="gold" size="600px" top="10%" left="15%" opacity={0.8} />
      <GlowOrb color="teal" size="500px" bottom="15%" right="10%" opacity={0.6} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT/CENTER COLUMN: HERO CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 lg:col-span-7"
          >
            {/* 1. Animated Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-[18px] py-1.5 rounded-full bg-gold/10 border border-gold-border/30 text-xs font-semibold text-gold tracking-wide w-fit">
                <span className="text-gold animate-pulse">✦</span>
                <span>The complete Muslim companion app</span>
              </div>
            </motion.div>

            {/* 2. Arabic Bismillah Line */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5 w-fit">
              <span className="font-arabic text-gold-2 text-2xl tracking-normal leading-none pointer-events-none select-none">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </span>
              <span className="text-text-3 font-body text-xs italic tracking-wider leading-none">
                In the name of Allah, the Most Gracious, the Most Merciful
              </span>
            </motion.div>

            {/* 3. Luxurious Headline */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h1 className="font-display text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-wide text-text">
                Illuminate your
              </h1>
              <span className="font-display text-[clamp(62.4px,9.6vw,115.2px)] font-bold italic leading-[1.05] tracking-wider text-gold-2 mt-0">
                Deen.
              </span>
            </motion.div>

            {/* 4. Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[17px] text-text-2 font-light leading-relaxed max-w-lg"
            >
              Quran, Hadith, Prayer times, Duas — all in one beautifully crafted app, available in 8 languages.
            </motion.p>

            {/* 5. CTA Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <Link
                href="/download"
                className="flex items-center gap-2 bg-gradient-to-r from-gold to-gold-2 hover:from-gold-2 hover:to-gold-3 text-bg font-body font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,168,76,0.35)]"
              >
                <span className="text-bg/80">✦</span>
                <span>Download Free</span>
              </Link>
              <Link
                href="/features"
                className="flex items-center gap-2 bg-transparent hover:bg-white/5 border border-transparent text-text-2 hover:text-text font-body font-medium px-6 py-4 rounded-xl text-sm transition-all duration-300"
              >
                <span>Explore features</span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* 6. Store Buttons Row */}
            <motion.div variants={itemVariants} className="mt-2">
              <AppStoreButtons />
            </motion.div>

            {/* 7. Trust Line */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xs text-text-3 tracking-wider mt-1 select-none"
            >
              Free to download · No account required · iOS & Android
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN: FLOATING PHONE MOCKUP */}
          <div className="relative flex justify-center items-center lg:col-span-5 h-[560px]">

            {/* Soft gold glow underneath the phone */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[220px] h-[35px] bg-gold/12 blur-2xl rounded-full pointer-events-none" />

            {/* Floating Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [-12, 0, -12],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.4 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-[260px] h-[520px] rounded-[40px] border border-gold-border bg-bg-2 p-2.5 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Internal simulated App Screen */}
              <div className="w-full h-full rounded-[32px] bg-bg-3 border border-gold-border/10 p-4 flex flex-col justify-between overflow-hidden relative">

                {/* Simulated Screen Header */}
                <div className="flex flex-col gap-1 items-center text-center mt-2">
                  <span className="font-arabic text-gold text-xs leading-none">
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </span>
                  <div className="h-[1px] w-[50px] bg-gold-border/20 mt-1" />
                </div>

                {/* Simulated Verse of the Day Card */}
                <div className="bg-bg-2 border border-gold-border/20 rounded-2xl p-3 flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between items-center text-[8px] text-text-3">
                    <span className="font-bold tracking-widest text-gold/80">VERSE OF THE DAY</span>
                    <span>18:109</span>
                  </div>
                  <p className="font-arabic text-gold-2 text-[10px] leading-relaxed text-right">
                    قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي
                  </p>
                  <p className="font-body text-[8px] text-text-2 leading-relaxed italic">
                    "Say, 'If the sea were ink for the words of my Lord...'"
                  </p>
                </div>

                {/* Simulated Next Prayer Banner */}
                <div className="bg-teal-dim border border-teal/20 rounded-2xl p-3 flex items-center justify-between shadow-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[7px] text-teal/80 font-bold uppercase tracking-wider">NEXT PRAYER</span>
                    <span className="text-[11px] text-text font-bold leading-none mt-0.5">Asr in 1h 45m</span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Simulated Bottom Navigation Tab icons */}
                <div className="border-t border-gold-border/10 pt-2 pb-1.5 mt-2 flex items-center justify-around text-text-3">
                  <BookOpen className="w-3.5 h-3.5 text-gold" />
                  <Star className="w-3.5 h-3.5" />
                  <Clock className="w-3.5 h-3.5" />
                  <Heart className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
