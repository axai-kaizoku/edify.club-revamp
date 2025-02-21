import MoreLinksMain from "./MoreLinksMain"
import { fetchFooterLinks } from "@/server/actions"

export default async function MoreLinks({ slug }: { slug?: string }) {
  try {
    const footerData = await fetchFooterLinks(slug);

    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-white pt-4  text-xl font-gilroySemiBold">
          Other Links
        </h1>
        <MoreLinksMain data={footerData} />
      </div>
    )
  } catch (e: unknown) {
    console.error(e)
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-white pt-4  text-xl font-gilroySemiBold">
          Other Links
        </h1>
        <span className="text-red-500 font-gilroyMedium">
          Failed to fetch links
        </span>
      </div>
    )
  }
}
