"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/shared/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-300 border-b",
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-gold-border/30 shadow-lg"
          : "bg-bg/80 backdrop-blur-xl border-gold-border/10"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 flex items-center justify-between">
        {/* LEFT: LOGO & WORDMARK */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Card */}
          <div className="w-9 h-9 rounded-xl bg-bg-2 border border-gold flex items-center justify-center shadow-[0_0_10px_rgba(201,168,76,0.15)] group-hover:scale-105 transition-transform duration-300">
            <span className="font-arabic text-gold text-[20px] leading-none select-none font-bold">
              ن
            </span>
          </div>
          {/* Wordmark */}
          <span className="font-display text-[22px] font-semibold text-text tracking-wide transition-colors">
            Noor<span className="text-gold group-hover:text-gold-2 transition-colors">360</span>
          </span>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-body font-medium transition-all py-2 hover:text-gold-2",
                  isActive ? "text-gold font-semibold" : "text-text-2"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA BUTTON & THEME TOGGLE */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/download"
            className="inline-block bg-gradient-to-r from-gold to-gold-2 hover:from-gold-2 hover:to-gold-3 text-bg font-body font-semibold px-5 py-2 rounded-xl text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(201,168,76,0.35)]"
          >
            Download App
          </Link>
        </div>

        {/* MOBILE BURGER SHEETS */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={
              <button className="p-2 text-text hover:text-gold transition-colors focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
            } />
            <SheetContent
              side="right"
              showCloseButton={false}
              className="bg-bg border-l border-gold-border/30 w-full sm:max-w-md p-8 flex flex-col justify-between h-full text-text focus:outline-none"
            >
              {/* Mobile Header */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-bg-2 border border-gold flex items-center justify-center">
                      <span className="font-arabic text-gold text-[20px] font-bold">ن</span>
                    </div>
                    <span className="font-display text-[22px] font-semibold text-text tracking-wide">
                      Noor<span className="text-gold">360</span>
                    </span>
                  </Link>
                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <SheetClose className="p-2 text-text-2 hover:text-gold transition-colors focus:outline-none">
                      <X className="w-6 h-6" />
                    </SheetClose>
                  </div>
                </div>

                {/* Navigation List */}
                <nav className="flex flex-col gap-6 mt-6">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <SheetClose render={
                        <Link
                          href={link.href}
                          className={cn(
                            "font-display text-2xl transition-all w-fit py-1.5 border-b border-transparent hover:text-gold-2 hover:border-gold/30",
                            isActive ? "text-gold font-bold border-gold/40" : "text-text-2"
                          )}
                        >
                          {link.label}
                        </Link>
                      } key={link.label} />
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Bottom elements */}
              <div className="flex flex-col items-center gap-8 mt-auto w-full">
                {/* Bismillah Text */}
                <span className="font-arabic text-gold opacity-30 text-lg leading-relaxed select-none pointer-events-none">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>

                {/* Full Width Download Button */}
                <SheetClose render={
                  <Link
                    href="/download"
                    className="w-full text-center bg-gradient-to-r from-gold to-gold-2 text-bg font-body font-semibold py-3.5 rounded-xl text-sm transition-all duration-300"
                  >
                    Download App
                  </Link>
                } />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
