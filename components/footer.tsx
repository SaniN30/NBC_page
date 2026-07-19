import Image from "next/image"
import Link from "next/link"

import { SECTOR_INFO, SUB_PAGES, type Sector } from "@/lib/sectors"

export function Footer({ sector }: Readonly<{ sector: Sector }>) {
  const info = SECTOR_INFO[sector]

  return (
    <footer className="border-t border-border bg-sector-soft/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <Image
            src="/logo.png"
            alt="Neev Bridge Consultancy"
            width={132}
            height={88}
          />
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            Connecting Vision | Building Solutions | Driving Growth. Engineering
            consultancy and manpower supply for the petroleum and fertilizer
            industries.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-14 text-sm">
          <div>
            <p className="font-semibold">{info.name}</p>
            <ul className="mt-3 space-y-2">
              {SUB_PAGES.map(({ slug, label }) => (
                <li key={slug}>
                  <Link
                    href={slug ? `/${sector}/${slug}` : `/${sector}`}
                    className="text-foreground/70 hover:text-sector"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Also from us</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={`/${info.other}`}
                  className="text-foreground/70 hover:text-sector"
                >
                  {SECTOR_INFO[info.other].name}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${sector}/contact`}
                  className="text-foreground/70 hover:text-sector"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <p className="border-t border-border py-5 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Neev Bridge Consultancy. All rights
        reserved.
      </p>
    </footer>
  )
}
