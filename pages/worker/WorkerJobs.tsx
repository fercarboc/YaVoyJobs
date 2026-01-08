import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobStatus } from "@/types";
import type { VoyJobApplicationRow, VoyJobRow } from "@/services/jobs.service";
import {
  listJobsByIds,
  listMyApplications,
  listOpenJobsForHelpers,
} from "@/services/jobs.service";
import { markApplicationsNotificationsRead } from "@/services/notifications.service";
import JobStatusBadge from "@/components/jobs/JobStatusBadge";
import Avatar from "@/components/ui/Avatar";

// ✅ OJO: ahora los traes desde applications.service (como has decidido tú)
import { getUserMiniProfile, UserMiniProfile } from "@/services/applications.service";
import { getAuthUserIdByVoyUserId } from "@/services/ids.service";

import { useAuth } from "@/hooks/useAuth";
import { mapApplicationStatus, APPLICATION_STATUS_STYLES } from "@/utils/applicationStatus";
import { ensureChatForApplication } from "@/services/chat";

type TabKey = "available" | "applications";

const formatDate = (value?: string | null) => {
  if (!value) return null;
  try {
    return new Date(value).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return value;
  }
};

const getOwnerLabel = (profile?: UserMiniProfile) =>
  profile?.company_name ?? profile?.full_name ?? "Anunciante";

const getOwnerLocation = (profile?: UserMiniProfile, job?: VoyJobRow) =>
  profile?.district ||
  profile?.city ||
  job?.district ||
  job?.city ||
  job?.neighborhood ||
  "Ubicación no definida";

const getApplicationStatusMeta = (status: string) => {
  const key = mapApplicationStatus(status);
  return APPLICATION_STATUS_STYLES[key];
};

