'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaBookOpen, FaPuzzlePiece } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { HiPaintBrush } from "react-icons/hi2";
import { IoSunnySharp } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import LanguageArt from "../../public/assets/LanguageArt.png";
import Mathematics from "../../public/assets/Mathematics.png";
import Science from "../../public/assets/Science.png";
import SocialStudies from "../../public/assets/SocialStudies.png";
import ArtandCraft from "../../public/assets/ArtandCraft.png";
import PhysicalEducation from "../../public/assets/PhysicalEducation.png";
import Classroom from "../../public/assets/classroom.png";
import Homes from "../component/Homes/Homes";

// Hardcoded gallery sections with 5 images each
const gallerySections = [
  {
    title: "Classrooms",
    images: [Classroom, SocialStudies, Classroom, SocialStudies, Classroom, SocialStudies],
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
  },
  {
    title: "Library",
    images: [SocialStudies, Classroom, SocialStudies, Classroom, SocialStudies, Classroom],
    description:
      "Our library offers a cozy and inviting space filled with books to spark imagination and a love for reading, encouraging lifelong learning.",
  },
  {
    title: "Science Lab",
    images: [Classroom, SocialStudies, Classroom, SocialStudies, Classroom, SocialStudies],
    description:
      "The science lab provides hands-on experiments and exploration, fostering curiosity and a deeper understanding of the natural world.",
  },
  {
    title: "Computer Lab",
    images: [SocialStudies, Classroom, SocialStudies, Classroom, SocialStudies, Classroom],
    description:
      "Our computer lab equips students with essential digital skills in a fun and interactive environment, preparing them for a tech-driven future.",
  },
  {
    title: "Garden and Nature Area",
    images: [Classroom, SocialStudies, Classroom, SocialStudies, Classroom, SocialStudies],
    description:
      "The garden and nature area offers a serene space for children to connect with the environment, promoting outdoor learning and play.",
  },
];

const galleryCategories = [
  "All",
  "Classrooms",
  "Library",
  "Science Lab",
  "Computer Lab",
  "Garden and Nature Area",
];

