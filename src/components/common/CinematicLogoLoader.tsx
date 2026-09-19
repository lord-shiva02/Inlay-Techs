"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// In-memory session tracker: survives Next.js client-side route changes,
// but resets on full browser refresh (F5 / reload) or fresh tab opens.
let hasShownInThisSession = false;

export function CinematicLogoLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<
    "symbol-only" | "wave-reveal" | "logo-hold" | "exit"
  >("symbol-only");

  // Wave and reveal progression from 0 to 100
  const [waveProgress, setWaveProgress] = useState(0);
  const [outlineProgress, setOutlineProgress] = useState(0);
  const [solidProgress, setSolidProgress] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check if client-side navigation already occurred in this session
    // Notice: on full browser reload (F5), the JS environment resets, so hasShownInThisSession is false.
    const navEntries = performance.getEntriesByType?.("navigation") as PerformanceNavigationTiming[];
    const isReload = navEntries?.[0]?.type === "reload";

    if (hasShownInThisSession && !isReload) {
      setIsVisible(false);
      return;
    }

    hasShownInThisSession = true;

    // Check for reduced motion accessibility
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const fastTimer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsVisible(false), 300);
      }, 500);
      return () => clearTimeout(fastTimer);
    }

    // Lock page scroll during animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Preload image assets into browser cache immediately
    const img1 = new window.Image();
    img1.src = "/assets/logos/inlaytechs-symbol-3d.webp";
    const img2 = new window.Image();
    img2.src = "/assets/logos/inlaytechs-text-3d.webp";
    const img3 = new window.Image();
    img3.src = "/assets/logos/inlaytechs-text-outline.webp";

    // Setup Canvas Particles
    const canvas = canvasRef.current;
    let particles: {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      pulseSpeed: number;
      color: string;
    }[] = [];

    let particleFrameId: number;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Generate 35 subtle cinematic particles
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.6,
          speedY: -(Math.random() * 0.4 + 0.15),
          speedX: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.4 + 0.15,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: Math.random() > 0.4 ? "#ffffff" : "#ff4da6",
        });
      }

      const renderParticles = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const p of particles) {
          p.y += p.speedY;
          p.x += p.speedX;
          p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.005;

          if (p.y < 0) {
            p.y = canvas.height + 5;
            p.x = Math.random() * canvas.width;
          }
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;

          ctx.save();
          ctx.globalAlpha = Math.max(0.05, Math.min(0.65, p.alpha));
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        particleFrameId = requestAnimationFrame(renderParticles);
      };

      particleFrameId = requestAnimationFrame(renderParticles);
    }

    return () => {
      if (particleFrameId) cancelAnimationFrame(particleFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Main 60 FPS Animation Timeline
  useEffect(() => {
    if (!isVisible) return;

    // Timeline Configuration (Total ~3.0s):
    // 0ms - 400ms: Symbol only (center)
    // 400ms - 2100ms: Light wave travels horizontally, reveals outlines & solid text
    // 2100ms - 2650ms: Wave clears, hold full logo & reflection
    // 2650ms - 3150ms: Smooth cinematic fade out
    // 3150ms: Unmount
    const waveStartMs = 400;
    const waveDurationMs = 1650;
    const holdEndMs = 2650;
    const exitEndMs = 3150;

    let rAFId: number;
    const startTimestamp = performance.now();

    const animateTimeline = (now: number) => {
      const elapsed = now - startTimestamp;

      if (elapsed < waveStartMs) {
        setAnimationPhase("symbol-only");
        setWaveProgress(0);
        setOutlineProgress(0);
        setSolidProgress(0);
      } else if (elapsed >= waveStartMs && elapsed < waveStartMs + waveDurationMs) {
        setAnimationPhase("wave-reveal");
        const waveT = (elapsed - waveStartMs) / waveDurationMs;
        // Ease wave travel slightly (ease-in-out curve)
        const smoothProgress = waveT < 0.5 
          ? 2 * waveT * waveT 
          : 1 - Math.pow(-2 * waveT + 2, 2) / 2;

        const currentPct = smoothProgress * 100;
        setWaveProgress(currentPct);

        // Outlines lead slightly ahead of the wave (revealed ~15% ahead)
        const outPct = Math.min(100, currentPct * 1.15 + 4);
        setOutlineProgress(outPct);

        // Solid metallic letters solidify directly behind the wave crest
        const solPct = Math.min(100, Math.max(0, (currentPct - 6) * 1.08));
        setSolidProgress(solPct);
      } else if (elapsed >= waveStartMs + waveDurationMs && elapsed < holdEndMs) {
        setAnimationPhase("logo-hold");
        setWaveProgress(100);
        setOutlineProgress(100);
        setSolidProgress(100);
      } else if (elapsed >= holdEndMs && elapsed < exitEndMs) {
        setAnimationPhase("exit");
        setIsFadingOut(true);
      } else {
        // Animation finished
        setIsVisible(false);
        document.body.style.overflow = "";
        return;
      }

      rAFId = requestAnimationFrame(animateTimeline);
    };

    rAFId = requestAnimationFrame(animateTimeline);

    // Hard fallback timeout: guarantees site is NEVER blocked under any condition
    const fallbackTimeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 400);
    }, 3500);

    return () => {
      cancelAnimationFrame(rAFId);
      clearTimeout(fallbackTimeout);
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Wave position calculation (translate from -10% to 110%)
  const waveX = -10 + (waveProgress / 100) * 120;
  const isWaveActive = animationPhase === "wave-reveal" && waveProgress < 99;

  return (
    <div
      role="dialog"
      aria-label="Loading INLAYTECHS"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#000000] select-none transition-all duration-700 ease-out overflow-hidden ${
        isFadingOut ? "opacity-0 scale-[1.03] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* 1. Cinematic Background & Radial Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 45% at 50% 40%, rgba(224, 36, 122, 0.12) 0%, rgba(15, 15, 22, 0.65) 55%, #000000 100%),
            radial-gradient(circle at 50% 75%, rgba(20, 184, 166, 0.03) 0%, transparent 60%)
          `
        }}
      />

      {/* 2. Floating Ambient Dust Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 3. Main Stage Container (Symbol, Text, Light Wave & Reflection) */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-full px-4 transform -translate-y-4 sm:-translate-y-6">
        
        {/* --- LOGO SYMBOL (CENTERED) --- */}
        <div className="relative mb-5 sm:mb-7 flex items-center justify-center">
          {/* Subtle ambient core glow behind sphere/arch */}
          <div 
            className="absolute -inset-6 bg-gradient-to-b from-[#e0247a]/25 via-transparent to-[#ffffff]/10 rounded-full blur-2xl opacity-70 pointer-events-none transition-opacity duration-1000"
            aria-hidden="true"
          />

          {/* Authentic 3D Symbol from Company Asset */}
          <div className="relative z-10 w-28 h-26 sm:w-36 sm:h-32 md:w-44 md:h-40 transition-transform duration-700">
            <Image
              src="/assets/logos/inlaytechs-symbol-3d.webp"
              alt="INLAYTECHS Logo Emblem"
              width={291}
              height={263}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* --- WORDMARK "INLAYTECHS" CONTAINER --- */}
        <div className="relative w-[300px] sm:w-[460px] md:w-[580px] lg:w-[680px] h-[34px] sm:h-[50px] md:h-[64px] lg:h-[74px] flex items-center justify-center">
          
          {/* LAYER A: Thin Metallic & Neon Wireframe Outlines */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{
              clipPath: `inset(0 ${(100 - outlineProgress).toFixed(2)}% 0 0)`,
              opacity: solidProgress > 95 ? 0.3 : 1,
              filter: "drop-shadow(0 0 8px rgba(255, 40, 140, 0.8)) drop-shadow(0 0 14px rgba(255, 255, 255, 0.6))",
            }}
            aria-hidden="true"
          >
            <Image
              src="/assets/logos/inlaytechs-text-outline.webp"
              alt=""
              width={767}
              height={78}
              priority
              className="w-full h-full object-contain mix-blend-screen"
            />
          </div>

          {/* LAYER B: Solid 3D Metallic Chrome Text ("INLAY" Silver + "TECHS" Magenta) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: `inset(0 ${(100 - solidProgress).toFixed(2)}% 0 0)`,
              filter: solidProgress > 0 
                ? "drop-shadow(0 8px 20px rgba(0,0,0,0.9))" 
                : "none",
            }}
          >
            <Image
              src="/assets/logos/inlaytechs-text-3d.webp"
              alt="INLAYTECHS"
              width={767}
              height={78}
              priority
              className="w-full h-full object-contain"
            />

            {/* Specular Glint Sweep on Revealed Solid Letters */}
            {animationPhase === "logo-hold" && (
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none animate-shimmer"
                aria-hidden="true"
              />
            )}
          </div>

          {/* LAYER C: The Glowing Neon-Magenta & Silver Light Wave */}
          {isWaveActive && (
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-30 flex items-center"
              style={{
                left: `${waveX}%`,
                transform: "translateX(-50%)",
                width: "220px",
                height: "100%",
              }}
              aria-hidden="true"
            >
              {/* Complex Multi-Filament SVG Light Ribbon */}
              <svg
                viewBox="0 0 240 100"
                className="w-full h-[180%] -my-[40%] overflow-visible filter drop-shadow-[0_0_15px_#ff2a85] drop-shadow-[0_0_30px_#ff0080]"
                fill="none"
              >
                <defs>
                  {/* Neon Magenta & Silver Ribbon Gradients */}
                  <linearGradient id="wave-magenta-core" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff007f" stopOpacity="0" />
                    <stop offset="30%" stopColor="#ff2a85" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="70%" stopColor="#ff2a85" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c026d3" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="wave-silver-thread" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="40%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#f0abfc" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>

                  <filter id="wave-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="glow1" />
                    <feGaussianBlur stdDeviation="8" result="glow2" />
                    <feMerge>
                      <feMergeNode in="glow2" />
                      <feMergeNode in="glow1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Filament 1: Broad Neon Magenta Ribbon */}
                <path
                  d="M 10,50 Q 60,18 120,50 T 230,50"
                  stroke="url(#wave-magenta-core)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#wave-glow)"
                  opacity="0.9"
                />

                {/* Filament 2: Vibrant Electric Silver/White Core */}
                <path
                  d="M 30,50 Q 80,72 130,50 T 220,50"
                  stroke="url(#wave-silver-thread)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="1"
                />

                {/* Filament 3: Harmonic Undulating Wave */}
                <path
                  d="M 20,45 Q 70,25 120,55 T 210,48"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.95"
                />

                {/* Starburst Glint at Center of Wave Head */}
                <circle cx="120" cy="50" r="4.5" fill="#ffffff" filter="url(#wave-glow)" />
                <circle cx="120" cy="50" r="1.8" fill="#ffffff" />
              </svg>

              {/* Floor Light Splash (moves with wave) */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#ff2a85]/40 blur-xl rounded-full pointer-events-none"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* --- FLOOR PERSPECTIVE REFLECTION (AS SEEN IN REFERENCE VIDEO) --- */}
        <div 
          className="relative mt-3 sm:mt-4 w-[300px] sm:w-[460px] md:w-[580px] lg:w-[680px] h-[34px] sm:h-[50px] md:h-[64px] lg:h-[74px] pointer-events-none select-none overflow-hidden"
          style={{
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 35%, transparent 75%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 35%, transparent 75%)",
            filter: "blur(2px) contrast(1.1)",
            opacity: 0.7,
          }}
          aria-hidden="true"
        >
          {/* Mirrored Revealed Solid Text */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              clipPath: `inset(0 ${(100 - solidProgress).toFixed(2)}% 0 0)`,
            }}
          >
            <Image
              src="/assets/logos/inlaytechs-text-3d.webp"
              alt=""
              width={767}
              height={78}
              className="w-full h-full object-contain brightness-90"
            />
          </div>

          {/* Mirrored Light Wave Reflection */}
          {isWaveActive && (
            <div
              className="absolute top-0 bottom-0 pointer-events-none"
              style={{
                left: `${waveX}%`,
                transform: "translateX(-50%)",
                width: "180px",
                height: "100%",
                background: "radial-gradient(ellipse at center, rgba(255, 42, 133, 0.7) 0%, transparent 70%)",
                filter: "blur(6px)",
              }}
            />
          )}
        </div>

        {/* Ground Wet/Studio Floor Plane Line */}
        <div 
          className="w-[280px] sm:w-[420px] md:w-[560px] lg:w-[640px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -mt-8 sm:-mt-12 pointer-events-none"
          aria-hidden="true"
        />

      </div>

      {/* Shimmer keyframe style */}
      <style jsx global>{`
        @keyframes shimmerGlint {
          0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
            opacity: 0;
          }
        }
        .animate-shimmer {
          animation: shimmerGlint 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
