'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { PiPhoneIncomingThin } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and X icons
import emslogo from "../../../public/assets/emslogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex  justify-center py-2 text-md items-center bg-[#1C385A] text-white text-center md:max-w-[500px] md:px-12 px-4 w-full space-x-2.5 sm:space-x-4 sm:space-y-0">
          {/* <div className="flex items-center space-x-2.5 sm:space-x-6"> */}
          <p >
            <FaFacebook className="md:w-5 md:h-5 w-2.5 h-2.5" />
          </p>
          <p >
            <BsTwitterX className="md:w-5 md:h-5 w-2.5 h-2.5" />
          </p>
          {/* </div> */}
          {/* <div className="flex items-center space-x-2.5 sm:space-x-6"> */}
          <p >
            <FiInstagram className="md:w-5 md:h-5 w-2.5 h-2.5" />
          </p>
          <p >
            <FaLinkedinIn className="md:w-5 md:h-5 w-2.5 h-2.5" />
          </p>
          <p >
            <GrYoutube className="md:w-5 md:h-5 w-2.5 h-2.5" />
          </p>
          {/* </div> */}
        </div>
        <div className="py-2 md:space-x-6 space-y-2 md:px-5 px-2 bg-[#D3E9FF] flex items-center justify-center sm:justify-start md:gap-4 w-full">
          <div className="flex items-center gap-1 m-0">
            <div className="text-black font-bold">
              <PiPhoneIncomingThin />
            </div>
            <p className="text-[#111111] font-medium poppins text-xs md:text-base">+2349055348554</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-black">
              <PiEnvelopeSimpleThin />
            </div>
            <p className="text-[#111111] font-medium poppins text-xs md:text-base">contact@ephadintlacademy.com</p>
          </div>
        </div>
      </div>
      {/* laptop view */}
      <div className="flex justify-between items-center px-8">
        <div>
          <Image src={emslogo} alt="EMS Logo" className="h-18 w-18" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 font-medium text-[18px] px-20">
          <Link href="/">
            <li className="roboto text-[#111111]">HOME</li>
          </Link>
          <Link href="/Academics">
            <li className="roboto text-[#111111]">ACADEMICS</li>
          </Link>
          <Link href="/Admission">
            <li className="roboto text-[#111111]">ADMISSIONS</li>
          </Link>
          <Link href="/About">
            <li className="roboto text-[#111111]">ABOUT US</li>
          </Link>
          <Link href="/Contact">
            <li className="roboto text-[#111111]">CONTACT</li>
          </Link>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? null : <HiMenu size={30} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 z-90 bg-[#1C385A] text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "h-[40vh] top-0" : "h-0 top-[-100%]"
        }`}
      >
        {/* Close Button (X) at Top Right */}
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
            aria-label="Close Menu"
          >
            <HiX size={30} />
          </button>
        )}
        <ul className="flex flex-col items-center justify-center text-[18px] h-full gap-6 font-bold roboto p-6">
          <Link href="/" onClick={toggleMenu}>
            <li>HOME</li>
          </Link>
          <Link href="/Academics" onClick={toggleMenu}>
            <li>ACADEMICS</li>
          </Link>
          <Link href="/Admission" onClick={toggleMenu}>
            <li>ADMISSIONS</li>
          </Link>
          <Link href="/About" onClick={toggleMenu}>
            <li>ABOUT US</li>
          </Link>
          <Link href="/Contact" onClick={toggleMenu}>
            <li>CONTACT </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;