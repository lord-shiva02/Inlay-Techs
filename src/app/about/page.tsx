import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { ArrowLeft, ArrowUpRight, ShieldCheck, UserCheck, Target, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About INLAYTECHS & Leadership",
  description: "Learn about INLAYTECHS, our technology philosophy, and executive leadership under Founder Mr. Eswaran and CEO G. Deenadhayalan."
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl pb-16 border-b border-white/10">
          <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
            COMPANY PROFILE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            ABOUT INLAYTECHS
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 font-light mt-6 leading-relaxed">
            INLAYTECHS is a modern technology and digital solutions company focused on designing and engineering bespoke websites, e-commerce platforms, high-converting landing pages, and targeted digital marketing campaigns.
          </p>
        </div>

        {/* Leadership Deep Dive */}
        <div className="py-16 border-b border-white/10">
          <span className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase font-semibold block mb-2">
            EXECUTIVE GOVERNANCE
          </span>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-12">
            LEADERSHIP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block">
                    FOUNDER
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {COMPANY.leadership.founder.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-light mt-2">
                  {COMPANY.leadership.founder.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-xs text-neutral-500 font-mono">
                PRACTICE LEAD // ARCHITECTURE & TECH
              </div>
            </div>

            {/* CEO */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                    CHIEF EXECUTIVE OFFICER
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {COMPANY.leadership.ceo.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-light mt-2">
                  {COMPANY.leadership.ceo.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-xs text-neutral-500 font-mono">
                EXECUTIVE DIRECTOR // OPERATIONS & MARKETING
              </div>
            </div>
          </div>
        </div>

        {/* Company Core Values */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Bespoke Engineering
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              We never recycle cheap boilerplate templates. Each platform is designed and coded to meet specific client objectives and performance criteria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Conversion Architecture
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              A website must generate inquiries, sales, or bookings. Every visual section is architected to eliminate distractions and inspire action.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Direct Accountability
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              You communicate directly with founders and senior engineers who build and maintain your digital products.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-teal-950/40 via-[#111111] to-[#0A0A0A] border border-white/10">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Work directly with INLAYTECHS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Let&apos;s build a digital platform that sets your business apart.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
