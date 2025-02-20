import { Container } from "@/components/common/container"
import { Hero } from "./_components/hero"
import BentoGrid from "./_components/bento-grid/bento-grid"
import { BestSellers } from "./_components/best-sellers/best-sellers"
import { ImageComparison } from "./_components/img-comparison/img-comparison"
import { WatchAndShop } from "./_components/watch-and-shop/watch-and-shop"
import { ImageCarousel } from "./_components/img-carousel/img-carousel"
import { LatestRelease } from "./_components/latest-release/latest-release"
import { BestDeals } from "./_components/best-deals/best-deals"
import Blogs from "./_components/blogs/blogs"
import { ExploreProducts } from "./_components/exp-products/exp-products"
import Refurbishment from "./_components/refurbishment/refurbishment"
import { TopPicks } from "./_components/top-picks/top-picks"
import Testimonials from "./_components/testimonials/testimonials"
import { Brands } from "./_components/brands/brands-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="flex flex-col gap-8 xl:gap-32 pb-10">
        <BestSellers />
        <ImageCarousel />
        <BestDeals />
        <BentoGrid />
        <TopPicks />
        <WatchAndShop />
        <Brands />
        <ExploreProducts />
        <ImageComparison />
        <LatestRelease />
        <Refurbishment />
        <Blogs />
        <Testimonials />
      </Container>
    </>
  )
}
