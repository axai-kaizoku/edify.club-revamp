import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/motion-carousel"

export function ImageCarousel() {
  const banners = [
    "/media/slider/banner1.webp",
    "/media/slider/banner2.webp",
    "/media/slider/banner1.webp",
  ]

  return (
    <div className="flex justify-center items-center my-3 lg:my-10">
      <Carousel
        autoplay
        autoplayInterval={2500}
        className="w-full xl:max-w-full"
      >
        <CarouselContent>
          {banners.map((banner, i) => (
            <CarouselItem
              key={`${banner}-${i}`}
              className="flex justify-center px-3 lg:px-6"
            >
              <img
                src={banner}
                alt={`banner-${i}`}
                className="object-contain w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>
    </div>
  )
}
