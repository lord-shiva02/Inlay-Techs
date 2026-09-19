"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import { TextReveal } from "@/components/common/TextReveal";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#070707] border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF007A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & WhatsApp Help Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 sticky top-28">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF007A] animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-300 uppercase font-semibold">
                  11 // INQUIRIES & CLARITY
                </span>
              </div>
              
              <TextReveal
                text="FREQUENTLY ASKED QUESTIONS"
                as="h2"
                className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
              />

              <p className="text-neutral-400 text-sm font-light mt-4 leading-relaxed">
                Direct answers regarding our website architecture, digital marketing strategies, delivery timelines, and project engagement models.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121216] via-[#0e0e11] to-[#08080a] border border-white/10 flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF007A]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#FF007A]/20 transition-all" />

              <div className="w-10 h-10 rounded-xl bg-[#FF007A]/10 border border-[#FF007A]/30 flex items-center justify-center text-[#FF007A]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">
                Have a specific question?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Our founders and engineers are directly available on WhatsApp for immediate technical and pricing consultations.
              </p>
              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF007A] hover:text-[#ff3b98] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-white/[0.03] border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" 
                      : "bg-white/[0.015] border-white/[0.06] hover:border-white/15 hover:bg-white/[0.025]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-medium text-white group-hover:text-[#FF007A] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "rotate-180 bg-[#FF007A]/15 border-[#FF007A]/40 text-[#FF007A]" 
                          : "bg-white/[0.03] border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
