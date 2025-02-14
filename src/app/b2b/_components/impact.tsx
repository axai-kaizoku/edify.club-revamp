"use client"
import React, { useState } from "react"
import { B2BIcons } from "../icons"
// const months = ["3months", "6months", "9months", "12months"]
function Impact() {
  // const [select, setSelect] = useState(null)
  return (
    <section className=" flex flex-col w-full sm:mt-16 gap-6 sm:gap-12">
      <h1 className="text-center font-orange text-2xl lg:text-3xl xl:text-4xl">
        Impact on Earth
      </h1>
      {/* <div className="bg-[#F8F8F8] rounded-2xl flex flex-col  justify-center items-center pb-10">
        <div className="bg-white rounded-full shadow-2xl w-[80%] py-3  flex justify-center items-center  text-[#959595] text-xl border border-[#E9E9E9]">
          {months.map((item, key) => (
            <li
              onClick={() => setSelect(key)}
              key={key}
              className={`cursor-pointer w-full px-4 py-2 text-xl font-gilroySemiBold rounded-full transition-all ${
                select === key ? "bg-black text-white" : ""
              } flex justify-center items-center `}
            >
              {item}
            </li>
          ))}
        </div>
      </div> */}
      <img
        src="/media/b2b/impact.png"
        alt=""
        className="object-contain w-full"
      />
    </section>
  )
}

export default Impact
