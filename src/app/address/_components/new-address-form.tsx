import { IndianFlag } from "@/app/profile/_components/icons"
import { Input } from "@/components/ui/input"
import React from "react"

interface AddressForm {
    setIsDrawerOpen:(val:boolean) => void;
}

const NewAddressForm = ({setIsDrawerOpen}:AddressForm) => {
  return (
    <>
      <section className="mt-2 px-2 flex flex-col gap-3 sm:hidden">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-base text-[#1A1A1A] font-gilroyMedium"
            >
              Name
            </label>
            <Input
              placeholder="Enter name"
              type="text"
              name="name"
              id="name"
              required={true}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="address"
              className="text-base text-[#1A1A1A] font-gilroyMedium"
            >
              Full Address
            </label>
            <Input
              placeholder="Enter your full address..."
              type="text"
              name="address"
              id="address"
              required={true}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="zip"
              className="text-base text-[#1A1A1A] font-gilroyMedium"
            >
              Zip Code
            </label>
            <Input
              placeholder="Enter your zip code..."
              type="text"
              name="zip"
              id="zip"
              required={true}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-base text-[#1A1A1A] font-gilroyMedium leading-[22.4px]"
            >
              Phone number
            </label>
            <div className="flex items-center border border-[#E6E6E6] px-4 py-1.5 rounded-[10px] gap-5">
              <IndianFlag />

              <input
                type="number"
                maxLength={10}
                className="placeholder:text-[#818EA1] placeholder:text-xs placeholder:leading-normal -mt-1 placeholder:py-0 w-full focus:border-none focus:outline-none"
                placeholder="Enter phone number..."
              />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="default_address"
              id="default_address"
              className="rounded-[6px] border border-[#CCCCCC] size-4"
            />
            <label
              htmlFor="default_address"
              className="text-sm text-[#808080] font-gilroyMedium"
            >
              Make this as a default address
            </label>
          </div>
        </form>

        <button
          type="button"
          onClick={() => {
            setIsDrawerOpen(false)
          }}
          className="bg-black text-white text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] "
        >
          Proceed
        </button>
      </section>
    </>
  )
}

export default NewAddressForm
