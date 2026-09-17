"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Film, Share2, Target, Sparkles, Megaphone, TrendingUp } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export const DigitalMarketingSection: React.FC = () => {
  const marketingPillars = [
    {
      title: "Meta Ads & Reels",
      desc: "Short-form video creatives and targeted campaigns engineered to arrest attention on Instagram and Facebook feeds.",
      icon: <Film className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Social Media Marketing",
      desc: "Structured distribution, aesthetic feed overhaul, and engaging copy to build authority with prospective buyers.",
      icon: <Share2 className="w-5 h-5 text-teal-400" />
    },
    {
      title: "Poster Design & Visual Creatives",
      desc: "High-impact promotional graphics for announcements, digital flyers, and print-ready event marketing.",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Targeted Customer Acquisition",
      desc: "Data-driven audience segmentation and conversion tracking to ensure every marketing spend is accountable.",
      icon: <Target className="w-5 h-5 text-teal-400" />
    }
  ];

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase font-semibold">
              08 // GROWTH ENGINE
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              AMPLIFY YOUR BRAND WITH PRECISION DIGITAL MARKETING.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              In today&apos;s digital marketplace, having a website is only step one. INLAYTECHS creates high-retention Meta Ads, viral-ready Instagram Reels, high-impact promotional posters, and integrated social campaigns designed to turn audience attention into measurable business inquiries.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(205,127,50,0.35)] active:scale-98"
              >
                <span>GROW YOUR BUSINESS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I want to discuss digital marketing and Meta Ads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-all"
              >
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): 4 Marketing Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketingPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                  <TrendingUp className="w-3 h-3 text-teal-400" />
                  <span>HIGH CONVERSION</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
