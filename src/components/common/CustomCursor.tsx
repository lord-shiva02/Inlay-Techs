"use client";

import React, { useEffect, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Strict Touch / Device Detection: Only enable on desktop with fine pointer & hover support
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchOnly = window.matchMedia("(pointer: coarse), (hover: none)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || isTouchOnly || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let hoverState: "normal" | "interactive" | "card" = "normal";
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer, .specular-button'
      );
      const isCard = target.closest(
        ".glare-hover, .border-glow-card, .card-spotlight, .electric-border"
      );

      if (isInteractive) {
        hoverState = "interactive";
      } else if (isCard) {
        hoverState = "card";
      } else {
        hoverState = "normal";
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    // 2. High-performance requestAnimationFrame Loop (Direct DOM manipulation - Zero React re-renders)
    const animate = () => {
      if (isVisible) {
        // Direct responsive positioning with micro-damping for ring
        ringX += (mouseX - ringX) * 0.75;
        ringY += (mouseY - ringY) * 0.75;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

          if (hoverState === "interactive") {
            ringRef.current.style.width = "30px";
            ringRef.current.style.height = "30px";
            ringRef.current.style.borderColor = "#FF007A";
            ringRef.current.style.backgroundColor = "rgba(255, 0, 122, 0.08)";
          } else if (hoverState === "card") {
            ringRef.current.style.width = "24px";
            ringRef.current.style.height = "24px";
            ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.4)";
            ringRef.current.style.backgroundColor = "transparent";
          } else {
            ringRef.current.style.width = "18px";
            ringRef.current.style.height = "18px";
            ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.25)";
            ringRef.current.style.backgroundColor = "transparent";
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
      style={{ pointerEvents: "none" }}
    >
      {/* Precision silver/white center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200"
        style={{ pointerEvents: "none", willChange: "transform" }}
      />

      {/* Subtle outer accent ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 rounded-full border border-white/25 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          width: "18px",
          height: "18px",
          pointerEvents: "none",
          willChange: "transform, width, height"
        }}
      />
    </div>
  );
};

export default CustomCursor;
