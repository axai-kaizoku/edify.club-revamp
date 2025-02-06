"use client"
import { ProductCard } from "@/components/common/product-card"
import { productsMockData } from "../best-sellers/best-sellers"

export const BestDeals = () => {
  const modifiedData = productsMockData.map(
    ({ images, description, ...rest }) => rest
  )

  return (
    <section className="w-full min-h-[40vh] lg:h-auto rounded-3xl bg-[#F3F3F3] flex flex-col lg:flex-row items-center justify-between">
      {/* Images Container */}
      <div className="text-white bg-[#151515] relative rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none lg:w-[35%] w-full h-[300px] lg:h-[400px]">
        {/* Mouse */}
        <img
          className="object-contain absolute top-0 left-1/3 w-[130px] sm:w-[200px]"
          src="/media/best-deals/mouse.webp"
          alt="mouse"
        />

        {/* Laptop 1 */}
        <img
          className="object-contain absolute top-[4%] left-0 w-[130px] sm:w-[200px]"
          src="/media/best-deals/laptop-1.webp"
          alt="laptop - 1"
        />

        {/* CPU */}
        <img
          className="object-contain absolute -bottom-0 w-[130px] sm:w-[200px]"
          src="/media/best-deals/cpu.webp"
          alt="cpu"
        />

        {/* Keyboard */}
        <img
          className="object-contain absolute -bottom-[13%] xs:-bottom-[4%] lg:-bottom-[2%] right-0 w-[180px] xs:w-[200px] sm:w-[300px] h-[200px] sm:h-[200px]"
          src="/media/best-deals/keyboard.webp"
          alt="keyboard"
        />

        {/* Laptop 2 */}
        <img
          className="object-contain absolute top-0 right-0 translate-x-3 sm:translate-x-4 -translate-y-6 w-[115px] xs:w-[130px] sm:w-[180px]"
          src="/media/best-deals/laptop-2-m4.webp"
          alt="laptop-2"
        />

        {/* Title */}
        <h2 className="font-orange text-4xl lg:text-5xl absolute right-[38%] top-[34%]">
          Best <br />
          Deals
        </h2>
      </div>

      {/* Products Grid */}
      <div className="w-full lg:w-[65%] p-2 lg:p-4 flex justify-around flex-wrap lg:flex-nowrap ">
        {[...modifiedData, modifiedData[0]].map((product, i) => (
          <ProductCard
            addToCart={false}
            imgBgColor="white"
            product={product}
            res={3}
            key={`${i}-${product.device_name}`}
          />
        ))}
      </div>
    </section>
  )
}
