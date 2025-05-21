import React from "react";
import Image from "next/image";
import Health from "../public/assets/Health&Science.jpg";
import History from "../public/assets/History.jpg";
import Buisness from "../public/assets/Business.jpg";
import Principal from "../public/assets/Principal.jpg";
import PrincipalTwo from "../public/assets/mancalling.jpg";
import Signature from "../public/assets/J.png";
import Anita from "../public/assets/Anita.jpg";
import Bruce from "../public/assets/Bruce.jpg";
import Jack from "../public/assets/Jack.jpg";
import Calvin from "../public/assets/Calvin.jpg";
import Anitalee from "../public/assets/Anitalee.jpg";
import { LiaCheckSolid } from "react-icons/lia";
import Library from "../public/assets/library.jpg";
import Chatroom from "../public/assets/chatroom.jpg";
import Itroom from "../public/assets/itroom.jpg";
import SchoolBuilding from "../public/assets/schoolbuilding.jpg";
import { FaRegCalendarPlus } from "react-icons/fa6";

function page() {
  return (
    <>
      <div className="pb-30">
        <div className="relative  bg-blue-100 h-[900px]">
          {" "}
          <div className="flex justify-center gap-10 py-20 text-[19px]">
            <div className="grid gap-6 w-[600px]">
              <div className="flex gap-6 ">
                <div className="flex items-center my-4 justify-center h-25 w-[400px] text-4xl border border-black rounded-[50%]">
                  <LiaCheckSolid />
                </div>
                <div>
                  <h1 className="font-bold">Featured Programs</h1>
                  <p>
                    Discover our acclaimed programs designed to unlock your
                    child's potential. From advanced academic courses to a rich
                    tapestry of extracurricular activities, School provides a
                    holistic education that goes beyond the classroom.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center h-25 my-4 w-[400px] justify-center text-4xl border border-black rounded-[50%]">
                  <LiaCheckSolid />
                </div>
                <div>
                  <h1 className="font-bold">Upcoming Event</h1>
                  <p>
                    Stay connected with our vibrant community through upcoming
                    events. Join us for open houses, student showcases, and
                    interactive webinars to get a firsthand look at the dynamic
                    learning experiences School offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[600px] bg-blue-900 px-6 text-white grid items-center py-6">
              <h1 className="font-bold ">Welcome</h1>
              <p>
                Welcome to our school, where excellence meets innovation. Our
                commitment to fostering academic achievement, personal growth,
                and community engagement sets us apart. Explore a transformative
                educational journey that prepares students for a future of
                limitless possibilities.
              </p>

              <a href="">Read more about us`{">>"}`</a>
            </div>
          </div>
          <div className="w-full grid justify-center items-center text-[24px] absolute text-center  bottom-[-100px]  text-white">
            <h1 className="font-bold text-[24px] text-black py-8">
              Our Courses
            </h1>
            <div className="grid grid-cols-3 h-[400px]">
              <div>
                <Image src={Health} alt="" className="w-[400px] h-[300px] " />
                <div className="bg-blue-900 w-[400px] py-1 px-4">
                  Health and Science
                </div>
              </div>
              <div className="">
                <Image src={Buisness} alt="" className="w-[400px] h-[300px]" />
                <div className="bg-blue-400 w-[400px]  py-1 px-4">
                  Business Academics
                </div>
              </div>
              <div>
                <Image src={History} alt="" className="w-[400px]" />
                <div className="bg-sky-600 px-4 py-1 w-[400px]">History</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-30 justify-center w-full pt-50  ">
          <div className="relative w-[450px]">
            <Image src={Principal} alt="" className="h-[450px] w-[360px]" />
            <Image
              src={PrincipalTwo}
              alt=""
              className="bottom-12 right-[-26px] absolute w-[260px] h-[160px] border-6 border-white"
            />
          </div>
          <div className="relative">
            <p className="text-[36px] w-[450px] py-2">
              At our School, we aim to empower students with the skills,
              knowledge, and values needed for success in a global context.
            </p>
            <p className="font-bold text-[24px] py-2">Joseph Panua</p>
            <p className="text-[24px]">Principle</p>
            <div className="absolute right-15 bottom-[-6px]">
              <Image src={Signature} alt="" className="w-[150px]" />
            </div>
          </div>
        </div>
        <div className="w-full grid justify-center items-center text-[24px] pt-40 text-center  bottom-[-100px]  text-white">
          <h1 className="font-bold text-[24px] text-black py-8">
            Meet our teams of dedicated educators
          </h1>
          <div className="grid grid-cols-5 h-[400px] text-[14px]">
            <div>
              <Image src={Anita} alt="" className="w-[250px] h-[300px] " />
              <div className="flex justify-between bg-blue-900 w-[250px] py-1 px-4">
                <p className="font-bold">Anita lee</p>
                <p>Art Director</p>
              </div>
            </div>
            <div className="">
              <Image src={Bruce} alt="" className="w-[250px] h-[300px]" />
              <div className="flex justify-between bg-blue-400 w-[250px]  py-1 px-4">
                <p className="font-bold">Bruce Smith</p>
                <p>Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Jack} alt="" className="w-[250px] h-[300px]" />
              <div className="flex justify-between bg-sky-600 px-4 py-1 w-[250px]">
                <p className="font-bold">Jackson Nicholson</p>
                <p>Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Calvin} alt="" className="w-[250px] h-[300px] " />
              <div className="flex justify-between bg-blue-900 w-[250px] py-1 px-4">
                <p className="font-bold">Cruise</p>
                <p>Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Anitalee} alt="" className="w-[250px] h-[300px] " />
              <div className="flex justify-between bg-blue-900 w-[250px] py-1 px-4">
                <p className="font-bold">Anita lee</p>
                <p>Art Director</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center justify-center w-full px-10 gap-6 grid grid-cols-2 py-10">
          <div>
            <Image src={Library} alt="" className="h-[600px] w-[900px]" />
          </div>
          <div>
            <Image src={Itroom} alt="" className="h-[600px] w-[900px]" />
          </div>
          <div>
            <Image
              src={SchoolBuilding}
              alt=""
              className="h-[600px] w-[900px]"
            />
          </div>
          <div>
            <Image src={Chatroom} alt="" className="h-[600px] w-[900px]" />
          </div>
          <div className="absolute flex justify-center w-full">
            <div className=" bg-amber-400 px-10 py-10 w-[500px]">
              <h1 className="text-[48px]">Our Facilities</h1>
              <p cla>
                Immerse yourself in a conducive learning environment with our
                top-notch facilities. State-of-the-art laboratories, extensive
                libraries, and modern classrooms create a setting where
                curiosity and exploration flourish.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[48px] w-full text-center pt-20 pb-10 font-bold">
            What our students Say
          </h1>
          <div className="flex justify-center items-center">
            <div className="">
              <p className="text-[19px] w-[450px] py-2">
                “We provide students with timely and tailored support &
                services. We offer culturally sensitive and engaged teach
                learning and assessment needs.”
              </p>
              <p className="font-bold text-[24px] pt-2">Steven Martins</p>
              <p className="text-[14px]">Humanities</p>
            </div>
            <div className="">
              <p className="text-[19px] w-[450px] py-2">
                “We provide students with timely and tailored support &
                services. We offer culturally sensitive and engaged teach
                learning and assessment needs.”
              </p>
              <p className="font-bold text-[24px] pt-2">Geoffery </p>
              <p className="text-[14px]">ART AND COMMERCE</p>
            </div>
            <div className="">
              <p className="text-[19px] w-[450px] py-2">
                “We provide students with timely and tailored support &
                services. We offer culturally sensitive and engaged teach
                learning and assessment needs.”
              </p>
              <p className="font-bold text-[24px] pt-2">Joe Shelf</p>
              <p className="text-[14px]">Humanities</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[48px] font-bold px-25 pt-30">Upcoming Events</h1>
          <div className="flex w-full justify-center py-10">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-200 leading-10 flex items-center text-red-300 text-center h-[127px] font-bold text-[48px] w-[135]">
                16 May
              </div>
              <div className="bg-red-400 w-1 h-[127px]"></div>
              <div className="w-[135px] font-bold">
                <p>Interim Marks Posted (Regular School Day)</p>
                <div className="py-2 flex items-center gap-1">
                  <p>
                  <FaRegCalendarPlus  />

                  </p>
                  <p>16 May 25</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-pink-300 leading-10 flex items-center text-black text-center h-[127px] font-bold text-[48px] w-[135]">
                19 May
              </div>
              <div className="bg-amber-200 w-1 h-[127px]"></div>
              <div className="w-[135px] font-bold">
                <p>Victoria Day</p>
                <div className="py-2 flex gap-1 items-center">
                  <p>
                    <FaRegCalendarPlus />
                  </p>
                  <p>19 May 25</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 leading-10 flex items-center text-white text-center h-[127px] font-bold text-[48px] w-[135]">
                22 May
              </div>
              <div className="bg-lime-200 w-1 h-[127px]"></div>
              <div className="w-[135px] font-bold">
                <p>Badminton Club</p>
                <p className="py-2 flex gap-1 items-center">
                  <p>
                    <FaRegCalendarPlus />
                  </p>
                  <p>22 May 25</p>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-200 leading-10 flex items-center text-gray-300 text-center h-[127px] font-bold text-[48px] w-[135]">
                29 May
              </div>
              <div className="bg-pink-300 w-1 h-[127px]"></div>
              <div className="w-[135px] font-bold">
                <p>Badminton Club</p>
                <p className="py-2 gap-1 flex items-center">
                  <p>
                    <FaRegCalendarPlus />
                  </p>
                  <p>29 May 25</p>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-lime-200 leading-10 flex items-center text-gray-300 text-center h-[127px] font-bold text-[48px] w-[135]">
                05 June
              </div>
              <div className="bg-cyan-400 w-1 h-[127px]"></div>
              <div className="w-[135px] font-bold">
                <p></p>
                <div className="py-2 gap-1 flex items-center ">
                  <p>
                    <FaRegCalendarPlus />
                  </p>
                  <p>05 June 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
