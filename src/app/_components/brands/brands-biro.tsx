"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useWindowSize } from "@/hooks/use-window-size"

export function Brands() {
  const ref = useRef<HTMLElement | null>(null)
  const windowSize = useWindowSize()
  const isInView = useInView(ref, { margin: "-300px", once: true })
  // margin: "-250px"

  const leftSideImages = [
    { key: "apple", src: "/media/brands/Apple.webp" },
    { key: "dell", src: "/media/brands/Dell.webp" },
    { key: "asus", src: "/media/brands/Asus.webp" },
  ]

  const rightSideImages = [
    { key: "hp", src: "/media/brands/Hp.webp" },
    { key: "lenovo", src: "/media/brands/Lenovo.webp" },
    { key: "windows", src: "/media/brands/Windows.webp" },
    { key: "acer", src: "/media/brands/Acer.webp" },
  ]

  const getAllPositions = (isMobile: boolean) => {
    const positions: { x: number; y: number; scale: number }[] = []
    const width = windowSize?.width ?? 1440
    const height = windowSize?.height ?? 900
    const margin = 100

    if (isMobile) {
      // Mobile layout (top and bottom rows)
      const availableWidth = width - margin * 1.99
      const radius = Math.min(height * 0.4, 190)

      // Top row (leftSideImages)
      leftSideImages.forEach((_, i) => {
        const angle =
          Math.PI * 1.1 + (Math.PI * 0.5 * i + 1) / (leftSideImages.length - 1)
        const x =
          -availableWidth / 1.2 +
          (availableWidth / (leftSideImages.length + -0.7)) * (i + 1)
        const y = radius * Math.sin(angle)
        positions.push({ x, y, scale: 1 })
      })

      // Bottom row (rightSideImages)
      rightSideImages.forEach((_, i) => {
        const x =
          -availableWidth / 0.89 +
          (availableWidth / (rightSideImages.length + -1.77)) * (i + 1)
        const angle =
          Math.PI * 1.108 +
          (Math.PI * 0.59 * i + 0.1) / (leftSideImages.length - 0.7)

        const y = -radius * Math.sin(angle)
        positions.push({ x, y, scale: 1 })
      })
    } else {
      // Desktop/tablet layout (circular arrangement)
      const radius = Math.min(width * 0.35, 500)
      const verticalRadius = Math.min(height * 0.34, 300)

      // Left side circular arrangement
      leftSideImages.forEach((_, i) => {
        const angle =
          Math.PI * 0.7 +
          (Math.PI * 0.49 * i + 0.5) / (leftSideImages.length - 1.2)
        positions.push({
          x: radius * Math.cos(angle),
          y: verticalRadius * Math.sin(angle),
          scale: 1,
        })
      })

      // Right side circular arrangement
      rightSideImages.forEach((_, i) => {
        const angle =
          Math.PI * 1.67 + (Math.PI * 0.67 * i) / (rightSideImages.length - 1)
        positions.push({
          x: radius * Math.cos(angle),
          y: verticalRadius * Math.sin(angle),
          scale: 1,
        })
      })
    }

    return positions
  }

  const getInitialPositions = () => {
    const initialRadius = 65
    const leftCount = leftSideImages.length
    const rightCount = rightSideImages.length

    // Positions for left-side images (placed on the left semicircle)
    const leftPositions = leftSideImages.map((_, i) => {
      const angle = Math.PI + (Math.PI * (i + 1)) / (leftCount + 1)
      return {
        x: initialRadius * Math.sin(angle),
        y: initialRadius * Math.cos(angle),
        scale: 0.8,
      }
    })

    // Positions for right-side images (placed on the right semicircle)
    const rightPositions = rightSideImages.map((_, i) => {
      const angle = (Math.PI * (i + 1)) / (rightCount + 1)
      return {
        x: initialRadius * Math.sin(angle),
        y: initialRadius * Math.cos(angle),
        scale: 0.8,
      }
    })

    return [...leftPositions, ...rightPositions]
  }

  const isMobile = (windowSize?.width || 0) < 640
  const targetPositions = getAllPositions(isMobile)
  const initialPositions = getInitialPositions()

  return (
    <section
      ref={ref}
      className="flex justify-center relative items-center my-6 xs:my-7 sm:my-10 xl:py-0 w-full h-[50dvh] xs:h-[60dvh] lg:h-[90dvh] xl:h-[80dvh]"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-gilroyBold text-[#BEBEBE] z-0">
        Shop your <br /> Favourite{" "}
        <span className="bg-gradient-to-r from-[#3C8FF0] via-[#B467E2] to-[#E159E3] bg-clip-text text-transparent">
          Brands.
        </span>
      </h1>

      {[...leftSideImages, ...rightSideImages].map((image, index) => (
        <motion.img
          key={image.key}
          src={image.src}
          alt={image.key}
          initial={initialPositions[index]}
          animate={isInView ? targetPositions[index] : initialPositions[index]}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute object-contain"
          style={{
            width: isMobile ? "40vw" : "10vw",
            maxWidth: isMobile ? "120px" : "192px",
            height: "auto",
            zIndex: index === 2 || index === 5 ? 1 : 0,
          }}
        />
      ))}
    </section>
  )
}
