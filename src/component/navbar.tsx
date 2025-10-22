"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-white md:bg-transparent backdrop-blur-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto  px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link
              href="/"
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                    src="https://quickstayapp.com/wp-content/uploads/2025/03/Heading-10-1-e1742027089581.png"
                    alt="QuickStay"
                    className="md:h-20 h-10 object-contain"
               
                    width={150} 
                    height={20}
                />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-[#4A4A4A] font-medium hover:text-[#A00500] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/find-property"
                className="text-[#4A4A4A] font-medium hover:text-[#A00500] transition-colors duration-300"
              >
                Find Property
              </Link>
              <Link
                href="/property"
                className="text-[#4A4A4A] font-medium hover:text-[#A00500] transition-colors duration-300"
              >
                Property
              </Link>
            </nav>

            {/* Download Button */}
            <Link
              href="/Black.png"
              className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-6 py-3 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10 text-white font-bold group-hover:text-white">
                Download
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-[#4A4A4A] focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col  space-y-6 bg-white h-screen">
          <div className=" border-b border-black/20">
            <div className="text-2xl p-4 font-bold text-[#4A4A4A]">QuickStay</div>
          </div>
          <nav className="flex flex-col space-y-4 mt-5 ">
            <Link
              href="/"
              className="text-[#4A4A4A] text-xl px-8 font-medium hover:text-[#A00500] transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/find-property"
              className="text-[#4A4A4A] text-xl px-8 font-medium hover:text-[#A00500] transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Find Property
            </Link>
            <Link
              href="/property"
              className="text-[#4A4A4A] text-xl px-8 font-medium hover:text-[#A00500] transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Property
            </Link>
          </nav>

          {/* Mobile Download Button */}
          <div className="mt-6 mx-auto">
            <Link
              href="/Black.png"
              className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-6 py-3 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10 text-white font-bold group-hover:text-white">
                Download
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // scrolling down → hide navbar
//         setShowNavbar(false);
//       } else {
//         // scrolling up → show navbar
//         setShowNavbar(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.header
//       className="fixed top-0 left-0 w-full z-50 bg-white md:bg-transparent backdrop-blur-sm"
//       initial={{ y: -80, opacity: 0 }} // hidden initially
//       animate={showNavbar ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }} // animate based on scroll
//       transition={{ duration: 0.4, ease: "easeOut" }}
//     >
//       <div className="max-w-6xl mx-auto py-4 md:py-3 px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="logo">
//             <Link
//               href="/"
//               className="flex items-center transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src="https://quickstayapp.com/wp-content/uploads/2025/03/Heading-10-1-e1742027089581.png"
//                 alt="QuickStay"
//                 className="md:h-10 h-7 object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/Black.png"
//               className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-6 py-3 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
//               <span className="relative z-10 text-white font-bold">
//                 Download
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-2xl text-[#4A4A4A] focus:outline-none"
//             >
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar (Mobile Menu) */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col p-6 space-y-6 bg-white h-screen ">
//           <div className="mt-30 mx-auto">
//             <Link
//               href="#"
//               className="btn relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-[#A00500] px-6 py-3 rounded-full hover:bg-white group duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               <span className="absolute bottom-0 left-0 w-full h-0 bg-[#4A4A4A] rounded-full transition-all duration-500 ease-in-out group-hover:h-full"></span>
//               <span className="relative z-10 text-white font-bold">
//                 Download
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// }
