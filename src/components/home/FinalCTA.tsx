"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-teal-500/15 via-transparent to-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300">
            START YOUR TRANSFORMATION
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
          READY TO BUILD <span className="text-metallic-teal">WHAT&apos;S NEXT?</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto mt-6 leading-relaxed">
          &ldquo;Tell us what you need. We&apos;ll help turn your idea into a professional digital experience.&rdquo;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(20,184,166,0.4)] hover:shadow-[0_0_50px_rgba(20,184,166,0.6)] active:scale-98"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppUrl("Hello INLAYTECHS! I am ready to start a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-teal-500/30 font-medium text-xs tracking-wider uppercase transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-teal-400" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
