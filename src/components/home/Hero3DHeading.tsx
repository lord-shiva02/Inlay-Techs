"use client";

import React, { useState, useEffect, useRef } from "react";

interface WordData {
  text: string;
  delay: number;
  isAccent?: boolean;
}

const LINE_1: WordData[] = [
  { text: "Digital", delay: 0 },
  { text: "Experiences.", delay: 100 },
];

const LINE_2: WordData[] = [
  { text: "Built", delay: 200 },
  { text: "for", delay: 300 },
  { text: "Growth.", delay: 400, isAccent: true },
];

export const Hero3DHeading: React.FC = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [showLightSweep, setShowLightSweep] = useState(false);
  const [sweepDone, setSweepDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check device capabilities & reduced motion preference
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 1024 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // Trigger 3D reveal on mount (via requestAnimationFrame for smooth painting)
    const rafId = requestAnimationFrame(() => {
      setIsRevealed(true);
    });

    // Schedule single light sweep after word reveal completes (around 950ms)
    let sweepStartTimer: NodeJS.Timeout;
    let sweepEndTimer: NodeJS.Timeout;

    if (!motionQuery.matches) {
      sweepStartTimer = setTimeout(() => {
        setShowLightSweep(true);

        sweepEndTimer = setTimeout(() => {
          setShowLightSweep(false);
          setSweepDone(true);
        }, 1100);
      }, 900);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
      clearTimeout(sweepStartTimer);
      clearTimeout(sweepEndTimer);
    };
  }, []);

  // Desktop subtle 3D mouse hover tilt interaction (max 3deg)
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let rafTilt: number = 0;
    let isTilted = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateTilt = () => {
      currentRotX = lerp(currentRotX, targetRotX, 0.08);
      currentRotY = lerp(currentRotY, targetRotY, 0.08);

      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1200px) rotateX(${currentRotX.toFixed(
          2
        )}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }

      // Continue loop while moving or returning to rest
      if (
        Math.abs(targetRotX - currentRotX) > 0.01 ||
        Math.abs(targetRotY - currentRotY) > 0.01 ||
        isTilted
      ) {
        rafTilt = requestAnimationFrame(updateTilt);
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1 based on viewport/hero space
      const nx = (e.clientX - centerX) / (window.innerWidth / 2);
      const ny = (e.clientY - centerY) / (window.innerHeight / 2);

      // Max tilt: 3deg rotateX, 3deg rotateY
      targetRotY = Math.max(-3, Math.min(3, nx * 3));
      targetRotX = Math.max(-3, Math.min(3, -ny * 3));

      if (!isTilted) {
        isTilted = true;
        cancelAnimationFrame(rafTilt);
        rafTilt = requestAnimationFrame(updateTilt);
      }
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
      isTilted = false;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(rafTilt);
    };
  }, [isMobile, reducedMotion]);

  // Compute 3D inline styles based on state and device
  const getWordStyle = (word: WordData) => {
    if (reducedMotion) {
      return {
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? "translateY(0)" : "translateY(15px)",
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${word.delay}ms`,
      };
    }

    if (isMobile) {
      return {
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed
          ? "perspective(1000px) rotateX(0deg) translateY(0) translateZ(0) scale(1)"
          : "perspective(1000px) rotateX(20deg) translateY(25px) translateZ(-30px) scale(0.95)",
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${word.delay}ms`,
      };
    }

    return {
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed
        ? "perspective(1200px) rotateX(0deg) translateY(0) translateZ(0) scale(1)"
        : "perspective(1200px) rotateX(65deg) translateY(70px) translateZ(-100px) scale(0.92)",
      transition: `opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1), transform 0.95s cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${word.delay}ms`,
    };
  };

  return (
    <h1
      ref={containerRef}
      className="relative font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto perspective-hero select-none"
      aria-label="Digital Experiences. Built for Growth."
    >
      <div
        ref={tiltRef}
        className="relative transform-gpu will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* LINE 1: Digital Experiences. */}
        <span className="block overflow-visible mb-1 sm:mb-2">
          {LINE_1.map((word, idx) => (
            <span
              key={idx}
              className="inline-block text-metallic-chrome will-change-transform"
              style={{
                ...getWordStyle(word),
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                marginRight: idx === LINE_1.length - 1 ? 0 : "0.26em",
              }}
            >
              {word.text}
            </span>
          ))}
        </span>

        {/* LINE 2: Built for Growth. */}
        <span className="block overflow-visible">
          {LINE_2.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block will-change-transform ${
                word.isAccent ? "text-metallic-accent" : "text-metallic-chrome"
              }`}
              style={{
                ...getWordStyle(word),
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                marginRight: idx === LINE_2.length - 1 ? 0 : "0.26em",
              }}
            >
              {word.text}
            </span>
          ))}
        </span>

        {/* SINGLE METALLIC LIGHT SWEEP (Left -> Right, 800-1200ms, Runs Once) */}
        {showLightSweep && !sweepDone && (
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20"
            aria-hidden="true"
          >
            <div className="metallic-light-sweep" />
          </div>
        )}
      </div>
    </h1>
  );
};

export default Hero3DHeading;
