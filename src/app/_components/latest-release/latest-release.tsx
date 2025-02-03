import { ProductCard } from "@/components/common/product-card"
import { productsMockData } from "../best-sellers/best-sellers"

export const LatestRelease = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-2 lg:my-6">
      <h3 className="font-orange text-2xl lg:text-4xl mt-5 lg:mt-1 mb-4 lg:mb-6">
        LatestRelease
      </h3>
      <div className="flex flex-wrap justify-around items-center w-full h-full lg:px-3 mb-2 lg:mb-8">
        {[...productsMockData, ...productsMockData].map((product, i) => (
          <ProductCard
            product={product}
            res={3}
            key={`${i}-${product.device_name}`}
          />
        ))}
      </div>
    </div>
  )
}
