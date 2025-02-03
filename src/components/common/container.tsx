import { cn } from "@/lib/utils"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <main className={cn(`flex  justify-center items-center w-full h-full`)}>
      <div className={cn("flex flex-col w-[92%] sm:w-[94%] h-full", className)}>
        {children}
      </div>
    </main>
  )
}
