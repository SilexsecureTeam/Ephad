"use client"; // Mark as client component for React hooks

import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImg from "../../../public/assets/HomeImg.png";
import HomeImg1 from "../../../public/assets/on.jpg";
import HomeImg2 from "../../../public/assets/one.jpg";

const Home = () => {
  // Array of image URLs
  const images = [HomeImg, HomeImg1, HomeImg2];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] z-0 md:h-[83vh] mb-2 overflow-hidden">
      {images.map((image, index) => {
        // Determine the transform class based on the slide's state
        let transformClass = "";
        if (index === currentSlide) {
          transformClass = "translate-x-0"; // Current slide is visible
        } else if (
          index === (currentSlide - 1 + images.length) % images.length
        ) {
          transformClass = "-translate-x-full"; // Previous slide moves to the left
        } else {
          transformClass = "translate-x-full"; // Next slides stay on the right
        }

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${transformClass}`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <Image
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0} // Prioritize first image for faster loading
            />
          </div>
        );
      })}

      {/* Text Overlay */}
      <div className="w-full z-50 flex justify-center text-center px-4 h-full items-center">
        <div className="z-20">
          <h1 className="text-white z-20 roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            UNLOCK YOUR <br /> FUTURE SUCCESS
          </h1>
          <div className="w-full flex justify-center mt-4">
            <p className="text-white text-base z-20 sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] roboto bg-[#1D157C] px-6 py-2 rounded">
              High Redefined for Success
            </p>
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

export default Home;