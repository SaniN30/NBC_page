"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

/* Visible time before fade-out begins is set in CSS (.intro-splash animation delay) */
const UNMOUNT_AFTER_MS = 2600

export function IntroSplash() {
  const [isGone, setIsGone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsGone(true), UNMOUNT_AFTER_MS)
    return () => clearTimeout(timer)
  }, [])

  if (isGone) return null

  return (
    <div
      aria-hidden
      className="intro-splash fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 px-6"
    >
      <Image
        src="/logo.png"
        alt=""
        width={480}
        height={320}
        priority
        quality={100}
        className="intro-splash-logo w-64 brightness-0 invert sm:w-96"
      />
      <p className="intro-splash-quote max-w-xl text-center text-lg font-medium text-balance text-white/90 sm:text-xl">
        &ldquo;One bridge between vision and execution.&rdquo;
      </p>
    </div>
  )
}
