export const SECTORS = ["consultancy", "manpower"] as const

export type Sector = (typeof SECTORS)[number]

export interface SectorInfo {
  name: string
  headline: string
  tagline: string
  other: Sector
}

export const SECTOR_INFO: Record<Sector, SectorInfo> = {
  consultancy: {
    name: "Engineering Consultancy",
    headline: "Engineering solutions for the petroleum & fertilizer industries",
    tagline:
      "Innovative engineering support delivered with quality, integrity, and long-term partnership.",
    other: "manpower",
  },
  manpower: {
    name: "Manpower Supply",
    headline: "Skilled manpower for industries that never stop",
    tagline:
      "Efficient manpower solutions tailored to the evolving needs of the petroleum and fertilizer sectors.",
    other: "consultancy",
  },
}

export function isSector(value: string): value is Sector {
  return (SECTORS as readonly string[]).includes(value)
}

export const SUB_PAGES = [
  { slug: "", label: "Home" },
  { slug: "about", label: "About Us" },
  { slug: "services", label: "Services" },
  { slug: "portfolio", label: "Portfolio" },
  { slug: "contact", label: "Contact Us" },
] as const
