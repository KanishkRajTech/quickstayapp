import Image from "next/image";
import Link from "next/link";

export default function Tenant() {
  return (
    <section className="container lg:max-w-6xl  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 mt-12 md:mt-40 ">
      <div className="flex items-center justify-between bg-[#9F0500] text-white p-10 rounded-3xl gap-10 flex-col md:flex-row w-full relative overflow-visible  lg:h-[500px]">
        
        {/* Left Text Section */}
        <div className="md:text-left space-y-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold">Are you a tenant?</h1>
          <p className="text-lg leading-relaxed">
            Download the QuickStay App to book, manage, and track your stay
            on-the-go. Experience Smart Living Powered by Smart Management!
          </p>
          <div className="flex flex-row justify-start gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/app-store.png"
                alt="Download on App Store"
                width={160}
                height={55}
                className="hover:scale-105 h-[55px] transition-transform rounded-lg border-1 border-white"
              />
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/play-store.png"
                alt="Get it on Google Play"
                width={160}
                height={60}
                className="hover:scale-105 h-[55px] transition-transform rounded-lg border-1 border-white"
              />
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative  justify-center items-end hidden lg:flex">
          <Image
            src="/3.png"
            alt="QuickStay App Mockup"
            width={530}
            height={900}
            className=" absolute bottom-0 -top-20 md:-top-97"
          />
        </div>
      </div>
    </section>
  );
}
