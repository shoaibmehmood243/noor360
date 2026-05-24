"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  heading: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  eyebrow: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalLayout({
  title,
  eyebrow,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set first section as active by default if there's any
    if (sections.length > 0) {
      setActiveId(sections[0].id);
    }

    // Set up IntersectionObserver to detect which section is in viewport
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Triggers active highlight when scrolled into central view
      threshold: 0,
    });

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  const handleMobileSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setActiveId(id);
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Offset slightly to account for fixed navbar (68px height)
      const navbarOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Update browser URL hash quietly
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-text pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 1. BREADCRUMBS */}
        <nav className="flex items-center gap-2 text-xs font-body text-text-3 select-none mb-6">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-3/50" />
          <span className="text-text-3/70">Legal</span>
          <ChevronRight className="w-3.5 h-3.5 text-text-3/50" />
          <span className="text-gold font-medium">{title}</span>
        </nav>

        {/* 2. PAGE HEADER */}
        <header className="mb-10 text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold-border/20 text-[10px] font-semibold text-gold uppercase tracking-widest font-body">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-text mt-4">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-3 border border-gold-border/10 text-xs text-text-3 font-body">
              Last updated: {lastUpdated}
            </span>
          </div>
        </header>

        {/* 3. MAIN CONTENT CONTAINER */}
        <div className="bg-bg-2 border border-gold-border/20 rounded-3xl p-6 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: DESKTOP STICKY SIDEBAR / MOBILE SELECT */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
              
              {/* MOBILE DROPDOWN */}
              <div className="block lg:hidden w-full font-body">
                <label htmlFor="jump-to-sec" className="block text-xs font-bold text-text-3 uppercase tracking-wider mb-2 text-left">
                  Jump to Section
                </label>
                <div className="relative">
                  <select
                    id="jump-to-sec"
                    value={activeId}
                    onChange={handleMobileSelectChange}
                    className="w-full bg-bg-3 border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none text-text appearance-none cursor-pointer"
                  >
                    {sections.map((sec) => (
                      <option key={sec.id} value={sec.id}>
                        {sec.heading}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-3">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* DESKTOP SIDEBAR TOC */}
              <div className="hidden lg:flex flex-col gap-6 text-left">
                <span className="text-[10px] font-bold text-text-3 uppercase tracking-widest font-body">
                  Contents
                </span>
                <nav className="flex flex-col border-l border-gold-border/10">
                  {sections.map((sec) => {
                    const isActive = activeId === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => handleLinkClick(e, sec.id)}
                        className={cn(
                          "relative pl-5 py-2.5 text-sm font-body font-medium transition-all border-l-2 -ml-[1.5px] block leading-relaxed",
                          isActive
                            ? "text-gold border-gold font-semibold bg-gold/[0.02]"
                            : "text-text-3 border-transparent hover:text-text hover:border-gold-border/30"
                        )}
                      >
                        {sec.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>

            </aside>

            {/* RIGHT COLUMN: MAIN ARTICLE SECTION */}
            <article className="lg:col-span-8 flex flex-col gap-10 text-left">
              {sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="flex flex-col gap-4 scroll-mt-24"
                >
                  <h2 className="font-display text-xl md:text-2xl font-bold tracking-wide text-text pl-4 border-l-2 border-gold flex items-center justify-between">
                    <span>{sec.heading}</span>
                    <a
                      href={`#${sec.id}`}
                      className="opacity-0 hover:opacity-100 focus:opacity-100 text-gold-border hover:text-gold transition-opacity text-xs"
                      title="Direct link to section"
                    >
                      #
                    </a>
                  </h2>
                  <div className="font-body text-sm text-text-2 leading-[1.9] space-y-4">
                    {sec.content}
                  </div>
                </section>
              ))}
            </article>

          </div>
        </div>

      </div>
    </div>
  );
}
