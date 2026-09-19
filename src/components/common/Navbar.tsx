"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InlaytechsLogo } from "./InlaytechsLogo";
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "@/data/company";
import SpecularButton from "./SpecularButton";

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
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <InlaytechsLogo variant="primary-dark" size="sm" withGlow priority />
        </Link>

        {/* Center: Desktop Navigation Links (Clean Muted Silver -> White with Subtle Magenta Line Reveal) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 relative py-1 group ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {/* Subtle underline line reveal on hover without flashing or jumping */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#FF007A] rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
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
            className="p-2 rounded-xl text-neutral-400 hover:text-[#FF007A] border border-white/5 hover:border-[#FF007A]/30 bg-white/[0.02] hover:bg-[#FF007A]/10 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* Primary CTA with SpecularButton */}
          <Link href="/contact" className="inline-block">
            <SpecularButton
              size="sm"
              radius={10}
              tint="#FF007A"
              tintOpacity={0.15}
              blur={10}
              textColor="#ffffff"
              lineColor="#FF007A"
              baseColor="#441133"
              intensity={2.8}
              shineSize={20}
              shineFade={40}
              thickness={1.5}
              speed={0.7}
              followMouse
              proximity={200}
              autoAnimate
              className="!font-semibold !text-[11px] !tracking-wider !uppercase shadow-[0_0_20px_rgba(255,0,122,0.3)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </SpecularButton>
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
                    isActive ? "text-[#FF007A] font-bold" : "text-neutral-300"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF007A]" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-[#FF007A] to-[#E0006C] hover:from-[#ff1a8b] hover:to-[#FF007A] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FF007A]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={getPhoneUrl()}
              className="w-full py-2 text-center text-neutral-400 hover:text-white text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-3 h-3 text-[#FF007A]" />
              <span>Call +91 86880 75376</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
