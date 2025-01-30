"use client"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useWindowSize } from "@/hooks/useWindowSize"

export const Hero = () => {
  const windowSize = useWindowSize()
  const images = [
    {
      key: "apple",
      src: "/media/hero/apple.png",
      className: "-translate-y-60",
      width: 425,
      height: 220,
    },
    {
      key: "apple_tv",
      src: "/media/hero/apple_tv.png",
      className: "translate-y-16",
      width: 425,
      height: 220,
    },
    {
      key: "keyboard",
      src: "/media/hero/keyboard.png",
      className: "translate-y-5",
      width: 425,
      height: 220,
    },
    {
      key: "mac_mini",
      src: "/media/hero/mac_mini.png",
      className: "translate-y-12",
      width: 425,
      height: 220,
    },
    {
      key: "windows",
      src: "/media/hero/windows.png",
      className: "translate-y-12",
      width: 425,
      height: 220,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getPosition = (index: number) => {
    const position = (index - activeIndex + images.length) % images.length
    const screenWidth = windowSize?.width ?? 1440
    const screenHeight = windowSize?.height ?? 900

    // Responsive position calculations
    let baseX = screenWidth * 0.48
    let baseY = screenHeight * 0.15

    // Adjust for smaller screens
    if (screenWidth < 1024) {
      baseX = screenWidth * 0.48
      baseY = screenHeight * 0.1
    }

    // Adjust for extra large screens
    if (screenWidth > 1920) {
      baseX = screenWidth * 0.48
      baseY = screenHeight * 0.2
    }
    const centerYOffset = -screenHeight * 0.11 // How much center image moves up

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
    <section className="flex flex-col items-center justify-center mt-10 h-full w-full">
      <h1 className="font-orange whitespace-nowrap text-6xl select-none">
        future of
      </h1>
      <div className="relative flex flex-col items-center">
        <h1 className="font-orange z-0 absolute text-9xl text-black text-stroke select-none">
          Refurbished
        </h1>
        <h1 className="font-orange z-10 absolute text-9xl text-transparent text-stroke select-none">
          Refurbished
        </h1>
      </div>
      <div className="relative h-[40vh] -ml-96 w-full ">
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
              className={`absolute object-contain ${image.className}`}
              src={image.src}
              alt={image.key}
              style={{
                width: `${(image.width / 1440) * 100}vw`, // Responsive width
                height: "auto",
                maxWidth: image.width,
                left: "50%",
                top: "50%",
                zIndex: position.zIndex,
              }}
            />
          )
        })}
      </div>
    </section>
  )
}
