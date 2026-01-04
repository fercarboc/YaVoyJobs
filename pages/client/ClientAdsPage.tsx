import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClientArea } from '../../components/client/ClientDashboardShell';
import { listMyOneOffJobs, VoyJobRow } from '@/services/jobs.service';

const ClientAdsPage: React.FC = () => {
  const { activeArea } = useClientArea();
  const navigate = useNavigate();
  const [ads, setAds] = useState<VoyJobRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (activeArea === 'HOUSING') {
      alert("Cambia a la pestaña 'Trabajos' para publicar.");
      navigate('/client', { replace: true });
      return;
    }

    let mounted = true;
    setLoading(true);
    listMyOneOffJobs()
      .then((data) => {
        if (!mounted) return;
        setAds(data);
      })
      .catch((err: any) => {
        console.error(err);
        if (!mounted) return;
        setError(err?.message || 'No se pudieron cargar tus anuncios');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [activeArea, navigate]);

  if (activeArea === 'HOUSING') {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Mis Anuncios</h1>
          <p className="text-sm text-slate-600 mt-1">
            Anuncios de servicios puntuales (job_type = ONE_OFF) publicados por ti.
          </p>
        </div>

        <button
          type="button"
          className="px-4 py-2 rounded-xl text-sm font-extrabold text-white shadow hover:opacity-95 transition"
          style={{ background: '#16a34a' }}
          onClick={() => alert('Conectar con formulario de anuncio')}
        >
          + Publicar
        </button>
      </div>

      {loading ? (
        <div className="p-3 text-sm text-gray-600">Cargando anuncios...</div>
      ) : error ? (
        <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">{error}</div>
      ) : ads.length === 0 ? (
        <div className="p-3 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl">
          Todavía no has publicado anuncios ONE_OFF.
        </div>
      ) : (
        <div className="grid gap-3">
          {ads.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl bg-white shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                <p className="text-xs text-gray-500">
                  {job.job_type} · {job.city || 'Sin ciudad'}
                  {job.status ? ` · ${job.status}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/client/jobs/${job.id}`)}
                className="mt-3 sm:mt-0 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
              >
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientAdsPage;
