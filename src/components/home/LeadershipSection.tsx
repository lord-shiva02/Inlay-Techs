"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/data/company";
import { UserCheck, ShieldCheck, ArrowUpRight } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
              09 // LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              EXECUTIVE LEADERSHIP
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Directly accountable leadership guiding every technology deployment and client marketing campaign.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {/* Founder Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 hover:border-teal-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded">
                  FOUNDER
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {COMPANY.leadership.founder.name}
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                  Founder // INLAYTECHS
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {COMPANY.leadership.founder.bio}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Strategic Architecture</span>
              <span className="text-teal-400 font-mono">EXECUTIVE</span>
            </div>
          </div>

          {/* CEO Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded">
                  CHIEF EXECUTIVE OFFICER
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {COMPANY.leadership.ceo.name}
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                  CEO // INLAYTECHS
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {COMPANY.leadership.ceo.bio}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Operations & Client Growth</span>
              <span className="text-amber-400 font-mono">EXECUTIVE</span>
            </div>
          </div>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-semibold transition-all whitespace-nowrap"
          >
            <span>LEARN MORE ABOUT US</span>
            <ArrowUpRight className="w-4 h-4 text-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
