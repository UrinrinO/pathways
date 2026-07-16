import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Section wrapper with the standard max width + horizontal padding. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>;
}

/** Small uppercase label used above section headings. */
export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "pine";
}) {
  const dot = tone === "pine" ? "bg-lime" : "bg-clay";
  const text = tone === "pine" ? "text-pine-ink/70" : "text-ink-soft";
  return (
    <p
      className={`mb-5 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] ${text}`}
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </p>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "dark";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-[15px] font-medium transition-all duration-200";
  const styles = {
    primary: "bg-ink text-paper hover:bg-pine",
    dark: "bg-lime text-lime-ink hover:brightness-105",
    outline: "border border-ink/20 text-ink hover:bg-ink hover:text-paper",
  }[variant];
  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}
