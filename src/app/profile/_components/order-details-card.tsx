import { Order } from "@/server/orderActions"
import Link from "next/link"
import { OrderItemDetailCard } from "./order-item-card"

export const OrderDetailsCard = ({ order }: { order: Order }) => (
  <article className="relative flex flex-col gap-y-2 w-full h-full border border-[#DEDEDE] rounded-xl pt-3">
    <header className="w-full flex justify-between items-start lg:items-center px-3 mb-1 lg:mb-3">
      <div className="flex items-end lg:items-center gap-x-1">
        <span className="text-[#CBCBCB] text-xs lg:text-sm font-gilroyMedium whitespace-nowrap truncate">
          Order ID:
        </span>
        <h2 className="text-sm lg:text-base font-gilroySemiBold whitespace-nowrap truncate">
          {`#${order.orderId}`}
        </h2>
      </div>

      <div className="flex items-center gap-x-1">
        <div className="border border-[#DEDEDE] px-2 lg:px-3 py-1 lg:py-1 rounded-3xl flex justify-center items-center gap-x-1">
          <span className="text-[#CBCBCB] text-xxs lg:text-xs font-gilroyMedium whitespace-nowrap truncate">
            Estd. Delivery:
          </span>
          <time
            dateTime={order.deliveryDate}
            className="text-black font-gilroySemiBold text-xxs lg:text-xs whitespace-nowrap truncate"
          >
            {new Date(order.deliveryDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        <span className="bg-[#E0F9E7] text-[#2E8016] px-2 lg:px-3 py-1 lg:py-1 rounded-3xl flex justify-center items-center text-xxs lg:text-xs font-gilroySemiBold capitalize">
          {order.deliveryStatus}
        </span>
      </div>
    </header>

    <section className="h-[14dvh] lg:h-[25dvh] overflow-y-auto w-full space-y-2 px-3">
      <ul className="space-y-2">
        {order.items.map((item, i) => (
          <li key={`${item.deviceName}-${i}`}>
            <OrderItemDetailCard item={item} />
          </li>
        ))}
      </ul>
    </section>

    <div className="h-10 w-full pointer-events-none" />

    <footer className="absolute rounded-b-xl bg-[#F4F4F4] bottom-0 flex w-full justify-between p-2">
      <div className="flex items-baseline gap-x-1 font-gilroyMedium">
        <div className="flex items-end gap-x-1">
          <span className="text-sm lg:text-base">Rs</span>
          <span className="text-base lg:text-lg ">{order.orderTotal}</span>
        </div>
        <span className="text-[#8E8E8E] text-xxs lg:text-xs">
          {`(${order.items.length} items)`}
        </span>
      </div>

      <Link
        href="#"
        className="bg-black text-white px-4 lg:px-3.5 py-2 lg:py-0.5 rounded-3xl flex justify-center items-center text-xs font-gilroySemiBold"
      >
        <span>View Details</span>
      </Link>
    </footer>
  </article>
)
