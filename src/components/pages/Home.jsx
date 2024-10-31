import React from "react";
import BgVideo from "../../assets/vids/VID_20241028_215040_574.mp4";
import Service from "./service_pages/Service";
import "../../styles/ComponentsCustonStyles.css";
import AboutUs from "./AboutUs";
import FormComponent from "../FormComponent";
import { PiStarFourFill } from "react-icons/pi";

import businessImg from "../../assets/imgs/Business78978-1536x546.png.webp";
import workImg from "../../assets/imgs/section-half-bg-1.webp";
import Team from "./Team";
import Footer from "../Footer";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-screen">
        <div className="w-full h-[115vh] bg-primary absolute top-0 left-0">
          <video
            src={BgVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="w-full h-[115vh] absolute top-0 left-0 bg-primary flex justify-center items-center"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
          }}
        >
          <div className="w-[60%] text-center text-light">
            <h1
              className="lg:text-7xl max-sm:text-4xl max-lg:text-5xl font-extrabold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Empowering <span className="text-primary">Y</span>our{" "}
              <span className="text-primary">D</span>igital{" "}
              <span className="text-primary">F</span>uture
            </h1>

            <button
              className="bg-primary py-3 px-5 rounded-full text-sm font-semibold mt-12"
              data-aos="zoom-in"
            >
              DISCOVER MORE!
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="shadow--merge"></div> */}

      <Service page={"home"} />
      <FormComponent />
      <AboutUs page={"home"} />

      <div className="border-y border-[gray] w-full scroll-container">
        {/* <marquee behavior="scroll" direction="left"> */}
        <div className="flex items-center gap-[2rem] h-[6rem] scroll-content">
          <h1 className="text-5xl max-sm:text-3xl font-semibold">Agency</h1>
          <PiStarFourFill size={30} className="text-primary mt-4" />
          <h1 className="text-5xl max-sm:text-3xl font-semibold">
            Work process
          </h1>
          <PiStarFourFill size={30} className="text-primary mt-4" />
          <h1 className="text-5xl max-sm:text-3xl font-semibold">Tech</h1>
          <PiStarFourFill size={30} className="text-primary mt-4" />
          <h1 className="text-5xl max-sm:text-3xl font-semibold">
            Work process
          </h1>
          <PiStarFourFill size={30} className="text-primary mt-4" />

          <h1 className="text-5xl max-sm:text-3xl font-semibold">
            IT Sloution
          </h1>
          {/* <PiStarFourFill size={20} className="text-primary mt-4" /> */}
        </div>
        {/* </marquee> */}
      </div>

      <div className="mx-auto my-[6vh] busi--img">
        <img src={businessImg} alt="" className="" />
      </div>

      {/* How we work */}
      <div className="max-w-container mx-auto max-lg:p-[4vh] flex justify-between items-center max-lg:flex-col my-10">
        <div
          className="w-[50%] max-lg:w-[100%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold">How We Work</h2>
          <p className="text-[#B2B2B3] mt-5">
            Our process is simple, transparent, and centered around your needs.
            We believe in clear communication, regular updates, and a
            collaborative approach that ensures your vision is at the heart of
            every project.
          </p>
        </div>

        <div
          className="w-[40%] max-lg:w-[100%] h-[70vh] xl:h-[30rem] relative max-lg:mt-10 flex justify-center items-center work--img"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          <div className="w-[70%] lg:w-[90%] max-sm:w-[80%] h-full bg-primary rotate-6 absolute rounded-md work--card work--card-bg"></div>
          <div className="w-[70%] lg:w-[90%] max-sm:w-[80%] h-full absolute z-10 work--card">
            <img
              src={workImg}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <Team />

      <Footer />
    </div>
  );
}

export default Home;

// Empowering Your Digital Future
