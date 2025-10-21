import { FaWifi, FaCamera } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { LuCircleParking } from "react-icons/lu";
export function FacilitiesSection() {
  return (
    <>
      <section id="facilities" className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-10 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <FaWifi className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  High Speed WiFi
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <GiElectric className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  24x7 power backup
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <FaCamera className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  CCTV security cameras
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <ImSpoonKnife className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  Tasty hygienic food
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <FaHandHoldingWater className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  24x7 water supply
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm transition hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
                <LuCircleParking className="text-2xl text-[#A00500] h-10 w-10" />
                <p className="font-medium text-xs sm:text-sm mt-2">
                  Parking included
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right mb-8 md:mb-0 md:pr-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-5">
              Our Facilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Your Comfort,
              <br /> Our Priority
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row text-center font-sans text-lg sm:text-xl">
        <div className="flex-1 p-8 sm:p-12 md:p-16 bg-[#f9fcf9]">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">0</h1>
          <p>Properties</p>
        </div>
        <div className="flex-1 p-8 sm:p-12 md:p-16 bg-[#f1f1f4]">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">0</h1>
          <p>Tenants</p>
        </div>
        <div className="flex-1 p-8 sm:p-12 md:p-16 bg-[#b7c3c7]">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">100%</h1>
          <p>Happy Customers</p>
        </div>
      </section>
    </>
  );
}
