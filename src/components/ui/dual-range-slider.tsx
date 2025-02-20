"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface DualRangeSliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: "top" | "bottom"
  label?: (value: number | undefined) => React.ReactNode
  rangeValues?: number[]
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(
  (
    {
      className,
      label,
      labelPosition = "top",
      min = 0,
      max = 100,
      rangeValues,
      value,
      ...props
    },
    ref
  ) => {
    const currentValues = Array.isArray(value) ? value : [min, max]
    const currentMin = currentValues[0]
    const currentMax = currentValues[1]

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full h-12 touch-none select-none items-end",
          className
        )}
        min={min}
        max={max}
        value={currentValues}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow bg-[#F3F3F3] rounded-full">
          {rangeValues?.map((val, i) => {
            const N = rangeValues.length
            const segmentLength = (max - min) / N
            const segmentStart = min + i * segmentLength
            const segmentEnd = segmentStart + segmentLength

            const barMin = Math.max(segmentStart, currentMin)
            const barMax = Math.min(segmentEnd, currentMax)

            if (barMin >= barMax) return null

            const left = ((barMin - min) / (max - min)) * 100
            const width = ((barMax - barMin) / (max - min)) * 90
            const height = val * 6 // Adjust height multiplier as needed

            return (
              <div
                key={`bar-${i}`}
                className="absolute bottom-0 mb-1 rounded-sm bg-[#F5FCF2] "
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  height: `${height}px`,
                }}
              />
            )
          })}
          <SliderPrimitive.Range className="absolute h-1 bottom-0 bg-[#2E8016]" />
        </SliderPrimitive.Track>

        {currentValues.map((val, index) => (
          <React.Fragment key={index}>
            <SliderPrimitive.Thumb className="relative block size-4 cursor-pointer rounded-full border-2 border-[#2E8016] bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 -bottom-1.5">
              {label && (
                <span
                  className={cn(
                    "absolute flex w-full justify-center font-gilroyMedium",
                    labelPosition === "top" && "-top-7",
                    labelPosition === "bottom" && "top-4"
                  )}
                >
                  {label(val)}
                </span>
              )}
            </SliderPrimitive.Thumb>
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    )
  }
)
DualRangeSlider.displayName = "DualRangeSlider"

export { DualRangeSlider }
