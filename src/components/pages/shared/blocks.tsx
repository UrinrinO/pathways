import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow, Button } from "@/components/sample-a/ui";

/**
 * Shared premium building blocks for the inner pages — these encode the home
 * page's design language so pages don't reinvent (and mangle) it.
 */

/** Minimal, elegant breadcrumb (Halstein-style): Home / Page. */
export function Breadcrumbs({ page }: { page: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-7 inline-flex items-center gap-3 text-[13px] font-medium"
    >
      <Link href="/" className="text-ink-mute transition-colors hover:text-ink">
        Home
      </Link>
      <span aria-hidden className="h-3.5 w-px bg-ink/20" />
      <span className="text-ink">{page}</span>
    </nav>
  );
}

/**
 * Borderless soft-shadow card with a hover lift — the home page card language.
 * NEVER use bordered `border border-line` boxes on inner pages; use this.
 */
export function SoftCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl bg-snow p-8 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

/** Numbered feature card (01/02…) — soft card with a lime index. */
export function NumberCard({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <SoftCard className="flex h-full flex-col">
      <span className="text-sm font-bold tracking-[0.15em] text-lime">{n}</span>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>
    </SoftCard>
  );
}

type Cta = { href: string; label: string };

/** The dark carbon CTA band with an aurora glow — closes every page. */
export function CTABand({
  eyebrow = "Register your interest",
  heading,
  sub,
  primary,
  secondary,
}: {
  eyebrow?: string;
  heading: string;
  sub?: string;
  primary: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="bg-paper px-6 pb-10 pt-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-carbon px-6 py-20 text-center text-carbon-ink md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-lime/20 blur-[90px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-orange/15 blur-[90px]"
        />
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow tone="dark" className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.03] tracking-tight md:text-6xl">
            {heading}
          </h2>
          {sub && (
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-carbon-ink/70">
              {sub}
            </p>
          )}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={primary.href} variant="lime">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghostDark" arrow={false}>
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Consistent section wrapper: standard vertical rhythm + optional container. */
export function Section({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
