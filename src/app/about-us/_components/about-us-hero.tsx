"use client"

import { useWindowSize } from "@/hooks/use-window-size"
import { motion } from "motion/react"

export const AboutUsHero = () => {
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
      key: "Macbooks",
      src: "/media/hero/apple.png",
      desc: "the power house",
      width: 550,
      height: 300,
    },
    {
      key: "Windows",
      src: "/media/hero/windows.png",
      desc: "the power house",
      width: 425,
      height: 220,
    },
  ]

  const getPosition = (index: number) => {
    const position = (index - 0 + images.length) % images.length
    const screenWidth = windowSize?.width ?? 1440
    const screenHeight = windowSize?.height ?? 900

    // Responsive position calculations
    let baseX = screenWidth * 0.35
    let baseY = screenHeight * 0.03

    // Adjust for smaller screens
    if (screenWidth < 1024) {
      baseX = screenWidth * 0.48
      baseY = screenHeight * 0.01
    }

    // Adjust for extra large screens
    if (screenWidth > 1920) {
      baseY = screenHeight * 0.03
    }

    let centerYOffset = -screenHeight * 0.07 // How much center image moves up

    if (screenWidth < 1080) {
      centerYOffset = screenHeight * 0.03
    }
    if (screenWidth > 1024) {
      centerYOffset = -screenHeight * 0.115
    }

    switch (position) {
      case 0: // Left
        return {
          x: -baseX,
          y: baseY,
          scale: 0.6,
          opacity: 1,
          zIndex: 2,
          filter: "blur(4px)",
        }
      case 1: // Center
        return {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 3,
        }
      case 2: // Right
        return {
          x: baseX,
          y: baseY * 1.3,
          scale: 0.6,
          opacity: 1,
          zIndex: 2,
          filter: "blur(4px)",
        }

      default:
        return {}
    }
  }

  return (
    <div className="relative h-[15vh] sm:h-[25vh] md:h-[30vh] lg:h-[50vh]  flex items-start justify-center overflow-hidden w-full">
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
            className={`absolute object-contain `}
            src={image.src}
            alt={image.key}
            style={{
              width: `${(image.width / 1440) * 100}vw`, // Responsive width
              height: "auto",
              maxWidth: image.width,
              zIndex: position.zIndex,
              filter: position.filter,
            }}
          />
        )
      })}
    </div>
  )
}
