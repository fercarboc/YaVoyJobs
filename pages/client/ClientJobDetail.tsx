import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById, VoyJobRow } from "@/services/jobs.service";

const ClientJobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<VoyJobRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    if (!id) {
      setError("ID no encontrado");
      setLoading(false);
      return;
    }
    setLoading(true);
    getJobById(id)
      .then((data) => {
        if (!mounted) return;
        setJob(data);
      })
      .catch((err: any) => {
        console.error(err);
        if (mounted) setError(err?.message || "No se pudo cargar la oferta");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Oferta #{id || "—"}</h1>
          <p className="text-sm text-gray-600">Detalle de la oferta publicada.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg"
        >
          Volver
        </button>
      </div>

      {loading ? (
        <div className="p-3 text-sm text-gray-600">Cargando oferta...</div>
      ) : error ? (
        <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">{error}</div>
      ) : !job ? (
        <div className="p-3 text-sm text-gray-600">Oferta no encontrada.</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-3">
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Título</p>
            <p className="text-base font-semibold text-gray-900">{job.title}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Ubicación</p>
            <p className="text-sm text-gray-700">{job.city || "Sin ciudad"} · {job.district || job.neighborhood || ""}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Tipo</p>
            <p className="text-sm text-gray-700">{job.job_type}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Precio</p>
            <p className="text-sm text-gray-700">
              {job.price_hourly ? `${job.price_hourly} €/hora` : job.price_fixed ? `${job.price_fixed} €` : "Sin precio"}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Estado</p>
            <p className="text-sm text-gray-700">{job.status}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Descripción</p>
            <p className="text-sm text-gray-700">{job.description || "Sin descripción"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientJobDetail;
