import { Container } from "@/components/common/container"
import { Hero } from "./_components/hero"
import BentoGrid from "./_components/bento-grid/bento-grid"
import Brands from "./_components/brands/Brands"
import { BestSellers } from "./_components/best-sellers/best-sellers"
import { ImageComparison } from "./_components/img-comparison/img-comparison"
import { WatchAndShop } from "./_components/watch-and-shop/watch-and-shop"
import Footer from "./_components/footer/Footer"
import { ImageCarousel } from "./_components/img-carousel/img-carousel"
import { LatestRelease } from "./_components/latest-release/latest-release"
import { BestDeals } from "./_components/best-deals/best-deals"

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="flex flex-col gap-8">
        <BentoGrid />
        {/* <Brands /> */}
        <BestSellers />
        <ImageComparison />
        <WatchAndShop />
        <ImageCarousel />
        <LatestRelease />
        <BestDeals />
        <div className="h-36 w-full" />
        <Footer />
      </Container>
    </>
  )
}
