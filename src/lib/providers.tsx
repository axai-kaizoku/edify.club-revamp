"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
  const queryCilent = new QueryClient()
  return (
    <QueryClientProvider client={queryCilent}>{children}</QueryClientProvider>
  )
}
