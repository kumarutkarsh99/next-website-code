"use client";

import React from "react";
import { Badge } from "@/app/components/ui/badge";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface JourneySectionProps {
  data: {
    title: string;
    sub_title?: string | null;
    meta: {
      items: TimelineItem[];
    };
  };
}


const JourneySection: React.FC<JourneySectionProps> = ({ data }) => {
  const journeySteps = data.meta.items;

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Our Journey
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>

            {data.sub_title && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {data.sub_title}
              </p>
            )}
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center mb-16 last:mb-0 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-contain rounded-2xl shadow-lg bg-white"
                  />
                </div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <div className="inline-flex px-4 py-2 rounded-full bg-emerald-600 text-white font-bold mb-4">
                    {step.year}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
