"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  AmazonIcon,
  Seperator,
  StarFilled,
  StarHalfFilled,
  StarUnfilled,
} from "./store-icons"
export type StoreDevice = {
  _id?: string
  team?: string
  teams?: string
  createdAt?: string
  qty?: number | null
  updatedAt?: string
  device_name: string
  device_type: string
  asset_serial_no: string | null
  serial_no: string | null
  ram: string | null
  processor: string | null
  storage: string[] | null
  custom_model: string | null
  brand: string | null
  warranty_status?: boolean
  warranty_expiary_date?: string | null // Assuming this is a date string
  ownership?: string | null
  purchase_order?: string | null
  purchase_value?: number | null
  payable?: number | null
  os?: string | null
  image?: { url: string; color: string }[] | null // Array of image objects
  invoice?: string | null
  deleted_at?: string | null // Assuming this is a date string
  device_purchase_date?: string | null // Assuming this is a date string
  assigned_at?: string | null // Assuming this is a date string
  userName?: string | null
  email?: string | null
  userId?: string | null
  city?: string | null
  addressId?: string | null
  perfectFor?: { title?: string }[] | null // Array of objects with `title` property
  deviceFeatures?:
    | {
        title?: string
        features?: { title: string; value: string }[]
      }[]
    | null // Array of feature groups with titles and feature lists
  orgId?: string | null
  ratings?: unknown[] // Could specify a type if known
  overallReviews?: number | null
  overallRating?: number | null
  ratingDetails?: {
    stars?: number
    percentage?: number
    reviewsCount?: number
  }[]
  reviews?: {
    _id?: string // MongoDB ObjectId, typically a string
    comment?: string
    rating?: number // Assuming ratings are numbers (e.g., 1 to 5)
    createdAt?: string // ISO date string
    updatedAt?: string // ISO date string
    image?: string // Path or filename for the image
    role?: number // Assuming roles are represented as numbers
    name?: string
  }[]
  latest_release?: boolean
  is_trending?: boolean
  is_charger_provided?: boolean
  description?: string
  config?: { key: string; value: string }[]
  device_condition?: string
}

