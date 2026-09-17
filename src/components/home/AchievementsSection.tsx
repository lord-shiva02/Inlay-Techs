"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Terminal } from "lucide-react";

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
    <section id="work" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
              05 // SHOWCASE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              CLIENT PROJECT ACHIEVEMENTS
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Real deliverables engineered with precision technology, bespoke visual architecture, and conversion-focused thinking.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-teal-500/10 border-teal-400 text-teal-300 font-semibold shadow-[0_0_15px_rgba(20,184,166,0.2)]"
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
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-teal-500/40 transition-all duration-500">
                {/* Accent glow on hover */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold">
                      {featured.categoryNumber} // {featured.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-mono uppercase text-teal-300 tracking-wider">
                      FEATURED SHOWCASE
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mt-3">
                      {featured.overview}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featured.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[11px] font-mono text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-teal-400 text-[11px]">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-colors"
                    >
                      <span>LIVE PLATFORM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.slice(0, 2).map((project) => {
              const isBronze = project.accent === "bronze";
              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-gradient-to-br from-[#101010] via-[#0A0A0A] to-[#050505] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-white/25 transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono tracking-wider uppercase font-semibold ${
                        isBronze ? "text-amber-400" : "text-teal-400"
                      }`}>
                        {project.categoryNumber} // {project.category}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex items-center gap-3 relative z-10">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400 hover:text-teal-300 transition-colors"
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
              );
            })}
          </div>
        </div>

        {/* View All Projects Action */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 hover:border-teal-500/40 text-xs tracking-wider uppercase font-semibold transition-all"
          >
            <span>VIEW ALL CLIENT ACHIEVEMENTS & CASE STUDIES</span>
            <ArrowUpRight className="w-4 h-4 text-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
