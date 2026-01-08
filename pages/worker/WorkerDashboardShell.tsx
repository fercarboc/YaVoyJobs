import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthState } from "@/types";
import { listUnreadNotificationsForWorker } from "@/services/notifications.service";

type Props = {
  auth: AuthState;
};

const linkBase =
  "flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition border";

const WorkerDashboardShell: React.FC<Props> = ({ auth }) => {
  const userName = auth.user?.full_name || auth.user?.email || "Trabajador";

  const [unreadApplications, setUnreadApplications] = useState(0);

  const fetchUnread = useCallback(async () => {
    try {
      const notifications = await listUnreadNotificationsForWorker();
      setUnreadApplications(notifications.length);
    } catch (err) {
      console.error("[WorkerDashboardShell] unread notifications", err);
    }
  }, []);

  useEffect(() => {
    fetchUnread();
    const handler = () => fetchUnread();
    window.addEventListener("voy:notifications-updated", handler);
    return () => window.removeEventListener("voy:notifications-updated", handler);
  }, [fetchUnread]);

  const badge = useMemo(() => {
    if (unreadApplications <= 0) return null;
    return (
      <span className="ml-auto text-[10px] font-bold text-white bg-rose-500 rounded-full w-5 h-5 flex items-center justify-center">
        {unreadApplications > 9 ? "9+" : unreadApplications}
      </span>
    );
  }, [unreadApplications]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <aside className="lg:w-72 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="mb-3">
                <div className="text-sm font-extrabold text-slate-900 truncate">{userName}</div>
                <div className="text-xs text-slate-500 truncate">{auth.user?.email}</div>
              </div>
              <div className="grid gap-2">
                <NavLink
                  to="/worker"
                  end
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                >
                  Resumen
                </NavLink>
                <NavLink
                  to="/worker/jobs"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                  >
                    Empleo
                  </NavLink>
                <NavLink
                  to="/worker/solicitudes"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    Mis solicitudes
                    {badge}
                  </span>
                </NavLink>
                <NavLink
                  to="/worker/perfil"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                >
                  Perfil
                </NavLink>
                <NavLink
                  to="/worker/pagos"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                >
                  Pagos
                </NavLink>
                <NavLink
                  to="/worker/seguridad"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-slate-900"
                        : "bg-white border-gray-100 text-slate-700 hover:bg-gray-50"
                    }`
                  }
                >
                  Seguridad
                </NavLink>
              </div>
            </div>
          </aside>

          <section className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboardShell;
