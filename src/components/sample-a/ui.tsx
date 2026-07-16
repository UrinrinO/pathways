import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Standard section container: max width + horizontal padding. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>;
}

/** Small uppercase eyebrow label used above section headings. */
export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "dark";
  className?: string;
}) {
  const text = tone === "dark" ? "text-carbon-ink/70" : "text-ink-soft";
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${text} ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
      {children}
    </p>
  );
}

type Variant = "primary" | "secondary" | "lime" | "ghostDark";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  /** Show the trailing → arrow (default true). */
  arrow?: boolean;
};

/**
 * Areto-style pill button. All variants carry a consistent trailing arrow
 * that nudges right on hover.
 *  - primary   : dark fill, lime arrow (light sections)
 *  - secondary : hairline outline (light sections)
 *  - lime      : lime fill, dark ink (dark sections, main CTA)
 *  - ghostDark : outline on dark (dark sections, secondary CTA)
 */
export function Button({
  variant = "primary",
  arrow = true,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-200";
  const styles: Record<Variant, string> = {
    primary: "bg-ink text-snow hover:bg-carbon",
    secondary: "border border-ink/15 text-ink hover:bg-ink hover:text-snow",
    lime: "bg-lime text-lime-ink hover:brightness-105",
    ghostDark:
      "border border-carbon-ink/25 text-carbon-ink hover:bg-carbon-ink hover:text-carbon",
  };
  const arrowClr = variant === "primary" ? "text-lime" : "";
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {arrow && (
        <span
          aria-hidden
          className={`transition-transform duration-200 group-hover:translate-x-1 ${arrowClr}`}
        >
          →
        </span>
      )}
    </Link>
  );
}

/** Inline text link with an arrow that nudges right on hover. */
export function ArrowLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "lime";
  className?: string;
}) {
  const clr = tone === "lime" ? "text-lime" : "text-ink";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium ${clr} ${className}`}
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
