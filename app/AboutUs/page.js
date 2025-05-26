import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

function Page() {
  return (
    <div className={outfit.className}>
      <div className="grid items-center justify-center pt-20 pb-10  w-full text-center">
        <h1 className="text-[40px] leading-[130%] max-w-[700px] font-bold">
          Our Mission & Vision
        </h1>
        <p className="text-[14px] max-w-[500px]">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>

      <div className="px-20 ">
        <div className=" flex items-center justify-center gap-10 w-full py-10">
          <div className="">
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <div>
                <h1 className="font-bold text-[20px] py-2">Mission</h1>
              </div>
              <p className="text-[14px]">
                At Little Learners Academy, our mission is to inspire a passion
                for learning and empower young minds to become confident,
                compassionate, and creative individuals. We strive to create a
                safe and inclusive space where children thrive academically,
                socially, and emotionally, setting the stage for a successful
                educational journey.
              </p>
            </div>
          </div>

          <div className="">
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <div>
                <h1 className="font-bold text-[20px] py-2">Mission</h1>
              </div>
              <p className="text-[14px]">
                At Little Learners Academy, our mission is to inspire a passion
                for learning and empower young minds to become confident,
                compassionate, and creative individuals. We strive to create a
                safe and inclusive space where children thrive academically,
                socially, and emotionally, setting the stage for a successful
                educational journey.
              </p>
            </div>
          </div>

          
        </div>

        
      </div>
    </div>
  );
}

export default Page;
