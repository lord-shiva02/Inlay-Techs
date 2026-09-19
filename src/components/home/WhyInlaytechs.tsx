"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sliders, 
  Palette, 
  Smartphone, 
  Zap, 
  Briefcase, 
  Headphones 
} from "lucide-react";
import SpotlightCard from "@/components/common/SpotlightCard";
import SectionHeader from "@/components/common/SectionHeader";
import TextReveal from "@/components/common/TextReveal";

export const WhyInlaytechs: React.FC = () => {
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

  const pillars = [
    {
      title: "CUSTOM APPROACH",
      desc: "No off-the-shelf generic templates. Every digital solution is tailored to your business model, target demographic, and distinct brand tone.",
      icon: <Sliders className="w-5 h-5 text-[#FF007A]" />,
      spotlight: "rgba(255, 0, 122, 0.22)"
    },
    {
      title: "MODERN DESIGN",
      desc: "Editorial typography, dark luxury aesthetics, and balanced whitespace that elevate your brand perception above industry competitors.",
      icon: <Palette className="w-5 h-5 text-white" />,
      spotlight: "rgba(255, 255, 255, 0.15)"
    },
    {
      title: "RESPONSIVE EXPERIENCE",
      desc: "Flawlessly calibrated across mobile screens, tablets, laptops, and ultra-wide displays with touch-friendly navigation.",
      icon: <Smartphone className="w-5 h-5 text-[#FF007A]" />,
      spotlight: "rgba(255, 0, 122, 0.22)"
    },
    {
      title: "PERFORMANCE FOCUSED",
      desc: "Engineered with lightweight codebases and optimized asset pipelines for near-instant rendering and low bounce rates.",
      icon: <Zap className="w-5 h-5 text-white" />,
      spotlight: "rgba(255, 255, 255, 0.15)"
    },
    {
      title: "BUSINESS ORIENTED",
      desc: "Built around clear conversion funnels, explicit call-to-actions, and frictionless WhatsApp/Email inquiry pathways.",
      icon: <Briefcase className="w-5 h-5 text-[#FF007A]" />,
      spotlight: "rgba(255, 0, 122, 0.22)"
    },
    {
      title: "ONGOING SUPPORT",
      desc: "Direct communication with the development team for proactive security patches, backups, and prompt content updates.",
      icon: <Headphones className="w-5 h-5 text-white" />,
      spotlight: "rgba(255, 255, 255, 0.15)"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          kicker="06 // PHILOSOPHY"
          title="WHY INLAYTECHS?"
          description="Our engineering standards ensure that every website and campaign we build is reliable, commercially viable, and aesthetically unmatched."
          accentColor="magenta"
        />

        {/* 6 Pillars Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {pillars.map((pillar, idx) => {
            const delayMs = idx * 75;
            return (
              <div
                key={idx}
                style={{
                  transitionDelay: `${delayMs}ms`,
                  transform: isInView ? "translateY(0)" : "translateY(24px)",
                  opacity: isInView ? 1 : 0
                }}
                className="transition-all duration-600 ease-out"
              >
                <SpotlightCard
                  spotlightColor={pillar.spotlight}
                  className="rounded-2xl border border-white/10 p-7 flex flex-col justify-between hover:border-[#FF007A]/40 transition-all duration-300 group !bg-gradient-to-b !from-[#111116] !via-[#0E0E12] !to-[#08080A] h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>

                    <h3 className="font-display text-lg font-bold text-white tracking-wide group-hover:text-[#FF007A] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>STANDARD 0{idx + 1}</span>
                    <span className="text-[#FF007A] font-semibold">
                      VERIFIED
                    </span>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyInlaytechs;
