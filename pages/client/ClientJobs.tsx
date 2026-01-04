import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { mapLegacyRoleToBase } from "@/types";
import { listMyEmploymentJobs } from "@/services/jobs.service";
import type { VoyJobRow } from "@/services/jobs.service";

const ClientJobs: React.FC = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const clientType = useMemo(() => {
    return (
      auth?.user?.clientType ??
      mapLegacyRoleToBase(auth?.user?.role as any).clientType
    );
  }, [auth?.user?.clientType, auth?.user?.role]);

  const [jobs, setJobs] = useState<VoyJobRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    listMyEmploymentJobs()
      .then((res) => {
        if (!mounted) return;
        setJobs(res);
      })
      .catch((err: any) => {
        console.error(err);
        if (mounted) setError(err?.message || "No se pudieron cargar tus ofertas");
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
          <h1 className="text-2xl font-bold text-gray-900">Mis ofertas de empleo</h1>
          <p className="text-sm text-gray-600">Gestiona las ofertas que has publicado.</p>
        </div>

        {clientType !== "PERSON" && (
          <button
            type="button"
            onClick={() => navigate("/client/jobs/new")}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Crear oferta
          </button>
        )}
      </div>

      {clientType === "PERSON" && (
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
          Empleo disponible solo para empresas.
        </div>
      )}

      {loading ? (
        <div className="p-3 text-sm text-gray-600">Cargando tus ofertas...</div>
      ) : error ? (
        <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">{error}</div>
      ) : jobs.length === 0 ? (
        <div className="p-3 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl">
          Aún no has creado ofertas.
        </div>
      ) : (
        <div className="grid gap-3">
          {jobs.map((job) => (
            <div key={job.id} className="border rounded-xl bg-white shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                <p className="text-xs text-gray-500">
                  {job.job_type} · {job.city || "Sin ciudad"}
                  {job.status ? ` · ${job.status}` : ""}
                </p>
              </div>

              {/* OJO: esta ruta NO existe todavía (ver punto 2) */}
              <button
                type="button"
                onClick={() => navigate(`/client/jobs/${job.id}`)}
                className="px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
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

export default ClientJobs;
