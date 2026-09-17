import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { getWhatsAppUrl } from "@/data/company";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Cpu 
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex(p => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="pb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Header */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded">
              CATEGORY // {project.category}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-3xl mt-6 leading-relaxed">
            {project.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
              >
                <span>OPEN LIVE PLATFORM</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-all"
            >
              <span>INQUIRE SIMILAR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
                THE OBJECTIVE
              </span>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                The Challenge
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-[#0B0B0B] border border-teal-500/20 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2 font-semibold">
                EXECUTION
              </span>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                The Solution
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies & Features */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Tech Stack (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-400" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">
                Deliverables Provided
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Engineered Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Navigator */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              NEXT CASE STUDY
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-1">
              {nextProject.title}
            </h3>
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all"
          >
            <span>VIEW NEXT PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
