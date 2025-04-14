"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomeBanner = () => {
  return (
    <section className="w-full bg-[#F1F5EB] py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Global Opportunities with{" "}
              <span className="text-green-500">ILM</span> OVERSEAS!
            </h1>
            <p className="text-2xl sm:text-4xl mt-2 text-[#717171]">
              Future with international students
            </p>
            <p className="text-lg sm:text-xl mt-3">
              The World is Your Classroom: Affordable Option for Study Abroad
            </p>

            <div className="flex  md:bg-white justify-between items-center p-2.5 px-5 rounded-full flex-col sm:flex-row gap-4 mt-8">
            <div className="flex justify-between w-full bg-white md:bg-none md:p-0 p-2 rounded-full ">
              <span className="text-sm sm:text-base  w-full">Course Name</span>
              <span className="text-sm sm:text-base w-full border-l-2 pl-4">Select Country</span>
              </div>
              <Button className="bg-green-500 w-full md:w-auto hover:bg-black rounded-full text-sm sm:text-lg py-2 px-6">
                Get Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Country Flags */}
          <div className="relative">
            <div
              className="relative bg-center border-4 border-[#32B22E] bg-cover bg-no-repeat rounded-3xl md:w-[398px] h-[567px]  m-auto"
              style={{
                backgroundImage: "url('/images/homebanner.jpeg')",
              }}
            >
              {/* Country Flags */}
              <div className="absolute top-8 md:top-10 -right-16 z-20 bg-white p-5 rounded-md py-2 md:block hidden shadow-md">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/aus.png"
                      alt="Australia Flag"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">Australia</span>
                </div>
              </div>

              <div className="absolute  top-1/3 -left-16 z-20 bg-white p-5 rounded-md py-2 md:block hidden shadow-md">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/us.png"
                      alt="United States Flag"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">United States</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-16 z-20 bg-white p-5 rounded-md py-2 md:block hidden shadow-md">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/can.png"
                      alt="Canada Flag"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">Canada</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-16 z-20 bg-white p-5 rounded-md py-2 md:block hidden shadow-md">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/uk.png"
                      alt="United Kingdom Flag"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">United Kingdom</span>
                </div>
              </div>

              <div className="absolute bottom-10 -right-16 z-20 bg-white p-5 rounded-md py-2 md:block hidden shadow-md">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/images/mal.png"
                      alt="Malaysia Flag"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
