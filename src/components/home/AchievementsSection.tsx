"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Terminal } from "lucide-react";
import BorderGlow from "@/components/common/BorderGlow";
import SectionHeader from "@/components/common/SectionHeader";
import TextReveal from "@/components/common/TextReveal";

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Business & Portfolio Website",
    "Meta Ads & Reels",
    "Poster Design",
    "Social Media Marketing",
    "Landing Page",
    "E-commerce Website"
  ];

  const filteredProjects = selectedCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const featured = filteredProjects[0];
  const secondary = filteredProjects.slice(1);

  return (
    <section id="work" className="relative py-28 bg-[#070707] border-t border-white/[0.06] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          kicker="05 // SHOWCASE"
          title="CLIENT PROJECT ACHIEVEMENTS"
          description="Real deliverables engineered with precision technology, bespoke visual architecture, and conversion-focused thinking."
          accentColor="magenta"
          className="pb-10"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#FF007A]/15 border-[#FF007A] text-white font-semibold shadow-[0_0_15px_rgba(255,0,122,0.25)]"
                  : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Featured Hero Project (7 cols) */}
          {featured && (
            <div className="lg:col-span-7 flex flex-col">
              <BorderGlow
                edgeSensitivity={28}
                glowColor="310 90 70"
                backgroundColor="#0d0d0d"
                borderRadius={20}
                glowRadius={55}
                glowIntensity={1.2}
                coneSpread={25}
                animated
                colors={["#FF007A", "#38bdf8", "#f43f5e"]}
                className="h-full"
              >
                <div className="h-full p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-[#FF007A] uppercase font-semibold">
                        {featured.categoryNumber} // {featured.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#FF007A]/10 border border-[#FF007A]/30 text-[10px] font-mono uppercase text-[#FF007A] tracking-wider font-semibold">
                        FEATURED SHOWCASE
                      </span>
                    </div>

                    {/* Title & Description (Targeted Reveals) */}
                    <div>
                      <TextReveal
                        mode="fadeUp"
                        as="h3"
                        delay={50}
                        className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FF007A] transition-colors"
                      >
                        {featured.title}
                      </TextReveal>

                      <TextReveal
                        mode="paragraph"
                        as="p"
                        delay={150}
                        className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mt-3"
                      >
                        {featured.overview}
                      </TextReveal>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featured.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-300 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-[#FF007A] text-[11px] font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>ENGINEERING SCOPE</span>
                      </div>
                      <p className="text-neutral-400 leading-relaxed">
                        {featured.solution}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-8 flex flex-wrap items-center gap-3 relative z-10">
                    <Link
                      href={`/work/${featured.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF007A] to-[#E0006C] hover:from-[#ff1a8b] hover:to-[#FF007A] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,0,122,0.35)] active:scale-98"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-colors"
                      >
                        <span>LIVE PLATFORM</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </BorderGlow>
            </div>
          )}

          {/* Secondary Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.slice(0, 2).map((project, pIdx) => {
              return (
                <BorderGlow
                  key={project.id}
                  edgeSensitivity={26}
                  glowColor="310 90 65"
                  backgroundColor="#0d0d0d"
                  borderRadius={18}
                  glowRadius={45}
                  glowIntensity={1.1}
                  coneSpread={22}
                  colors={["#FF007A", "#f43f5e", "#c084fc"]}
                >
                  <div className="p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group h-full">
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-wider uppercase font-semibold text-[#FF007A]">
                          {project.categoryNumber} // {project.category}
                        </span>
                      </div>

                      <TextReveal
                        mode="fadeUp"
                        as="h4"
                        delay={pIdx * 100}
                        className="font-display text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors"
                      >
                        {project.title}
                      </TextReveal>

                      <TextReveal
                        mode="paragraph"
                        as="p"
                        delay={pIdx * 100 + 80}
                        className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light"
                      >
                        {project.shortDescription}
                      </TextReveal>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex items-center gap-3 relative z-10">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF007A] hover:text-[#ff3b98] transition-colors"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors ml-auto"
                        >
                          <span>LIVE SITE</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
        </div>

        {/* View All Projects Action */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#FF007A]/40 text-xs tracking-wider uppercase font-semibold transition-all"
          >
            <span>VIEW ALL CLIENT ACHIEVEMENTS & CASE STUDIES</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF007A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
