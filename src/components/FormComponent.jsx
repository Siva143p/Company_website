import React from "react";

function FormComponent() {
  return (
    <div className="w-container-fluid bg-primary py-10 my-[6vh]">
      <div className="max-w-container mx-auto max-xl:px-[4vh] flex max-lg:flex-col">
        <div
          className="w-[40%] max-lg:w-[100%] max-lg:text-center max-md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl font-bold my-5">
            Leave The Handy Work To Us
          </h1>
          <p className="my-5">
            Ready to start something great? Let's discuss how we can help bring
            your vision to life. Drop us a line, and we'll be in touch soon!
          </p>
        </div>

        <form
          className="w-[60%] max-lg:w-[100%] p-10 max-md:p-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="w-full md:flex justify-between mb-8 max-md:mb-0">
            <input
              type="text"
              placeholder="Your Name"
              className="w-[45%] max-md:w-[100%] my-2 text-lg font-semibold bg-[transparent] border p-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-[45%] max-md:w-[100%] my-2 text-lg font-semibold bg-[transparent] border p-3 rounded-md outline-none"
            />
          </div>

          <div className="w-full md:flex justify-between mt-8 max-md:mt-0">
            <input
              type="text"
              placeholder="Subject"
              className="w-[60%] max-md:w-[100%] my-2 text-lg font-semibold bg-[transparent] border p-3 rounded-md outline-none"
            />
            <button className="w-[35%] max-md:w-[100%] my-2 max-md:py-3 bg-[#DF2A19] rounded-md text-base font-semibold hover:bg-light hover:text-dark">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
