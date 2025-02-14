import { Button } from "@/components/ui/button"
import { AboutUsHero } from "./_components/about-us-hero"
import { OrbitingCirclesSection } from "./_components/orbiting-circles-section"
import { WhyUsSection } from "./_components/why-us-section"
import Blogs from "../_components/blogs/blogs"
import Testimonials from "../_components/testimonials/testimonials"
import { FAQ } from "../products/[id]/_components/faq"
import Impact from "../b2b/_components/impact"
import Partners from "../b2b/_components/partners"
import { Container } from "@/components/common/container"

export default function Page() {
  return (
    <>
      <section className="w-full h-full min-h-screen flex flex-col justify-start items-center bg-[url(/media/b2b/bg.svg)] gap-y-10 sm:gap-y-12 xl:gap-y-14">
        <section className="flex flex-col gap-y-8 justify-start w-full mt-[6%] lg:mt-[7%]">
          <h1 className="font-orange text-center flex flex-col justify-center items-center gap-y-1 lg:gap-y-4">
            <span className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
              Redefining Reliability:
            </span>
            <span className="text-xl sm:text-4xl lg:text-6xl xl:text-7xl">
              Premium Refurbished Laptops for You
            </span>
          </h1>

          <div className="h-1 w-full pointer-events-none hidden sm:block" />

          <AboutUsHero />
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start gap-y-4 sm:gap-y-5 lg:gap-y-8 w-full lg:w-[55%] h-full lg:pl-[9%]">
            <h1 className="font-orange flex flex-col justify-center text-nowrap items-center lg:items-start gap-y-1 text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
              <span>Trusted by 50+</span>
              <span>Startup founders </span>
            </h1>

            <p className="text-center lg:text-left font-gilroyMedium text-lg sm:text-xl lg:text-2xl">
              Helping startups scale with intuitive
              <br />
              and impactful design solutions.
            </p>

            <Button className="w-fit font-gilroyMedium px-10 lg:px-20">
              Explore Products
            </Button>
          </div>

          <div className="w-full lg:w-[45%] relative overflow-hidden">
            <OrbitingCirclesSection className="ml-0 lg:ml-[40%]" />
            <div className="-mt-[80%] block lg:hidden h-72 absolute bottom-0 bg-gradient-to-b from-transparent via-white to-white  w-full z-10" />
          </div>
        </section>
      </section>

      <section className="w-full h-full flex flex-col justify-start items-center gap-y-8 xs:gap-y-9 lg:gap-y-16 mt-[2%] lg:mt-[7%]">
        <h1 className="font-orange text-center text-4xl lg:text-5xl xl:text-6xl">
          Why Us?
        </h1>

        <WhyUsSection />
      </section>

      <Container className="mt-[7%] lg:mt-[5%]">
        <Impact />
        <Partners heading="Backed by the best Investors" />
        <div className="flex flex-col gap-16">
          <Blogs />
          <Testimonials />
          <FAQ />
        </div>
      </Container>
    </>
  )
}
