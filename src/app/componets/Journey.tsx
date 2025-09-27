"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

export default function Journey() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  //  Scroll visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  //  3D hover tilt
  useEffect(() => {
    const container = imageRef.current;
    if (!container) return;
    const inner = container.querySelector(".about-image-inner") as HTMLElement;
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
      className={`container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-12 md:mt-20 
      transition-all duration-1000 ease-out transform 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-4 md:space-y-6">
          <h3 className="text-[#A00500] font-semibold text-base md:text-lg mb-2">
            How to get started?
          </h3>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
            Your Journey to Smarter Property Management Starts Here!
          </h1>
          <p className="text-[#626262] text-lg">
            Simplify your rental operations, boost revenues and deliver a better
            experience to your tenants - all from one platform.
          </p>
          {/* List */}
          <div className="text-[#868686] text-base md:text-lg">
            <ul>
              {[
                "Download the QuickStay Smart App",
                "Create your account for free",
                "List your property & add details",
                "Woah! you now have a smart property",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="h-4 w-4 rounded-full border-2 border-[#A00500] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#A00500]" />
                  </div>
                  <p className="text-[#626262] text-lg">{step}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex justify-start items-center gap-6 mt-10">
            <Link
              href="https://smart.quickstay.app/"
              className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-5 py-3 md:px-6 md:py-4 rounded-md hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-md transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10 text-white font-semibold text-xl md:text-base">
                Download app
              </span>
            </Link>

            <div className="cursor-pointer text-[#868686] hover:text-[#A00500] text-base md:text-lg flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#A00500] flex items-center justify-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-6 md:h-6"
                >
                  <path
                    d="M19.4357 13.9174C20.8659 13.0392 20.8659 10.9608 19.4357 10.0826L9.55234 4.01389C8.05317 3.09335 6.125 4.17205 6.125 5.93128V18.0688C6.125 19.828 8.05317 20.9067 9.55234 19.9861L19.4357 13.9174Z"
                    fill="#a00500"
                  />
                </svg>
              </div>
              Watch Demo
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE WITH 3D HOVER */}
        <div className="lg:w-1/2 w-full mx-auto flex items-center justify-center lg:mb-0">
          <div
            className="w-full mx-auto lg:max-w-lg perspective-[1000px]"
            ref={imageRef}
          >
            <div className="about-image-inner transition-transform duration-300 ease-out will-change-transform">
              <Image
                src="/4/2.png"
                alt="Journey Background"
                width={600}
                height={400}
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
