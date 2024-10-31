import React, { useContext } from "react";
import { SiWeblate } from "react-icons/si";
import { GoArrowRight } from "react-icons/go";
import "../../styles/ReuseComps_Style.css";
import { ThemeContext } from "../../Theme";
import { Link } from "react-router-dom";

function CardRender({ page, type, caption, content, styleType, aniDuration }) {
  const { theme } = useContext(ThemeContext);

  const renderForHome_Service = () => {
    return (
      <div
        className={`${theme === "dark" ? "bg-card-bg-dark" : "bg-gray-bg-light"} max-sm:w-[23rem] max-sm:h-[29rem] w-[23rem] h-[30rem] max-xl:w-[18rem] max-lg:w-[20rem] overflow-hidden relative rounded-lg shadow-2xl home--card my-3 max-sm:text-sm`}
        data-aos={styleType}
        data-aos-duration={aniDuration}
      >
        <div className="h-[60%] bg-test_red">
          <img
            src="https://techlab-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fservice%2Fservice-1.png&w=640&q=75"
            alt=""
            className="h-full object-cover"
          />
        </div>

        {/*  */}
        <div
          className={`${theme === "dark" ? "bg-card-bg-dark" : "bg-gray-bg-light"} w-[120%] h-[5rem] absolute -rotate-12 -mt-12 -ml-2`}
        ></div>

        <div className="w-[5rem] h-[5rem] bg-[black] rounded-full absolute top-[45%] left-[40%] flex justify-center items-center logo">
          <SiWeblate size={30} color="white" />
        </div>

        <div className="h-[40%] absolute z-10 text-center mt-0 p-3">
          <Link to="/service">
            <h2 className="text-xl font-bold inline-block hover:text-primary">
              {caption}
            </h2>
          </Link>
          <p className="text-[gray] mt-2">{content}</p>
          <Link to="/service" className="absolute bottom-4 left-[45%]">
            <button
              className={`${theme === "dark" ? "bg-dark text-[white]" : "bg-[#F8E7E5] text-primary"} mt-3 p-2 rounded-lg logo`}
            >
              <GoArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return <>{renderForHome_Service()}</>;
}

export default CardRender;
