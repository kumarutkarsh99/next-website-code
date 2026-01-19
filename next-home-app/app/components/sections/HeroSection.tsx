"use client";

import Image from "next/image";
import { Briefcase, Users, Target, CheckCircle } from "lucide-react";

/* Icon mapping from backend string → lucide icon */
const iconMap: Record<string, any> = {
  Briefcase,
  Users,
  Target,
};

export default function HeroSection({ data }: any) {
  const { meta } = data;

  return (
    <section className="p-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-teal-400/15 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 lg:px-12 h-full relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-6">
              {/* BADGE */}
              {meta?.badge && (
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-700 font-semibold">
                    {meta.badge}
                  </span>
                </div>
              )}

              {/* HEADLINE (FROM BACKEND meta.headline) */}
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight space-y-2">
                  {meta?.headline?.line1 && (
                    <span
                      className="block text-gray-900 animate-slideInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {meta.headline.line1}
                    </span>
                  )}

                  {meta?.headline?.line2 && (
                    <span
                      className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {meta.headline.line2}
                    </span>
                  )}
                </h1>

                {/* DESCRIPTION */}
                {meta?.description && (
                  <p
                    className="text-md text-gray-600 leading-relaxed max-w-xl animate-slideInLeft"
                    style={{ animationDelay: "0.6s" }}
                  >
                    {meta.description}
                  </p>
                )}
              </div>

              {/* HIGHLIGHTS (FROM BACKEND meta.highlights[]) */}
              {Array.isArray(meta?.highlights) &&
                meta.highlights.length > 0 && (
                  <div
                    className="space-y-4 animate-slideInLeft"
                    style={{ animationDelay: "0.8s" }}
                  >
                    {meta.highlights.map((item: any, i: number) => {
                      const Icon = iconMap[item.icon] || CheckCircle;
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                            <Icon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative lg:h-[550px] flex justify-center items-center">
              <div className="relative w-full max-w-[500px] animate-slideInRight">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl transform scale-110" />

                {meta?.image && (
                  <div className="relative bg-white rounded-2xl shadow-xl border-4 border-white/50 overflow-hidden">
                    <Image
                      src={meta.image}
                      alt="Hero Image"
                      width={800}
                      height={500}
                      className="w-full h-full object-contain"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
