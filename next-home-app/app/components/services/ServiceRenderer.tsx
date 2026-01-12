"use client";

import React, { useEffect, useRef } from "react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Code,
  Building,
  Target,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Briefcase,
} from "lucide-react";

/* ================= TYPES ================= */

type ServiceMeta = {
  icon: string;
  description: string;
  features: string[];
  hero_image?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
};

type Section = {
  id: string | number;
  section_key: string;
  title: string;
  sub_title?: string;
  meta: ServiceMeta;
};

type PageData = {
  title: string;
  sections: Section[];
};

/* ================= ICON MAP ================= */

const iconMap: Record<string, any> = {
  Code,
  Building,
  Target,
  UserCheck,
};

/* ================= COMPONENT ================= */

export default function ServiceRenderer({
  service,
}: {
  service: { data: { result: PageData } };
}) {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const pageData = service?.data?.result;

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    if (!pageData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("service-item-wrapper")) {
              entry.target.classList.add("slide-in-from-right");
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    document
      .querySelectorAll(".service-item-wrapper, .scroll-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pageData]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No data found
      </div>
    );
  }

  const heroSection = pageData.sections.find(
    (sec) => sec.section_key === "hero"
  );

  const serviceSections = pageData.sections.filter(
    (sec) => sec.section_key === "service"
  );

    const leftImageRightContentSections = pageData.sections.filter(
    (sec) => sec.section_key === "service"
  );

   const rightImageLeftContentSections = pageData.sections.filter(
    (sec) => sec.section_key === "service"
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* ================= HERO ================= */}
      {heroSection && (
        <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-teal-400/15 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {heroSection.sub_title && (
              <Badge className="mb-4">
                <Briefcase className="w-3 h-3 mr-1" />
                {heroSection.sub_title}
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {heroSection.title}
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
              {heroSection.meta.description}
            </p>

            <div className="flex gap-3 mt-6">
              {heroSection.meta.ctaPrimary && (
                <Button className="bg-emerald-600 text-white">
                  {heroSection.meta.ctaPrimary}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}

              {heroSection.meta.ctaSecondary && (
                <Button variant="outline">
                  {heroSection.meta.ctaSecondary}
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      {serviceSections.length > 0 && (
        <section ref={servicesRef} className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 space-y-20">
            {serviceSections.map((service, index) => {
              const Icon = iconMap[service.meta.icon] || Code;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  className="service-item-wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="w-72 h-72 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-32 h-32 bg-blue-500 rounded-3xl flex items-center justify-center">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <h3 className="text-3xl font-bold">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mt-3">
                      {service.meta.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {service.meta.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle className="text-blue-500 w-5 h-5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}







      <Footer />
    </div>
  );
}
