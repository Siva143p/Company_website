import React from "react";
import CardRender from "../../Reusable_components/CardRender";
import Footer from "../../Footer";
import ServiceHeader from "./ServiceHeader";
import { useLocation } from "react-router-dom";

function Service({ page }) {
  const location = useLocation();
  const { type } = location.state || {};

  const serviceDataForHome = [
    {
      title: "Web Development",
      content: `Beyond Code - We craft user-centered websites designed to captivate, engage, and convert.
`,
      icon: "",
      style: "fade-right",
      duration: "1000",
    },
    {
      title: "App Development",
      content: `Next-Level Solutions - As technology evolves, so do we. From app development to cloud scalability and Al-powered systems.`,
      icon: "",
      style: "fade-up",
      duration: "1000",
    },
    {
      title: "Digital Marketing",
      content: `From Awareness to Loyalty - We create campaigns that don't just attract attention but also
build lasting customer relationships.`,
      icon: "",
      style: "fade-left",
      duration: "1000",
    },
  ];

  const renderForHome = () => {
    return (
      <div
        className="text-center my-10 max-w-container max-xl:px-[4vh] mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="text-primary text-lg font-semibold CTA">OUR SERVICES</p>
        <h2 className="text-4xl font-semibold">
          Elevating Businesses with IT Ingenuity
        </h2>
        <div className="w-full flex flex-wrap justify-evenly my-5">
          {serviceDataForHome.map((item, index) => {
            return (
              <CardRender
                key={index}
                caption={item.title}
                content={item.content}
                styleType={item.style}
                aniDuration={item.duration}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderSeperatly = () => {
    return (
      <>
        <ServiceHeader page={"Services"} type={type} />
        <div className="max-w-container mx-auto max-xl:px-[4vh]"></div>
        <Footer />
      </>
    );
  };

  return (
    <div className="w-container-fluid">
      {page === "home" ? renderForHome() : renderSeperatly()}
    </div>
  );
}

export default Service;
