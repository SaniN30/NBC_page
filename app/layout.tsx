import type { Metadata } from "next"
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "Neev Bridge Consultancy",
    template: "%s | Neev Bridge Consultancy",
  },
  description:
    "Connecting Vision | Building Solutions | Driving Growth — engineering consultancy and manpower supply for the petroleum and fertilizer industries.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
