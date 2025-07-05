'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FaBookOpen, FaPuzzlePiece } from 'react-icons/fa6';
import { GiNetworkBars } from 'react-icons/gi';
import { HiPaintBrush } from 'react-icons/hi2';
import { IoSunnySharp } from 'react-icons/io5';
import { GoStarFill } from 'react-icons/go';

import LanguageArt from '../../public/assets/LanguageArt.png';
import Mathematics from '../../public/assets/Mathematics.png';
import Science from '../../public/assets/course4.jpg';
import SocialStudies from '../../public/assets/SocialStudies.png';
import ArtandCraft from '../../public/assets/course2.jpg';
import PhysicalEducation from '../../public/assets/course3.jpg';
import Classroom from '../../public/assets/classroom.png';
import Creche from '../../public/assets/creche.jpg';
import Creche1 from '../../public/assets/creche1.jpg';
import Creche2 from '../../public/assets/creche2.jpg';
import Creche3 from '../../public/assets/creche3.jpg';
import Creche4 from '../../public/assets/creche4.jpg';
import Creche5 from '../../public/assets/course1.jpg';
import Creche6 from '../../public/assets/course2.jpg';
import Creche7 from '../../public/assets/course3.jpg';
import Creche8 from '../../public/assets/course4.jpg';
import Creche9 from '../../public/assets/hero1.jpg';
import Creche10 from '../../public/assets/hero3.jpg';
import Homes from '../component/Homes/Homes';

// Define carouselData with all required fields
const carouselData = [
  {
    id: 1,
    images: [Classroom, Creche, Creche1, Creche10, Classroom, Creche7],
    title: 'Crèche: ',
    titles: ' Age Group 3 months to 3 years',
    highlights: [
      'Early Childhood Development: Focus on nurturing the physical, emotional, social, and cognitive development of young children.',
      'Play-Based Learning: Activities designed to stimulate curiosity and learning through play.',
      'Language Development: Encouragement of early language skills through songs, stories, and interactive activities.',
      'Motor Skills Development: Activities that promote fine and gross motor skills.',
      'Social Skills: Group activities that foster social interaction and cooperation.',
    ],
    facilities: [
      'Safe and secure environment with age-appropriate toys and learning materials.',
      'Caring and professional staff trained in early childhood education.',
    ],
  },
  {
    id: 2,
    images: [Creche2, Creche3, Creche4, SocialStudies, Mathematics, LanguageArt],
    title: 'Primary School: ',
    titles: ' Age Group 4 to 11 years',
    curriculums: [
      'Core Subjects: English, Mathematics, Science, and Social Studies.',
      'Language: Instruction in both English and local languages.',
      'ICT: Basic computer skills and digital literacy',
      'Creative Arts: Art, music, and drama to foster creativity.',
      'Physical Education: Sports and physical activities to promote health and teamwork.',
    ],
    highlights: [
      'Holistic Development: Emphasis on academic excellence, moral education, and character building.',
      'Interactive Learning: Use of modern teaching methods and technology to enhance learning.',
      'Extracurricular Activities: Clubs, sports, and cultural activities to develop talents and interests.',
    ],
    assessments: [
      'Continuous assessment through tests, assignments, and projects',
      'End-of-term examinations to evaluate progress.',
    ],
  },
  {
    id: 3,
    images: [Creche5, Creche6, Creche10, Creche9, Creche8, SocialStudies],
    title: 'Secondary School: ',
    titles: ' Age Group 12 to 18 years',
  curriculums: [
      'Junior Secondary: Broad-based curriculum including English, Mathematics, Basic Science, Social Studies, Civic Education, and Technology.',
      'Senior Secondary: Specialized streams (Science, Arts, and Commercial) with subjects like Physics, Chemistry, Biology, Literature, Economics, and Accountancy.',
    ], 
    highlights: [
      'Academic Excellence: Rigorous academic program to prepare students for national and international examinations (e.g., WAEC, NECO, IGCSE).',
      'Career Guidance: Counselling and support to help students make informed career choices.',
      'Leadership Training: Opportunities for students to develop leadership skills through student government and other activities.',
      'Skill Development: Vocational and technical education to equip students with practical skills.',
    ],
    extracurriculars: [
      ' Wide range of clubs, sports teams, and cultural groups to enrich student life.',
 'Participation in inter-school competitions and community service projects.',
    ],
    assessments: [
     'Regular quizzes, tests, and assignments to monitor student progress.',
 'Mid-term and end-of-term exams to evaluate understanding and performance.',
    ],
  },
];

// Features and subjects arrays from your code (unchanged)
const features = [
  {
    icon: <FaBookOpen />,
    title: 'Thematic Learning',
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <GiNetworkBars />,
    title: 'STEAM Education',
    description:
      'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.',
  },
  {
    icon: <FaPuzzlePiece />,
    title: 'Language Immersion',
    description:
      'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.',
  },
  {
    icon: <HiPaintBrush />,
    title: 'Art and Creativity',
    description:
      'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.',
  },
  {
    icon: <IoSunnySharp />,
    title: 'Outdoor Education',
    description:
      'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.',
  },
  {
    icon: <GoStarFill />,
    title: 'Play-Based Learning',
    description:
      'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.',
  },
];

