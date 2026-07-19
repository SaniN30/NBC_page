import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { Footer } from "@/components/footer"
import { isSector, SECTOR_INFO } from "@/lib/sectors"

export default async function SectorHome({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()
  const info = SECTOR_INFO[sector]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 right-[-20%] size-[34rem] rounded-full bg-sector-soft blur-3xl"
        />
        <div className="relative mx-auto flex min-h-svh max-w-5xl flex-col items-start justify-center gap-6 px-6 pt-24">
          <p className="font-medium text-sector">{info.name}</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {info.headline}
          </h1>
          <p className="max-w-xl text-lg text-foreground/70">{info.tagline}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href={`/${sector}/contact`}
              className="rounded-full bg-sector px-6 py-3 font-medium text-sector-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              href={`/${sector}/services`}
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground/80 transition-colors hover:border-sector hover:text-sector"
            >
              Our Services <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser: alternating rows, not a card grid */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          What we do
        </h2>
        <div className="mt-12 divide-y divide-border">
          {info.services.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-2 py-8 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8"
            >
              <span className="text-sm font-medium text-sector">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="leading-relaxed text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={`/${sector}/services`}
          className="mt-4 inline-flex items-center gap-2 font-medium text-sector"
        >
          All services <ArrowRight aria-hidden />
        </Link>
      </section>

      {/* Industries */}
      <section className="bg-sector-soft/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Built for demanding industries
          </h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            We work where reliability is non-negotiable — petroleum refining and
            processing, and fertilizer production.
          </p>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row">
            {[
              {
                name: "Petroleum",
                description:
                  "Refineries, petrochemical complexes, terminals, and gas processing facilities.",
              },
              {
                name: "Fertilizer",
                description:
                  "Urea, ammonia, and phosphate plants — continuous processes with zero room for downtime.",
              },
            ].map((industry) => (
              <div
                key={industry.name}
                className="flex-1 rounded-3xl border border-border bg-background p-8"
              >
                <h3 className="text-xl font-medium">{industry.name}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          How we work
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {info.approach.map((step, index) => (
            <li key={step.title}>
              <span className="flex size-9 items-center justify-center rounded-full bg-sector text-sm font-semibold text-sector-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-sector px-8 py-14 text-center text-sector-foreground">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Have a project or a requirement?
          </h2>
          <p className="mx-auto mt-3 max-w-md opacity-90">
            Tell us what you need — we respond within one business day.
          </p>
          <Link
            href={`/${sector}/contact`}
            className="mt-8 inline-block rounded-full bg-background px-6 py-3 font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer sector={sector} />
    </>
  )
}
