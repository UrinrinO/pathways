import Link from "next/link";
import { announcement, nav } from "@/lib/content";
import { Container } from "@/components/sample-b/ui";

/** Announcement bar + sticky, blurred Midnight nav (dark theme). */
export function SiteNav() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-panel text-soft-grey">
        <Container className="flex items-center justify-center gap-2.5 py-2.5 text-center text-[12px] tracking-wide">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(140,224,30,0.55)]" />
          {announcement}
        </Container>
      </div>

      {/* Sticky nav — midnight, blurred */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Link
            href="/sample-b"
            className="text-xl font-bold tracking-tight text-snow"
            aria-label="Pathways home"
          >
            Pathways
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-soft-grey transition-colors hover:text-snow"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/join"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-ink transition-all duration-200 hover:brightness-105"
          >
            Register Interest
            <span
              aria-hidden
              className="text-lime-ink transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Container>
      </header>
    </>
  );
}
