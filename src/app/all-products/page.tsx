"use client"

import React, { useEffect, useRef, useState } from "react"
import { AllProductsIcons } from "./icons"
import { Container } from "@/components/common/container"
import { ProductCard } from "@/components/common/product-card"
import { productsMockData } from "../_components/best-sellers/best-sellers"

import Drawer from "@/components/ui/bottom-drawer"
import AllProductsLeft from "./_components/all-products-left"

interface FilterSectionProps {
  title?: string
  children?: React.ReactNode
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-md lg:rounded-xl   p-2 lg:p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm lg:text-lg font-gilroyMedium">{title}</p>
        {isOpen ? <AllProductsIcons.arrowUp /> : <AllProductsIcons.arrowDown />}
      </div>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  )
}
export const FilterOption = ({
  options,
  selected,
  onSelect,
}: {
  options: string[] | undefined
  selected: string | null
  onSelect: (value: string) => void
}) => (
  <div className="flex gap-2 flex-wrap">
    {options?.map((option) => (
      <div
        key={option}
        onClick={() => onSelect(option)}
        className={`border lg:border-2 font-gilroySemiBold border-[#D7D7D7] lg:text-base text-sm text-[#D7D7D7] px-1 py-0.5  lg:p-2 w-fit rounded lg:rounded-lg cursor-pointer hover:border-[#2E8016] hover:border lg:hover:border-2 hover:text-black ${

          selected === option ? "border-green-700 text-black" : ""
        }`}
      >
        {option}
      </div>
    ))}
  </div>
)

function AllProducts() {
  const [isSortOpen, setIsSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)
  const [filterDrawer, setFilterDrawer] = useState(false)
  const [sortDrawer, setSortDrawer] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const sortingOptions = [
    "Relevance",
    "Most Recent",
    "Highest Price",
    "Lowest Price",
  ]
  const [selectedSort, setSelectedSort] = useState("Relevance")
  const [selectedFilters, setSelectedFilters] = useState({
    brand: null,
    processor: null,
    display: null,
    color: null,
    ram: null,
    storage: null,
  })
  const handleFilterChange = (key: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }))
  }

  const colors = ["#000000", "#33FF57", "#3357FF", "#F0E68C"]

  const processorOptions = ["Intel", "AMD", "Apple M1"]
  const displayOptions = ["13-inch", "15-inch", "17-inch"]
  const storageOptions = ["128GB", "256GB", "512GB"]
  const ramOptions = ["8GB", "16GB", "32GB"]

  const clearAllFilters = () => {
    setSelectedFilters({
      brand: null,
      processor: null,
      display: null,
      color: null,
      ram: null,
      storage: null,
    })
  }

  return (
    <Container>
      <section className="flex flex-col items-center justify-center w-full">
        <h1 className="text-center font-orange text-xl lg:text-3xl xl:text-4xl mb-6">
          All Products
        </h1>
        <div className="w-full flex gap-8">
          {/* LEFT SECTION */}

          <AllProductsLeft
            clearAllFilters={clearAllFilters}
            colors={colors}
            processorOptions={processorOptions}
            displayOptions={displayOptions}
            storageOptions={storageOptions}
            ramOptions={ramOptions}
            handleFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
            className="sm:w-[30%] sm:flex hidden"
          />


          {/* RIGHT SECTION */}
          <div className="w-[70%] flex flex-col gap-3 relative max-sm:w-full">
            {/* For Web view */}
            <div className="flex justify-between items-center max-sm:hidden">
              <span className="text-[#828282] text-lg sm:flex font-gilroySemiBold">
                102 Results found
              </span>
              <div ref={sortRef} className="relative">
                <button
                  className="flex gap-2 items-center rounded-[6px] border border-[#D5D5D5] px-4 py-2"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <img src="/sort.svg" alt="sortIcon" />
                  <span className="text-black font-gilroySemiBold text-base">
                    Sort By
                  </span>
                  {isSortOpen ? (
                    <AllProductsIcons.arrowUp />
                  ) : (
                    <AllProductsIcons.arrowDown />
                  )}
                </button>

                {/* Sort Modal */}
                {isSortOpen && (
                  <div className="flex flex-col absolute top-full z-10 right-0 mt-1 w-48 bg-white shadow-md rounded-xl gap-1 py-2 px-2 border border-[#D5D5D5]">
                    {sortingOptions.map((option) => (
                      <p
                        key={option}
                        className="px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-[#F7F7F7] hover:rounded-[6px] text-sm font-gilroySemiBold"
                        onClick={() => {
                          setSelectedSort(option)
                          // setIsSortOpen(false);
                        }}
                      >
                        <span>{option}</span>
                        {selectedSort === option && (
                          <AllProductsIcons.green_tick />
                        )}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* For Mobile View */}

            <div className="flex bg-[#F7F7F7] rounded-[7px] items-center justify-between px-4 sm:hidden">
              <button
                className="flex gap-2 items-center rounded-[6px] px-4 py-2"
                onClick={() => {
                  setFilterDrawer(!filterDrawer)
                }}
              >
                <AllProductsIcons.filters_icon />
                <span className="text-black font-gilroySemiBold text-sm">
                  Filters
                </span>
                {filterDrawer ? (
                  <AllProductsIcons.arrowUp />
                ) : (
                  <AllProductsIcons.arrowDown />
                )}
              </button>

              <div className="text-[#E1E1E1]">|</div>

              <button
                className="flex gap-2 items-center rounded-[6px] px-4 py-2"
                onClick={() => setSortDrawer(!sortDrawer)}
              >
                <img src="/sort.svg" alt="sortIcon" />
                <span className="text-black font-gilroySemiBold text-sm">
                  Sort By
                </span>
                {sortDrawer ? (
                  <AllProductsIcons.arrowUp />
                ) : (
                  <AllProductsIcons.arrowDown />
                )}
              </button>
            </div>

            {filterDrawer && (
              <Drawer
                isOpen={filterDrawer}
                onClose={() => {
                  setFilterDrawer(false)
                }}
                className="bg-[#F7F7F7]"

              >
                <AllProductsLeft
                  clearAllFilters={clearAllFilters}
                  colors={colors}
                  processorOptions={processorOptions}
                  displayOptions={displayOptions}
                  storageOptions={storageOptions}
                  ramOptions={ramOptions}
                  handleFilterChange={handleFilterChange}
                  selectedFilters={selectedFilters}

                  className="sm:hidden w-full flex"

                />
              </Drawer>
            )}

            {sortDrawer && (
              <Drawer
                isOpen={sortDrawer}
                onClose={() => {
                  setSortDrawer(false)
                }}
                className="bg-white"

              >
                <div>
                  {sortingOptions.map((option) => (
                    <p
                      key={option}
                      className="px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-[#F7F7F7] hover:rounded-[6px] text-sm font-gilroySemiBold"
                      onClick={() => {
                        setSelectedSort(option)
                        // setIsSortOpen(false);
                      }}
                    >
                      <span>{option}</span>
                      {selectedSort === option && (
                        <AllProductsIcons.green_tick />
                      )}
                    </p>
                  ))}
                </div>
              </Drawer>
            )}

            <div className="flex flex-wrap lg:gap-y-8 justify-between items-center w-full h-full  mb-2 lg:mb-8">
              {[
                ...productsMockData,
                ...productsMockData,
                ...productsMockData,
                ...productsMockData,
                ...productsMockData,
                ...productsMockData,
              ].map((product, i) => (
                <ProductCard
                  product={product}
                  res={3}
                  key={`${i}-${product.device_name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default AllProducts
