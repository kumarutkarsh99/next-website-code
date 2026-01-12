import React from "react";
import { Button } from "@/app/components/ui/button";

export default function RightImageLeftContentSection({ data }: any) {
  const { title, sub_title, meta } = data;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-3xl font-bold">{title}</h2>
          {sub_title && <p className="mt-2 text-lg text-gray-600">{sub_title}</p>}
          {meta.content && (
            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: meta.content }}
            />
          )}
          {meta.cta?.length > 0 && (
            <div className="mt-6 flex gap-4">
              {meta.cta.map((btn: any, i: number) => (
                <Button key={i}>{btn.label}</Button>
              ))}
            </div>
          )}
        </div>

        {/* Right Image */}
        {meta.image && (
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={meta.image}
              alt={title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
