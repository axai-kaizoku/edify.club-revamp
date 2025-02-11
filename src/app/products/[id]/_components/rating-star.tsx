import ProductReviewStars from "./product-review"

export const RatingStarComp = ({
  rating,
  className,
}: {
  rating: number | string
  className?: string
}) => {
  const numericRating = typeof rating === "string" ? parseFloat(rating) : rating
  // Calculate the number of filled, half-filled, and unfilled stars
  const filledStars = Math.floor(numericRating) // Count of fully filled stars
  const isHalfFilled = numericRating % 1 >= 0.25 && numericRating % 1 <= 0.75 // Determine if there is a half-filled star
  const unfilledStars = 5 - filledStars - (isHalfFilled ? 1 : 0) // Remaining unfilled stars

  return (
    <div className="flex flex-row items-center gap-0">
      {/* Render filled stars */}
      {Array.from({ length: filledStars }).map((_, i) => (
        <ProductReviewStars.star_filled
          className={className}
          key={`filled-${i}`}
        />
      ))}
      {/* Render half-filled star if applicable */}
      {isHalfFilled && (
        <ProductReviewStars.star_half_filled className={className} />
      )}
      {/* Render unfilled stars */}
      {Array.from({ length: unfilledStars }).map((_, i) => (
        <ProductReviewStars.star_unfilled
          key={`unfilled-${i}`}
          className={className}
        />
      ))}
    </div>
  )
}
