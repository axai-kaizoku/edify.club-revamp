// "use client"
// import { cn } from "@/lib/utils"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { RatingStarComp } from "./rating-star"

// import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"
// import StoreProductIcons from "./store-icons"

// export const DeviceSecx = ({ data, cart }: { data: never; cart: never }) => {
//   const router = useRouter()

//   // const findItemQuantityById = (itemId: string) => {
//   //   if (cart?.items?.length > 0) {
//   //     //@ts-ignore
//   //     return cart.items.reduce((acc: number, item: DeviceWithQty) => {
//   //       return item._id === itemId ? acc + (item.quantity || 0) : acc
//   //     }, 0)
//   //   }
//   //   return 0 // Return 0 if there are no items in the cart
//   // }

//   const [quantity, setQuantity] = useState<number>(0)

//   // const findItemById = (itemId: string) => {
//   //   return cart.items.find((item: StoreDevice) => item._id === itemId);
//   // };

//   const handleAddToCart = async () => {
//     // await addItemToCart(data?._id!, 1)
//     setQuantity(1)
//     router.refresh()
//   }

//   const handleIncrease = async (device: any) => {
//     const newQuantity = quantity + 1 // Calculate new quantity

//     // Check if the new quantity exceeds available quantity
//     if (newQuantity > quantity) {
//       // Optionally, you can show a message to the user

//       return // Stop execution if the new quantity exceeds available quantity
//     }

//     setQuantity(newQuantity) // Update local quantity
//     router.refresh() // Refresh the router
//   }

//   const handleDecrease = async (device: any) => {
//     const newQuantity: number = quantity > 1 ? quantity - 1 : 0
//     setQuantity(newQuantity) // Update local quantity first
//     // console.log(newQuantity);
//     router.refresh()
//   }

//   // const [images, setImages] = useState(data.image ?? []);

//   // const rating = 4.5;
//   // const reviews = 556;

//   const icons = [
//     {
//       key: "screen",
//       icon: <StoreProductIcons.screen_size />,
//     },
//     {
//       key: "processor",
//       icon: <StoreProductIcons.processor />,
//     },
//     {
//       key: "generation",
//       icon: <StoreProductIcons.processor_generation />,
//     },
//     {
//       key: "ram",
//       icon: <StoreProductIcons.camera_main />,
//     },
//     {
//       key: "touch",
//       icon: <StoreProductIcons.camera_front />,
//     },
//     {
//       key: "storage",
//       icon: <StoreProductIcons.battery_capacity />,
//     },
//   ]

//   const config = [
//     {
//       key: "Screen size",
//       value: `6.7"`,
//     },
//     {
//       key: "Processor ",
//       value: "Apple A16",
//     },
//     {
//       key: "Generation",
//       value: "6",
//     },
//     {
//       key: "Ram",
//       value: "12GB",
//     },
//     {
//       key: "Touch (if any)",
//       value: "No",
//     },
//     {
//       key: "Storage",
//       value: "512GB",
//     },
//   ]

//   const deviceConfig =
//     data?.config && data?.config?.length === 6 ? data?.config : config

//   // const modifiedConfig = []
//   const modifiedConfig = deviceConfig.map((item) => {
//     // Find a matching icon based on the key
//     const matchingIcon = icons.find((icon) =>
//       item.key.toLowerCase().includes(icon.key.toLowerCase())
//     )

//     // Return the object with icon, key, and value
//     return {
//       icon: matchingIcon ? (
//         matchingIcon.icon
//       ) : (
//         <StoreProductIcons.screen_size />
//       ),
//       key: item.key,
//       value: item.value,
//     }
//   })

//   const [currentIdx, setCurrentIdx] = useState(0)
//   const deviceImages =
//     data?.image && data?.image.length === 4
//       ? data?.image
//       : [
//           { url: "/media/store-item/dell1.png" },
//           { url: "/media/store-item/dell2.png" },
//           { url: "/media/store-item/dell3.png" },
//           { url: "/media/store-item/dell4.png" },
//         ]

//   const handlePrev = () => {
//     setCurrentIdx((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : deviceImages!.length - 1
//     )
//   }

//   const handleNext = () => {
//     setCurrentIdx((prevIndex) =>
//       prevIndex < deviceImages!.length - 1 ? prevIndex + 1 : 0
//     )
//   }

