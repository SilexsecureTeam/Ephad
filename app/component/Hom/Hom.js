"use client"; // Mark as client component for React hooks

import Image from "next/image";
import HomeImg from "../../../public/assets/creche1.jpg";

const Hom = () => {
  return (
    <div className="relative w-full h-[60vh] md:px-12 px-4 pb-20 z-0 md:h-[83vh] mb-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={HomeImg}
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
<div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-50 z-10"></div>
      {/* Text Overlay */}
      <div className="w-full z-50 flex justify-start items-end  text-start h-full ">
        <div className="z-20">
          <h1 className="text-white z-20 roboto font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            WHO ARE WE
          </h1>
          <div className="w-full flex justify-start mt-2">
           <div className="bg-[#FBB911] z-30 roboto w-22 h-6 text-black text-center">

        </div>
        <div className="bg-[#5B7BCE] z-30 roboto w-22 h-6 text-center">

        </div>
        <div className="bg-[#1C385A] z-30 roboto w-22 h-6 text-center">

        </div>
          </div>
        </div>
      </div>
      {/* Bottom Tags */}
      <div className="absolute z-30 -bottom-0.5 right-0 w-full flex flex-wrap justify-end text-white text-[12px] sm:text-base md:text-lg lg:text-xl">
        <div className="bg-[#FBB911] z-30 w-fit roboto py-2 px-4 text-black text-center">
          Career-Oriented Curriculum
        </div>
        <div className="bg-[#5B7BCE] z-30 w-fit roboto py-2 px-4 text-center">
          Skills for Professional Success
        </div>
        <div className="bg-[#1C385A] z-30 w-fit roboto py-2 px-4 text-center">
          Supportive Environment
        </div>
      </div>
    </div>
  );
};

export default Hom;