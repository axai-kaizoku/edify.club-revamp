import { Minus, Plus } from "lucide-react"
import React from "react"

const ProductSection = () => {
  const products = [1, 2, 3]
  return (
    <>
      {products.map((product, index) => (
        <React.Fragment key={index}>
          {/* MOBILE VIEW  */}

          
          <section className="flex flex-col sm:hidden" key={index}>
            <div className="flex flex-row gap-2">
              <div className="bg-[#F7F8FA] py-5 px-1 rounded-[6px]">
                <img
                  src="/media/product-img/dell1.png"
                  alt="Product"
                  width={79}
                  height={79}
                />
              </div>
              <div className="flex flex-col justify-between flex-grow py-0.5">
                <p className="text-lg tracking-[-0.4px] font-gilroySemiBold">
                  Dell Inspiron 2024{" "}
                </p>
                <p className="text-sm font-gilroyMedium text-[#AFAFAF] flex gap-1">
                  <span>128GB</span>
                  {" . "}
                  <span>16GB</span>
                  {" . "}
                  <span>i5 5th Gen</span>
                </p>

                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="flex items-center border border-[#A2A3B1] rounded-[9px] px-3 py-1 gap-5">
                      <Minus />
                      <span>1</span>
                      <Plus />
                    </div>
                  </div>
                  <h1 className="text-black font-gilroyBold text-lg">
                    $146.00
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* WEB VIEW */}

          <section
            className="flex bg-white px-4 py-3 rounded-2xl gap-5 w-[78%] max-sm:hidden"
            key={product}
          >
            <div className="bg-[#F7F8FA] rounded-[8.59px] px-2 py-3 flex justify-center items-center">
              <img
                src="/media/product-img/dell1.png"
                alt="Product"
                width={113}
                height={75}
              />
            </div>

            <div className="flex flex-col w-full justify-around">
              <p className="flex justify-between items-center">
                <span className="text-black 2xl:text-lg text-base font-gilroySemiBold">
                  Dell Inspiron 2024
                </span>
                <span className="flex gap-1 items-center leading-[23.887px]">
                  <span className="text-[#C5C5C5] text-base font-gilroySemiBold">
                    1x
                  </span>
                  <span className="2xl:text-xl text-lg text-black font-gilroySemiBold">
                    $146.00
                  </span>
                </span>
              </p>

              <p className="w-full relative flex items-start">
                <span className="text-[#AFAFAF] font-gilroyMedium text-xs leading-[23.87px]">
                  Black
                </span>
                <span className="text-xs absolute right-0 font-gilroySemiBold text-[#2E8016] px-3 py-1.5 mt-1 rounded-[13.92px] bg-[#E0F9E7]">
                  In-Stock
                </span>
              </p>

              <p className="text-xs font-gilroyMedium text-[#AFAFAF] flex gap-1">
                <span>128GB</span>
                {" . "}
                <span>16GB</span>
                {" . "}
                <span>i5 5th Gen</span>
              </p>

              <div className="w-fit mt-2">
                <div className="flex items-center border border-[#A2A3B1] rounded-[2.592px] px-3 py-1 gap-5">
                  <Minus className="cursor-pointer"/>
                  <span className="font-gilroySemiBold text-[#17183B]">1</span>
                  <Plus className="cursor-pointer"/>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ))}
    </>
  )
}

export default ProductSection
