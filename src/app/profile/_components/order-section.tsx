"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fetchOrders } from "@/server/orderActions"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { OrderDetailsCardSkeleton } from "./order-card-skeleton"
import { OrderDetailsCard } from "./order-details-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const OrdersSection = () => {
  const [activeTab, setActiveTab] = useState("all-orders")

  const { data, isLoading, error } = useQuery({
    queryKey: ["my-orders", activeTab],
    queryFn: () =>
      fetchOrders(
        activeTab as "all-orders" | "in-transit" | "delivered" | "cancelled"
      ),
  })

  return (
    <section className="w-full h-full flex justify-center items-center gap-y-10">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="hidden lg:flex mb-4 w-full px-2 py-2 rounded-xl justify-between font-gilroySemiBold text-[#9F9F9F] bg-[#F4F4F4]">
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

        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-full font-gilroyMedium flex lg:hidden bg-[#F4F4F4] border border-[#DEDEDE] rounded-lg">
            <SelectValue placeholder="Orders" />
          </SelectTrigger>
          <SelectContent className="font-gilroyMedium">
            <SelectItem value="all-orders" className="w-full py-2.5 rounded-lg">
              All Orders
            </SelectItem>
            <SelectItem value="in-transit" className="w-full py-2.5 rounded-lg">
              In Transit
            </SelectItem>
            <SelectItem value="delivered" className="w-full py-2.5 rounded-lg">
              Delivered
            </SelectItem>
            <SelectItem value="cancelled" className="w-full py-2.5 rounded-lg">
              Cancelled
            </SelectItem>
          </SelectContent>
        </Select>

        <TabsContent value="all-orders">
          {error ? (
            <p className="text-red-500 font-gilroyMedium">
              Failed to fetch data
            </p>
          ) : null}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-[70dvh] overflow-y-auto p-1">
            {isLoading
              ? Array(5)
                  .fill("a")
                  .map((_, i) => <OrderDetailsCardSkeleton key={i} />)
              : data?.data?.map((order, i) => (
                  <OrderDetailsCard
                    key={`${order.orderId}-${i}`}
                    order={order}
                  />
                ))}
          </section>
        </TabsContent>
        <TabsContent value="in-transit">
          {error ? (
            <p className="text-red-500 font-gilroyMedium">
              Failed to fetch data
            </p>
          ) : null}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-[70dvh] overflow-y-auto p-1">
            {isLoading
              ? Array(5)
                  .fill("a")
                  .map((_, i) => <OrderDetailsCardSkeleton key={i} />)
              : data?.data?.map((order, i) => (
                  <OrderDetailsCard
                    key={`${order.orderId}-${i}`}
                    order={order}
                  />
                ))}
          </section>
        </TabsContent>
        <TabsContent value="delivered">
          {error ? (
            <p className="text-red-500 font-gilroyMedium">
              Failed to fetch data
            </p>
          ) : null}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-[70dvh] overflow-y-auto p-1">
            {isLoading
              ? Array(5)
                  .fill("a")
                  .map((_, i) => <OrderDetailsCardSkeleton key={i} />)
              : data?.data?.map((order, i) => (
                  <OrderDetailsCard
                    key={`${order.orderId}-${i}`}
                    order={order}
                  />
                ))}
          </section>
        </TabsContent>
        <TabsContent value="cancelled">
          {error ? (
            <p className="text-red-500 font-gilroyMedium">
              Failed to fetch data
            </p>
          ) : null}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-[70dvh] overflow-y-auto p-1">
            {isLoading
              ? Array(5)
                  .fill("a")
                  .map((_, i) => <OrderDetailsCardSkeleton key={i} />)
              : data?.data?.map((order, i) => (
                  <OrderDetailsCard
                    key={`${order.orderId}-${i}`}
                    order={order}
                  />
                ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  )
}
