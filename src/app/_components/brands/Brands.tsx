"use client"
import { useRef } from "react"
import { easeInOut, motion, useInView } from "framer-motion"

function Brands() {
  const ref = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(ref, {
    margin: "-300px",
    once: true,
  })

  const scrolled = isInView

  return (
    <div
      ref={ref}
      className="flex justify-center relative items-center py-16 lg:py-72"
    >
      <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-gilroyBold text-[#BEBEBE]">
        Shop your <br /> Favourite{" "}
        <span className="bg-gradient-to-r from-[#3C8FF0] via-[#B467E2] to-[#E1593E] bg-clip-text text-transparent">
          Brands.
        </span>
      </h1>

      <motion.img
        src="/media/brands/Acer.webp"
        alt="Acer"
        initial={{ scale: 0.9, y: 0 }} // Start smaller & at the default position
        animate={{
          scale: scrolled ? 1.1 : 0.9, // Scale up smoothly
          y: scrolled ? 220 : 120, // Move up smoothly
          x: scrolled ? 300 : 30, // Move up smoothly
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth transition timing
        className="size-20 md:size-36 lg:size-40 xl:size-48 absolute"
      />

      <motion.img
        src="/media/brands/Apple.webp"
        alt="Apple"
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="size-20  md:size-36 lg:size-40 xl:size-48  absolute"
        animate={{
          y: scrolled ? 160 : 50,
          x: scrolled ? -520 : -40,
        }}
      />

      <motion.img
        src="/media/brands/Asus.webp"
        alt="Asus"
        animate={{
          y: scrolled ? -250 : -50,
          x: scrolled ? -390 : -120,
        }}
        transition={{ duration: 0.7, ease: easeInOut }}
        className="size-20 md:size-36 lg:size-40  xl:size-48 absolute"
      />

      <motion.img
        src="/media/brands/Dell.webp"
        animate={{
          y: scrolled ? -125 : 50,
          x: scrolled ? -580 : -160,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        alt="Dell"
        className="size-20 md:size-36 lg:size-40 xl:size-48  absolute"
      />

      {/* ✅ HP Image with Smooth Position & Scale Animation */}
      <motion.img
        src="/media/brands/Hp.webp"
        alt="HP"
        initial={{ scale: 0.9, y: 0 }} // Start smaller & at the default position
        animate={{
          scale: scrolled ? 1.1 : 0.9, // Scale up smoothly
          y: scrolled ? -240 : -70, // Move up smoothly
          x: scrolled ? 300 : 30, // Move up smoothly
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth transition timing
        className="size-20 md:size-36 lg:size-40 xl:size-48 absolute"
      />
      <motion.img
        src="/media/brands/Lenovo.webp"
        alt="Lenovo"
        initial={{ y: 0 }}
        animate={{
          y: scrolled ? -135 : 20,
          x: scrolled ? 580 : 80,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth transition timing
        className="size-20 md:size-36 lg:size-40 xl:size-48 absolute"
      />
      <motion.img
        src="/media/brands/Windows.webp"
        alt="Windows"
        animate={{
          y: scrolled ? 135 : 20,
          x: scrolled ? 580 : 190,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth transition timing
        className="size-20 md:size-36 lg:size-40 xl:size-48 absolute"
      />
    </div>
  )
}

export default Brands
