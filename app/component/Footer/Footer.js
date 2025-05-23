import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import SchoolLogo from "../../../public/assets/schoollogo.png"

function Footer() {
  return (
    <div className="bg-blue-900">
      <div className="flex gap-10 justify-center py-10 items-center bg-blue-100">
        <div>
          <h1 className="text-[40px] font-bold">Subscribe to Our Newsletter</h1>
          <p className="text-[16px]">
            Stay in the loop with School news and updates
          </p>
        </div>
        <div className="grid gap-2">
          <input
            type="text"
            placeholder="Your email address"
            className="py-2 rounded-md bg-gray-200 px-2 w-[520px]"
          />
          <button className="bg-black text-white w-[520px] rounded-md py-2">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
      <div className="flex text-white items-center gap-40 px-50">
        <div>
          <Image src={SchoolLogo} alt="" className="w-[225px] h-[225px]"/>
          <div className="flex py-2 text-md items-center  text-white w-[500px] px-15 gap-6">
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
        </div>
        <div className="flex gap-30">
          <div>
            <h1 className="font-bold">Quick links</h1>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Offers</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">About</h1>
            
         <ul>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Promotion</li>
          <li>Refer a friend</li>
      
         </ul>
           
          </div>
          <div>
            <h1 className="font-bold">Help Center</h1>
            <ul>
              <li>Payments</li>
              <li>FAQs</li>
              <li>Checkout</li>
              <li>Other Issues</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mx-50 mt-20 text-neutral-400"/>

      <p className="px-50 text-white py-3">&copy; 2025 alright reserve</p>
    </div>
  );
}

export default Footer;
