import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Join MarketDock"
      title="Create your account"
      subtitle="Shop curated collections from independent sellers worldwide."
    >
      <RegisterForm />
    </AuthShell>
  );
}
