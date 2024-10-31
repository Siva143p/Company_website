import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { dropdown, mainData } from "./navData";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function SlideNav({ setSlideBar, theme }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className={`${theme === "dark" ? " bg-dark text-white" : "bg-light text-black"} h-screen max-lg:w-[40%] max-md:w-[75%] overflow-y-scroll silde--dropdown`}
    >
      <div className="flex justify-between items-center px-5 h-[20%]">
        <h1 className="text-xl font-semibold">Company Name</h1>
        <IoMdClose size={27} onClick={() => setSlideBar(false)} />
      </div>

      <nav className=" font-bold">
        {mainData.map((item, index) => {
          if (item.title === "Services") {
            return (
              <li
                className="list-none"
                key={index}
                onClick={() => setDropDown(!dropDown)}
                style={{
                  borderTop:
                    theme === "dark" ? "1px gray solid" : "1px #E4E0E1 solid",
                }}
              >
                <div className="flex justify-between items-center py-3 px-5">
                  {" "}
                  <Link
                    to={item.path}
                    state={{ type: item.title }}
                    className="block w-full"
                  >
                    {item.title}
                  </Link>
                  <IoChevronDown />
                </div>

                <nav className={dropDown ? "block dropdown" : "hidden"}>
                  {dropdown.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-none"
                        style={{
                          borderTop:
                            theme === "dark"
                              ? "1px gray solid"
                              : "1px #E4E0E1 solid",
                        }}
                      >
                        <Link
                          to={item.path}
                          state={{ type: item.title }}
                          className="block py-3 pl-14 w-full"
                          onClick={() => setSlideBar(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </nav>
              </li>
            );
          }

          return (
            <li
              className="list-none flex justify-between items-center"
              key={index}
              style={{
                borderTop:
                  theme === "dark" ? "1px gray solid" : "1px #E4E0E1 solid",
              }}
            >
              <Link
                to={item.path}
                state={{ type: item.title }}
                className="block py-3 px-5 w-full"
                onClick={() => setSlideBar(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
    </div>
  );
}

export default SlideNav;
