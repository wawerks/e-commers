import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: CardHeaderProps) {
  return <div className={`mb-4 space-y-1 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={`space-y-3 ${className}`} {...props} />;
}
