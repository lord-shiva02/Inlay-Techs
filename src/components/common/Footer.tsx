"use client";

import React from "react";
import Link from "next/link";
import { InlaytechsLogo } from "./InlaytechsLogo";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowUpRight 
} from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { COMPANY, getWhatsAppUrl, getEmailUrl, getPhoneUrl } from "@/data/company";
import { SERVICES } from "@/data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#080808] border-t border-white/10 pt-16 pb-12 overflow-hidden text-neutral-400">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/5">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <InlaytechsLogo variant="primary-dark" size="md" withGlow />
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              We engineer modern websites, e-commerce storefronts, high-converting landing pages, and targeted digital marketing campaigns that empower businesses to command digital authority.
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-neutral-500 pt-2">
              <p><span className="text-neutral-300 font-medium">Founder:</span> {COMPANY.leadership.founder.name}</p>
              <p><span className="text-neutral-300 font-medium">CEO:</span> {COMPANY.leadership.ceo.name}</p>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow INLAYTECHS on Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400 flex items-center justify-center transition-all text-neutral-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with INLAYTECHS on WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-400 flex items-center justify-center transition-all text-neutral-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={getEmailUrl()}
                aria-label="Email INLAYTECHS"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-400 flex items-center justify-center transition-all text-neutral-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-teal-400/90 hover:text-teal-300 font-medium transition-colors inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 8 Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">All Services</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Client Achievements</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About & Leadership</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <a
                href={getEmailUrl()}
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="truncate">{COMPANY.email}</span>
              </a>

              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 transition-all font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors pt-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow {COMPANY.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-500">Official Brand: {COMPANY.domain}</span>
            <Link href="/contact" className="text-neutral-400 hover:text-teal-400 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
