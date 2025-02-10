'use client'
import { useRouter } from "next/navigation"
import React from "react"

const OrdersPage = () => {
    const router = useRouter();
  return (
    <>
      <div>This is the Orders Page for</div>
      <button onClick={()=>{ router.push('/orders/1');}} className="text-white bg-black px-6 py-2 rounded-xl">Detailed View</button>
    </>
  )
}

export default OrdersPage
