export const COMPANY = {
  name: "INLAYTECHS",
  tagline: "We Build Digital Experiences That Build Businesses.",
  domain: "www.inlaytechs.in",
  url: "https://www.inlaytechs.in",
  email: "inlaytechs@gmail.com",
  phone: "+91 8688075376",
  phoneDisplay: "+91 86880 75376",
  whatsappNumber: "918688075376",
  instagramUrl: "https://www.instagram.com/inlaytechs?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  instagramHandle: "Inlaytechs.",
  leadership: {
    founder: {
      name: "MR ESWARAN",
      role: "Founder",
      bio: "Guiding the strategic vision, foundational architecture, and client-centric engineering standards across INLAYTECHS technology practices."
    },
    ceo: {
      name: "G DEENADHAYALAN",
      role: "Chief Executive Officer",
      bio: "Directing operations, executive growth strategy, and the delivery of high-impact digital products and marketing campaigns."
    }
  },
  colors: {
    bgPrimary: "#050505",
    bgSecondary: "#0A0A0A",
    bgCharcoal: "#111111",
    teal: "#14B8A6",
    tealGlow: "#2DD4BF",
    bronze: "#CD7F32",
    goldAccent: "#F59E0B",
    silver: "#E0E0E0",
    white: "#FFFFFF",
    muted: "#8A8A8A"
  }
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Hello INLAYTECHS! I would like to discuss a project with your team.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}

export function getEmailUrl(subject?: string, body?: string): string {
  const sub = encodeURIComponent(subject || "Project Inquiry — INLAYTECHS");
  const b = encodeURIComponent(body || "Hello INLAYTECHS team,\n\nI would like to discuss a project.");
  return `mailto:${COMPANY.email}?subject=${sub}&body=${b}`;
}

export function getPhoneUrl(): string {
  return `tel:${COMPANY.phone.replace(/\s+/g, '')}`;
}
