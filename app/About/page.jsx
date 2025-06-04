import React from "react";
// import { Outfit, Raleway } from "next/font/google";
import Image from "next/image";
import Icon from "../../public/assets/Icon.png";
import IconOne from "../../public/assets/Icon (1).png";
import dir from "../../public/assets/dir.png";

// const outfit = Outfit({ subsets: ["latin"] });
// const raleway = Raleway({ subsets: ["latin"] });

function Page() {
  return (
    <div
      className={`roboto w-full z-0 px-4 sm:px-6 md:px-10 lg:px-20 pt-8 pb-20 bg-white`}
    >
      {/* Hero Section */}
      <section className="grid items-center justify-center pt-10  pb-4 w-full text-center">
        <h1
          className={`font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3`}
        >
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-xl font-normal roboto max-w-[90%] mx-auto pb-2">
          Welcome to Epad ICT Academy, a hub of innovation and excellence
          dedicated to equipping individuals with the skills and knowledge
          needed to thrive in the digital age. Located in Abuja, Nigeria, we are
          committed to bridging the technology gap by providing top-tier
          training programs designed to empower learners of all ages.
        </p>
      </section>
      <section className="grid items-center justify-center pt-10 pb-6 w-full text-center">
        <h1
          className={`font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3`}
        >
          Our Mission & Vision
        </h1>
        <p className="text-sm sm:text-base md:text-xl font-normal roboto max-w-[90%]  mx-auto pb-2">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full py-6 lg:py-10">
        <div className="border-2 border-r-6 border-b-6 shadow-sm md:h-[350px] shadow-black p-6 lg:p-10 rounded-xl w-full ">
          <div className="flex justify-between items-center pb-5">
            <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111]">
              Mission
            </h1>
            <Image
              src={Icon}
              alt="Mission icon"
              className="w-14 h-14 lg:w-16 lg:h-16"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-normal roboto w-full mx-auto">
            At Little Learners Academy, our mission is to inspire a passion for
            learning and empower young minds to become confident, compassionate,
            and creative individuals. We strive to create a safe and inclusive
            space where children thrive academically, socially, and emotionally,
            setting the stage for a successful educational journey.
          </p>
        </div>
        <div className="border-2 border-r-6 border-b-6 shadow-sm shadow-black md:h-[350px] p-6 lg:p-10 rounded-xl w-full ">
          <div className="flex justify-between items-center pb-5">
            <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111]">
              Vision
            </h1>
            <Image
              src={IconOne}
              alt="Vision icon"
              className="w-14 h-14 lg:w-16 lg:h-16"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-normal roboto w-full mx-auto">
            Our vision is to be a beacon of educational excellence, where
            children are encouraged to explore, discover, and express their
            unique talents. We aim to foster a generation of lifelong learners
            equipped with critical thinking, empathy, and a deep appreciation
            for diversity.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="border-t-7  border-t-[#E3EBFF] w-full mb-6 pt-4">
        <h1 className="font-black text-2xl md:text-3xl lg:text-[36px] text-center w-full text-[#111111] py-3">
          OUR HISTORY
        </h1>
        <div className="text-lg md:text-xl lg:text-2xl leading-normal lg:leading-[30px] text-[#333333] mx-auto py-6 lg:py-10">
          <p>
            Welcome Message from the Founder's Desk <br />
            <br />
            Dear Students, Parents, and Esteemed Members of the Ephad
            International Academy Community, <br />
            <br />
            It is with great pleasure and pride that I welcome you to Ephad
            International Academy, formerly known as Ennoble International
            Academy. Since our inception on September 3rd, 2018, we have been
            dedicated to providing an exceptional educational experience that
            fosters academic excellence, character development, and a love for
            lifelong learning. <br />
            <br />
            As we embark on this educational journey together, I invite you to
            join us in creating a vibrant and dynamic learning environment where
            every student can thrive. Let us work hand in hand to inspire,
            challenge, and support our students as they grow into confident,
            capable, and caring individuals. <br />
            <br />
            Thank you for being a part of the Ephad International Academy
            community. Together, we will achieve great things. <br />
            <br />
            <div>
              <p className="font-semibold">Kate Unyime Ibekwe</p>
              <p>Proprietress/CEO</p>
            </div>
          </p>
        </div>
      </section>

      {/* Director Section */}
      <section className="border-t-7 border-t-[#E3EBFF] w-full mb-6 pt-4">
        <h1 className="font-black text-2xl md:text-3xl w-full text-[#111111] py-3">
          About the Director
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="text-lg md:text-xl lg:text-2xl leading-normal lg:leading-[30px] text-[#333333] py-6 lg:py-10 lg:w-3/5">
            <p>
              The director of Epad ICT Academy is a trailblazer in the field of
              information and communication technology, with a passion for
              empowering individuals and fostering digital inclusion. With a
              wealth of experience in ICT training, education, and leadership,
              the director has been instrumental in shaping the academy's vision
              of creating a tech-savvy community. <br />
              <br />
              Under their leadership, Epad ICT Academy has emerged as a leading
              institution, recognized for its commitment to excellence,
              innovation, and community impact. The director's dedication to
              bridging the digital divide and promoting lifelong learning has
              transformed the academy into a beacon of opportunity for learners
              of all backgrounds. <br />
              <br />
              Through their forward-thinking approach and unwavering commitment
              to excellence, the director continues to drive Epad ICT Academy's
              mission of equipping individuals with the skills to navigate and
              excel in the digital era.
            </p>
          </div>
          <div className="lg:w-2/5 py-6 lg:py-10">
            <Image
              src={dir}
              alt="director"
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
