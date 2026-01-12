"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SliderSection({ data }: { data: any }) {
  const { title, sub_title, images, section_key, meta } = data;

  const isSlider = section_key === "slider";

  if (!images || images.length === 0) return null;

  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (!isSlider || total <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isSlider, total]);

  return (
    <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        {(title || sub_title) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-4xl font-bold">{title}</h2>}
            {sub_title && (
              <p className="text-gray-600 mt-3">{sub_title}</p>
            )}
          </div>
        )}

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[420px] overflow-hidden rounded-xl shadow-lg">
            {images.map((img: string, index: number) => {
              const imagePath = `${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/sections/${img}`;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    !isSlider || index === current
                      ? "opacity-100 z-10"
                      : "opacity-0"
                  }`}
                >
                  <Image
                    src={imagePath}
                    alt={`slide-${index}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* 🔥 CTA Overlay */}
                  {meta?.cta?.length > 0 && index === current && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white space-y-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                          {meta.cta.map((btn: any, i: number) => (
                            <Link
                              key={i}
                              href={btn.url}
                              className={`px-6 py-3 rounded-lg font-medium transition ${
                                btn.variant === "outline"
                                  ? "border border-white text-white hover:bg-white hover:text-black"
                                  : "bg-emerald-600 hover:bg-emerald-700"
                              }`}
                            >
                              {btn.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          {isSlider && total > 1 && (
            <>
              <button
                onClick={() => setCurrent((current - 1 + total) % total)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                ◀
              </button>

              <button
                onClick={() => setCurrent((current + 1) % total)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                ▶
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {images.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === current
                        ? "bg-emerald-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
