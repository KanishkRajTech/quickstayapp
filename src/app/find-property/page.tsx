"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { MapPin, RotateCcw, Search } from "lucide-react";
import { MdGpsFixed } from "react-icons/md";
import {
  UserTypeSelector,
  type UserType,
} from "./componets/user-type-selector";
import Navbar from "@/component/navbar";
import Footer from "@/component/Footer";

export default function Page() {
  const [currentText, setCurrentText] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Student");
  const [isSearching, setIsSearching] = useState(false);

  const texts = ["Flats", "PGs", "Home", "Hotel"];
  const categories = ["Student", "Professional", "Couple", "Bachelor"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const [type, setType] = React.useState<UserType>("student");
  const [location, setLocation] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSearching(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("[v0] Search submit:", { type, location });
    setIsSearching(false);
  }

  function onReset() {
    setType("student");
    setLocation("");
  }

  function useCurrentLocation() {
    setIsSearching(true);

    setTimeout(() => {
      setLocation("Current Location");
      setIsSearching(false);
    }, 800);
  }

  return (
    <>
   
      <Navbar />
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#E9C5C4] via-[#F5E8E7] to-gray-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <header className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-4">
              <div className="w-2 h-2 bg-[#A00500] rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                Find your perfect stay
              </span>
            </div>

            <h1
              id="hostel-hero-title"
              className="text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-2"
            >
              Find your{" "}
              <span className="text-[#A00500] inline-block  bg-gradient-to-r from-[#A00500] to-[#D32F2F] bg-clip-text text-transparent animate-fade-in">
                {texts[currentText]}
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:text-xl  mx-auto leading-relaxed">
              Discover the perfect accommodation that matches your lifestyle and
              preferences
            </p>
          </header>

          {/* Search Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#A00500] rounded-full"></div>
                  <label className="text-lg font-semibold text-gray-800">
                    I'm a
                  </label>
                </div>
                <UserTypeSelector value={type} onChange={setType} />
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300/60"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">
                    in
                  </span>
                </div>
              </div>

              {/* Location Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#A00500] rounded-full"></div>
                  <label className="text-lg font-semibold text-gray-800">
                    Finding in
                  </label>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#A00500] transition-colors" />
                      <input
                        type="text"
                        id="location"
                        placeholder="Enter area, landmark, or city..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A00500]/20 focus:border-[#A00500] transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 w-full lg:w-auto">
                    <button
                      type="button"
                      onClick={useCurrentLocation}
                      disabled={isSearching}
                      className="flex items-center gap-2 px-4 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 transition-all duration-200 flex-1 lg:flex-none justify-center"
                      aria-label="Use current location"
                    >
                      <MdGpsFixed
                        className={`text-[#A00500] text-xl ${
                          isSearching ? "animate-spin" : ""
                        }`}
                      />
                      <span className="lg:hidden">Current</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSearching || !location.trim()}
                      className="bg-gradient-to-r from-[#A00500] to-[#D32F2F] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 flex-1 lg:flex-none justify-center"
                    >
                      {isSearching ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Searching...</span>
                        </>
                      ) : (
                        <>
                          <Search className="h-5 w-5" />
                          <span>Search</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
