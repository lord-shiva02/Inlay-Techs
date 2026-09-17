import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { getWhatsAppUrl } from "@/data/company";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  Layers, 
  Sparkles,
  HelpCircle
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} — Solutions & Specifications`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isBronze = service.accentColor === "bronze";

  // Related services
  const otherServices = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3);

  // Related work projects
  const relatedProjects = PROJECTS.filter(p => 
    p.category.toLowerCase().includes(service.name.toLowerCase()) ||
    service.name.toLowerCase().includes(p.category.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="pb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded ${
              isBronze ? "bg-amber-500/10 text-amber-400" : "bg-teal-500/10 text-teal-400"
            }`}>
              SERVICE // {service.number}
            </span>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              {service.visualHighlight}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {service.name}
          </h1>

          <p className={`font-mono text-sm sm:text-base tracking-wider mt-2 font-medium ${
            isBronze ? "text-amber-400" : "text-teal-400"
          }`}>
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-3xl mt-6 leading-relaxed">
            {service.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-xs tracking-wider uppercase transition-all shadow-lg ${
                isBronze
                  ? "bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20"
                  : "bg-teal-500 hover:bg-teal-400 text-black shadow-teal-500/20"
              }`}
            >
              <span>INQUIRE ABOUT THIS SERVICE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl(`Hello INLAYTECHS! I am interested in your ${service.name} service.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-all"
            >
              <MessageSquare className="w-4 h-4 text-teal-400" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* 2. What We Provide & Deliverables */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold block mb-2">
              SPECIFICATIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              WHAT WE PROVIDE
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-light leading-relaxed">
              Every deliverable is crafted in-house with zero outsourced ambiguity.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                  isBronze ? "text-amber-400" : "text-teal-400"
                }`} />
                <span className="text-xs sm:text-sm text-neutral-200 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Key Architectural Features */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-2">
              TECHNICAL PILLARS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              KEY SERVICE FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10"
              >
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Execution Process */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold block mb-2">
              WORKFLOW
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              HOW WE EXECUTE THIS SERVICE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-2xl font-black text-white/20 block mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Suitable For & Strategic Benefits */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Suitable For */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" />
              <span>Suitable For</span>
            </h3>
            <ul className="space-y-3">
              {service.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Benefits */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Strategic Benefits</span>
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 6. Related Projects (if available) */}
        {relatedProjects.length > 0 && (
          <div className="py-16 border-b border-white/10">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Related Project Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-teal-400 uppercase">
                      {proj.category}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mt-1">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-2">
                      {proj.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mt-4"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Bottom CTA Bar */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-teal-950/30 via-[#111111] to-amber-950/20 border border-white/10">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Ready to deploy {service.name}?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Talk directly with INLAYTECHS engineers to scope your project.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              Start Project
            </Link>
            <a
              href={getWhatsAppUrl(`Hi INLAYTECHS! I want to start a ${service.name} project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
