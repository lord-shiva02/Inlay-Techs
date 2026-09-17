import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore INLAYTECHS complete suite of digital services: Business websites, Meta Ads, Reels, poster design, landing pages, e-commerce, and website maintenance."
};

export default function ServicesIndexPage() {
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
            PRACTICE AREAS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            OUR DIGITAL SERVICES
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light mt-4 leading-relaxed">
            Every digital capability at INLAYTECHS is engineered to deliver measurable commercial value, elevated brand perception, and technical resilience.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {SERVICES.map((service) => {
            const isBronze = service.accentColor === "bronze";
            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#060606] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                      isBronze ? "text-amber-400" : "text-teal-400"
                    }`}>
                      {service.number} // VERTICAL
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase">
                      {service.visualHighlight}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                    {service.name}
                  </h2>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-300">
                      {service.deliverables.slice(0, 3).map((deliv, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isBronze ? "bg-amber-400" : "bg-teal-400"
                          }`} />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold ${
                      isBronze ? "text-amber-400 hover:text-amber-300" : "text-teal-400 hover:text-teal-300"
                    } transition-colors`}
                  >
                    <span>EXPLORE SERVICE SPECIFICATIONS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
