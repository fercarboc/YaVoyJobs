import React from 'react';
import ClientDashboardShell from '../../components/client/ClientDashboardShell';
import type { AuthState } from '../../types';

interface Props {
  auth: AuthState;
}

const ClientAdsPage: React.FC<Props> = ({ auth }) => {
  return (
    <ClientDashboardShell auth={auth}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Mis Anuncios</h1>
          <p className="text-sm text-slate-600 mt-1">
            Aquí irá el listado de anuncios del particular, estados, candidatos y acciones.
          </p>
        </div>

        <button
          type="button"
          className="px-4 py-2 rounded-xl text-sm font-extrabold text-white shadow hover:opacity-95 transition"
          style={{ background: '#16a34a' }}
          onClick={() => alert('Luego conectamos: Crear Anuncio')}
        >
          + Publicar
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4">
        <div className="text-sm font-bold text-slate-900">Listado (placeholder)</div>
        <div className="text-sm text-slate-600 mt-2">
          Todavía no hay anuncios. En el siguiente paso conectamos Supabase/tu API para:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Crear anuncio</li>
            <li>Ver candidatos</li>
            <li>Chat</li>
            <li>Finalizar y valorar</li>
          </ul>
        </div>
      </div>
    </ClientDashboardShell>
  );
};

export default ClientAdsPage;
