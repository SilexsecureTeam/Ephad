import React from 'react'
import Image from 'next/image'
import HomeImg from "../../../public/assets/HomeImg.png"



function Home() {
  return (
    <div className='relative'>
        <Image src={HomeImg} alt="" />
        <div className='absolute  justify-center w-full text-center top-40'>
          <h1 className='text-[140px] text-white font-bold'>UNLOCK YOUR <br/> FUTURE SUCCESS</h1>
          <div className='w-full text-center flex justify-center'>
            <p className='text-[30px] bg-blue-900  w-[690px] text-white px-2'>High Redefined for Success</p>
          </div>
        </div>
        <div className='text-[24px] absolute text-center flex bottom-[-9px] right-0 text-white'>
          <div className='bg-amber-400 w-[420px] py-1 px-4'>Career-Oriented Curriculum</div>
          <div className='bg-blue-400 w-[420px]  py-1 px-4'>Skills for Professional Success</div>
          <div className='bg-sky-950 px-4 py-1 w-[420px]'>Supportive Environment</div>

        </div>
    </div>
  )
}

export default Home
