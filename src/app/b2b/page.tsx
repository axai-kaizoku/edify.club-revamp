import { Container } from "@/components/common/container"
import React from "react"
import B2BHero from "./_components/hero"
import Testimonials from "../_components/testimonials/testimonials"
import Blogs from "../_components/blogs/blogs"
import { FAQ } from "../products/[id]/_components/faq"
import Partners from "./_components/partners"
import Trust from "./_components/trust"
import Impact from "./_components/impact"

function B2B() {
  return (
    <Container>
      <B2BHero />
      <Partners heading="Trusted by 50+ Startups" />
      <Impact />
      <Trust />
      <Partners heading="Backed by the best Investors" />
      <div className="flex flex-col sm:mt-20 gap-16 sm:gap-24">
        <Blogs />
        <Testimonials />
        <FAQ />
      </div>
    </Container>
  )
}

export default B2B
