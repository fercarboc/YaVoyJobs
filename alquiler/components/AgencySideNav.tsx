import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/alquiler/agencia", label: "Resumen" },
  { to: "/alquiler/agencia/anuncios", label: "Anuncios" },
  { to: "/alquiler/agencia/contactos", label: "Contactos" },
  { to: "/alquiler/agencia/perfil", label: "Perfil" },
  { to: "/alquiler/agencia/facturas", label: "Facturas" },
  { to: "/alquiler/agencia/configuracion", label: "Configuración" },
];

const AgencySideNav: React.FC = () => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-2 sticky top-4">
      <h3 className="text-xs font-bold uppercase text-gray-400 px-2">Agencia</h3>
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              "block px-3 py-2 rounded-xl text-sm font-semibold",
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50",
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default AgencySideNav;
