import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Standard section container. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>;
}

/** Legacy label kept for older files. Prefer <Eyebrow>. */
export function Label({
  children,
  tone = "clay",
  className = "",
}: {
  children: ReactNode;
  tone?: "clay" | "lime" | "ink";
  className?: string;
}) {
  const color =
    tone === "lime" ? "text-lime" : tone === "ink" ? "text-soft-grey" : "text-orange";
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] ${color} ${className}`}
    >
      <span className="inline-block h-1 w-1 rounded-full bg-current" />
      {children}
    </p>
  );
}

/** Uppercase eyebrow (lime or orange dot) — dark theme. */
export function Eyebrow({
  children,
  tone = "lime",
  className = "",
}: {
  children: ReactNode;
  tone?: "lime" | "orange";
  className?: string;
}) {
  const clr = tone === "orange" ? "text-orange" : "text-lime";
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] ${clr} ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </p>
  );
}

type Variant = "primary" | "outline" | "lime" | "onDark" | "ghost";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  arrow?: boolean;
};

/**
 * Pill button. Dark-theme variants:
 *  - lime    : lime fill, dark ink (main CTA)
 *  - onDark  : hairline on dark, light text
 *  - ghost   : light fill, dark text (inverted)
 * (primary/outline kept for legacy files.)
 */
export function Button({
  variant = "lime",
  arrow = true,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-200";
  const styles: Record<Variant, string> = {
    primary: "bg-snow text-midnight hover:bg-white/90",
    outline: "border border-white/20 text-snow hover:bg-white/10",
    lime: "bg-lime text-lime-ink hover:brightness-105",
    onDark: "border border-white/20 text-snow hover:bg-white/10",
    ghost: "bg-snow text-midnight hover:bg-white/90",
  };
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}

/** Inline arrow link (light text on dark). */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-snow ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
