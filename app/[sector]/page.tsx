import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { isSector, SECTOR_IMAGES, SECTOR_INFO } from "@/lib/sectors"

export default async function SectorHome({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()
  const info = SECTOR_INFO[sector]
  const images = SECTOR_IMAGES[sector]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 right-[-20%] size-[34rem] rounded-full bg-sector-soft blur-3xl"
        />
        <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-6 pt-28 pb-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col items-start gap-6">
            <p className="font-medium text-sector">{info.name}</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {info.headline}
            </h1>
            <p className="max-w-xl text-lg text-foreground/70">{info.tagline}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href={`/${sector}/contact`}
                className="rounded-full bg-sector px-6 py-3 font-medium text-sector-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href={`/${sector}/services`}
                className="group flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground/80 transition-colors hover:border-sector hover:text-sector"
              >
                Our Services
                <ArrowRight
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
          {images && (
            <div className="group relative hidden overflow-hidden rounded-3xl shadow-xl shadow-black/10 lg:block">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={960}
                height={640}
                priority
                className="h-[30rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 font-medium text-white">
                On the ground in petroleum & fertilizer
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            What we do
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-border">
          {info.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group grid gap-2 py-8 transition-transform duration-300 hover:translate-x-2 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8">
                <span className="text-sm font-medium text-sector">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium transition-colors group-hover:text-sector">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          href={`/${sector}/services`}
          className="group mt-4 inline-flex items-center gap-2 font-medium text-sector"
        >
          All services
          <ArrowRight
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </section>

      {/* Industries */}
      <section className="bg-sector-soft/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-balance">
              Built for demanding industries
            </h2>
            <p className="mt-4 max-w-xl text-foreground/70">
              We work where reliability is non-negotiable — petroleum refining
              and processing, and fertilizer production.
            </p>
          </Reveal>
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
            ].map((industry, index) => (
              <Reveal key={industry.name} delay={index * 120} className="flex-1">
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-background transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10">
                  {images && (
                    <div className="overflow-hidden">
                      <Image
                        src={images.industries[index].src}
                        alt={images.industries[index].alt}
                        width={720}
                        height={400}
                        className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-medium">{industry.name}</h3>
                    <p className="mt-2 leading-relaxed text-foreground/70">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            How we work
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {info.approach.map((step, index) => (
            <Reveal key={step.title} delay={index * 120}>
              <li className="group">
                <span className="flex size-9 items-center justify-center rounded-full bg-sector text-sm font-semibold text-sector-foreground transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Image band */}
      {images && (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-3xl">
              <Image
                src={images.band.src}
                alt={images.band.alt}
                width={1600}
                height={880}
                className="h-[22rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-8 max-w-md text-2xl font-semibold text-balance text-white transition-transform duration-500 group-hover:-translate-y-1">
                {images.band.caption}
              </figcaption>
            </figure>
          </Reveal>
        </section>
      )}

      {/* CTA band */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-sector px-8 py-14 text-center text-sector-foreground">
            <h2 className="text-3xl font-semibold tracking-tight text-balance">
              Have a project or a requirement?
            </h2>
            <p className="mx-auto mt-3 max-w-md opacity-90">
              Tell us what you need — we respond within one business day.
            </p>
            <Link
              href={`/${sector}/contact`}
              className="mt-8 inline-block rounded-full bg-background px-6 py-3 font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer sector={sector} />
    </>
  )
}
