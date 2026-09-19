"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/data/company";
import { UserCheck, ShieldCheck, ArrowUpRight } from "lucide-react";
import GlareHover from "@/components/common/GlareHover";
import SectionHeader from "@/components/common/SectionHeader";
import TextReveal from "@/components/common/TextReveal";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          kicker="09 // LEADERSHIP"
          title="EXECUTIVE LEADERSHIP"
          description="Directly accountable leadership guiding every technology deployment and client marketing campaign."
          accentColor="magenta"
        />

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 items-stretch">
          {/* Founder Card */}
          <GlareHover
            width="100%"
            height="auto"
            background="linear-gradient(135deg, #121217 0%, #0E0E12 60%, #060608 100%)"
            borderColor="rgba(255, 255, 255, 0.1)"
            borderRadius="18px"
            glareColor="#FF007A"
            glareOpacity={0.25}
            glareAngle={-30}
            glareSize={320}
            transitionDuration={800}
            className="p-8 sm:p-10 shadow-2xl flex flex-col justify-between hover:border-[#FF007A]/40 transition-all duration-300 group"
          >
            <div className="flex flex-col justify-between h-full w-full gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FF007A]/10 border border-[#FF007A]/30 flex items-center justify-center text-[#FF007A] group-hover:scale-105 transition-transform">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF007A] bg-[#FF007A]/10 border border-[#FF007A]/20 px-3 py-1 rounded-full font-semibold">
                    FOUNDER
                  </span>
                </div>

                <div>
                  <TextReveal
                    mode="fadeUp"
                    as="h3"
                    className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-[#FF007A] transition-colors"
                  >
                    {COMPANY.leadership.founder.name}
                  </TextReveal>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    Founder // INLAYTECHS
                  </p>
                </div>

                <TextReveal
                  mode="paragraph"
                  as="p"
                  delay={100}
                  className="text-sm text-neutral-300 leading-relaxed font-light"
                >
                  {COMPANY.leadership.founder.bio}
                </TextReveal>
              </div>

              <div className="pt-6 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span>Strategic Architecture</span>
                <span className="text-[#FF007A] font-mono font-semibold">EXECUTIVE</span>
              </div>
            </div>
          </GlareHover>

          {/* CEO Card */}
          <GlareHover
            width="100%"
            height="auto"
            background="linear-gradient(135deg, #121217 0%, #0E0E12 60%, #060608 100%)"
            borderColor="rgba(255, 255, 255, 0.1)"
            borderRadius="18px"
            glareColor="#FF007A"
            glareOpacity={0.25}
            glareAngle={-30}
            glareSize={320}
            transitionDuration={800}
            className="p-8 sm:p-10 shadow-2xl flex flex-col justify-between hover:border-[#FF007A]/40 transition-all duration-300 group"
          >
            <div className="flex flex-col justify-between h-full w-full gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FF007A]/10 border border-[#FF007A]/30 flex items-center justify-center text-[#FF007A] group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF007A] bg-[#FF007A]/10 border border-[#FF007A]/20 px-3 py-1 rounded-full font-semibold">
                    CHIEF EXECUTIVE OFFICER
                  </span>
                </div>

                <div>
                  <TextReveal
                    mode="fadeUp"
                    as="h3"
                    className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-[#FF007A] transition-colors"
                  >
                    {COMPANY.leadership.ceo.name}
                  </TextReveal>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    CEO // INLAYTECHS
                  </p>
                </div>

                <TextReveal
                  mode="paragraph"
                  as="p"
                  delay={100}
                  className="text-sm text-neutral-300 leading-relaxed font-light"
                >
                  {COMPANY.leadership.ceo.bio}
                </TextReveal>
              </div>

              <div className="pt-6 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span>Operations & Client Growth</span>
                <span className="text-[#FF007A] font-mono font-semibold">EXECUTIVE</span>
              </div>
            </div>
          </GlareHover>
        </div>

        {/* Company Overview Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold text-white">
              INLAYTECHS Technology & Digital Services
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              A dedicated digital agency focused on building modern web experiences, e-commerce storefronts, and targeted digital marketing for forward-thinking businesses.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-semibold transition-all whitespace-nowrap"
          >
            <span>LEARN MORE ABOUT US</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF007A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
