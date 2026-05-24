"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-bg-3 border border-gold-border/20 text-gold hover:text-gold-2 hover:border-gold-border/50 hover:bg-bg-4 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
      aria-label="Toggle Theme"
      id="theme-toggle"
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px] transition-transform duration-500 hover:rotate-45" />
      ) : (
        <Moon className="w-[18px] h-[18px] transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
}
