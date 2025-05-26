import React from "react";
import { Outfit, Raleway } from "next/font/google";
import { BsBarChartFill } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { HiChartPie } from "react-icons/hi2";
import Image from "next/image";
import Icon from "../../public/assets/Icon.png";
import IconOne from "../../public/assets/Icon (1).png";


const outfit = Outfit({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
function Page() {
  return (
    <div className={`${outfit.className} mx-20`}>
      <div className="grid items-center justify-center pt-20 pb-6  w-full text-center">
        <h1
          className={`text-[58px] font-bold leading-[75.4px] ${raleway.className}`}
        >
          Our Mission & Vision
        </h1>
        <p className="text-[24px] leading-[36px] mt-10 max-w-[990px]">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>

      <div className=" ">
        <div className=" flex items-center   justify-between w-full py-10">
          <div className="">
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm  max-w-[668px] h-[476px] shadow-black pt-10 px-10 rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[48px] leading-[75.4px] py-2">
                  Mission
                </h1>
                <Image src={Icon} url="" className="w-[80.58px] h-[80px]"/>
              </div>
              <p className="text-[24px] leading-[36px] ">
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
            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[668px] h-[476px] shadow-black py-10 px-10 rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[48px] leading-[62.4px] py-2">
                  Vision
                </h1>
                <Image src={IconOne} url="" className="w-[106px] h-[80px] "/>

              </div>
              <p className="text-[24px] leading-[36px] ">
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

      <div className="pt-20  ">
        <div className="grid items-center justify-center w-full text-center">
          <h1 className="text-[58px] leading-[75.4px] font-bold">Our Award and Recognitions</h1>
          <p className="text-[24px] leading-[36px] max-w-[1100px]">
            Little Learners Academy takes pride in our commitment to delivering
            high-quality education and outstanding student experiences. We are
            honored to have received various awards and recognitions for our
            dedication to early childhood education. These accolades reflect our
            team's relentless efforts in creating an exceptional learning
            environment for our students.
          </p>
        </div>

        <div className=" pb-20   pt-16  w-full">
          <div>
            <div className="flex gap-6  items-center   ">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[450px] h-[474px] shadow-black py-10 px-6 rounded-xl">
                <div className="absolute top-[-34px] text-3xl  text-white border rounded-md py-4 px-4" style={{backgroundColor: "#1D157C"}}>
                  <HiChartPie />
                </div>
                <h1 className="font-bold text-[28px] py-2">
                  Outstanding Early Childhood Education Award
                </h1>
                <p className="text-[24px] leading-[36px]">
                  Presented by the National Association for the Education of
                  Young Children (NAEYC) in recognition of Little Learners
                  Academy's commitment to delivering exceptional early childhood
                  education and fostering a nurturing learning environment.
                </p>
              </div>
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[450px] h-[474px] py-14 px-6 shadow-black rounded-xl">
                <div className="absolute top-[-34px] text-3xl text-white border rounded-md py-4 px-4" style={{backgroundColor: "#1D157C"}}>
                  <BsBarChartFill />
                </div>
                <h1 className="font-bold py-2 text-[28px]">
                  Innovative STEAM Education Award
                </h1>
                <p className="text-[24px] leading-[36px]">
                  Awarded by the Education Excellence Association for our
                  pioneering efforts in introducing innovative STEAM (Science,
                  Technology, Engineering, Arts, and Mathematics) programs that
                  ignite creativity and critical thinking in young learners.
                </p>
              </div>
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[450px] h-[474px] py-10 px-6 shadow-black rounded-xl">
                <div className="absolute top-[-34px] text-3xl text-white border rounded-md py-4 px-4" style={{backgroundColor: "#1D157C"}}>
                  <BsLightningChargeFill />
                </div>
                <h1 className="font-bold py-2 text-[28px]">
                  Environmental Stewardship Award
                </h1>
                <p className="text-[24px] leading-[36px]">
                  Received from the Green Earth Society for our dedication to
                  environmental education, sustainable practices, and fostering
                  a love for nature in our students.
                </p>
              </div>
            </div>

            <div className="flex gap-2 my-10">
              <div className="border-1 border-r-2 border-b-2 shadow-sm py-4 px-4 rounded-xl">
                <GoArrowLeft />
              </div>
              <div className="border-1 border-r-2 border-b-2 shadow-sm py-4 px-4 rounded-xl">
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="grid items-center justify-center w-full text-center ">
            <h1 className="text-[58px]  font-bold leading-[75.4px]">
              Our History
            </h1>
            <p className="text-[24px] leading-[36px] mt-10 max-w-[990px]">
              Founded with a passion for early education in 2005, our
              kindergarten school boasts a rich history of empowering young
              learners to reach their potential through innovative teaching
              methods and a supportive learning environment
            </p>
          </div>
        </div>

        <div className=" border border-r-4 border-b-4 shadow-sm my-10  p-[150px] shadow-black rounded-xl">
          <div className="flex gap-18 h-[900px]">
            <div className="relative h-[700px] mt-26 w-0.5 bg-black">
              <div className="top-[-16] left-[-7] absolute w-4 h-4 border rounded-[50%]"></div>
              {/* <div className="bottom-[-16] left-[-7] absolute w-4 h-4 border rounded-[50%]"></div> */}
            </div>

            <div>
              <div className="flex gap-10 items-center ">
                <div className="relative flex jusitify-center gap-10 items-center border border-r-2 border-b-2 h-[148px] w-[364px] px-[50px] py-[30px] shadow-xs my-10  py-10 px-10 shadow-black rounded-xl">
                  <div className="absolute top-[70] left-[-64px]">
                    <div className="relative h-[1px] w-[55px] bg-black">
                      <div className="left-[-16] top-[-7] absolute w-4 h-4 bg-white border rounded-[50%]"></div>
                      <div className="right-[-16] bottom-[-7] absolute w-4 bg-white h-4 border rounded-[50%]"></div>
                    </div>
                  </div>
                  <div className=" grid gap-2">
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`${raleway.className} text-[68px] leading-[20px] font-bold`}
                    >
                      2023
                    </p>
                  </div>
                </div>

                <div className="text-black">
                  <h1 className="font-bold text-[28px] leading-[36.4px]">
                    Resilience and Future Horizons
                  </h1>
                  <p className="text-[24px] leading-[36px] mt-6 max-w-[990px]">
                    Adapting to new challenges, we remained committed to our
                    mission of providing an exceptional early education. Looking
                    ahead with optimism, we envision a future filled with
                    boundless possibilities as we continue shaping the leaders
                    and thinkers of tomorrow.
                  </p>
                </div>
              </div>

              <div className="flex gap-10 items-center ">
                <div className="relative flex jusitify-center gap-10 items-center border border-r-2 border-b-2 h-[148px] w-[364px] px-[50px] py-[30px] shadow-xs my-10  py-10 px-10 shadow-black rounded-xl">
                  <div className="absolute top-[70] left-[-64px]">
                    <div className="relative h-[1px] w-[55px] bg-black">
                      <div className="left-[-16] top-[-7] absolute w-4 h-4 bg-white border rounded-[50%]"></div>
                      <div className="right-[-16] bottom-[-7] absolute w-4 bg-white h-4 border rounded-[50%]"></div>
                    </div>
                  </div>
                  <div className=" grid gap-2">
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`${raleway.className} text-[68px] leading-[20px] font-bold`}
                    >
                      2017
                    </p>
                  </div>
                </div>

                <div className="text-black">
                  <h1 className="font-bold text-[28px] leading-[36.4px]">
                    Innovation and Technology
                  </h1>
                  <p className="text-[24px] leading-[36px] mt-6 max-w-[990px]">
                    Innovation became the driving force behind our
                    kindergarten's progress from 2016 to 2020. Embracing the
                    latest educational technologies, we crafted engaging and
                    interactive learning experiences for our students.
                  </p>
                </div>
              </div>

              <div className="flex gap-10 items-center ">
                <div className="relative flex jusitify-center gap-10 items-center border border-r-2 border-b-2 h-[148px] w-[364px] px-[50px] py-[30px] shadow-xs my-10  py-10 px-10 shadow-black rounded-xl">
                  <div className="absolute top-[70] left-[-64px]">
                    <div className="relative h-[1px] w-[55px] bg-black">
                      <div className="left-[-16] top-[-7] absolute w-4 h-4 bg-white border rounded-[50%]"></div>
                      <div className="right-[-16] bottom-[-7] absolute w-4 bg-white h-4 border rounded-[50%]"></div>
                    </div>
                  </div>
                  <div className=" grid gap-2">
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`${raleway.className} text-[68px] leading-[20px] font-bold`}
                    >
                      2012
                    </p>
                  </div>
                </div>

                <div className="text-black">
                  <h1 className="font-bold text-[28px] leading-[36.4px]">
                    Expansion and Recognition
                  </h1>
                  <p className="text-[24px] leading-[36px] mt-6 max-w-[990px]">
                    These years marked as a period of expansion and recognition
                    for our school. As we extended our facilities and enhanced
                    our curriculum, we received accolades for our commitment to
                    quality education and innovative teaching methodologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-10 items-center ">
                <div className="relative flex jusitify-center gap-10 items-center border border-r-2 border-b-2 h-[148px] w-[364px] px-[50px] py-[30px] shadow-xs my-10  py-10 px-10 shadow-black rounded-xl">
                  <div className="absolute top-[70] left-[-64px]">
                    <div className="relative h-[1px] w-[55px] bg-black">
                      <div className="left-[-16] top-[-7] absolute w-4 h-4 bg-white border rounded-[50%]"></div>
                      <div className="right-[-16] bottom-[-7] absolute w-4 bg-white h-4 border rounded-[50%]"></div>
                    </div>
                  </div>
                  <div className=" grid gap-2">
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                    <div className="grid gap-6  grid-cols-3">
                      <div
                        className="h-[14px] px-1 w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                      <div
                        className="h-[14px] w-[14px] bg-blue-700"
                        style={{
                          backgroundColor: "#1D157C",
                          boxShadow: " -5px 5px 2px 0.5px #E3EBFF",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`${raleway.className} text-[68px] leading-[20px] font-bold`}
                    >
                      2005
                    </p>
                  </div>
                </div>

                <div className="text-black">
                  <h1 className="font-bold text-[28px] leading-[36.4px]">
                    Inception and Growth
                  </h1>
                  <p className="text-[24px] leading-[36px] mt-6 max-w-[990px]">
                    Established in 2005, our kindergarten school began its
                    journey with a vision to provide a nurturing space for young
                    minds to explore, learn, and grow. Over the next five years,
                    we witnessed significant growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="">
          <div className="grid items-center justify-center  w-full text-center ">
            <h1 className="text-[58px]  font-bold leading-[75.4px]">
              Our Team Members
            </h1>
            <p className="text-[24px] leading-[36px]  max-w-[1090px]">
              At Little Learners Academy, our teaching team is the heart of our
              educational journey. We take great pride in employing highly
              qualified and passionate educators who possess a deep
              understanding of early childhood development. Our teachers create
              a warm and engaging atmosphere, encouraging curiosity, instilling
              confidence, and fostering a love for learning.
            </p>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
