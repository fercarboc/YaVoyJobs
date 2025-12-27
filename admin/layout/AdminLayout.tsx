import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Icons } from "@/components/Icons";

const navItems = [
  { to: "/admin", label: "Home", icon: <Icons.Home size={16} /> },
  { to: "/admin/users", label: "Usuarios", icon: <Icons.Users size={16} /> },
  { to: "/admin/providers", label: "Proveedores", icon: <Icons.Briefcase size={16} /> },
  { to: "/admin/plans", label: "Planes", icon: <Icons.Layers size={16} /> },
  { to: "/admin/subscriptions", label: "Suscripciones", icon: <Icons.CreditCard size={16} /> },
  { to: "/admin/invoices", label: "Facturas", icon: <Icons.FileText size={16} /> },
  { to: "/admin/payments", label: "Pagos", icon: <Icons.DollarSign size={16} /> },
  { to: "/admin/metrics", label: "Métricas", icon: <Icons.BarChart2 size={16} /> },
  { to: "/admin/finance", label: "Finanzas", icon: <Icons.PieChart size={16} /> },
  { to: "/admin/logs", label: "Logs", icon: <Icons.Activity size={16} /> },
];

const AdminLayout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <aside className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-2">
            <div className="px-2 pb-2">
              <p className="text-xs uppercase font-bold text-gray-400">Admin</p>
              <p className="text-sm text-gray-700">Backoffice</p>
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/admin"}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold",
                    isActive ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-700 hover:bg-gray-50 border border-transparent",
                  ].join(" ")
                }
              >
                {item.icon}
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

export default AdminLayout;
