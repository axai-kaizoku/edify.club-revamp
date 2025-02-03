import React from "react"
import {
  Amazon_logo,
  Bg_amazon,
  Booster,
  Green_double_tick,
  Hand_heart,
  Mobile,
  Protection,
  Star,
} from "./icons"

function BentoGrid() {
  return (
    <>
      {/* Desktop View */}
      <div className="gap-4 xl:gap-6 hidden sm:flex justify-center items-center">
        {/* Left Side */}
        <div className="w-[40%] flex flex-col sm:gap-4 xl:gap-6">
          {/* upper block */}
          <div className="bg-[#F8F8F8] rounded-[31px] pl-10 pt-5">
            <p className="font-gilroySemiBold sm:text-sm lg:text-base xl:text-lg">
              Trusted by
            </p>
            <h1 className="font-gilroySemiBold sm:text-4xl lg:text-6xl xl:text-7xl">
              50+
            </h1>
            <p className="xl:text-xl/6 font-gilroySemiBold sm:text-base/4 lg:text-lg/4">
              StartUp
              <br /> Founders
            </p>
            <div className="py-6 sm:py-4">
              <Hand_heart className="size-8" />
            </div>
          </div>
          {/* below block */}
          <div className="flex  items-center xl:gap-8 sm:gap-4 ">
            <div className="flex w-[40%]   bg-[url(/media/brento/carbon.svg)] xl:p-8 sm:p-4 lg:p-6  rounded-[19px]  bg-cover bg-no-repeat bg-center justify-center items-center  flex-col h-fit">
              <h1 className="text-white sm:text-3xl lg:text-5xl xl:text-7xl  font-gilroyBold">
                75%
              </h1>
              <p className="xl:text-2xl sm:text-sm lg:text-base sm:whitespace-nowrap font-gilroyBold text-center text-white">
                Less Carbon <br />
                Emission
              </p>
            </div>
            <div className="flex w-[60%] bg-[url(/media/brento/pocket_friendly.svg)] flex-col rounded-[33px] p-3 xl:p-4 bg-cover bg-no-repeat bg-center">
              <div className="bg-white rounded-[19px] gap-4 p-2 xl:gap-8 xl:p-6  flex flex-col justify-center items-center">
                <h1 className="sm:text-xl xl:text-3xl  font-gilroyMedium sm:pt-2 xl:pt-4">
                  Savings
                </h1>
                <h2 className="sm:text-4xl xl:text-7xl font-gilroyMedium">
                  $$$
                </h2>
                <div className="bg-[#E9F2EE] rounded-[7px] flex p-1 xl:p-2 px-2 xl:px-4 justify-center items-center gap-2">
                  <Green_double_tick className="sm:size-4 xl:size-6" />
                  <span className="sm:text-sm xl:text-base font-gilroyMedium">
                    Withdraw
                  </span>
                </div>
              </div>
              <div className="py-3 xl:py-6 text-center">
                <h1 className=" xl:px-6  font-orange whitespace-nowrap text-xl xl:text-3xl  tracking-wide">
                  Pocket Friendly
                </h1>
                <p className=" font-gilroyMedium whitespace-nowrap text-[10px] lg:text-sm xl:text-base">
                  Much cheaper than new ones
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* RIght Side */}
        <div className="w-[50%] flex flex-col gap-4 xl:gap-6">
          {/* upper */}
          <div className="flex gap-4 xl:gap-6 h-[55%]">
            {/* left */}
            <div className="flex w-1/2 bg-[url(/media/brento/extended_warranty.svg)] flex-col rounded-[33px] p-3 xl:p-4 bg-cover bg-no-repeat">
              <div className="bg-white rounded-[19px] gap-4 p-3 xl:gap-8 xl:p-6  flex flex-col justify-center items-center">
                <img
                  src="/media/brento/round_tick.webp"
                  alt="round_tick"
                  className="xl:h-32 h-24"
                />

                <h1 className="bg-[#E9F2EE] rounded-[7px] flex xl:p-2 xl:px-4 p-1 px-2 justify-center items-center gap-2  sm:text-[10px] lg:text-sm xl:text-base whitespace-nowrap font-gilroyMedium">
                  Free Extended Warranty
                </h1>
              </div>
              <div className="text-center py-3 xl:px-7 xl:py-6">
                <h1 className="   font-orange whitespace-nowrap sm:text-lg lg:text-xl xl:text-3xl  tracking-wide">
                  Extended Warranty
                </h1>
                <p className="font-gilroyMedium whitespace-nowrap text-[10px] lg:text-sm xl:text-base">
                  Ensuring protection
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-1/2 flex flex-col justify-between items-center">
              <h1 className="font-gilroySemiBold sm:text-3xl w-full lg:text-5xl xl:text-7xl flex justify-center h-full items-center">
                Why Us?
              </h1>
              <div className="bg-[#F0F5FC] relative rounded-[20px] flex p-3 xl:p-4 gap-2 xl:gap-6">
                <div className="flex flex-col gap-4 lg:gap-10 xl:gap-16">
                  <div className="flex gap-4">
                    <Protection className="size-5 xl:size-8" />
                    <Booster className="size-5 xl:size-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xs font-gilroySemiBold">Trusted by</h1>
                    <Amazon_logo className="max-lg:w-full" />
                  </div>
                </div>
                <div className="lg:bg-[url(/media/brento/amazon_bg.svg)] flex justify-start items-end bg-contain lg:px-3  bg-no-repeat bg-center">
                  <span className="sm:text-3xl lg:text-4xl xl:text-6xl font-gilroyBold flex justify-center items-center gap-1 xl:gap-4">
                    4.5 <Star className="sm:size-4 lg:size-6 xl:size-8" />
                  </span>
                </div>
                <Bg_amazon className="sm:absolute lg:hidden -right-3 h-24" />
              </div>
            </div>
          </div>
          {/* lower */}
          <div className="bg-[#ECF1E6] rounded-[31px]  flex">
            <div className="w-[50%] flex flex-col p-6 justify-between">
              <Mobile className="size-8" />
              <div className="flex flex-col gap-2 xl:gap-4">
                <h1 className="sm:text-base lg:text-lg xl:text-xl font-gilroySemiBold">
                  Over
                </h1>
                <p className=" sm:text-lg leading-4 lg:text-xl xl:text-3xl font-orange tracking-wide">
                  100+ Options to <br /> choose from
                </p>
              </div>
            </div>
            <img
              src="/media/brento/two_laptop.webp"
              alt="two_laptop"
              className=" w-[50%] xl:w-[66%]  sm:h-40 p-4 lg:h-48 xl:h-[270px]  xl:p-4 bg-cover"
            />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className=" sm:hidden flex-col gap-6 justify-center items-center">
        {/* Block1 */}
        <div className="bg-[#F8F8F8] rounded-[21px] pl-4">
          <p className="font-gilroySemiBold text-[10px] pt-3">Trusted by</p>
          <h1 className="font-gilroySemiBold text-5xl">50+</h1>
          <p className="text-sm/4 font-gilroySemiBold ">
            StartUp
            <br /> Founders
          </p>
          <div className="py-3">
            <Hand_heart className="size-6" />
          </div>
        </div>
        {/* Block2 */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex   bg-[url(/media/brento/carbon.svg)] p-8 rounded-[19px]  bg-cover bg-no-repeat bg-center justify-center items-center  flex-col ">
            <h1 className="text-white text-5xl  font-gilroyBold">75%</h1>
            <p className="text-lg whitespace-nowrap font-gilroyBold text-center text-white">
              Less Carbon <br />
              Emission
            </p>
          </div>
          <div className="flex flex-col   gap-1">
            <h1 className="text-3xl font-orange whitespace-nowrap">Why Us?</h1>
            <p className="text-sm/4 whitespace-nowrap font-gilroySemiBold">
              Know how we save <br />
              our planet!
            </p>
            <button className="self-start mt-1 rounded bg-black justify-center items-center flex text-sm text-white font-gilroySemiBold px-4 py-2">
              Explore
            </button>
          </div>
        </div>
        {/* Block3 */}
        <div className="bg-[#F0F5FC] relative rounded-[22px] flex justify-between p-4">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <Protection />
              <Booster />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-gilroySemiBold">Trusted by</h1>
              <Amazon_logo />
            </div>
          </div>
          <div className=" flex justify-start items-end bg-contain   bg-no-repeat bg-right">
            <span className="text-7xl font-gilroyBold flex justify-center items-center gap-2">
              4.5 <Star className="mt-3" />
            </span>
          </div>
          <Bg_amazon className="absolute right-0" />
        </div>
        {/* Block4  */}
        <div className="flex justify-between items-center gap-3 py-3">
          <div className="flex w-1/2 p-3 bg-[url(/media/brento/pocket_friendly.svg)] flex-col rounded-[19px]  bg-cover bg-no-repeat bg-center">
            <div className="bg-white  rounded-[14px] pt-2 flex flex-col justify-center items-center">
              <h1 className="text-base/5 font-gilroyMedium ">Savings</h1>
              <h2 className="text-5xl font-gilroyMedium py-1">$$$</h2>
              <div className="bg-[#E9F2EE] rounded-[4px] mt-3 mb-4 py-1 px-2  flex  justify-center items-center gap-1">
                <Green_double_tick className="size-3" />
                <span className="text-[8px] font-gilroyMedium text-center">
                  Withdraw
                </span>
              </div>
            </div>
            <div className=" text-center pt-3">
              <h1 className="  font-orange text-base  whitespace-nowrap">
                Pocket Friendly
              </h1>
              <p className=" font-gilroyMedium whitespace-nowrap text-[9px] ">
                Much cheaper than new ones
              </p>
            </div>
          </div>
          <div className="flex w-1/2 p-3 bg-[url(/media/brento/extended_warranty.svg)] flex-col rounded-[19px]  bg-cover bg-no-repeat">
            <div className="bg-white rounded-[14px]  pt-3 flex flex-col justify-center items-center ">
              <img
                src="/media/brento/round_tick.webp"
                alt="round_tick"
                className="size-16 "
              />

              <h1 className="bg-[#E9F2EE] rounded-[4px] my-4 py-1 px-2  flex justify-center items-center  text-[8px] font-gilroyMedium">
                Free Extended Warranty
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center pt-3">
              <h1 className="font-orange text-base whitespace-nowrap">
                Extended Warranty
              </h1>
              <p className="font-gilroyMedium text-center text-[10px]">
                Ensuring protection
              </p>
            </div>
          </div>
        </div>
        {/* Block5 */}
        <div className="bg-[#ECF1E6] rounded-[16px] mb-3 flex">
          <div className=" flex flex-col p-4 justify-between">
            <Mobile className="size-8" />
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-gilroySemiBold">Over</h1>
              <p className="text-xl/5 font-orange whitespace-nowrap">
                100+ Options <br />
                to choose
                <br /> from
              </p>
            </div>
          </div>
          <img
            src="/media/brento/two_laptop.webp"
            alt="two_laptop"
            className="w-[50%] h-[170px] p-4 bg-cover "
          />
        </div>
      </div>
    </>
  )
}

export default BentoGrid
