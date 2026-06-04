import { Suspense } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Account"
      title="Sign in"
      subtitle="Access your buyer account, seller dashboard, or admin tools."
    >
      <Suspense fallback={<p className="text-sm text-[var(--color-foreground)]/70">Loading...</p>}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
