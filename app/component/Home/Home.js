import React from 'react'
import HomeImg from "../../../public/assets/HomeImg.png"

function Home() {
  return (
    <div
      className='relative md:h-[85vh] h-[50vh] bg-cover bg-center bg-no-repeat mb-2'
      style={{ backgroundImage: `url(${HomeImg.src})` }}
    >
      <div className='w-full flex justify-center text-center px-4 h-full items-center'>
        <div>
          <h1 className='text-white roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
            UNLOCK YOUR <br /> FUTURE SUCCESS
          </h1>
          <div className='w-full flex justify-center mt-4'>
            <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] roboto bg-[#1D157C] px-6 py-2 rounded'>
              High Redefined for Success
            </p>
          </div>
        </div>
      </div>

      <div className='absolute -bottom-2 right-0 w-full flex flex-wrap justify-end text-white text-sm sm:text-base md:text-lg lg:text-xl'>
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
  )
}

export default Home
