import React from "react";
import type { AuthState } from "../types";
import { mapRole } from "./roleMap";

import DashboardShell from "./DashboardShell";

type Props = { auth: AuthState };

export default function DashboardPerfiles({ auth }: Props) {
  const user = auth?.user;
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

