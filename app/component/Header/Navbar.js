import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { PiPhoneIncomingThin } from "react-icons/pi";
import emslogo from "../../../public/assets/emslogo.png";

function Navbar() {
  return (
    <div>
      <div className="flex ">
        <div className="flex py-2 text-md items-center bg-sky-950 text-white w-[500px] px-15 gap-6">
          <p>
            <FaFacebook />
          </p>
          <p>
            <BsTwitterX />
          </p>
          <p>
            <FiInstagram />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
          <p>
            <GrYoutube />
          </p>
        </div>
        <div className="py-2 gap-6 bg-blue-200 flex items-center w-full">
          <div className="flex items-center gap-1">
            <div>
              <PiPhoneIncomingThin />
            </div>
            <p>+2349055348554</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <PiEnvelopeSimpleThin />
            </div>
            <p>contact@ephadintlacademy.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-8">
        <div>
          <Image src={emslogo} alt="" className="w-[156px] h-[130px]" />
        </div>
        <ul className="flex gap-4 font-bold text-[20px] px-20">
          <li>HOME</li>
          <Link href="/Academics"><li>ACADEMICS</li></Link>
          <Link href="/Admission"><li>ADMISSIONS</li></Link>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
