import { cn } from "@/lib/utils"

export const CategoryBanner = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed top-0 left-0 right-0", className)}>
      <div className="h-20 w-full" />
      <section
        className="w-full h-[30vh] flex gap-4 bg-white items-center px-4 justify-between"
        style={{ boxShadow: "0px 6px 27.3px -9px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="flex flex-col relative items-center rounded-lg h-[85%] w-[24%] bg-[#F9F9F9] border border-[#E3E3E3">
          <div className="flex flex-col w-full mt-[8%] pl-6 gap-y-1">
            <h3 className="font-gilroySemiBold text-lg/3">Macbooks</h3>
            <p className="font-gilroyMedium text-sm">
              Premium performance, unbeatable value.
            </p>
          </div>
          <img
            src="/media/category-banner/mac.png"
            alt="mac-banner"
            className="object-contain absolute bottom-0"
            width={280}
            height={200}
          />
        </div>

        <div className="flex flex-col relative items-center rounded-lg h-[85%] w-[24%] bg-[#F9F9F9] border border-[#E3E3E3]">
          <div className="flex flex-col w-full mt-[8%] pl-6 gap-y-1">
            <h3 className="font-gilroySemiBold text-lg/3">Macbooks</h3>
            <p className="font-gilroyMedium text-sm">
              Premium performance, unbeatable value.
            </p>
          </div>
          <img
            src="/media/category-banner/windows.png"
            alt="mac-banner"
            className="object-contain absolute bottom-0"
            width={280}
            height={200}
          />
        </div>

        <div className="flex flex-col justify-between rounded-lg h-[85%] w-[24%]">
          <div className="flex flex-row relative items-center rounded-lg h-[47%] w-[100%] bg-[#F9F9F9] border border-[#E3E3E3]">
            <div className="flex flex-col w-[60%] pl-6 gap-y-1">
              <h3 className="font-gilroySemiBold text-lg/3">Mini PC&apos;s</h3>
              <p className="font-gilroyMedium text-sm">Compact and powerful </p>
            </div>
            <img
              src="/media/category-banner/cpu.png"
              alt="mac-banner"
              className="object-contain absolute bottom-0 right-0"
              width={130}
              height={90}
            />
          </div>

          <div className="flex flex-row relative items-center rounded-lg h-[47%] w-[100%] bg-[#F9F9F9] border border-[#E3E3E3]">
            <div className="flex flex-col w-[60%] pl-6 gap-y-1">
              <h3 className="font-gilroySemiBold text-lg/3">Mini PC&apos;s</h3>
              <p className="font-gilroyMedium text-sm">Compact and powerful </p>
            </div>
            <img
              src="/media/category-banner/keyboard.png"
              alt="mac-banner"
              className="object-contain absolute bottom-0 right-0"
              width={135}
              height={100}
            />
          </div>
        </div>

        <div className="flex flex-col relative items-center rounded-lg h-[85%] w-[24%] bg-[#F9F9F9] border border-[#E3E3E3]">
          <div className="flex flex-col w-full mt-[8%] pl-6 gap-y-1">
            <h3 className="font-gilroySemiBold text-lg/3">Macbooks</h3>
            <p className="font-gilroyMedium text-sm">
              Premium performance, unbeatable value.
            </p>
          </div>
          <img
            src="/media/category-banner/desktop.png"
            alt="mac-banner"
            className="object-contain absolute bottom-0"
            width={280}
            height={200}
          />
        </div>
      </section>
    </div>
  )
}
