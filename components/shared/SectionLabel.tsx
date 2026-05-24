"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  showStar?: boolean;
  className?: string;
}

export default function SectionLabel({
  label,
  showStar = true,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-gold font-body text-xs font-bold uppercase tracking-[0.2em] select-none",
        className
      )}
    >
      {showStar && <span className="text-gold/80 animate-pulse text-sm">✦</span>}
      <span>{label}</span>
    </div>
  );
}
