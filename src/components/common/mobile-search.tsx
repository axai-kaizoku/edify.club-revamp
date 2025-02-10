import { Input } from "../ui/input"
import { Dialog, DialogContent, DialogTrigger } from "../ui/old-dialog"
import { DialogTitle } from "../ui/dialog"
import { Search } from "./icons"

export const MobileSearch = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm size-9 bg-black rounded-full flex items-center justify-center"
        >
          <Search />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-lg p-0">
        <DialogTitle className="sr-only">Search anything</DialogTitle>
        <div className="flex h-full items-center w-full px-3 rounded-md border">
          <Search color="#BEBEBE" />
          <Input
            id="search"
            type="text"
            autoFocus
            placeholder="Search anything"
            className="w-full text-sm font-gilroyRegular border-0 placeholder:text-[#C5C5C5] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
