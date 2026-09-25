import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { CinematicLogoLoader } from "@/components/common/CinematicLogoLoader";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "INLAYTECHS — Websites & Digital Marketing Solutions",
    template: "%s | INLAYTECHS"
  },
  description: "INLAYTECHS architects bespoke business websites, high-converting e-commerce storefronts, landing pages, Meta Ads, Instagram Reels, poster design, and proactive website maintenance.",
  keywords: [
    "INLAYTECHS",
    "Website development",
    "E-commerce websites",
    "Portfolio websites",
    "Landing pages",
    "Digital marketing",
    "Social media marketing",
    "Meta Ads",
    "Instagram Reels",
    "Poster design",
    "Website maintenance",
    "Web agency India"
  ],
  authors: [
    { name: "MR ESWARAN", url: COMPANY.url },
    { name: "G DEENADHAYALAN", url: COMPANY.url }
  ],
  creator: "INLAYTECHS",
  openGraph: {
    title: "INLAYTECHS — Websites & Digital Marketing Solutions",
    description: "We build digital experiences that build businesses. Websites, e-commerce, landing pages, digital marketing, and Meta Ads.",
    url: COMPANY.url,
    siteName: "INLAYTECHS",
    images: [
      {
        url: "/assets/renders/inlaytechs_brand_suite.jpg",
        width: 1200,
        height: 630,
        alt: "INLAYTECHS Brand Suite"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "INLAYTECHS — Websites & Digital Marketing Solutions",
    description: "We build digital experiences that build businesses.",
    images: ["/assets/renders/inlaytechs_brand_suite.jpg"]
  },
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/assets/favicons/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

import { CustomCursor } from "@/components/common/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-[#E5E7EB] antialiased selection:bg-pink-600 selection:text-white font-serif">
        {/* Desktop-Only Subtle Magnetic Cursor */}
        <CustomCursor />

        {/* Cinematic Initial / Refresh Loading Animation */}
        <CinematicLogoLoader />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Persistent WhatsApp Floating Button */}
        <WhatsAppFloating />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
