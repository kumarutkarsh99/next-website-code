"use client";

import React from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import {
  Target,
  Shield,
  Lightbulb,
  Handshake,
} from "lucide-react";

/* -----------------------------------
   ICON MAP
----------------------------------- */
const iconMap: Record<string, any> = {
  Target,
  Shield,
  Lightbulb,
  Handshake,
};

/* -----------------------------------
   COLOR MAP
----------------------------------- */
const colorMap: Record<string, { bg: string; text: string }> = {
  Excellence: { bg: "bg-emerald-500", text: "text-emerald-700" },
  Integrity: { bg: "bg-blue-500", text: "text-blue-700" },
  Innovation: { bg: "bg-purple-500", text: "text-purple-700" },
  Partnership: { bg: "bg-orange-500", text: "text-orange-700" },
};

/* -----------------------------------
   TYPES
----------------------------------- */
interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  data: {
    title: string;
    sub_title?: string | null;
    meta: {
      items: ValueItem[];
    };
  };
}

/* -----------------------------------
   COMPONENT
----------------------------------- */
const ValuesSection: React.FC<ValuesSectionProps> = ({ data }) => {
  const { title, sub_title, meta } = data;

  const values =
    meta?.items?.map((item) => ({
      icon: iconMap[item.icon],
      title: item.title,
      description: item.description,
      color: colorMap[item.title]?.bg ?? "bg-gray-500",
      textColor: colorMap[item.title]?.text ?? "text-gray-700",
    })) || [];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Our Values
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50/50"
                >
                  <div className={`h-1 ${value.color}`} />

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>

                    <CardTitle
                      className={`text-2xl font-bold mb-2 ${value.textColor}`}
                    >
                      {value.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
