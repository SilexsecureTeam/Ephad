import React from "react";
import Homes from "../component/Homes/Homes";
import {
  BookOpenCheck,
  Users,
  Brain,
  ShieldCheck,
  UserCheck,
  Globe
} from "lucide-react";

function Page() {

const features = [
  {
    icon: <BookOpenCheck />,  // Represents high-quality education and standards
    description:
      "Provide high-quality education that meets international standards.",
  },
  {
    icon: <Users />,  // Symbolizes inclusiveness and support
    description:
      'Foster an inclusive and supportive learning environment.',
  },
  {
    icon: <Brain />,  // Critical thinking, creativity, problem-solving
    description:
      'Encourage critical thinking, creativity, and problem-solving skills.',
  },
  {
    icon: <ShieldCheck />,  // Leadership, ethics, values
    description:
      'Develop leadership qualities and ethical values in our students.',
  },
  {
    icon: <UserCheck />,  // Caring, professional staff
    description:
      'Caring and professional staff trained in early childhood education.',
  },
  {
    icon: <Globe />,  // Global society readiness
    description:
      'Prepare students for success in a global society.',
  },
];


  return (
    <div>
      <Homes />
    <div className="w-full z-0 px-4 sm:px-6 md:px-10 lg:px-20 py-8 bg-white">
      <div className="grid items-center justify-center pt-20 pb-10 w-full text-center px-4">
        <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
         Admission Process
        </h1>
        <p className="roboto max-w-[90%] md:max-w-[60%] mx-auto ">
          Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school
        </p>
      </div>
       
      <div className="w-full">
  <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full py-10">
    {[
      {
        title: "Inquiry",
        description:
          "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
        step: "01",
      },
      {
        title: "School Tour",
        description:
          "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
        step: "02",
      },
      {
        title: "Application Form",
        description:
          "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
        step: "03",
      },
      {
        title: "Parents Interview",
        description:
          "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
        step: "04",
      },
      {
        title: "Student Assessment",
        description:
          "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
        step: "05",
      },
      {
        title: "Student Assessment",
        description:
          "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
        step: "06",
      },
    ].map((item, index) => (
      <div key={index}>
        <div className="justify-center w-[100px] flex flex-col items-center">
          <div className="relative roboto border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[50px] text-[30px] font-bold text-center shadow-black rounded-xl">
            {item.step}
          </div>
          <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
          <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
        </div>
        <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[220px] shadow-black py-7 px-10 rounded-xl">
          <h1 className="font-semibold roboto text-[20px] py-2">{item.title}</h1>
          <p className="text-[14px] roboto">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

   <div className="w-full mt-2"> <h1 className="font-bold text-xl md:text-2xl my-5">Entrance Exam</h1> 
 
<h1 className="font-normal text-lg md:text-xl ">Our entrance exam is designed to assess the academic readiness and potential of 
prospective students. It includes evaluations in literacy, numeracy, and general 
knowledge suitable for the age group of the applicant. The exam schedule and 
preparation guidelines will be provided upon application. </h1>

<h1 className="font-bold text-xl md:text-2xl my-5">Academic Overview (Early Years & Primary)</h1>
 
<h1 className="font-bold text-lg md:text-xl mb-1">Early Years:</h1>
<h1 className="font-normal text-lg md:text-xl">Our early years program focuses on the foundational development of children aged 2-5 years. We emphasize play-based learning, social skills, and early literacy and numeracy.</h1>
 
<h1 className="font-bold text-lg md:text-xl mb-1">Primary:</h1>
<h1 className="font-normal text-lg md:text-xl">Our primary education program covers a broad curriculum that includes core subjects such as Mathematics, English, Science, and Social Studies. We also incorporate arts, physical education, and ICT to ensure a well-rounded education.</h1></div>

      <div className="grid items-center justify-center pt-20 pb-10 w-full text-center px-4">
        <h1 className="font-medium roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
          Aims and Objectives
        </h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-9 sm:gap-15 w-full mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border-2 border-r-5 border-b-5 border-black rounded-xl p-6 md:p-8 w-full max-w-[400px] mx-auto transition-transform hover:scale-105"
              role="region"
              aria-label={feature.title}
            >
              <div className="absolute -top-[20px] left-[15%] transform -translate-x-1/2 bg-[#FFDECC] border border-black rounded-md p-2 text-xl md:text-2xl">
                {feature.icon}
              </div>
              <p className="text-sm md:text-base roboto font-normal pt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
</div>
  );
}

export default Page;
