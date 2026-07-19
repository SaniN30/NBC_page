import { SubPage } from "@/components/sub-page"

export const metadata = { title: "About Us" }

export default function AboutPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  return (
    <SubPage
      params={params}
      title="About Us"
      description="Our company provides integrated solutions in engineering services, human resource management, and education consultancy — built on quality, integrity, and client satisfaction."
    />
  )
}
