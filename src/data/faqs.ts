export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Websites" | "Marketing" | "Process";
}

export const FAQS: FAQItem[] = [
  {
    question: "What type of websites do you build?",
    answer: "INLAYTECHS builds custom business websites, corporate flagships, professional portfolios, high-converting landing pages, and modern e-commerce storefronts. Every website is built bespoke with modern responsive layouts, clean typography, fast loading speeds, and search-engine friendly markup.",
    category: "Websites"
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes. We engineer complete e-commerce solutions featuring responsive product catalogs, seamless filtering, mobile-friendly shopping carts, and secure payment integrations (such as UPI, Razorpay, Stripe, and net banking) tailored to your operational requirements.",
    category: "Websites"
  },
  {
    question: "Do you provide digital marketing services?",
    answer: "Yes. We provide integrated digital marketing services including search visibility, performance advertising, social media distribution, and conversion funnel optimization to help businesses expand their online reach and acquire customers.",
    category: "Marketing"
  },
  {
    question: "Do you manage Meta Ads and create Instagram Reels?",
    answer: "Yes. We handle end-to-end creative production for Meta Ads (Facebook & Instagram) and Instagram Reels, including script concepting, hook design, motion graphics editing, audience targeting, and campaign setup.",
    category: "Marketing"
  },
  {
    question: "Can you design posters and social media creatives?",
    answer: "Yes. We design high-impact promotional posters and social media creatives for service announcements, campaign launches, corporate events, and daily brand engagement in both digital and print-ready formats.",
    category: "Marketing"
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Yes. We offer reliable website maintenance support, including uptime monitoring, regular cloud backups, security patches, framework updates, and prompt content changes so your site stays fast and secure.",
    category: "General"
  },
  {
    question: "How can I start a project with INLAYTECHS?",
    answer: "Starting a project is straightforward. You can submit our 'Start a Project' form on this website, send an email to inlaytechs@gmail.com, or tap the WhatsApp button to chat directly with our team at +91 8688075376. We will review your requirements and provide an actionable scope and timeline.",
    category: "Process"
  },
  {
    question: "Can I contact INLAYTECHS directly through WhatsApp?",
    answer: "Yes! WhatsApp is one of our fastest communication channels. You can reach our team directly at +91 8688075376, and our chat button on the website will open a direct conversation immediately.",
    category: "Process"
  }
];
