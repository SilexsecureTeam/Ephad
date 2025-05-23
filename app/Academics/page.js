import React from "react";
import Image from "next/image";
import { FaBookOpen } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { HiPaintBrush } from "react-icons/hi2";
import { IoSunnySharp } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import Library from "../../public/assets/library.jpg"
import LanguageArt from "../../public/assets/LanguageArt.png";
import Mathematics from "../../public/assets/Mathematics.png";
import Science from "../../public/assets/Science.png";
import SocialStudies from "../../public/assets/SocialStudies.png";
import ArtandCraft from "../../public/assets/ArtandCraft.png";
import PhysicalEducation from "../../public/assets/PhysicalEducation.png";

function page() {
  return (
    <div className="pt-30">
      <div className="grid items-center justify-center w-full text-center">
        <h1 className="text-[58px] font-bold">Our Special Features</h1>
        <p className="text-[20px] w-[1000px]">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </div>

      <div className="flex py-30 justify-center items-center w-full">
        <div>
          <div className="grid grid-cols-3  gap-6  ">
            <div className="relative border-2 border-black shadow-lg w-[400px] shadow-black py-10 px-10 rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <FaBookOpen />
              </div>
              <h1 className="font-bold py-2">Thematic Learning</h1>
              <p>
                Our curriculum is centered around engaging themes that capture
                children's imaginations. Each theme integrates multiple
                subjects, making learning enjoyable and relevant.
              </p>
            </div>
            <div className="relative border-2 border-black shadow-lg w-[400px] py-10 px-10 shadow-black rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <GiNetworkBars />
              </div>
              <h1 className="font-bold py-2">STEAM Education</h1>
              <p>
                We offer innovative STEAM (Science, Technology, Engineering,
                Arts, and Mathematics) programs that promote hands-on
                exploration, critical thinking, and problem-solving skills.
              </p>
            </div>
            <div className="relative border-2 border-black shadow-lg w-[400px] py-10 px-10 shadow-black rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <FaPuzzlePiece />
              </div>
              <h1 className="font-bold py-2">Language Immersion</h1>
              <p>
                Through language immersion programs, children have the
                opportunity to learn a second language, enhancing cognitive
                development and global awareness.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 my-14 gap-6  ">
            <div className="relative border-2  border-black shadow-lg w-[400px] py-10 px-10 shadow-black rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <HiPaintBrush />
              </div>
              <h1 className="font-bold py-2">Act and Creativity</h1>
              <p>
                Art is celebrated at Little Learners Academy. Our art-focused
                activities encourage self-expression, creativity, and the
                appreciation of various art forms.
              </p>
            </div>
            <div className="relative border-2 border-black shadow-lg w-[400px] py-10 px-10 shadow-black rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <IoSunnySharp />
              </div>
              <h1 className="font-bold py-2">Outdoor Education</h1>
              <p>
                Our expansive outdoor learning spaces provide a stimulating
                environment for children to explore nature, fostering a
                connection with the environment.
              </p>
            </div>
            <div className="relative border-2 border-black shadow-lg w-[400px] py-10 px-10 shadow-black rounded-xl">
              <div className="absolute top-[-34px] text-3xl bg-cyan-100 border rounded-md py-4 px-4">
                <GoStarFill />
              </div>
              <h1 className="font-bold py-2">Play-Based Learning</h1>
              <p>
                Play is an integral part of early childhood education. Our
                play-based approach enhances social skills, emotional
                development, and imaginative thinking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid items-center justify-center w-full text-center">
          <h1 className="font-bold text-[40px]">Our Features</h1>
          <h1 className="text-[58px] ">What Student Learn</h1>
          <p className="text-[24px] w-[1000px]">
            At Little Learners Academy, we strive to cultivate a love for
            learning and equip children with essential skills for their future
            success. Our academic programs cover a wide range of subjects,
            allowing students to develop a strong foundation and discover their
            interests. Some key areas of learning include
          </p>
        </div>
        <div className="flex py-30 justify-center items-center w-full">
          <div>
            <div className="grid grid-cols-3  gap-6  ">
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={LanguageArt}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl  h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">Language Arts</h1>
                  <p className="text-[24px]">
                    Reading, writing, storytelling, and communication skills.
                  </p>
                </div>
              </div>
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={Mathematics}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">Mathematics</h1>
                  <p className="text-[24px]">
                    Number sense, basic operations, problem-solving, and logic.
                  </p>
                </div>
              </div>
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={Science}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl  h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">Science</h1>
                  <p className="text-[24px]">
                    Exploring the natural world through hands-on experiments and
                    investigations.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3  pt-16 gap-6  ">
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={SocialStudies}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl  h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">Social Studies</h1>
                  <p className="text-[24px]">
                    Cultivating an understanding of diverse cultures and
                    communities.
                  </p>
                </div>
              </div>
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={ArtandCraft}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">
                    Arts and Crafts
                  </h1>
                  <p className="text-[24px]">
                    Encouraging creativity through various art forms and crafts.
                  </p>
                </div>
              </div>
              <div className="relative border-2 border-black shadow-lg w-[500px]  h-[580px] shadow-black py-10 px-10 rounded-xl">
                <div className="w-full  flex justify-center ">
                  <div className="absolute w-[125px] h-[384px] top-0 text-3xl bg-blue-100 border rounded-b-md -z-10"></div>
                </div>
                <Image
                  src={PhysicalEducation}
                  alt=""
                  className="w-[400px] border-2 border-black rounded-xl  h-[300px]"
                />
                <div className="pt-14 text-center w-full">
                  <h1 className="font-bold text-[28px] py-2">
                    Physical Education
                  </h1>
                  <p className="text-[24px]">
                    Promoting physical fitness, coordination, and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid items-center justify-center w-full text-center">
          <h1 className="text-[58px] ">Our Rooms Gallery</h1>
          <p className="text-[24px] w-[1000px]">
            Step into our Gallery and immerse yourself in a visual journey of
            cherished moments and unforgettable experiences at our kindergarten
            school.
          </p>

          <div className="flex gap-4 font-bold text-[20px] py-26 w-[1000px]">
            <div className="border-2 border-black bg-blue-100 rounded-xl px-5 py-4">
              All
            </div>
            <div className="border-2 border-black rounded-xl px-5 py-4">
              Classrooms
            </div>
            <div className="border-2 border-black rounded-xl px-5 py-4">
              Library
            </div>
            <div className="border-2 border-black rounded-xl px-5 py-4">
              Science Lab
            </div>
            <div className="border-2 border-black rounded-xl px-5 py-4">
              Computer Lab
            </div>
            <div className="border-2 border-black rounded-xl px-5 py-4">
              Garden and Nature Area
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-50">
        <div className="relative border-2 border-black shadow-lg w-full h-[420px] shadow-black  py-10 rounded-xl">
          
          <div className="flex items-center justify-between w-full px-20 absolute -top-40">
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
          </div>

          <div className="pt-40 px-20 w-full">
            <h1 className="font-bold text-[40px] py-2">Classrooms</h1>
            <p className="text-[24px]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 pt-80">
        <div className="relative border-2 border-black shadow-lg w-full h-[420px] shadow-black  py-10 rounded-xl">
          
          <div className="flex items-center justify-between w-full px-20 absolute -top-40">
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
          </div>

          <div className="pt-40 px-20 w-full">
            <h1 className="font-bold text-[40px] py-2">Classrooms</h1>
            <p className="text-[24px]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 pt-80">
        <div className="relative border-2 border-black shadow-lg w-full h-[420px] shadow-black  py-10 rounded-xl">
          
          <div className="flex items-center justify-between w-full px-20 absolute -top-40">
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
          </div>

          <div className="pt-40 px-20 w-full">
            <h1 className="font-bold text-[40px] py-2">Classrooms</h1>
            <p className="text-[24px]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 pt-80">
        <div className="relative border-2 border-black shadow-lg w-full h-[420px] shadow-black  py-10 rounded-xl">
          
          <div className="flex items-center justify-between w-full px-20 absolute -top-40">
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
          </div>

          <div className="pt-40 px-20 w-full">
            <h1 className="font-bold text-[40px] py-2">Classrooms</h1>
            <p className="text-[24px]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 pt-80 pb-40">
        <div className="relative border-2 border-black shadow-lg w-full h-[420px] shadow-black  py-10 rounded-xl">
          
          <div className="flex items-center justify-between w-full px-20 absolute -top-40">
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
            <Image
              src={SocialStudies}
              alt=""
              className=" w-[350px]  border-2 border-black rounded-xl  h-[300px]"
            />
          </div>

          <div className="pt-40 px-20 w-full">
            <h1 className="font-bold text-[40px] py-2">Classrooms</h1>
            <p className="text-[24px]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
