"use client"
import { ChevronDown, MoveUpRight } from "lucide-react"
import { Input } from "../ui/input"
import { Cart, CategoryIcon, HamBurger, Search } from "./icons"
import { CategoryBanner } from "./category-banner"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <CategoryBanner
        className={cn(
          isOpen ? "ranslate-y-[0%]" : "translate-y-[-100%]",
          "transition-all duration-200 z-[11]"
        )}
      />
      <header className="fixed top-0 left-0 z-50 right-0 border-0 lg:border-b-2 bg-white font-gilroySemiBold border-[#E7E7E7] w-full h-16 lg:h-20 flex items-center justify-center">
        <nav className="flex w-[92%] sm:w-[94%] h-full justify-between items-center">
          <div className="block lg:hidden">
            <HamBurger />
          </div>

          <div className="lg:hidden -mr-[13%] sm:-mr-[7%] cursor-pointer bg-black/5 rounded-full size-12 font-orange text-4xl flex justify-center items-center">
            <Link href="/">e</Link>
          </div>

          <ul className="hidden lg:flex items-center md:gap-x-4 xl:gap-x-6 select-none">
            <li className="px-3 cursor-pointer bg-black/5 rounded-full size-12 font-orange text-4xl flex justify-center items-center z-10">
              <Link href="/">e</Link>
            </li>

            <li
              onClick={() => setIsOpen((prev) => !prev)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 cursor-pointer group hover:bg-slate-50 rounded-md z-10",
                isOpen ? "bg-slate-50" : ""
              )}
            >
              <CategoryIcon /> Category{" "}
              <ChevronDown className="size-4 mt-0.5" strokeWidth={2.5} />
            </li>

            <li>
              <Link
                className="flex items-center gap-2 group hover:bg-slate-50 px-3 py-1.5 rounded-md cursor-pointer z-10"
                href="/b2b"
              >
                Business{" "}
                <MoveUpRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:h-[100%] h-0 translate-y-[0%] group-hover:translate-y-100 group-hover:pt-0 pt-3 transition-all duration-200" />
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="flex items-center gap-2 group hover:bg-slate-50 px-3 py-1.5 rounded-md cursor-pointer whitespace-nowrap z-10"
              >
                About us{" "}
                <MoveUpRight className="size-4 opacity-0 group-hover:opacity-100" />
              </Link>
            </li>
            <li className="flex items-center gap-2 group hover:bg-slate-50 px-3 py-1.5 rounded-md cursor-pointer z-10">
              Blogs{" "}
              <MoveUpRight className="size-4 opacity-0 group-hover:opacity-100" />
            </li>
          </ul>

          <ul className="flex items-center gap-2 lg:gap-3">
            <li className="group relative w-full">
              <Input
                id="search"
                type="text"
                placeholder="Search anything"
                className="hidden lg:block rounded-3xl w-80 bg-[#F0F0F0] placeholder:text-[#C5C5C5] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Link
                href="/all-products"
                type="button"
                className="lg:absolute lg:right-2 lg:top-1 text-sm size-9 lg:size-8 bg-black rounded-full flex items-center justify-center"
              >
                <Search />
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                className="bg-black relative p-2 rounded-full size-9 flex justify-center items-center cursor-pointer"
              >
                <div className="size-3.5 absolute -top-0.5 -right-1 rounded-full bg-[#0075EB] font-gilroyMedium text-white flex justify-center items-center text-[10px]">
                  2
                </div>
                <Cart className="size-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-16 lg:h-20 pointer-events-none w-full" />
    </>
  )
}
