"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between px-6 sm:px-20 py-6 sm:py-8"
        )}
      >
        <div className="md:hidden text-2xl font-bold text-white">
          <Link href="#">QuickStay</Link>
        </div>

        <div className="hidden md:block"></div>

        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          <button className="bg-white text-black py-2 px-4 text-sm font-bold border-2 border-white transition hover:bg-[#a00500] hover:text-white hover:border-[#a00500]">
            <Link href="/">Home</Link>
          </button>
          <button className="bg-white text-black py-2 px-4 text-sm font-bold border-2 border-white transition hover:bg-[#a00500] hover:text-white hover:border-[#a00500]">
            <Link href="#properties">Properties</Link>
          </button>
          <button className="bg-white text-black py-2 px-4 text-sm font-bold border-2 border-white transition hover:bg-[#a00500] hover:text-white hover:border-[#a00500]">
            <Link href="#contact">Contact Us</Link>
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="fixed left-0 top-0 h-full w-1/2 bg-black/95 backdrop-blur-md z-40 md:hidden transform transition-transform">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/20">
                  <div className="text-2xl font-bold text-white">QuickStay</div>
                </div>

                <div className="flex flex-col flex-1 py-8 space-y-2">
                  <Link
                    href="/"
                    className="text-white py-4 px-6 text-lg font-bold transition hover:bg-[#a00500]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#properties"
                    className="text-white py-4 px-6 text-lg font-bold transition hover:bg-[#a00500]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Properties
                  </Link>
                  <Link
                    href="#contact"
                    className="text-white py-4 px-6 text-lg font-bold transition hover:bg-[#a00500]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="p-6 border-t border-white/20">
                  <button
                    className="w-full py-3 bg-[#a00500] text-white font-bold rounded transition hover:bg-[#800400]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
