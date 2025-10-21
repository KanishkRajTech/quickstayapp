"use client";

import Image from "next/image";

export function HeroBanner() {
  return (
    <>
      <section
        className="relative  min-h-[95vh] w-full flex items-center justify-center md:justify-start bg-white"
        aria-label="Hero"
      >
        <Image
          src="/hero.png"
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative z-10 text-white px-4 sm:px-10 md:px-20 max-w-2xl text-center md:text-left">
          <h1 className="text-6xl font-sans leading-tight mb-8 sm:mb-10">
            The best stay
            <br />
            is right here.
          </h1>

          <button className="py-3 px-10 sm:py-4 sm:px-8 bg-red-600 text-white font-bold  text-md md:text-sm sm:text-base cursor-pointer transition hover:bg-red-700">
            EXPLORE PROPERTIES
          </button>
        </div>
      </section>

      {/* Welcome to QuickStay */}
      <section aria-labelledby="quickstay-hero-title" className="w-full ">
        <div className="mx-auto max-w-8xl px-10 md:px-20 py-16 md:py-20">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center ">
            {/* Left */}
            <div className="md:basis-1/3 md:relative">
              <h1
                id="quickstay-hero-title"
                className="text-5xl md:text-6xl font-normal text-gray-900 md:absolute md:-top-40 text-center md:text-left"
              >
                Welcome to QuickStay!
              </h1>
            </div>

            {/* Center */}
            <figure className="md:basis-1/3 w-full">
              <Image
                src="/rm1.webp" 
                alt="Cozy QuickStay bedroom with a woven pendant lamp and neutral tones"
                className=" object-cover w-full max-w-xs sm:max-w-sm"
                loading="lazy"
                width={400}
                height={450}
              />
            </figure>

            {/* Right */}
            <div className="md:flex-1 max-w-md text-gray-700 space-y-4 text-md sm:text-base leading-relaxed text-center md:text-left">
              <p className="">
                Experience modern, hassle-free living at QuickStay—where comfort
                meets convenience. Designed for professionals and urban
                dwellers, our fully managed spaces offer premium amenities,
                seamless services, and a vibrant community.
              </p>
              <p className="">
                Whether you're looking for a private space or a coliving
                experience, we ensure a stress-free stay with top-notch
                security, daily essentials, and tech-enabled management.
              </p>
              <p className="font-bold">Welcome to a smarter way of living.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
