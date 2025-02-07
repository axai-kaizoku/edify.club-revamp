"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { memo } from "react"
import { Cart, HeartIcon, ProductCardImage } from "./icons"
import { Star } from "@/app/_components/bento-grid/icons"

export type ProductCardType = {
  images?: string[]
  device_name: string
  rating: string
  reviews: string
  description?: string
  price: string
}

const ProductCard = memo(
  ({
    product,
    imgBgColor = "#F7F7F7",
    addToCart = true,
  }: {
    product: ProductCardType
    res?: number
    imgBgColor?: string
    addToCart?: boolean
  }) => {
    const router = useRouter()

    const [quantity, setQuantity] = useState<number>(0)

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    const handleAddToCart = async () => {
      // await addItemToCart(product?._id!, 1)
      setQuantity(1)
      router.refresh()
    }

    const handleRemoveToCart = async () => {
      // await removeItemFromCart(product?._id!)
      setQuantity(0)
      router.refresh()
    }
    return (
      <div className="lg:max-w-60 lg:max-h-80 lg:min-w-40 lg:min-h-40 lg:w-60 lg:h-80 w-[8.6rem] xs:w-36 xs:h-80 max-h-72 my-2 px-1 h-fit mb-2 lg:mb-10">
        <div
          className="py-14 cursor-pointer relative px-2 w-full h-[20vh] lg:h-[78%] flex justify-center items-center  rounded-3xl lg:rounded-[1.8rem]"
          style={{ backgroundColor: imgBgColor }}
        >
          <div className="w-full h-[15%] absolute top-[4%] flex justify-between items-center px-[4%]">
            <NewBadge />
            <WishListBadge />
          </div>

          {product.images ? (
            <img
              src={
                isHovered
                  ? "/media/product-img/dell2.png"
                  : product?.images?.[0] ?? "/media/product-img/dell1.png"
              }
              loading="lazy"
              alt="product"
              className="w-32 h-32 lg:min-w-40 lg:w-60 lg:h-36 object-contain"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <ProductCardImage className="w-60 h-36" />
          )}
        </div>

        <div className="flex flex-col gap-0 pt-1.5 lg:pt-4 ">
          <div className="flex items-center lg:justify-between w-full px-2">
            <h2 className="text-base lg:text-lg whitespace-nowrap font-gilroySemiBold truncate">
              {product?.device_name.length > 16
                ? product?.device_name.slice(0, 16) + "..."
                : product?.device_name}{" "}
            </h2>

            <div className="hidden lg:flex items-center gap-1 justify-center text-xs lg:text-sm font-gilroyMedium">
              <Star className="size-3" />
              <div className="flex items-end gap-1">
                <span>4.6</span>
                <span className="text-[#A2A3B1]">(556)</span>
              </div>
            </div>
          </div>
          {product?.description ? (
            <p className="text-[#7F7F7F] text-xs font-gilroySemiBold truncate lg:text-pretty h-[4%] lg:mt-1 px-2">
              {product?.description?.length > 140
                ? product?.description.slice(0, 137) + "..."
                : product?.description ??
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet commodi pr onsecte tur adipisicing elit. Debitis amet co"}
            </p>
          ) : null}

          <div className="flex items-center justify-between pr-1 lg:mt-3 px-2 my-1 lg:my-0">
            <span className="text-[0.9rem] md:text-base lg:text-xl  font-gilroyBold ">
              ₹{product?.price}
            </span>

            <div className="flex lg:hidden items-center gap-1 justify-center text-xs font-gilroyMedium">
              <Star className="size-3" />
              <div className="flex items-end gap-1">
                <span>4.6</span>
                <span className="text-[#A2A3B1]">(556)</span>
              </div>
            </div>

            <button className="hidden lg:flex h-fit w-fit py-1 px-1.5 xl:py-2 xl:px-2.5 whitespace-nowrap bg-black cursor-pointer text-white font-gilroyMedium text-[10px] justify-center items-center mb-0.5 rounded-3xl gap-x-1">
              <Cart
                className="size-4"
                onClick={(e) => {
                  e.stopPropagation()
                  handleAddToCart()
                }}
              />
              Add to cart
            </button>
          </div>
          {addToCart ? (
            <button className="flex lg:hidden h-7 xs:h-8 w-full bg-black cursor-pointer text-white font-gilroyMedium text-[10px] justify-center items-center mb-0.5 rounded-md gap-x-1">
              <Cart
                className="size-4"
                onClick={(e) => {
                  e.stopPropagation()
                  handleAddToCart()
                }}
              />
              Add to cart
            </button>
          ) : null}
        </div>
      </div>
    )
  }
)

ProductCard.displayName = "ProductCard"

export { ProductCard }

const NewBadge = () => (
  <span className="border border-[#EFEFEF] bg-white px-2 lg:px-3 py-0 lg:py-0.5 rounded-3xl flex justify-center items-center text-xs lg:text-sm font-gilroyMedium">
    New
  </span>
)

const WishListBadge = () => (
  <div className="bg-black rounded-full size-6 lg:size-9 flex items-center justify-center">
    <HeartIcon className="size-4 lg:size-6" />
  </div>
)
