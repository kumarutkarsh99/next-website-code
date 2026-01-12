"use client";

import React from "react";
import { Badge } from "@/app/components/ui/badge";
import * as Icons from "lucide-react";



interface StatItem {
  icon: keyof typeof Icons; // safer typing for icons
  label: string;
  value: string;
  description: string;
}

interface StatsSectionProps {
  data: {
    title: string;
    sub_title?: string | null;
    meta: {
      items: StatItem[];
    };
  };
}

const StatsSection: React.FC<StatsSectionProps> = ({ data }) => {
  if (!data?.meta?.items?.length) return null;

  const stats: StatItem[] = data.meta.items;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
            Stats
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = (Icons as any)[item.icon] as React.FC<React.SVGProps<SVGSVGElement>>;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-emerald-600">

                  
                  {/* <Icon size={40} /> */}
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {item.value}
                </h3>

                <p className="font-semibold text-gray-800 mb-2">{item.label}</p>

                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
