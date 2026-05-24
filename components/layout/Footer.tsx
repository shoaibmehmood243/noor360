"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative bg-bg-2 border-t border-gold-border/20 text-text-2 overflow-hidden py-16">
      {/* Absolute Geometric SVG Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C9A84C" strokeWidth="0.75" />
              <circle cx="30" cy="30" r="6" fill="none" stroke="#C9A84C" strokeWidth="0.75" />
              <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* COLUMN 1: BRAND */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-bg-3 border border-gold flex items-center justify-center">
                <span className="font-arabic text-gold text-[20px] font-bold">ن</span>
              </div>
              <span className="font-display text-[22px] font-semibold text-text tracking-wide">
                Noor<span className="text-gold">360</span>
              </span>
            </Link>
            <p className="text-sm text-text-2 leading-relaxed">
              Your complete Islamic companion — built for the global Muslim community.
            </p>
            <span className="font-arabic text-gold opacity-40 text-2xl mt-2 select-none pointer-events-none">
              نور ٣٦٠
            </span>
            {/* Social Icons Row - Inline Custom SVGs */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Follow us on Twitter/X"
                className="w-9 h-9 rounded-lg bg-bg-3 border border-gold-border/20 flex items-center justify-center text-text-2 hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-lg bg-bg-3 border border-gold-border/20 flex items-center justify-center text-text-2 hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow us on LinkedIn"
                className="w-9 h-9 rounded-lg bg-bg-3 border border-gold-border/20 flex items-center justify-center text-text-2 hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: APP */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-body font-bold uppercase tracking-wider text-text-3">
              App
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-gold transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/features/quran" className="hover:text-gold transition-colors duration-200">
                  Quran Suite
                </Link>
              </li>
              <li>
                <Link href="/features/hadith" className="hover:text-gold transition-colors duration-200">
                  Hadith Compendium
                </Link>
              </li>
              <li>
                <Link href="/features/prayer" className="hover:text-gold transition-colors duration-200">
                  Prayer Tools
                </Link>
              </li>
              <li>
                <Link href="/features/duas" className="hover:text-gold transition-colors duration-200">
                  Duas & Dhikr
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-gold transition-colors duration-200">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-body font-bold uppercase tracking-wider text-text-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookies" className="hover:text-gold transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SUPPORT */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-body font-bold uppercase tracking-wider text-text-3">
              Support
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-gold transition-colors duration-200">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-gold transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gold-border/20 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-3">
          <p>© 2025 Noor360. All rights reserved.</p>
          <span className="font-arabic text-gold/30 text-lg select-none pointer-events-none">
            بِسْمِ اللهِ
          </span>
          <p>Made with 🤍 for the Ummah</p>
        </div>
      </div>
    </footer>
  );
}
