"use client"
import { Container } from "@/components/common/container"
import React, { useEffect, useRef, useState } from "react"
import CartIcons from "../../_component/icons"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"
import StoreProductIcons from "@/app/products/[id]/_components/store-icons"
import { motion } from "framer-motion"
import Drawer from "@/components/ui/bottom-drawer"

const CheckoutMain = () => {
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // const [drawerHeight, setDrawerHeight] = useState(0)
  // const drawerRef = useRef<HTMLDivElement | null>(null)

  // Get content height dynamically
  // useEffect(() => {
  //   if (drawerRef.current) {
  //     setDrawerHeight(drawerRef.current.scrollHeight)
  //   }
  // }, [isDrawerOpen])

  return (
    <Container className="flex flex-col mt-2 gap-6 z-10">
      {/* onClick={()=>{ isDrawerOpen === true && setIsDrawerOpen(false)}} */}
      <div className="flex items-center">
        <CartIcons.back_icon
          className="cursor-pointer"
          onClick={() => {
            router.back()
          }}
        />
        <p className="font-gilroySemiBold text-xl flex-grow text-center pr-9 text-black">
          Checkout
        </p>
      </div>

      <div className="flex flex-col gap-[15px] px-1">
        {/* Delivery Address section hai ye */}

        <p className="flex justify-between items-center">
          <span className="text-[#1A1A1A] text-base font-gilroySemiBold">
            Delivery Address
          </span>
          <span
            className="text-sm font-gilroyMedium underline"
            onClick={() => {
              router.push("/address")
            }}
          >
            Change
          </span>
        </p>

        <div className="flex gap-3">
          <CartIcons.map_selected_icon />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-gilroySemiBold">Home</p>
            <p className="text-sm font-gilroyMedium text-[#808080] text-nowrap">
              925 S Chugach St #APT 10, Alaska 99645
            </p>
          </div>
        </div>

        {/* Seperator */}
        <div className="h-[1px] bg-[#E6E6E6]"></div>

        {/* Cart Preview */}

        <p className="flex justify-between items-center">
          <span className="text-[#1A1A1A] text-base font-gilroySemiBold">
            My Cart
          </span>
          <ChevronRight
            className="size-5 mr-2"
            onClick={() => {
              router.push("/cart")
            }}
          />
        </p>

        <div className="flex gap-1">
          {[1, 2].map((index) => (
            <section className="flex flex-col" key={index}>
              <div className="flex flex-row gap-2">
                <div className="bg-[#F7F8FA] py-3 px-1 rounded-[6px]">
                  <img
                    src="/media/product-img/dell1.png"
                    alt="Product"
                    width={53}
                    height={36}
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow py-0.5">
                  <p className="text-xs tracking-[-0.4px] font-gilroySemiBold">
                    Dell Inspiron 2024{" "}
                  </p>
                  <p className="text-[8px] font-gilroyMedium text-[#AFAFAF] flex flex-nowrap">
                    <span>128GB</span>
                    {" . "}
                    <span>16GB</span>
                    {" . "}
                    <span>i5 5th Gen</span>
                  </p>

                  <h1 className="text-black font-gilroyBold text-sm">
                    $146.00
                  </h1>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="flex justify-between pl-4 py-3 pr-2 bg-[#F8F8F8] rounded-[7px]">
          <span className="text-base font-gilroySemiBold text-[#1A1A1A]">
            Offers
          </span>
          <ChevronRight
            className="size-5"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Bottom Drawer */}
      {isDrawerOpen && (
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Bank offers"
        >
          <ul className="mt-2 flex flex-col gap-3">
            {[1, 2, 3, 4].map((index) => (
              <li key={index} className="bg-[#F7F7F7] rounded-lg p-3 px-4">
                <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex items-center">
                  3 months EMI options with{" "}
                  <StoreProductIcons.snap_mint className="pl-2" />
                </h1>
                <p className="text-xs text-nowrap text-[#B2B2B2] font-gilroyMedium">
                  Credit Card not required, Online approval in 2 minutes
                </p>
              </li>
            ))}
          </ul>
        </Drawer>
      )}

      {!isDrawerOpen && (
        // <motion.div
        //   initial={{ y: "100%" }}
        //   animate={{ y: 0 }}
        //   exit={{ y: "100%" }}
        //   transition={{ type: "spring", stiffness: 100, damping: 15 }}
        //   drag="y"
        //   dragConstraints={{ top: 0, bottom: 200 }}
        //   onDragEnd={(event, info) => {
        //     if (info.point.y > 600) setIsDrawerOpen(false)
        //   }}
        //   className="fixed bottom-0 left-0 w-full z-50 bg-white rounded-t-[30px] pb-2 shadow-2xl shadow-slate-700"
        //   style={{ height: `${drawerHeight}px` }} // Dynamic height
        //   ref={drawerRef}
        // >
        //   {/* Drag Handle */}
        //   <div className="flex justify-center pt-4 pb-3">
        //     <div className="w-10 h-1 bg-[#858585] rounded-full"></div>
        //   </div>

        //   {/* Drawer Content */}
        //   <div className="w-full px-4">
        //     <p className="text-black text-lg text-center font-gilroySemiBold">
        //       Bank offers
        //     </p>
        //     <ul className="mt-2 flex flex-col gap-3">
        //       {[1, 2, 3, 4].map((index) => (
        //         <li key={index} className="bg-[#F7F7F7] rounded-lg p-3 px-4">
        //           <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex items-center">
        //             3 months EMI options with{" "}
        //             <StoreProductIcons.snap_mint className="pl-2" />
        //           </h1>
        //           <p className="text-xs text-nowrap text-[#B2B2B2] font-gilroyMedium">
        //             Credit Card not required, Online approval in 2 minutes
        //           </p>
        //         </li>
        //       ))}
        //     </ul>
        //   </div>
        // </motion.div>
      // )}
      <div className="max-sm:hidden"></div>
      )}

      <div className="flex flex-col px-1 gap-[12px] -mt-1">
        <p className="text-[#1A1A1A] text-base font-gilroySemiBold">Summary</p>

        <div className="flex justify-between items-center text-base font-gilroyMedium">
          <span>Price</span>
          <span>$319.98</span>
        </div>

        <div className="flex justify-between items-center text-base font-gilroyMedium">
          <span>Coupon Applied</span>
          <span className="text-[#2E8016]">$31.0</span>
        </div>

        <div className="flex justify-between items-center text-base font-gilroyMedium">
          <span>Shipping</span>
          <span className="text-[#2E8016]">Free</span>
        </div>

        <p className="text-base font-gilroySemiBold">
          <span className="font-gilroyBold text-[#2E8016]">FREE</span> Shipping
          by <span className="font-gilroyBold">Feburary 6-7</span>
        </p>

        <div className="h-[1px] bg-[#E6E6E6]"></div>

        <div className="flex justify-between items-center text-base font-gilroyMedium">
          <span>TOTAL</span>
          <span className="font-gilroyBold tracking-[0.1px] text-[#17183B]">
            $288.08
          </span>
        </div>

        <p className="text-xs font-gilroySemiBold text-center mt-1">
          100% Secure Payments
        </p>
        <div className="flex mx-auto -mt-2">
          <StoreProductIcons.visa />
          <StoreProductIcons.google_pay />
          <StoreProductIcons.apple_pay />
          <StoreProductIcons.mastercard />
          <StoreProductIcons.amex />
        </div>

        <button
          type="button"
          onClick={() => {
            router.push("/cart/checkout")
          }}
          className="bg-black text-white text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] -mt-1 mb-2"
        >
          Pay Now
        </button>
      </div>

    </Container>
  )
}

export default CheckoutMain
