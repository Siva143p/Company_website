import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import img1 from "../../assets/imgs/about-3.webp";

function Team() {
  const [hover, setHover] = useState(false);
  const [profile, setProfile] = useState(false);
  const [profileName, setProfileName] = useState("");
  const a = [
    { name: "Siva Prasad", role: "Full-Stack Developer", style: "fade-left" },
    { name: "Mohan Raj", role: "HR Executive", style: "fade-right" },
    { name: "Hemanth", role: "Sales Executive", style: "fade-up" },
    { name: "Praveen Kumar", role: "Executive", style: "fade-left" },
    { name: "Gokula Priya", role: "Front-end Developer", style: "flip-up" },
  ];
  return (
    <div className="max-w-container max-xl:px-[4vh] mx-auto max-md:text-center">
      <p className="font-semibold text-primary CTA">OUR ACTIVE MEMBERS</p>
      <div
        className="w-full flex max-md:flex-col my-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="w-[50%] max-md:w-full text-5xl font-bold">
          Unleash the Power of Technology
        </h1>
        <p className="w-[40%] max-md:w-full max-md:my-5 text-[#B2B2B3]">
          With a commitment to driving technological evolution, our IT solutions
          and services are the cornerstone of your digital progression. We
          transcend boundaries, enabling businesses to not only adapt but thrive
          in dynamic landscapes.
        </p>
      </div>

      {/*  */}
      <div className="w-full max-lg:flex max-lg:flex-wrap max-md:w-full justify-between">
        {a.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full border-b border-gray flex max-lg:flex-col max-lg:w-[45%] max-md:w-full max-lg:my-3 justify-between py-10 relative"
              data-aos={item.style ? item.style : ""}
              data-aos-duration="1000"
            >
              <div
                className={`${profile && item.name === profileName ? "team--profile block" : "hidden max-lg:block"} w-[15rem] h-[15rem] bg-primary rounded-full max-lg:relative lg:absolute top-0 lg:right-[23%] max-lg:my-3 max-md:mx-auto`}
              >
                <img
                  src={img1}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="w-full h-full bg-primary rounded-full absolute top-0 right-[0%] img--cover"></div>
              </div>
              <div className="w-[40%] max-lg:w-full flex max-lg:flex-col justify-between max-sm:text-center">
                <h2
                  className="text-xl font-semibold "
                  onMouseEnter={() => setProfile(true)}
                  onMouseLeave={() => setProfile(false)}
                  onMouseOver={() => setProfileName(item.name)}
                >
                  {item.name}
                </h2>
                <div className="w-[30%] max-lg:w-full">
                  <p className="text-[#B2B2B3] lg:text-center">{item.role}</p>
                </div>
              </div>
              {/*  */}
              <div className="w-[20%] max-lg:w-full relative flex max-lg:flex-col justify-between">
                <div className="w-[80%] max-lg:w-full flex max-md:justify-center gap-5 text-gray-bg-light relative max-lg:my-3">
                  <div
                    className={`${hover && item.name === profileName ? "mem--icons-fb flex" : "hidden"} max-lg:flex border border-gray-bg-light justify-center items-center w-10 h-10 rounded-full hover:bg-primary hover:border-primary`}
                  >
                    <FaFacebookF size={20} />
                  </div>
                  <div
                    className={`${hover && item.name === profileName ? "mem--icons-twitter flex" : "hidden"} max-lg:flex border border-gray-bg-light flex justify-center items-center w-10 h-10 rounded-full hover:bg-primary hover:border-primary`}
                  >
                    <FaTwitter size={20} />
                  </div>
                  <div
                    className={`${hover && item.name === profileName ? "mem--icons-linkedin flex" : "hidden"} max-lg:flex border border-gray-bg-light flex justify-center items-center w-10 h-10 rounded-full hover:bg-primary hover:border-primary`}
                  >
                    <FaLinkedinIn size={20} />
                  </div>
                </div>
                <div
                  className="w-[20%] flex justify-end items-center cursor-pointer show--icons max-lg:hidden"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onMouseOver={() => setProfileName(item.name)}
                >
                  <IoMdAdd size={30} className="cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
