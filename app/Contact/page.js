'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import call from '../../public/assets/call.png';
import geo from '../../public/assets/geo.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phoneNumber: '',
    studentName: '',
    studentAge: '',
    program: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName) newErrors.parentName = 'Required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber || !/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.studentName) newErrors.studentName = 'Required';
    if (!formData.studentAge || isNaN(formData.studentAge)) newErrors.studentAge = 'Invalid age';
    if (!formData.program) newErrors.program = 'Required';
    if (!formData.message) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className='w-full z-0 px-4 sm:px-6 md:px-10 lg:px-20 py-8 pb-20 bg-white'>
        <div className="flex flex-col md:flex-row w-full space-x-10 space-y-7 justify-between mb-6">
        {/* Enquiry Section */}
        <div className="bg-white  border h-fit border-gray-500 w-full p-4 md:px-8 rounded-lg">
          <div className="flex items-start">
            <Image src={call} alt="call" className="w-10 h-10 mr-2" />
            <div>
              <h2 className="text-base poppins font-medium text-[#383C39]">Enquiry now</h2>
              <p className="text-black font-semibold roboto text-[18px]">+234 905 411 0010</p>
              <p className="text-black font-semibold roboto text-[18px]">+234 905 411 0011</p>
              <p className="text-black font-semibold roboto text-[16px]">contact@npfinsurance.com</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white  w-full border h-fit border-gray-500  p-4 md:px-8 rounded-lg">
          <div className="flex items-start mb-3">
            <Image src={geo} alt="geo" className="w-10 h-10 mr-2" />
            <div>
              <h2 className="text-base poppins font-medium text-[#383C39]">Address</h2>
              <p className="text-black roboto text-[16px] max-w-[360px]">
                Plot 1755 Cadastral Zone, F14 Gbazango, Off Tipper Garage, Byazin Road, After Central Market, Along NEPA Road, Kubwa, Abuja.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center pt-20 pb-10 w-full text-center px-4">
        <div className="w-full flex justify-center items-center">
          <p className="w-[180px] border-t-3 border-2 roboto rounded-lg px-2 py-2">Contact Form</p>
        </div>
        <h1 className="font-semibold roboto text-2xl sm:text-3xl md:text-[36px] text-[#111111] py-3">
          Student Information
        </h1>
        <p className="text-sm sm:text-base md:text-[16px] font-normal roboto max-w-[90%] md:max-w-[55%] mx-auto pb-2">
          If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs
        </p>
      </div>
    <div className="w-full relative mx-auto p-6 pt-20 pb-14 md:px-15 lg:px-20 mt-10 bg-white rounded-md border border-r-5 border-b-5 shadow-md">
      {/* Social Icons */}
      <div className="flex absolute -top-5 left-1/2 transform -translate-x-1/2 justify-center space-x-4 mb-4">
        <button className="bg-[#5B7BCE] text-black border border-black px-6 cursor-pointer py-2 rounded-md"><FaFacebookF /></button>
        <button className="bg-[#5B7BCE] text-black border border-black px-6 cursor-pointer py-2 rounded-md"><FaTwitter /></button>
        <button className="bg-[#5B7BCE] text-black border border-black px-6 cursor-pointer py-2 rounded-md"><FaLinkedinIn /></button>
      </div>

      {isSubmitted ? (
        <div className="text-center text-green-600 font-semibold text-lg">
          Thank you for your submission!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
                placeholder="Enter Parent Name"
              />
              {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
            </div>

            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
                placeholder="Enter Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
                placeholder="Enter Student Name"
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName}</p>}
            </div>

            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Student Age</label>
              <input
                type="number"
                name="studentAge"
                value={formData.studentAge}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
                placeholder="Enter Student Age"
              />
              {errors.studentAge && <p className="text-red-500 text-sm">{errors.studentAge}</p>}
            </div>

            <div>
              <label className="block text-sm md:text-base roboto font-medium mb-2">Program of Interest</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
              >
                <option value="">Select Program</option>
                <option value="Montessori">Montessori</option>
                <option value="Early Learners">Early Learners</option>
                <option value="STEM Kids">STEM Kids</option>
              </select>
              {errors.program && <p className="text-red-500 text-sm">{errors.program}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-base roboto font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-400 bg-[#FFFCFA] outline-gray-600 px-3 py-2 rounded-md"
              placeholder="Enter your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5B7BCE] text-white py-2 rounded-md hover:bg-indigo-800 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ContactForm;
