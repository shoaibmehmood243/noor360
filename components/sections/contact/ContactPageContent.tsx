"use client";

import React, { useState } from "react";
import { Mail, HelpCircle, Users, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import GeometricBg from "@/components/shared/GeometricBg";
import GlowOrb from "@/components/shared/GlowOrb";
import SectionLabel from "@/components/shared/SectionLabel";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "General Inquiry",
    val: "hello@noor360.app",
    link: "mailto:hello@noor360.app",
  },
  {
    icon: HelpCircle,
    label: "Technical Support",
    val: "support@noor360.app",
    link: "mailto:support@noor360.app",
  },
  {
    icon: Users,
    label: "Partnerships",
    val: "partners@noor360.app",
    link: "mailto:partners@noor360.app",
  },
  {
    icon: MapPin,
    label: "Based in",
    val: "Karachi, Pakistan",
    link: "https://maps.google.com/?q=Karachi,+Pakistan",
  },
];

export default function ContactPageContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Field-level error states
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  // Global API / Rate limit error state
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setApiError("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      
      const data = await res.json();
      
      if (res.status === 429) {
        setApiError(data.error || "Too many messages. Please wait before trying again.");
      } else if (res.status === 400) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      } else if (!res.ok) {
        setApiError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        // Clear forms on success
        setName("");
        setEmail("");
        setSubject("General Inquiry");
        setMessage("");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setApiError("Unable to reach the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-text overflow-hidden">
      <GeometricBg opacity={0.03} color="gold" />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-12 text-center">
        <GlowOrb color="gold" size="500px" top="-10%" left="50%" className="-translate-x-1/2" opacity={0.6} />

        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <SectionLabel label="Get in touch" />
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-text mt-4">
            We'd <span className="italic text-gold font-bold">love to hear</span> from you
          </h1>
          <p className="font-body text-sm md:text-base text-text-2 max-w-xl mx-auto leading-relaxed mt-4">
            Whether it's a bug report, a suggestion, or a partnership inquiry — we read every single message.
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN LAYOUT */}
      <section className="relative w-full pb-24 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
            
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-2 border border-gold-border/10 hover:border-gold/30 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 group shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col text-left font-body">
                        <span className="text-[10px] text-text-3 font-semibold uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-text group-hover:text-gold-2 transition-colors">
                          {item.val}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social handles */}
              <div className="flex flex-col gap-3 font-body">
                <span className="text-xs text-text-3 font-semibold uppercase tracking-wider">
                  Follow our progress
                </span>
                <div className="flex items-center gap-3">
                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com/noor360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold-border/20 hover:border-gold/50 hover:bg-gold/10 text-text hover:text-gold flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/noor360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold-border/20 hover:border-gold/50 hover:bg-gold/10 text-text hover:text-gold flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/noor360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold-border/20 hover:border-gold/50 hover:bg-gold/10 text-text hover:text-gold flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Response SLA disclaimer */}
              <span className="font-body text-xs text-text-3 italic">
                We typically respond within 24–48 hours.
              </span>
            </div>

            {/* Right Column: Dynamic Form Container */}
            <div className="lg:col-span-7 relative">
              
              {/* Global Error Banner */}
              {apiError && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-200 p-[18px] rounded-2xl flex items-center gap-3.5 shadow-md animate-[fadeIn_0.3s_ease]">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="font-body text-[13px] font-medium leading-normal text-left">
                    {apiError}
                  </span>
                </div>
              )}

              {success ? (
                /* Premium Success Card */
                <div className="bg-bg-2 border border-gold-border/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center gap-6 min-h-[440px] animate-[fadeIn_0.4s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-gold/10 text-gold border border-gold-border/20 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="font-arabic text-gold-2 text-4xl md:text-5xl leading-none mt-2 pointer-events-none select-none">
                    جزاك الله خيراً
                  </span>
                  <p className="font-body text-sm text-text-2 leading-relaxed max-w-sm mt-1">
                    Message received! We'll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold text-gold hover:text-gold-2 hover:underline transition-colors mt-4 font-body uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <div className="bg-bg-2 border border-gold-border/20 p-8 rounded-3xl shadow-2xl flex flex-col gap-6">
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name field */}
                    <div className="flex flex-col gap-2 font-body text-left">
                      <label className="text-xs font-semibold text-text-2 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`bg-bg-3 border ${fieldErrors.name ? "border-red-500/60 focus:border-red-500" : "border-gold-border/30 focus:border-gold"} rounded-xl px-[18px] py-3 text-sm focus:outline-none text-text placeholder-text-3 transition-colors w-full`}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-400 text-[11px] font-semibold mt-1 tracking-wide leading-none">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2 font-body text-left">
                      <label className="text-xs font-semibold text-text-2 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`bg-bg-3 border ${fieldErrors.email ? "border-red-500/60 focus:border-red-500" : "border-gold-border/30 focus:border-gold"} rounded-xl px-[18px] py-3 text-sm focus:outline-none text-text placeholder-text-3 transition-colors w-full`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-400 text-[11px] font-semibold mt-1 tracking-wide leading-none">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Dropdown */}
                    <div className="flex flex-col gap-2 font-body text-left">
                      <label className="text-xs font-semibold text-text-2 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="bg-bg-3 border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none text-text transition-colors w-full appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Press">Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message box */}
                    <div className="flex flex-col gap-2 font-body text-left">
                      <label className="text-xs font-semibold text-text-2 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`bg-bg-3 border ${fieldErrors.message ? "border-red-500/60 focus:border-red-500" : "border-gold-border/30 focus:border-gold"} rounded-xl px-[18px] py-3.5 text-sm focus:outline-none text-text placeholder-text-3 transition-colors w-full resize-none`}
                      />
                      {fieldErrors.message && (
                        <p className="text-red-400 text-[11px] font-semibold mt-1 tracking-wide leading-none">
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Trigger */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full bg-gradient-to-r from-gold to-gold-2 hover:from-gold-2 hover:to-gold-3 text-bg font-body font-semibold py-4 rounded-xl text-sm flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        /* Spinner Loader */
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 shrink-0" />
                        </div>
                      )}
                    </button>
                  </form>

                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
