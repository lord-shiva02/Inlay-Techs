"use client";

import React from "react";
import { 
  Sliders, 
  Palette, 
  Smartphone, 
  Zap, 
  Briefcase, 
  Headphones 
} from "lucide-react";

export const WhyInlaytechs: React.FC = () => {
  const pillars = [
    {
      title: "CUSTOM APPROACH",
      desc: "No off-the-shelf generic templates. Every digital solution is tailored to your business model, target demographic, and distinct brand tone.",
      icon: <Sliders className="w-5 h-5 text-teal-400" />,
      accent: "teal"
    },
    {
      title: "MODERN DESIGN",
      desc: "Editorial typography, dark luxury aesthetics, and balanced whitespace that elevate your brand perception above industry competitors.",
      icon: <Palette className="w-5 h-5 text-amber-400" />,
      accent: "bronze"
    },
    {
      title: "RESPONSIVE EXPERIENCE",
      desc: "Flawlessly calibrated across mobile screens, tablets, laptops, and ultra-wide displays with touch-friendly navigation.",
      icon: <Smartphone className="w-5 h-5 text-teal-400" />,
      accent: "teal"
    },
    {
      title: "PERFORMANCE FOCUSED",
      desc: "Engineered with lightweight codebases and optimized asset pipelines for near-instant rendering and low bounce rates.",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      accent: "bronze"
    },
    {
      title: "BUSINESS ORIENTED",
      desc: "Built around clear conversion funnels, explicit call-to-actions, and frictionless WhatsApp/Email inquiry pathways.",
      icon: <Briefcase className="w-5 h-5 text-teal-400" />,
      accent: "teal"
    },
    {
      title: "ONGOING SUPPORT",
      desc: "Direct communication with the development team for proactive security patches, backups, and prompt content updates.",
      icon: <Headphones className="w-5 h-5 text-amber-400" />,
      accent: "bronze"
    }
  ];

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
              06 // PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              WHY INLAYTECHS?
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Our engineering standards ensure that every website and campaign we build is reliable, commercially viable, and aesthetically unmatched.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {pillars.map((pillar, idx) => {
            const isBronze = pillar.accent === "bronze";
            return (
              <div
                key={idx}
                className="rounded-xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className={isBronze ? "text-amber-500/70" : "text-teal-500/70"}>
                    VERIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
