'use client';
import React, { useState } from "react";
import Image from "next/image";
import Health from "../public/assets/Health&Science.jpg";
import History from "../public/assets/History.jpg";
import Buisness from "../public/assets/Business.jpg";
import Principal from "../public/assets/dir.png";
// import PrincipalTwo from "../public/assets/mancalling.jpg";
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
import Home from "./component/Home/Home";

const events = [
  { day: '16', month: 'May', title: 'Interim Marks Posted', date: '16 May 25', color: 'bg-teal-300' },
  { day: '19', month: 'May', title: 'Victoria Day', date: '19 May 25', color: 'bg-pink-400' },
  { day: '22', month: 'May', title: 'Badminton Club', date: '22 May 25', color: 'bg-red-700' },
  { day: '29', month: 'May', title: 'Badminton Club', date: '16 May 25', color: 'bg-yellow-300' },
  { day: '05', month: 'June', title: 'Badminton Club', date: '05 June 25', color: 'bg-green-300' },
];

const testimonials = [
  {
    text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
    name: "Steven Martins",
    department: "Humanities",
  },
  {
    text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
    name: "Geoffery",
    department: "Art and Commerce",
  },
  {
    text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
    name: "Joe Shelf",
    department: "Humanities",
  },
  {
    text: "Our school fosters a nurturing environment that encourages personal growth and academic excellence.",
    name: "Emma Watson",
    department: "Science",
  },
  {
    text: "The faculty here is dedicated to helping students achieve their full potential.",
    name: "Michael Brown",
    department: "Business Studies",
  },
  {
    text: "The community at this school is supportive and inspiring, making learning joy.",
    name: "Sarah Davis",
    department: "History",
  },
];

