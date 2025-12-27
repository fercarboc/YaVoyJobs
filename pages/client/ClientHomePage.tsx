import React from 'react';
import ClientDashboardShell from '../../components/client/ClientDashboardShell';
import { useClientArea } from '../../components/client/ClientDashboardShell';
import type { AuthState } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  auth: AuthState;
}

const StatCard = ({ title, value, hint }: { title: string; value: string; hint?: string }) => (
  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
    <div className="text-xs font-bold text-slate-500">{title}</div>
    <div className="text-2xl font-extrabold text-slate-900 mt-1">{value}</div>
    {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
  </div>
);

const ClientHomePage: React.FC<Props> = ({ auth }) => {
  const { activeArea } = useClientArea();

  if (activeArea === 'HOUSING') {
    return (
      <ClientDashboardShell auth={auth}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Alquiler</h1>
            <p className="text-sm text-slate-600 mt-1">
              Explora inmuebles y guarda favoritos. Publicar trabajos está desactivado en este modo.
            </p>
          </div>
          <Link
            to="/alquiler"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
          >
            Ir a Alquiler
          </Link>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
            <h2 className="text-sm font-extrabold text-slate-900">Favoritos de alquiler</h2>
            <p className="text-sm text-slate-600 mt-2">Aún no tienes favoritos guardados.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
            <h2 className="text-sm font-extrabold text-slate-900">Chats de alquiler</h2>
            <p className="text-sm text-slate-600 mt-2">Aquí verás tus conversaciones de alquiler.</p>
          </div>
        </div>
      </ClientDashboardShell>
    );
  }

  return (
    <ClientDashboardShell auth={auth}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Resumen</h1>
          <p className="text-sm text-slate-600 mt-1">
            Aquí verás un resumen de tus anuncios, pagos y actividad.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard title="Anuncios activos" value="0" hint="Próximo: listado real" />
        <StatCard title="Candidatos" value="0" hint="Próximo: chat/candidaturas" />
        <StatCard title="Pagos pendientes" value="0€" hint="Próximo: Stripe" />
        <StatCard title="Trabajos completados" value="0" hint="Próximo: historial" />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-gray-100 p-4">
          <h2 className="text-sm font-extrabold text-slate-900">Acciones rápidas</h2>
          <div className="mt-3 grid gap-2">
            <div className="text-sm text-slate-700">• Publicar anuncio (lo conectamos luego)</div>
            <div className="text-sm text-slate-700">• Ver candidatos (lo conectamos luego)</div>
            <div className="text-sm text-slate-700">• Mis facturas (lo conectamos luego)</div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 p-4">
          <h2 className="text-sm font-extrabold text-slate-900">Tu cuenta</h2>
          <div className="mt-3 text-sm text-slate-700">
            <div><span className="font-bold">Nombre:</span> {auth.user?.full_name}</div>
            <div><span className="font-bold">Email:</span> {auth.user?.email}</div>
            <div className="mt-2 text-xs text-slate-500">
              Luego aquí metemos verificación, direcciones, preferencias, etc.
            </div>
          </div>
        </div>
      </div>
    </ClientDashboardShell>
  );
};

export default ClientHomePage;
