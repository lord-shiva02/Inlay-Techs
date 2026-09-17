"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      desc: "Understand the business, competitive landscape, and specific technical or marketing requirements.",
      tag: "Scope & Strategy"
    },
    {
      number: "02",
      title: "PLAN",
      desc: "Define information architecture, content hierarchy, conversion pathways, and digital direction.",
      tag: "Wireframes & Funnels"
    },
    {
      number: "03",
      title: "DESIGN",
      desc: "Create bespoke visual experiences with editorial typography, dark luxury styling, and intuitive UX.",
      tag: "Visual Engineering"
    },
    {
      number: "04",
      title: "DEVELOP",
      desc: "Build with clean, accessible, modern codebases optimized for high-performance and mobile responsiveness.",
      tag: "Full-Stack Code"
    },
    {
      number: "05",
      title: "LAUNCH",
      desc: "Deploy to production, configure custom domains, verify SEO indexing, and provide ongoing support.",
      tag: "Deployment & Growth"
    }
  ];

  return (
    <section className="relative py-28 bg-[#090909] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
              07 // METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            A disciplined 5-stage deployment cycle designed to eliminate friction and deliver production-grade results on schedule.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-14 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all duration-300 group"
            >
              {/* Top Bar with Step Number */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <span className="font-display text-4xl font-black text-white/20 group-hover:text-teal-400/80 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400/80 bg-teal-500/10 px-2 py-0.5 rounded">
                    {step.tag}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="font-display text-lg font-bold text-white tracking-wide group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mt-2.5">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                <Check className="w-3.5 h-3.5 text-teal-400" />
                <span>MILESTONE VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
