import { DashboardUserRole } from "./dashboardTypes";

/**
 * Map your app's auth user role (string/enum) to the dashboard role.
 */
export function mapRole(appRole: unknown): DashboardUserRole {
  const r = String(appRole ?? "").toLowerCase();

  // Company / Empresa / Autonomo
  if (r.includes("company") || r.includes("empresa") || r.includes("autonomo")) {
    return DashboardUserRole.EMPRESA;
  }

  // Admin -> usa vista empresa (acceso completo)
  if (r.includes("admin")) {
    return DashboardUserRole.EMPRESA;
  }

  // Helper / Worker / Trabajador
  if (r.includes("helper") || r.includes("worker") || r.includes("trabajador")) {
    return DashboardUserRole.TRABAJADOR;
  }

  // Provider / Proveedor
  if (r.includes("provider") || r.includes("proveedor")) {
    return DashboardUserRole.PROVEEDOR;
  }

  // Client / Particular
  if (r.includes("client") || r.includes("particular")) {
    return DashboardUserRole.PARTICULAR;
  }

  // fallback
  return DashboardUserRole.PARTICULAR;
}