const subjects = [
  {
    image: LanguageArt,
    title: 'Language Arts',
    description: 'Reading, writing, storytelling, and communication skills.',
  },
  {
    image: Mathematics,
    title: 'Mathematics',
    description: 'Number sense, basic operations, problem-solving, and logic.',
  },
  {
    image: Science,
    title: 'Science',
    description:
      'Exploring the natural world through hands-on experiments and investigations.',
  },
  {
    image: SocialStudies,
    title: 'Social Studies',
    description: 'Cultivating an understanding of diverse cultures and communities.',
  },
  {
    image: ArtandCraft,
    title: 'Arts and Crafts',
    description: 'Encouraging creativity through various art forms and crafts.',
  },
  {
    image: PhysicalEducation,
    title: 'Physical Education',
    description: 'Promoting physical fitness, coordination, and teamwork.',
  },
];

function Page() {
  // Track current image index per carousel item by id
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    () =>
      carouselData.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
      }, {})
  );

  // Handlers to go next/prev image per carousel item
  const nextImage = (id, imagesLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % imagesLength,
    }));
  };

  const prevImage = (id, imagesLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + imagesLength) % imagesLength,
    }));
  };

  const goToImage = (id, index) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [id]: index,
    }));
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
          <p className="text-sm sm:text-base md:text-[16px] font-normal roboto max-w-[90%] md:max-w-[60%] mx-auto pb-2">
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
            At Epad ICT Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include
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
                <div className="absolute top-[0px] w-[80px] sm:w-[100px] md:w-[125px] h-[220px] sm:h-[260px]  bg-blue-100 border border-black rounded-b-md z-0"></div>
                <Image
                  src={subject.image}
                  alt={subject.title}
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-[180px] sm:h-[200px]  border-2 border-black rounded-xl mx-auto object-cover z-10"
                />
              </div>
              <div className="pt-8 sm:pt-10 text-center">
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

        {/* Carousel Section */}
        <section className="text-center py-8 md:py-18">
          <h1 className="font-normal roboto text-2xl sm:text-3xl md:text-[36px] mb-16 text-[#111111] py-3">
            Our Class And Programs
          </h1>

