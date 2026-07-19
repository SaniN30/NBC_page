import { Footer } from "@/components/footer"
import { SECTOR_INFO, type Sector } from "@/lib/sectors"

interface PageShellProps {
  sector: Sector
  title: string
  intro: string
  children?: React.ReactNode
}

/* Shared shell for sub-pages: header + content + footer */
export function PageShell({ sector, title, intro, children }: PageShellProps) {
  return (
    <>
      <header className="mx-auto max-w-5xl px-6 pt-40 pb-16">
        <p className="font-medium text-sector">{SECTOR_INFO[sector].name}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/70">
          {intro}
        </p>
      </header>
      {children}
      <Footer sector={sector} />
    </>
  )
}
