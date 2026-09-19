"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/services";
import { 
  ArrowUpRight, 
  Briefcase, 
  Film, 
  Image as ImageIcon, 
  Share2, 
  TrendingUp, 
  Target, 
  ShoppingCart, 
  ShieldCheck 
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import SpecularButton from "@/components/common/SpecularButton";

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);
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

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    const className = "w-5 h-5 text-[#FF007A] transition-transform duration-300 group-hover:scale-110";
    switch (name) {
      case "Briefcase": return <Briefcase className={className} />;
      case "Film": return <Film className={className} />;
      case "Image": return <ImageIcon className={className} />;
      case "Share2": return <Share2 className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      case "Target": return <Target className={className} />;
      case "ShoppingCart": return <ShoppingCart className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      default: return <Briefcase className={className} />;
    }
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF007A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          kicker="04 // SERVICES"
          title="WHAT WE DO"
          description="High-performance websites and digital marketing engineered to help your business grow, connect, and perform."
          accentColor="magenta"
        />

        {/* Interactive Kinetic Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
          {/* Left Column: Interactive Staggered Service List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/5">
            {SERVICES.map((service, idx) => {
              const isSelected = activeService.id === service.id;
              const staggerDelay = idx * 80;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  style={{
                    transitionDelay: `${staggerDelay}ms`,
                    transform: isInView ? "translateY(0)" : "translateY(24px)",
                    opacity: isInView ? 1 : 0
                  }}
                  className={`group relative py-5 px-4 cursor-pointer transition-all duration-500 rounded-xl flex items-center justify-between ${
                    isSelected
                      ? "bg-white/[0.04] border-l-2 border-[#FF007A] shadow-[0_5px_20px_rgba(255,0,122,0.08)]"
                      : "hover:bg-white/[0.02] border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Service Number (Fade In) */}
                    <span
                      className={`font-mono text-xs tracking-wider transition-colors duration-300 ${
                        isSelected
                          ? "text-[#FF007A] font-bold"
                          : "text-neutral-600 group-hover:text-neutral-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Service Name & Tagline (TranslateY + Fade) */}
                    <div>
                      <h3
                        className={`font-display text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 ${
                          isSelected
                            ? "text-white translate-x-1"
                            : "text-neutral-400 group-hover:text-neutral-200"
                        }`}
                      >
                        {service.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-1 group-hover:text-neutral-400 transition-colors mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Icon & Arrow (Subtle Scale) */}
                  <div className="flex items-center gap-3">
                    <div className="opacity-70 group-hover:opacity-100 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-[#FF007A]/20 border-[#FF007A]/40 text-white"
                          : "border-transparent text-neutral-600 group-hover:text-neutral-300"
                      }`}
                      aria-label={`View details for ${service.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Preview Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#111116] via-[#0E0E12] to-[#08080A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
              {/* Corner accent glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-2xl pointer-events-none bg-[#FF007A]/15" />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#FF007A] font-bold">
                      {activeService.number} // INLAYTECHS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded">
                    {activeService.visualHighlight}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {activeService.name}
                  </h3>
                  <p className="text-xs text-[#FF007A] font-mono tracking-wider mt-1">
                    {activeService.tagline}
                  </p>
                </div>

                {/* Overview */}
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {activeService.overview}
                </p>

                {/* Deliverables Checklist */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-neutral-400 font-mono">
                    Key Deliverables:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {activeService.deliverables.slice(0, 4).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#FF007A]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="flex-1 py-3 text-center rounded-xl text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF007A] to-[#E0006C] hover:from-[#ff1a8b] hover:to-[#FF007A] text-white shadow-[0_0_20px_rgba(255,0,122,0.35)] active:scale-98"
                  >
                    <span>SERVICE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-colors"
                  >
                    INQUIRE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
