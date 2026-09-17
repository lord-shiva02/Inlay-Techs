"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ValueStatement: React.FC = () => {
  const capabilities = [
    "High-Performance Business Websites",
    "Scalable E-commerce Storefronts",
    "Targeted Meta Ads & High-Retention Reels",
    "Strategic Social Media Distribution",
    "High-Impact Promotional Poster Design",
    "Zero-Distraction Conversion Landing Pages",
    "Reliable Proactive Website Maintenance"
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 font-display text-[12vw] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter">
        INLAYTECHS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Indicator (3 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold">
              03 // VALUE PROPOSITION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              ENGINEERED FOR BUSINESS CONVERSION & DIGITAL PROMINENCE.
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-amber-500 rounded-full mt-2" />
          </div>

          {/* Statement & Capabilities (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              We eliminate the friction between your business vision and real customer acquisition. Whether deploying a corporate flagship or executing high-yield ad campaigns, INLAYTECHS engineers every touchpoint to perform reliably under commercial demand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all group"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
              >
                <span>EXPLORE ALL 8 SERVICE VERTICALS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
