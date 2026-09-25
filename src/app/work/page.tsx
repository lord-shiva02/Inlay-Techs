import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#FF007A] hover:text-[#ff3b98] transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-mono tracking-[0.25em] text-[#FF007A] uppercase font-semibold block mb-2">
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
            return (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#121214] via-[#0A0A0C] to-[#050505] border border-white/10 hover:border-[#FF007A]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div className="flex flex-col gap-4">
                  {/* Visual Image Preview */}
                  {project.image ? (
                    <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#FF007A]/40 transition-all bg-[#080808]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-[#FF007A] tracking-wider font-semibold">
                          {project.categoryNumber}
                        </span>
                      </div>

                      {project.isFeatured && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-mono text-white bg-[#FF007A]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full font-semibold">
                            FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full h-24 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent flex items-center justify-between px-6">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase text-neutral-400">
                        {project.categoryNumber} // TECHNICAL DELIVERABLE
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pb-1">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#FF007A]">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FF007A] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#FF007A] hover:text-[#ff3b98] transition-colors"
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
