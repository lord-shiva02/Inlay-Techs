import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Project Achievements & Work Showcase",
  description: "Browse INLAYTECHS portfolio of client achievements across business websites, Meta Ads, Reels, landing pages, and e-commerce."
};

export default function WorkIndexPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl pb-16 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-teal-400 hover:text-teal-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
            CLIENT DELIVERABLES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            CLIENT PROJECT ACHIEVEMENTS
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light mt-4 leading-relaxed">
            Real deliverables engineered with modern full-stack technologies, high-retention motion design, and conversion-focused architectures.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {PROJECTS.map((project) => {
            const isBronze = project.accent === "bronze";
            return (
              <div
                key={project.id}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#060606] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                      isBronze ? "text-amber-400" : "text-teal-400"
                    }`}>
                      {project.categoryNumber} // {project.category}
                    </span>
                    {project.isFeatured && (
                      <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
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
    </div>
  );
}
