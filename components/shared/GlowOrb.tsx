"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: "gold" | "teal" | "purple";
  size?: number | string; // e.g. "400px" or 300
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  className?: string;
}

export default function GlowOrb({
  color = "gold",
  size = "500px",
  top,
  left,
  right,
  bottom,
  opacity = 1,
  className,
}: GlowOrbProps) {
  // Format sizes correctly
  const dimension = typeof size === "number" ? `${size}px` : size;

  // Custom high-performance radial gradients avoiding heavy browser blur filter costs
  const backgroundGradient =
    color === "teal"
      ? "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, rgba(45, 212, 191, 0) 70%)"
      : color === "purple"
      ? "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0) 70%)"
      : "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, rgba(201, 168, 76, 0) 70%)";

  return (
    <div
      className={cn("absolute rounded-full pointer-events-none -z-10", className)}
      style={{
        width: dimension,
        height: dimension,
        top,
        left,
        right,
        bottom,
        opacity,
        background: backgroundGradient,
      }}
    />
  );
}