function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3); // 2 slides (3 testimonials per slide)

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <Home />
      <div className="pb-30">
        {/* First Section */}
        <section className="relative bg-[#E3EBFF] min-h-[900px] px-4 sm:px-15 md:px-20 lg:px-35">
          <div className="flex flex-col lg:flex-row justify-center gap-10 py-20 text-[19px] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
  <div className="grid gap-6 w-full lg:w-[600px] h-full">
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex items-center my-4 justify-center md:h-25 h-14 w-14 md:w-[400px] text-2xl sm:text-4xl border border-[#111111] rounded-[50%]">
        <LiaCheckSolid />
      </div>
      <div>
        <h1 className="font-bold text-[#111111] text-[18px] roboto">Featured Programs</h1>
        <p className="roboto text-[18px] font-light text-[#111111]">
          Discover our acclaimed programs designed to unlock your child's potential. From advanced academic courses to a rich tapestry of extracurricular activities, School provides a holistic education that goes beyond the classroom.
        </p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex items-center md:h-25 h-14 w-14 mt-4  md:w-[400px] justify-center text-2xl sm:text-4xl border border-black rounded-[50%]">
        <LiaCheckSolid />
      </div>
      <div className="">
        <h1 className="font-bold text-[#111111] text-[18px] roboto">Upcoming Event</h1>
        <p className="roboto text-[18px] font-light text-[#111111]">
          Stay connected with our vibrant community through upcoming events. Join us for open houses, student showcases, and interactive webinars to get a firsthand look at the dynamic learning experiences School offers.
        </p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-[600px] bg-[#1D157C] md:h-[360px] p-5 md:p-9 md:text-[16px] text-white grid items-center h-full">
    <h1 className="font-semibold mb-2">Welcome</h1>
    <p className="font-normal">
      Welcome to our school, where excellence meets innovation. Our commitment to fostering academic achievement, personal growth, and community engagement sets us apart. Explore a transformative educational journey that prepares students for a future of limitless possibilities.
    </p>
    <h1 className="mt-2 flex items-center">
      <a href="">Read more about us {">>"}</a>
    </h1>
  </div>
</div>
          <div className="w-full grid justify-center items-center text-[24px] text-center text-white">
            <h1 className="font-semibold roboto text-[30px] text-[#111111] py-8">Our Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
              <div>
                <Image src={Health} alt="" className="w-full h-70 object-cover" />
                <div className="bg-[#1D157C] w-full py-1 px-4">Health and Science</div>
              </div>
              <div>
                <Image src={Buisness} alt="" className="w-full h-70 object-cover" />
                <div className="bg-[#5B7BCE] w-full py-1 px-4">Business Academics</div>
              </div>
              <div>
                <Image src={History} alt="" className="w-full h-70 object-cover" />
                <div className="bg-[#3C5494] px-4 py-1 w-full">History</div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Section */}
        <section className="relative flex flex-col lg:flex-row items-stretch gap-20 justify-between px-4 sm:px-21 md:px-26 lg:px-41 xl:px-51 w-full pt-50">
          <div className="relative w-full lg:w-1/2 md:h-[500px]">
            <Image src={Principal} alt="" className="w-full h-full object-cover" />
            {/* <Image
              src={PrincipalTwo}
              alt=""
              className="bottom-12 right-[70px] hidden md:block absolute w-[200px]  h-[140px] border-6 border-white lg:right-[-70px] md:right-0"
            />   */}
          </div>
          <div className="relative w-full lg:w-1/2 py-7 flex flex-col justify-center h-full">
            <p className="text-[36px] w-full roboto font-light pb-2">
              At our School, we aim to empower students with the skills, knowledge, and values needed for success in a global context.
            </p>
            <p className="font-bold roboto text-[24px] py-2">Kate Unyime Ibekwe</p>
            <p className="text-[24px] roboto font-medium">Proprietress/CEO</p>
            <div className="absolute right-0 md:right-40 bottom-[46px]">
              <Image src={Signature} alt="" className="w-[90px]" />
            </div>
          </div>
        </section>

        {/* Educators Section */}
        <section className="w-full grid justify-center items-center text-[24px] px-4 sm:px-15 md:px-20 lg:px-35 pt-40 text-center text-white">
          <h1 className="font-semibold text-[28px] text-[#111111] py-8">Meet our teams of dedicated educators</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-[14px]">
            <div>
              <Image src={Anita} alt="" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" />
              <div className="flex justify-between text-[14px] bg-[#1D157C] w-full py-2 px-4">
                <p className="font-bold truncate">Anita lee</p>
                <p className="font-normal truncate">Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Bruce} alt="" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" />
              <div className="flex justify-between text-[14px] bg-[#5B7BCE] w-full py-2 px-4">
                <p className="font-bold truncate">Bruce Smith</p>
                <p className="font-normal truncate">Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Jack} alt="" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover object-center" />
              <div className="flex justify-between text-[14px] bg-[#1D157C] px-4 py-2 w-full">
                <p className="font-bold truncate">Jack Nicho</p>
                <p className="font-normal truncate">Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Calvin} alt="" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" />
              <div className="flex justify-between text-[14px] bg-[#5B7BCE] w-full py-2 px-4">
                <p className="font-bold truncate">Cruise</p>
                <p className="font-normal truncate">Art Director</p>
              </div>
            </div>
            <div>
              <Image src={Anitalee} alt="" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" />
              <div className="flex justify-between text-[14px] bg-[#1D157C] w-full py-2 px-4">
                <p className="font-bold truncate">Anita lee</p>
                <p className="font-normal truncate">Art Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-center w-full px-4 gap-4 pt-30 py-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <Image src={Library} alt="" className="h-[40vh] w-full object-cover" />
            <Image src={SchoolBuilding} alt="" className="h-[40vh] w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <Image src={Itroom} alt="" className="h-[40vh] w-full object-cover" />
            <Image src={Chatroom} alt="" className="h-[40vh] w-full object-cover" />
          </div>
          <div className="absolute flex justify-center w-full">
            <div className="bg-amber-400 roboto px-8 py-8 max-w-[450px]">
              <h1 className="text-[28px] roboto font-semibold">Our Facilities</h1>
              <p className="text-[18px] roboto">
                Immerse yourself in a conducive learning environment with our top-notch facilities. State-of-the-art laboratories, extensive libraries, and modern classrooms create a setting where curiosity and exploration flourish.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full px-4 sm:px-15 md:px-20 lg:px-35">
          <h1 className="text-[48px] text-[#111111] w-full text-center pt-20 pb-10 roboto font-semibold">
            What our students Say
          </h1>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * (100 / (testimonials.length / 3))}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <p className="text-[19px] w-full py-2 font-light">
                    “{testimonial.text}”
                  </p>
                  <p className="font-extrabold text-[24px] pt-2">{testimonial.name}</p>
                  <p className="text-[14px] font-normal text-[#111111]">{testimonial.department}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-2 ${currentSlide === index ? 'bg-[#111111]' : 'bg-gray-400'}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="w-full px-4 sm:px-15 md:px-20 lg:px-35 py-20">
          <h2 className="text-[34px] font-semibold mb-6">Upcoming Events</h2>
          <div className="flex flex-wrap w-full gap-3">
            {events.map((evt, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-stretch bg-white overflow-hidden">
                <div className={`flex flex-col items-center justify-center p-4 text-center text-white ${evt.color}`}>
                  <span className="text-2xl font-bold leading-none">{evt.day}</span>
                  <span className="uppercase text-sm">{evt.month}</span>
                </div>
                <div className="flex flex-col max-w-35 justify-center px-4 py-3">
                  <p className="text-sm font-medium">{evt.title}</p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <FaRegCalendarPlus className="mr-1" />
                    <span>{evt.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;