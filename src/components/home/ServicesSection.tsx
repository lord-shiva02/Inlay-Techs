"use client";

import React, { useState } from "react";
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

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);

  // Map icon names to Lucide icons
  const getIcon = (name: string, accent: string) => {
    const className = `w-5 h-5 ${accent === "teal" ? "text-teal-400" : "text-amber-400"}`;
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
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
              04 // SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            &ldquo;Digital solutions designed to help your business grow, connect and perform.&rdquo;
          </p>
        </div>

        {/* Interactive Kinetic Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
          {/* Left Column: Interactive List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/5">
            {SERVICES.map((service) => {
              const isSelected = activeService.id === service.id;
              const isTeal = service.accentColor === "teal";

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group relative py-5 px-4 cursor-pointer transition-all duration-300 rounded-xl flex items-center justify-between ${
                    isSelected
                      ? "bg-white/[0.04] border-l-2 " + (isTeal ? "border-teal-400" : "border-amber-400")
                      : "hover:bg-white/[0.02] border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Index Number */}
                    <span
                      className={`font-mono text-xs tracking-wider transition-all duration-300 ${
                        isSelected
                          ? isTeal ? "text-teal-400 font-bold" : "text-amber-400 font-bold"
                          : "text-neutral-600 group-hover:text-neutral-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Service Name */}
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

                  {/* Icon & Arrow */}
                  <div className="flex items-center gap-3">
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                      {getIcon(service.iconName, service.accentColor)}
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? isTeal 
                            ? "bg-teal-500/20 border-teal-500/40 text-teal-300"
                            : "bg-amber-500/20 border-amber-500/40 text-amber-300"
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
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
              {/* Corner accent glow */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-2xl pointer-events-none transition-colors duration-500 ${
                  activeService.accentColor === "teal" ? "bg-teal-500/15" : "bg-amber-500/15"
                }`}
              />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-teal-400 font-bold">
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
                  <p className="text-xs text-teal-400 font-mono tracking-wider mt-1">
                    {activeService.tagline}
                  </p>
                </div>

                {/* Overview */}
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {activeService.overview}
                </p>

                {/* Deliverables Checklist */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-neutral-400">
                    Key Deliverables:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {activeService.deliverables.slice(0, 4).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          activeService.accentColor === "teal" ? "bg-teal-400" : "bg-amber-400"
                        }`} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className={`flex-1 py-3 text-center rounded-lg text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2 ${
                      activeService.accentColor === "teal"
                        ? "bg-teal-500 hover:bg-teal-400 text-black shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                        : "bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(205,127,50,0.3)]"
                    }`}
                  >
                    <span>SERVICE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-colors"
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
