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

const sizeMap = {
  sm: { width: 140, height: 42, iconSize: 32 },
  md: { width: 180, height: 54, iconSize: 42 },
  lg: { width: 240, height: 72, iconSize: 56 },
  xl: { width: 320, height: 96, iconSize: 72 },
  hero: { width: 440, height: 132, iconSize: 110 },
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
  const dimensions = sizeMap[size];

  const logoSrc = `/assets/logos/inlaytechs-${variant}.svg`;

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-500 group overflow-hidden ${className}`}
    >
      {/* Ambient Gradient Glow (Teal & Bronze) */}
      {withGlow && (
        <div
          className="absolute -inset-3 bg-gradient-to-r from-teal-500/25 via-transparent to-[#CD7F32]/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Official Vector Logo */}
      <div className="relative z-10 flex items-center">
        <Image
          src={logoSrc}
          alt="INLAYTECHS Official Logo"
          width={isIconOnly ? dimensions.iconSize : dimensions.width}
          height={isIconOnly ? dimensions.iconSize : dimensions.height}
          priority={priority}
          className={`object-contain transition-all duration-500 ${
            animate ? "group-hover:scale-[1.03] group-hover:brightness-110" : ""
          }`}
        />

        {/* Subtle Specular Metallic Light Sweep (Presentation Only) */}
        {withShine && (
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

