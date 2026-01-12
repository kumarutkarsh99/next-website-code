"use client"; // required if components use hooks, motion, or browser APIs

import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import StatsSection from "@/app/components/StatsSection";
import SpecializationsSection from "@/app/components/SpecializationsSection";
import JobsSection from "@/app/components/JobsSection";
import Footer from "@/app/components/footer";
import WhyChooseTalentBridge from "@/app/components/WhyChooseTalentBridge";
import Testimonial from "@/app/components/Testimonial";
import TrustedCompanies from "@/app/components/TrustedCompanies";
import XBeesHireWorkflow from "@/app/components/XBeesHireWorkflow";
// import Insights from "@/components/Insights";
import Faq from "@/app/components/Faq";
import { X } from "lucide-react";

import XBeesHireWorkflowShort from "@/app/components/XBeesHireWorkflowShort";
// import XBeesHireWorkflow from "@/components/XBeesHireWorkflow";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedCompanies />
      <StatsSection />
      <SpecializationsSection />
      <JobsSection />
      <XBeesHireWorkflowShort />
      <XBeesHireWorkflow />
      <WhyChooseTalentBridge />
      <Testimonial />
      <Faq />
      <Footer />
     </div>
  );
}
