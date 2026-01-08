import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  listMyEmploymentJobs,
  listMyOneOffJobs,
  updateJobStatus,
  VoyJobRow,
} from "@/services/jobs.service";
import { JobStatus } from "@/types";
import JobStatusBadge from "@/components/jobs/JobStatusBadge";

type Props = {
  mode: "oneoff" | "employment";
  showCreateButton?: boolean;
  onCreate?: () => void;
};

const MODE_CONFIG = {
  oneoff: {
    title: "Mis anuncios puntuales",
    empty: "Aún no has creado anuncios puntuales.",
    ctaLabel: "Publicar anuncio puntual",
  },
  employment: {
    title: "Mis ofertas de empleo",
    empty: "Aún no has publicado ofertas de empleo.",
    ctaLabel: "Crear oferta de empleo",
  },
} as const;

const toJobStatus = (value?: string | null): JobStatus => {
  const candidate = (value ?? "").trim().toUpperCase() as JobStatus;
  return Object.values(JobStatus).includes(candidate) ? candidate : JobStatus.OPEN;
};

const MyJobsList: React.FC<Props> = ({ mode, showCreateButton = false, onCreate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [jobs, setJobs] = useState<VoyJobRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyIds, setBusyIds] = useState<string[]>([]);

  const loadJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = mode === "oneoff" ? await listMyOneOffJobs() : await listMyEmploymentJobs();
      setJobs(rows ?? []);
    } catch (err: any) {
      console.error("[MyJobsList] failed to load jobs:", err);
      setError(err?.message || "No se pudieron cargar tus anuncios.");
    } finally {
      setLoading(false);
    }
  }, [mode]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs, location.key]);

  const handleStatusChange = useCallback(
    async (id: string, newStatus: JobStatus) => {
      setBusyIds((prev) => [...prev, id]);
      try {
        await updateJobStatus(id, newStatus);
        await loadJobs();
      } catch (err: any) {
        console.error("[MyJobsList] update status error:", err);
        setError(err?.message || "No se pudo actualizar el estado.");
      } finally {
        setBusyIds((prev) => prev.filter((jobId) => jobId !== id));
      }
    },
    [loadJobs]
  );

  const handleEdit = (jobId: string) => {
    if (mode === "oneoff") {
      navigate(`/jobs/oneoff/${jobId}/edit`);
    } else {
      navigate(`/client/jobs/${jobId}`);
    }
  };

  const handleView = (jobId: string) => {
    navigate(`/client/jobs/${jobId}`);
  };

  const config = MODE_CONFIG[mode];
  const emptyMessage = useMemo(() => config.empty, [config]);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.3em]">Anuncios</p>
          <h3 className="text-lg font-bold text-slate-900">{config.title}</h3>
        </div>
        {showCreateButton && (
          <button
            type="button"
            onClick={() => onCreate?.()}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            {config.ctaLabel}
          </button>
        )}
      </div>

      {loading ? (
        <div className="text-sm text-slate-500">Cargando anuncios...</div>
      ) : error ? (
        <div className="text-sm text-rose-700 bg-rose-50 rounded-xl p-3 border border-rose-100">{error}</div>
      ) : jobs.length === 0 ? (
        <div className="text-sm text-slate-500 bg-slate-50 border border-slate-200 rounded-xl p-4">{emptyMessage}</div>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => {
            const status = toJobStatus(job.status);
            const date = new Date(job.created_at).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            const budget =
              job.price_fixed != null
                ? `${job.price_fixed.toLocaleString("es-ES")} €`
                : "Presupuesto sin definir";
            const zone = job.neighborhood || job.district || job.city || "Zona no definida";
            const isDraft = status === JobStatus.DRAFT;
            const isOpen = status === JobStatus.OPEN;
            const busy = busyIds.includes(job.id);

            return (
              <div key={job.id} className="border border-slate-100 rounded-2xl p-4 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{job.title || job.category}</p>
                    <p className="text-xs text-slate-500">
                      {zone} · {date}
                    </p>
                  </div>
                  <JobStatusBadge status={status} />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="px-2 py-0.5 bg-white border border-slate-100 rounded-full">{job.category}</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-100 rounded-full">{budget}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(job.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleView(job.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-700 transition"
                  >
                    Ver
                  </button>
                  {isDraft && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => handleStatusChange(job.id, JobStatus.OPEN)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white disabled:opacity-60 hover:bg-emerald-700 transition"
                    >
                      {busy ? "Publicando..." : "Publicar"}
                    </button>
                  )}
                  {isOpen && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => handleStatusChange(job.id, JobStatus.CANCELLED)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 text-white disabled:opacity-60 hover:bg-rose-700 transition"
                    >
                      {busy ? "Guardando..." : "Cancelar"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyJobsList;
