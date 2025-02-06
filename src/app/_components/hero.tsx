"use client"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useWindowSize } from "@/hooks/use-window-size"

export const Hero = () => {
  const windowSize = useWindowSize()
  const images = [
    {
      key: "desktops",
      src: "/media/hero/apple_tv.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
    {
      key: "Mini PC's",
      src: "/media/hero/mac_mini.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
    {
      key: "Macbooks",
      src: "/media/hero/apple.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
    {
      key: "Windows",
      src: "/media/hero/windows.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
    {
      key: "Accessories ",
      src: "/media/hero/keyboard.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % images.length)
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [])

  const getPosition = (index: number) => {
    const position = (index - activeIndex + images.length) % images.length
    const screenWidth = windowSize?.width ?? 1440
    const screenHeight = windowSize?.height ?? 900

    // Responsive position calculations
    let baseX = screenWidth * 0.48
    let baseY = screenHeight * 0.15

    // Adjust for smaller screens
    if (screenWidth < 1024) {
      baseY = screenHeight * 0.1
    }

    // Adjust for extra large screens
    if (screenWidth > 1920) {
      baseX = screenWidth * 0.48
      baseY = screenHeight * 0.2
    }

    let centerYOffset = -screenHeight * 0.07 // How much center image moves up

    if (screenWidth < 1080) {
      centerYOffset = screenHeight * 0.03
    }
    if (screenWidth > 1024) {
      centerYOffset = -screenHeight * 0.115
    }

    switch (position) {
      case 0: // Most left (bottom)
        return {
          x: -baseX * 0.6,
          y: baseY * 2.2,
          scale: 0.8,
          opacity: 0,
          zIndex: 1,
        }
      case 1: // Left
        return {
          x: -baseX,
          y: baseY,
          scale: 0.9,
          opacity: 1,
          zIndex: 2,
        }
      case 2: // Center
        return {
          x: 0,
          y: centerYOffset,
          scale: 1.1,
          opacity: 1,
          zIndex: 3,
        }
      case 3: // Right
        return {
          x: baseX,
          y: baseY,
          scale: 0.9,
          opacity: 1,
          zIndex: 2,
        }
      case 4: // Most right (bottom)
        return {
          x: baseX * 0.6,
          y: baseY * 2.2,
          scale: 0.8,
          opacity: 0,
          zIndex: 1,
        }
      default:
        return {}
    }
  }

  return (
    <section className="flex flex-col items-center justify-start mt-[5%] lg:mt-[5%] 2xl:mt-[4%] w-full h-full">
      <h1 className="font-orange whitespace-nowrap text-4xl lg:text-6xl 2xl:text-7xl select-none">
        future of
      </h1>
      <span className="relative flex flex-col items-center mt-[1%] lg:mt-[2%] 2xl:mt-[1.5%] font-orange text-6xl sm:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[13rem]">
        <h1 className="z-0 absolute text-black text-stroke select-none">
          Refurbished
        </h1>
        <h1 className="z-10 absolute text-transparent text-stroke select-none">
          Refurbished
        </h1>
      </span>
      <div className="relative h-[22vh] sm:h-[40vh]  lg:h-[75vh] 2xl:h-[80vh] flex items-start lg:items-center justify-center overflow-hidden w-full">
        {images.map((image, index) => {
          const position = getPosition(index)

          return (
            <motion.img
              key={image.key}
              layout
              initial={false}
              animate={{ ...position }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                layout: {
                  duration: 0.5,
                },
              }}
              className={`absolute object-contain`}
              src={image.src}
              alt={image.key}
              style={{
                width: `${(image.width / 1440) * 100}vw`, // Responsive width
                height: "auto",
                maxWidth: image.width,
                zIndex: position.zIndex,
              }}
            />
          )
        })}
      </div>
      <button className="max-w-md w-fit px-5 font-gilroySemiBold h-9 text-sm justify-center items-center flex sm:hidden text-white bg-black ring-4 rounded-3xl ring-black/50">
        <span>View All</span>
      </button>
      <div className="w-full h-full flex flex-col justify-center items-center lg:px-6">
        <h3 className="font-orange text-2xl lg:text-4xl mt-5 lg:mt-1 mb-4 lg:mb-12">
          Categories
        </h3>
        <div className="flex justify-start lg:justify-around items-center w-full h-full overflow-x-auto px-3">
          {images.map((img) => (
            <div
              key={img.key}
              className="bg-[#F0F7FF] cursor-pointer transition-all duration-200 hover:translate-y-4 mb-4 rounded-2xl mx-2 max-w-60 max-h-72 min-w-40 min-h-44 lg:w-60 lg:h-72 w-40 h-56 flex flex-col items-center justify-between"
            >
              <div className="max-w-56 max-h-56 min-w-36 min-h-36 lg:min-w-40 lg:min-h-40  flex items-center justify-center px-4 pt-6">
                <img
                  className="object-contain"
                  src={img.src}
                  alt={img.key}
                  width={220}
                  height={150}
                />
              </div>
              <span className="flex flex-col items-center mb-3 lg:mb-4">
                <h4 className="text-xl lg:text-3xl font-orange first-letter:uppercase">
                  {img.key}
                </h4>
                <p className="font-gilroyMedium">{img.desc}</p>
              </span>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="h-16 w-full pointer-events-none" />
    </section>
  )
}
