"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for a premium feel
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent", status);
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-bg-3 border-t border-gold-border/30 px-6 py-5 md:py-4 shadow-[0_-10px_35px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-4 font-body"
        >
          {/* Left Side: Notice content */}
          <div className="flex items-center gap-3 text-left w-full md:w-auto">
            <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold border border-gold-border/10 flex items-center justify-center shrink-0">
              <Cookie className="w-4.5 h-4.5" />
            </div>
            <p className="text-xs md:text-sm text-text-2 leading-relaxed max-w-2xl">
              🍪 We use minimal, privacy-respecting cookies to improve your experience. No tracking or marketing cookies.
            </p>
          </div>

          {/* Right Side: Action CTA row */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => handleAction("declined")}
              className="text-xs font-semibold text-text-3 hover:text-text hover:bg-white/5 border border-transparent px-4 py-2.5 rounded-xl transition-all duration-300"
            >
              Decline
            </button>
            <button
              onClick={() => handleAction("accepted")}
              className="bg-gradient-to-r from-gold to-gold-2 hover:from-gold-2 hover:to-gold-3 text-bg font-semibold px-6 py-2.5 rounded-xl text-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] shrink-0"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
