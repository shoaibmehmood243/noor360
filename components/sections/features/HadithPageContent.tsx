"use client";

import React from "react";
import Link from "next/link";
import { Search, Sparkles, Bookmark, Share2, Heart, Play, ChevronRight, CornerDownRight } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";

const BOOKS = [
  {
    name: "Sahih al-Bukhari",
    nameAr: "صحيح البخاري",
    author: "Imam al-Bukhari",
    century: "9th Century CE",
    count: "7,563 Hadiths",
    borderColor: "border-[#C9A84C]", // Gold
    bgHover: "hover:bg-[#C9A84C]/5",
  },
  {
    name: "Sahih Muslim",
    nameAr: "صحيح مسلم",
    author: "Imam Muslim",
    century: "9th Century CE",
    count: "7,500 Hadiths",
    borderColor: "border-[#2DD4BF]", // Teal
    bgHover: "hover:bg-[#2DD4BF]/5",
  },
  {
    name: "Sunan Abi Dawud",
    nameAr: "سنن أبي داود",
    author: "Imam Abu Dawud",
    century: "9th Century CE",
    count: "5,274 Hadiths",
    borderColor: "border-[#3B82F6]", // Blue
    bgHover: "hover:bg-[#3B82F6]/5",
  },
  {
    name: "Jami' at-Tirmidhi",
    nameAr: "جامع الترمذي",
    author: "Imam at-Tirmidhi",
    century: "9th Century CE",
    count: "4,400 Hadiths",
    borderColor: "border-[#F59E0B]", // Amber
    bgHover: "hover:bg-[#F59E0B]/5",
  },
  {
    name: "Sunan an-Nasa'i",
    nameAr: "سنن النسائي",
    author: "Imam an-Nasa'i",
    century: "9th Century CE",
    count: "5,758 Hadiths",
    borderColor: "border-[#10B981]", // Green
    bgHover: "hover:bg-[#10B981]/5",
  },
  {
    name: "Sunan Ibn Majah",
    nameAr: "سنن ابن ماجه",
    author: "Imam Ibn Majah",
    century: "9th Century CE",
    count: "4,341 Hadiths",
    borderColor: "border-[#F43F5E]", // Rose
    bgHover: "hover:bg-[#F43F5E]/5",
  },
];

const SEARCH_RESULTS = [
  {
    book: "Sahih al-Bukhari #1",
    narrator: "Narrated by Umar bin Al-Khattab:",
    text: '“Actions are judged by <span class="text-gold font-semibold underline decoration-gold/50">intentions</span>, and every person will get what he intended...”',
    textAr: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...",
  },
  {
    book: "Sahih Muslim #1907",
    narrator: "Narrated by Abu Musa al-Ash'ari:",
    text: '“He who fights so that Allah\'s Word should be superior, fights with a sincere <span class="text-gold font-semibold underline decoration-gold/50">intention</span> in the cause of Allah.”',
    textAr: "مَنْ قَاتَلَ لِتَكُونَ كَلِمَةُ اللَّهِ...",
  },
  {
    book: "Sunan an-Nasa'i #3437",
    narrator: "Narrated by Al-Qasim:",
    text: '“A man is rewarded only according to the <span class="text-gold font-semibold underline decoration-gold/50">intentions</span> he established in his heart...”',
    textAr: "إِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى...",
  },
];

