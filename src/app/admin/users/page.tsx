import { Card } from "@/components/ui/card";

export default function AdminUsersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Users</h1>
      <Card>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Manage user roles, access, and seller status approvals from this view.
        </p>
      </Card>
    </div>
  );
}
