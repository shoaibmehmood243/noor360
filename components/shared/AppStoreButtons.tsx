"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppStoreButtonsProps {
  className?: string;
  appleUrl?: string;
  googleUrl?: string;
}

export default function AppStoreButtons({
  className,
  appleUrl = "#",
  googleUrl = "#",
}: AppStoreButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {/* APPLE APP STORE */}
      <Link
        href={appleUrl}
        className="flex items-center gap-3 bg-bg-2 border border-gold-border/20 hover:border-gold-border hover:bg-bg-3 px-5 py-3 rounded-xl transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,168,76,0.08)]"
      >
        {/* Apple SVG Icon */}
        <svg
          className="w-6 h-6 text-gold group-hover:text-gold-2 transition-colors fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-text-2 uppercase tracking-wider font-body leading-none">
            Download on the
          </span>
          <span className="text-sm font-semibold text-text group-hover:text-gold-2 transition-colors font-body mt-0.5 leading-none">
            App Store
          </span>
        </div>
      </Link>

      {/* GOOGLE PLAY STORE */}
      <Link
        href={googleUrl}
        className="flex items-center gap-3 bg-bg-2 border border-gold-border/20 hover:border-gold-border hover:bg-bg-3 px-5 py-3 rounded-xl transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,168,76,0.08)]"
      >
        {/* Google Play SVG Icon */}
        <svg
          className="w-6 h-6 text-gold group-hover:text-gold-2 transition-colors fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M5.25 3.25c-.27 0-.52.07-.75.22l11.45 6.61 2.92-2.92-13.62-7.85c-.24-.14-.5-.22-.75-.22zM3.25 5v14c0 .35.1.67.27.95l7.98-7.98-7.98-7.98c-.17.28-.27.6-.27.95zm14.15 4.31L13.88 12.8l2.92 2.92 1.45-.84c.6-.35.97-.99.97-1.69s-.37-1.34-.97-1.69l-.85-.49zM5.25 20.75c.26 0 .52-.08.75-.22l13.62-7.85-2.92-2.92-11.45 6.61c.23.15.48.22.75.22z" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-text-2 uppercase tracking-wider font-body leading-none">
            Get it on
          </span>
          <span className="text-sm font-semibold text-text group-hover:text-gold-2 transition-colors font-body mt-0.5 leading-none">
            Google Play
          </span>
        </div>
      </Link>
    </div>
  );
}
