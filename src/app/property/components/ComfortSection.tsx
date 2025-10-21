import Image from "next/image";
export function ComfortSection() {
  return (
    <section
      id="comfort"
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-16 px-4 sm:px-10 md:px-20 py-10 md:py-20 bg-white"
    >
      <div className="flex-1 max-w-xl text-lg leading-relaxed text-gray-700 space-y-5 text-center md:text-left">
        <p>
          At QuickStay, every room is thoughtfully designed to provide the
          perfect balance of comfort and functionality. Enjoy spacious,
          well-furnished interiors with cozy beds, ample storage, and modern
          amenities.
        </p>
        <p>
          Whether you're working, unwinding, or getting a good night's rest, our
          rooms create a relaxing environment tailored to your lifestyle.
        </p>
        <p className="font-bold">Stay in comfort. Live with ease.</p>
      </div>

      <div className="flex-1 flex justify-center items-start gap-3 sm:gap-5 w-full">
        <Image
          alt="Comfortable room setup with modern furnishings and cozy decor"
          data-ai-hint="room interior"
          src="/1.webp" 
          className="object-cover mt-10 sm:mt-16 w-1/2"
          width={300}
          height={450}
          loading="lazy"
        />
        <Image
          src="/2.webp"
          alt="Relaxing space with natural light and comfortable seating"
          data-ai-hint="living space"
          className="object-cover w-1/2"
          width={300}
          height={450}
          loading="lazy"
        />
      </div>
    </section>
  );
}
