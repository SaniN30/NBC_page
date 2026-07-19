import { SubPage } from "@/components/sub-page"

export const metadata = { title: "Services" }

export default function ServicesPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  return (
    <SubPage
      params={params}
      title="Our Services"
      description="A detailed breakdown of the services we provide in this sector — coming in the next build phase."
    />
  )
}
