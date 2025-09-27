// "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, EffectCoverflow } from "swiper/modules";
// // import Image from "next/image";
// // import "swiper/css";
// // import "swiper/css/effect-coverflow";
// // import { useState } from "react";

// // export default function HeroSlider() {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const images = [

// //     "https://quickstayapp.com/wp-content/uploads/2025/03/1.png",
// //     "https://quickstayapp.com/wp-content/uploads/2025/03/2.png",
// //     "https://quickstayapp.com/wp-content/uploads/2025/03/3.png",
// //   ];

// //   return (
// //     <div className="mx-auto px-4 py-10">
// //       <div className="flex items-center">
// //         {/* Left Decorative Image */}
// //         <Image
// //           src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-10.png"
// //           alt="Decorative left shape"
// //           width={75}
// //           height={80}
// //           className="undown"
// //         />

// //         {/* Swiper */}
// //         <div className="relative flex-1 w-[60%] border-amber-700 border-2 ">
// //           <Swiper
// //             modules={[Autoplay, EffectCoverflow]}
// //             effect="coverflow"
// //             grabCursor={true}
// //             centeredSlides={true}
// //             loop={true}
// //             loopAdditionalSlides={3} // ✅ ensures smooth looping with few slides
// //             slidesPerView={"auto"} // ✅ auto adjusts instead of forcing 3
// //             autoplay={{
// //               delay: 3000,
// //               disableOnInteraction: false,
// //               pauseOnMouseEnter: true,
// //             }}
// //             speed={700}
// //             coverflowEffect={{
// //               rotate: 0,
// //               stretch: 0,
// //               depth: 100,
// //               modifier: 1,
// //               slideShadows: false,
// //             }}
// //             breakpoints={{
// //               320: {
// //                 slidesPerView: 1,
// //               },
// //               768: {
// //                 slidesPerView: "auto",
// //               },
// //             }}
// //             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
// //             className=" pb-12"
// //           >
// //             {images.map((src, i) => (
// //               <SwiperSlide
// //                 key={i}
// //                 className="flex justify-center items-center transition-all duration-300  px-1 py-10 max-w-[300px]"
// //               >
// //                 <div
// //                   className={`relative group overflow-hidden transition-all duration-300 ${
// //                     activeIndex === i ? "scale-105" : "scale-95 opacity-80"
// //                   }`}
// //                 >
// //                   <Image
// //                     src={src}
// //                     alt={`Property ${i + 1}`}
// //                     width={300}
// //                     height={700}
// //                     className="object-contain"
// //                   />
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>

// //         {/* Right Decorative Image */}
// //         <Image
// //           src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-11.png"
// //           alt="Decorative right shape"
// //           width={75}
// //           height={80}
// //           className="laftright"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";

// // export default function HeroSlider() {
// //   return (
// //     <div className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-20 md:mt-20">
// //       <div className="flex items-center justify-center gap-4 md:gap-6 relative">
// //         {/* Left Decorative Image */}
// //         <div className="hidden md:block flex-shrink-0">
// //           <Image
// //             src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-10.png"
// //             alt="Decorative left shape"
// //             width={75}
// //             height={80}
// //             className="undown animate-bounce-slow hidden lg:block"
// //           />
// //         </div>

// //         {/* Swiper Slider Container */}
// //         <div className="w-full max-w-4xl mx-auto">
// //           <Swiper
// //             slidesPerView={1}
// //             spaceBetween={20}
// //             centeredSlides={true}
// //             loop={true}
// //             autoplay={{
// //               delay: 2500,
// //               disableOnInteraction: false,
// //             }}
// //             breakpoints={{
// //               640: {
// //                 slidesPerView: 1.5,
// //                 spaceBetween: 5,
// //               },
// //               768: {
// //                 slidesPerView: 2.5,
// //                 spaceBetween: 10,
// //               },
// //               1024: {
// //                 slidesPerView: 3,
// //                 spaceBetween: 20,
// //               },
// //             }}
// //             modules={[Pagination, Autoplay]}
// //             className="hero-swiper"
// //           >
// //             {["1.png", "2.png", "3.png", "2.png", "1.png"].map((img, i) => (
// //               <SwiperSlide key={i}>
// //                 <div className="flex justify-center items-center h-full py-4">
// //                   <Image
// //                     src={`https://quickstayapp.com/wp-content/uploads/2025/03/${img}`}
// //                     alt={`Slide ${i + 1}`}
// //                     width={300}
// //                     height={600}
// //                     className="object-contain transition-all duration-500"
// //                   />
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>

// //         {/* Right Decorative Image */}
// //         <div className="hidden md:block flex-shrink-0">
// //           <Image
// //             src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-11.png"
// //             alt="Decorative right shape"
// //             width={75}
// //             height={80}
// //             className="laftright animate-bounce-slow hidden lg:block"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function HeroSlider() {
//   return (
//     <div className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-20 md:mt-20">
//       <div className="flex items-center justify-center gap-4 md:gap-6 relative">
//         {/* Left Decorative Image */}
//         <div className="hidden md:block flex-shrink-0">
//           <Image
//             src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-10.png"
//             alt="Decorative left shape"
//             width={75}
//             height={80}
//             className="undown animate-bounce-slow hidden lg:block"
//           />
//         </div>

//         {/* Swiper Slider Container */}
//         <div className="w-full max-w-4xl mx-auto">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             centeredSlides={true}
//             loop={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.5,
//                 spaceBetween: 5,
//               },
//               768: {
//                 slidesPerView: 2.5,
//                 spaceBetween: 10,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//               },
//             }}
//             modules={[Pagination, Autoplay]}
//             className="hero-swiper"
//           >
//             {["1.png", "2.png", "3.png", "2.png", "1.png"].map((img, i) => (
//               <SwiperSlide key={i}>
//                 <div className="flex justify-center items-center h-full py-4 transition-all duration-500">
//                   <Image
//                     src={`https://quickstayapp.com/wp-content/uploads/2025/03/${img}`}
//                     alt={`Slide ${i + 1}`}
//                     width={300}
//                     height={500}
//                     className="object-contain  transition-transform duration-500"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Right Decorative Image */}
//         <div className="hidden md:block flex-shrink-0">
//           <Image
//             src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-11.png"
//             alt="Decorative right shape"
//             width={75}
//             height={80}
//             className="laftright animate-bounce-slow hidden lg:block"
//           />
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style jsx global>{`
//         .hero-swiper .swiper-slide {
//           transition: transform 0.5s ease, opacity 0.5s ease;
//           opacity: 0.6;
//         }
//         /* Active Center Slide */
//         .hero-swiper .swiper-slide-active {
//           transform: translateY(-30px) scale(1.1);
//           opacity: 1;
//           z-index: 10;
//         }
//         /* Left Side Slide */
//         .hero-swiper .swiper-slide-prev {
//           transform: translateX(50px) scale(0.9);
//           opacity: 0.8;
//         }
//         /* Right Side Slide */
//         .hero-swiper .swiper-slide-next {
//           transform: translateX(-50px) scale(0.9);
//           opacity: 0.8;
//         }
//       `}</style>
//     </div>
//   );
// }
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