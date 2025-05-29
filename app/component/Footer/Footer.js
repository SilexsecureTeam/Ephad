import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import SchoolLogo from "../../../public/assets/lg.png";

function Footer() {
  return (
    <div className="bg-[#1D157C]">
      {/* Newsletter Section */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-15 md:px-20 lg:px-35 xl:px-51 gap-6 justify-center py-10 items-center bg-[#E3EBFF]">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-[32px] roboto font-semibold text-[#111111]">Subscribe to Our Newsletter</h1>
          <p className="text-[16px] font-normal roboto text-[#111111]">
            Stay in the loop with School news and updates
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full grid gap-2">
          <input
            type="text"
            placeholder="Your email address"
            className="py-2 rounded-md bg-[#FFFFFF] border border-[#D8D8D8] px-2 w-full max-w-[400px] placeholder:text-[#D8D8D8] text-[#111111] text-[16px] roboto"
          />
          <button className="bg-black text-white w-full max-w-[400px] rounded-md py-2">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row text-white items-center justify-between px-4 sm:px-15 md:px-20 lg:px-35 py-10 gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <Image src={SchoolLogo} alt="School Logo" className="w-[225px] h-[225px]" />
          <div className="flex flex-wrap py-2 text-md items-center text-white gap-6">
            <p className="text-[20px]">
              <FaFacebook />
            </p>
            <p className="text-[20px]">
              <BsTwitterX />
            </p>
            <p className="text-[20px]">
              <FiInstagram />
            </p>
            <p className="text-[20px]">
              <FaLinkedinIn />
            </p>
            <p className="text-[20px]">
              <GrYoutube />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20">
          <div>
            <h1 className="font-bold text-[#DFE4EB] text-[19px] roboto">Quick links</h1>
            <ul className="mt-5 space-y-2 text-[16px] text-[#DFE4EB] font-normal roboto">
              <li className="py-1">Home</li>
              <li className="py-1">About Us</li>
              <li className="py-1">Offers</li>
              <li className="py-1">Service</li>
              <li className="py-1">Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-[#DFE4EB] text-[19px] roboto">About</h1>
            <ul className="mt-5 space-y-2 text-[16px] text-[#DFE4EB] font-normal roboto">
              <li className="py-1">How it works</li>
              <li className="py-1">Pricing</li>
              <li className="py-1">Promotion</li>
              <li className="py-1">Refer a friend</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-[#DFE4EB] text-[19px] roboto">Help Center</h1>
            <ul className="mt-5 space-y-2 text-[16px] text-[#DFE4EB] font-normal roboto">
              <li className="py-1">Payments</li>
              <li className="py-1">FAQs</li>
              <li className="py-1">Checkout</li>
              <li className="py-1">Other Issues</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mx-4 sm:mx-15 md:mx-20 lg:mx-35 mt-10 border-neutral-400" />

      {/* Copyright */}
      <p className="px-4 sm:px-15 md:px-20 lg:px-35 text-white py-3 text-center  md:text-start text-[16px] roboto">
        © 2025 All rights reserved
      </p>
    </div>
  );
}

export default Footer;