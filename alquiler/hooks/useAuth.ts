import { useMemo, useState } from "react";

export type ActiveRole =
  | "PARTICULAR"
  | "WORKER"
  | "COMPANY"
  | "PROVIDER"
  | "AGENCY"
  | "ADMIN";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem("yavoy_auth") === "1");
  const [activeRole, setActiveRole] = useState<ActiveRole>(
    () => (localStorage.getItem("yavoy_role") as ActiveRole) || "WORKER"
  );

  const loginMock = () => {
    setIsAuthenticated(true);
    localStorage.setItem("yavoy_auth", "1");
  };
  const logoutMock = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("yavoy_auth");
  };

  const setRole = (role: ActiveRole) => {
    setActiveRole(role);
    localStorage.setItem("yavoy_role", role);
  };

  return useMemo(
    () => ({
      isAuthenticated,
      activeRole,

      setActiveRole: setRole,
      setRole, // alias

      // nombres estándar para que no pete el ZIP
      login: loginMock,
      logout: logoutMock,

      // por si algún archivo usa estos nombres
      loginMock,
      logoutMock,
    }),
    [isAuthenticated, activeRole]
  );
}
