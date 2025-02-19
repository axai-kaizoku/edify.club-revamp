"use client"
import CartIcons from "@/app/cart/_component/icons"
import StoreProductIcons from "@/app/products/[id]/_components/store-icons"
import { Container } from "@/components/common/container"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import AddressIcons from "./icons"
import Drawer from "@/components/ui/bottom-drawer"
import NewAddressForm from "./new-address-form"
import { CouponsModal } from "@/app/cart/_component/coupon-modal"
import { coupons } from "@/app/cart/_component/utils"
import { CouponCard } from "@/app/cart/_component/coupon-card"
import ProductSection from "@/app/cart/_component/product-section"
import AllAddresses from "./all-address"
import { AddressOptions } from "./utils"

const AddressMain = () => {
  const router = useRouter()
  const [selected, setSelected] = useState("option1")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [page, setPage] = useState(1);
  const [selectedCoupon, setSelectedCoupon] = React.useState<string | null>(
    null
  )

  function handleCouponSelect(code: string): void {
    setSelectedCoupon(code)
  }

  const [formData, setFormData] = useState({
      fullName:"",
      email:"",
      phone: "",
      country:"",
      state:"",
      city:"",
      zip:"",
      terms:false
    });
  
    const [errors, setErrors] = useState({
      fullName: "",
      phone: "",
      email: "",
      country: "",
      state: "",
      zip: "",
      city: "",
      terms: "",
    });
  
    const validateForm = () => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^[0-9]{10}$/;
  
      const newErrors = {
        fullName: formData.fullName ? "" : "Name is required",
        country: formData.country ? "" : "Country name is required",
        terms: formData.terms ? "" : "You need to accept the Terms and Condition",
        state: formData.state ? "" : "State is required",
        city: formData.city ? "" : "City name is required",
        zip: formData.zip ? "" : "Zip is required",
        email: formData.email
          ? emailRegex.test(formData.email)
            ? ""
            : "Invalid email format"
          : "Email is required",
        phone: formData.phone
          ? phoneRegex.test(formData.phone)
            ? ""
            : "Phone number must be 10 digits"
          : "Phone number is required",
      };
  
      setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  
      return !Object.values(newErrors).some((err) => err);
    };

    const handleSubmit = ()=>{
      validateForm();
    }

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
          {AddressOptions.map((option) => (
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
            <NewAddressForm setIsDrawerOpen={setIsDrawerOpen} formData={formData} errors={errors} setFormData={setFormData} />
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

      {/* Web View */}

      <section className="flex max-sm:hidden h-full">
        {/* LEFT SECTION */}
        <div className="md:w-[50%] sm:w-[50%] lg:w-[55%] bg-white h-full">
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex gap-4 items-center lg:mx-10 md:mx-4 sm:mx-4 max-sm:hidden">
              <CartIcons.laptop_back_icon
                className="cursor-pointer"
                onClick={() => {
                  if (page > 1){
                    setPage((prev)=> (prev-1));
                  }
                  else{
                    router.back();
                  }
                }}
              />
              <div className="font-gilroySemiBold text-black text-2xl 2xl:text-3xl">
                Address
                <span className="text-sm 2xl:text-base text-[#A2A3B1] font-gilroySemiBold ml-2"></span>
              </div>
            </div>
            {/* Content */}

            {page === 1 ? (
              <AllAddresses
                selected={selected}
                setSelected={setSelected}
                setPage={setPage}
              />
            ) : (
              <NewAddressForm setIsDrawerOpen={setIsDrawerOpen} errors={errors} formData={formData} setFormData={setFormData}/>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="md:w-[50%] sm:w-[50%] lg:w-[45%] bg-[#F7F8FA] flex justify-center">
          <div className="2xl:w-[75.2%] xl:w-[80%] lg:w-[85%] md:w-[90%] sm:w-[92%] flex flex-col h-fit mt-8 p-5 gap-4">
            <h1 className="text-lg font-gilroySemiBold leading-[18.191px] tracking-[0.091px]">
              Product Information & Review
            </h1>

            <section className="w-full flex flex-col gap-3 pt-1">
              <ProductSection />
            </section>

            <div className="flex flex-col gap-6">
              <div className="flex items-center border border-[#DBDDE3] rounded-[8px] bg-white overflow-hidden px-4 gap-2 py-3">
                <p>
                  <CartIcons.coupon_black_icon />
                </p>
                <input
                  className="outline-none border-none placeholder:text-black placeholder:font-gilroyRegular text-black flex-grow"
                  placeholder="Discount Code"
                />
                <CouponsModal
                  triggerLabel={
                    <span className="text-base text-[#B6B6B6] font-gilroySemiBold cursor-pointer">
                      Apply
                    </span>
                  }
                  content={
                    <div className="flex flex-col gap-4">
                      {coupons.map((coupon, index) => (
                        <CouponCard
                          coupon={coupon}
                          key={index}
                          selected={selectedCoupon === coupon?.code}
                          onClick={() => handleCouponSelect(coupon?.code)}
                        />
                      ))}
                    </div>
                  }
                  onApply={() => {}}
                  selectedCouponCode={selectedCoupon || ""}
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="flex justify-between items-center">
                  <span className="text-sm font-gilroyRegular leading-normal text-[#818EA1]">
                    Subtotal
                  </span>
                  <span className="text-sm leading-normal font-gilroySemiBold">
                    $45.00
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-gilroyRegular leading-normal text-[#818EA1]">
                    Discount
                  </span>
                  <span className="text-sm leading-normal font-gilroySemiBold">
                    -$10.00
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-gilroyRegular leading-normal text-[#818EA1]">
                    Shipping
                  </span>
                  <span className="text-sm leading-normal font-gilroySemiBold">
                    $5.00
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-base font-gilroySemiBold leading-normal text-black">
                    Total
                  </span>
                  <span className="text-sm leading-normal font-gilroySemiBold">
                    $40.00
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="bg-black text-white text-sm font-gilroySemiBold text-center py-3 tracking-[0.091px] rounded-[8px] mt-6"
            >
              Pay Now
            </button>

            <p className="flex gap-2">
              <AddressIcons.lock_icon />
              <span className="text-black text-base font-gilroySemiBold">
                100% Secured Payments
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddressMain
