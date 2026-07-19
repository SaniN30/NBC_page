"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowsLeftRight, List, X } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { SECTOR_INFO, SUB_PAGES, type Sector } from "@/lib/sectors"

export function Navbar({ sector }: Readonly<{ sector: Sector }>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const other = SECTOR_INFO[sector].other

  // /consultancy/about -> /manpower/about, preserving the sub-page
  const switchHref = pathname.replace(`/${sector}`, `/${other}`)

  const links = SUB_PAGES.map(({ slug, label }) => {
    const href = slug ? `/${sector}/${slug}` : `/${sector}`
    return { href, label, isActive: pathname === href }
  })

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-white/40 bg-white/60 py-2 pr-2 pl-4 shadow-lg shadow-black/5 backdrop-blur-xl"
      >
        <Link
          href={`/${sector}`}
          className="shrink-0"
          aria-label="Neev Bridge Consultancy home"
        >
          <Image src="/logo.png" alt="Neev Bridge Consultancy" width={44} height={44} />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label, isActive }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sector-soft text-sector"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            className="bg-sector text-sector-foreground hover:opacity-90 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity"
          >
            <ArrowsLeftRight aria-hidden />
            <span className="hidden sm:inline">{SECTOR_INFO[other].name}</span>
            <span className="sm:hidden">Switch</span>
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-full text-foreground/80 md:hidden"
          >
            {isOpen ? <X size={20} aria-hidden /> : <List size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute inset-x-4 top-full mt-2 rounded-3xl border border-white/40 bg-white/80 p-2 shadow-lg shadow-black/5 backdrop-blur-xl duration-200 md:hidden">
          <ul>
            {links.map(({ href, label, isActive }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-2xl px-4 py-3 font-medium",
                    isActive ? "bg-sector-soft text-sector" : "text-foreground/80"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
