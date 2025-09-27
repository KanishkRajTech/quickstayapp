// components/Footer.tsx
import Link from "next/dist/client/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAF2F2] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/Black.png"
              alt="QuickStay Logo"
              width={200}
              height={100}
            />
          </div>
          <p className="text-md leading-6 text-[#818080]">
            QuickStay Smart makes property management effortless, giving you
            full control and complete peace of mind.
          </p>
        </div>

        {/* Links */}
        <div>
          <ul className="space-y-3 text-md">
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Demo Videos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-3 text-md">
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-[#818080]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Download App</h3>
          <div className="space-y-3  ">
            <Image
              src="/app-store.png"
              alt="Get it on Google Play"
              width={120}
              height={30}
              className="hover:scale-105 transition-transform rounded-lg h-10"
            />
            <Image
              src="/play-store.png"
              alt="Get it on Google Play"
              width={120}
              height={20}
              className="hover:scale-105 transition-transform rounded-lg h-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-dotted border-gray-400 py-8 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="bg-red-100 text-red-700 p-3 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-red-100 text-red-700 p-3 rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="bg-red-100 text-red-700 p-3 rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-red-100 text-red-700 p-3 rounded-full">
            <FaYoutube />
          </a>
          <a href="#" className="bg-red-100 text-red-700 p-3 rounded-full">
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm">
          © Copyright 2025 QuickStay | All Rights Reserved.
        </p>
      </div>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-16 right-0 flex items-center justify-center bg-[#A00500] text-white h-10 w-10 rounded-l-lg cursor-pointer transition"
      >
        <FaArrowUp />
      </div>
    </footer>
  );
}
