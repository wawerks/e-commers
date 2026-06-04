"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerSchema } from "@/lib/validators/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FieldErrors = {
  name?: string[];
  email?: string[];
  password?: string[];
};

export function RegisterForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setFormError("");
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const parsed = registerSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      setPending(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (response.status === 409) {
        setFormError("Email already in use.");
        setPending(false);
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        if (data.error?.fieldErrors) {
          setErrors(data.error.fieldErrors);
        } else {
          setFormError("Something went wrong. Please try again.");
        }
        setPending(false);
        return;
      }

      router.push("/login?registered=1");
    } catch {
      setFormError("Something went wrong. Please try again.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formError ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {formError}
        </p>
      ) : null}

      <Input
        label="Full name"
        name="name"
        autoComplete="name"
        required
        error={errors.name?.[0]}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        error={errors.email?.[0]}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        error={errors.password?.[0]}
      />

      <p className="text-xs text-[var(--color-foreground)]/60">
        By creating an account you join as a buyer. Apply to sell from your profile after signing
        in.
      </p>

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account..." : "Create account"}
      </Button>

      <p className="text-center text-sm text-[var(--color-foreground)]/70">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[var(--color-accent)]">
          Sign in
        </Link>
      </p>
    </form>
  );
}
