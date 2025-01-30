import { cn } from "@/lib/utils"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <main className={cn(`flex  justify-center items-center w-full`)}>
      <div className={cn("flex flex-col w-[95%] sm:w-[87%]", className)}>
        {children}
      </div>
    </main>
  )
}
