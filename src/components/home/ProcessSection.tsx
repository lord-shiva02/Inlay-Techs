"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import ElectricBorder from "@/components/common/ElectricBorder";
import SectionHeader from "@/components/common/SectionHeader";

export const ProcessSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      desc: "Understand the business, competitive landscape, and specific technical or marketing requirements.",
      tag: "Scope & Strategy",
      color: "#FF007A"
    },
    {
      number: "02",
      title: "PLAN",
      desc: "Define information architecture, content hierarchy, conversion pathways, and digital direction.",
      tag: "Wireframes & Funnels",
      color: "#F43F5E"
    },
    {
      number: "03",
      title: "DESIGN",
      desc: "Create bespoke visual experiences with editorial typography, dark luxury styling, and intuitive UX.",
      tag: "Visual Engineering",
      color: "#D946EF"
    },
    {
      number: "04",
      title: "DEVELOP",
      desc: "Build with clean, accessible, modern codebases optimized for high-performance and mobile responsiveness.",
      tag: "Full-Stack Code",
      color: "#EC4899"
    },
    {
      number: "05",
      title: "LAUNCH",
      desc: "Deploy to production, configure custom domains, verify SEO indexing, and provide ongoing support.",
      tag: "Deployment & Growth",
      color: "#FF007A"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#090909] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF007A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          kicker="07 // METHODOLOGY"
          title="HOW WE WORK"
          description="A disciplined 5-stage deployment cycle designed to eliminate friction and deliver production-grade results on schedule."
          accentColor="magenta"
        />

        {/* 5-Step Process Timeline with ElectricBorder and Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-14 relative">
          {steps.map((step, idx) => {
            const delayMs = idx * 90;
            return (
              <div
                key={step.number}
                style={{
                  transitionDelay: `${delayMs}ms`,
                  transform: isInView ? "translateY(0)" : "translateY(24px)",
                  opacity: isInView ? 1 : 0
                }}
                className="transition-all duration-600 ease-out h-full"
              >
                <ElectricBorder
                  color={step.color}
                  speed={0.5}
                  chaos={0.08}
                  borderRadius={16}
                  className="h-full"
                >
                  <div className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#0D0D12]/95 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group h-full shadow-2xl">
                    {/* Top Bar with Step Number */}
                    <div>
                      <div className="flex items-center justify-between pb-5 border-b border-white/10">
                        <span className="font-display text-4xl font-black text-white/30 group-hover:text-[#FF007A] transition-colors">
                          {step.number}
                        </span>
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/10"
                          style={{
                            backgroundColor: `${step.color}15`,
                            color: step.color
                          }}
                        >
                          {step.tag}
                        </span>
                      </div>

                      <div className="pt-5">
                        <h3 className="font-display text-lg font-bold text-white tracking-wide group-hover:text-[#FF007A] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed font-light mt-2.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                      <Check className="w-3.5 h-3.5" style={{ color: step.color }} />
                      <span>MILESTONE VERIFIED</span>
                    </div>
                  </div>
                </ElectricBorder>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