const features = [
  {
    icon: <FaBookOpen />,
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <GiNetworkBars />,
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: <HiPaintBrush />,
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: <IoSunnySharp />,
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: <GoStarFill />,
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

const subjects = [
  {
    image: LanguageArt,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
  },
  {
    image: Mathematics,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    image: Science,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    image: SocialStudies,
    title: "Social Studies",
    description: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    image: ArtandCraft,
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
  },
  {
    image: PhysicalEducation,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
  },
];

function Page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [slideIndexes, setSlideIndexes] = useState(
    gallerySections.map(() => 0) // One index per section
  );

  const handleSlide = (sectionIndex, direction) => {
    const newIndexes = [...slideIndexes];
    const totalImages = gallerySections[sectionIndex].images.length;

// System: Sections.length;
    let newIndex = newIndexes[sectionIndex] + direction;

    // Prevent sliding beyond bounds
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalImages - getVisibleImages()) newIndex = totalImages - getVisibleImages();

    newIndexes[sectionIndex] = newIndex;
    setSlideIndexes(newIndexes);
  };

  // Determine number of visible images based on screen size
  const getVisibleImages = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // Laptop: 4 images
      if (window.innerWidth >= 640) return 3; // Tablet: 3 images
      return 2; // Mobile: 2 images
    }
    return 4; // Default for server-side rendering
  };

  return (
    <div>
      <Homes />
      <div className="w-full z-0 px-4 sm:px-6 md:px-10 lg:px-20 py-8 bg-white">
        {/* Special Features Section */}
        <section className="text-center mb-8 md:mb-12">
          <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
            Our Special Features
          </h1>
          <p className="text-sm sm:text-base md:text-[16px] font-normal roboto max-w-[90%] md:max-w-[55%] mx-auto pb-2">
            Our kindergarten school provides a nurturing and stimulating environment,
            fostering a love for learning that lasts a lifetime. Join us as we embark
            on an exciting educational journey together!
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-15 w-full mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border-2 border-r-5 border-b-5 border-black rounded-xl p-6 md:p-8 w-full max-w-[400px] mx-auto transition-transform hover:scale-105"
              role="region"
              aria-label={feature.title}
            >
              <div className="absolute -top-[20px] left-[15%] transform -translate-x-1/2 bg-[#E3EBFF] border border-black rounded-md p-2 text-xl md:text-2xl">
                {feature.icon}
              </div>
              <h2 className="font-semibold roboto text-base md:text-[18px] py-2">
                {feature.title}
              </h2>
              <p className="text-sm md:text-base roboto font-normal pt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* What Students Learn Section */}
        <section className="text-center py-8 md:py-18">
          <h2 className="font-semibold pt-20 roboto text-xl sm:text-2xl md:text-[28px]">
            Our Features
          </h2>
          <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
            What Students Learn
          </h1>
          <p className="text-sm sm:text-base md:text-[18px] font-normal roboto max-w-[90%] md:max-w-[55%] mx-auto pb-2">
            At Little Learners Academy, we strive to cultivate a love for learning
            and equip children with essential skills for their future success. Our
            academic programs cover a wide range of subjects, allowing students to
            develop a strong foundation and discover their interests.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="relative border-2 border-r-5 border-b-5 border-black rounded-xl p-6 sm:p-8 w-full max-w-[500px] mx-auto h-fit transition-transform hover:scale-105"
              role="region"
              aria-label={subject.title}
            >
              <div className="flex justify-center">
                <div className="absolute top-[0px] w-[80px] sm:w-[100px] md:w-[125px] h-[220px] sm:h-[280px] md:h-[320px] bg-blue-100 border border-black rounded-b-md z-0"></div>
                <Image
                  src={subject.image}
                  alt={subject.title}
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-[180px] sm:h-[200px] md:h-[250px] border-2 border-black rounded-xl mx-auto object-cover z-10"
                />
              </div>
              <div className="pt-8 sm:pt-14 text-center">
                <h2 className="font-bold roboto text-xl sm:text-[22px] py-2 md:py-4">
                  {subject.title}
                </h2>
                <p className="text-base roboto font-normal">
                  {subject.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section with Slider */}
        <section className="text-center py-8 md:py-18">
          <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
            Our Rooms Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-[18px] font-normal roboto max-w-[90%] md:max-w-[55%] mx-auto pb-2">
            Step into our Gallery and immerse yourself in a visual journey of
            cherished moments and unforgettable experiences at our kindergarten
            school.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-8 md:py-26 w-full mx-auto">
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`border-2 border-black roboto rounded-xl px-3 py-2 sm:px-5 sm:py-4 text-sm sm:text-base md:text-[18px] font-semibold cursor-pointer transition-colors ${
                  activeFilter === category
                    ? "bg-blue-100 text-black"
                    : "bg-white text-black hover:bg-blue-50"
                }`}
                aria-pressed={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Slider for Each Section */}
          {gallerySections
            .filter(
              (section) =>
                activeFilter === "All" || section.title === activeFilter
            )
            .map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="mb-10 md:mb-15"
                role="region"
                aria-label={section.title}
              >
                {/* Slider Container */}
                <div className="relative border-2 border-r-5 border-b-5 border-black rounded-xl w-full h-auto pt-[-20px] pb-8 md:pb-10">
                  <div className="relative overflow-hidden h-[200px] sm:h-[250px] md:h-[250px]">
                    {/* Slider Images */}
                    <div className="relative w-full h-full flex flex-row">
                      {section.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="absolute"
                          style={{
                            left: `calc(${imgIndex * (100 / getVisibleImages())}% - ${imgIndex * 10}px)`,
                            // top: '-20px', // Position images -20px from top
                            width: `calc(${100 / getVisibleImages()}% - 10px)`, // Adjust width for spacing
                            marginRight: '10px', // 10px spacing between images
                            transform: `translateX(${slideIndexes[sectionIndex] * -100}%)`, // Slide based on index
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        >
                          <Image
                            src={image}
                            alt={`${section.title} image ${imgIndex + 1}`}
                            className="w-full h-[200px] sm:h-[250px] md:h-[250px] border border-gray-600 rounded-xl object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => handleSlide(sectionIndex, -1)}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                      disabled={slideIndexes[sectionIndex] === 0}
                      aria-label={`Previous images for ${section.title}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSlide(sectionIndex, 1)}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg0
System: -gray-300 rounded-full p-2 z-10"
                      disabled={
                        slideIndexes[sectionIndex] >=
                        section.images.length - getVisibleImages()
                      }
                      aria-label={`Next images for ${section.title}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-start px-4 md:px-6">
                    <h2 className="font-semibold roboto text-xl sm:text-[22px] py-2 md:py-4">
                      {section.title}
                    </h2>
                    <p className="text-base roboto font-normal">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}

export default Page;