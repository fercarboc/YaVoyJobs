import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { to: "/agency", label: "Resumen", end: true },
  { to: "/agency/ads", label: "Anuncios" },
  { to: "/agency/leads", label: "Leads" },
  { to: "/agency/metrics", label: "Métricas" },
  { to: "/agency/invoices", label: "Facturas" },
  { to: "/agency/plans", label: "Planes" },
  { to: "/agency/profile", label: "Perfil" },
];

const AgencyLayout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <aside className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase text-gray-400 px-2">Inmobiliaria</h3>
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 rounded-xl text-sm font-semibold",
                    isActive ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-700 hover:bg-gray-50 border border-transparent",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </aside>
        <main className="lg:col-span-9 space-y-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AgencyLayout;
