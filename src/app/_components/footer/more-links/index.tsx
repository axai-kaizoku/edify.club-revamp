import MoreLinksMain from "./MoreLinksMain"
import { fetchFooterLinks } from "@/server/actions"

export default async function MoreLinks({ slug }: { slug?: string }) {
  const footerData = await fetchFooterLinks(slug)
  return <MoreLinksMain data={footerData} />
}
