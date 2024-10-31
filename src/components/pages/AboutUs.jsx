import React from "react";
import { IoMdAdd } from "react-icons/io";
import bulbImg from "../../assets/imgs/about-1.webp";
import collabImg from "../../assets/imgs/about-2.webp";
import robotImg from "../../assets/imgs/about-3.webp";
import discussingImg from "../../assets/imgs/about-4.webp";
import ideaBG from "../../assets/imgs/pattern-1.webp";
import "../../styles/ReuseComps_Style.css";
import Team from "./Team";
import Footer from "../Footer";
import ServiceHeader from "./service_pages/ServiceHeader";
import { useLocation } from "react-router-dom";

function AboutUs({ page }) {
  const location = useLocation();
  const { type } = location.state || {};

  const renderForHome = () => {
    return (
      <div className="max-w-container max-xl:px-[4vh] mx-auto flex items-center max-lg:flex-col my-[10vh]">
        <div className="w-[50%] max-lg:w-full h-[31rem] max-md:h-[75vh] flex justify-center items-center flex-wrap relative abt--us--img--div my-3">
          {/*  */}
          <div className="w-[6rem] h-[6rem] bg-light rounded-full absolute flex justify-center items-center z-30">
            <div className="w-[80%] h-[80%] bg-primary rounded-full flex items-center justify-center">
              <IoMdAdd size={40} />
            </div>
          </div>
          {/*  */}

          <div className="w-[50%] h-[50%] relative">
            <img src={ideaBG} alt="" className="w-full h-full object-cover" />

            <img
              src={bulbImg}
              alt=""
              className="absolute bottom-3 right-1.5 custom--img--abt--i max-md:h-[60%]"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
          <div className="w-[50%] h-[50%] relative">
            <img
              src={collabImg}
              alt=""
              className="custom--img--abt--c lg:w-[80%] max-md:w-[100%] h-[95%]"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </div>
          <div className="w-[50%] h-[50%] relative">
            <img
              src={robotImg}
              alt=""
              className="w-[70%] max-md:w-[100%] h-full object-cover custom--img--abt--R absolute right-1.5"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
          <div className="w-[50%] h-[50%] relative">
            <img
              src={discussingImg}
              alt=""
              className="w-[70%] max-md:w-[95%] h-full object-cover custom--img--abt--d absolute left-1.5"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </div>
        </div>
        {/*  */}
        <div
          className="w-[50%] max-lg:w-full my-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-primary text-lg font-semibold CTA">About us</p>
          <h2 className="text-5xl font-bold my-2">
            Empowering Your Digital Tomorrow
          </h2>
          <p className="text-[#B2B2B3] my-3">
            We're passionate about helping businesses like yours find success in
            the digital world. Our team is driven by a shared commitment to
            creativity, innovation, and delivering measurable results.
          </p>
          <div className="w-full h-[4rem] flex justify-between my-5">
            <button className="w-[48%] h-full border border-primary font-bold text-lg rounded-md flex justify-center items-center">
              Cloud Migrate Pro
            </button>
            <button className="w-[48%] h-full border border-primary font-bold text-lg rounded-md flex justify-center items-center">
              AI Forge Labs
            </button>
          </div>
          <p className="text-[#B2B2B3] my-3">
            Each project is a unique opportunity to help our clients stand out
            in a crowded online space.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {page === "home" ? (
        renderForHome()
      ) : (
        <>
          <ServiceHeader page={type} type={type} /> {renderForHome()} <Team />{" "}
          <Footer />
        </>
      )}
    </div>
  );
}

export default AboutUs;