export default function HadithPageContent() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24">
        <GlowOrb color="purple" size="500px" top="-10%" left="15%" opacity={0.5} />
        <GlowOrb color="gold" size="450px" bottom="5%" right="10%" opacity={0.6} />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <SectionLabel label="Hadith Collection" />
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-text">
                Centuries of <span className="italic text-gold font-bold">prophetic wisdom</span>, at your fingertips
              </h1>
              <p className="font-body text-sm text-text-2 leading-relaxed max-w-xl">
                Access the complete canonical libraries of prophetic narrations. Verify grading models, search by keywords instantly, and study authentic collections in an ad-free interface.
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

            {/* Right Visual Hadith Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[310px] bg-bg-2 border border-gold-border rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-[410px]">
                {/* Book Badge */}
                <div className="flex justify-between items-center text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-gold/10 border border-gold-border/20 text-gold font-bold">
                    SAHIH AL-BUKHARI
                  </span>
                  <span className="text-text-3 font-semibold">HADITH 1</span>
                </div>

                {/* Hadith Text Box */}
                <div className="flex flex-col gap-4 text-right my-auto border-y border-gold-border/10 py-5">
                  <span className="font-arabic text-gold-2 text-base leading-[2] tracking-wide pointer-events-none select-none">
                    إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ
                  </span>
                  <div className="text-left font-body text-[10px] text-text-2 leading-relaxed mt-1">
                    <p className="text-text-3 font-semibold mb-1">Narrated by Umar bin Al-Khattab:</p>
                    <p className="italic">"Actions are judged by intentions..."</p>
                  </div>
                </div>

                {/* Action Row Icons */}
                <div className="flex justify-between items-center mt-auto border-t border-gold-border/10 pt-4 text-text-3">
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-4 h-4 hover:text-gold cursor-pointer transition-colors" />
                    <Share2 className="w-4 h-4 hover:text-gold cursor-pointer transition-colors" />
                    <Heart className="w-4 h-4 hover:text-gold cursor-pointer transition-colors" />
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gold/10 border border-gold-border/20 text-gold flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIX BOOKS SECTION */}
      <section className="relative w-full bg-bg-2 py-20 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Canonical Libraries" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              All six authentic collections
            </h2>
            <div className="h-[1px] w-16 bg-gold/30 mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKS.map((book) => (
              <div
                key={book.name}
                className={`bg-bg-3 border border-gold-border/10 border-l-4 ${book.borderColor} ${book.bgHover} p-6 rounded-2xl flex flex-col justify-between h-[200px] transition-all duration-300 shadow-md hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-body text-sm font-semibold text-text">
                      {book.name}
                    </h3>
                    <span className="font-arabic text-gold/80 text-xs pointer-events-none select-none shrink-0">
                      {book.nameAr}
                    </span>
                  </div>
                  <p className="font-body text-[11px] text-text-3 mt-2">
                    {book.author} · <span className="italic">{book.century}</span>
                  </p>
                </div>
                
                <span className="font-body text-[12px] font-bold text-gold-2">
                  {book.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES ROW (3 CARDS) */}
      <section className="relative w-full py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-bg-2 border border-gold-border/10 p-6 rounded-2xl flex flex-col gap-3 h-[180px] hover:border-gold/30 transition-all duration-300 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center">
                <Search className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-body text-sm font-semibold text-text mt-1">Full-Text Search</h3>
              <p className="font-body text-[12px] text-text-3 leading-relaxed">
                Search by keyword across all 6 collections simultaneously with highlighted match queries.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-bg-2 border border-gold-border/10 p-6 rounded-2xl flex flex-col gap-3 h-[180px] hover:border-gold/30 transition-all duration-300 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-body text-sm font-semibold text-text mt-1">Hadith of the Day</h3>
              <p className="font-body text-[12px] text-text-3 leading-relaxed">
                Receive an authentic daily narrator capsule, synced identically across global users.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-bg-2 border border-gold-border/10 p-6 rounded-2xl flex flex-col gap-3 h-[180px] hover:border-gold/30 transition-all duration-300 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center">
                <Bookmark className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-body text-sm font-semibold text-text mt-1">Bookmarks & Notes</h3>
              <p className="font-body text-[12px] text-text-3 leading-relaxed">
                Save key narrations, attach scholarly notes, and bundle selections inside synced study folders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MOCK SEARCH DEMO */}
      <section className="relative w-full bg-bg-2 py-24 border-t border-gold-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <SectionLabel label="Search Engine Demo" showStar={false} />
            <h2 className="font-display text-3xl md:text-4.5xl font-semibold tracking-wide text-text">
              Instant Global Querying
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-bg-3 border border-gold-border/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-6">
            {/* Mock Search Bar */}
            <div className="w-full bg-bg border border-gold-border/30 rounded-2xl px-4 py-3.5 flex items-center gap-3">
              <Search className="w-5 h-5 text-gold" />
              <span className="font-body text-sm text-text font-medium leading-none select-none">
                intentions
              </span>
              <div className="w-[1.5px] h-4 bg-gold/60 animate-[pulse_1s_infinite]" />
            </div>

            {/* Results Header */}
            <div className="flex justify-between items-center text-xs text-text-3 border-b border-gold-border/10 pb-3 font-body">
              <span>Showing 3 matching results</span>
              <span>All collections (6)</span>
            </div>

            {/* Results Grid */}
            <div className="flex flex-col gap-4">
              {SEARCH_RESULTS.map((res, idx) => (
                <div
                  key={idx}
                  className="bg-bg-2 border border-gold-border/10 hover:border-gold-border/30 rounded-2xl p-4 flex flex-col gap-3 transition-colors duration-300"
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gold font-bold uppercase tracking-wider">{res.book}</span>
                    <span className="font-arabic text-gold/50 pointer-events-none select-none">{res.textAr}</span>
                  </div>
                  <div className="text-[12px] font-body text-text-2 leading-relaxed">
                    <p className="text-[10px] text-text-3 font-semibold mb-1">{res.narrator}</p>
                    <p dangerouslySetInnerHTML={{ __html: res.text }} />
                  </div>
                </div>
              ))}
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
          <span className="text-gold font-bold">Hadith Collection</span>
        </div>

        {/* Next Link to Prayer */}
        <Link
          href="/features/prayer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline group"
        >
          <span>Next: Prayer Tools</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

    </div>
  );
}
