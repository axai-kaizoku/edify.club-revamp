"use client"
import { Container } from "@/components/common/container"
import { Delete, Edit, IndianFlag, Logout } from "./_components/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export type Order = {
  orderId: string
  deliveryDate: string
  deliveryStatus: string
  orderTotal: string
  items: {
    image: string[]
    deviceName: string
    price: string
    storage: string
    ram: string
    processor: string
    color: string
    qty: string
  }[]
}

export default function Page() {
  const data = {
    name: "Ashwini Purohit",
    image: "/media/profile/profile.png",
    gender: "Male",
    phone: "7470873515",
    address: "Bengaluru, IN",
    email: "ashiwni@winuall.com",
  }

  return (
    <Container className="my-6 lg:my-10 h-full min-h-screen">
      <h2 className="text-xl lg:text-2xl font-gilroySemiBold text-center lg:text-left mb-8">
        Profile
      </h2>

      <section className="flex w-full justify-between lg:items-stretch h-full min-h-0 lg:h-48">
        <div className="flex w-full lg:w-[74%] h-full items-center border border-[#DEDEDE] rounded-xl">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover rounded-xl w-24 h-24 lg:w-40 lg:h-40 m-3.5"
          />

          <div className="flex flex-col justify-evenly gap-y-3 lg:gap-0 lg:pl-5 items-start w-full h-full">
            <h3 className="text-base lg:text-[1.6rem] h-fit font-gilroySemiBold">
              {data.name}
            </h3>
            <div className="grid grid-cols-2 lg:flex lg:justify-between w-full h-fit lg:pr-8 xl:pr-14">
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Email
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium truncate">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Phone
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium flex items-center gap-x-1">
                  <IndianFlag className="size-3.5 lg:size-7" />
                  {data.phone}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  Gender
                </span>
                <span className="text-xs lg:text-lg font-gilroyMedium">
                  {data.gender}
                </span>
              </div>
              <div className="flex flex-col gap-0 lg:gap-y-1 ">
                <span className="text-[#AFAFAF] text-xxs lg:text-base font-gilroyMedium">
                  City
                </span>
                <address className="text-xs lg:text-lg not-italic font-gilroyMedium">
                  {data.address}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex space-y-1 w-[24%] h-full flex-col border border-[#DEDEDE] rounded-xl">
          <button className="flex gap-x-3 items-center h-full w-full text-[#0076FF] font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Edit /> Edit Profile
          </button>
          <button className="flex gap-x-3 items-center h-full w-full font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Logout />
            Logout
          </button>
          <button className="flex gap-x-3 items-center h-full w-full text-[#F00] font-gilroyMedium whitespace-nowrap px-5 hover:bg-[#F9F9F9] rounded-xl cursor-pointer">
            <Delete />
            Delete Account
          </button>
        </div>
      </section>

      <h2 className="text-xl lg:text-2xl font-gilroySemiBold text-center lg:text-left my-8">
        My Orders
      </h2>

      <OrdersSection />
    </Container>
  )
}

const OrdersSection = () => {
  const order = {
    orderId: "ED765",
    deliveryDate: "2025-01-20T12:00:00",
    deliveryStatus: "shipped",
    orderTotal: "1535.00",
    items: [
      {
        image: ["/media/product-img/dell1.png"],
        deviceName: "Dell Inspiron 2024",
        price: "146.00",
        storage: "128",
        ram: "16",
        processor: "i5 5th Gen",
        color: "Black",
        qty: "1",
      },
      {
        image: ["/media/product-img/dell1.png"],
        deviceName: "Dell Inspiron 2024",
        price: "146.00",
        storage: "128",
        ram: "16",
        processor: "i5 5th Gen",
        color: "Black",
        qty: "1",
      },
      {
        image: ["/media/product-img/dell1.png"],
        deviceName: "Dell Inspiron 2024",
        price: "146.00",
        storage: "128",
        ram: "16",
        processor: "i5 5th Gen",
        color: "Black",
        qty: "1",
      },
    ],
  }

  const allOrders = [order, order, order, order, order]

  return (
    <section className="w-full h-full flex justify-center items-center gap-y-10">
      <Tabs defaultValue="all-orders" className="w-full">
        <TabsList className="mb-4 w-full px-2 py-2 rounded-xl justify-between font-gilroySemiBold text-[#9F9F9F] bg-[#F4F4F4]">
          <TabsTrigger value="all-orders" className="w-full py-2.5 rounded-lg">
            All Orders
          </TabsTrigger>
          <TabsTrigger value="in-transit" className="w-full py-2.5 rounded-lg">
            In Transit
          </TabsTrigger>
          <TabsTrigger value="delivered" className="w-full py-2.5 rounded-lg">
            Delivered
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="w-full py-2.5 rounded-lg">
            Cancelled
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-orders">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-[70dvh] overflow-y-auto p-1">
            {allOrders.map((order, i) => (
              <OrderDetailsCard key={`${order.orderId}-${i}`} order={order} />
            ))}
          </section>
        </TabsContent>
        <TabsContent value="in-transit">
          <p className="font-gilroySemiBold">
            This is the content for In Transit.
          </p>
        </TabsContent>
        <TabsContent value="delivered">
          <p className="font-gilroySemiBold">
            This is the content for Delivered
          </p>
        </TabsContent>
        <TabsContent value="cancelled">
          <p className="font-gilroySemiBold">
            This is the content for Cancelled
          </p>
        </TabsContent>
      </Tabs>
    </section>
  )
}

const OrderDetailsCard = ({ order }: { order: Order }) => (
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

const OrderItemDetailCard = ({ item }: { item: Order["items"][0] }) => (
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
