'use client'
// import Image from 'next/image'
import React, { useEffect } from 'react';
import HomeImg from "../../../public/assets/HomeImg.png";
import HomeImg1 from "../../../public/assets/HomeImg.png";
import HomeImg2 from "../../../public/assets/HomeImg.png";

function Home() {
  useEffect(() => {
    const sliderContainer = document.querySelector('.slider-container');
    const images = sliderContainer.children;
    let currentIndex = 0;
    const totalImages = images.length;

    const slide = () => {
      currentIndex = (currentIndex + 1) % totalImages; // Loop back to start
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const interval = setInterval(slide, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className='relative overflow-hidden w-full md:h-[85vh] h-[55vh] mb-2'
    >
      <div
        className='absolute z-0 top-0 left-0 h-full w-full flex slider-container'
        style={{
          transition: 'transform 0.5s ease-in-out', // Smooth transition
          width: `${3 * 100}%`, // 3 images
        }}
      >
        {[HomeImg, HomeImg1, HomeImg2].map((img, index) => (
          <div
            key={index}
            className='relative z-0 h-full w-full object-cover object-center  flex-shrink-0'
            style={{
              backgroundImage: `url(${img.src})`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              width: '100%',
            }}
          />
        ))}
      </div>
      <div className='w-full z-50 flex justify-center text-center px-4 h-full items-center'>
        <div className='z-20'>
          <h1 className='text-white z-20 roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
            UNLOCK YOUR <br /> FUTURE SUCCESS
          </h1>
          <div className='w-full flex justify-center mt-4'>
            <p className='text-white text-base z-20 sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] roboto bg-[#1D157C] px-6 py-2 rounded'>
              High Redefined for Success
            </p>
          </div>
        </div>
      </div>

      <div className='absolute -bottom-2 right-0 w-full flex flex-wrap justify-end text-white text-[12px] sm:text-base md:text-lg lg:text-xl'>
        <div className='bg-[#FBB911] w-fit roboto py-2 px-4 text-black text-center'>
          Career-Oriented Curriculum
        </div>
        <div className='bg-[#5B7BCE] w-fit roboto py-2 px-4 text-center'>
          Skills for Professional Success
        </div>
        <div className='bg-[#1C385A] w-fit roboto py-2 px-4 text-center'>
          Supportive Environment
        </div>
      </div>
    </div>
  );
}

export default Home;