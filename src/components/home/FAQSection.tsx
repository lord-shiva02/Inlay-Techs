"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & WhatsApp Help Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
                11 // INQUIRIES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="text-neutral-400 text-sm font-light mt-4 leading-relaxed">
                Direct answers regarding our website development, digital marketing services, workflows, and engagement models.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/10 flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">
                Have a specific question?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Our founders and developers are directly available on WhatsApp to answer technical or pricing inquiries.
              </p>
              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 hover:text-teal-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion (8 cols) */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-medium text-white group-hover:text-teal-300 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-teal-500/10 border-teal-500/30 text-teal-400" : "text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-sm text-neutral-300 font-light leading-relaxed pr-8">
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
