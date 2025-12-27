import React from "react";
import { useAuth } from "../hooks/useAuth";

const AgencyTopBar: React.FC = () => {
  const { isAuthenticated, activeRole, logout } = useAuth();
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-gray-700">Panel de agencia</p>
        <p className="text-xs text-gray-500">Gestiona anuncios y facturación</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500">
          Estado: {isAuthenticated ? "Conectado" : "Invitado"} | Rol: {activeRole}
        </span>
        <button
          type="button"
          onClick={logout}
          className="px-3 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default AgencyTopBar;
