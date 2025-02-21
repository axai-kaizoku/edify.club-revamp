import { Instagram, Linkedin, Twitter } from "lucide-react"
import MoreLinks from "./more-links"

const Footer = () => {
  return (
    <div className="w-full bg-[#efefef] items-center justify-center h-[100vh] mt-16 overflow-auto">
      {/* add relative positioning to the main conent */}
      <div className="relative hidden h-screen bg-red-200 w-full z-10 text-2xl md:text-7xl font-bold uppercase justify-center items-center bg-primaryRed text-white whitespace-pre">
        Scroll down ↓
      </div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0  bottom-0 left-0 w-full  bg-black text-white flex flex-col justify-end  items-center">
        <MoreLinks />
        <div className="flex flex-col md:flex-row justify-between h-ful w-full pt-4 lg:pt-6 pb-8 px-4">
          {/* compnany info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-base md:text-left text-center font-gilroySemiBold lg:text-lg xl:text-xl">
              Edify
            </h1>
            <p className="text-xs lg:text-sm md:text-left text-center xl:text-base font-gilroyMedium">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Nullam et lacinia mi.
            </p>
            <div className="hidden md:flex gap-2 -ml-2">
              <div className="flex size-8 xl:size-10 p-2    cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Instagram className="text-[#999999]   group-hover:text-black   " />
              </div>
              <div className="flex size-8 p-2 xl:size-10    cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Linkedin className="text-[#999999]   group-hover:text-black   " />
              </div>
              <div className="flex size-8 p-2 xl:size-10    cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Twitter className="text-[#999999]   group-hover:text-black   " />
              </div>
            </div>
          </div>
          {/* links */}
          <div className="text-[#999] flex flex-col md:flex-row-reverse gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="font-gilroyMedium hidden md:block  text-sm lg:text-base xl:text-lg mb-2">
                Support
              </h1>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm md:p-0 pt-4 xl:text-base">
                Support@edify.in
              </h2>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                +91 7470873515
              </h2>
            </div>
            <div className="md:flex flex-col hidden gap-2">
              <h1 className="font-gilroyMedium text-sm lg:text-base xl:text-lg mb-2">
                Products
              </h1>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Mackbooks
              </h2>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Windows
              </h2>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Mini PCs
              </h2>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Accessories
              </h2>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Desktops
              </h2>
            </div>
            <div className="md:flex flex-col hidden gap-2">
              <h1 className="font-gilroyMedium text-sm lg:text-base xl:text-lg mb-2">
                Help
              </h1>
              <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                Terms of service
              </h2>
              <a href={'/shipping-policy'} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                Shipping Policy
              </a>
              <a href={'/return-policy'} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                Return Policy
              </a>
              <a href={'/warranty-policy'} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                Warranty Policy
              </a>
              <a href={'/privacy-policy'} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                Privacy Policy
              </a>
            </div>
            <div className="md:hidden flex justify-center gap-16 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-gilroyMedium text-sm lg:text-base xl:text-lg mb-2">
                  Products
                </h1>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Mackbooks
                </h2>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Windows
                </h2>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Mini PCs
                </h2>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Accessories
                </h2>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Desktops
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-gilroyMedium text-sm lg:text-base xl:text-lg mb-2">
                  About Us
                </h1>
                <h2 className="font-gilroySemiBold text-xs lg:text-sm xl:text-base">
                  Terms of service
                </h2>
                <a href={"/shipping-policy"} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                  Shipping Policy
                </a>
                <a href={"/return-policy"} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                  Return Policy
                </a>
                <a href={"/warranty-policy"} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                  Warranty Policy
                </a>
                <a href={"/privacy-policy"} className="font-gilroySemiBold text-xs lg:text-sm xl:text-base cursor-pointer hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pb-6 w-full px-4">
          <div className="h-[1px] bg-white"></div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#666] text-xs">Copyright © 2025 Edify.club</h1>
            <div className="md:hidden flex gap-2">
              <div className="flex size-7 p-1.5    cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Instagram className="text-[#999999]   group-hover:text-black   " />
              </div>
              <div className="flex size-7 p-1.5     cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Linkedin className="text-[#999999]   group-hover:text-black   " />
              </div>
              <div className="flex size-7 p-1.5     cursor-pointer transition-all duration-300 ease-in-out justify-center items-center rounded-full group  hover:bg-white">
                <Twitter className="text-[#999999]   group-hover:text-black   " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
