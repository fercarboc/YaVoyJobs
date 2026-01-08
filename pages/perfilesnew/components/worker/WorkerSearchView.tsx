import React, { useEffect, useMemo, useState } from "react";
import { useVoyUser } from "@/hooks/useVoyUser";
import { jobsService, VoyJobRow } from "@/services/jobs.service";
import { applicationsService } from "@/services/applications.service";

type JobTypeFilter = "ONE_OFF" | "HOURLY" | "ALL";

export const WorkerSearchView: React.FC = () => {
  const { voyUser, loading: userLoading } = useVoyUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<VoyJobRow[]>([]);

  // filtros simples (si ya tienes UI de filtros, enlázala aquí)
  const [categoryIn, setCategoryIn] = useState<string[]>([]);
  const [jobType, setJobType] = useState<JobTypeFilter>("ALL");

  // modal postulación
  const [applyJob, setApplyJob] = useState<VoyJobRow | null>(null);
  const [proposal, setProposal] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [applyBusy, setApplyBusy] = useState(false);

  // PARA NO VER / BLOQUEAR TRABAJOS A LOS QUE YA APLICASTE
  const [appliedJobIds, setAppliedJobIds] = useState<Set<string>>(new Set());
  const [hideApplied, setHideApplied] = useState<boolean>(false);

  const district = useMemo(() => {
    // según tu tabla: primary_district (preferido) o district
    return ((voyUser as any)?.primary_district ?? voyUser?.district ?? null) as string | null;
  }, [voyUser]);

  const jobTypes = useMemo(() => {
    if (jobType === "ALL") return undefined;
    return [jobType];
  }, [jobType]);

  const loadApplied = async () => {
    try {
      const apps = await applicationsService.listByWorker();
      const ids = new Set((apps ?? []).map((a: any) => String(a.job_id)).filter(Boolean));
      setAppliedJobIds(ids);
    } catch {
      // si falla no bloqueamos la pantalla, simplemente no marcamos postuladas
      setAppliedJobIds(new Set());
    }
  };

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1) cargar ids de trabajos ya postulados
      await loadApplied();

      // 2) cargar trabajos
      const data = await jobsService.listOpenJobsForHelpers({
        district: district ?? undefined,
        categoryIn: categoryIn.length ? categoryIn : undefined,
        jobTypes,
      });
      setJobs(data ?? []);
    } catch (e: any) {
      setError(e?.message ?? "No se pudieron cargar trabajos.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userLoading) return;
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoading, district, categoryIn.join(","), jobType]);

  const openApply = (job: VoyJobRow) => {
    setApplyJob(job);
    setProposal("");
    setMessage("");
  };

  const submitApply = async () => {
    if (!applyJob) return;

    setApplyBusy(true);
    try {
      const pTrim = proposal.trim();
      const p = pTrim === "" ? null : Number(pTrim);
      if (pTrim !== "" && Number.isNaN(p)) {
        alert("La propuesta debe ser un número.");
        return;
      }

      await applicationsService.applyToJob(applyJob.id, p, message.trim() || undefined);

      // ✅ desactivar “Postularme” al instante (sin esperar a recargar)
      setAppliedJobIds((prev) => new Set(prev).add(String(applyJob.id)));

      setApplyJob(null);
      await load();
    } catch (e: any) {
      alert(e?.message ?? "No se pudo enviar la solicitud.");
    } finally {
      setApplyBusy(false);
    }
  };

  const visibleJobs = useMemo(() => {
    if (!hideApplied) return jobs;
    return jobs.filter((j) => !appliedJobIds.has(String(j.id)));
  }, [jobs, hideApplied, appliedJobIds]);

  return (
      <div className="space-y-4">


      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Buscar trabajos</h2>
          <p className="text-sm text-slate-500">
            {district ? `Distrito: ${district}` : "Sin distrito configurado"}
          </p>
        </div>

        <button
          type="button"
          onClick={load}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Recargar
        </button>
      </div>

      {/* Filtros (opcionales) */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setJobType("ALL")}
            className={`rounded-xl px-3 py-2 text-sm font-semibold border ${
              jobType === "ALL"
                ? "bg-slate-900 text-white border-slate-900"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={() => setJobType("ONE_OFF")}
            className={`rounded-xl px-3 py-2 text-sm font-semibold border ${
              jobType === "ONE_OFF"
                ? "bg-slate-900 text-white border-slate-900"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Puntuales
          </button>
          <button
            type="button"
            onClick={() => setJobType("HOURLY")}
            className={`rounded-xl px-3 py-2 text-sm font-semibold border ${
              jobType === "HOURLY"
                ? "bg-slate-900 text-white border-slate-900"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Por horas
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={hideApplied}
            onChange={(e) => setHideApplied(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          Ocultar postuladas
        </label>

        {/* Si ya tienes selector de categorías, conecta con setCategoryIn([...]) */}
        {categoryIn.length ? (
          <div className="text-sm text-slate-500">
            Categorías: <span className="font-semibold text-slate-700">{categoryIn.join(", ")}</span>
          </div>
        ) : (
          <div className="text-sm text-slate-400">Sin filtro de categorías</div>
        )}
      </div>

      {/* Estados */}
      {error ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">{error}</div>
      ) : null}

      {loading ? (
       <div className="rounded-2xl bg-transparent p-0">

          Cargando trabajos...
        </div>
      ) : null}

      {!loading && visibleJobs.length === 0 ? (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-500">
          No hay trabajos disponibles con los filtros actuales.
        </div>
      ) : null}

      {/* Listado */}
      <div className="grid grid-cols-1 gap-3">
        {visibleJobs.map((job) => {
          const alreadyApplied = appliedJobIds.has(String(job.id));

          return (
            <div
              key={job.id}
              className="rounded-2xl border border-slate-100 bg-white p-4 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{job.title ?? job.category}</p>
                  <p className="text-xs text-slate-500">
                    {job.city ?? "Ciudad"} · {job.district ?? "Distrito"} · {job.job_type}
                  </p>

                  {job.description ? (
                    <p className="mt-2 text-sm text-slate-700 line-clamp-2">{job.description}</p>
                  ) : (
                    <p className="mt-2 text-sm text-slate-400">Sin descripción</p>
                  )}

                  <div className="mt-2 text-xs text-slate-500">
                    {job.price_fixed != null ? (
                      <span className="mr-3">
                        Precio: <b className="text-slate-700">{job.price_fixed}€</b>
                      </span>
                    ) : null}
                    {job.price_hourly != null ? (
                      <span>
                        Hora: <b className="text-slate-700">{job.price_hourly}€</b>
                      </span>
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openApply(job)}
                  disabled={alreadyApplied}
                  className={`shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                    alreadyApplied ? "bg-slate-300 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {alreadyApplied ? "Ya postulado" : "Postularme"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal postulación */}
      {applyJob ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl border border-slate-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Enviar solicitud</h3>
                <p className="text-sm text-slate-500">{applyJob.title ?? applyJob.category}</p>
              </div>

              <button
                type="button"
                onClick={() => setApplyJob(null)}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Propuesta (€) (opcional)
                </label>
                <input
                  value={proposal}
                  onChange={(e) => setProposal(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Ej: 60"
                  inputMode="numeric"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Mensaje (opcional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Cuéntale al anunciante por qué eres buen candidato..."
                  rows={4}
                />
              </div>

              <button
                type="button"
                onClick={submitApply}
                disabled={applyBusy}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {applyBusy ? "Enviando..." : "Enviar solicitud"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
