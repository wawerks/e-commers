import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className = "", id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-foreground)]">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] ${error ? "border-red-400" : ""} ${className}`}
        {...props}
      />
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
