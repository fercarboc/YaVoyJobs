import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import JobStatusBadge from "@/components/jobs/JobStatusBadge";
import Avatar from "@/components/ui/Avatar";
import { Modal } from "@/components/common/Modal";

import { JobStatus } from "@/types";
import { getJobById, type VoyJobRow, type VoyJobApplicationRow } from "@/services/jobs.service";
import { applicationsService, getUserMiniProfile, type UserMiniProfile } from "@/services/applications.service";
import { createNotification } from "@/services/notifications.service";
import { paymentService } from "@/services/paymentService";
import { useAuth } from "@/hooks/useAuth";

import { getAuthUserIdByVoyUserId } from "@/services/ids.service";
import { mapApplicationStatus, APPLICATION_STATUS_STYLES } from "@/utils/applicationStatus";
import { supabase } from "@/services/supabase";
import { ensureChatForApplication } from "@/services/chat";

type JobCandidateHelper = {
  id: string; // VoyUsers.id
  full_name?: string | null;
  avatar_url?: string | null;
  city?: string | null;
  district?: string | null;
  verification_status?: string | null;
};

type ClientJobApplicationRow = {
  id: string;
  job_id: string;
  helper_user_id: string; // VoyUsers.id
  message: string | null;
  proposed_price: number | null;
  proposed_hourly_rate: number | null;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "COMPLETED";
  created_at: string;
  updated_at?: string;
  responded_at?: string | null;
  helper?: JobCandidateHelper | null;
};

const formatDate = (value?: string | null) =>
  value
    ? new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