const WorkerJobs: React.FC<{ initialTab?: TabKey }> = ({ initialTab = "available" }) => {
  const navigate = useNavigate();

  // ✅ useAuth() en tu app devuelve { sessionUser, ... } (NO devuelve { auth })
  const { sessionUser } = useAuth();

  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const [availableJobs, setAvailableJobs] = useState<VoyJobRow[]>([]);
  const [applications, setApplications] = useState<VoyJobApplicationRow[]>([]);
  const [applicationJobs, setApplicationJobs] = useState<Record<string, VoyJobRow>>({});
  const [userProfiles, setUserProfiles] = useState<Record<string, UserMiniProfile>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setAvailableJobs([]);
    setApplications([]);
    setApplicationJobs({});

    try {
      const [jobs, apps] = await Promise.all([listOpenJobsForHelpers(), listMyApplications()]);
      const jobIds = apps.map((app) => app.job_id);

      const jobRows = jobIds.length ? await listJobsByIds(jobIds) : [];

      const map: Record<string, VoyJobRow> = {};
      jobRows.forEach((job) => {
        map[job.id] = job;
      });

      const filtered = jobs.filter((job) => !jobIds.includes(job.id));

      setAvailableJobs(filtered);
      setApplications(apps);
      setApplicationJobs(map);

      // ✅ Cargar mini perfiles de anunciantes (creator_user_id es VoyUsers.id)
      const ownerIds = new Set<string>();
      filtered.forEach((job) => job.creator_user_id && ownerIds.add(job.creator_user_id));
      jobRows.forEach((job) => job.creator_user_id && ownerIds.add(job.creator_user_id));

      if (ownerIds.size) {
        const profiles = await Promise.all(
          Array.from(ownerIds).map(async (voyUserId) => {
            try {
              const authUserId = await getAuthUserIdByVoyUserId(voyUserId);
              if (!authUserId) return null;

              const profile = await getUserMiniProfile(authUserId);
              return { voyUserId, profile };
            } catch (innerErr) {
              console.warn("[WorkerJobs] fallo al cargar perfil de usuario", voyUserId, innerErr);
              return null;
            }
          })
        );

        const profileMap: Record<string, UserMiniProfile> = {};
        profiles.forEach((entry) => {
          if (entry) profileMap[entry.voyUserId] = entry.profile;
        });

        setUserProfiles((prev) => ({ ...prev, ...profileMap }));
      }
    } catch (err: any) {
      console.error("[WorkerJobs] error", err);
      setError(err?.message || "No se pudo cargar la información.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (activeTab !== "applications" || !applications.length) return;

    const ids = applications.map((app) => app.id);
    markApplicationsNotificationsRead(ids)
      .then(() => {
        window.dispatchEvent(new Event("voy:notifications-updated"));
      })
      .catch((err) => {
        console.error("Error marcando notificaciones como leídas", err);
      });
  }, [activeTab, applications]);

  const applicationEntries = useMemo(() => {
    return applications.map((app) => ({
      application: app,
      job: applicationJobs[app.job_id],
    }));
  }, [applications, applicationJobs]);

  const renderJobCreator = (job?: VoyJobRow) => {
    if (!job) return null;

    const profile = userProfiles[job.creator_user_id];
    const ownerName = getOwnerLabel(profile);
    const ownerLocation = getOwnerLocation(profile, job);
    const avatarSrc = profile?.avatar_url ?? undefined;

    return (
      <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
        <Avatar size={36} src={avatarSrc} name={ownerName} />
        <div className="text-xs text-slate-500">
          <p className="text-sm font-semibold text-slate-900">{ownerName}</p>
          <p>{ownerLocation}</p>
          {profile?.verification_status && (
            <p className="uppercase tracking-[0.2em] text-[10px]">
              {profile.verification_status}
            </p>
          )}
        </div>
      </div>
    );
  };

  const handleTab = (tab: TabKey) => setActiveTab(tab);

  const renderTimeline = (application: VoyJobApplicationRow) => {
    const responseDate = application.responded_at || application.updated_at || null;

    const timeline: Array<{
      id: string;
      label: string;
      description: string;
      date?: string | null;
    }> = [
      {
        id: "sent",
        label: "Solicitud enviada",
        description: "Tu mensaje ya llegó al anunciante.",
        date: application.created_at,
      },
      {
        id: "response",
        label:
          application.status === "PENDING"
            ? "Respuesta pendiente"
            : application.status === "ACCEPTED"
            ? "Solicitud aceptada"
            : application.status === "REJECTED"
            ? "Solicitud rechazada"
            : "Respuesta registrada",
        description:
          application.status === "PENDING"
            ? "Esperando a que el cliente responda."
            : application.status === "ACCEPTED"
            ? "El cliente ha aceptado tu oferta."
            : application.status === "REJECTED"
            ? "El cliente ha rechazado la solicitud."
            : "El estado ha cambiado.",
        date: responseDate,
      },
    ];

    if (application.status === "COMPLETED") {
      timeline.push({
        id: "completed",
        label: "Trabajo finalizado",
        description: "El cliente confirmó la finalización.",
        date: application.updated_at || application.responded_at,
      });
    }

    return (
      <ol className="space-y-3">
        {timeline.map((item, index) => (
          <li key={item.id} className="flex gap-3">
            <span className="flex flex-col items-center">
              <span className={`h-2 w-2 rounded-full ${item.date ? "bg-blue-500" : "bg-slate-300"}`} />
              {index < timeline.length - 1 && <span className="mt-1 h-8 border-l border-slate-200" />}
            </span>
            <div className="flex-1 border-l border-slate-100 pl-3">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-500">{item.description}</p>
              {item.date && <p className="text-xs text-slate-400 mt-1">{formatDate(item.date)}</p>}
            </div>
          </li>
        ))}
      </ol>
    );
  };

 const openWorkerChat = useCallback(
  async (application: VoyJobApplicationRow, job?: VoyJobRow) => {
    if (!job) return;

    // ✅ auth.users.id del helper (en tu useAuth suele ser sessionUser.id)
    const helperAuthUserId = sessionUser?.id;

    if (!helperAuthUserId) {
      console.warn("[WorkerJobs] faltó helperAuthUserId", { applicationId: application.id });
      alert("No se pudo abrir el chat. Falta información de tu cuenta.");
      return;
    }

    try {
      // ✅ si tu UserMiniProfile NO tiene auth_user_id, no lo uses aquí
      let clientAuthUserId: string | null = null;

      // si lo guardas en profile (opcional), lo leemos "safe"
      clientAuthUserId = (userProfiles[job.creator_user_id] as any)?.auth_user_id ?? null;

      // si no, lo resolvemos por RPC
      if (!clientAuthUserId) {
        clientAuthUserId = await getAuthUserIdByVoyUserId(job.creator_user_id);
      }

      if (!clientAuthUserId) {
        console.warn("[WorkerJobs] faltó clientAuthUserId", { jobId: job.id });
        alert("No se pudo abrir el chat. Falta información del anuncio.");
        return;
      }

      const chat = await ensureChatForApplication({
        applicationId: application.id,
        jobId: job.id,
        clientUserId: clientAuthUserId,
        helperUserId: helperAuthUserId,
      });

      if (chat?.id) {
        navigate(`/chat/${job.id}?chatId=${chat.id}`);
      }
    } catch (err: any) {
      console.error("No se pudo abrir el chat", err);
      alert("No se pudo abrir el chat: " + (err?.message || "Intenta de nuevo"));
    }
  },
  // ✅ DEPENDENCIAS correctas: nada de auth_user_id
  [navigate, sessionUser?.id, userProfiles]
);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.4em]">Empleo</p>
          <h1 className="text-2xl font-bold text-slate-900">Ofertas y solicitudes</h1>
          <p className="text-sm text-slate-500 mt-1">
            Revisa las ofertas disponibles y el seguimiento de tus solicitudes en un mismo sitio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleTab("available")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "available"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Ofertas disponibles
          </button>

          <button
            type="button"
            onClick={() => handleTab("applications")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "applications"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Mis solicitudes ({applications.length})
          </button>

          <button
            type="button"
            onClick={loadData}
            className="px-3 py-1 rounded-full text-xs font-semibold transition bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          >
            Actualizar
          </button>
        </div>
      </header>

      {error && (
        <div className="p-4 text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-xl">
          {error}
        </div>
      )}

      {loading ? (
        <div className="p-4 text-sm text-slate-600">Cargando información...</div>
      ) : activeTab === "available" ? (
        <section className="space-y-4">
          {availableJobs.length === 0 ? (
            <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50 text-sm text-slate-600">
              No hay ofertas disponibles en este momento. Vuelve más tarde o crea una alerta.
            </div>
          ) : (
            availableJobs.map((job) => {
              const zone = job.district || job.city || job.neighborhood || "Zona no definida";
              const budget =
                job.price_fixed != null
                  ? `${job.price_fixed.toLocaleString("es-ES")} €`
                  : job.price_hourly
                  ? `${job.price_hourly.toLocaleString("es-ES")} €/h`
                  : "Sin presupuesto";

              const jobStatus = (job.status as JobStatus) || JobStatus.OPEN;

              return (
                <article
                  key={job.id}
                  className="border border-slate-100 rounded-2xl p-5 bg-white shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-slate-900">
                        {job.title || job.category}
                      </p>
                      <p className="text-xs text-slate-500">
                        {zone} · {job.job_type}
                      </p>
                    </div>
                    <JobStatusBadge status={jobStatus} className="text-xs" />
                  </div>

                  <p className="text-sm text-slate-600">{job.description || "Sin descripción."}</p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="px-2 py-1 rounded-full border border-slate-200 bg-slate-50">
                      {job.category}
                    </span>
                    <span className="px-2 py-1 rounded-full border border-slate-200 bg-slate-50">
                      {budget}
                    </span>
                  </div>

                  {renderJobCreator(job)}

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => navigate(`/worker/jobs/${job.id}`)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
                    >
                      Ver detalle
                    </button>
                  </div>
                </article>
              );
            })
          )}
        </section>
      ) : (
        <section className="space-y-4">
          {applications.length === 0 ? (
            <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50 text-sm text-slate-600 space-y-2">
              <p>No has enviado ninguna solicitud aún.</p>
              <p>Explora las ofertas disponibles para elegir tu próximo trabajo.</p>
            </div>
          ) : (
            applicationEntries.map(({ application, job }) => {
              const jobTitle = job?.title?.trim()
                ? job.title
                : job
                ? `${job.category} en ${job.district || job.city || "Madrid"}`
                : "Oferta";

              const jobZone = job?.district || job?.city || job?.neighborhood || "Zona no definida";
              const statusMeta = getApplicationStatusMeta(application.status);

              return (
                <article
                  key={application.id}
                  className="border border-slate-100 rounded-2xl p-5 bg-white shadow-sm space-y-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-slate-900">{jobTitle}</p>
                      <p className="text-xs text-slate-500">
                        {jobZone} · Solicitud enviada el{" "}
                        {formatDate(application.created_at) || "fecha desconocida"}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        statusMeta?.bubble ?? "bg-slate-100"
                      } ${statusMeta?.text ?? "text-slate-600"}`}
                    >
                      {statusMeta?.label ?? application.status}
                    </span>
                  </div>

                  {renderJobCreator(job)}
                  <div>{renderTimeline(application)}</div>

                  {application.message && (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                      <p className="font-semibold text-slate-800">Mensaje enviado</p>
                      <p>{application.message}</p>
                    </div>
                  )}

                  {(application.proposed_price || application.proposed_hourly_rate) && (
                    <div className="text-sm text-slate-600">
                      {application.proposed_price && <p>Precio propuesto: {application.proposed_price} €</p>}
                      {application.proposed_hourly_rate && (
                        <p>Tarifa propuesta: {application.proposed_hourly_rate} €/h</p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 justify-end border-t border-slate-200 pt-3">
                    <button
                      onClick={() => navigate(`/worker/jobs/${application.job_id}`)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
                    >
                      Ver oferta
                    </button>

                    <button
                      type="button"
                      onClick={() => openWorkerChat(application, job)}
                      className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition"
                    >
                      Chat
                    </button>

                    <span className="text-xs text-slate-500">Chat disponible desde la solicitud.</span>
                  </div>
                </article>
              );
            })
          )}
        </section>
      )}
    </div>
  );
};

export default WorkerJobs;
