import React from "react";

import Concert from "@/components/Concert";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ComparisonSection from "@/components/ComparisonSection";
import StepsSection from "@/components/StepsSection";
import CreativeRevolutionSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";


export default function Page() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar/>
      <HeroSection />
      <FeaturesSection/>
      <ComparisonSection />
      <StepsSection />
      <CreativeRevolutionSection />
      <Concert/>
      <FAQSection />
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}