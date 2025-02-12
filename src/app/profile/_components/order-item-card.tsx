import { Order } from "@/server/orderActions"

export const OrderItemDetailCard = ({ item }: { item: Order["items"][0] }) => (
  <div className="h-fit w-full border border-[#DEDEDE] rounded-xl px-2.5 py-2 flex gap-x-3 items-center">
    <img
      src={item.image[0]}
      alt={item.deviceName}
      className="size-20 lg:size-28 object-contain rounded-lg px-2.5 bg-[#F7F8FA]"
      loading="lazy"
    />
    <div className="w-full h-full flex flex-col justify-start gap-y-3 lg:gap-y-4">
      <div className="w-full flex justify-between items-start font-gilroySemiBold">
        <h3 className="text-sm lg:text-base truncate">{item.deviceName}</h3>
        <div className="flex items-baseline gap-x-1">
          <span className="text-[#C5C5C5] text-xs lg:text-sm">{item.qty}x</span>
          <span className="text-sm lg:text-base">₹{item.price}</span>
        </div>
      </div>

      <div className="w-full flex justify-start gap-x-1 text-xs lg:text-sm text-[#AFAFAF] font-gilroyMedium">
        <span>{item.storage}GB •</span>
        <span>{item.ram}GB •</span>
        <span>{item.processor}</span>
      </div>
      <div className="w-full flex justify-start gap-x-1 text-xs lg:text-sm text-[#AFAFAF] font-gilroyMedium">
        {item.color}
      </div>
    </div>
  </div>
)
