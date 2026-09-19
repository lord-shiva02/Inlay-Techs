export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  deliverables: string[];
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  suitableFor: string[];
  benefits: string[];
  accentColor: "teal" | "bronze";
  iconName: string;
  visualHighlight: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "business-portfolio-website",
    number: "01",
    name: "High-Performance Business Websites",
    slug: "business-portfolio-website",
    tagline: "Custom-Engineered Web Platforms & Digital Authority",
    shortDescription: "Custom-engineered websites designed to establish authority, present credentials, and convert visitors into clients.",
    overview: "We architect premium digital flagships for businesses, founders, agencies, and high-growth practices. Every site is built with bespoke typography, responsive layouts, fast load speeds, and intuitive navigation.",
    deliverables: [
      "Custom UI/UX Architecture & Responsive Layouts",
      "Interactive Project & Credential Portfolios",
      "Brand-aligned Dark/Light Luxury Styling",
      "Lead Capture Forms & WhatsApp Dispatch Integration",
      "SEO Infrastructure & Search Engine Indexing",
      "Cross-device Optimization (Mobile, Tablet, Desktop)"
    ],
    features: [
      { title: "Editorial Layouts", desc: "Clean asymmetric structures tailored to your company's prestige." },
      { title: "Blazing Load Speeds", desc: "Engineered with modern web architectures for near-instant rendering." },
      { title: "Conversion Triggers", desc: "Strategically placed call-to-actions that guide prospects to inquiry." },
      { title: "Search-Engine Ready", desc: "Semantic markup and metadata structured for optimal indexing." }
    ],
    process: [
      { step: "01", title: "Brand Alignment", desc: "Deconstruct your target audience, services, and corporate vision." },
      { step: "02", title: "Information Architecture", desc: "Map page hierarchies, content flows, and user conversion funnels." },
      { step: "03", title: "Visual Engineering", desc: "Craft bespoke layouts, typography scales, and interactive states." },
      { step: "04", title: "Frontend Implementation", desc: "Build responsive, accessible, high-performance web pages." },
      { step: "05", title: "Deployment & Audit", desc: "Run QA across browsers, configure domains, and launch live." }
    ],
    suitableFor: [
      "Corporate Firms & Enterprises",
      "Creative Agencies & Consultancies",
      "Founders, Architects & Executives",
      "Technology Companies & Service Providers"
    ],
    benefits: [
      "Immediate credibility and elevated brand perception",
      "Clear articulation of your company's value proposition",
      "Frictionless client inquiry and lead generation paths",
      "Ownership of a future-proof, easily scalable digital asset"
    ],
    accentColor: "teal",
    iconName: "Briefcase",
    visualHighlight: "Corporate & Portfolio Excellence"
  },
  {
    id: "ecommerce-storefronts",
    number: "02",
    name: "Scalable E-commerce Storefronts",
    slug: "ecommerce",
    tagline: "Modern Digital Storefronts & Frictionless Purchasing",
    shortDescription: "Scalable e-commerce platforms engineered for smooth product discovery, secure checkout, and effortless catalog management.",
    overview: "We build modern e-commerce storefronts that combine luxury aesthetics with lightning-fast catalog search, optimized product pages, and reliable payment processing.",
    deliverables: [
      "Complete E-commerce Architecture & Catalog Setup",
      "Responsive Product Catalog, Search & Filtering System",
      "High-Converting Product Detail Pages (PDP)",
      "Shopping Cart & Streamlined Checkout Flow",
      "Payment Gateway Integration (Razorpay, Stripe, UPI)",
      "Order Management & Customer Notification Routing"
    ],
    features: [
      { title: "Mobile-First Purchasing", desc: "Designed for effortless single-hand browsing and rapid checkout on phones." },
      { title: "Secure Transactions", desc: "Encrypted payment gateways supporting cards, net banking, and UPI." },
      { title: "Inventory Control", desc: "Straightforward admin dashboard for adding products and tracking orders." }
    ],
    process: [
      { step: "01", title: "Catalog & SKU Planning", desc: "Organize product categories, variations, and pricing structures." },
      { step: "02", title: "Storefront UX Design", desc: "Design seamless browsing, filtering, and product showcase flows." },
      { step: "03", title: "Integration & Cart Logic", desc: "Connect payment gateways, shipping rules, and automated receipts." },
      { step: "04", title: "Testing & Launch", desc: "Run end-to-end sandbox test orders and verify live payments." }
    ],
    suitableFor: [
      "Direct-to-Consumer (D2C) brands",
      "Retail shops expanding into online commerce",
      "Wholesale and B2B distributors seeking online order processing",
      "Digital product creators and specialty merchandise"
    ],
    benefits: [
      "Open for business 24/7 with zero geographical boundaries",
      "High checkout completion rates with reduced cart abandonment",
      "Full ownership of your customer relationship and store data",
      "Automated order intake and fulfillment dispatch"
    ],
    accentColor: "teal",
    iconName: "ShoppingCart",
    visualHighlight: "Digital Storefronts & Checkout"
  },
  {
    id: "meta-ads-reels",
    number: "03",
    name: "Targeted Meta Ads & High-Retention Reels",
    slug: "meta-ads-reels",
    tagline: "High-Retention Visual Hooks & Targeted Acquisition",
    shortDescription: "End-to-end creative production and ad optimization for Instagram Reels, Facebook campaigns, and Meta advertising.",
    overview: "Capture attention in crowded feeds with thumb-stopping video edits, motion graphics, and targeted ad campaigns crafted to turn casual viewers into paying customers.",
    deliverables: [
      "Short-form Video Concepting & Script Structuring",
      "High-Retention Instagram Reels & Video Creatives",
      "Targeted Meta Ad Set Planning (Audience & Retargeting)",
      "Motion Graphics, Kinetic Typography & Sound Design",
      "Ad Copywriting & Compelling Call-to-Actions",
      "Campaign Performance Tracking & Optimization Support"
    ],
    features: [
      { title: "Hook-Driven Edits", desc: "Paced to capture viewer attention within the first 2 seconds." },
      { title: "Precision Targeting", desc: "Structured to reach customers based on intent, geography, and interests." },
      { title: "Brand Consistency", desc: "Unified aesthetic that reflects your brand's quality across all ad sets." },
      { title: "Conversion Optimized", desc: "Clear end screens and caption CTA designed for direct action." }
    ],
    process: [
      { step: "01", title: "Creative Briefing", desc: "Identify your offer, target demographic, and key selling propositions." },
      { step: "02", title: "Storyboard & Hook Craft", desc: "Draft video hooks, narrative pacing, and text overlay scripts." },
      { step: "03", title: "Production & Motion Design", desc: "Edit high-resolution video clips with kinetic typography and audio." },
      { step: "04", title: "Ad Campaign Configuration", desc: "Set up ad structures, audiences, budget allocation, and tracking." },
      { step: "05", title: "Refinement & Scaling", desc: "Monitor click-through metrics and scale winning creatives." }
    ],
    suitableFor: [
      "E-commerce Brands & Retail Outlets",
      "Service Businesses & Local Professionals",
      "B2B Consultancies & Tech Platforms",
      "Brands launching new products or promotional campaigns"
    ],
    benefits: [
      "Direct exposure to highly targeted audiences on Instagram & Facebook",
      "Lower cost-per-lead through engaging, relevant creatives",
      "Building social proof and authentic visual resonance",
      "Consistent pipeline of qualified inquiries"
    ],
    accentColor: "bronze",
    iconName: "Film",
    visualHighlight: "Meta Ads & Reels Engine"
  },
  {
    id: "social-media-marketing",
    number: "04",
    name: "Strategic Social Media Distribution",
    slug: "social-media-marketing",
    tagline: "Strategic Brand Presence & Community Resonance",
    shortDescription: "Comprehensive social media management, content planning, and distribution to build brand affinity and loyal followers.",
    overview: "We turn your social media profiles into reliable customer acquisition channels. Through structured content calendars, high-end visuals, and proactive community engagement, we build brand authority across platforms.",
    deliverables: [
      "Social Media Strategy & Content Roadmap",
      "High-Fidelity Feed Posts, Carousels & Story Creatives",
      "Engaging Caption Copywriting & Strategic Hashtags",
      "Profile Aesthetic Overhaul & Bio Optimization",
      "Posting Schedule Management & Publishing Guidance"
    ],
    features: [
      { title: "Grid & Feed Harmony", desc: "A clean, cohesive aesthetic that establishes immediate brand credibility." },
      { title: "Value-Driven Content", desc: "Posts engineered to educate, inform, and inspire your target demographic." },
      { title: "Multi-Platform Adaptability", desc: "Optimized formats tailored for Instagram, LinkedIn, and Facebook." }
    ],
    process: [
      { step: "01", title: "Profile & Competitor Audit", desc: "Assess current social positioning and identify whitespace opportunities." },
      { step: "02", title: "Theme Formulation", desc: "Establish core content pillars (educational, showcase, promotional)." },
      { step: "03", title: "Creative Production", desc: "Design graphics, compose copy, and organize publishing calendar." },
      { step: "04", title: "Execution & Monitoring", desc: "Publish consistently and monitor engagement metrics." }
    ],
    suitableFor: [
      "Brands wanting consistent, polished social feeds",
      "Businesses launching new service verticals",
      "Founders aiming to build personal and corporate authority",
      "Companies seeking active digital engagement"
    ],
    benefits: [
      "Elevated perceived value of your products and services",
      "Consistent daily/weekly visibility in front of prospects",
      "Streamlined communication and inbound inquiry generation",
      "Elimination of internal guesswork regarding social posting"
    ],
    accentColor: "bronze",
    iconName: "Share2",
    visualHighlight: "Social Media Strategy & Distribution"
  },
  {
    id: "poster-design",
    number: "05",
    name: "High-Impact Promotional Poster Design",
    slug: "poster-design",
    tagline: "Impactful Visual Communication & Print/Digital Creatives",
    shortDescription: "High-impact visual creatives and promotional posters engineered for digital announcements, social campaigns, and print.",
    overview: "Transform complex messages into striking, visually arresting promotional posters. We combine bold typography, calculated color theory, and structured hierarchy to command instant attention.",
    deliverables: [
      "Digital Marketing & Social Media Promotional Posters",
      "Event, Product Launch & Campaign Announcements",
      "High-Resolution Print-Ready Artwork (Vector/CMYK)",
      "Multi-format Exports (1:1, 4:5, 9:16, 16:9, A3/A4)",
      "Consistent Corporate Brand Graphic Language"
    ],
    features: [
      { title: "Architectural Layouts", desc: "Balanced visual hierarchy that guides the eye to the key takeaway." },
      { title: "High-DPI Fidelity", desc: "Sharp typography and vector assets ready for digital screens and large format print." },
      { title: "Tailored Palette", desc: "Curated color schemes that amplify brand identity without clutter." }
    ],
    process: [
      { step: "01", title: "Content Analysis", desc: "Extract primary headline, secondary details, and call to action." },
      { step: "02", title: "Concept Sketching", desc: "Explore composition, focal points, and typography scale." },
      { step: "03", title: "Design Execution", desc: "Apply precise typography, lighting, gradients, and graphic styling." },
      { step: "04", title: "Format Adaptation", desc: "Export in requested ratios for social, print, and web displays." }
    ],
    suitableFor: [
      "Service announcements and special offers",
      "Corporate conferences, seminars, and events",
      "Product launches and retail promotions",
      "Social media feed visual campaigns"
    ],
    benefits: [
      "Distinct visual presence that separates your business from competitors",
      "Clear, memorable communication of time-sensitive offers",
      "Professional materials suitable for both digital sharing and print",
      "Cohesive brand identity across all customer touchpoints"
    ],
    accentColor: "teal",
    iconName: "Image",
    visualHighlight: "Visual Communication & Posters"
  },
  {
    id: "landing-page",
    number: "06",
    name: "Zero-Distraction Conversion Landing Pages",
    slug: "landing-page",
    tagline: "Single-Goal Conversion Funnels with Zero Distractions",
    shortDescription: "Laser-focused landing pages engineered to drive one specific action: inquiry, sign-up, booking, or purchase.",
    overview: "When launching an ad campaign or product offer, sending traffic to a generic homepage burns budget. Our custom landing pages guide visitors through a compelling narrative engineered specifically to convert.",
    deliverables: [
      "Conversion Architecture & Narrative Wireframing",
      "Hero Value Proposition & Visual Hook",
      "Feature Highlights, Social Proof & Objection Handling",
      "Direct Lead Capture Form & Instant WhatsApp Redirection",
      "Fast Page Speed & Mobile-Responsive Design",
      "Analytics & Event Tracking Integration"
    ],
    features: [
      { title: "Distraction-Free UX", desc: "Eliminates superfluous links to keep user attention on the primary CTA." },
      { title: "Sub-Second Loading", desc: "Optimized assets to prevent ad click drop-off due to latency." },
      { title: "Scannable Hierarchy", desc: "Short paragraphs, clear value callouts, and strategic visual anchors." }
    ],
    process: [
      { step: "01", title: "Offer Definition", desc: "Clarify the single primary action required from the user." },
      { step: "02", title: "Copywriting & Flow", desc: "Structure headline, pain point, solution, proof, and offer." },
      { step: "03", title: "Visual UI Design", desc: "Produce high-impact layouts, diagrams, and CTA buttons." },
      { step: "04", title: "Code & Tracking", desc: "Code responsive page and verify lead collection endpoints." }
    ],
    suitableFor: [
      "Targeted advertising campaigns (Google Ads, Meta Ads)",
      "New product or service rollouts",
      "Webinars, workshop registrations, and consultation bookings",
      "Time-sensitive promotions and seasonal offers"
    ],
    benefits: [
      "Significantly higher conversion rates compared to generic pages",
      "Lower ad spend waste by matching user intent exactly",
      "Fast turnaround from concept to active campaign deployment",
      "Crisp capture of visitor contact information"
    ],
    accentColor: "bronze",
    iconName: "Target",
    visualHighlight: "Conversion-Focused Funnels"
  },
  {
    id: "website-maintenance",
    number: "07",
    name: "Reliable Proactive Website Maintenance",
    slug: "website-maintenance",
    tagline: "Reliable Up-Time, Security Hardening & Content Updates",
    shortDescription: "Proactive technical support, security patches, regular backups, and content updates to keep your website running at peak performance.",
    overview: "A great website requires ongoing vigilance. INLAYTECHS provides dependable website maintenance and technical support, ensuring your site stays secure, fast, and constantly up to date with your business evolution.",
    deliverables: [
      "Continuous Uptime & Performance Monitoring",
      "Security Patches, SSL Renewal & Threat Mitigation",
      "Regular Automated Cloud Backups",
      "Text, Image & Product Content Updates",
      "Core Framework & Plugin Upgrades",
      "Direct Developer Technical Support via WhatsApp / Email"
    ],
    features: [
      { title: "Proactive Protection", desc: "Catching potential vulnerabilities before they affect your business." },
      { title: "Rapid Turnaround", desc: "Prompt updates for announcements, new offerings, or price adjustments." },
      { title: "Zero Downtime", desc: "Careful staging and deployment of updates to maintain uninterrupted operations." }
    ],
    process: [
      { step: "01", title: "Initial System Audit", desc: "Review existing codebase, plugins, security status, and backup setup." },
      { step: "02", title: "Monitoring Setup", desc: "Implement automated health checks, uptime tracking, and alerts." },
      { step: "03", title: "Scheduled Maintenance", desc: "Execute regular updates, database cleanups, and performance tune-ups." },
      { step: "04", title: "On-Demand Changes", desc: "Incorporate business updates upon your request with fast turnaround." }
    ],
    suitableFor: [
      "Businesses without in-house technical web developers",
      "Mission-critical websites requiring 99.9% uptime",
      "E-commerce stores needing ongoing security and backup checks",
      "Brands frequently updating services, events, or portfolios"
    ],
    benefits: [
      "Peace of mind knowing your digital storefront is secure and backed up",
      "No disruption to client inquiries or revenue generation",
      "Long-term protection of your initial web development investment",
      "Direct, reliable access to dedicated technical professionals"
    ],
    accentColor: "bronze",
    iconName: "ShieldCheck",
    visualHighlight: "Proactive Support & Security"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find(s => s.slug === slug || s.id === slug);
}
