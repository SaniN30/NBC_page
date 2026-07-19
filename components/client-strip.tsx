/* ponytail: mock client names + placeholder stats — swap for real clients/logos when provided */
const CLIENTS = [
  "Bharat Petro Industries",
  "Deccan Fertilizers",
  "Sagar Refineries",
  "Krishna Agro Chem",
  "Vindhya Energy",
  "Meghdoot EPC",
  "Coastal Terminals Co.",
  "Aravalli Engineering",
]

const STATS = [
  "10+ years in operation",
  "500+ personnel deployed",
  "40+ shutdowns supported",
]

function MarqueeRow({ hidden }: Readonly<{ hidden?: boolean }>) {
  return (
    <ul
      aria-hidden={hidden}
      className="marquee flex w-max shrink-0 items-center gap-16 pr-16"
    >
      {CLIENTS.map((name) => (
        <li
          key={name}
          className="text-lg font-medium whitespace-nowrap text-foreground/40"
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export function ClientStrip() {
  return (
    <section className="border-y border-border py-10">
      <p className="px-6 text-center text-sm font-medium text-foreground/60">
        Companies we have worked with
      </p>
      <div className="marquee-mask mt-6 flex overflow-hidden">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
      <p className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-2 px-6 text-sm text-foreground/60">
        {STATS.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </p>
    </section>
  )
}
