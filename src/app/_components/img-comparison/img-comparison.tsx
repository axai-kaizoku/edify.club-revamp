import {
  ImageComparison as Comparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison"
import { ChevronLeft, ChevronRight } from "./icons"

export const ImageComparison = () => {
  return (
    <section className="w-full h-full flex justify-center items-center my-1.5 lg:my-3">
      <div className="w-[95%] h-full">
        <Comparison
          className=" aspect-video w-full rounded-[34.401px] border border-zinc-200 dark:border-zinc-800"
          // enableHover
          springOptions={{
            bounce: 0.3,
          }}
        >
          <ImageComparisonImage
            src="/media/comparison/slider-img-1.webp"
            alt="Motion Primitives Dark"
            position="left"
          />
          <ImageComparisonImage
            src="/media/comparison/slider-img-2.webp"
            alt="Motion Primitives Light"
            position="right"
          />
          <ImageComparisonSlider className="w-0.5 lg:w-1.5 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80">
            <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex justify-center items-center gap-x-2.5">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </ImageComparisonSlider>
        </Comparison>
      </div>
    </section>
  )
}
