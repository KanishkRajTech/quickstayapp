"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Market() {
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
    const inner = container.querySelector(".market-image-inner") as HTMLElement;
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
      className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 overflow-hidden"
    >
      <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >

        {/* Image with 3D Tilt */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div ref={imageRef} className="perspective-[1000px] w-full max-w-[600px]">
            <div className="market-image-inner transition-transform duration-300 ease-out will-change-transform">
              <Image
                src="/4/4.png"
                alt="Market Your Property Illustration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 w-full space-y-6">
          <div>
            <div className="h-20 w-20 text-2xl flex items-center justify-center mb-2 rounded-full bg-[#F8EBEB]">
              <FontAwesomeIcon icon={faComments} className="text-[#A00500] text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold">Market Your Property Like a Pro</h1>

          <ul className="text-[#7A7A7A] text-lg space-y-3">
            {[
              "Manage all property details in one place",
              "Share property details in one-click with leads",
              "Get a brand website for your property",
              "Showcase properties professionally"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z"
                    fill="#a00500"
                  />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Link
            href="https://smart.quickstay.app/"
            className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-10 py-4 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
            <span className="relative text-xl z-10 text-white font-semibold">Download App</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
