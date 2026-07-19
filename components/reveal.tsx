"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/* Scroll-reveal wrapper: fades/lifts children in as they enter the viewport */
export function Reveal({
  children,
  className,
  delay = 0,
}: Readonly<{ children: React.ReactNode; className?: string; delay?: number }>) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
