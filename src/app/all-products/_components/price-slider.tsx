"use client"
import { useState } from "react"
import { DualRangeSlider } from "@/components/ui/dual-range-slider"
import { Input } from "@/components/ui/input"

export const PriceSlider = () => {
  const [values, setValues] = useState([25000, 75000])

  return (
    <div className="w-full px-2 space-y-14">
      <DualRangeSlider
        label={(value) => value?.toLocaleString()}
        value={values}
        onValueChange={setValues}
        labelPosition="bottom"
        min={10000}
        max={100000}
        step={1000}
        rangeValues={[4, 5, 6, 7, 8, 7, 8, 9, 10, 9, 5, 6, 7, 8, 5, 8]}
      />
      <div className="flex  justify-between gap-x-4 items-center">
        <Input
          type="text"
          value={values[0].toLocaleString()}
          readOnly
          className="block py-5 cursor-not-allowed rounded-md font-gilroyMedium border-2 border-[#D7D7D7]"
        />
        <div className="h-[1.5px] w-10 rounded-full bg-[#D7D7D7]" />
        <Input
          type="text"
          value={values[1].toLocaleString()}
          readOnly
          className="block py-5 cursor-not-allowed rounded-md font-gilroyMedium border-2 border-[#D7D7D7]"
        />
      </div>
    </div>
  )
}