const data = {
  overallReviews: "50",
  overallRating: "4.6",
  reviews: [
    {
      _id: "adsf",
      rating: "4.3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2025-01-20T12:00:00",
      image: "",
      name: "Alex K.",
    },
    {
      _id: "ads$%^&f",
      rating: "4.3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2025-01-20T12:00:00",
      image: "",
      name: "Alasd K.",
    },
    {
      _id: "adasdfsf",
      rating: "4.3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      createdAt: "2025-01-20T12:00:00",
      image: "",
      name: "Alex K.",
    },
  ],
}
export const ReviewsSecx = () => {
  const { overallRating, overallReviews } = data
  const [viewMore, setViewMore] = useState(false)
  const [visibleReviews, setVisibleReviews] = useState(2)
  useEffect(() => {
    // Set the number of visible reviews based on the total number of reviews
    setVisibleReviews(data?.reviews?.length > 2 ? 2 : data?.reviews?.length)
  }, [data])
  const handleViewMore = () => {
    // Toggle the viewMore state
    setViewMore(!viewMore)
    // If viewMore is true, show all reviews; otherwise, show only 2
    setVisibleReviews(viewMore ? 2 : data?.reviews?.length)
  }
  return (
    <section className="w-full h-full bg-[#F7F7F7] rounded-3xl flex flex-col justify-center items-center my-14">
      <h1 className="font-orange text-2xl lg:text-4xl mt-5 lg:mt-16 mb-4 lg:mb-6">
        Testimonials
      </h1>
      <div className="flex w-[90%] xs:w-[75%] sm:w-[70%] lg:w-[40%] h-full justify-between items-center my-4">
        <div className="flex flex-col gap-y-1 lg:gap-y-2 items-center">
          <span className="font-gilroySemiBold text-base lg:text-lg mb-2 lg:mb-3">
            Our Website
          </span>
          <h2 className="font-gilroyBold text-4xl lg:text-6xl 2xl:text-[5rem]">
            {overallRating}
          </h2>
          <div className="flex gap-2 items-end flex-wrap">
            <RatingStarComp
              rating={overallRating ?? ""}
              className="size-5 lg:size-7"
            />
          </div>{" "}
          <span className="text-[#858585] font-gilroyMedium text-sm lg:text-base">{`(${overallReviews} Reviews)`}</span>
        </div>
        <Seperator />
        <div className="flex flex-col gap-y-1 lg:gap-y-2 items-center">
          <AmazonIcon className="w-14 h-8 lg:w-20" />
          <h2 className="font-gilroyBold text-4xl lg:text-6xl 2xl:text-[5rem]">
            {overallRating}
          </h2>
          <div className="flex gap-2 items-end flex-wrap">
            <RatingStarComp
              rating={overallRating ?? ""}
              className="size-5 lg:size-7"
            />
          </div>{" "}
          <span className="text-[#858585] font-gilroyMedium text-sm lg:text-base">{`(${overallReviews} Reviews)`}</span>
        </div>
      </div>
      <CreateReview>
        <span
          className={buttonVariants({
            variant: "default",
            className: "w-full px-9 lg:px-16 my-2",
          })}
        >
          Write a Review
        </span>
      </CreateReview>
      <div className="w-[85%] xs:w-[80%] lg:w-[70%] flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2.5 pt-5">
          {data?.reviews?.slice(0, visibleReviews).map((v, i) => (
            <div className="flex flex-col" key={v?._id}>
              <div className="flex flex-col gap-y-4 py-3">
                <div className="hidden lg:flex justify-between items-start">
                  <div className="flex items-center gap-x-2">
                    <RatingStarComp
                      rating={v?.rating ?? "-"}
                      className="size-5"
                    />
                    <div className="text-[#858585] text-lg font-gilroyMedium">{`${
                      v?.rating ?? 0
                    }/5`}</div>
                  </div>
                  <span className="text-sm font-gilroyMedium">
                    {new Date(v?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }) ?? "-"}
                  </span>
                </div>
                <div className="flex justify-between lg:justify-normal items-center gap-x-2">
                  <div className="flex items-center gap-x-2">
                    {v?.image ? (
                      <img
                        src={v?.image}
                        alt="user"
                        className="size-8 lg:size-11 rounded-full border"
                      />
                    ) : (
                      <div className="size-10 lg:size-14 rounded-full bg-opacity-20 bg-[#5465FF] text-[#5465FF] font-gilroySemiBold text-lg flex justify-center items-center capitalize">
                        {v?.name?.split("")[0] ?? ""}
                      </div>
                    )}
                    <div className="flex flex-col ">
                      <span className="font-gilroyMedium text-sm lg:text-base/3 ">
                        {v?.name ?? ""}
                      </span>
                      <span className="text-[#858585] text-xs lg:text-sm font-gilroyMedium block lg:hidden">
                        {/* {v?.role ?? ""} */}
                        Backend Dev
                      </span>
                    </div>
                  </div>
                  <div className="lg:hidden flex flex-col items-end justify-center">
                    <RatingStarComp
                      rating={v?.rating ?? "-"}
                      className="size-4"
                    />
                    <span className="text-xs font-gilroyMedium text-[#858585]">
                      {new Date(v?.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }) ?? "-"}
                    </span>
                  </div>
                </div>
                <span className="text-[#858585] text-sm font-gilroyMedium hidden lg:block">
                  {/* {v?.role ?? ""} */}
                  Backend Dev
                </span>
                <p className="text-[#0D0C22] text-sm lg:text-base text-pretty truncate font-gilroyMedium">
                  {v?.comment ?? ""}
                </p>
              </div>
              {i < data?.reviews?.length - 1 && data?.reviews?.length > 1 && (
                <div className="h-[2px] w-full bg-[#F8F7F4] rounded-3xl mt-2.5 mb-3.5" />
              )}
            </div>
          ))}
        </div>
        {data?.reviews?.length > 2 && (
          <div className="flex items-center justify-center py-4">
            <button
              onClick={handleViewMore}
              className="w-fit px-8 py-1.5 lg:px-16 lg:py-3 group h-fit border border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center gap-1 lg:gap-1.5 rounded-md "
            >
              {viewMore ? (
                <>
                  <span className="font-gilroySemiBold text-xs lg:text-sm pr-0.5">
                    View Less
                  </span>
                  <ChevronUp className="text-black group-hover:text-white size-4 lg:size-5" />
                </>
              ) : (
                <>
                  <span className="font-gilroySemiBold text-xs lg:text-sm">
                    View More
                  </span>
                  <ChevronDown className="text-black group-hover:text-white size-4 lg:size-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
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
        <StarFilled className={className} key={`filled-${i}`} />
      ))}
      {/* Render half-filled star if applicable */}
      {isHalfFilled && <StarHalfFilled className={className} />}
      {/* Render unfilled stars */}
      {Array.from({ length: unfilledStars }).map((_, i) => (
        <StarUnfilled key={`unfilled-${i}`} className={className} />
      ))}
    </div>
  )
}
export const CreateReview = ({
  children,
  deviceId,
}: {
  children: React.ReactNode
  deviceId?: string
}) => {
  const router = useRouter()
  // const { showAlert } = useAlert()
  // const { openToast } = useToast()
  const [formData, setFormData] = useState<{
    comment: string
    deviceId: string
    rating: string
  }>({ comment: "", deviceId: deviceId ?? "", rating: "0" })
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState<{ rating: string; comment: string }>({
    rating: "",
    comment: "",
  })
  const [loading, setLoading] = useState(false)
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    let hasError = false
    if (!(formData.comment.trim().length > 0)) {
      setErrors((prev) => ({ ...prev, comment: "Comment is required !!" }))
      hasError = true
    } else {
      setErrors((prev) => ({ ...prev, comment: "" }))
    }
    if (parseInt(formData.rating) <= 0) {
      setErrors((prev) => ({ ...prev, rating: "Rating is required !!" }))
      hasError = true
    } else {
      setErrors((prev) => ({ ...prev, rating: "" }))
    }
    if (hasError) {
      setLoading(false)
      return
    }
    try {
      // await createDeviceReview(formData)
      setOpen(false)
      console.log({
        title: "Review submitted successfully!",
        description:
          "Thank you for your feedback. We appreciate your input and will review it shortly.",
        isFailure: false,
        key: "create-review-1",
      })
      setFormData({ comment: "", deviceId: deviceId ?? "", rating: "" })
      router.refresh()
    } catch (e: unknown) {
      console.error(e, "failed to write review")
    } finally {
      setLoading(false)
    }
  }
  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating: rating.toString() }))
    setErrors((prev) => ({ ...prev, rating: "" })) // Clear rating error when rating is selected
  }
  useEffect(() => {
    setFormData({ comment: "", deviceId: "", rating: "0" })
    setErrors({ comment: "", rating: "" })
  }, [open])
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogTitle className="sr-only"></DialogTitle>
        <DialogContent className="rounded-2xl bg-white p-4 shadow-lg w-96 text-center">
          <form className="flex flex-col gap-3" onSubmit={handleCreate}>
            <span className="text-xl font-gilroySemiBold text-gray-900">
              Write a Review
            </span>
            <span className="text-base text-gray-600 font-gilroyMedium">
              How would you rate your device?
            </span>
            <div className="flex items-center justify-center py-1.5">
              <RatingStarInput
                rating={Number(formData.rating)}
                onRatingChange={handleRatingChange}
                className="size-8"
              />
            </div>
            {errors.rating && (
              <p className="text-destructive text-sm  font-gilroyMedium">
                {errors.rating}
              </p>
            )}{" "}
            <textarea
              id="review-write"
              placeholder="Write a review..."
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, comment: e.target.value }))
              }
              rows={4}
              className={cn(
                " mb-2 rounded-md font-gilroyMedium text-sm p-3 outline-none focus:outline-none  bg-[#F9F9F9]",
                errors.comment ? "border-destructive/80 border " : ""
              )}
            />
            {errors.comment && (
              <p className="text-destructive text-sm font-gilroyMedium">
                {errors.comment}
              </p>
            )}
            <DialogFooter className="flex w-full items-center justify-center">
              <Button
                className="w-full rounded-md border bg-black text-white hover:text-black hover:bg-white ring-1 ring-white hover:ring-1 hover:ring-black shadow-sm"
                type="submit"
              >
                {loading ? <div>loading...</div> : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
const RatingStarInput = ({
  rating,
  onRatingChange,
  className,
}: {
  rating: number
  onRatingChange: (rating: number) => void
  className?: string
}) => {
  const handleStarClick = (index: number) => {
    onRatingChange(index + 1) // Set the rating based on the star clicked
  }
  return (
    <div className="flex flex-row items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          onClick={() => handleStarClick(index)}
          className="cursor-pointer"
        >
          {index < rating ? (
            <StarFilled className={`${className} text-yellow-500`} />
          ) : (
            <StarUnfilled className={`${className} text-gray-300`} />
          )}
        </div>
      ))}
    </div>
  )
}
