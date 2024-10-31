import React from "react";
import { dropdown } from "./navData";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavDropDown({ setDropDown }) {
  return (
    <>
      <nav className="absolute bg-card-bg-dark w-[12rem] text-sm bottom-[-11rem] left-0 dropdown">
        {dropdown.map((item, index) => {
          return (
            <li
              className="hover:bg-primary"
              key={index}
              onClick={() => setDropDown(false)}
            >
              <Link
                to={item.path}
                state={{ type: item.title }}
                className="block p-2 w-full"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
    </>
  );
}

export default NavDropDown;
