import Link from "next/link";
import { announcement, nav } from "@/lib/content";
import { Container } from "@/components/sample-a/ui";

/** Announcement bar (dark) + sticky, blurred light nav. */
export function Nav() {
  return (
    <>
      <div className="bg-carbon text-carbon-ink">
        <Container className="flex items-center justify-center gap-2 py-2.5 text-center text-[12px] tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {announcement}
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-line/70 bg-snow/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Link
            href="/sample-a"
            className="text-xl font-bold tracking-tight text-ink"
          >
            Pathways
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/join"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-snow transition-colors hover:bg-carbon"
          >
            Register Interest
            <span
              aria-hidden
              className="text-lime transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Container>
      </header>
    </>
  );
}
