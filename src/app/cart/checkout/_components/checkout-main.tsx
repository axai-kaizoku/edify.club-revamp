"use client"
import { Container } from "@/components/common/container"
import React from "react"
import CartIcons from "../../_component/icons"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

const CheckoutMain = () => {
  const router = useRouter()
  return (
    <Container className="flex flex-col mt-2 gap-6">
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
          <span className="text-sm font-gilroyMedium underline">Change</span>
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
          <ChevronRight className="size-5" onClick={() => {}} />
        </div>
      </div>

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

        <p className="text-xs font-gilroySemiBold text-center mt-1">100% Secure Payments</p>
      </div>


    </Container>
  )
}

export default CheckoutMain