const ClientJobDetail: React.FC = () => {
  const { sessionUser } = useAuth();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [job, setJob] = useState<VoyJobRow | null>(null);
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState<string | null>(null);

  const [applications, setApplications] = useState<ClientJobApplicationRow[]>([]);
  const [appsLoading, setAppsLoading] = useState(true);
  const [appsError, setAppsError] = useState<string | null>(null);

  const [actionError, setActionError] = useState<string | null>(null);
  const [busyAction, setBusyAction] = useState<{ id: string; type: "accept" | "reject" | "complete" } | null>(null);

  const [profilePreview, setProfilePreview] = useState<UserMiniProfile | null>(null);

  const isMountedRef = useRef(true);

  // ✅ Comprobación de dueño correcta:
  // job.creator_user_id = VoyUsers.id
  // sessionUser.id = auth.users.id
  const [isOwner, setIsOwner] = useState(false);

  const resolveIsOwner = useCallback(async (jobRow: VoyJobRow | null) => {
    if (!jobRow || !sessionUser?.id) {
      setIsOwner(false);
      return;
    }
    try {
      const creatorAuthId = await getAuthUserIdByVoyUserId(jobRow.creator_user_id);
      setIsOwner(Boolean(creatorAuthId && creatorAuthId === sessionUser.id));
    } catch (e) {
      console.warn("[ClientJobDetail] no se pudo resolver isOwner", e);
      setIsOwner(false);
    }
  }, [sessionUser?.id]);

  const loadJob = useCallback(async () => {
    if (!id) return;
    setJobLoading(true);
    setJobError(null);
    try {
      const data = await getJobById(id);
      if (!isMountedRef.current) return;
      setJob(data);
      await resolveIsOwner(data);
    } catch (err: any) {
      console.error("ClientJobDetail loadJob", err);
      setJobError(err?.message || "No se pudo cargar la oferta.");
    } finally {
      if (isMountedRef.current) setJobLoading(false);
    }
  }, [id, resolveIsOwner]);

  const loadApplications = useCallback(async () => {
    if (!id) return;
    setAppsLoading(true);
    setAppsError(null);
    try {
      const { data, error } = await supabase
        .from("VoyJobApplications")
        .select(
          `
            *,
            helper:VoyUsers!helper_user_id(
              id,
              full_name,
              avatar_url,
              city,
              district,
              verification_status
            )
          `
        )
        .eq("job_id", id)
        .order("created_at", { ascending: true });

      if (error) throw error;
      if (!isMountedRef.current) return;
      setApplications(((data ?? []) as ClientJobApplicationRow[]) || []);
    } catch (err: any) {
      console.error("ClientJobDetail loadApplications", err);
      setAppsError("No se pudieron cargar los candidatos. Intenta actualizar.");
    } finally {
      if (isMountedRef.current) setAppsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    loadJob();
    loadApplications();
  }, [loadJob, loadApplications]);

  const handleAccept = async (application: VoyJobApplicationRow) => {
    if (!job || !isOwner) return;

    setActionError(null);
    setBusyAction({ id: application.id, type: "accept" });

    try {
      const updated = await applicationsService.acceptApplication(application.id);

      await loadJob();
      await loadApplications();

      await createNotification({
        userId: updated.helper_user_id, // VoyUsers.id (según tu implementación actual)
        title: "Solicitud aceptada",
        message: `${job.title || job.category} ha sido aceptada.`,
        type: "APPLICATION_ACCEPTED",
        relatedJobId: job.id,
        relatedApplicationId: application.id,
      });

      window.dispatchEvent(new Event("voy:notifications-updated"));
    } catch (err: any) {
      console.error("accept", err);
      setActionError(err?.message || "No se pudo aceptar la solicitud.");
    } finally {
      setBusyAction(null);
    }
  };

  const handleReject = async (application: VoyJobApplicationRow) => {
    if (!job || !isOwner) return;

    setActionError(null);
    setBusyAction({ id: application.id, type: "reject" });

    try {
      const updated = await applicationsService.rejectApplication(application.id);

      await loadApplications();

      await createNotification({
        userId: updated.helper_user_id, // VoyUsers.id
        title: "Solicitud rechazada",
        message: `Tu solicitud para ${job.title || job.category} ha sido rechazada.`,
        type: "APPLICATION_REJECTED",
        relatedJobId: job.id,
        relatedApplicationId: application.id,
      });

      window.dispatchEvent(new Event("voy:notifications-updated"));
    } catch (err: any) {
      console.error("reject", err);
      setActionError(err?.message || "No se pudo rechazar la solicitud.");
    } finally {
      setBusyAction(null);
    }
  };

  const handleComplete = async (application: VoyJobApplicationRow) => {
    if (!job || !isOwner) return;

    // ✅ el cliente (dueño) para pagos es auth id = sessionUser.id
    const clientAuthUserId = sessionUser?.id;
    if (!clientAuthUserId) {
      setActionError("Necesitas estar identificado para marcar la finalización.");
      return;
    }

    setActionError(null);
    setBusyAction({ id: application.id, type: "complete" });

    try {
      const updated = await applicationsService.markCompleted(application.id);

      const amount = job.price_fixed ?? job.price_hourly ?? 0;
      await paymentService.recordJobPayment({
        userId: clientAuthUserId,
        jobId: job.id,
        applicationId: application.id,
        amount,
      });

      await loadJob();
      await loadApplications();

      await createNotification({
        userId: updated.helper_user_id, // VoyUsers.id
        title: "Trabajo finalizado",
        message: `El trabajo ${job.title || job.category} se ha marcado como completado.`,
        type: "JOB_STATUS_CHANGED",
        relatedJobId: job.id,
        relatedApplicationId: application.id,
      });

      window.dispatchEvent(new Event("voy:notifications-updated"));
    } catch (err: any) {
      console.error("complete", err);
      setActionError(err?.message || "No se pudo finalizar el trabajo.");
    } finally {
      setBusyAction(null);
    }
  };

  const applicationTimeline = useCallback((application: ClientJobApplicationRow) => {
    const responseDate = application.responded_at || application.updated_at || null;

    const timeline = [
      {
        id: "sent",
        label: "Solicitud enviada",
        description: "La solicitud ya llegó al anunciante.",
        date: application.created_at,
      },
      {
        id: "response",
        label:
          application.status === "PENDING"
            ? "Pendiente de respuesta"
            : application.status === "ACCEPTED"
            ? "Solicitud aceptada"
            : application.status === "REJECTED"
            ? "Solicitud rechazada"
            : "Respuesta registrada",
        description:
          application.status === "PENDING"
            ? "Esperando respuesta del cliente."
            : application.status === "ACCEPTED"
            ? "El cliente te seleccionó."
            : application.status === "REJECTED"
            ? "Tu solicitud no fue seleccionada."
            : "Estado actualizado.",
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
        {timeline.map((step, idx) => (
          <li key={step.id} className="flex gap-3">
            <span className="flex flex-col items-center">
              <span className={`h-2 w-2 rounded-full ${step.date ? "bg-blue-500" : "bg-slate-300"}`} />
              {idx < timeline.length - 1 && <span className="mt-1 h-8 border-l border-slate-200" />}
            </span>
            <div className="flex-1 border-l border-slate-100 pl-3">
              <p className="text-sm font-semibold text-slate-900">{step.label}</p>
              <p className="text-xs text-slate-500">{step.description}</p>
              {step.date && <p className="text-xs text-slate-400 mt-1">{formatDate(step.date)}</p>}
            </div>
          </li>
        ))}
      </ol>
    );
  }, []);

  const openClientChat = useCallback(
    async (application: ClientJobApplicationRow) => {
      if (!job) return;

      try {
        // ✅ cliente (dueño) = auth.users.id
        const clientAuthUserId = sessionUser?.id;
        if (!clientAuthUserId) throw new Error("No se pudo resolver tu cuenta.");

        // ✅ helper NO trae auth_user_id => lo resolvemos por RPC usando VoyUsers.id
        const helperVoyUserId = application.helper_user_id;
        const helperAuthUserId = await getAuthUserIdByVoyUserId(helperVoyUserId);
        if (!helperAuthUserId) throw new Error("No se pudo resolver el candidato.");

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
    [job, navigate, sessionUser?.id]
  );

  const jobTitle = useMemo(() => {
    if (!job) return "Detalle de la oferta";
    return job.title?.trim() ? job.title : `${job.category} en ${job.district || job.city || "Madrid"}`;
  }, [job]);

  const jobZone = useMemo(() => job?.district || job?.city || job?.neighborhood || "Zona no definida", [job]);

  const acceptedApplication = applications.find((app) => app.status === "ACCEPTED");

  if (jobLoading) return <div className="p-4 text-sm text-slate-600">Cargando oferta...</div>;

  if (jobError) {
    return <div className="p-4 text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-xl">{jobError}</div>;
  }

  if (!job) return <div className="p-4 text-sm text-slate-600">No se encontró la oferta.</div>;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Empleo</p>
          <h1 className="text-2xl font-bold text-slate-900">{jobTitle}</h1>
          <p className="text-sm text-slate-500">
            {jobZone} · {job.job_type} · {new Date(job.created_at).toLocaleDateString("es-ES")}
          </p>
          <p className="text-xs text-slate-400">Ref: {job.id.slice(0, 8)}</p>
        </div>

        <div className="flex items-center gap-2">
          <JobStatusBadge status={(job.status as JobStatus) ?? JobStatus.OPEN} />
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            Volver
          </button>
        </div>
      </div>

      {actionError && (
        <div className="text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-2xl p-3">{actionError}</div>
      )}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-4">
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Descripción</p>
          <p className="text-sm text-slate-700">{job.description || "Sin descripción"}</p>
        </div>

        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Presupuesto</p>
          <p className="text-sm text-slate-700">
            {job.price_fixed
              ? `${job.price_fixed.toLocaleString("es-ES")} €`
              : job.price_hourly
              ? `${job.price_hourly.toLocaleString("es-ES")} €/h`
              : "Sin precio definido"}
          </p>
        </div>

        {acceptedApplication && (
          <div className="flex flex-col gap-2 rounded-2xl border border-green-100 bg-green-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-green-800">Solicitud aceptada</p>
              <span className="text-xs text-green-600">
                {formatDate(acceptedApplication.responded_at || acceptedApplication.updated_at)}
              </span>
            </div>

            <p className="text-xs text-slate-600">
              El trabajador seleccionado verá esta oferta como «Asignada» y puede usar el chat.
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                to={`/chat/${job.id}`}
                className="text-xs font-semibold text-white bg-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-800"
              >
                Abrir chat
              </Link>

              {busyAction?.type === "complete" && busyAction?.id === acceptedApplication.id ? (
                <span className="text-xs font-semibold text-slate-500">Finalizando...</span>
              ) : (
                job.status !== "COMPLETED" && (
                  <button
                    type="button"
                    onClick={() => handleComplete(acceptedApplication as any)}
                    className="text-xs font-semibold text-emerald-700 border border-emerald-200 rounded-full px-3 py-1.5 hover:bg-emerald-50 transition"
                  >
                    Marcar como finalizado
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Candidatos</p>
            <h2 className="text-lg font-bold text-slate-900">
              Candidatos (solicitudes recibidas) · {applications.length}
            </h2>
          </div>

          <button
            type="button"
            onClick={loadApplications}
            className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold hover:bg-slate-50"
          >
            {appsLoading ? "Actualizando..." : "Actualizar"}
          </button>
        </div>

        {appsLoading ? (
          <div className="text-sm text-slate-600">Cargando candidatos...</div>
        ) : appsError ? (
          <div className="text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-xl p-3">{appsError}</div>
        ) : applications.length === 0 ? (
          <div className="text-sm text-slate-500 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            No has recibido ninguna solicitud de candidatos todavía. Cuando alguien aplique, aparecerá aquí.
          </div>
        ) : (
          <div className="space-y-4 bg-slate-50 p-4 rounded-2xl">

            {applications.map((application) => {
              const candidateStatus = mapApplicationStatus(application.status);
              const statusMeta = APPLICATION_STATUS_STYLES[candidateStatus];
              const helper = application.helper;

              const helperName = helper?.full_name ?? "Candidato";
              const helperLocation = helper?.city || helper?.district;

              const handlePreview = async () => {
                if (!helper) return;
                try {
                  // helper.id es VoyUsers.id => resolvemos auth id por RPC
                  const helperAuthId = await getAuthUserIdByVoyUserId(helper.id);
                  if (!helperAuthId) throw new Error("No se pudo resolver el identificador del candidato.");

                  const profile = await getUserMiniProfile(helperAuthId);
                  setProfilePreview(profile);
                } catch (err) {
                  console.error("No se pudo cargar el perfil del candidato", err);
                }
              };

              return (
                <article
                  key={application.id}
                  className="border border-slate-100 rounded-2xl p-5 bg-white shadow-sm space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <Avatar
                      src={helper?.avatar_url ?? undefined}
                      name={helperName}
                      size={48}
                      className="cursor-pointer"
                      onClick={handlePreview}
                      alt={helperName}
                    />

                    <div className="flex-1">
                      <button
                        type="button"
                        onClick={handlePreview}
                        className="text-sm font-semibold text-slate-900 hover:text-slate-700 underline decoration-dotted underline-offset-4"
                      >
                        {helperName}
                      </button>
                      <p className="text-xs text-slate-500">{helperLocation ?? "Ciudad no registrada"}</p>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] ${statusMeta.bubble}`}>
                      {statusMeta.label}
                    </span>
                  </div>

                  <div className="text-sm text-slate-700 space-y-2">
                    {application.message ? (
                      <p className="bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2 text-xs text-slate-600">
                        {application.message}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500">Sin mensaje incluido.</p>
                    )}

                    {(application.proposed_price || application.proposed_hourly_rate) && (
                      <div className="text-xs text-slate-500 space-y-1">
                        {application.proposed_price && <p>Precio propuesto: {application.proposed_price} €</p>}
                        {application.proposed_hourly_rate && <p>Tarifa propuesta: {application.proposed_hourly_rate} €/h</p>}
                      </div>
                    )}

                    <p className="text-[11px] text-slate-400 uppercase tracking-[0.3em]">
                      Enviada el {formatDate(application.created_at) ?? "fecha desconocida"}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openClientChat(application)}
                      className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800"
                    >
                      Chat
                    </button>
                    <span className="text-xs text-slate-500">Chat disponible desde la solicitud.</span>
                  </div>

                  <div>{applicationTimeline(application)}</div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <Modal open={!!profilePreview} onClose={() => setProfilePreview(null)} title={profilePreview?.full_name ?? "Perfil"}>
        {profilePreview && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar src={profilePreview.avatar_url ?? undefined} name={profilePreview.full_name ?? "A"} size={52} />
              <div>
                <p className="text-sm font-bold text-slate-900">{profilePreview.full_name ?? "Candidato"}</p>
                {profilePreview.city || profilePreview.district ? (
                  <p className="text-xs text-slate-500">{profilePreview.city ?? profilePreview.district}</p>
                ) : null}
              </div>
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-[0.3em]">
              Verificación: {profilePreview.verification_status ?? "Pendiente"}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ClientJobDetail;
