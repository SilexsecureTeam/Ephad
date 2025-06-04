import React from "react";

function Page() {
  return (
    <div className="w-full z-0 px-4 sm:px-6 md:px-10 lg:px-20 py-8 bg-white">
      <div className="grid items-center justify-center pt-20 pb-10 w-full text-center px-4">
        <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
          Our Special Features
        </h1>
        <p className="">
          Embark on a remarkable educational journey with us! Our Admission and
          Enrollment process is the gateway to providing your child with an
          exceptional learning experience at our kindergarten school
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

      <div className="grid items-center justify-center pt-20 pb-10 w-full text-center px-4">
        <div className="w-full flex justify-center items-center">
          <p className="w-[180px] border-t-3 border-2 roboto rounded-lg px-2 py-2">Our Features</p>
        </div>
        <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
          Fee Structure
        </h1>
        <p className="text-sm sm:text-base md:text-[16px] font-normal roboto max-w-[90%] md:max-w-[55%] mx-auto pb-2">
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
      </div>

      <div className="px-4 sm:px-6 py-4 mx-auto w-full border rounded-xl">
        <div className="overflow-x-auto w-full py-3">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <td className="px-4 py-2 bg-blue-100 w-[240px] border">Program</td>
                <td className="px-4 py-2 bg-blue-100 w-[240px] border">Age Group</td>
                <td className="px-4 py-2 bg-blue-100 w-[240px] border">Annual Tuition</td>
                <td className="px-4 py-2 bg-blue-100 w-[240px] border">Registration Fee</td>
                <td className="px-4 py-2 bg-blue-100 w-[240px] border">Application Fee</td>
              </tr>
              {[
                ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
                ["Pre-Kindergatens", "3 - 4 Years", "$2,686", "$220", "$16"],
                ["Kindergatens", "4 -5 Years", "$3,686", "$340", "$20"],
              ].map(([program, age, tuition, reg, app], i) => (
                <tr className="bg-gray-100 text-left" key={i}>
                  <td className="px-4 py-2 bg-blue-50 border">{program}</td>
                  <td className="px-4 py-2 bg-blue-50 border">{age}</td>
                  <td className="px-4 py-2 bg-blue-50 border">{tuition}</td>
                  <td className="px-4 py-2 bg-blue-50 border">{reg}</td>
                  <td className="px-4 py-2 bg-blue-50 border">{app}</td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>

      <div className="px-4 sm:px-6 my-16 mx-auto w-full border rounded-xl">
        <div className="overflow-x-auto w-full py-6">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <td className="px-4 py-3 text-[20px] font-bold bg-blue-100 border">
                  Additional Services
                </td>
                <td className="px-4 py-3 bg-blue-100 border"></td>
              </tr>
              {[
                ["Before and After-School Care", "$180 / per month"],
                ["Language Immersion Program", "$60 / per semester"],
                ["Transportation (Optional)", "$80 / per month"],
              ].map(([service, cost], i) => (
                <tr className="bg-gray-100 text-left" key={i}>
                  <td className="px-4 py-2 bg-blue-50 border">{service}</td>
                  <td className="px-4 py-2 bg-blue-50 border">{cost}</td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
