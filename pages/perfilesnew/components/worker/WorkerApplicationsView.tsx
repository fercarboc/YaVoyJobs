import React, { useMemo, useEffect, useState } from "react";
import { ICONS } from "../../constants";
import { JobStatus, Candidate, User } from "../../types";
import { applicationsService } from "../../../../services/applications.service";
import { jobsService, VoyJobRow, VoyJobApplicationRow } from "../../../../services/jobs.service";
import { supabase } from "@/services/supabase";

interface WorkerApplicationsViewProps {
  user: User;
  onOpenChat: (application: Candidate) => void;
}

type EmployerRow = {
  id: string; // VoyUsers.id
  full_name: string | null;
  avatar_url: string | null; // puede ser path o url
};

type CandidateWithEmployer = Candidate & {
  employerAvatarUrl?: string | null;
};

function formatDateShort(iso?: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear());
  return `${dd}/${mm}/${yy}`;
}

function normalizeJobStatus(input?: string | null): JobStatus {
  const v = String(input ?? "").trim().toUpperCase();
  switch (v) {
    case "OPEN":
      return JobStatus.OPEN;
    case "IN_PROGRESS":
      return JobStatus.IN_PROGRESS;
    case "COMPLETED":
      return JobStatus.COMPLETED;
    case "CLOSED":
      return JobStatus.CLOSED;
    default:
      return JobStatus.OPEN;
  }
}

function budgetToString(app: VoyJobApplicationRow, job?: VoyJobRow): string {
  const fixed = job?.price_fixed ?? app.proposed_price ?? null;
  const hourly = job?.price_hourly ?? app.proposed_hourly_rate ?? null;

  if (fixed != null) return `${fixed}€`;
  if (hourly != null) return `${hourly} €/h`;
  return "—";
}

function initialFromName(name?: string | null) {
  const s = String(name ?? "").trim();
  if (!s) return "E";
  return s.charAt(0).toUpperCase();
}

function mapToCandidate(
  app: VoyJobApplicationRow,
  job?: VoyJobRow,
  employer?: EmployerRow
): CandidateWithEmployer {
  const jobTitle = job?.title ?? job?.category ?? "Trabajo";
  const jobLocation = [job?.district, job?.city].filter(Boolean).join(" · ") || "Sin ubicación";

  const employerName = employer?.full_name ?? "Empleador";
  const employerAvatarUrl = employer?.avatar_url ?? null;

  return {
    id: app.id,
    jobId: app.job_id,
    jobTitle,
    jobBudget: budgetToString(app, job),
    employerName,
    employerAvatarUrl,
    jobLocation,
    appliedAt: formatDateShort(app.created_at),
    status: app.status,
    jobStatus: normalizeJobStatus(job?.status ?? null),
  } as CandidateWithEmployer;
}

async function loadEmployersByIds(voyUserIds: string[]): Promise<Map<string, EmployerRow>> {
  const ids = Array.from(new Set(voyUserIds.filter(Boolean)));
  const map = new Map<string, EmployerRow>();
  if (!ids.length) return map;

  const { data, error } = await supabase
    .from("VoyUsers")
    .select("id, full_name, avatar_url")
    .in("id", ids);

  if (error) throw error;

  (data ?? []).forEach((r: any) => {
    map.set(String(r.id), {
      id: String(r.id),
      full_name: r.full_name ?? null,
      avatar_url: r.avatar_url ?? null,
    });
  });

  return map;
}

function EmployerAvatar({ name, url }: { name: string; url?: string | null }) {
  const initial = initialFromName(name);

  return (
    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center">
      {url ? (
        // Si tu avatar_url es un "path" de storage y no URL completa,
        // aquí te lo dejará en blanco. Si te pasa, dime y te lo firmo con signedUrl.
        <img src={url} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xs font-black text-blue-600">{initial}</span>
      )}
    </div>
  );
}

