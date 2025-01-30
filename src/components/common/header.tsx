import { ShoppingBasket } from "lucide-react"
import { Input } from "../ui/input"

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 right-0 border-b bg-white/15 backdrop-blur-lg border-[#E2E2E2] w-full h-20 px-10">
        <nav className="flex w-full h-full justify-between items-center">
          <ul className="flex items-center gap-4">
            <li className="px-3 border rounded-full size-12 flex justify-center items-center">
              E
            </li>
            <li>Category</li>
            <li>Products</li>
            <li>Pricing</li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <Input type="search" className="rounded-3xl" />
            </li>
            <li className="border px-3 rounded-full size-10 flex justify-center items-center">
              <ShoppingBasket />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-20 pointer-events-none w-full" />
    </>
  )
}