<div className="space-y-12">

  {/* Container 1: Crèche */}
  <div className="border-2 border-r-5 border-b-5 border-black rounded-xl p-6 pt-0 shadow-md w-full mx-auto">
    {/* Image Carousel */}
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      centerMode={false}
      containerClass="carousel-container"
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carouselData[0].images.map((img, idx) => (
        <div
          key={idx}
          className={`p-2 border rounded cursor-pointer ${
            currentImageIndexes[carouselData[0].id] === idx ? 'border-blue-600' : 'border-transparent'
          }`}
          onClick={() => goToImage(carouselData[0].id, idx)}
          role="button"
          tabIndex={0}
          aria-label={`Select image ${idx + 1}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') goToImage(carouselData[0].id, idx);
          }}
        >
          <Image
            src={img}
            alt={`${carouselData[0].title} image ${idx + 1}`}
            width={300}
            height={200}
            className="object-cover rounded h-50"
          />
        </div>
      ))}
    </Carousel>

    {/* Title */}
    <div className='flex text-left space-x-2 mt-4 text-[#1A1A1A]'>
      <h2 className="text-2xl font-bold mb-4">{carouselData[0].title}</h2>
      <h2 className="text-2xl font-normal mb-4">{carouselData[0].titles}</h2>
    </div>

    {/* Highlights */}
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-bold mb-2">Program Highlights:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[0].highlights.map((highlight, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{highlight}</li>
          </div>
        ))}
      </ul>
    </div>

    {/* Facilities */}
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-bold mb-2">Facilities:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[0].facilities.map((facility, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{facility}</li>
          </div>
        ))}
      </ul>
    </div>
  </div>

  {/* Container 2: Pre-School */}
  <div className="border-2 border-r-5 border-b-5 border-black rounded-xl p-6 pt-0 shadow-md w-full mx-auto">
    {/* Image Carousel */}
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      centerMode={false}
      containerClass="carousel-container"
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carouselData[1].images.map((img, idx) => (
        <div
          key={idx}
          className={`p-2 border rounded cursor-pointer ${
            currentImageIndexes[carouselData[1].id] === idx ? 'border-blue-600' : 'border-transparent'
          }`}
          onClick={() => goToImage(carouselData[1].id, idx)}
          role="button"
          tabIndex={0}
          aria-label={`Select image ${idx + 1}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') goToImage(carouselData[1].id, idx);
          }}
        >
          <Image
            src={img}
            alt={`${carouselData[1].title} image ${idx + 1}`}
            width={300}
            height={200}
            className="object-cover rounded h-50"
          />
        </div>
      ))}
    </Carousel>

    {/* Title */}
    <div className='flex text-left space-x-2 mt-4 text-[#1A1A1A]'>
      <h2 className="text-2xl font-bold mb-4">{carouselData[1].title}</h2>
      <h2 className="text-2xl font-normal mb-4">{carouselData[1].titles}</h2>
    </div>

    {/* Highlights */}
    <div className="mt-6 text-left">
      <h3 className="text-lg font-semibold text-[#4C4C4D] mb-2">Curriculum:</h3>
      <ul className="space-y-1 text-[#4C4C4D]">
        {carouselData[1]. curriculums.map(( curriculum, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{ curriculum}</li>
          </div>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-left">
      <h3 className="text-lg font-semibold text-[#4C4C4D] mb-2">Program Highlights:</h3>
      <ul className="space-y-1 text-[#4C4C4D]">
        {carouselData[1].highlights.map((highlight, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{highlight}</li>
          </div>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-left">
      <h3 className="text-lg font-semibold text-[#4C4C4D] mb-2">Assessments:</h3>
      <ul className="space-y-1 text-[#4C4C4D]">
        {carouselData[1].assessments.map((assessment, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{assessment}</li>
          </div>
        ))}
      </ul>
    </div>
    
  </div>

  {/* Container 3: Primary School */}
  <div className="border-2 border-r-5 border-b-5 border-black rounded-xl p-6 pt-0 shadow-md w-full mx-auto">
    {/* Image Carousel */}
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      centerMode={false}
      containerClass="carousel-container"
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carouselData[2].images.map((img, idx) => (
        <div
          key={idx}
          className={`p-2 border rounded cursor-pointer ${
            currentImageIndexes[carouselData[2].id] === idx ? 'border-blue-600' : 'border-transparent'
          }`}
          onClick={() => goToImage(carouselData[2].id, idx)}
          role="button"
          tabIndex={0}
          aria-label={`Select image ${idx + 1}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') goToImage(carouselData[2].id, idx);
          }}
        >
          <Image
            src={img}
            alt={`${carouselData[2].title} image ${idx + 1}`}
            width={300}
            height={200}
            className="object-cover rounded h-50"
          />
        </div>
      ))}
    </Carousel>

    {/* Title */}
    <div className='flex text-left space-x-2 mt-4 text-[#1A1A1A]'>
      <h2 className="text-2xl font-bold mb-4">{carouselData[2].title}</h2>
      <h2 className="text-2xl font-normal mb-4">{carouselData[2].titles}</h2>
    </div>

    {/* Highlights */} 
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-semibold mb-2">Curriculums:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[2].curriculums.map((curriculum, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{curriculum}</li>
          </div>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-semibold mb-2">Highlights:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[2].highlights.map((highlight, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{highlight}</li>
          </div>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-semibold mb-2">Extracurriculars:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[2].extracurriculars.map((extracurricular, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{extracurricular}</li>
          </div>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-left">
      <h3 className="text-lg text-[#4C4C4D] font-semibold mb-2">Assessments:</h3>
      <ul className=" space-y-1 text-[#4C4C4D]">
        {carouselData[2].assessments.map((assessment, i) => (
          <div key={i} className='flex font-medium items-center'>
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <li>{assessment}</li>
          </div>
        ))}
      </ul>
    </div>


    
  </div>
</div>


<h2 className="text-2xl sm:text-3xl font-bold text-center mt-15 mb-6">
        Overall Approach
      </h2>

      {/* Student-Centered Learning */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-medium mb-2">
          Student-Centered Learning:
        </h3>
        <ul className="space-y-2 pl-2 text-lg sm:text-xl font-medium">
          <li className="flex items-center justify-center w-full  gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Individualized attention to cater to the unique needs of each student.
            </span>
          </li>
          <li className="flex items-center justify-center  w-full gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Encouragement of critical thinking, problem-solving, and creativity.
            </span>
          </li>
        </ul>
      </div>

      {/* Supportive Environment */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-medium mb-2">
          Supportive Environment:
        </h3>
        <ul className="space-y-2 pl-2">
          <li className="flex text-lg sm:text-xl font-medium items-center justify-center w-full gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Safe and nurturing environment that promotes learning and personal growth.
            </span>
          </li>
          <li className="flex text-lg sm:text-xl font-medium items-center justify-center w-full gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Professional and dedicated staff committed to student success.
            </span>
          </li>
        </ul>
      </div>

      {/* Community Involvement */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-medium mb-2">
          Community Involvement:
        </h3>
        <ul className="space-y-2 pl-2">
          <li className="flex items-center justify-center text-lg sm:text-xl font-medium w-full gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Strong emphasis on community values and social responsibility.
            </span>
          </li>
          <li className="flex text-lg sm:text-xl font-medium items-center justify-center w-full gap-2">
            <ChevronRight className="text-primary min-w-5 mt-1" size={20} />
            <span>
              Engagement with parents and the broader community to support student development.
            </span>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <p className="text-center text-lg sm:text-xl font-medium mt-8">
        For further details or inquiries about the academic programs, please contact:<br />
        <span className="font-medium">
          Vision, Mission, Aim, and Objectives of Ephad International Academy, Kubwa, Abuja, Nigeria.
        </span>
      </p>

        </section>
      </div>
    </div>
  );
}

export default Page;


