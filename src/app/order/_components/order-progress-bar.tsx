import React from "react"

interface OrderProgressProps {
  status: "Order Confirmed" | "Shipped" | "Out For Delivery" | "Delivered"
}

const OrderProgressBar: React.FC<OrderProgressProps> = ({ status }) => {
  const steps = ["Order Confirmed", "Shipped", "Out For Delivery", "Delivered"]
  const statusIndex = steps.indexOf(status)

  return (
    <section className="w-full">
      <div className="relative flex items-center w-full max-w-[88%] mx-auto mt-6">
        {/* Background Line (Gray) */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2" />

        {/* Progress Line (Green) */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-[#12B76A] transform -translate-y-1/2 transition-all duration-500"
          style={{
            width: `${(statusIndex / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Progress Steps */}
        <div className="flex w-full justify-between">
          {steps.map((step, index) => (
            <div key={step} className="relative flex flex-col items-center">
              {/* Step Label (Centered Above) */}
              <div className={`absolute -top-6 text-center w-max whitespace-nowrap text-sm 2xl:text-lg font-gilroyMedium ${
                  index <= statusIndex ? "text-[#12B76A]" : "text-[#D0D5DD]"}`}>
                {step}
              </div>

              {/* Circle */}
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full text-white z-10 border-2 ${
                  index <= statusIndex
                    ? "bg-[#12B76A] border-[#12B76A]"
                    : "bg-gray-300 border-gray-300"
                }`}
              ></div>

              <div className="absolute -bottom-6 text-center w-max whitespace-nowrap text-sm 2xl:text-lg font-gilroyMedium text-[#667085]">
              Wed, 1 lth Jan
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderProgressBar
