import React, { useEffect, useMemo, useState } from 'react';
import { AuthState } from '../../types';
import { listMyApplications, VoyJobApplicationRow } from '@/services/jobs.service';

type Props = {
  auth: AuthState;
};

const statusBadge = (status?: string) => {
  switch (status) {
    case 'verified':
    case 'VERIFIED':
      return { label: 'Verificado', bg: 'bg-emerald-100', text: 'text-emerald-700' };
    case 'rejected':
    case 'REJECTED':
      return { label: 'Rechazado', bg: 'bg-rose-100', text: 'text-rose-600' };
    default:
      return { label: 'Pendiente', bg: 'bg-yellow-100', text: 'text-yellow-800' };
  }
};

const MetricCard: React.FC<{ title: string; value: React.ReactNode; hint?: string }> = ({
  title,
  value,
  hint,
}) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.3em]">{title}</p>
    <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
    {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
  </div>
);

const WorkerDashboard: React.FC<Props> = ({ auth }) => {
  const [applications, setApplications] = useState<VoyJobApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    listMyApplications()
      .then((res) => {
        if (!mounted) return;
        setApplications(res);
      })
      .catch((err: any) => {
        console.error(err);
        if (!mounted) setError(err?.message || "No se pudieron cargar las métricas");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const completed = useMemo(
    () => applications.filter((app) => app.status === "COMPLETED").length,
    [applications]
  );
  const active = useMemo(
    () =>
      applications.filter((app) =>
        ["ACCEPTED", "IN_PROGRESS", "ASSIGNED"].includes(app.status)
      ).length,
    [applications]
  );

  const verification = statusBadge(auth.user?.verification_status);
  const rating = auth.user?.rating ? auth.user.rating.toFixed(1) : "—";
  const income = auth.user?.income_total ? `€${auth.user.income_total}` : "—";

  return (
    <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Resumen profesional</h1>
        <p className="text-sm text-slate-500 mt-1">
          Gestiona tu estado, solicitudes y resultados desde aquí.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.3em]">
            Verificación
          </p>
          <div className="mt-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${verification.bg} ${verification.text}`}>
              {verification.label}
            </span>
          </div>
        </div>
        <MetricCard title="Trabajos realizados" value={loading ? "..." : completed} />
        <MetricCard title="Trabajos activos" value={loading ? "..." : active} />
        <MetricCard title="Ingresos totales" value={income} hint="Pendiente de integración Stripe" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricCard title="Valoración media" value={rating} />
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerDashboard;
