"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  delayIndex: number;
}

function StatCard({ target, suffix, label, delayIndex }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const duration = 1500; // Count-up over 1.5s
      const frameDuration = 16; // ~60fps
      const totalFrames = duration / frameDuration;
      const increment = end / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, frameDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delayIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-bg py-10 px-6 flex flex-col justify-center items-center text-center"
    >
      <div className="font-display text-[64px] font-light text-gold-2 leading-none flex items-baseline gap-2 select-none">
        <span>{count}</span>
        {suffix && (
          <span className="text-[24px] text-text-3 font-medium leading-none">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-[13px] text-text-3 font-body mt-3.5 uppercase tracking-wider font-semibold">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full bg-bg-2 py-16 border-t border-gold-border/10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* STATS HAIRLINE GRID SEPARATOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-border/20 overflow-hidden rounded-2xl border border-gold-border/20 shadow-lg">
          <StatCard
            target={114}
            suffix="سور"
            label="Complete Quranic Surahs"
            delayIndex={0}
          />
          <StatCard
            target={21}
            suffix="+"
            label="Quran Translations"
            delayIndex={1}
          />
          <StatCard
            target={6}
            suffix="كتب"
            label="Authentic Hadith Collections"
            delayIndex={2}
          />
          <StatCard
            target={8}
            suffix="Langs"
            label="Languages Supported"
            delayIndex={3}
          />
        </div>

      </div>
    </section>
  );
}
