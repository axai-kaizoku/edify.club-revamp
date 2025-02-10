import { AxiosError } from "axios"
// import { callAPI } from "./helper"

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

export async function fetchOrders(
  type: "all-orders" | "in-transit" | "delivered" | "cancelled"
) {
  let payload = {}
  switch (type) {
    case "all-orders":
      payload = { type }
    case "in-transit":
      payload = { type }
    case "delivered":
      payload = { type }
    case "cancelled":
      payload = { type }
  }

  try {
    // const { data } = await callAPI<unknown>(
    //   "https://api.edify.club/<api end point>",
    //   "POST",
    //   { ...payload },
    //   {
    //     "Content-Type": "application/json",
    //   }
    // )

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

    const waitMs = Math.floor(Math.random() * 400) + 1000
    await new Promise((resolve) => setTimeout(resolve, waitMs))

    console.log("Api call triggered for ", payload)

    return { payload, data: allOrders }
  } catch (e) {
    throw new Error((e as AxiosError)?.message || "Failed to fetch orders")
  }
}
