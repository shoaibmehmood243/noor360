"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ArabicTextProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | string;
  color?: string; // e.g., "text-gold" or "text-text-2"
  className?: string;
}

export default function ArabicText({
  text,
  size = "md",
  color = "text-gold",
  className,
}: ArabicTextProps) {
  // Resolve standard sizes to responsive tailwind classes or allow direct utility values
  const sizeClasses =
    size === "sm"
      ? "text-sm sm:text-base"
      : size === "md"
      ? "text-base sm:text-lg md:text-xl leading-relaxed"
      : size === "lg"
      ? "text-xl sm:text-2xl md:text-3xl leading-loose"
      : size === "xl"
      ? "text-3xl sm:text-4xl md:text-5xl leading-loose"
      : size === "2xl"
      ? "text-4xl sm:text-5xl md:text-6xl leading-loose"
      : size === "3xl"
      ? "text-5xl sm:text-6xl md:text-7xl leading-loose"
      : size;

  return (
    <span
      className={cn(
        "font-arabic direction-rtl text-right select-all font-medium",
        sizeClasses,
        color,
        className
      )}
      dir="rtl"
    >
      {text}
    </span>
  );
}
