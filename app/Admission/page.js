import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

function Page() {
  return (
    <div className={outfit.className}>
      <div className="grid items-center justify-center pt-20 pb-10  w-full text-center">
        <h1 className="text-[40px] leading-[130%] max-w-[700px] font-bold">
          Our Special Features
        </h1>
        <p className="text-[14px] max-w-[500px]">
          Embark on a remarkable educational journey with us! Our Admission and
          Enrollment process is the gateway to providing your child with an
          exceptional learning experience at our kindergarten school
        </p>
      </div>

      <div className="px-20 w-full">
        <div className="flex gap-10 items-center justify-center w-full py-10">
          <div className="">
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                01
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">Inquiry</h1>
              <p className="text-[14px]">
                Submit an inquiry form through our website or contact our
                admissions office to express your interest in Little Learners
                Academy.
              </p>
            </div>
          </div>

          <div>
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                02
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm  max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">School Tour</h1>
              <p className="text-[14px]">
                Schedule a personalized school tour to explore our campus, meet
                our staff, and gain insights into our nurturing learning
                environment.
              </p>
            </div>
          </div>

          <div className="">
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                03
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">Application Form</h1>
              <p className="text-[14px]">
                Complete the application form and provide the required
                documents, including your child's birth certificate, medical
                records, and any previous academic records (if applicable).
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center w-full py-6">
          <div>
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                04
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">Parents Interview</h1>
              <p className="text-[14px]">
                We value parent engagement, and a meeting with our admissions
                team allows us to understand your child's needs and ensure
                Little Learners Academy aligns with your family's expectations.
              </p>
            </div>
          </div>

          <div>
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                05
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">Student Assessment</h1>
              <p className="text-[14px]">
                For certain age groups, a student assessment may be conducted to
                understand their developmental progress and ensure the best
                placement.
              </p>
            </div>
          </div>

          <div>
            <div className="justify-center w-[100px] flex flex-col items-center">
              <div className="relative border-2 border-r-6 border-b-6 shadow-sm w-[100px] h-[70px]  text-[40px] font-bold text-center shadow-black rounded-xl">
                06
              </div>
              <div className="absolute bg-white w-[20px] h-[20px] rounded-[50%] border-2 border-black"></div>
              <div className="h-[69px] w-[12px] bg-black border-r-5 border-l-5 border-indigo-400"></div>
            </div>

            <div className="relative border-2 border-r-6 border-b-6 shadow-sm max-w-[398px] h-[222px] shadow-black py-10 px-10 rounded-xl">
              <h1 className="font-bold text-[20px] py-2">Student Assessment</h1>
              <p className="text-[14px]">
                Once the admission process is complete, you will receive an
                official acceptance letter from Little Learners Academy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid items-center justify-center pt-20 pb-10  w-full text-center">
        <div className="w-full flex justify-center items-center">
          <p className="w-[180px] border-3 rounded-lg px-2 py-2">
            Our Features
          </p>
        </div>
        <h1 className="text-[40px] leading-[130%] max-w-[700px] font-bold">
          Fee Structure
        </h1>
        <p className="text-[14px] max-w-[500px]">
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
      </div>

      <div className="px-6 py-10 mx-20 border rounded-xl ">
        <div className="overflow-x-auto flex w-full justify-center items-center py-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 max-w-[1400px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-100 w-[240px] border">
                    Program
                  </td>
                  <td className="px-4 py-2 bg-blue-100 w-[240px] border">
                    Age Group
                  </td>
                  <td className="px-4 py-2 bg-blue-100 w-[240px] border">
                    Annual Tuition
                  </td>
                  <td className="px-4 py-2 bg-blue-100 w-[240px] border">
                    Registration Fee
                  </td>
                  <td className="px-4 py-2 bg-blue-100 w-[240px] border">
                    Application Fee
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div className="overflow-x-auto flex w-full justify-center items-center py-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 max-w-[1400px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    Nursery
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    2 - 3 Years
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    $1,686
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $162
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $12
                  </td>
                </tr>

                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    Pre-Kindergatens
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    3 - 4 Years
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $2,686
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $220
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $16
                  </td>
                </tr>

                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    Kindergatens
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    4 -5 Years
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $3,686
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $340
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                     $20
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div className="px-6 my-16 mb-30 mx-20 border rounded-xl ">
        <div className="overflow-x-auto flex w-full justify-center items-center py-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 max-w-[1400px]">
            <table className="w-[1200px]">
              <thead>
                <tr className="bg-gray-100  text-left">
                  <td className="px-4 py-3 text-[20px] font-bold bg-blue-100  border">
                    Additional Services
                  </td>
                
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div className="overflow-x-auto flex w-full justify-center items-center py-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 max-w-[1400px]">
            <table className="w-[1200px]">
              <thead >
                <tr className="bg-gray-100  text-left">
                  <td className="px-4 py-2 bg-blue-50 border">
                    Before and After-School Care
                  </td>
                  <td className="px-4 py-2 bg-blue-50  border">
                    $180 / per month
                  </td>
                </tr>

                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    Language Immersion Program
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    $60 / per semester
                  </td>
                </tr>

                <tr className="bg-gray-100 text-left">
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    Transportation (Optional)
                  </td>
                  <td className="px-4 py-2 bg-blue-50 w-[240px] border">
                    $80 / per month
                  </td>
                </tr>

                
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
