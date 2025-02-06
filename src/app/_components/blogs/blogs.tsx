import React from "react"
import { BlogImage } from "../bento-grid/icons"
import { DateDash, RightArrow } from "./icons"

function Blogs() {
  return (
    <>
      <section className="flex flex-col px-4 lg:px-12">
        <h1 className="text-center font-orange text-2xl lg:text-3xl xl:text-4xl mb-10">
          Blogs
        </h1>
        <div className="flex flex-col md:flex-row items-center w-full justify-center gap-6 ">
          <div className="flex flex-col ">
            <div>
              <BlogImage className="w-full h-full" />
            </div>
            <div className="flex  flex-col pt-2">
              <h1 className="text-2xl font-gilroySemiBold md:text-xl xl:text-2xl">
                Blog title
              </h1>
              <p className="text-sm font-gilroyMedium leading-5 md:leading-4  xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et lacinia mi.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center justify-center">
                {" "}
                <RightArrow className="w-8 md:w-7 xl:w-10" />
                <h1 className="text-xs font-gilroySemiBold whitespace-nowrap xl:text-base">
                  Read more
                </h1>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <span className="text-xs whitespace-nowrap font-gilroyMedium xl:text-sm">
                  Oct 9, 2024
                </span>{" "}
                <DateDash />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div>
              <BlogImage className="w-full h-full" />
            </div>
            <div className="flex  flex-col pt-2">
              <h1 className="text-2xl font-gilroySemiBold md:text-xl xl:text-2xl">
                Blog title
              </h1>
              <p className="text-sm font-gilroyMedium leading-5 md:leading-4  xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et lacinia mi.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center justify-center">
                {" "}
                <RightArrow className="w-8 md:w-7 xl:w-10" />
                <h1 className="text-xs font-gilroySemiBold whitespace-nowrap xl:text-base">
                  Read more
                </h1>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <span className="text-xs whitespace-nowrap font-gilroyMedium xl:text-sm">
                  Oct 9, 2024
                </span>{" "}
                <DateDash />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div>
              <BlogImage className="w-full h-full" />
            </div>
            <div className="flex  flex-col pt-2">
              <h1 className="text-2xl font-gilroySemiBold md:text-xl xl:text-2xl">
                Blog title
              </h1>
              <p className="text-sm font-gilroyMedium leading-5 md:leading-4  xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et lacinia mi.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center justify-center">
                {" "}
                <RightArrow className="w-8 md:w-7 xl:w-10" />
                <h1 className="text-xs font-gilroySemiBold whitespace-nowrap xl:text-base">
                  Read more
                </h1>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <span className="text-xs whitespace-nowrap font-gilroyMedium xl:text-sm">
                  Oct 9, 2024
                </span>{" "}
                <DateDash />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
