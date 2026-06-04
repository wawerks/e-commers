import * as React from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[var(--shadow-card)] hover:translate-y-[-1px] hover:shadow-[var(--shadow-soft)]",
  secondary:
    "bg-[var(--color-primary)] text-[var(--color-foreground)] hover:bg-[var(--color-primary-strong)]",
  ghost:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-muted)]",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  );
}