export const WorkerApplicationsView: React.FC<WorkerApplicationsViewProps> = ({ user, onOpenChat }) => {
  const [activeTab, setActiveTab] = useState<"ACTIVA" | "ACEPTADA" | "RECHAZADA" | "CERRADA">("ACTIVA");
  const [applications, setApplications] = useState<CandidateWithEmployer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1) Mis postulaciones
      const apps: VoyJobApplicationRow[] = await applicationsService.listByWorker();

      // 2) Jobs de esas postulaciones
      const jobIds = Array.from(new Set((apps ?? []).map((a) => a.job_id).filter(Boolean)));
      const jobs: VoyJobRow[] = jobIds.length ? await jobsService.listJobsByIds(jobIds) : [];

      const jobById = new Map<string, VoyJobRow>();
      (jobs ?? []).forEach((j) => jobById.set(j.id, j));

      // 3) Empleadores (VoyUsers) desde creator_user_id
      const creatorIds = Array.from(new Set((jobs ?? []).map((j) => j.creator_user_id).filter(Boolean)));
      const employersById = await loadEmployersByIds(creatorIds);

      // 4) Map a Candidate con employerName + employerAvatarUrl
      const mapped: CandidateWithEmployer[] = (apps ?? []).map((a) => {
        const job = jobById.get(a.job_id);
        const employer = job?.creator_user_id ? employersById.get(job.creator_user_id) : undefined;
        return mapToCandidate(a, job, employer);
      });

      setApplications(mapped);
    } catch (e: any) {
      setError(e?.message ?? "No se pudieron cargar tus postulaciones.");
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Realtime (si existe en tu service)
  useEffect(() => {
    const svc: any = applicationsService as any;
    if (typeof svc.subscribeToChanges !== "function") return;

    const unsubscribe = svc.subscribeToChanges((event: any) => {
      if (event?.type === "JOB_UPDATE") {
        const { jobId, acceptedApplicationId, newStatus } = event.payload ?? {};

        setApplications((prev) =>
          prev.map((app) => {
            if (app.jobId !== jobId) return app;

            if (app.id === acceptedApplicationId) {
              return {
                ...app,
                status: "ACCEPTED" as any,
                jobStatus: normalizeJobStatus(newStatus ?? JobStatus.IN_PROGRESS),
              };
            }

            return {
              ...app,
              status: "REJECTED" as any,
              jobStatus: normalizeJobStatus(newStatus ?? JobStatus.IN_PROGRESS),
            };
          })
        );
      }
    });

    return () => {
      try {
        unsubscribe?.();
      } catch {
        // noop
      }
    };
  }, []);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      if (activeTab === "ACTIVA") return app.status === "PENDING" && app.jobStatus === JobStatus.OPEN;
      if (activeTab === "ACEPTADA") return app.status === "ACCEPTED";
      if (activeTab === "RECHAZADA") return app.status === "REJECTED";
      if (activeTab === "CERRADA") return app.jobStatus === JobStatus.COMPLETED || app.jobStatus === JobStatus.CLOSED;
      return false;
    });
  }, [applications, activeTab]);

  const getStatusChip = (app: Candidate) => {
    switch (app.status) {
      case "ACCEPTED":
        return (
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ring-1 ring-emerald-200 shadow-sm animate-in zoom-in-50">
            ¡CONTRATADO!
          </span>
        );
      case "REJECTED":
        return (
          <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            No seleccionado
          </span>
        );
      case "PENDING":
        return (
          <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
            En revisión
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Mis Postulaciones</h2>
          <p className="text-gray-500 mt-1">Sigue el estado de tus solicitudes en tiempo real</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={load}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 hover:bg-gray-50"
          >
            Recargar
          </button>
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">{error}</div>
      ) : null}

      <div className="flex p-1 bg-gray-100 rounded-2xl w-full max-w-2xl overflow-x-auto">
        {(["ACTIVA", "ACEPTADA", "RECHAZADA", "CERRADA"] as const).map((tab) => {
          const count = applications.filter((app) => {
            if (tab === "ACTIVA") return app.status === "PENDING" && app.jobStatus === JobStatus.OPEN;
            if (tab === "ACEPTADA") return app.status === "ACCEPTED";
            if (tab === "RECHAZADA") return app.status === "REJECTED";
            if (tab === "CERRADA") return app.jobStatus === JobStatus.COMPLETED || app.jobStatus === JobStatus.CLOSED;
            return false;
          }).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] py-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === tab
                  ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0) + tab.slice(1).toLowerCase()}
              {count > 0 && (
                <span
                  className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center font-black ${
                    activeTab === tab ? "bg-blue-600 text-white shadow-sm" : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border border-gray-100 shadow-inner">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
            {ICONS.List}
          </div>
          <h3 className="text-gray-400 font-black text-xl">Cargando...</h3>
          <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto leading-relaxed">Obteniendo tus postulaciones.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((app) => (
              <div
                key={app.id}
                className={`bg-white rounded-[2.5rem] border p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group animate-in slide-in-from-bottom-4 duration-500 ${
                  app.status === "ACCEPTED" ? "border-emerald-200 ring-2 ring-emerald-500/5" : "border-gray-100"
                }`}
              >
                {app.status === "ACCEPTED" && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest animate-pulse">
                    CONTRATADO
                  </div>
                )}

                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">{getStatusChip(app)}</div>
                    <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {app.jobTitle}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900">{app.jobBudget}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Precio acordado</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-2xl border border-gray-50">
                    <EmployerAvatar name={app.employerName} url={app.employerAvatarUrl} />

                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">
                        Empleador
                      </p>
                      <p className="text-sm font-bold text-gray-700 truncate">{app.employerName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    <span className="flex items-center gap-1.5">
                      {ICONS.Location} {app.jobLocation}
                    </span>
                    <span className="flex items-center gap-1.5">
                      {ICONS.Calendar} Solicitado: {app.appliedAt}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-50 text-gray-600 py-4 rounded-2xl text-xs font-bold hover:bg-gray-100 transition-colors border border-gray-100">
                    Ver anuncio
                  </button>

                  {app.status === "ACCEPTED" ? (
                    <button
                      onClick={() => onOpenChat(app)}
                      className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl text-xs font-bold shadow-xl shadow-blue-600/30 hover:bg-blue-700 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                      {ICONS.Messages} Contactar con Cliente
                    </button>
                  ) : (
                    <button
                      disabled={app.status === "REJECTED"}
                      className={`flex-[2] py-4 rounded-2xl text-xs font-bold transition-all ${
                        app.status === "REJECTED"
                          ? "bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100"
                          : "bg-white text-blue-600 border border-blue-100 hover:bg-blue-50"
                      }`}
                    >
                      Esperando respuesta
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100 shadow-inner">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                {ICONS.List}
              </div>
              <h3 className="text-gray-400 font-black text-xl">Sin postulaciones en esta sección</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                Las actualizaciones automáticas aparecerán aquí cuando los empleadores revisen tu perfil.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
