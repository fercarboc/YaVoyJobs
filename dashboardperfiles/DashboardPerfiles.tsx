import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { AuthState } from "../types";
import { mapLegacyRoleToBase } from "../types";
import { mapRole } from "./roleMap";

import DashboardShell from "./DashboardShell";

type Props = { auth: AuthState };

export default function DashboardPerfiles({ auth }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = auth?.user;

  useEffect(() => {
    if (auth?.loading) return;
    if (!auth?.isAuthenticated || !user) {
      navigate("/login", { replace: true, state: { from: location } });
      return;
    }

    const baseRole = user.baseRole ?? mapLegacyRoleToBase(user.role).baseRole;
    let target = "/panel";
    switch (baseRole) {
      case "ADMIN":
        target = "/admin";
        break;
      case "HELPER":
        target = "/worker";
        break;
      case "CLIENT":
        target = "/client";
        break;
      case "AGENCY":
        target = "/agency";
        break;
      default:
        target = "/panel";
        break;
    }

    if (location.pathname !== target) {
      navigate(target, { replace: true });
    }
  }, [auth?.loading, auth?.isAuthenticated, user, location.pathname, navigate, location]);

  if (auth?.loading) return null;
  if (!auth?.isAuthenticated || !user) return null;

  const userName =
    (user as any).name ?? user.full_name ?? (user as any).username ?? user.email ?? "Usuario";

  return (
    <DashboardShell
      role={mapRole(user.role)}
      userName={userName}
      avatarUrl={(user as any).avatarUrl ?? user.selfie_photo_url ?? null}
      userId={user.id}
      userEmail={user.email}
    />
  );
}

