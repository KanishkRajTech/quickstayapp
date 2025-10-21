"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Explore() {
  return (
    <section className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 overflow-hidden mt-14">
      <div className="items-center justify-center">
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Explore QuickStay Smart!
          </h1>
          <p className="text-[#7A7A7A] text-lg md:w-1/2 mx-auto mt-10">
            Take a look at the app that simplifies property management — track
            rent, manage complaints, and handle tenants with minimum effort, all
            in one place.
          </p>
        </div>

        <Swiper
          slidesPerView={2} 
          loop={true}
          autoplay={{
            delay: 2500,         
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="mySwiper"
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 }, 
            768: { slidesPerView: 3, spaceBetween: 20 }, 
            1024: { slidesPerView: 5, spaceBetween: 0 }, 
          }}
        >
          {["1.png", "2.png", "3.png", "2.png", "1.png", "2.png", "3.png"].map(
            (img, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center h-full py-4 transition-all duration-500 swiper-slide-content">
                  <Image
                    src={`https://quickstayapp.com/wp-content/uploads/2025/03/${img}`}
                    alt={`Slide ${i + 1}`}
                    width={500}
                    height={900}
                    className="object-contain transition-transform duration-500 swiper-image mb-5"
                    loading="eager" 
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
