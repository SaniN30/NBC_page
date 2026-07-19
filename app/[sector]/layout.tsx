import { notFound } from "next/navigation"

import { isSector, SECTORS } from "@/lib/sectors"

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ sector }))
}

export default async function SectorLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ sector: string }>
}>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()

  return (
    <div data-sector={sector} className="min-h-svh bg-background">
      {children}
    </div>
  )
}