//   return (
//     <section className="flex flex-col lg:px-10 mt-6 text-[#17183B]  ">
//       {/* {JSON.stringify(data)} */}
//       <div className="flex flex-col  sm:flex-row justify-between w-full sm:gap-3 lg:gap-8 ">
//         {/* left side */}
//         <div className="w-full sm:w-[48%] lg:w-full   flex flex-col relative sm:gap-8 gap-3 ">
//           <div className="flex bg-[#F7F7F7] rounded-[27px] justify-center items-center h-[40vh] sm:h-[60%]">
//             <img
//               className="object-contain "
//               src={
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
//               }
//               alt={"device"}
//             />
//           </div>
//           <ChevronLeft className="bg-black text-white rounded-full p-1.5 sm:p-2 sm:size-8 size-6 absolute top-1/3 sm:top-1/4" />
//           <ChevronRight className="bg-black text-white rounded-full p-1.5 sm:p-2 sm:size-8 size-6 absolute top-1/3 sm:top-1/4 right-0" />

//           <div className="flex justify-between items-center w-full sm:h-[40%] gap-3">
//             <div className="flex bg-[#F7F7F7] rounded-[27px] p-6  items-center justify-center h-full">
//               <img
//                 className="object-contain "
//                 src={
//                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
//                 }
//                 alt={"device"}
//               />
//             </div>
//             <div className="flex bg-[#F7F7F7] rounded-[27px] p-6  items-center justify-center h-full">
//               <img
//                 className="object-contain "
//                 src={
//                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
//                 }
//                 alt={"device"}
//               />
//             </div>
//           </div>
//         </div>
//         {/* right side */}
//         <div className="w-full sm:w-[48%] lg:w-full flex flex-col ">
//           <div className="flex flex-col gap-3 ">
//             <p className="text-xs sm:flex gap-2 hidden  text-[#2C7915] bg-[#ECF8EE] w-fit font-gilroySemiBold rounded-lg py-2 px-4">
//               <StoreProductIcons.Trending_Icons />
//               Trending
//             </p>
//             <h2 className=" 2xl:pt-1.5 pb-1 text-2xl  font-gilroySemiBold  xl:text-3xl">
//               Dell Inspiron 2024
//             </h2>
//           </div>
//           {/* Pricing */}
//           <div className="flex items-center py-1 justify-between ">
//             <div className="font-gilroyBold text-2xl sm:text-4xl flex items-baseline gap-x-1.5">
//               {`₹149.99`}{" "}
//               <span className="relative ">
//                 <span className="text-base text-[#B3B3B3] font-gilroyMedium sm:text-lg">{`₹1000000`}</span>
//                 <span className="absolute left-0 top-[55%] w-[105%] h-[1px] bg-black -rotate-[15deg]"></span>
//               </span>
//             </div>
//             <div className="flex items-center gap-x-1 sm:gap-x-2">
//               <div className="-mt-0.5 hidden lg:block">
//                 <RatingStarComp rating={4.6} className="size-4" />
//               </div>
//               <div className="-mt-0.5 black sm:hidden">
//                 <StoreProductIcons.black_star className="size-4" />
//               </div>
//               <div className="font-gilroyMedium text-sm">
//                 4.6 / 5.0 <span className="">(100)</span>
//               </div>
//             </div>
//           </div>
//           {/* Color */}
//           <div className="flex gap-x-3 pb-2 pt-4">
//             <h1 className="text-xl sm:text-base font-gilroyMedium">Color :</h1>
//             <div className="flex items-center gap-x-1.5">
//               {["#000000"].map((v) => (
//                 <div
//                   key={v}
//                   style={{ backgroundColor: v }}
//                   className={cn(
//                     "size-4 rounded-full ring ring-[#17183B]",
//                     v === "#000000" ? "ring-opacity-15" : "ring-opacity-0"
//                   )}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Storage */}
//           <div className="flex gap-x-3 py-2 items-center">
//             {["128GB", "256GB", "512GB", "1TB"].map((v) => (
//               <div
//                 key={v}
//                 className={cn(
//                   "rounded-md font-gilroySemiBold text-sm sm:text-base 2xl:text-lg w-24 sm:w-28 h-10 sm:h-12 flex justify-center items-center border",
//                   " border-[#D5D5D5] text-gray-400"
//                 )}
//               >
//                 {v}
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-3 grid-rows-2 w-full sm:gap-4 gap-2 py-3">
//             {modifiedConfig.map((v) => (
//               <div
//                 key={v.key}
//                 className="w-full  bg-[#F4F4F4] rounded-lg flex justify-center items-center"
//               >
//                 <div className="flex sm:py-4 p-2 justify-center gap-x-1  items-center w-full">
//                   <div className=" flex items-center size-5 sm:size-8  justify-center">
//                     {v.icon}
//                   </div>
//                   <div className="flex sm:w-[55%] flex-col text-xs sm:text-base">
//                     <span className="text-[#A7A7A7] text-nowrap leading-[10px] sm:leading-3 font-gilroyMedium">
//                       {v.key}
//                     </span>
//                     <span className="text-[#4E4E4E] font-gilroySemiBold">
//                       {v.value}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <h1 className="text-sm sm:text-base font-gilroySemiBold pb-2">
//             <span className=" text-[#2E8016] font-gilroyBold">FREE</span>{" "}
//             Shipping by <span className=" font-gilroyBold">Feburary 6-7</span>
//           </h1>

