import { Skeleton } from "@/components/ui/skeleton"

const OrderDetailsCardSkeleton = () => (
  <article className="relative flex flex-col gap-y-2 w-full h-full border border-[#DEDEDE] rounded-xl pt-3">
    <header className="w-full flex justify-between items-start lg:items-center px-3 mb-1 lg:mb-3">
      <div className="flex items-end lg:items-center gap-x-1">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="flex items-center gap-x-1">
        <Skeleton className="h-6 w-24 rounded-3xl" />
        <Skeleton className="h-6 w-16 rounded-3xl" />
      </div>
    </header>

    <section className="h-[14dvh] lg:h-[25dvh] overflow-y-auto w-full space-y-2 px-3">
      <ul className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <OrderItemDetailCardSkeleton />
          </li>
        ))}
      </ul>
    </section>

    <div className="h-10 w-full pointer-events-none" />

    <footer className="absolute rounded-b-xl bg-[#F4F4F4] bottom-0 flex w-full justify-between p-2">
      <div className="flex items-baseline gap-x-1">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-6 w-24 rounded-3xl" />
    </footer>
  </article>
)

const OrderItemDetailCardSkeleton = () => (
  <div className="h-fit w-full border border-[#DEDEDE] rounded-xl px-2.5 py-2 flex gap-x-3 items-center">
    <Skeleton className="size-20 lg:size-28 rounded-lg" />
    <div className="w-full h-full flex flex-col justify-start gap-y-3 lg:gap-y-4">
      <div className="w-full flex justify-between items-start">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-20" />
    </div>
  </div>
)

export { OrderDetailsCardSkeleton, OrderItemDetailCardSkeleton }
