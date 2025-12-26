// pages/worker/WorkerLayout.tsx
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthState } from "../../types";

type Props = {
  auth: AuthState;
};

const tabClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg text-xs font-semibold transition ${
    isActive ? "bg-blue-600 text-white" : "bg-white text-slate-700 hover:bg-slate-100"
  }`;

const WorkerLayout: React.FC<Props> = ({ auth }) => {
  console.log("AUTH USER:", auth.user);
console.log("ROLE:", auth.user?.role);


  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">Panel del Trabajador</h1>
            <p className="text-xs text-slate-500">
              Usuario: <span className="font-semibold">{auth.user?.full_name}</span> · ID (VoyUsers):{" "}
              <span className="font-mono">{auth.user?.id}</span>
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              to="/"
              className="text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              Volver a inicio
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <NavLink end to="" className={tabClass}>
            Trabajos
          </NavLink>

          <NavLink to="perfil" className={tabClass}>
            Mi perfil
          </NavLink>

          <NavLink to="/chat" className={tabClass}>
            Chat
          </NavLink>

          <NavLink to="pagos" className={tabClass}>
            Pagos / Datos económicos
          </NavLink>

          <NavLink to="seguridad" className={tabClass}>
            Seguridad
          </NavLink>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WorkerLayout;
