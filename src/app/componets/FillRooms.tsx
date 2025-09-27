"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faChartBar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

export default function FillRooms() {
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
      className="container lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-12 md:mt-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Left Content */}
        <div
          className={`lg:w-1/2 w-full space-y-6 transform transition-all duration-1000 ease-out
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <h1 className="text-3xl md:text-4xl font-semibold">Fill Rooms Fast, Earn Faster!</h1>
          <p className="text-[#7A7A7A] text-lg leading-relaxed">
            QuickStay gives you the tools and data to boost bookings, retain tenants longer and grow your earnings - all with the right data & insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
            {[
              { icon: faBed, title: "Bed Analytics", desc: "Track vacant beds", bg: "#F4F5FE", color: "#7681F8" },
              { icon: faUser, title: "Tenant Leads", desc: "Track inquiries", bg: "#FFF3FB", color: "#FF61C7" },
              { icon: faChartBar, title: "Lead Reports", desc: "Track conversions", bg: "#FFF5F0", color: "#FF7C41" },
              { icon: faUserPlus, title: "Follow Up", desc: "Close deals fast", bg: "#EBFCFA", color: "#08DEC3" },
            ].map((item, i) => (
              <div key={i} className="flex items-center text-left mb-6">
                <div
                  className="h-16 w-16 flex items-center justify-center mb-2 rounded-full"
                  style={{ background: item.bg }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-3xl" style={{ color: item.color }} />
                </div>
                <div className="ml-4">
                  <Link href="#" className="font-semibold text-[#000]">{item.title}</Link>
                  <p className="text-lg text-[#7A7A7A] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://smart.quickstay.app/"
              className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-8 py-4 rounded-4xl hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-md transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10 text-white font-bold">Download App</span>
            </Link>

            <div className="cursor-pointer text-[#868686] hover:text-[#A00500] flex items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-[#A00500] flex items-center justify-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4357 13.9174C20.8659 13.0392 20.8659 10.9608 19.4357 10.0826L9.55234 4.01389C8.05317 3.09335 6.125 4.17205 6.125 5.93128L6.125 18.0688C6.125 19.828 8.05317 20.9067 9.55234 19.9861L19.4357 13.9174Z"
                    fill="#a00500"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image with 3D tilt */}
        <div
          className={`lg:w-1/2 w-full flex justify-center transform transition-all duration-1000 ease-out delay-300
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <div ref={imageRef} className="perspective-[1000px] w-full max-w-[650px]">
            <div className="rental-image-inner transition-transform duration-300 ease-out will-change-transform">
              <Image
                src="/800X600/3.png"
                alt="Fill Rooms Fast, Earn Faster!"
                width={650}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
