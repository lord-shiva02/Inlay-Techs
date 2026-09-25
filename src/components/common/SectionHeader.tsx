"use client";

import React from "react";
import TextReveal from "./TextReveal";

export interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  accentColor?: "magenta" | "teal" | "silver";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  accentColor = "magenta",
  className = ""
}) => {
  const accentClass =
    accentColor === "teal"
      ? "text-teal-400"
      : accentColor === "silver"
      ? "text-neutral-400"
      : "text-[#FF007A]";

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10 ${className}`}>
      <div className="max-w-2xl">
        <TextReveal
          mode="fadeUp"
          as="span"
          delay={50}
          className={`text-xs font-mono tracking-[0.25em] uppercase font-semibold block mb-2.5 ${accentClass}`}
        >
          {kicker}
        </TextReveal>

        <TextReveal
          as="h2"
          text={title}
          mode="3d-heading"
          stagger={0.045}
          delay={120}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]"
          itemClassName="text-metallic-chrome"
        />
      </div>

      {description && (
        <TextReveal
          mode="paragraph"
          as="p"
          delay={260}
          className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed"
        >
          {description}
        </TextReveal>
      )}
    </div>
  );
};

export default SectionHeader;
