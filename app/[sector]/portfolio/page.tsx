import { notFound } from "next/navigation"

import { PageShell } from "@/components/sub-page"
import { isSector, type Sector } from "@/lib/sectors"

export const metadata = { title: "Portfolio" }

/* ponytail: placeholder portfolio entries — swap for real projects when the client provides them */
const PROJECTS: Record<
  Sector,
  { title: string; scope: string; note: string }[]
> = {
  consultancy: [
    {
      title: "Refinery unit debottlenecking study",
      scope: "Process engineering · Petroleum",
      note: "Capacity assessment and modification proposals for a crude distillation unit.",
    },
    {
      title: "Urea plant inspection programme",
      scope: "Asset integrity · Fertilizer",
      note: "Risk-based inspection planning across high-pressure synthesis equipment.",
    },
    {
      title: "Terminal expansion commissioning support",
      scope: "Project support · Petroleum",
      note: "Pre-commissioning checks and handover documentation for new storage and loading facilities.",
    },
  ],
  manpower: [
    {
      title: "Ammonia plant turnaround crew",
      scope: "Shutdown crew · Fertilizer",
      note: "120-strong certified crew mobilised for a 45-day turnaround, zero lost-time incidents.",
    },
    {
      title: "Long-term refinery maintenance staffing",
      scope: "Technical workforce · Petroleum",
      note: "Multi-year supply of fitters, welders, and instrument technicians under one contract.",
    },
    {
      title: "HSE and supervisory deployment",
      scope: "Supervisory staff · Petroleum",
      note: "Site HSE officers and discipline supervisors for a brownfield expansion project.",
    },
  ],
}

export default async function PortfolioPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()

  return (
    <PageShell
      sector={sector}
      title="Our Portfolio"
      intro="Representative engagements across the petroleum and fertilizer industries. Detailed references available on request."
    >
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-6">
          {PROJECTS[sector].map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-border p-8 transition-colors hover:bg-sector-soft/50"
            >
              <p className="text-sm font-medium text-sector">{project.scope}</p>
              <h2 className="mt-2 text-2xl font-medium text-balance">
                {project.title}
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-foreground/70">
                {project.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
