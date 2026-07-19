import Link from "next/link"
import { notFound } from "next/navigation"

import { isSector, SECTOR_INFO } from "@/lib/sectors"

export default async function SectorHome({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()
  const info = SECTOR_INFO[sector]

  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col items-start justify-center gap-6 px-6">
      <p className="text-sector font-medium">{info.name}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {info.headline}
      </h1>
      <p className="max-w-prose text-lg text-muted-foreground">{info.tagline}</p>
      <Link
        href={`/${sector}/contact`}
        className="bg-sector text-sector-foreground rounded-full px-6 py-3 font-medium"
      >
        Contact Us
      </Link>
    </main>
  )
}
