// components/routing/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { AuthState } from "@/types";
import { UserRole } from "@/types";

type Props = {
  auth: AuthState;
  roles?: UserRole[];
  children?: React.ReactNode; // soporte modo children
};

export default function ProtectedRoute({ auth, roles, children }: Props) {
  const location = useLocation();

  // 1) Espera a que termine de cargar el auth
  if (auth.loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando sesión...</div>;
  }

  // 2) Si no está autenticado -> login
  if (!auth.isAuthenticated || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3) Si hay roles permitidos y no coincide -> redirección por rol
  if (roles?.length && !roles.includes(auth.user.role)) {
    // opcional: manda a su home por rol
    const to =
      auth.user.role === UserRole.ADMIN
        ? "/admin"
        : auth.user.role === UserRole.HELPER
        ? "/worker"
        : auth.user.role === UserRole.AGENCY
        ? "/agency"
        : "/client";

    return <Navigate to={to} replace />;
  }

  // 4) Si viene con children -> renderiza children, si no -> Outlet (rutas anidadas)
  return <>{children ?? <Outlet />}</>;
}
