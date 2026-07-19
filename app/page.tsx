import { redirect } from "next/navigation"

// ponytail: root redirects to the consultancy world; a split intro screen may replace this in Phase 3
export default function RootPage() {
  redirect("/consultancy")
}
