import Link from "next/link";
import { announcement, nav } from "@/lib/content";
import { Container } from "@/components/ui";

export function SiteHeader() {
  return (
    <>
      {/* Announcement bar — editable in the CMS at launch */}
      <div className="bg-pine text-pine-ink">
        <Container className="flex items-center justify-center gap-2 py-2.5 text-center text-[13px] tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {announcement}
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-display text-2xl leading-none">Pathways</span>
            <span className="hidden text-[11px] uppercase tracking-[0.2em] text-ink-mute sm:inline">
              Cardiff
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
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
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine"
          >
            Register Interest
          </Link>
        </Container>
      </header>
    </>
  );
}
