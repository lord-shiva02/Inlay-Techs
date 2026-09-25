"use client";

import React, { useRef, useEffect, useState } from "react";

export interface TextRevealProps {
  children?: React.ReactNode;
  text?: string;
  lines?: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  itemClassName?: string;
  delay?: number;
  stagger?: number;
  mode?: "word" | "line" | "fadeUp" | "paragraph" | "3d-heading";
  threshold?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  text,
  lines,
  as: Component = "div",
  className = "",
  itemClassName = "",
  delay = 0,
  stagger = 0.045,
  mode = "word",
  threshold = 0.15,
  once = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Line-by-line 3D reveal mode
  if (mode === "line" && lines && lines.length > 0) {
    return (
      <Component
        ref={containerRef as any}
        className={`perspective-section ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className={`block reveal-line ${isIntersecting ? "is-revealed" : ""} ${itemClassName}`}
            style={{
              transitionDelay: `${delay + i * 180}ms`,
            }}
          >
            {line}
          </span>
        ))}
      </Component>
    );
  }

  // Paragraph mode (subtle 3D depth reveal: translateY(20px) translateZ(-30px) -> 0)
  if (mode === "paragraph") {
    return (
      <Component
        ref={containerRef as any}
        className={`reveal-paragraph-3d ${isIntersecting ? "is-revealed" : ""} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children || text}
      </Component>
    );
  }

  // Section Heading / FadeUp Mode (3D perspective rise, 700-900ms)
  if (mode === "fadeUp" || (!text && children && !lines && mode !== "3d-heading")) {
    return (
      <Component
        ref={containerRef as any}
        className={`reveal-fadeup ${isIntersecting ? "is-revealed" : ""} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children || text}
      </Component>
    );
  }

  // 3D Heading & Word-by-word Reveal Mode (Cinema 3D Staggered Typography)
  const isHeading = mode === "3d-heading" || ["h1", "h2", "h3"].includes(Component);
  const rawText = text || (typeof children === "string" ? children : "");
  const words = rawText.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={`perspective-section ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={`${isHeading ? "reveal-3d-word" : "reveal-word"} ${
            isIntersecting ? "is-revealed" : ""
          } ${itemClassName}`}
          style={{
            transitionDelay: `${delay + i * (stagger * 1000)}ms`,
            marginRight: i === words.length - 1 ? 0 : "0.26em",
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

export default TextReveal;
