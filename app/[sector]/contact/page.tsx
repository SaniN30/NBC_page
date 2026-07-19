import { SubPage } from "@/components/sub-page"

export const metadata = { title: "Contact Us" }

export default function ContactPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  return (
    <SubPage
      params={params}
      title="Contact Us"
      description="Reach out to discuss your requirements — contact form, phone, and address arrive in the next build phase."
    />
  )
}
