import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { PageShell } from "@/components/sub-page"
import { isSector, SECTOR_INFO } from "@/lib/sectors"

export const metadata = { title: "Services" }

export default async function ServicesPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()
  const info = SECTOR_INFO[sector]

  return (
    <PageShell
      sector={sector}
      title="Our Services"
      intro={`Everything we offer under ${info.name.toLowerCase()}, for the petroleum and fertilizer industries.`}
    >
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="divide-y divide-border border-y border-border">
          {info.services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-3 py-10 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8"
            >
              <span className="text-sm font-medium text-sector">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-medium text-balance">
                {service.title}
              </h2>
              <p className="leading-relaxed text-foreground/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-foreground/70">
          Need something not listed here? Scopes are tailored per engagement —
          tell us what you are trying to achieve.
        </p>
        <Link
          href={`/${sector}/contact`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-sector px-6 py-3 font-medium text-sector-foreground transition-opacity hover:opacity-90"
        >
          Discuss your requirement <ArrowRight aria-hidden />
        </Link>
      </section>
    </PageShell>
  )
}
