export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryNumber: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  liveUrl?: string; // Only set if a real live URL is provided
  isFeatured?: boolean;
  aspectRatio?: "wide" | "tall" | "standard";
  deliverables: string[];
  thumbnailGradient: string;
  accent: "teal" | "bronze";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "corporate-technology-platform",
    slug: "corporate-technology-platform",
    title: "INLAYTECHS Flagship Digital Platform",
    category: "High-Performance Business Websites",
    categoryNumber: "01",
    shortDescription: "A dark-luxury editorial web platform showcasing modern digital engineering, custom branding, and interactive conversion pathways.",
    overview: "Built to demonstrate high-performance web engineering and bespoke brand identity. Features an asymmetric layout, fluid kinetic transitions, and direct client conversion channels.",
    challenge: "Deliver a high-impact corporate web platform that articulates comprehensive technical and marketing capabilities while maintaining sub-second load times and flawless mobile responsiveness.",
    solution: "Engineered a Next.js App Router architecture styled with custom dark-luxury CSS tokens, hardware-accelerated Framer Motion interactions, and lightweight SVG vector branding.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SVG Architecture"],
    features: [
      "Custom 3D-metallic vector brand identity system",
      "Dynamic 7-service exploration with deep-dive routes",
      "Zero-latency WhatsApp and email dispatch links",
      "Strict real-data presentation architecture"
    ],
    liveUrl: "https://www.inlaytechs.in",
    isFeatured: true,
    aspectRatio: "wide",
    deliverables: ["Full-Stack Next.js Application", "Brand Vector Suite", "Responsive Layouts", "SEO Architecture"],
    thumbnailGradient: "from-teal-950/40 via-neutral-900 to-black",
    accent: "teal"
  },
  {
    id: "meta-ads-visual-campaign",
    slug: "meta-ads-visual-campaign",
    title: "High-Retention Meta Ads & Reels Creative Suite",
    category: "Targeted Meta Ads & High-Retention Reels",
    categoryNumber: "03",
    shortDescription: "Thumb-stopping short-form video creatives and promotional reels designed for Instagram and Facebook brand awareness.",
    overview: "A specialized suite of short-form video creatives and reels engineered to arrest scrolling attention and drive audience engagement through crisp hooks and kinetic motion design.",
    challenge: "Modern social audiences scroll past advertisements within split seconds. The creative had to establish value, hook attention, and convey the offer within the first two seconds.",
    solution: "Developed concise visual pacing with bold typographic titles, subtle sound design cues, and clear action-oriented end frames.",
    technologies: ["Motion Design", "Short-Form Video", "Kinetic Typography", "Meta Ads Manager"],
    features: [
      "9:16 vertical high-retention video formats",
      "Synchronized on-screen text overlays",
      "High-contrast color accents tailored for dark feeds"
    ],
    isFeatured: true,
    aspectRatio: "tall",
    deliverables: ["Curated Video Ad Sets", "Reels Storyboards", "Campaign Configuration Guidance"],
    thumbnailGradient: "from-amber-950/40 via-neutral-900 to-black",
    accent: "bronze"
  },
  {
    id: "digital-marketing-brand-posters",
    slug: "digital-marketing-brand-posters",
    title: "Brand Announcement & Service Posters",
    category: "High-Impact Promotional Poster Design",
    categoryNumber: "05",
    shortDescription: "Striking editorial poster series designed for social announcements, campaign launches, and print dissemination.",
    overview: "Visual communication posters designed with high architectural clarity, clean typographic hierarchy, and custom color accents.",
    challenge: "Communicate service offerings and value propositions clearly without visual clutter or generic template feel.",
    solution: "Applied disciplined grid layouts, metallic accents, and high-DPI typography that perform equally well across mobile feeds and physical print.",
    technologies: ["Visual Design", "Typography Architecture", "Color Theory", "Vector Graphics"],
    features: [
      "High-resolution vector assets",
      "Multi-ratio exports (1:1, 4:5, 9:16)",
      "Strict brand-aligned color system"
    ],
    isFeatured: false,
    aspectRatio: "standard",
    deliverables: ["Digital Social Creatives", "Print-Ready Vector PDFs", "Multi-Format Export Assets"],
    thumbnailGradient: "from-teal-950/30 via-neutral-900 to-neutral-950",
    accent: "teal"
  },
  {
    id: "social-media-content-system",
    slug: "social-media-content-system",
    title: "Social Media Distribution & Profile Identity",
    category: "Strategic Social Media Distribution",
    categoryNumber: "04",
    shortDescription: "Structured social media brand identity, publishing calendar, and carousel templates designed to elevate brand authority.",
    overview: "A comprehensive social presence system designed to maintain an active, professional image across Instagram and digital channels.",
    challenge: "Maintaining visual and messaging consistency across multiple posts while providing genuine educational and showcase value.",
    solution: "Built modular carousel templates and story structures that streamline recurring content delivery while upholding brand guidelines.",
    technologies: ["Instagram Publishing", "Content Architecture", "Social Strategy", "Brand Guidelines"],
    features: [
      "Cohesive feed grid aesthetic",
      "Educational slide templates",
      "Optimized bio and inquiry routing"
    ],
    isFeatured: false,
    aspectRatio: "standard",
    deliverables: ["Feed Grid Design System", "Story Highlights Architecture", "Content Distribution Guidelines"],
    thumbnailGradient: "from-amber-950/30 via-neutral-900 to-neutral-950",
    accent: "bronze"
  },
  {
    id: "single-offer-landing-engine",
    slug: "single-offer-landing-engine",
    title: "High-Performance Conversion Landing Page",
    category: "Zero-Distraction Conversion Landing Pages",
    categoryNumber: "06",
    shortDescription: "A focused, single-objective landing page engineered to maximize visitor inquiry rates for targeted service campaigns.",
    overview: "Developed to test direct ad traffic response with minimal distraction, fast performance, and an intuitive quote generation form.",
    challenge: "Eliminate drop-off between ad clicks and user inquiries by streamlining page complexity.",
    solution: "Designed a single-scroll narrative that highlights core offerings, answers immediate objections, and terminates in a frictionless WhatsApp conversion.",
    technologies: ["React", "Tailwind CSS", "WhatsApp Lead Flow", "Analytics"],
    features: [
      "Zero-latency page rendering",
      "Sticky mobile CTA bar",
      "Direct WhatsApp lead routing"
    ],
    isFeatured: false,
    aspectRatio: "standard",
    deliverables: ["Responsive Single-Page Funnel", "Lead Capture Automation", "Analytics Setup"],
    thumbnailGradient: "from-teal-950/30 via-neutral-900 to-neutral-950",
    accent: "teal"
  },
  {
    id: "modern-ecommerce-storefront",
    slug: "modern-ecommerce-storefront",
    title: "Modular E-Commerce Storefront Architecture",
    category: "Scalable E-commerce Storefronts",
    categoryNumber: "02",
    shortDescription: "A modern digital storefront featuring intuitive catalog navigation, dynamic product modals, and secure checkout workflows.",
    overview: "Built to demonstrate smooth product discovery, fast filtering, responsive mobile cart UX, and seamless transaction management.",
    challenge: "Deliver an e-commerce shopping experience that feels responsive on mobile devices while managing complex SKU variations.",
    solution: "Implemented client-side category filtering, instantaneous search, and integrated checkout routing.",
    technologies: ["Next.js", "Payment Gateways", "Cart State Management", "Tailwind CSS"],
    features: [
      "Instantaneous catalog filtering",
      "Mobile-optimized drawer cart",
      "Secure payment checkout flow"
    ],
    isFeatured: true,
    aspectRatio: "wide",
    deliverables: ["Full E-commerce Web App", "Cart & Checkout Flow", "Product Catalog Engine"],
    thumbnailGradient: "from-amber-950/40 via-neutral-900 to-black",
    accent: "bronze"
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
