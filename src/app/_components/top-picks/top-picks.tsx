"use client"
import { ArrowRight, Cart, HeartIcon } from "@/components/common/icons"
import { ChevronLeft, ChevronRight } from "../img-comparison/icons"
import { productsMockData } from "../best-sellers/best-sellers"
import { ProductCard } from "@/components/common/product-card"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const TopPicks = () => {
  const specs = [
    { key: "Brand", value: "Dell" },
    { key: "Ram", value: "GDDR6" },
    { key: "Processor", value: "AMD Ryzen 5" },
    { key: "Storage", value: "512 GB" },
  ]

  const madeFor = ["Excellent", "For Frontend"]

  const device_name = "Dell Inspiron 16"

  const modifiedData = productsMockData.map(({ description, ...rest }) => rest)

  const data = {
    image: [
      "/media/product-img/dell3.png",
      "/media/product-img/dell2.png",
      "/media/product-img/dell1.png",
    ],
  }

  const [currentIdx, setCurrentIdx] = useState(0)
  const deviceImages =
    data?.image && data?.image.length === 3
      ? data?.image
      : [
          "/media/product-img/dell3.png",
          "/media/product-img/dell2.png",
          "/media/product-img/dell1.png",
        ]

  const handlePrev = () => {
    setCurrentIdx((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : deviceImages!.length - 1
    )
  }

  const handleNext = () => {
    setCurrentIdx((prevIndex) =>
      prevIndex < deviceImages!.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <section className="w-screen bg-[#F7F7F7] -mx-11">
      <section className="bg-[#F7F7F7] w-full min-h-[40vh] hidden lg:flex justify-center items-center ">
        <div className="w-[92%] sm:w-[90%] h-full lg:h-auto  mt-[6%] mb-[8%] lg:mb-[3%] flex flex-row items-center justify-between ">
          <div className="w-[55%] h-full flex flex-col gap-4">
            <span className="text-[#C7C7C7] font-gilroySemiBold ">
              Top Picks
            </span>

            <h2 className="font-orange text-4xl">{device_name}</h2>

            <div className="flex justify-start items-center gap-x-4">
              {madeFor.map((val) => (
                <span
                  key={val}
                  className="border border-[#EFEFEF] bg-white px-2 lg:px-3 py-0 lg:py-0.5 rounded-3xl flex justify-center items-center text-xs lg:text-sm font-gilroyMedium"
                >
                  {val}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-y-2 my-4">
              {specs.map((spec) => (
                <div key={spec.key} className="flex gap-x-1 font-gilroyMedium">
                  <span className="text-[#5E5E5E]">{`${spec.key}: `}</span>
                  <span className="text-black">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-x-2.5">
              <div className="hidden lg:flex h-fit w-fit bg-black cursor-pointer text-white font-gilroyMedium whitespace-nowrap text-sm justify-center px-3.5 py-3 items-center rounded-3xl gap-x-1">
                <Cart className="size-5" />
                Add to cart
              </div>

              <div className="bg-black cursor-pointer text-white rounded-full size-11 flex items-center justify-center">
                <ArrowRight />
              </div>

              <div className="bg-black cursor-pointer text-white rounded-full size-11 flex items-center justify-center">
                <HeartIcon className="size-6" />
              </div>
            </div>

            <div className="flex gap-x-6 mt-3 -ml-4">
              {[...modifiedData, modifiedData[0]].map((prod, i) => (
                <ProductCard
                  key={`${prod.device_name}-${i}`}
                  product={prod}
                  imgBgColor="white"
                />
              ))}
            </div>
          </div>
          <div className="w-[45%] h-[90dvh] flex flex-col justify-between">
            <div className=" h-[85%] w-full flex justify-center items-center">
              {/* <div className="bg-slate-300 object-contain h-full w-52" /> */}
              <img
                src={deviceImages[currentIdx] ?? ""}
                alt={device_name}
                width={400}
                height={800}
                className="object-contain select-none"
              />
            </div>

            <div className="flex w-full justify-end">
              <div className="flex items-center gap-x-6">
                <button
                  disabled={currentIdx === 0}
                  className={cn(
                    "cursor-pointer disabled:cursor-not-allowed text-white rounded-full lg:size-10 flex items-center justify-center",
                    currentIdx === 0 ? "bg-[#E2E2E2]" : "bg-black"
                  )}
                  onClick={handlePrev}
                >
                  <ChevronLeft color="white" />
                </button>

                <button
                  disabled={currentIdx === deviceImages.length - 1}
                  className={cn(
                    " cursor-pointer disabled:cursor-not-allowed text-white rounded-full lg:size-10 flex items-center justify-center",
                    currentIdx === deviceImages.length - 1
                      ? "bg-[#E2E2E2]"
                      : "bg-black"
                  )}
                  onClick={handleNext}
                >
                  <ChevronRight color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
