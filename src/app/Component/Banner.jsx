
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import slide1 from "../../../public/slide1.png";
import slide2 from "../../../public/slide2.png";
import slide3 from "../../../public/slide3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Banner() {
  const slides = [slide1, slide2, slide3];
  const hasEnoughSlides = slides.length > 1; // Ensure loop works properly

  return (
    <div>
      <Swiper
        // pagination={{ type: "fraction" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={hasEnoughSlides}
        navigation={true} // Enable navigation
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="responsive"
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
