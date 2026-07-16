"use client";

import { useState } from "react";
import Link from "next/link";
import { announcement, nav } from "@/lib/content";
import { Container } from "@/components/sample-a/ui";

/** Announcement bar (dark) + sticky, blurred light nav with a mobile menu. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="bg-carbon text-carbon-ink">
        <Container className="flex items-center justify-center gap-2 py-2.5 text-center text-[12px] tracking-wide">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
          {announcement}
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-line/70 bg-snow/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-ink"
            aria-label="Back to theme chooser"
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

          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-snow transition-colors hover:bg-carbon sm:inline-flex"
            >
              Register Interest
              <span
                aria-hidden
                className="text-lime transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>
        </Container>

        {open && (
          <div className="border-t border-line/70 bg-snow lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="rounded-lg px-2 py-2.5 text-base text-ink transition-colors hover:bg-paper"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-snow"
              >
                Register Interest
                <span aria-hidden className="text-lime">
                  →
                </span>
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
