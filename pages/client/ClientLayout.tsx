import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthState } from '../../types';
import { Icons } from '../../components/Icons';

type Props = {
  auth: AuthState;
};

const ClientLayout: React.FC<Props> = ({ auth }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-4 hidden md:block">
        <h2 className="font-bold text-slate-800 mb-1">Mi Panel</h2>
        <p className="text-xs text-slate-500 mb-4">
          {auth.user?.full_name ?? auth.user?.email}
        </p>

        <nav className="space-y-2 text-sm">
          <button
            onClick={() => navigate('/client')}
            className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-slate-100"
          >
            <Icons.Tool size={16} /> Inicio
          </button>

          <button
            onClick={() => navigate('/client/anuncios')}
            className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-slate-100"
          >
            <Icons.MessageCircle size={16} /> Mis anuncios
          </button>

          <button
            onClick={() => navigate('/client/facturas')}
            className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-slate-100"
          >
            <Icons.Shield size={16} /> Facturas
          </button>

          <button
            onClick={() => navigate('/client/perfil')}
            className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-slate-100"
          >
            <Icons.Edit3 size={16} /> Perfil
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 bg-slate-50">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
