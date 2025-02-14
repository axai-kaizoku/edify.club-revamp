export type FeatureCardProps = {
  logo: string
  title: string
  description: string
}

export type EdifyRockeraCardProp = {
  videoLink: string
  heading: string
  subHeading: string
}

export type LaptopCardProps = {
  src: string
  title: string
  description: string
  href: string
}

export type CustomButtonProps = {
  title: string
  styles?: string
  href: string
}

export type CustomHeadingProps = {
  heading: string
  styles?: string
}

export type RatingStarCompProps = {
  rating: number
}

export type BestSellerCardProps = {
  src: string
  title: string
  price: number
  rating: number
  reviews: number
}

export type ReviewCardProps = {
  src: string
  name: string
  review: string
  date: string
  subText: string
}

export type FAQCardProps = {
  title: string
  description: string
}
export type SocialIconsProps = {
  src: string
  href: string
  alt: string
}

export type FooterProps = {
  title: string
  href?: string
}

export type PrivacyPolicyInfoProps = {
  title: string
  desc: string[]
  points?: string[]
  extraDesc?: string[]
}[]

export type TermsOfServicesProps = {
  title: string
  desc?: string[]
  points?: string[]
  extraDesc?: string[]
  headingPlusPoints?: {
    title: string
    desc: string[]
  }[]
  headingPlusPoints2?: {
    title?: string
    desc?: string[]
  }[]
}[]

export type frequentlyAskedQuestionsProps = {
  question: string
  answer: string
}[]

export type AboutSectionProps = {
  src: string
  mobileSrc?: string
  title: string
  description: string[]
  isImageFirst?: boolean
}

type Title = {
  text: string
  bgColour?: string
}

type SubHeading = string[]

export type Product = {
  alt_tag: string
  brief: string
  image: string
  mrp: number
  product_url: string
  selling_price: number
  title: string
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

export type FooterCategory = {
  categoryTitle: string
  categoryValue: string
  pages: FooterPage[]
  sortOrder: number
}

export type SEOPageData = {
  first_title_name: Title
  last_title_name: Title
  subHeading: SubHeading
  value_proposition_title: string
  value_proposition: string | null
  meta_title: string
  meta_description: string
  slug: string
  products: Product[]
  Ogtags: string
  footer: FooterPage[]
  footerByCategory: FooterCategory[]
}

export type CustomCardProps = {
  src: string
  alt: string
  subHeading: string
}

export type EdifyRefurbishedCardProps = {
  src: string
  mobileSrc?: string
  isImageFirst?: boolean
  title: string
  description: string
}

export type IncreasingNumbersProps = {
  endNumber: number
  value: string
  description: string
}

export type ReviewCardContentProps = {
  src: string
  name: string
  subText: string
  review: string
  date: string
}
