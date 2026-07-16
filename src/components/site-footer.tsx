import Link from "next/link";
import { Container } from "@/components/ui";

const columns = [
  {
    title: "Pathways",
    links: ["About", "Programme", "Sessions", "Stories", "Opportunities"],
  },
  {
    title: "Get involved",
    links: [
      "Join Pathways",
      "Refer a Young Person",
      "Become a Mentor",
      "Partner With Us",
      "Submit an Opportunity",
    ],
  },
  {
    title: "Information",
    links: ["Contact", "Safeguarding", "Privacy", "Accessibility", "Terms"],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-pine text-pine-ink">
      <Container className="pt-20 pb-10">
        {/* Oversized wordmark */}
        <div className="font-display text-6xl leading-none md:text-8xl">
          Pathways
        </div>
        <p className="mt-6 max-w-md text-pine-ink/70">
          A creative tech hub helping young people aged 16–25 connect creativity
          with technology, direction and opportunity.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-lime">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-pine-ink/70 transition-colors hover:text-pine-ink"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-pine-ink/15 pt-6 text-xs text-pine-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Delivered by Youth4Change Wales.</span>
          <span>Funded by The National Lottery Community Fund.</span>
        </div>
      </Container>
    </footer>
  );
}
