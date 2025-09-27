import Image from "next/image";
import Link from "next/link";
export default function Download() {
  return (
    <section className="h-75 flex items-center mt-20 justify-center bg-[#A00500]  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-10 md:mt-20"><div>
      
    </div>
      <div className="text-white py-15 px-4 ">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Download QuickStay Smart!
        </h1>
        <p className="  mt-4">
          Simplify, automate and grow your rental business with our all-in-one
          platform.
        </p>
        <p className="  mt-4">
          Start your effortless property management today!
        </p>
        <div className="flex flex-row justify-start gap-6 mt-6">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-1 border-white rounded-lg"
          >
            
              <Image
                src="/play-store.png"
                alt="Get it on Google Play"
                width={160}
                height={50}
                className="hover:scale-105 transition-transform rounded-lg h-15"
              />
            
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-1 border-white rounded-lg"
          >
            <Image
              src="/app-store.png"
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="hover:scale-105 transition-transform rounded-lg h-15"
            />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative flex justify-center items-end hidden lg:flex">
        <Image
          src="/800X600/4.png"
          alt="QuickStay App Mockup"
          width={530}
          height={900}
          className="absolute bottom-0 -top-20 md:-top-10 lg:-top-62 w-3/4 md:w-full max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
}
