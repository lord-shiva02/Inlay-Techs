"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Film, Share2, Target, Sparkles, TrendingUp, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import TextReveal from "@/components/common/TextReveal";
import SpecularButton from "@/components/common/SpecularButton";

export const DigitalMarketingSection: React.FC = () => {
  const marketingPillars = [
    {
      title: "Meta Ads & Reels",
      desc: "Short-form video creatives and targeted campaigns engineered to arrest attention on Instagram and Facebook feeds.",
      icon: <Film className="w-5 h-5 text-[#FF007A]" />,
      tag: "HIGH RETENTION"
    },
    {
      title: "Social Media Distribution",
      desc: "Structured content calendar, aesthetic feed overhaul, and engaging copy to build authority with prospective buyers.",
      icon: <Share2 className="w-5 h-5 text-white" />,
      tag: "BRAND AUTHORITY"
    },
    {
      title: "Promotional Poster Design",
      desc: "High-impact visual graphics for announcements, digital flyers, and print-ready commercial event marketing.",
      icon: <Sparkles className="w-5 h-5 text-[#FF007A]" />,
      tag: "VISUAL IMPACT"
    },
    {
      title: "Targeted Customer Acquisition",
      desc: "Data-driven audience segmentation and conversion tracking to ensure every marketing spend is accountable.",
      icon: <Target className="w-5 h-5 text-white" />,
      tag: "ROI FOCUSED"
    }
  ];

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF007A]/10 via-purple-900/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#FF007A] uppercase font-semibold">
              08 // GROWTH ENGINE
            </span>

            {/* Sequential "Reach. Engage. Grow." Headline */}
            <div className="flex flex-col gap-2">
              <TextReveal
                as="h2"
                mode="fadeUp"
                delay={100}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
              >
                <span>Reach. </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-[#FF007A] to-purple-400">
                  Engage.{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-rose-400">
                  Grow.
                </span>
              </TextReveal>
              <TextReveal
                as="h3"
                mode="fadeUp"
                delay={280}
                className="font-display text-2xl sm:text-3xl font-semibold text-neutral-200 tracking-tight mt-1"
              >
                Amplify your brand with precision digital marketing.
              </TextReveal>
            </div>

            <TextReveal
              mode="paragraph"
              as="p"
              delay={420}
              className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed"
            >
              In today&apos;s digital marketplace, having a website is only step one. INLAYTECHS creates high-retention Meta Ads, viral-ready Instagram Reels, high-impact promotional posters, and integrated social campaigns designed to turn audience attention into measurable business inquiries.
            </TextReveal>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="inline-block">
                <SpecularButton
                  size="md"
                  radius={12}
                  tint="#FF007A"
                  tintOpacity={0.15}
                  blur={12}
                  textColor="#ffffff"
                  lineColor="#FF007A"
                  baseColor="#441133"
                  intensity={3}
                  shineSize={20}
                  shineFade={40}
                  thickness={1.6}
                  speed={0.7}
                  followMouse
                  proximity={220}
                  autoAnimate
                  className="!font-semibold !text-xs !tracking-wider !uppercase shadow-[0_0_25px_rgba(255,0,122,0.35)]"
                >
                  <span>GROW YOUR BUSINESS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </SpecularButton>
              </Link>

              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I want to discuss digital marketing and Meta Ads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-wider uppercase font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF007A]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): 4 Marketing Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketingPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#111116] via-[#0E0E12] to-[#08080A] border border-white/10 hover:border-[#FF007A]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight group-hover:text-[#FF007A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1 text-[#FF007A] font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </span>
                  <span className="text-neutral-600">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
