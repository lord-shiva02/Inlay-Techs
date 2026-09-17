"use client";

import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Support" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip Label */}
      <div className="mr-3 px-3 py-1.5 rounded-full bg-[#111111]/95 border border-teal-500/30 text-xs text-neutral-200 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        <span className="font-medium">Chat on WhatsApp</span>
        <ArrowUpRight className="w-3 h-3 text-teal-400" />
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl("Hello INLAYTECHS! I would like to inquire about your digital services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with INLAYTECHS"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-br from-[#0D9488] to-[#042F2E] text-white shadow-[0_4px_25px_rgba(20,184,166,0.4)] border border-teal-400/40 hover:scale-110 hover:shadow-[0_4px_35px_rgba(20,184,166,0.6)] active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-teal-400/20 animate-ping opacity-75" />
        <MessageSquare className="w-6 h-6 text-white relative z-10" />
      </a>
    </aside>
  );
};