//           <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row  py-2 justify-between items-center font-gilroySemiBold">
//             {quantity > 0 ? (
//               <div className="flex flex-col sm:flex-row justify-between items-center rounded-[4px] border border-black px-8 h-12 gap-10 w-[48%]">
//                 <Minus
//                   className="size-5 text-black cursor-pointer"
//                   onClick={() => {
//                     handleDecrease(data)
//                   }}
//                 />

//                 <div className="text-xl select-none text-black font-gilroySemiBold text-center focus:outline-none">
//                   {quantity}
//                 </div>

//                 <Plus
//                   className="cursor-pointer size-5 text-black"
//                   onClick={() => {
//                     handleIncrease(data)
//                   }}
//                 />
//               </div>
//             ) : (
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full sm:w-[48%]  h-12 rounded-sm flex justify-center items-center  hover:bg-black hover:text-white text-black bg-white ring-2 ring-black"
//               >
//                 Add to Cart
//               </button>
//             )}

//             <button
//               onClick={() => {
//                 if (quantity > 0) {
//                   router.push("/store/cart/checkout")
//                 } else {
//                   addItemToCart(data?._id ?? "", 1)
//                   router.push("/store/cart/checkout")
//                 }
//               }}
//               className="w-full sm:w-[48%] h-12 bg-black text-white hover:text-black ring-2 ring-black hover:bg-white  hover:ring-black rounded-sm flex justify-center items-center"
//             >
//               BUY NOW
//             </button>
//           </div>
//           <div className="flex items-center justify-start overflow-x-auto  sm:justify-center gap-6 pb-4 pt-6">
//             <div className="text-xs flex gap-2  bg-[#ECF8EE] items-center justify-center w-1/3 font-gilroyMedium rounded-lg py-2 px-4">
//               <StoreProductIcons.warranty_protection />
//               12 months warranty
//             </div>
//             <div className="text-xs flex gap-2  bg-[#ECF8EE] w-1/3 items-center justify-center font-gilroyMedium rounded-lg py-2 px-4">
//               <StoreProductIcons.warranty_verified />
//               Free 30-days returns
//             </div>
//             <div className="text-xs flex gap-2  bg-[#ECF8EE] w-1/3 items-center justify-center font-gilroyMedium rounded-lg py-2 px-4">
//               <StoreProductIcons.warranty_customer_care />
//               24/7 Service
//             </div>
//           </div>
//           <div className="flex gap-3 overflow-x-auto">
//             <div className="bg-[#F7F7F7] rounded-lg p-3 w-fit ">
//               <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex justify-start items-center">
//                 3 months EMI options with{" "}
//                 <StoreProductIcons.snap_mint className="pl-2" />
//               </h1>
//               <p className="text-xs text-nowrap text-[#B2B2B2]  font-gilroyMedium">
//                 Credit Card not required, Online approval in 2 minutes
//               </p>
//             </div>
//             <div className="bg-[#F7F7F7] rounded-lg p-3 w-fit ">
//               <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex justify-start items-center">
//                 3 months EMI options with{" "}
//                 <StoreProductIcons.snap_mint className="pl-2" />
//               </h1>
//               <p className="text-xs text-nowrap text-[#B2B2B2]  font-gilroyMedium">
//                 Credit Card not required, Online approval in 2 minutes
//               </p>
//             </div>
//           </div>
//           <p className="font-gilroySemiBold text-center sm:text-left text-[10px] sm:text-xs py-4 pl-2">
//             100% Secure Payments
//           </p>
//           <div className="flex items-center justify-center  sm:gap-6">
//             <StoreProductIcons.visa />
//             <StoreProductIcons.google_pay />
//             <StoreProductIcons.apple_pay />
//             <StoreProductIcons.mastercard />
//             <StoreProductIcons.amex />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"
import StoreProductIcons from "./store-icons"
import { RatingStarComp } from "./rating-star"
export const DeviceSecx = ({ data, cart }: { data: never; cart: never }) => {
  const router = useRouter()
  // const findItemQuantityById = (itemId: string) => {
  //   if (cart?.items?.length > 0) {
  //     //@ts-ignore
  //     return cart.items.reduce((acc: number, item: DeviceWithQty) => {
  //       return item._id === itemId ? acc + (item.quantity || 0) : acc
  //     }, 0)
  //   }
  //   return 0 // Return 0 if there are no items in the cart
  // }
  const [quantity, setQuantity] = useState<number>(0)
  // const findItemById = (itemId: string) => {
  //   return cart.items.find((item: StoreDevice) => item._id === itemId);
  // };
  const handleAddToCart = async () => {
    // await addItemToCart(data?._id!, 1)
    setQuantity(1)
    router.refresh()
  }
  const handleIncrease = async (device: any) => {
    const newQuantity = quantity + 1 // Calculate new quantity
    // Check if the new quantity exceeds available quantity
    if (newQuantity > quantity) {
      // Optionally, you can show a message to the user
      return // Stop execution if the new quantity exceeds available quantity
    }
    setQuantity(newQuantity) // Update local quantity
    router.refresh() // Refresh the router
  }
  const handleDecrease = async (device: any) => {
    const newQuantity: number = quantity > 1 ? quantity - 1 : 0
    setQuantity(newQuantity) // Update local quantity first
    // console.log(newQuantity);
    router.refresh()
  }
  // const [images, setImages] = useState(data.image ?? []);
  // const rating = 4.5;
  // const reviews = 556;
  const icons = [
    {
      key: "screen",
      icon: <StoreProductIcons.screen_size />,
    },
    {
      key: "processor",
      icon: <StoreProductIcons.processor />,
    },
    {
      key: "generation",
      icon: <StoreProductIcons.processor_generation />,
    },
    {
      key: "ram",
      icon: <StoreProductIcons.camera_main />,
    },
    {
      key: "touch",
      icon: <StoreProductIcons.camera_front />,
    },
    {
      key: "storage",
      icon: <StoreProductIcons.battery_capacity />,
    },
  ]
  const config = [
    {
      key: "Screen size",
      value: `6.7"`,
    },
    {
      key: "Processor ",
      value: "Apple A16",
    },
    {
      key: "Generation",
      value: "6",
    },
    {
      key: "Ram",
      value: "12GB",
    },
    {
      key: "Touch",
      value: "No",
    },
    {
      key: "Storage",
      value: "512GB",
    },
  ]
  const deviceConfig =
    data?.config && data?.config?.length === 6 ? data?.config : config
  // const modifiedConfig = []
  const modifiedConfig = deviceConfig.map((item) => {
    // Find a matching icon based on the key
    const matchingIcon = icons.find((icon) =>
      item.key.toLowerCase().includes(icon.key.toLowerCase())
    )
    // Return the object with icon, key, and value
    return {
      icon: matchingIcon ? (
        matchingIcon.icon
      ) : (
        <StoreProductIcons.screen_size />
      ),
      key: item.key,
      value: item.value,
    }
  })
  const [currentIdx, setCurrentIdx] = useState(0)
  const deviceImages =
    data?.image && data?.image.length === 4
      ? data?.image
      : [
          { url: "/media/store-item/dell1.png" },
          { url: "/media/store-item/dell2.png" },
          { url: "/media/store-item/dell3.png" },
          { url: "/media/store-item/dell4.png" },
        ]
  const handlePrev = () => {
    setCurrentIdx((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : deviceImages!.length - 1
    )
  }
  const handleNext = () => {
    setCurrentIdx((prevIndex) =>
      prevIndex < deviceImages!.length - 1 ? prevIndex + 1 : 0
    )
  }
  return (
    <section className="flex flex-col xl:px-10 lg:px-6  mt-6 text-[#17183B]  ">
      {/* {JSON.stringify(data)} */}
      <div className="flex flex-col  sm:flex-row justify-between w-full sm:gap-3 lg:gap-8 ">
        {/* left side */}
        <div className="w-full sm:w-1/2 lg:w-[calc(50%-32px)]  flex flex-col relative lg:gap-8 gap-3 ">
          <div className="flex bg-[#F7F7F7] rounded-[27px] justify-center items-center h-[40vh] sm:h-[60%]">
            <img
              className="object-contain "
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
              }
              alt={"device"}
            />
          </div>
          <ChevronLeft className="bg-black text-white rounded-full p-1.5 sm:p-2 sm:size-8 size-6 absolute top-1/3 sm:top-1/4" />
          <ChevronRight className="bg-black text-white rounded-full p-1.5 sm:p-2 sm:size-8 size-6 absolute top-1/3 sm:top-1/4 right-0" />
          <div className="flex justify-between items-center w-full sm:h-[40%] gap-3">
            <div className="flex bg-[#F7F7F7] rounded-[27px] p-6  items-center justify-center h-full">
              <img
                className="object-contain "
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
                }
                alt={"device"}
              />
            </div>
            <div className="flex bg-[#F7F7F7] rounded-[27px] p-6  items-center justify-center h-full">
              <img
                className="object-contain "
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgdK0YdEkxqEdhM5YpQ__37CwvkBG3_o_tg&s"
                }
                alt={"device"}
              />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full sm:w-1/2 lg:w-[calc(50%-32px)] flex flex-col ">
          <div className="flex flex-col gap-3 ">
            <p className="text-xs sm:flex gap-2 hidden  text-[#2C7915] bg-[#ECF8EE] w-fit font-gilroySemiBold rounded-lg py-2 px-4">
              <StoreProductIcons.Trending_Icons />
              Trending
            </p>
            <h2 className=" 2xl:pt-1.5 pb-1 text-2xl  font-gilroySemiBold   xl:text-3xl">
              Dell Inspiron 2024
            </h2>
          </div>
          {/* Pricing */}
          <div className="flex items-center py-1 justify-between ">
            <div className="font-gilroyBold text-2xl sm:text-3xl  lg:text-4xl flex items-baseline gap-x-1.5">
              {`₹149.99`}{" "}
              <span className="relative ">
                <span className="text-base text-[#B3B3B3] font-gilroyMedium lg:text-lg">{`₹1000000`}</span>
                <span className="absolute left-0 top-[55%] w-[105%] h-[1px] bg-black -rotate-[15deg]"></span>
              </span>
            </div>
            <div className="flex items-center gap-x-1 sm:gap-x-2">
              <div className="-mt-0.5 hidden lg:block">
                <RatingStarComp rating={4.6} className="size-4" />
              </div>
              <div className="-mt-0.5 black lg:hidden ">
                <StoreProductIcons.black_star className="size-4" />
              </div>
              <div className="font-gilroyMedium text-sm">
                4.6 / 5.0 <span className="">(100)</span>
              </div>
            </div>
          </div>
          {/* Color */}
          <div className="flex gap-x-3 pb-2 pt-4">
            <h1 className="text-xl sm:text-base font-gilroyMedium">Color :</h1>
            <div className="flex items-center gap-x-1.5">
              {["#000000"].map((v) => (
                <div
                  key={v}
                  style={{ backgroundColor: v }}
                  className={cn(
                    "size-4 rounded-full ring ring-[#17183B]",
                    v === "#000000" ? "ring-opacity-15" : "ring-opacity-0"
                  )}
                />
              ))}
            </div>
          </div>
          {/* Storage */}
          <div className="flex gap-x-3 py-2 items-center">
            {["128GB", "256GB", "512GB", "1TB"].map((v) => (
              <div
                key={v}
                className={cn(
                  "rounded-md font-gilroySemiBold text-sm sm:text-base 2xl:text-lg w-24 lg:w-28 h-10 lg:h-12 flex justify-center items-center border",
                  " border-[#D5D5D5] text-gray-400"
                )}
              >
                {v}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 grid-rows-2 w-full sm:gap-4 gap-2 py-3">
            {modifiedConfig.map((v) => (
              <div
                key={v.key}
                className="w-full  bg-[#F4F4F4] rounded-lg flex justify-center items-center"
              >
                <div className="flex lg:py-4 p-2 justify-center gap-x-1  items-center w-full">
                  <div className=" flex items-center size-5 sm:size-8  justify-center">
                    {v.icon}
                  </div>
                  <div className="flex lg:w-[55%] flex-col text-xs lg:text-sm xl:text-base">
                    <span className="text-[#A7A7A7] text-nowrap leading-[10px] xl:leading-3 font-gilroyMedium">
                      {v.key}
                    </span>
                    <span className="text-[#4E4E4E] font-gilroySemiBold">
                      {v.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-sm lg:text-base font-gilroySemiBold pb-2">
            <span className=" text-[#2E8016] font-gilroyBold">FREE</span>{" "}
            Shipping by <span className=" font-gilroyBold">Feburary 6-7</span>
          </h1>
          <div className="flex flex-col gap-4 sm:gap-2 lg:gap-0 sm:flex-row   py-2 justify-between items-center font-gilroySemiBold">
            {quantity > 0 ? (
              <div className="flex flex-col sm:flex-row justify-between items-center rounded-[4px] border border-black px-8 h-12 gap-10 w-[48%]">
                <Minus
                  className="size-5 text-black cursor-pointer"
                  onClick={() => {
                    handleDecrease(data)
                  }}
                />
                <div className="text-xl select-none text-black font-gilroySemiBold text-center focus:outline-none">
                  {quantity}
                </div>
                <Plus
                  className="cursor-pointer size-5 text-black"
                  onClick={() => {
                    handleIncrease(data)
                  }}
                />
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="lg:w-[48%] py-2 w-full  rounded-sm flex justify-center items-center  hover:bg-black hover:text-white text-black bg-white ring-2 ring-black"
              >
                Add to Cart
              </button>
            )}
            <button
              onClick={() => {
                if (quantity > 0) {
                  router.push("/store/cart/checkout")
                } else {
                  //   addItemToCart(data?._id ?? "", 1)
                  router.push("/store/cart/checkout")
                }
              }}
              className="w-full lg:w-[48%] py-2 bg-black text-white hover:text-black ring-2 ring-black hover:bg-white  hover:ring-black rounded-sm flex justify-center items-center"
            >
              BUY NOW
            </button>
          </div>
          <div className="flex items-center justify-start overflow-x-auto  sm:justify-center gap-6 pb-4 pt-6">
            <div className="text-xs text-nowrap flex gap-2  bg-[#ECF8EE]  items-center justify-center lg:w-1/3 font-gilroyMedium rounded-lg py-2 px-4">
              <StoreProductIcons.warranty_protection />
              12 months warranty
            </div>
            <div className="text-xs text-nowrap flex gap-2  bg-[#ECF8EE] lg:w-1/3 items-center justify-center font-gilroyMedium rounded-lg py-2 px-4">
              <StoreProductIcons.warranty_verified />
              Free 30-days returns
            </div>
            <div className="text-xs flex gap-2 text-nowrap  bg-[#ECF8EE] lg:w-1/3 items-center justify-center font-gilroyMedium rounded-lg py-2 px-4">
              <StoreProductIcons.warranty_customer_care />
              24/7 Service
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            <div className="bg-[#F7F7F7] rounded-lg p-3 w-fit ">
              <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex justify-start items-center">
                3 months EMI options with{" "}
                <StoreProductIcons.snap_mint className="pl-2" />
              </h1>
              <p className="text-xs text-nowrap text-[#B2B2B2]  font-gilroyMedium">
                Credit Card not required, Online approval in 2 minutes
              </p>
            </div>
            <div className="bg-[#F7F7F7] rounded-lg p-3 w-fit ">
              <h1 className="text-sm text-nowrap sm:text-lg font-gilroySemiBold flex justify-start items-center">
                3 months EMI options with{" "}
                <StoreProductIcons.snap_mint className="pl-2" />
              </h1>
              <p className="text-xs text-nowrap text-[#B2B2B2]  font-gilroyMedium">
                Credit Card not required, Online approval in 2 minutes
              </p>
            </div>
          </div>
          <p className="font-gilroySemiBold text-center sm:text-left text-[10px] sm:text-xs py-4 pl-2">
            100% Secure Payments
          </p>
          <div className="flex items-center justify-center  sm:gap-6">
            <StoreProductIcons.visa />
            <StoreProductIcons.google_pay />
            <StoreProductIcons.apple_pay />
            <StoreProductIcons.mastercard />
            <StoreProductIcons.amex />
          </div>
        </div>
      </div>
    </section>
  )
}
