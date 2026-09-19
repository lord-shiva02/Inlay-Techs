"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GlareHover from "@/components/common/GlareHover";
import TextReveal from "@/components/common/TextReveal";

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
    <section className="relative py-24 bg-[#0A0A0A] border-y border-white/[0.06] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 font-display text-[12vw] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter">
        INLAYTECHS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Indicator (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-[0.25em] text-[#FF007A] uppercase font-semibold">
              03 // VALUE PROPOSITION
            </span>
            <TextReveal
              as="h2"
              text="ENGINEERED FOR BUSINESS CONVERSION & DIGITAL PROMINENCE."
              className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug"
              stagger={0.035}
            />
            <div className="w-12 h-1 bg-[#FF007A] rounded-full mt-2" />
          </div>

          {/* Statement & Capabilities (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3 pb-2">
              <TextReveal
                as="h3"
                mode="fadeUp"
                className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug"
              >
                Digital Experiences.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF007A]">
                  Built for Growth.
                </span>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((item, idx) => (
                <GlareHover
                  key={idx}
                  width="100%"
                  height="auto"
                  background="rgba(255, 255, 255, 0.02)"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  borderRadius="12px"
                  glareColor="#FF007A"
                  glareOpacity={0.3}
                  glareAngle={-35}
                  glareSize={260}
                  transitionDuration={750}
                  className="p-3.5 transition-all hover:border-[#FF007A]/40 group"
                >
                  <div className="flex items-center gap-3 w-full">
                    <CheckCircle2 className="w-4 h-4 text-[#FF007A] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-neutral-200 font-medium tracking-wide">
                      {item}
                    </span>
                  </div>
                </GlareHover>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#FF007A] hover:text-[#ff3b98] transition-colors group"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
