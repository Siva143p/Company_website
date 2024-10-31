import React, { useContext, useState } from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
// import Reuse from "./pages/service_pages/Service";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import SlideNav from "./SlideNav";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "../Theme";
import Service from "./pages/service_pages/Service";

function Main() {
  const [slideBar, setSlideBar] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === "dark" ? "bg-dark text-[white]" : "bg-light text-[black]"} overflow-hidden w-full h-full relative`}
    >
      <Header setSlideBar={setSlideBar} />
      <ThemeToggler />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="home" element={"#"} /> */}
      </Routes>

      {slideBar && (
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
          }}
          className="w-screen h-screen flex absolute top-0 left-0 z-40"
        >
          <SlideNav setSlideBar={setSlideBar} theme={theme} />

          <div
            className="max-lg:w-[60%] max-md:w-[25%] h-screen"
            onClick={() => setSlideBar(false)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Main;
