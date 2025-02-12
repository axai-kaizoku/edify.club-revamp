"use client"
import CartIcons from "@/app/cart/_component/icons"
import StoreProductIcons from "@/app/products/[id]/_components/store-icons"
import { Container } from "@/components/common/container"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import AddressIcons from "./icons"
import Drawer from "@/components/ui/bottom-drawer"
import { Input } from "@/components/ui/input"
import { IndianFlag } from "@/app/profile/_components/icons"
import NewAddressForm from "./new-address-form"

const AddressMain = () => {
  const router = useRouter()
  const [selected, setSelected] = useState("option1")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const options = [
    {
      id: "option1",
      title: "Home",
      address: "925 S Chugach St #APT 10, Alaska 99645",
    },
    {
      id: "option2",
      title: "Office",
      address: "925 S Chugach St #APT 10, Alaska 99645",
    },
    {
      id: "option3",
      title: "office",
      address: "925 S Chugach St #APT 10, Alaska 99645",
    },
    {
      id: "option4",
      title: "Main Office",
      address: "925 S Chugach St #APT 10, Alaska 99645",
    },
    {
      id: "option5",
      title: "Office",
      address: "925 S Chugach St #APT 10, Alaska 99645",
    },
  ]
  return (
    <>
      <Container className="flex flex-col my-2 gap-6 sm:hidden">
        <div className="flex items-center">
          <CartIcons.back_icon
            className="cursor-pointer"
            onClick={() => {
              router.back()
            }}
          />
          <p className="font-gilroySemiBold text-xl flex-grow text-center pr-9 text-black">
            Address
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          {options.map((option) => (
            <label key={option.id} className="relative cursor-pointer">
              <input
                type="radio"
                name="radioOptions"
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="hidden"
              />
              <div
                className={`py-2 pl-2 border rounded-[10px] gap-3 flex items-center transition-all ${
                  selected === option.id
                    ? "border-black"
                    : "border-[#C7C7C7] bg-white"
                }`}
              >
                {selected === option.id ? (
                  <CartIcons.map_selected_icon />
                ) : (
                  <img src="/media/map.webp" alt="map" />
                )}

                <div className="flex flex-col justify-around">
                  <p className="text-sm text-[#1A1A1A] font-gilroySemiBold">
                    {option.title}
                  </p>
                  <p className="text-sm text-[#808080]">
                    {option.address.substring(0, 29)}...
                  </p>
                </div>

                <AddressIcons.edit_icon className="cursor-pointer" />
              </div>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setIsDrawerOpen(true)
          }}
          className="bg-white text-black border-[1.5px] border-black text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] -mt-1 mb-2"
        >
          Add Address
        </button>

        {isDrawerOpen && (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            title="Add Address"
          >
            <NewAddressForm setIsDrawerOpen={setIsDrawerOpen} />
          </Drawer>
        )}

        <div className="flex-grow"></div>

        <div className="gap-[12px] flex flex-col">
          <p className="text-xs font-gilroySemiBold text-center">
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
            className="bg-black text-white text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] "
          >
            Proceed
          </button>
        </div>
      </Container>
    </>
  )
}

export default AddressMain
