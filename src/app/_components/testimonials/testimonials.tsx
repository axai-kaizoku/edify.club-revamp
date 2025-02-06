import React from "react"
import { BlackTick } from "./icons"

function Testimonials() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-16 items-center  bg-[#F7F7F7] rounded-[38px] p-4 pt-12 sm:pb-16 md:mx-12 lg:px-16">
        <div className="rounded-[21.369px] sm:w-[50%] xl:w-[30%] xl:ml-16 border rotate-6 border-[#F3F3F3] flex flex-col gap-5 bg-white shadow-[0px_0px_16.7px_0px_rgba(0,0,0,0.05)] p-4">
          <h1 className="text-sm font-gilroySemiBold text-center">
            “Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus
            feugiat lacus vitae neque ornare, adipiscing lacus vitae libero!”
          </h1>
          <div className="flex items-center gap-2">
            <img
              src="/media/testimonial-img.png"
              alt="profile-image"
              className="bg-contain size-12 rounded-full"
            />
            <div>
              <h1 className="text-xs font-gilroySemiBold">Antonia Jonathan</h1>
              <p className="text-[10px] font-gilroyMedium text-[#818A9C]">
                XYX
              </p>
            </div>
          </div>
        </div>
        <div className="text-center  w-full sm:relative sm:text-start flex justify-center  items-center sm:items-start flex-col gap-4 lg:w-[50%]">
          <div className="sm:pb-6">
            <h1 className="font-gilroySemiBold text-2xl sm:text-3xl lg:text-4xl">
              Join the Club
            </h1>
            <p className="font-gilroySemiBold text-xl sm:text-2xl lg:text-3xl whitespace-nowrap">
              Stay Ahead of the Trends!
            </p>
          </div>

          <input
            type="text"
            className="w-full focus:outline-none my-4 xl:text-base sm:placeholder:text-start placeholder:text-center placeholder:text-base sm:placeholder:text-lg lg:placeholder:text-base font-gilroyMedium  placeholder:text-black bg-transparent border-b-2  border-black"
            placeholder="Enter your email"
          />
          <button className="text-white text-xl sm:text-base lg:text-sm sm:absolute right-2 bottom-[84px] text-center bg-black py-2 px-4 rounded-full w-fit font-gilroySemiBold">
            Submit
          </button>
          <div className="flex gap-2 py-2">
            <BlackTick />
            <span className="font-gilroyMedium text-base sm:text-lg lg:text-xl text-nowrap">
              Join the 1000’s of new explorers{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
