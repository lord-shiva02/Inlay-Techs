"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import { TextReveal } from "@/components/common/TextReveal";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#FF007A]/15 via-transparent to-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-300 font-medium">
            START YOUR TRANSFORMATION
          </span>
        </div>

        {/* Sequential Line 3D Reveal */}
        <TextReveal
          mode="line"
          lines={["Ready to build", "what's next?"]}
          as="h2"
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          itemClassName="text-metallic-chrome"
        />

        <TextReveal
          mode="paragraph"
          as="p"
          delay={320}
          className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto mt-6 leading-relaxed"
        >
          &ldquo;Tell us what you need. We&apos;ll help turn your vision into a world-class, revenue-generating digital experience.&rdquo;
        </TextReveal>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-10">
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-[#FF007A] to-[#E0006C] hover:from-[#ff1a8b] hover:to-[#FF007A] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(255,0,122,0.45)] hover:shadow-[0_0_55px_rgba(255,0,122,0.7)] active:scale-95 group overflow-hidden"
          >
            <span className="relative z-10">START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          </Link>

          <a
            href={getWhatsAppUrl("Hello INLAYTECHS! I am ready to start a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#FF007A]/40 font-medium text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#FF007A]" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
