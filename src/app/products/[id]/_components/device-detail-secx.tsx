"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export const DeviceDetailedSecx = ({ data }: { data: any }) => {
  const [viewMore, setViewMore] = useState(false)
  const [viewFeat, setViewFeat] = useState(1)

  const mockFeatures = [
    {
      title: "Display",
      features: [
        {
          title: "Screen diagonal",
          value: '14"',
        },
        {
          title: "The screen resolution",
          value: "1920x1080",
        },
        {
          title: "The screen refresh rate",
          value: "120 Hz",
        },
        {
          title: "Screen type",
          value: "IPS",
        },
      ],
    },
    {
      title: "CPU",
      features: [
        {
          title: "CPU",
          value: "AMD Ryzen 5 5600U",
        },
        {
          title: "Number of cores",
          value: "6",
        },
      ],
    },
  ]

  const deviceFeatures =
    data?.deviceFeatures && data.deviceFeatures.length !== 0
      ? data?.deviceFeatures
      : mockFeatures

  useEffect(() => {
    // Set viewFeat based on the number of device features
    setViewFeat(deviceFeatures.length! > 1 ? 1 : deviceFeatures.length!)
  }, [data])

  const handleViewMore = () => {
    setViewMore(!viewMore)
    // If viewMore is true, show all features; otherwise, show only one
    setViewFeat(viewMore ? 1 : deviceFeatures.length!)
  }

  return (
    <section className="flex lg:px-32 flex-col py-8">
      <h1 className="sm:text-4xl text-xl font-orange text-center pb-4">
        Specification
      </h1>
      <div className="flex items-center justify-between sm:pt-8 sm:pb-4 gap-8 lg:gap-0 overflow-x-auto lg:overflow-hidden lg:mx-20  xl:mx-40">
        <h1 className="text-white gap-3 flex text-nowrap justify-center font-gilroySemiBold w-fit items-center bg-black text-base rounded py-2 px-4">
          Product Description <ChevronDown className="size-4 " />
        </h1>
        <h1 className="text-white gap-3 flex text-nowrap justify-center font-gilroySemiBold w-fit items-center bg-black text-base rounded py-2 px-4">
          Technical Specs <ChevronDown className="size-4 " />
        </h1>
        <h1 className="text-white gap-3 flex text-nowrap justify-center font-gilroySemiBold w-fit items-center bg-black text-base rounded py-2 px-4">
          Additional Details <ChevronDown className="size-4 " />
        </h1>
      </div>
      <div className="bg-gray-200 hidden lg:flex  h-[1px] sm:mx-0 lg:mx-10 xl:mx-20"></div>
      <h1 className="sm:text-2xl text-xl font-orange text-center py-4">
        Details
      </h1>
      <p className="text-pretty py-3.5 px-8 sm:px-0 font-gilroySemiBold text-[#9D9D9D] text-sm 2xl:text-base">
        {data?.description ??
          "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many."}
      </p>
      {deviceFeatures.slice(0, viewFeat).map((feat) => (
        <div key={feat?.title}>
          <h3 className="text-xl 2xl:text-2xl text-center font-orange pt-4 pb-3 ">
            {feat?.title}
          </h3>
          {feat?.features?.map((v) => (
            <div key={v.title} className="pt-1 pb-3 px-8">
              <div className="flex items-center font-gilroyMedium justify-between">
                <span>{v.title}</span>
                <span className="text-sm">{v.value}</span>
              </div>
              <div className="h-[1px] sm:my-2 my-1 w-full bg-[#CDCDCD]" />
            </div>
          ))}
        </div>
      ))}

      {deviceFeatures.length! > 1 && (
        <div className="flex items-center justify-center py-4">
          <button
            onClick={handleViewMore}
            className="w-fit group  p-2 sm:px-4 px-2 border border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center gap-1.5 rounded-md "
          >
            {viewMore ? (
              <>
                <span className="font-gilroySemiBold text-sm pr-1">
                  View Less
                </span>
                <ChevronUp className="text-black group-hover:text-white size-4 sm:size-6" />
              </>
            ) : (
              <>
                <span className="font-gilroySemiBold text-sm">View More</span>
                <ChevronDown className="text-black group-hover:text-white size-4 sm:size-6" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
