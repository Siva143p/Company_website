import React, { useState } from "react";
import { mainData } from "./navData";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";

import NavDropDown from "./NavDropDown";

function Header({ setSlideBar }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="max-w-container text-white sticky top-0 mx-auto p-4 flex justify-between items-center max-lg:border-b z-40">
      <div>
        <h2 className="text-2xl">logo</h2>
      </div>

      <nav className="m-0 p-0 w-[40%] flex justify-between max-xl:text-sm xl:text-[1rem] font-semibold max-lg:hidden">
        {mainData.map((item, index) => {
          if (item.title === "Services") {
            return (
              <li
                className="list-none relative cursor-pointer py-5"
                key={index}
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <div>
                  {item.title}
                  <IoChevronDown
                    className={
                      dropDown ? "inline rotate-180 transition-all" : "inline"
                    }
                  />
                </div>
                {dropDown && <NavDropDown setDropDown={setDropDown} />}
              </li>
            );
          }

          return (
            <li
              className="list-none py-5 hover:text-secondary-text"
              key={index}
            >
              <Link to={item.path} state={{ type: item.title }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>

      <div>
        <h2 className="text-2xl max-lg:hidden">Help</h2>
      </div>

      <div className="hidden max-lg:block">
        <HiOutlineViewList
          size={30}
          className="text-primary "
          onClick={() => setSlideBar(true)}
        />
      </div>
    </div>
  );
}

export default Header;
