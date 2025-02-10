import React from "react"
import OrderIcons from "./icons"
import OrderItem from "./order-item"
import { ChevronLeft, Mail, Phone } from "lucide-react"
import { Container } from "@/components/common/container"
import OrderProgressBar from "./order-progress-bar"

const OrdersMain = () => {
  return (
    <>
      <Container className="sm:hidden">
        <section className="flex flex-col gap-3 mb-2">
          <div className="rounded-[14px] border border-[#DEDEDE] flex flex-col gap-7 px-3 py-7">
            <div className="text-[#344054] text-2xl font-gilroySemiBold text-center">
              Order ID: 3354
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 mx-auto items-center">
                <span className="text-sm text-[#667085] font-gilroyRegular">
                  Order date:
                </span>
                <span className="text-[#1D2939] text-base font-gilroySemiBold">
                  Feb 16, 2022
                </span>
              </div>

              <div className="flex gap-2 items-center mx-auto">
                <OrderIcons.truck_icon />
                <span className="text-base text-[#12B76A] font-gilroySemiBold">
                  Estimated delivery: May 16, 2022
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 rounded-[10px] bg-[#E7F3EB] py-2">
              <p className="text-lg font-gilroyMedium text-[#12B76A] text-center">
                Order Confirmed
              </p>
              <p className="text-center text-base text-[#667085] font-gilroyRegular">
                Wed, 1 lth Jan
              </p>
            </div>
            <div className="h-[1px] bg-[#D0D5DD]"></div>
            <div className="flex flex-col gap-7">
              <OrderItem />
              <OrderItem />
            </div>
          </div>
          <div className="rounded-[14px] border border-[#DEDEDE] flex flex-col px-5 py-4 gap-3">
            <div className="text-[#475467] font-gilroyMedium text-lg flex justify-between items-center">
              <span>Discount</span>
              <span>$5554</span>
            </div>
            <div className="text-[#667085] text-base font-gilroyMedium flex justify-between items-center">
              <span>Discount</span>
              <span>(20%) - $1109.40</span>
            </div>
            <div className="text-base font-gilroyMedium flex justify-between items-center">
              <span className="text-[#667085]">Delivery</span>
              <span className="text-[#2E8016]">$0.00</span>
            </div>
            <div className="text-base text-[#667085] font-gilroyMedium flex justify-between items-center">
              <span>Tax</span>
              <span>+$221.88</span>
            </div>

            <div className="flex justify-between pt-4 pb-3 border-y-[1px] border-dashed border-[#D0D5DD] items-center">
              <span className="text-[#667085] text-lg font-gilroyMedium">
                Total
              </span>
              <span className="text-[#1D2939] text-lg font-gilroyBold">
                $0.00
              </span>
            </div>

            <div className="text-base flex justify-between items-center">
              <span className="text-black text-lg font-gilroyMedium">
                Payment
              </span>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-[#667085] font-gilroyRegular">
                  Visa **56
                </span>
                <OrderIcons.visa_icon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="bg-[#7161EF] py-3 rounded-[8px] flex gap-2 items-center justify-center"
            >
              <span className="text-white font-gilroySemiBold text-sm leading-[20px]">
                Track order
              </span>
              <OrderIcons.location_icon />
            </button>

            <button
              type="button"
              className="border border-[#D0D5DD] py-3 rounded-[8px] flex gap-2 items-center justify-center"
            >
              <OrderIcons.document_icon />
              <span className="text-[#667085] font-gilroySemiBold text-sm leading-[20px]">
                Invoice
              </span>
            </button>
          </div>

          <div className="flex flex-col border border-[#DEDEDE] px-5 py-4 rounded-[14px] w-full">
            <div className="text-black font-gilroySemiBold text-xl mb-4">
              Shipping Address
            </div>
            <div className="flex gap-2 items-center mb-5">
              <OrderIcons.person_icon />
              <span className="text-lg text-[#667085] font-gilroyMedium">
                Lalitya Sahu
              </span>
            </div>
            <div className="text-lg text-[#667085] font-gilroyMedium w-[80%]">
              2nd Floor, SRS Arcade, 15/2 Hosa Rd, Kasavanahalli, Bengaluru,
              Karnataka 560035 Phone: (+91) 7470873515
            </div>
          </div>
        </section>
      </Container>

      <div className="flex flex-col gap-5 mt-6">
        <div className="flex gap-4 items-center lg:mx-16 md:mx-8 sm:mx-4 max-sm:hidden">
            <OrderIcons.back_icon className="cursor-pointer"/>
            <div className="font-gilroySemiBold text-black text-xl 2xl:text-2xl">Order Details</div>
        </div>

      <section className="flex justify-between gap-6 h-full lg:mx-16 md:mx-8 sm:mx-4 max-sm:hidden">
        {/* LEFT SECTION */}
        <div className="bg-white rounded-[14px] border border-[#DEDEDE] flex flex-col gap-7 py-4 px-6 2xl:py-5 2xl:px-7 flex-[65%] h-fit">
          <div className="flex justify-between items-center">
            <div className="text-[#344054] text-xl 2xl:text-[30px] font-gilroySemiBold">
              Order ID: 3354654654526
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 text-[#667085] text-xs 2xl:text-sm  px-3 py-2 2xl:px-4 2xl:py-2 rounded-[8px] border border-[#D0D5DD] font-gilroySemiBold flex-nowrap">
                <OrderIcons.document_icon />
                <div className="font-gilroySemiBold">Invoice</div>
              </button>

              <button className="flex justify-center items-center gap-2 text-white text-xs 2xl:text-sm  px-3 py-2 2xl:px-4 2xl:py-2 rounded-[8px] bg-[#7161EF] font-gilroySemiBold flex-nowrap">
                <div className="font-gilroySemiBold text-nowrap">Track order</div>
                <OrderIcons.location_icon />
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div>
              <span className="font-gilroyMedium text-[13px] 2xl:text-[14px] text-[#667085]">
                Order date:
              </span>{" "}
              <span className="font-gilroySemiBold text-[15px] 2xl:text-base text-[#1D2939]">
                Feb 16, 2024
              </span>
            </div>
            <div className="text-[#D0D5DD]">|</div>
            <div className="flex gap-2 items-center">
              <OrderIcons.truck_icon />
              <span className="text-base text-[#12B76A] font-gilroySemiBold">
                Estimated delivery: May 16, 2022
              </span>
            </div>
          </div>

          <OrderProgressBar status="Shipped"/>

          <div className="h-[1px] bg-[#D0D5DD] w-full mt-7"></div>

          <div className="flex flex-col gap-7 2xl:gap-8">
            <div className="flex justify-between">
              <div className="2xl:gap-6 gap-5 flex items-center">
                <div className="flex justify-center items-center rounded-[17px] bg-white 2xl:py-3 py-2 2xl:size-[78.87px] size-[74.87px] mx-auto">
                  <img
                    alt="laptop"
                    src={"/media/product-img/rectangle-laptop.png"}
                    className="2xl:width-[78.87px] width-[74.87px] 2xl:height-[78.87px] height-[74.87px]"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-black font-gilroyRegular text-xl 2xl:text-2xl -mb-0.5">
                    MackBook Pro 14’’
                  </div>
                  <div className="font-gilroyRegular text-[#667085] flex items-center gap-2 text-sm 2xl:text-base">
                    <span>Space Gray</span>
                    {" | "}
                    <span>32GB</span>
                    {" | "}
                    <span>1TB</span>
                  </div>
                </div>
              </div>

              <div className="2xl:mt-[11.44px] mt-[10.44px]">
                <div className="text-[#1D2939] text-lg 2xl:text-xl font-gilroySemiBold">
                  $1000.00
                </div>
                <div className="text-[#667085] text-[14px] 2xl:text-base font-gilroyMedium text-right">
                  Qty: 1
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="2xl:gap-6 gap-5 flex items-center">
                <div className="flex justify-center items-center rounded-[17px] border border-[#D0D5DD] bg-white 2xl:py-3 py-2 2xl:size-[78.87px] size-[74.87px] mx-auto">
                  <img
                    alt="laptop"
                    src={"/media/product-img/rectangle-laptop.png"}
                    className="2xl:width-[78.87px] width-[74.87px] 2xl:height-[78.87px] height-[74.87px]"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-black font-gilroyRegular text-xl 2xl:text-2xl -mb-0.5">
                    MackBook Pro 14’’
                  </div>
                  <div className="font-gilroyRegular text-[#667085] flex items-center gap-2 text-sm 2xl:text-base">
                    <span>Space Gray</span>
                    {" | "}
                    <span>32GB</span>
                    {" | "}
                    <span>1TB</span>
                  </div>
                </div>
              </div>

              <div className="2xl:mt-[11.44px] mt-[10.44px]">
                <div className="text-[#1D2939] text-lg 2xl:text-xl font-gilroySemiBold">
                  $1000.00
                </div>
                <div className="text-[#667085] text-[14px] 2xl:text-base font-gilroyMedium text-right">
                  Qty: 1
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#D0D5DD] w-full"></div>

          <div className="flex justify-between">
            <div className="flex-1 flex flex-col gap-9 2xl:gap-10">
              <div>
                <div className="2xl:text-xl text-lg text-black font-gilroySemiBold mb-1">
                  Payment
                </div>
                <div className="2xl:text-[14px] text-[13px] text-[#667085] items-center flex gap-3 font-gilroyRegular">
                  <div>Visa **56</div>
                  <OrderIcons.visa_icon />
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center 2xl:gap-5 gap-x-20 justify-end">
                <span className="text-[#667085] 2xl:text-xl text-lg font-gilroyMedium">Total</span>
                <span className="text-[#1D2939] 2xl:text-xl text-lg font-gilroyBold">$0.00</span>   
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-5 flex-[35%]">
          <div className="bg-white rounded-[14px] border border-[#DEDEDE] flex flex-col gap-[11px] 2xl:py-5 2xl:px-6 py-4 px-5">
            <div className="text-black font-gilroySemiBold 2xl:text-xl text-lg">
              Payment Details
            </div>
            <div className="text-[#475467] font-gilroyMedium text-lg flex justify-between items-center">
              <span>Discount</span>
              <span>$5554</span>
            </div>
            <div className="text-[#667085] text-base font-gilroyMedium flex justify-between items-center">
              <span>Discount</span>
              <span>(20%) - $1109.40</span>
            </div>
            <div className="text-base font-gilroyMedium flex justify-between items-center">
              <span className="text-[#667085]">Delivery</span>
              <span className="text-[#2E8016]">$0.00</span>
            </div>
            <div className="text-base text-[#667085] font-gilroyMedium flex justify-between items-center">
              <span>Tax</span>
              <span>+$221.88</span>
            </div>

            <div className="flex justify-between pt-4  border-t-[1px] border-dashed border-[#D0D5DD] items-center">
              <span className="text-[#667085] text-lg font-gilroyMedium">
                Total
              </span>
              <span className="text-[#1D2939] text-lg font-gilroyBold">
                $0.00
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[14px] border border-[#DEDEDE] flex flex-col 2xl:py-5 2xl:px-6 py-4 px-5">
            <div className="text-black font-gilroySemiBold 2xl:text-xl text-lg mb-2">
              Shipping Address
            </div>
            <div className="flex 2xl:gap-3 gap-2 items-center text-[#667085] mb-3">
              <OrderIcons.person_icon className="2xl:size-[27px] size-[23px]" />
              <div className="font-gilroyMedium 2xl:text-lg text-base">
                Lalithya Sahu
              </div>
            </div>
            <div className="lg:w-[55%] xl:w-[60%] 2xl:w-[65%] 2xl:text-lg text-base font-gilroyMedium text-[#667085] flex flex-col gap-2">
              <div>
                2nd Floor, SRS Arcade, 15/2 Hosa Rd, Kasavanahalli, Bengaluru,
                Karnataka 560035
              </div>
              <div>Phone: (+91) 7470873515</div>
            </div>
          </div>

        </div>
      </section>
      </div>

    </>
  )
}

export default OrdersMain
