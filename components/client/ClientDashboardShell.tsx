import React from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';

import {Icons} from '../../components/Icons';
import type { AuthState } from '../../types';



interface ClientDashboardShellProps {
  auth: AuthState;
  children: React.ReactNode;
}

const linkBase =
  'flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition border';

const ClientDashboardShell: React.FC<ClientDashboardShellProps> = ({ auth, children }) => {
  const userName = auth.user?.full_name || 'Usuario';

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <aside className="lg:w-72 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm"
                  style={{ background: theme.colors.primary }}
                >
                  <Icons.User size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900 truncate">{userName}</div>
                  <div className="text-xs text-slate-500 truncate">{auth.user?.email}</div>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <NavLink
                  to="/client"
                  end
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? 'bg-blue-50 border-blue-200 text-slate-900'
                        : 'bg-white border-gray-100 text-slate-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icons.LayoutDashboard size={16} />
                  Resumen
                </NavLink>

                <NavLink
                  to="/client/anuncios"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? 'bg-blue-50 border-blue-200 text-slate-900'
                        : 'bg-white border-gray-100 text-slate-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icons.FileText size={16} />
                  Mis Anuncios
                </NavLink>

                <NavLink
                  to="/client/facturas"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? 'bg-blue-50 border-blue-200 text-slate-900'
                        : 'bg-white border-gray-100 text-slate-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icons.Receipt size={16} />
                  Facturas y Pagos
                </NavLink>

                <NavLink
                  to="/client/perfil"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? 'bg-blue-50 border-blue-200 text-slate-900'
                        : 'bg-white border-gray-100 text-slate-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icons.Settings size={16} />
                  Perfil
                </NavLink>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-slate-500">
                Panel Particular (Client)
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardShell;
