"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSlider from "./componets/HeroSlider";
import Management from "./componets/Management";
import Tenant from "./componets/Tenant";
import Journey from "./componets/Journey";
import RentalIncome from "./componets/RentalIncome";
import FillRooms from "./componets/FillRooms";
import Control from "./componets/Control";
import TenantManagement from "./componets/TenantManagement";
import Market from "./componets/Market";
import Download from "./componets/Download";
import Footer from "@/component/Footer";
import Explore from "./componets/Explore";
import Navbar from "@/component/navbar";






export default function page() {
  return (
    <>
    
      <Navbar />
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-[#E9C5C4] to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Motion wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex flex-row items-center justify-between mt-8">
              <div className="flex justify-center items-center gap-4 lg:gap-12 xl:gap-16">
                <Image
                  src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-8.png"
                  alt="Decorative top shape"
                  width={75}
                  height={80}
                  className="laftright hidden xl:block"
                />

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-[#4A4A4A] leading-tight mb-6 max-w-4xl">
                  Manage your rental property with ease!
                </h1>

                <Image
                  src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-13.png"
                  alt="Decorative bottom shape"
                  width={60}
                  height={80}
                  className="laftright hidden xl:block"
                />
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#747474] leading-relaxed mb-5 max-w-2xl">
              Smart, Simple, Stress-free property management – One stay at a
              time!
            </p>

            {/* Buttons */}
            <div>
              <div className="flex items-center justify-around gap-6 lg:gap-12 xl:gap-16">
                <Image
                  src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-9.png"
                  alt="Decorative bottom shape"
                  width={60}
                  height={80}
                  className="undown hidden xl:block"
                />

                <div className="flex flex-row justify-center items-center gap-4 md:gap-6">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/app-store.png"
                      alt="Download on App Store"
                      width={160}
                      height={50}
                      className="hover:scale-105 transition-transform rounded-lg"
                    />
                  </Link>

                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/play-store.png"
                      alt="Get it on Google Play"
                      width={160}
                      height={50}
                      className="hover:scale-105 transition-transform rounded-lg"
                    />
                  </Link>
                </div>

                <Image
                  src="https://shtheme.com/demosd/teeno/wp-content/uploads/2023/11/shape-11.png"
                  alt="Decorative bottom shape"
                  width={60}
                  height={80}
                  className="undown hidden xl:block"
                />
              </div>
            </div>

            <HeroSlider />
          </motion.div>
        </div>
      </section>
      <div className="">
        <Management />
        <Tenant />
        <Journey />
        <RentalIncome />
        <FillRooms />
        <Control />
        <TenantManagement />
        <Market />
        <Download />
        <Explore />
      </div>
      <Footer />
    </>
  );
}
