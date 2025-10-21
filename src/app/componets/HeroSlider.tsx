
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";


export default function HeroSlider() {
  return (
    <div className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-20 md:mt-20">
      <div className="flex items-center justify-center gap-4 md:gap-6 relative">
        {/* Left Decorative Image */}
        <div className="hidden md:block flex-shrink-0 z-10">
          <Image
            src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-10.png"
            alt="Decorative left shape"
            width={75}
            height={80}
            className="undown animate-bounce-slow"
          />
        </div>

        {/* Swiper Slider Container */}
        <div className="w-full max-w-4xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="hero-swiper"
          >
            {["1.png", "2.png", "3.png", "2.png", "1.png"].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center h-full py-4 transition-all duration-500 swiper-slide-content">
                  <Image
                    src={`https://quickstayapp.com/wp-content/uploads/2025/03/${img}`}
                    alt={`Slide ${i + 1}`}
                    width={300}
                    height={500}
                    className="object-contain transition-transform duration-500 swiper-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Decorative Image */}
        <div className="hidden md:block flex-shrink-0 z-10">
          <Image
            src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-11.png"
            alt="Decorative right shape"
            width={75}
            height={80}
            className="laftright animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  );
}