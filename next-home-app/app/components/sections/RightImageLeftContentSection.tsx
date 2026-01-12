"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
export default function LeftImageRightContentSection({ data }: any) {
  const { title, sub_title, meta } = data;

  return (
    <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 scroll-reveal">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 order-1">
          {meta?.badge && (
            <span className="text-sm text-emerald-600 font-semibold">
              {meta.badge}
            </span>
          )}

          <h2 className="text-5xl font-bold mt-4">{title}</h2>

          {sub_title && (
            <p className="text-xl text-gray-600 mt-4">{sub_title}</p>
          )}

          {meta?.content && (
            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: meta.content }}
            />
          )}

          {meta?.cta?.length > 0 && (
            <div className="flex gap-4 mt-8">
              {meta.cta.map((btn: any, i: number) => (
                <Button key={i}>{btn.label}</Button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {meta?.image && (
          <div className="lg:w-1/2 order-2">
            {/* <img
              src={meta.image} 
              alt={title}
              className="w-full rounded-lg shadow-lg"
            /> */}
            <Image  src={meta.image} alt={title} className="w-full rounded-lg shadow-lg"   width={600}
  height={400}  />
          </div>
        )}

      </div>
    </section>
  );
}
