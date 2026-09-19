"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import SpecularButton from "@/components/common/SpecularButton";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure audio is strictly muted programmatically for seamless browser autoplay
    video.defaultMuted = true;
    video.muted = true;

    // Respect accessibility prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = () => {
      if (mediaQuery.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Autoplay policy fallback: silent catch
        });
      }
    };

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <section className="relative min-h-screen min-h-[100svh] w-full flex items-center justify-center pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#050505]">
      {/* =========================================================================
          01. HERO BACKGROUND VIDEO (EXCLUSIVE TO HERO SECTION)
          ========================================================================= */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 border-0 outline-none"
      >
        <source src="/videos/inlaytechs_hero_page_.mp4" type="video/mp4" />
      </video>

      {/* =========================================================================
          02. CINEMATIC OVERLAYS
          ========================================================================= */}
      {/* Linear top-to-bottom dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(5, 5, 5, 0.75) 85%, rgba(5, 5, 5, 0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle radial vignette focused on hero content area */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.15) 0%, rgba(5, 5, 5, 0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle brand neon magenta / pink ambient glow for futuristic agency depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-[92vw] h-[380px] bg-gradient-to-tr from-[#FF007A]/12 via-pink-500/5 to-transparent rounded-full blur-3xl z-[2] pointer-events-none"
        aria-hidden="true"
      />

      {/* =========================================================================
          03. HERO EDITORIAL CONTENT (LINE-BY-LINE REVEAL)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* SMALL BADGE */}
        <div className="animate-hero-badge mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/45 border border-white/15 backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,122,0.18)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF007A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF007A]" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white">
            INLAYTECHS
          </span>
          <span className="text-white/20 text-[10px]">|</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-300 font-medium hidden sm:inline">
            Digital Engineering & Marketing
          </span>
        </div>

        {/* MAIN DISPLAY HEADING (Line-by-Line Staggered Animation) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mx-auto overflow-hidden">
          <span className="animate-hero-line-1 block">
            Digital Experiences.
          </span>
          <span className="animate-hero-line-2 block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF007A]">
            Built for Growth.
          </span>
        </h1>

        {/* CTA ACTION GROUP WITH SPECULAR BUTTONS (Directly down the text with exact 20px gap) */}
        <div className="animate-hero-cta mt-[20px] flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* CTA BUTTON 1: Explore Services */}
          <Link href="/services" className="w-full sm:w-auto inline-block">
            <SpecularButton
              size="md"
              radius={14}
              tint="#ffffff"
              tintOpacity={0.05}
              blur={12}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#3a3a3a"
              intensity={2.2}
              shineSize={20}
              shineFade={40}
              thickness={1.4}
              speed={0.4}
              followMouse
              proximity={220}
              autoAnimate={false}
              className="w-full sm:w-auto !font-semibold !text-xs !tracking-[0.18em] !uppercase shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </SpecularButton>
          </Link>

          {/* CTA BUTTON 2: Get Started */}
          <Link href="/contact" className="w-full sm:w-auto inline-block">
            <SpecularButton
              size="md"
              radius={14}
              tint="#FF007A"
              tintOpacity={0.15}
              blur={12}
              textColor="#ffffff"
              lineColor="#FF007A"
              baseColor="#441133"
              intensity={3}
              shineSize={22}
              shineFade={45}
              thickness={1.8}
              speed={0.75}
              followMouse
              proximity={250}
              autoAnimate
              className="w-full sm:w-auto !font-semibold !text-xs !tracking-[0.18em] !uppercase shadow-[0_0_35px_rgba(255,0,122,0.45)]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>

        {/* Secondary Quick WhatsApp Consultation (20px top margin) */}
        <div className="animate-hero-cta mt-[20px] flex items-center justify-center gap-6 text-xs text-neutral-400">
          <a
            href={getWhatsAppUrl("Hello INLAYTECHS! I want to start a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors py-1 group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FF007A] group-hover:scale-110 transition-transform" />
            <span className="tracking-wider uppercase text-[11px] font-medium">Chat on WhatsApp</span>
          </a>
        </div>

        {/* GUIDING PILLARS / METRICS */}
        <div className="animate-hero-metrics mt-12 sm:mt-16 pt-8 border-t border-white/10 w-full max-w-2xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">7 Core</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-0.5">
              Digital Services
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-2">
            <span className="font-display text-lg sm:text-2xl font-bold text-[#FF007A] tracking-tight">100% Bespoke</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-0.5">
              Engineering
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">Rapid Direct</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-0.5">
              Agency Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
