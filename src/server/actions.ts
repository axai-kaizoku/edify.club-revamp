import axios from "axios"
export type FooterCategory = {
  categoryTitle: string
  categoryValue: string
  pages: FooterPage[]
  sortOrder: number
}
export type FooterPage = {
  first_title_name: {
    text: string
  }
  last_title_name: {
    text: string
  }
  slug: string
}
export async function fetchFooterLinks(
  slug: string = "refurbished-laptops-delhi"
): Promise<FooterCategory[]> {
  const url = `https://api.edify.club/v2/mkt/dynamic/seo/landingpage?slug=${slug}`
  try {
    const response = await axios.get(url)
    return response.data.footerByCategory
  } catch (error: unknown) {
    throw new Error(`❌ Error fetching links for footer with slug ${slug}.`, {
      cause: error,
    })
  }
}
