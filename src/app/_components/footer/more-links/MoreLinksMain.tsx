"use client"
import { FooterCategory, FooterPage } from "@/server/actions"
/* eslint-disable @next/next/no-img-element */

export default function MoreLinksMain({ data }: { data: FooterCategory[] }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-white pt-4 text-xl font-gilroySemiBold">
          Other Links
        </h1>
        <div className="grid grid-cols-1 text-center md:text-left h-48 overflow-y-scroll sm:grid-cols-3 lg:grid-cols-4 px-4 w-full h  xl:gap-5">
          {data?.map((res: FooterCategory, index: number) => (
            <div key={index}>
              <h1 className=" text-xs md:text-sm lg:text-base xl:text-lg font-gilroySemiBold text-white font-graphik mb-2 leading-7">
                {res.categoryValue}
              </h1>
              <ul>
                {res.pages.map((page: FooterPage, pageIndex: number) => (
                  <li
                    key={pageIndex}
                    className="font-gilroySemiBold text-xs lg:text-sm xl:text-base text-[#999] leading-5 xl:py-[0.3rem] py-0.5"
                  >
                    <a href={`/${page.slug}`}>
                      {page.first_title_name.text} {page.last_title_name.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-slate-800 px-4"></div>
      </div>
    </>
  )
}
