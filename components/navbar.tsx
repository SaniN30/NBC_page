"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { MouseEvent } from "react"
import {
  ArrowsLeftRight,
  List,
  MoonStars,
  SunDim,
  X,
} from "@phosphor-icons/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { SECTOR_INFO, SUB_PAGES, type Sector } from "@/lib/sectors"

export function Navbar({ sector }: Readonly<{ sector: Sector }>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [highlight, setHighlight] = useState<{
    left: number
    width: number
  } | null>(null)

  const moveHighlight = (event: MouseEvent<HTMLAnchorElement>) => {
    const link = event.currentTarget
    setHighlight({ left: link.offsetLeft, width: link.offsetWidth })
  }
  const other = SECTOR_INFO[sector].other
  const { resolvedTheme, setTheme } = useTheme()

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
        className="glass flex w-full max-w-3xl items-center justify-between gap-2 rounded-full py-2 pr-2 pl-4"
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label="Neev Bridge Consultancy home"
        >
          <Image
            src="/logo.png"
            alt="Neev Bridge Consultancy"
            width={84}
            height={56}
            className="dark:brightness-0 dark:invert"
          />
        </Link>

        <ul
          className="relative hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHighlight(null)}
        >
          <span
            aria-hidden
            className={cn(
              "absolute top-0 h-full rounded-full bg-sector/10 transition-all duration-300 ease-out motion-reduce:transition-none",
              highlight ? "opacity-100" : "opacity-0"
            )}
            style={
              highlight
                ? { left: highlight.left, width: highlight.width }
                : undefined
            }
          />
          {links.map(({ href, label, isActive }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={moveHighlight}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
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
            className="flex items-center gap-2 rounded-full bg-sector px-4 py-2 text-sm font-medium text-sector-foreground transition-opacity hover:opacity-90"
          >
            <ArrowsLeftRight aria-hidden />
            <span className="hidden sm:inline">{SECTOR_INFO[other].name}</span>
            <span className="sm:hidden">Switch</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="group relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/40 text-foreground/80 transition-colors hover:text-sector dark:border-white/15 dark:bg-white/10"
          >
            <SunDim
              size={20}
              weight="duotone"
              aria-hidden
              className="absolute scale-100 rotate-0 transition-all duration-500 ease-out group-hover:rotate-45 motion-reduce:transition-none dark:scale-0 dark:-rotate-90"
            />
            <MoonStars
              size={18}
              weight="duotone"
              aria-hidden
              className="absolute scale-0 rotate-90 transition-all duration-500 ease-out motion-reduce:transition-none dark:scale-100 dark:rotate-0 dark:group-hover:-rotate-12"
            />
          </button>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-full text-foreground/80 md:hidden"
          >
            {isOpen ? (
              <X size={20} aria-hidden />
            ) : (
              <List size={20} aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="glass absolute inset-x-4 top-full mt-2 animate-in rounded-3xl p-2 duration-200 fade-in slide-in-from-top-2 md:hidden">
          <ul>
            {links.map(({ href, label, isActive }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-2xl px-4 py-3 font-medium",
                    isActive
                      ? "bg-sector-soft text-sector"
                      : "text-foreground/80"
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
