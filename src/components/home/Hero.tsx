"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Sparkles, Layers, ShieldCheck, Cpu } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Architectural Grid & Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      
      {/* Ambient Gradient Flares */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-teal-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Editorial Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Badge Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-300">
                Digital Engineering & Marketing Agency
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              WE BUILD DIGITAL EXPERIENCES{" "}
              <span className="text-metallic-teal block sm:inline">THAT BUILD</span>{" "}
              <span className="text-metallic-bronze">BUSINESSES.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              INLAYTECHS architects bespoke websites, high-converting e-commerce storefronts, and targeted digital marketing campaigns that empower forward-thinking brands to establish lasting digital authority.
            </p>

            {/* Primary Conversion Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.35)] hover:shadow-[0_0_40px_rgba(20,184,166,0.55)] active:scale-98"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-xs tracking-wider uppercase transition-all duration-300"
              >
                <span>VIEW OUR WORK</span>
              </Link>

              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I want to start a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-teal-950/40 hover:bg-teal-900/50 text-teal-300 border border-teal-500/30 font-medium text-xs tracking-wider uppercase transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Quick Metrics / Guiding Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-lg">
              <div>
                <span className="block font-display text-xl font-bold text-white">8 Core</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Digital Services</span>
              </div>
              <div>
                <span className="block font-display text-xl font-bold text-teal-400">100% Bespoke</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Engineering</span>
              </div>
              <div>
                <span className="block font-display text-xl font-bold text-amber-400">Rapid Direct</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Support</span>
              </div>
            </div>
          </div>

          {/* Right: Futuristic Abstract 3D Geometric Display (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Geometric Frame & Outer Glow */}
            <div className="relative w-full aspect-square max-w-[440px] rounded-2xl bg-gradient-to-br from-[#111111] via-[#0A0A0A] to-[#050505] p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Background ambient light */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/30 transition-all duration-500" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all duration-500" />

              {/* Fine technical grid inside card */}
              <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />

              {/* Central Official 3D Metallic Emblem Showcase */}
              <div className="relative h-full flex flex-col items-center justify-between z-10">
                {/* Top Status Header */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-teal-400" />
                    <span>SYSTEM ID // INLAY-2026</span>
                  </div>
                  <span className="text-teal-400 font-semibold tracking-wider">OFFICIAL BRAND</span>
                </div>

                {/* 3D Render & Official Emblem */}
                <div className="relative my-auto flex flex-col items-center justify-center w-full py-4">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-teal-500/40 transition-all duration-500">
                    <Image
                      src="/assets/renders/inlaytechs_original_reference.png"
                      alt="Official INLAYTECHS 3D Geometric Brand Symbol"
                      fill
                      priority
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="mt-4 font-display text-sm tracking-[0.25em] text-neutral-300 font-semibold uppercase">
                    INLAYTECHS
                  </p>
                  <p className="text-[11px] text-neutral-400 tracking-wider">
                    Precision Digital Solutions
                  </p>
                </div>

                {/* Bottom Tech Indicators */}
                <div className="w-full grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-[10px] text-neutral-400 font-mono">
                  <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded border border-white/5">
                    <Layers className="w-3 h-3 text-teal-400" />
                    <span>MODERN ARCHITECTURE</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded border border-white/5">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    <span>SECURE & OPTIMIZED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
