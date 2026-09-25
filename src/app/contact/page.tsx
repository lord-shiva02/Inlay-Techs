import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project — Contact INLAYTECHS",
  description: "Get in touch with INLAYTECHS to discuss your website development, e-commerce, Meta Ads, or digital marketing requirements."
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-teal-400 hover:text-teal-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <ContactSection />
    </div>
  );
}
