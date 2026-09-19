import React from "react";
import { HeartHandshake, Clock, Sparkles, Cpu } from "lucide-react";
import TextReveal from "@/components/common/TextReveal";

export const TrustSection: React.FC = () => {
  const trustValues = [
    {
      title: "TRANSPARENT RESPONSIBILITY",
      desc: "Direct communication with engineers and project leads. Zero outsourced opacity.",
      icon: <HeartHandshake className="w-5 h-5 text-[#FF007A]" />
    },
    {
      title: "PROMPT AVAILABILITY",
      desc: "Fast responsiveness via direct WhatsApp and email channels during all active sprints.",
      icon: <Clock className="w-5 h-5 text-white" />
    },
    {
      title: "ENGINEERED QUALITY",
      desc: "Clean semantic markup, optimized digital assets, and zero-bloat modern software architectures.",
      icon: <Sparkles className="w-5 h-5 text-[#FF007A]" />
    },
    {
      title: "FUTURE-READY TECHNOLOGY",
      desc: "Built with scalable web stacks that won't require costly total rebuilds in twelve months.",
      icon: <Cpu className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101014] via-[#0A0A0D] to-[#070709] border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#FF007A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-[0.25em] text-[#FF007A] uppercase font-semibold block mb-2">
                10 // INTEGRITY
              </span>
              <TextReveal
                as="h2"
                text="OUR COMMITMENT TO CLIENT TRUST & TECHNICAL PRECISION."
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
                stagger={0.035}
              />
              <TextReveal
                mode="paragraph"
                as="p"
                delay={220}
                className="text-sm sm:text-base text-neutral-400 font-light mt-3 leading-relaxed"
              >
                We believe enduring client relationships are built on clear expectations, verifiable engineering excellence, and dependable execution.
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 mt-6 border-t border-white/5">
              {trustValues.map((val, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-[#FF007A]/40 transition-all">
                    {val.icon}
                  </div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF007A] transition-colors">
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

export default TrustSection;
