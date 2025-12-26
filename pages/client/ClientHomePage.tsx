import React from 'react';
import ClientDashboardShell from '../../components/client/ClientDashboardShell';
import type { AuthState } from '../../types';

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
