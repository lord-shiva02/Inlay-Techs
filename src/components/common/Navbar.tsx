"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InlaytechsLogo } from "./InlaytechsLogo";
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "@/data/company";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <InlaytechsLogo variant="primary-dark" size="sm" withGlow priority />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Conversion Action */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick WhatsApp Link */}
          <a
            href={getWhatsAppUrl("Hello INLAYTECHS! I would like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="p-2 rounded-lg text-neutral-400 hover:text-teal-400 border border-white/5 hover:border-teal-500/30 bg-white/[0.02] hover:bg-teal-500/10 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] active:scale-98"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-white/5 border border-white/10"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.2em] font-medium py-2 flex items-center justify-between border-b border-white/5 ${
                    isActive ? "text-teal-400 font-bold" : "text-neutral-300"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-teal-400" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={getPhoneUrl()}
              className="w-full py-2 text-center text-neutral-400 hover:text-white text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>Call +91 86880 75376</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
