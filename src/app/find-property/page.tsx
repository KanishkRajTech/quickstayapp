"use client";
import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import { MdGpsFixed } from "react-icons/md";
import {
  UserTypeSelector,
  type UserType,
} from "./componets/user-type-selector";

import Navbar from "@/component/navbar";
import Footer from "@/component/Footer";

import { searchProperties } from "../../lib/firestore";
import type { Property, SearchFilters } from "@/types/index";
import Image from "next/image";
import { roomSharingOptions } from "@/lib/definitions";
import { log } from "console";

export default function Page() {
  const [currentText, setCurrentText] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);

  const texts = ["Flats", "PGs", "Home", "Hotel"];

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
    setSearchError(null);
    setSearchResults([]);

    if (!location.trim()) {
      setSearchError("Please enter a location to search.");
      return;
    }

    setIsSearching(true);

    const currentFilters: SearchFilters = {
      type: type,
      // Add other filters here as needed
    };

    // Call the Firebase search function
    const { data, error } = await searchProperties(
      location.trim(),
      currentFilters
    );

    if (error) {
      setSearchError(error);
      console.error("[v1] Search error:", error);
    } else if (data) {
      setSearchResults(data);
      console.log("[v1] Search successful. Found:", data.length, "properties.");
    }

    setIsSearching(false);
  }

  function useCurrentLocation() {
    setIsSearching(true);
    // Simulate geolocation for demo
    setTimeout(() => {
      setLocation("Current Location (Simulated)");
      setIsSearching(false);
    }, 800);
  }

  return (
    <>
      <Navbar />
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#E9C5C4] via-[#F5E8E7] to-gray-50 min-h-screen flex items-center flex-col">
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
              <span className="text-[#A00500] inline-block bg-gradient-to-r from-[#A00500] to-[#D32F2F] bg-clip-text text-transparent animate-fade-in">
                <span className="inline-block bg-gradient-to-r from-[#A00500] to-[#D32F2F] bg-clip-text text-transparent animate-fade-in"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:text-xl mx-auto leading-relaxed">
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
                    I&apos;m a
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

            {/* Display Error Message */}
            {searchError && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Error: {searchError}
              </div>
            )}

            {/* Display Search Results Summary */}
            {searchResults.length > 0 && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Found {searchResults.length} properties matching your search
              </div>
            )}

            {/* Display No Results Message */}
            {!isSearching &&
              !searchError &&
              location.trim() &&
              searchResults.length === 0 && (
                <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                  No properties found for "{location}".
                </div>
              )}
          </div>
        </div>
      </section>

      {/* Properties Display Section */}
      <section className="py-8 w-full bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 p-6 bg-gradient-to-r from-white to-gray-50/50 border border-gray-200/60 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-[#A00500] rounded-full absolute -top-1 -right-1 animate-ping opacity-75"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-[#A00500] to-[#D32F2F] rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Available Properties
                </h2>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <span>Found</span>
                  <span className="font-semibold text-[#A00500]">
                    {searchResults.length}
                  </span>
                  <span>
                    {searchResults.length === 1 ? "match" : "matches"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-gray-400 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">
                No properties found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {searchResults.length > 0 ? (
                searchResults.map((property) => (
                  console.log("test", property),
                  <Link
                    key={property.id}
                    href={`/PropertyDetail/${property.id}`}
                    className="block"
                  >
                    <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={property.propertyImages[0]?.imageUrl}
                          alt={property.propertyName || "Property Image"}
                          width={320}
                          height={192}
                          className="w-full h-48 object-cover"
                        />
                        {property.roomOptions &&
                          property.roomOptions.length > 0 &&
                          property.roomOptions[0].amount && (
                            <span className="absolute bottom-2 right-2 bg-yellow-300 text-gray-800 py-1.5 px-5 font-bold rounded-lg text-sm">
                              ₹
                              {property.roomOptions[0].amount.toLocaleString(
                                "en-IN"
                              )}
                            </span>
                          )}
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="font-bold text-base mb-1 truncate">
                          {property.propertyName || "Unnamed Property"}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 truncate">
                          {property.propertyLocality}, {property.propertyCity}
                        </p>
                        {property.whoCanStay && (
                          <p className="text-sm">
                            <strong>For: {property.whoCanStay.join(", ")}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-gray-400 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-1">
                    No properties found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search criteria
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

