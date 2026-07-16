import Link from "next/link";
import { Container } from "@/components/sample-a/ui";

const navLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Stories", href: "/stories" },
  { label: "Programme", href: "/programme" },
  { label: "Opportunities", href: "/opportunities" },
];

const legalLinks = [
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/** Dramatic dark footer: atmospheric glow + dotted texture + giant wordmark. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-soft-grey">
      {/* atmospheric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* dotted pixel texture, fading upward */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(170,177,188,0.14) 1px, transparent 1.6px)",
            backgroundSize: "9px 9px",
            WebkitMaskImage:
              "linear-gradient(to top, #000 10%, transparent 78%)",
            maskImage: "linear-gradient(to top, #000 10%, transparent 78%)",
          }}
        />
        {/* horizon light band */}
        <div className="absolute inset-x-0 top-[46%] h-px bg-gradient-to-r from-transparent via-soft-grey/60 to-transparent" />
        <div className="absolute inset-x-[15%] top-[36%] h-40 rounded-[100%] bg-lime/25 blur-[90px]" />
        <div className="absolute inset-x-[28%] top-[40%] h-28 rounded-[100%] bg-orange/20 blur-[80px]" />
      </div>

      {/* top: paragraph + nav links */}
      <Container className="relative pt-20 md:pt-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-soft-grey/80">
            Pathways is a creative tech hub for young people aged 16–25 in
            Cardiff — turning creative instinct into clearer direction, real
            digital skills and genuine opportunities.
          </p>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-xs font-medium uppercase tracking-[0.16em]">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-soft-grey/70 transition-colors hover:text-lime"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      {/* giant full-width wordmark — fades down into the footer */}
      <div className="relative px-4 pt-14">
        <h2
          className="select-none text-center font-bold leading-[0.8] tracking-[-0.04em] text-snow text-[clamp(4rem,21vw,22rem)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 38%, transparent 92%)",
            maskImage: "linear-gradient(to bottom, #000 38%, transparent 92%)",
          }}
        >
          Pathways
        </h2>
      </div>

      {/* bottom bar */}
      <Container className="relative">
        <div className="flex flex-col items-center gap-4 border-t border-soft-grey/10 py-6 text-[11px] uppercase tracking-[0.16em] text-soft-grey/50 md:flex-row md:justify-between">
          <p>© 2026 Pathways. All rights reserved.</p>
          <p>Cardiff, Wales</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-soft-grey"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="pb-8 text-center text-[11px] uppercase tracking-[0.16em] text-soft-grey/40 md:text-left">
          Funded by The National Lottery Community Fund
        </p>
      </Container>
    </footer>
  );
}
