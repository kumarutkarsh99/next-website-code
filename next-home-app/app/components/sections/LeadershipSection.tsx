"use client";

import React from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";

import { Linkedin, Mail } from "lucide-react";

/* -----------------------------------
   TYPES
----------------------------------- */
interface Leader {
  name: string;
  email: string;
  image: string;
  linkedin: string;
  position: string;
  description?: string;
}

interface LeadershipSectionProps {
  data: {
    title: string;
    sub_title?: string | null;
    meta: {
      members: Leader[];
    };
  };
}

/* -----------------------------------
   COMPONENT
----------------------------------- */
const LeadershipSection: React.FC<LeadershipSectionProps> = ({ data }) => {
  const { title, sub_title, meta } = data;
  const leaders = meta?.members || [];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Leadership Team
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>

            {sub_title && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {sub_title}
              </p>
            )}
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="scroll-reveal group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}

                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {leader.name}
                  </CardTitle>

                  <p className="text-emerald-600 font-semibold">
                    {leader.position}
                  </p>
                </CardHeader>

                {leader.description && (
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {leader.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
