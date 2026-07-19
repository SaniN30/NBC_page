"use client"

import { useState } from "react"

const CONTACT_EMAIL = "neevbridgeconsultancy@gmail.com"

export function ContactForm() {
  const [isSent, setIsSent] = useState(false)

  // ponytail: mailto handoff — swap for an API route + email service when one exists
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(
      `Enquiry from ${String(data.get("name"))}`
    )
    const body = encodeURIComponent(
      `Name: ${String(data.get("name"))}\nEmail: ${String(data.get("email"))}\n\n${String(data.get("message"))}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setIsSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            name="name"
            required
            minLength={2}
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sector focus:ring-2 focus:ring-sector/30"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sector focus:ring-2 focus:ring-sector/30"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sector focus:ring-2 focus:ring-sector/30"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-sector px-6 py-3 font-medium text-sector-foreground transition-opacity hover:opacity-90"
      >
        Send message
      </button>
      {isSent && (
        <p role="status" className="text-sm text-foreground/70">
          Your email app should have opened with the message ready to send. If
          not, write to us directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  )
}
