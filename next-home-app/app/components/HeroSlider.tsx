"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="relative h-[600px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide className="h-full">
          <div className="relative h-full w-full">
            <Image
              src="/a1-selector-next/aboutus1.png"
              alt="Slide 1"
              fill
              priority
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="relative h-full w-full">
            <Image
              src="/a1-selector-next/aboutus2.png"
              alt="Slide 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="relative h-full w-full">
            <Image
              src="/a1-selector-next/aboutus3.png"
              alt="Slide 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
