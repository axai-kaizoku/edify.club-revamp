import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <main className={cn("flex justify-center items-center w-full h-full ")}>
        <div
          ref={ref} // Attach ref here
          className={cn("flex flex-col w-[92%] sm:w-[94%] h-full", className)}
          {...props}
        >
          {children}
        </div>
      </main>
    )
  }
)

Container.displayName = "Container"
