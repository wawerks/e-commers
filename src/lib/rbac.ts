import { Role, SellerStatus } from "@prisma/client";

export const rolePriority: Role[] = [Role.USER, Role.SELLER, Role.ADMIN];

export function hasRequiredRole(userRole: Role, required: Role) {
  return rolePriority.indexOf(userRole) >= rolePriority.indexOf(required);
}

export function canSell(role: Role, status: SellerStatus) {
  return role === Role.SELLER && status === SellerStatus.APPROVED;
}
