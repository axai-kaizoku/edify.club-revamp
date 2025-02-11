"use client"
import React, { useEffect, useRef, useState } from "react"
import { DeviceSecx } from "./_components/device-secx"
import { DeviceDetailedSecx } from "./_components/device-detail-secx"
import IntroVideo from "./_components/intro-video"
import { useScroll, motion, useTransform } from "framer-motion"
import { FAQ } from "./_components/faq"
import { ReviewsSecx } from "./_components/review-secx"
import { Container } from "@/components/common/container"

function Products() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref })

  // Scale down video
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])

  // State to track scroll pause
  const [isScrollPaused, setIsScrollPaused] = useState(true)

  useEffect(() => {
    if (isScrollPaused) {
      document.body.style.overflow = "hidden" // Pause scroll
      setTimeout(() => {
        setIsScrollPaused(false)
        document.body.style.overflow = "auto" // Resume scroll
      }, 3000) // Adjust time as needed
    }
  }, [isScrollPaused])

  return (
    <>
      <Container ref={ref}>
        <DeviceSecx />
        <motion.div style={{ scale }}>
          <IntroVideo />
        </motion.div>
        <DeviceDetailedSecx />
        <ReviewsSecx />
        <FAQ />
      </Container>
    </>
  )
}

export default Products
