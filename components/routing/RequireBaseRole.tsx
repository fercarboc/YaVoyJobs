import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import type { AuthState, BaseRole } from "@/types";
import { mapLegacyRoleToBase } from "@/types";

type Props = {
  auth: AuthState;
  allowed: BaseRole[];
  children: React.ReactNode;
};

const RequireBaseRole: React.FC<Props> = ({ auth, allowed, children }) => {
  const location = useLocation();

  if (auth.loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando sesión...</div>;
  }

  if (!auth.isAuthenticated || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const baseRole = auth.user.baseRole ?? mapLegacyRoleToBase(auth.user.role).baseRole;

  if (!allowed.includes(baseRole)) {
    return <Navigate to="/panel" replace />;
  }

  return <>{children}</>;
};

export default RequireBaseRole;
