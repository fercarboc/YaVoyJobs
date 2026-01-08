import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@/components/ui/Avatar";
import { getUserMiniProfile, UserMiniProfile } from "@/services/applications.service";
import { getAuthUserIdByVoyUserId } from "@/services/ids.service";

import { mapApplicationStatus, APPLICATION_STATUS_STYLES } from "@/utils/applicationStatus";
import { ensureChatForApplication } from "@/services/chat";
import {
  applyToJob,
  getApplicationForJob,
  getJobById,
  VoyJobApplicationRow,
  VoyJobRow,
} from "@/services/jobs.service";

const formatDate = (value?: string | null) =>
  value
    ? new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Fecha desconocida";

const getCreatorLabel = (profile?: UserMiniProfile, job?: VoyJobRow) =>
  profile?.full_name ??
  job?.creator_user_id?.slice?.(0, 6) ??
  "Anunciante";

const getCreatorLocation = (profile?: UserMiniProfile, job?: VoyJobRow) =>
  profile?.district ||
  profile?.city ||
  job?.district ||
  job?.city ||
  job?.neighborhood ||
  "Ubicación no definida";
 
const WorkerJobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<VoyJobRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<VoyJobApplicationRow | null>(null);
  const [creatorProfile, setCreatorProfile] = useState<UserMiniProfile | null>(null);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadJob = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const jobData = await getJobById(id);
        if (!mounted) return;
        setJob(jobData);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err?.message || "No se pudo cargar la oferta");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadJob();
    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    getApplicationForJob(id)
      .then((app) => {
        if (!mounted) return;
        setApplication(app);
      })
      .catch((err) => {
        console.error("Error cargando solicitud", err);
      });
    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!job) {
      setCreatorProfile(null);
      return;
    }
    let mounted = true;
    getAuthUserIdByVoyUserId(job.creator_user_id)
      .then((authId) => {
        if (!authId) return null;
        return getUserMiniProfile(authId);
      })
      .then((profile) => {
        if (!mounted) return;
        setCreatorProfile(profile);
      })
      .catch((err) => {
        console.error("No se pudo cargar el perfil del anunciante", err);
      });
    return () => {
      mounted = false;
    };
  }, [job]);

  const applicationTimeline = (application: VoyJobApplicationRow) => {
    const responseDate = application.responded_at || application.updated_at || null;
    const steps = [
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
            ? "Pendiente de respuesta"
            : application.status === "ACCEPTED"
            ? "Solicitud aceptada"
            : application.status === "REJECTED"
            ? "Solicitud rechazada"
           
            : "Respuesta registrada",
        description:
          application.status === "PENDING"
            ? "Esperando que el cliente confirme."
            : application.status === "ACCEPTED"
            ? "El cliente te seleccionó."
            : application.status === "REJECTED"
            ? "Tu solicitud no fue seleccionada."
          
            : "Estado actualizado.",
        date: responseDate,
      },
    ];

    if (application.status === "COMPLETED") {
      steps.push({
        id: "completed",
        label: "Trabajo finalizado",
        description: "El cliente confirmó la finalización.",
        date: application.updated_at || application.responded_at,
      });
    }

    return (
      <ol className="space-y-3">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex gap-3">
            <span className="flex flex-col items-center">
              <span className={`h-2 w-2 rounded-full ${step.date ? "bg-blue-500" : "bg-slate-300"}`} />
              {idx < steps.length - 1 && <span className="mt-1 h-8 border-l border-slate-200" />}
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
  };

  const headerTitle = job?.title?.trim()
    ? job.title
    : job
    ? `${job.category} en ${job.city || job.district || "Madrid"}`
    : "Detalle de la oferta";

  const headerSubtitle = job
    ? `${job.city || job.district || "Ubicación desconocida"} · ${job.job_type} · ${job.status}`
    : "";

  const headerReference = job ? `Ref: ${job.id.slice(0, 8)}` : "";

  const applicationStatusInfo = useMemo(() => {
    if (!application) return null;
    const key = mapApplicationStatus(application.status);
    return {
      key,
      meta: APPLICATION_STATUS_STYLES[key],
    };
  }, [application]);

  const creatorName = getCreatorLabel(creatorProfile, job);
  const creatorLocation = getCreatorLocation(creatorProfile, job);
  const openWorkerDetailChat = useCallback(async () => {
    if (!job || !application) return;
    try {
      let clientAuthUserId = creatorProfile?.auth_user_id;
      if (!clientAuthUserId) {
        clientAuthUserId = await getAuthUserIdByVoyUserId(job.creator_user_id);
      }
      let helperAuthUserId = application.helper?.auth_user_id;
      if (!helperAuthUserId) {
        helperAuthUserId = await getAuthUserIdByVoyUserId(application.helper_user_id);
      }
      if (!clientAuthUserId) {
        throw new Error("No se pudo resolver el identificador del cliente.");
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
  }, [application, job, navigate]);

  const handleApply = async () => {
    if (!id || application) return;
    setApplying(true);
    try {
      await applyToJob(id, 0, "Estoy interesado/a");
      setApplication({
        id: `tmp-${Date.now()}`,
        job_id: id,
        helper_user_id: "",
        message: "Estoy interesado/a",
        proposed_price: null,
        proposed_hourly_rate: null,
        status: "PENDING",
        created_at: new Date().toISOString(),
      });
      alert("Solicitud enviada");
    } catch (err: any) {
      console.error("Error al aplicar", err);
      alert("Error al aplicar: " + (err?.message || "Desconocido"));
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando oferta...</div>;
  }

  if (error) {
    return (
      <div className="p-4 rounded-2xl border border-red-200 bg-red-50 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (!job) {
    return <div className="p-4 text-sm text-slate-600">No se encontró la oferta.</div>;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{headerTitle}</h1>
          <p className="text-sm text-slate-600">{headerSubtitle}</p>
          <p className="text-xs text-slate-400 mt-1">{headerReference}</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          Volver
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-4">
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Ubicación</p>
          <p className="text-sm text-slate-700">
            {job.city || "Sin ciudad"} · {job.district || job.neighborhood || "Zona no definida"}
          </p>
        </div>
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Tipo</p>
          <p className="text-sm text-slate-700">{job.job_type}</p>
        </div>
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Presupuesto</p>
          <p className="text-sm text-slate-700">
            {job.price_hourly
              ? `${job.price_hourly} €/hora`
              : job.price_fixed
              ? `${job.price_fixed} €`
              : "Sin precio definido"}
          </p>
        </div>
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Estado del anuncio</p>
          <p className="text-sm text-slate-700">{job.status}</p>
        </div>
        <div>
          <p className="text-sm uppercase text-slate-500 font-semibold">Descripción</p>
          <p className="text-sm text-slate-700">{job.description || "Sin descripción"}</p>
        </div>

        {application && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Tu solicitud</p>
                <p className="text-xs text-slate-500">
                  Enviada el {formatDate(application.created_at)}
                </p>
              </div>
              {applicationStatusInfo?.meta && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${applicationStatusInfo.meta.bubble} ${applicationStatusInfo.meta.text}`}
                >
                  {applicationStatusInfo.meta.label}
                </span>
              )}
            </div>

            {application.message && (
              <p className="text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2">
                {application.message}
              </p>
            )}

            {(application.proposed_price || application.proposed_hourly_rate) && (
              <div className="text-sm text-slate-600 space-y-1">
                {application.proposed_price && <p>Precio propuesto: {application.proposed_price} €</p>}
                {application.proposed_hourly_rate && (
                  <p>Tarifa propuesta: {application.proposed_hourly_rate} €/h</p>
                )}
              </div>
            )}

            <div>{applicationTimeline(application)}</div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={openWorkerDetailChat}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Chat
              </button>
              <span className="text-xs text-slate-500">Chat disponible desde la solicitud.</span>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="button"
            disabled={!!application}
            onClick={!application ? handleApply : undefined}
            className={`px-5 py-2 rounded-xl font-semibold text-sm transition ${
              application
                ? "bg-slate-200 text-slate-600 cursor-not-allowed"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {application ? "Solicitud enviada" : applying ? "Aplicando..." : "Aplicar"}
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            src={creatorProfile?.company_logo_url ?? creatorProfile?.avatar_url ?? undefined}
            name={creatorName}
            size={48}
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">{creatorName}</p>
            <p className="text-xs text-slate-500">{creatorLocation}</p>
            {creatorProfile?.verification_status && (
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-1">
                Verificación: {creatorProfile.verification_status}
              </p>
            )}
          </div>
        </div>
        <div className="text-xs text-slate-400">Anunciante</div>
      </div>
    </div>
  );
};

export default WorkerJobDetail;
