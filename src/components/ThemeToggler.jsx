import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { GiNightSky } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="sticky top-[60vh] right-0 w-10 h-10 flex justify-center items-center rounded-lg text-[white] bg-primary cursor-pointer z-40"
      onClick={() => toggleTheme()}
    >
      {theme === "dark" ? <GiNightSky size={26} /> : <WiDaySunny size={26} />}
    </div>
  );
}

export default ThemeToggler;
