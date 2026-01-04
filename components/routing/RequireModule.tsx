import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import type { AuthState, ModuleKey } from "@/types";

type Props = {
  auth: AuthState;
  module: ModuleKey;
  children: React.ReactNode;
};

const RequireModule: React.FC<Props> = ({ auth, module, children }) => {
  const location = useLocation();

  if (auth.loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando sesión...</div>;
  }

  if (!auth.isAuthenticated || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasModule = auth.user.modules && auth.user.modules[module] === true;

  if (!hasModule) {
    return <Navigate to="/pricing" replace />;
  }

  return <>{children}</>;
};

export default RequireModule;
