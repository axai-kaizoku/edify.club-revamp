'use client'
import { Container } from "@/components/common/container"
import React from "react"
import CartIcons from "./icons"
import ProductSection from "./product-section"
import { useRouter } from "next/navigation"

const CartMain = () => {
  const router = useRouter();
  return (
    <>
      <Container className="flex flex-col mt-2 gap-6">
        <div className="flex items-center">
          <CartIcons.back_icon />
          <p className="font-gilroySemiBold text-xl flex-grow text-center pr-9 text-black">
            Cart
          </p>
        </div>

        <ProductSection />

        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center border border-[#DBDDE3] rounded-2xl overflow-hidden px-4 gap-2 py-3">
            <CartIcons.coupon_icon />
            <input
              className="outline-none border-none flex-grow"
              placeholder="Discount Code"
            />
            <span className="text-base text-[#B6B6B6] font-gilroySemiBold cursor-pointer">
              Apply
            </span>
          </div>

          <div className="flex flex-col gap-[14px] px-4">
            <div className="flex justify-between items-center text-base font-gilroyMedium">
              <span>Price</span>
              <span>$319.98</span>
            </div>

            <div className="flex justify-between items-center text-base font-gilroyMedium">
              <span>Shipping</span>
              <span className="text-[#2E8016]">Free</span>
            </div>

            <div className="h-[1px] bg-[#EDEDED]"></div>

            <div className="flex justify-between items-center text-base font-gilroyMedium">
              <span>TOTAL</span>
              <span className="font-gilroyBold tracking-[0.1px] text-[#17183B]">$288.08</span>
            </div>

          </div>
        </div>

        <button type="button" onClick={()=>{router.push('/cart/checkout')}} className="bg-black text-white text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] -mt-2 mb-2">CheckOut</button>
      </Container>
    </>
  )
}

export default CartMain
