import { notFound } from "next/navigation"

import { ContactForm } from "@/components/contact-form"
import { PageShell } from "@/components/sub-page"
import { isSector } from "@/lib/sectors"

export const metadata = { title: "Contact Us" }

export default async function ContactPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  const { sector } = await params
  if (!isSector(sector)) notFound()

  return (
    <PageShell
      sector={sector}
      title="Contact Us"
      intro="Tell us about your project or requirement — we respond within one business day."
    >
      <section className="mx-auto grid max-w-5xl gap-14 px-6 pb-24 sm:grid-cols-[1fr_20rem]">
        <ContactForm />
        <div className="space-y-6 text-sm leading-relaxed">
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:neevbridgeconsultancy@gmail.com"
              className="text-foreground/70 hover:text-sector"
            >
              neevbridgeconsultancy@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <a
              href="tel:+919289939303"
              className="text-foreground/70 hover:text-sector"
            >
              +91 92899 39303
            </a>
          </div>
          <div>
            <p className="font-semibold">Office</p>
            <p className="text-foreground/70">
              Address to be announced.
              <br />
              India
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
