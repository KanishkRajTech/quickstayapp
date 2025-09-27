"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function RentalIncome() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  //  Scroll visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  //  3D hover tilt effect
  useEffect(() => {
    const container = imageRef.current;
    if (!container) return;
    const inner = container.querySelector(".rental-image-inner") as HTMLElement;
    if (!inner) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-12 md:mt-16 
      transition-all duration-1000 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Image Section with 3D tilt */}
        <div className="w-full lg:w-1/2 flex justify-center order-1">
          <div
            ref={imageRef}
            className="perspective-[1000px] w-full max-w-[650px]"
          >
            <div className="rental-image-inner transition-transform duration-300 ease-out will-change-transform">
              <Image
                src="/800X600/1.png"
                alt="Rental Income Illustration"
                width={650}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight lg:text-left">
            Handle your rental income the smart way
          </h1>
          <p className="text-[#7A7A7A] text-lg lg:text-left">
            Simplify and automate your finances by eliminating the manual work.
            QuickStay Smart helps you track payments, collect rent on time & much
            more!
          </p>

          <div className="text-[#7A7A7A] text-base md:text-lg">
            <ul className="space-y-3">
              {[
                "Automated Rent Collection",
                "Secure Transactions",
                "Easily accessible transactions",
                "Transparent & error-free payments",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z"
                        fill="#a00500"
                      />
                    </svg>
                  </div>
                  <p className="text-[#626262] text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row gap-4 md:gap-6 items-center justify-start">
            <Link
              href="https://smart.quickstay.app/"
              className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-8 py-3 md:px-8 md:py-4 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10 text-white font-semibold text-lg md:text-base">
                Download App
              </span>
            </Link>

            {/* Avatars */}
            <div className="flex -space-x-3 sm:-space-x-4">
              {[
                "https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/avatar-1.jpg",
                "https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/avatar-2.jpg",
                "https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/avatar-3.jpg",
                "https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/avatar-4.jpg",
              ].map((avatar, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`User avatar ${i + 1}`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              ))}
              <div className="bg-[#A00500] h-12 w-12 rounded-full flex items-center justify-center">
                <p className="text-white text-sm sm:text-base">+10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
