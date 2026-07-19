export const SECTORS = ["consultancy", "manpower"] as const

export type Sector = (typeof SECTORS)[number]

export interface SectorService {
  title: string
  description: string
}

export interface SectorInfo {
  name: string
  shortName: string
  headline: string
  tagline: string
  other: Sector
  services: SectorService[]
  approach: { title: string; description: string }[]
}

export const SECTOR_INFO: Record<Sector, SectorInfo> = {
  consultancy: {
    name: "Engineering Consultancy",
    shortName: "Consultancy",
    headline: "Engineering solutions for the petroleum & fertilizer industries",
    tagline:
      "Innovative engineering support delivered with quality, integrity, and long-term partnership.",
    other: "manpower",
    services: [
      {
        title: "Process & Plant Engineering",
        description:
          "Design review, debottlenecking, and optimisation support for refineries, petrochemical units, and fertilizer plants.",
      },
      {
        title: "Project & Commissioning Support",
        description:
          "Engineering oversight from feasibility through commissioning — schedules protected, specifications met.",
      },
      {
        title: "Inspection & Integrity Services",
        description:
          "Asset integrity assessments, inspection planning, and compliance documentation for critical equipment.",
      },
    ],
    approach: [
      {
        title: "Understand the plant",
        description:
          "Every engagement starts on the ground — your process, your constraints, your priorities.",
      },
      {
        title: "Engineer the answer",
        description:
          "Practical solutions built to codes and standards, not paperwork for its own sake.",
      },
      {
        title: "Stay through delivery",
        description:
          "We remain accountable through commissioning and handover, not just the report.",
      },
    ],
  },
  manpower: {
    name: "Manpower Supply",
    shortName: "Manpower",
    headline: "Skilled manpower for industries that never stop",
    tagline:
      "Efficient manpower solutions tailored to the evolving needs of the petroleum and fertilizer sectors.",
    other: "consultancy",
    services: [
      {
        title: "Technical Workforce Supply",
        description:
          "Welders, fitters, riggers, electricians, and instrument technicians — verified, certified, deployment-ready.",
      },
      {
        title: "Engineering & Supervisory Staff",
        description:
          "Engineers, supervisors, and HSE officers for projects, shutdowns, and long-term operations.",
      },
      {
        title: "Shutdown & Turnaround Crews",
        description:
          "Complete crews mobilised on short notice for plant shutdowns, turnarounds, and maintenance campaigns.",
      },
    ],
    approach: [
      {
        title: "Source and verify",
        description:
          "Candidates screened for trade certification, experience, and site-safety readiness.",
      },
      {
        title: "Mobilise fast",
        description:
          "Documentation, medicals, and logistics handled end to end so crews arrive ready to work.",
      },
      {
        title: "Support on site",
        description:
          "Ongoing workforce administration and replacement cover for the life of the contract.",
      },
    ],
  },
}

export interface SectorImages {
  hero: { src: string; alt: string }
  industries: { src: string; alt: string }[]
  band: { src: string; alt: string; caption: string }
}

/* Only consultancy has imagery so far; manpower renders imageless until assets arrive */
export const SECTOR_IMAGES: Partial<Record<Sector, SectorImages>> = {
  consultancy: {
    hero: {
      src: "/consultancy-refinery.jpg",
      alt: "Oil refinery illuminated at dusk",
    },
    industries: [
      {
        src: "/consultancy-plant.jpg",
        alt: "Process units and piping inside a petroleum plant",
      },
      {
        src: "/consultancy-terminal.jpg",
        alt: "Storage spheres and loading terminal at night",
      },
    ],
    band: {
      src: "/consultancy-complex.jpg",
      alt: "Coastal energy and nutrients complex at night",
      caption: "From process units to complete complexes",
    },
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
