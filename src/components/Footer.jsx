import React from "react";
import { footerDataQuickLinks, footerDataServiceLinks } from "./footerData";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className="max-w-container h-[14vh] max-xl:px-[4vh] border-y border-[gray] mx-auto my-10 flex justify-between items-center">
        <div className="w-[30%]" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-3xl max-md:text-2xl font-semibold">Company</h1>
        </div>

        <div
          className="w-[20%] flex gap-5 justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="w-8 h-8 hover:bg-primary bg-card-bg-dark rounded-md flex justify-center items-center cursor-pointer">
            <FaFacebookF size={20} className="hover:text-light" />
          </div>
          <div className="w-8 h-8 hover:bg-primary bg-card-bg-dark rounded-md flex justify-center items-center cursor-pointer">
            <FaLinkedinIn size={20} />
          </div>
          <div className="w-8 h-8 hover:bg-primary bg-card-bg-dark rounded-md flex justify-center items-center cursor-pointer">
            <FaTwitter size={20} />
          </div>
          <div className="w-8 h-8 hover:bg-primary bg-card-bg-dark rounded-md flex justify-center items-center cursor-pointer">
            <GrInstagram size={20} />
          </div>
        </div>
      </div>

      <div className="md:flex max-w-container mx-auto max-xl:px[4vh] justify-center">
        <ul
          className="w-[30%] max-md:w-[100%] max-md:text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-semibold my-5">Quick Links</h2>
          {footerDataQuickLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className="block w-[20%] my-3 text-[#B2B2B3] hover:text-light max-md:w-[100%] max-md:text-center"
              >
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>

        {/*  */}

        <ul
          className="w-[30%] max-md:w-[100%] max-md:text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-semibold my-5">Service Links</h2>
          {footerDataServiceLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className="block w-[40%] my-3 text-[#B2B2B3] hover:text-light max-md:w-[100%] max-md:text-center"
              >
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>

        {/*  */}

        <ul
          className="w-[30%] max-md:w-[100%] max-md:text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-semibold my-5">Contact Us</h2>
          <li className="w-[100%] max-md:w-[100%] my-3 text-[#B2B2B3] hover:text-light flex justify-start max-md:justify-center items-center gap-3 cursor-pointer">
            <FaPhone className="inline" size={20} /> +91 7330751336
          </li>
          <li className="w-[100%] max-md:w-[100%] my-3 text-[#B2B2B3] hover:text-light flex justify-start max-md:justify-center items-center gap-3 cursor-pointer">
            <IoMdMail className="inline" size={20} /> companymail@gmail.com
          </li>
          <li className="w-[100%] max-md:w-[100%] mt-3 text-[#B2B2B3] hover:text-light flex justify-start max-md:justify-center items-center gap-3 cursor-pointer">
            <FaLocationDot className="inline" size={20} /> Tada, Tirupati
            (Dist), AP - 524 401
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
