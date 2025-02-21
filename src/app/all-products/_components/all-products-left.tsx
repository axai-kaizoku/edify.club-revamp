import React, { useState } from "react"
import { cn } from "@/lib/utils" // Adjust the import path based on where `cn` is defined

import { FilterOption, FilterSection } from "../page"
import { AllProductsIcons } from "../icons"
import { PriceSlider } from "./price-slider"

interface AllProductsLeftSection {
  clearAllFilters: () => void
  selectedFilters: {
    color?: string
    storage?: string
    ram?: string
    processor?: string
    display?: string
  }
  colors: string[]
  storageOptions: string[]
  ramOptions: string[]
  processorOptions: string[]
  handleFilterChange: (key: string, value: string) => void
  displayOptions: string[]
  className?: string // Allowing custom className prop

}

function AllProductsLeft({
  clearAllFilters,
  selectedFilters,
  colors,
  storageOptions,
  ramOptions,
  processorOptions,
  handleFilterChange,
  displayOptions,
  className, // Accepting custom styles
}: AllProductsLeftSection) {
  const [selectBrand, setSelectBrand] = useState<number | null>(null)
  return (
    <div
      className={cn(
        "w-full h-fit bg-[#F7F7F7] flex-col gap-3 lg:gap-4 rounded-xl lg:rounded-3xl p-2 lg:p-4 ",
        className
      )}
    >

      <div className="flex justify-between items-center px-5">
        <p className="text-base lg:text-2xl font-gilroyMedium">Filters</p>
        <p
          className="text-sm lg:text-base text-[#828282] font-gilroyMedium cursor-pointer"

          onClick={() => {
            clearAllFilters();
            setSelectBrand(null)
          }}
        >
          Clear All
        </p>
      </div>

      {/* Brand Filter */}
      <FilterSection title="Brand">
        <input
          type="search"
          placeholder="Search brands..."
          className="p-2 rounded-md w-full bg-[#F7F7F7] text-xs focus:outline-none placeholder:font-gilroyMedium lg:pl-6"
        />
        <div className="flex flex-col gap-2 mt-2">
          {[
            { icon: AllProductsIcons.windows, name: "Windows" },
            { icon: AllProductsIcons.hp, name: "Hp" },
            { icon: AllProductsIcons.acer, name: "Acer" },
            { icon: AllProductsIcons.apple, name: "Apple" },
          ].map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              onClick={() => setSelectBrand(index)}
              className={`flex justify-between items-center p-2 rounded-md w-full hover:bg-[#F7F7F7] cursor-pointer ${
                selectBrand === index ? "bg-[#E0E0E0]" : ""
              }`}
            >
              <div className="flex gap-2 items-center">
                <Icon />
                <h1 className="text-xs lg:text-sm font-gilroySemiBold">
                  {name}
                </h1>
              </div>
              {selectBrand === index && <AllProductsIcons.green_tick />}
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Other Filters */}
      <FilterSection title="Price">
        <PriceSlider />
      </FilterSection>

      <FilterSection title="Color">
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <div
              key={color}
              className={`size-4 rounded-full ring ring-gray-700 ${
                selectedFilters.color === color
                  ? "ring-opacity-15"
                  : "ring-opacity-0"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleFilterChange("color", color)}
            ></div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Storage">
        <FilterOption
          options={storageOptions}
          selected={selectedFilters.storage || ""}
          onSelect={(value) => handleFilterChange("storage", value)}
        />
      </FilterSection>

      <FilterSection title="RAM">
        <FilterOption
          options={ramOptions}
          selected={selectedFilters.ram || ""}
          onSelect={(value) => handleFilterChange("ram", value)}
        />
      </FilterSection>

      <FilterSection title="Processor">
        <FilterOption
          options={processorOptions}
          selected={selectedFilters.processor || ""}
          onSelect={(value) => handleFilterChange("processor", value)}
        />
      </FilterSection>

      <FilterSection title="Display Size">
        <FilterOption
          options={displayOptions}
          selected={selectedFilters.display || ""}
          onSelect={(value) => handleFilterChange("display", value)}
        />
      </FilterSection>
    </div>

  )
}

export default AllProductsLeft
