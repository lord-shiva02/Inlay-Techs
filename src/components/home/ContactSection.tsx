"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { InstagramIcon } from "@/components/common/InstagramIcon";
import { COMPANY, getWhatsAppUrl, getEmailUrl, getPhoneUrl } from "@/data/company";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Business & Portfolio Website",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Business & Portfolio Website",
    "Meta Ads & Reels",
    "Poster Design",
    "Social Media Marketing",
    "Digital Marketing",
    "Landing Page",
    "E-commerce Website",
    "Website Maintenance"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build formatted message for WhatsApp direct dispatch
    const text = `*New Project Inquiry — INLAYTECHS*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Company:* ${formData.company || "Not provided"}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-teal-400 uppercase font-semibold block mb-2">
                13 // CONTACT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                LET&apos;S BUILD SOMETHING GREAT.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                Connect directly with our engineering and marketing team. We provide transparent estimates, structured scopes, and rapid execution.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl("Hello INLAYTECHS! I would like to schedule a project discussion.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-gradient-to-r from-teal-950/40 to-transparent border border-teal-500/30 hover:border-teal-400/60 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-teal-400 font-semibold tracking-wider block">
                      FASTEST RESPONSE
                    </span>
                    <span className="text-sm font-display font-bold text-white">
                      Chat on WhatsApp (+91 86880 75376)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href={getEmailUrl()}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider block">
                      OFFICIAL INQUIRIES
                    </span>
                    <span className="text-sm font-display font-medium text-white">
                      {COMPANY.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>

              {/* Phone Card */}
              <a
                href={getPhoneUrl()}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider block">
                      VOICE CALL
                    </span>
                    <span className="text-sm font-display font-medium text-white">
                      {COMPANY.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>

              {/* Instagram Channel */}
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider block">
                      INSTAGRAM
                    </span>
                    <span className="text-sm font-display font-medium text-white">
                      {COMPANY.instagramHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Dispatched!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md leading-relaxed font-light">
                    Thank you, {formData.name}. We have forwarded your project details to WhatsApp for instant discussion. You can also write directly to <span className="text-teal-400 font-mono">{COMPANY.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="font-display text-lg font-bold text-white">
                      Start a Project Inquiry
                    </h3>
                    <span className="text-[11px] font-mono text-teal-400 uppercase">
                      INLAYTECHS Direct Route
                    </span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Brand or Enterprise name"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#141414] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, timeline, and current challenges..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(20,184,166,0.35)] hover:shadow-[0_0_35px_rgba(20,184,166,0.55)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>SUBMIT & CHAT ON WHATSAPP</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-mono pt-1">
                    Direct dispatch to INLAYTECHS executive team. Zero spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
