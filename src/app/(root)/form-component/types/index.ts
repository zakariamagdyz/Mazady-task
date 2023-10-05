export type AllCategoriesResponse = {
  code: number
  msg: string
  data: Data
}

export type Data = {
  categories: Category[]
  statistics: Statistics
  ads_banners: AdsBanner[]
  ios_version: string
  ios_latest_version: string
  google_version: string
  huawei_version: string
}

export type AdsBanner = {
  img: string
  media_type: string
  duration: number
}

export type Category = {
  id: number
  name: string
  description: null
  image: string
  slug: string
  children: Category[] | null
  circle_icon: string
  disable_shipping: number
}

export type Statistics = {
  auctions: number
  users: number
  products: number
}

export type PropertiesResponse = {
  code: number
  msg: string
  data: Property[]
}

export type OptionsResponse = {
  code: number
  msg: string
  data: Property[]
}

export type Property = {
  id: number
  name: string
  description: string
  slug: string
  parent: null
  list: boolean
  type: null | string
  value: string
  other_value: null
  options: Option[] | null
}

export type Option = {
  id: number
  name: string
  slug: string
  parent: number
  child: boolean
}
export type TransformedFormData = {
  key: string
  value: number | string | null
}

export type FormValues = {
  mainCategory: number | null
  subCategory: number | null
} & Record<string, null | number | string>
