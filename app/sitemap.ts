import type { MetadataRoute } from "next"

import { SECTORS, SUB_PAGES } from "@/lib/sectors"

const BASE_URL = "https://nbc-page.vercel.app" // ponytail: update when the real domain exists

export default function sitemap(): MetadataRoute.Sitemap {
  return SECTORS.flatMap((sector) =>
    SUB_PAGES.map(({ slug }) => ({
      url: slug ? `${BASE_URL}/${sector}/${slug}` : `${BASE_URL}/${sector}`,
    }))
  )
}
