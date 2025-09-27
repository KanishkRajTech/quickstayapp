"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";

export default function Management() {
  const imageRef = useRef(null);

  useEffect(() => {
    const container = imageRef.current;
    const inner = container.querySelector(".management-image-inner");

    const handleMouseMove = (e) => {
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
    <section className="max-w-7xl h-fit mx-auto py-10 mt-10">
      <div className="flex flex-col items-center justify-between gap-8 md:gap-1">
        {/* Section Title */}
        <div className="text-center mb-4">
          <span className="text-[#A00500] text-xl font-medium ">
            Smart Property Management
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 w-full md:w-3/5 mx-auto ">
            Manage everything with ease and accuracy
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 justify-around items-center">
          {/* Left Items */}
          <div>
            {[
              {
                num: "01",
                title: "Smart Finances",
                subtitle: "Invoicing & payments",
                desc: "Simplify and automate financial operations for a seamless, error-free experience.",
              },
              {
                num: "02",
                title: "Sales & Growth",
                subtitle: "Booking & management",
                desc: "Equip your team with insights and tools to make fast, well-informed decisions.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-18 h-18 border-2 rounded-lg border-[#A00500]">
                    <span className="text-[#A00500] font-bold text-xl">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold">{item.title}</h6>
                    <p className="text-gray-500 text-md">{item.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image with 3D tilt */}
          <div className="relative flex items-center justify-center my-8 lg:my-0">
            <div
              className="relative w-[600px] md:w-[540px] lg:w-[516px] perspective-[1000px]"
              ref={imageRef}
            >
              <div className="management-image-inner transition-transform duration-300 ease-out will-change-transform">
                <Image
                  src="/2.png"
                  alt="QuickStay App Mockup"
                  width={900}
                  height={300}
                  className="relative w-full h-auto md:w-[516px] md:h-[540px] md:top-[70] md:overflow-visible"
                />
              </div>
            </div>
          </div>

          {/* Right Items */}
          <div>
            {[
              {
                num: "03",
                title: "Smooth Operations",
                subtitle: "Efficient workflow management",
                desc: "Ensure smooth, precise, and hassle-free management of daily operational tasks.",
              },
              {
                num: "04",
                title: "Tenant Care",
                subtitle: "Seamless booking & stay experience",
                desc: "Enhance tenant interactions, making them effortless and highly efficient.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-18 h-18 border-2 border-[#A00500] rounded-lg shadow transition-transform duration-300">
                    <span className="text-[#A00500] font-bold text-xl">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">{item.title}</h6>
                    <p className="text-gray-500 text-md">{item.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
