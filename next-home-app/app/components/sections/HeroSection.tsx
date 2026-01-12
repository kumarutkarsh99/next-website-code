"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function HeroSection({ data }: any) {
  const { title, sub_title, meta } = data;

  return (
    <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {meta?.badge && (
              <span className="inline-block px-4 py-2 rounded-full bg-white shadow text-sm font-semibold text-emerald-600">
                {meta.badge}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>

            {sub_title && (
              <p className="text-lg text-gray-600 max-w-xl">
                {sub_title}
              </p>
            )}

            {meta?.description && (
              <p className="text-lg text-gray-600 max-w-xl">
                {meta.description}
              </p>
            )}

            {/* CTA BUTTONS */}
         {/* CTA BUTTONS */}
<div className="flex flex-wrap gap-4 pt-4">
  {meta?.primary_cta && (
    <Button variant="default" className="px-6 py-3">
      {meta.primary_cta}
    </Button>
  )}

  {meta?.secondary_cta && (
    <Button variant="outline" className="px-6 py-3">
      {meta.secondary_cta}
    </Button>
  )}
</div>

          </div>

          {/* RIGHT IMAGE / VIDEO */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
              
              {/* VIDEO SUPPORT */}
              {meta?.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  <source src={meta.video} type="video/mp4" />
                </video>
              ) : (
                /* IMAGE SUPPORT */
                meta?.image && (
                  <Image
                    src={meta.image}
                    alt={meta.image_alt || "Hero Image"}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
