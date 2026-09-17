"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Clock, Sparkles, Cpu, Layers } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustValues = [
    {
      title: "TRANSPARENT RESPONSIBILITY",
      desc: "Direct communication with engineers and project leads. Zero outsourced opacity.",
      icon: <HeartHandshake className="w-5 h-5 text-teal-400" />
    },
    {
      title: "PROMPT AVAILABILITY",
      desc: "Fast responsiveness via direct WhatsApp and email channels during all active sprints.",
      icon: <Clock className="w-5 h-5 text-amber-400" />
    },
    {
      title: "ENGINEERED QUALITY",
      desc: "Clean semantic markup, optimized digital assets, and zero-bloat modern software architectures.",
      icon: <Sparkles className="w-5 h-5 text-teal-400" />
    },
    {
      title: "FUTURE-READY TECHNOLOGY",
      desc: "Built with scalable web stacks that won't require costly total rebuilds in twelve months.",
      icon: <Cpu className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101010] via-[#0A0A0A] to-[#070707] border border-white/10 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
                10 // INTEGRITY
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                OUR COMMITMENT TO CLIENT TRUST & TECHNICAL PRECISION.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 leading-relaxed">
                We believe enduring client relationships are built on clear expectations, verifiable engineering excellence, and dependable execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 mt-6 border-t border-white/5">
              {trustValues.map((val, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
