import { SubPage } from "@/components/sub-page"

export const metadata = { title: "Portfolio" }

export default function PortfolioPage({
  params,
}: Readonly<{ params: Promise<{ sector: string }> }>) {
  return (
    <SubPage
      params={params}
      title="Our Portfolio"
      description="Selected past work and partnerships across the petroleum and fertilizer industries."
    />
  )
}
