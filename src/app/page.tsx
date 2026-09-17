import React from "react";
import { Hero } from "@/components/home/Hero";
import { ValueStatement } from "@/components/home/ValueStatement";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { WhyInlaytechs } from "@/components/home/WhyInlaytechs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { DigitalMarketingSection } from "@/components/home/DigitalMarketingSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 02 — Hero */}
      <Hero />

      {/* 03 — Brand / Value Statement */}
      <ValueStatement />

      {/* 04 — Services (What We Do) */}
      <ServicesSection />

      {/* 05 — Selected Client Achievements */}
      <AchievementsSection />

      {/* 06 — Why INLAYTECHS */}
      <WhyInlaytechs />

      {/* 07 — Process (Discover -> Plan -> Design -> Develop -> Launch) */}
      <ProcessSection />

      {/* 08 — Digital Marketing / Growth Section */}
      <DigitalMarketingSection />

      {/* 09 — About Leadership (Mr. Eswaran & G. Deenadhayalan) */}
      <LeadershipSection />

      {/* 10 — Trust / Quality Section */}
      <TrustSection />

      {/* 11 — FAQ */}
      <FAQSection />

      {/* 12 — Final CTA */}
      <FinalCTA />

      {/* 13 — Contact / Lead Generation */}
      <ContactSection />
    </div>
  );
}
