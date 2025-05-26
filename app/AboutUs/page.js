import React from "react";
import { Outfit } from "next/font/google";
import { BsBarChartFill } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { HiChartPie } from "react-icons/hi2";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

function Page() {
  return (
    <div className={outfit.className}>
      <div className="grid items-center justify-center pt-20 pb-6  w-full text-center">
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
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[498px] h-[322px] shadow-black pt-10 px-10 rounded-xl">
              <div>
                <h1 className="font-bold text-[30px] py-2">Mission</h1>
              </div>
              <p className="text-[18px]">
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
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[498px] h-[322px] shadow-black py-10 px-10 rounded-xl">
              <div>
                <h1 className="font-bold text-[30px] py-2">Vision</h1>
              </div>
              <p className="text-[18px]">
                Our vision is to be a beacon of educational excellence, where
                children are encouraged to explore, discover, and express their
                unique talents. We aim to foster a generation of lifelong
                learners equipped with critical thinking, empathy, and a deep
                appreciation for diversity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="grid items-center justify-center w-full text-center">
          <h1 className="text-[40px] font-bold">Our Award and Recognitions</h1>
          <p className="text-[14px] max-w-[700px]">
            Little Learners Academy takes pride in our commitment to delivering
            high-quality education and outstanding student experiences. We are
            honored to have received various awards and recognitions for our
            dedication to early childhood education. These accolades reflect our
            team's relentless efforts in creating an exceptional learning
            environment for our students.
          </p>
        </div>

        <div className="flex pb-30 pt-10 justify-center items-center w-full">
          <div>
            <div className="grid grid-cols-3  gap-6  ">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[400px] shadow-black py-10 px-10 rounded-xl">
                <div className="absolute top-[-34px] text-3xl  bg-cyan-100 border rounded-md py-4 px-4">
                  <HiChartPie />
                </div>
                <h1 className="font-bold text-[24px] py-2">
                  Outstanding Early Childhood Education Awar
                </h1>
                <p className="text-[20px]">
                  Presented by the National Association for the Education of
                  Young Children (NAEYC) in recognition of Little Learners
                  Academy's commitment to delivering exceptional early childhood
                  education and fostering a nurturing learning environment.
                </p>
              </div>
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[400px] py-10 px-10 shadow-black rounded-xl">
                <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                  <BsBarChartFill />
                </div>
                <h1 className="font-bold py-2 text-[24]">
                  Innovative STEAM Education Award
                </h1>
                <p className="text-[20px]">
                  Awarded by the Education Excellence Association for our
                  pioneering efforts in introducing innovative STEAM (Science,
                  Technology, Engineering, Arts, and Mathematics) programs that
                  ignite creativity and critical thinking in young learners.
                </p>
              </div>
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[400px] py-10 px-10 shadow-black rounded-xl">
                <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                  <BsLightningChargeFill />
                </div>
                <h1 className="font-bold py-2 text-[24px]">
                  Environmental Stewardship Award
                </h1>
                <p className="text-[20px]">
                  Received from the Green Earth Society for our dedication to
                  environmental education, sustainable practices, and fostering
                  a love for nature in our students.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid items-center justify-center w-full text-center">
            <h1 className="font-bold text-[40px]">Our History</h1>
            <p className="text-[14px] max-w-[700px]">
              Founded with a passion for early education in 2005, our
              kindergarten school boasts a rich history of empowering young
              learners to reach their potential through innovative teaching
              methods and a supportive learning environment
            </p>
          </div>
        </div>
        <div>
          <div>
            <GoArrowLeft />
          </div>
          <div>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
