import React from "react"
import { B2BIcons } from "../icons"

function B2BHero() {
  return (
    <div className="flex pt-[40%] sm:pt-[10%] lg:pt-[3.6%] gap-8 relative  sm:gap-7 md:gap-8 text-center text-nowrap flex-col sm:h-screen w-full items-center bg-[url(/media/b2b/bg.svg)] max-sm:pb-40">
      <div className=" block lg:hidden h-40 sm:h-20 absolute top-0 bg-gradient-to-t from-transparent via-white to-white  w-full z-10" />
      <h1 className="font-orange text-3xl leading-[40px] sm:leading-none sm:text-5xl lg:text-6xl xl:text-7xl">
        Give your team what <br />
        they Deserve!
      </h1>
      <B2BIcons.vector_line className="lg:-mt-12  sm:-mt-11 sm:ml-[12rem] lg:ml-[16rem] xl:ml-[21rem] ml-[7rem] -mt-14 w-16 sm:w-auto" />
      <p className="text-sm sm:text-xl lg:text-2xl xl:text-3xl font-gilroyMedium">
        Now get the ultimate, best-in-class laptops <br /> to power up your
        team’s productivity.
      </p>
      <button className="bg-black text-xs sm:text-base lg:text-base xl:text-lg lg:py-2 text-white sm:rounded-[8px] font-gilroySemiBold px-8 xl:mt-1  py-2 rounded">
        Download Catelogue
      </button>
      <div className="flex sm:hidden w-full justify-center relative">
        <B2BIcons.left_blue_monitor className=" w-36  absolute  -left-3 top-9" />
        <B2BIcons.keyboard className="w-20 absolute -left-4 top-[60px]" />
        <B2BIcons.main_monitor className=" w-56   z-50 " />
        <B2BIcons.right_black_monitor className="w-44 absolute  -right-4 top-9" />
        <B2BIcons.mac_system className="w-20 absolute -right-4 top-[67px] " />
      </div>
      <div className="hidden sm:flex justify-center w-full items-center relative">
        <B2BIcons.desktop_keyboard className="absolute -left-[71px]  top-40 z-10" />
        <B2BIcons.desktop_left_blue_monitor className="absolute left-20 w-auto  lg:w-auto  sm:w-[15rem] top-[97px]" />

        <B2BIcons.desktop_main_monitor className="z-10 w-auto  lg:w-auto sm:w-[27rem]" />
        <B2BIcons.desktop_right_black_monitor className="absolute right-0 w-auto  lg:w-auto sm:w-[15rem] top-[97px]" />
        <B2BIcons.desktop_mac_system className="absolute top-[180px] z-10 w-auto  lg:w-auto sm:w-[10rem] -right-4" />
      </div>
      <div className=" block h-52   xl:h-24 sm:hidden xl:absolute bottom-0 bg-gradient-to-b from-transparent via-white to-white  w-full z-10" />
    </div>
  )
}

export default B2BHero
