import { notFound } from "next/navigation"

import { isSector, SECTOR_INFO } from "@/lib/sectors"

interface SubPageProps {
  params: Promise<{ sector: string }>
  title: string
  description: string
}

/* Phase-1 placeholder shell; real content lands in Phase 4 */
export async function SubPage({ params, title, description }: SubPageProps) {
  const { sector } = await params
  if (!isSector(sector)) notFound()

  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center gap-4 px-6">
      <p className="font-medium text-sector">{SECTOR_INFO[sector].name}</p>
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="max-w-prose text-lg text-muted-foreground">{description}</p>
    </main>
  )
}
