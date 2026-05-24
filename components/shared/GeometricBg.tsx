"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GeometricBgProps {
  opacity?: number;
  color?: "gold" | "teal" | "purple" | string;
  className?: string;
}

export default function GeometricBg({
  opacity = 0.04,
  color = "gold",
  className,
}: GeometricBgProps) {
  // Map color tokens to custom theme hex strings or allow raw colors
  const strokeColor =
    color === "gold"
      ? "#C9A84C"
      : color === "teal"
      ? "#2DD4BF"
      : color === "purple"
      ? "#8B5CF6"
      : color;

  return (
    <div
      className={cn("absolute inset-0 w-full h-full pointer-events-none overflow-hidden", className)}
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hex-islamic-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Hexagonal outer interlocking frame */}
            <path
              d="M40 0 L80 23.09 L80 69.28 L40 92.37 L0 69.28 L0 23.09 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.75"
            />
            {/* Internal star diagonals */}
            <path
              d="M40 0 L40 92.37 M0 23.09 L80 69.28 M0 69.28 L80 23.09"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.5"
              strokeDasharray="2,3"
              opacity="0.6"
            />
            {/* Concentric inner hexagon */}
            <path
              d="M40 15 L67 30.5 L67 61.5 L40 77 L13 61.5 L13 30.5 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.5"
            />
            {/* Internal elegant star shape */}
            <path
              d="M40 25 L45 37 L57 37 L48 45 L52 57 L40 50 L28 57 L32 45 L23 37 L35 37 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-islamic-pattern)" />
      </svg>
    </div>
  );
}
