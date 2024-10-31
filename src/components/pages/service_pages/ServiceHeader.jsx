import React from "react";
import serviceBg from "../../../assets/imgs/hero-3.webp";
import { Link } from "react-router-dom";

function ServiceHeader({ page, type }) {
  return (
    <div className="w-container-fluid h-[70vh] 2xl:h-[40rem] relative">
      <img src={serviceBg} alt="" className="w-full h-full object-cover" />
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgb(0, 0, 0, .6) )",
        }}
      >
        <div className="max-w-container mx-auto max-xl:px-[4vh] h-full flex max-md:flex-col max-md:justify-center max-md:items-start justify-between items-center">
          <h1
            className="text-2xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {page}
          </h1>
          <div
            className="text-2xl max-md:text-xl font-semibold flex"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Link
              to="/home"
              className="text-2xl max-md:text-xl font-semibold hover:text-primary"
            >
              <h1>Home</h1>
            </Link>
            <span className="mx-3">/</span> {type}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeader;
