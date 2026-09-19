"use client";

import React from "react";
import Image from "next/image";

export interface InlaytechsLogoProps {
  variant?: 
    | "primary-dark" 
    | "primary-light" 
    | "stacked-dark" 
    | "stacked-light" 
    | "icon-metallic" 
    | "icon-flat" 
    | "monochrome-white" 
    | "monochrome-teal" 
    | "monochrome-bronze";
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  withGlow?: boolean;
  withShine?: boolean;
  animate?: boolean;
  priority?: boolean;
}

const sizeMapHorizontal = {
  sm: { width: 165, height: 32 },
  md: { width: 210, height: 40 },
  lg: { width: 270, height: 52 },
  xl: { width: 340, height: 65 },
  hero: { width: 460, height: 88 },
};

const sizeMapStacked = {
  sm: { width: 100, height: 55 },
  md: { width: 145, height: 80 },
  lg: { width: 190, height: 105 },
  xl: { width: 260, height: 144 },
  hero: { width: 360, height: 200 },
};

const sizeMapIcon = {
  sm: { width: 36, height: 32 },
  md: { width: 47, height: 42 },
  lg: { width: 63, height: 56 },
  xl: { width: 81, height: 72 },
  hero: { width: 123, height: 110 },
};

export const InlaytechsLogo: React.FC<InlaytechsLogoProps> = ({
  variant = "primary-dark",
  size = "md",
  className = "",
  withGlow = false,
  withShine = true,
  animate = true,
  priority = false,
}) => {
  const isIconOnly = variant.startsWith("icon-");
  const isStacked = variant.startsWith("stacked-");

  let logoSrc = "/assets/logos/inlaytechs-horizontal-clean.webp";
  let dimensions = sizeMapHorizontal[size];

  if (isIconOnly) {
    logoSrc = "/assets/logos/inlaytechs-symbol-clean.webp";
    dimensions = sizeMapIcon[size];
  } else if (isStacked) {
    logoSrc = "/assets/logos/inlaytechs-stacked-clean.webp";
    dimensions = sizeMapStacked[size];
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-500 group overflow-hidden ${className}`}
    >
      {/* Ambient Gradient Glow (Official Neon Magenta & Silver) */}
      {withGlow && (
        <div
          className="absolute -inset-3 bg-gradient-to-r from-pink-500/25 via-rose-500/15 to-white/10 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Official 3D Metallic Company Logo Asset */}
      <div className="relative z-10 flex items-center">
        <Image
          src={logoSrc}
          alt="INLAYTECHS Official Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority={priority}
          className={`object-contain transition-all duration-500 ${
            animate ? "group-hover:scale-[1.03] group-hover:brightness-110" : ""
          }`}
          style={{ width: "auto", height: `${dimensions.height}px` }}
        />

        {/* Specular Metallic Light Sweep */}
        {withShine && (
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};
