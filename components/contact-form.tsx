"use client"

import { useState } from "react"

const CONTACT_EMAIL = "neevbridgeconsultancy@gmail.com"
/* Web3Forms delivers submissions to the email that created this key.
   Get one instantly at https://web3forms.com (enter the Gmail above). */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

type Status = "idle" | "sending" | "sent" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // ponytail: mailto fallback until NEXT_PUBLIC_WEB3FORMS_KEY is configured
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(
        `Enquiry from ${String(data.get("name"))}`
      )
      const body = encodeURIComponent(
        `Name: ${String(data.get("name"))}\nEmail: ${String(data.get("email"))}\n\n${String(data.get("message"))}`
      )
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setStatus("sent")
      return
    }

    setStatus("sending")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website enquiry from ${String(data.get("name"))}`,
          name: String(data.get("name")),
          email: String(data.get("email")),
          message: String(data.get("message")),
        }),
      })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error("submit failed")
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
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
        disabled={status === "sending"}
        className="rounded-full bg-sector px-6 py-3 font-medium text-sector-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p role="status" className="text-sm text-foreground/70">
          {WEB3FORMS_KEY
            ? "Thank you — your message has been sent. We respond within one business day."
            : `Your email app should have opened with the message ready to send. If not, write to us directly at ${CONTACT_EMAIL}.`}
        </p>
      )}
      {status === "error" && (
        <p role="status" className="text-sm text-destructive">
          Something went wrong sending your message. Please email us directly at{" "}
          {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  )
}
