import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listOpenEmploymentJobs } from "@/services/jobs.service";
import type { VoyJobRow } from "@/services/jobs.service";

const WorkerJobs: React.FC = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<VoyJobRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    listOpenEmploymentJobs()
      .then((res) => {
        if (!mounted) return;
        setJobs(res);
      })
      .catch((err: any) => {
        console.error(err);
        setError(err?.message || "No se pudieron cargar las ofertas");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ofertas de empleo</h1>
          <p className="text-sm text-gray-600">Encuentra ofertas relevantes y aplica desde aquí.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          placeholder="Buscar por título o empresa"
          className="px-3 py-2 border rounded-lg text-sm w-full sm:w-64"
        />
        <select className="px-3 py-2 border rounded-lg text-sm w-full sm:w-48">
          <option value="">Tipo de jornada</option>
          <option value="full">Jornada completa</option>
          <option value="part">Parcial</option>
        </select>
      </div>

      {loading ? (
        <div className="p-3 text-sm text-gray-600">Cargando ofertas...</div>
      ) : error ? (
        <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">{error}</div>
      ) : jobs.length === 0 ? (
        <div className="p-3 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl">No hay ofertas abiertas.</div>
      ) : (
        <div className="grid gap-3">
          {jobs.map((job) => (
            <div key={job.id} className="border rounded-xl p-4 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                <p className="text-sm text-gray-600">{job.city || "Sin ciudad"} · {job.district || job.neighborhood || ""}</p>
                <p className="text-xs text-gray-500">
                  {job.job_type} ·{" "}
                  {job.price_hourly ? `${job.price_hourly} €/hora` : job.price_fixed ? `${job.price_fixed} €` : "Sin precio"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/worker/jobs/${job.id}`)}
                className="mt-3 sm:mt-0 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
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

export default WorkerJobs;
