"use client"
import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react"
import { motion, Transition, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type CarouselContextType = {
  index: number
  setIndex: (newIndex: number) => void
  itemsCount: number
  setItemsCount: (newItemsCount: number) => void
  disableDrag: boolean
  loop: boolean
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider")
  }
  return context
}

export type CarouselProviderProps = {
  children: ReactNode
  initialIndex?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  loop?: boolean
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  autoplay = false,
  autoplayInterval = 2000,
  loop = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex)
  const [itemsCount, setItemsCount] = useState<number>(0)

  const handleSetIndex = useCallback(
    (newIndex: number) => {
      if (itemsCount === 0) return
      let wrappedIndex = newIndex
      if (loop) {
        wrappedIndex = ((newIndex % itemsCount) + itemsCount) % itemsCount
      } else {
        wrappedIndex = Math.max(0, Math.min(newIndex, itemsCount - 1))
      }
      setIndex(wrappedIndex)
      onIndexChange?.(wrappedIndex)
    },
    [itemsCount, loop, onIndexChange]
  )

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || itemsCount <= 1) return

    const interval = setInterval(() => {
      handleSetIndex(index + 1)
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, handleSetIndex, index, itemsCount])

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        loop,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export type CarouselProps = {
  children: ReactNode
  className?: string
  initialIndex?: number
  index?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  loop?: boolean
}

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  autoplay = false,
  autoplayInterval = 2000,
  loop = autoplay, // Default loop to autoplay value
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex)
  const isControlled = externalIndex !== undefined
  const currentIndex = isControlled ? externalIndex : internalIndex

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex)
    }
    onIndexChange?.(newIndex)
  }

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
      autoplay={autoplay}
      autoplayInterval={autoplayInterval}
      loop={loop}
    >
      <div className={cn("group/hover relative", className)}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  )
}

export type CarouselNavigationProps = {
  className?: string
  classNameButton?: string
  alwaysShow?: boolean
}

// Update CarouselNavigation to handle loop
function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, loop } = useCarousel()

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2",
        className
      )}
    >
      <button
        type="button"
        aria-label="Previous slide"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          classNameButton
        )}
        disabled={!loop && index === 0}
        onClick={() => setIndex(index - 1)}
      >
        <ChevronLeft
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
      </button>
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          classNameButton
        )}
        aria-label="Next slide"
        disabled={!loop && index + 1 === itemsCount}
        onClick={() => setIndex(index + 1)}
      >
        <ChevronRight
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
      </button>
    </div>
  )
}

export type CarouselIndicatorProps = {
  className?: string
  classNameButton?: string
}

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div
      className={cn(
        "absolute -bottom-5 z-10 flex w-full items-center justify-center",
        className
      )}
    >
      <div className="flex space-x-1">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full transition-opacity duration-300",
              index === i ? "bg-zinc-950 w-5 lg:w-6" : "bg-zinc-950",
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  )
}

export type CarouselContentProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}

function CarouselContent({
  children,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel()
  const [visibleItemsCount, setVisibleItemsCount] = useState(1)
  const dragX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsLength = Children.count(children)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter(
        (entry) => entry.isIntersecting
      ).length
      setVisibleItemsCount(visibleCount)
    }, options)

    const childNodes = containerRef.current.children
    Array.from(childNodes).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [children, setItemsCount])

  useEffect(() => {
    if (!itemsLength) {
      return
    }

    setItemsCount(itemsLength)
  }, [itemsLength, setItemsCount])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1)
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <motion.div
      drag={disableDrag ? false : "x"}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: "spring",
          duration: 0.2,
        }
      }
      className={cn(
        "flex items-center",
        !disableDrag && "cursor-pointer",
        className
      )}
      ref={containerRef}
    >
      {children}
    </motion.div>
  )
}

export type CarouselItemProps = {
  children: ReactNode
  className?: string
}

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn(
        "w-full min-w-0 shrink-0 grow-0 overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
}
