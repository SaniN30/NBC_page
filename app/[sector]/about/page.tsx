import { notFound } from "next/navigation"

import { PageShell } from "@/components/sub-page"
import { isSector, SECTOR_INFO } from "@/lib/sectors"

export const metadata = { title: "About Us" }

const VALUES = [
  {
    title: "Quality",
    description:
      "Work delivered to specification, to code, and to the standard we would accept on our own plants.",
  },
  {
    title: "Integrity",
    description:
      "Straight answers, honest timelines, and commitments we keep — the foundation of long-term partnership.",
  },
  {
    title: "Client satisfaction",
    description:
      "Success measured by outcomes for your operation, not by hours billed.",
  },
]

export default async function AboutPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()

  return (
    <PageShell
      sector={sector}
      title="About Us"
      intro="Neev Bridge Consultancy provides integrated solutions in engineering services, human resource management, and education consultancy — a bridge between vision and execution for industries, institutions, and individuals."
    >
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="max-w-2xl space-y-5 leading-relaxed text-foreground/80">
          <p>
            We work in two sectors: engineering consultancy and manpower supply
            for the petroleum and fertilizer industries. Whether the need is
            innovative engineering support or an efficient, reliable workforce,
            our commitment is the same — expertise, reliability, and
            partnerships that last.
          </p>
          <p>
            {SECTOR_INFO[sector].name} is one half of that promise. The other —{" "}
            {SECTOR_INFO[SECTOR_INFO[sector].other].name.toLowerCase()} — is one
            click away, because most of our clients eventually need both.
          </p>
        </div>

        <h2 className="mt-20 text-3xl font-semibold tracking-tight">
          What we stand for
        </h2>
        <div className="mt-10 divide-y divide-border">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr]"
            >
              <h3 className="text-xl font-medium text-sector">{value.title}</h3>
              <p className="leading-relaxed text-foreground/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
