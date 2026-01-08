// src/services/applications.service.ts
import { supabase } from "@/services/supabase";
import {
  getCurrentVoyUserId,
  getJobById,
  listMyApplications,
  updateJobStatus,
  VoyJobApplicationRow,
} from "@/services/jobs.service";
import { JobStatus } from "@/types";
import { ensureChatForApplication } from "@/services/chat";
import { getAuthUserIdByVoyUserId as getAuthUserIdByVoyUserIdRPC } from "@/services/ids.service";

const timestampNow = () => new Date().toISOString();

/**
 * Importante:
 * - VoyJobApplicationRow["status"] = "PENDING" | "ACCEPTED" | "REJECTED" | "COMPLETED"
 * - NO incluye "CANCELLED"
 * => Para cancelar usamos withdraw (delete).
 */

/* =======================================================================================
   ✅ MINI PROFILE (AÑADIDO AQUÍ para no depender de users.service.ts)
   ======================================================================================= */

  export type UserMiniProfile = {
  id?: string;
  auth_user_id: string;
  full_name?: string | null;
  avatar_url?: string | null;
  city?: string | null;
  district?: string | null;
  verification_status?: string | null;
  role?: string | null;

  // ✅ para empresas / agencias
  company_name?: string | null;
  company_logo_url?: string | null; // ✅ AÑADIDO
};

const profileCache = new Map<string, UserMiniProfile>();

const fallbackProfile = (authUserId: string): UserMiniProfile => ({
  auth_user_id: authUserId,
  full_name: "Usuario",
  city: null,
  avatar_url: null,
  district: null,
  verification_status: null,
  role: null,
  company_name: null,
  company_logo_url: null, // ✅ AÑADIDO
});

export async function getUserMiniProfile(authUserId: string): Promise<UserMiniProfile> {
  if (!authUserId) throw new Error("User ID requerido");

  const cached = profileCache.get(authUserId);
  if (cached) return cached;

  const { data, error } = await supabase
    .from("VoyUsers")
    .select(
      "id, auth_user_id, full_name, avatar_url, city, district, verification_status, role, company_name, company_logo_url"
    )
    .eq("auth_user_id", authUserId)
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    const fb = fallbackProfile(authUserId);
    profileCache.set(authUserId, fb);
    return fb;
  }

  const profile: UserMiniProfile = {
    id: data.id,
    auth_user_id: data.auth_user_id,
    full_name: data.full_name ?? null,
    avatar_url: data.avatar_url ?? null,
    city: data.city ?? null,
    district: data.district ?? null,
    verification_status: data.verification_status ?? null,
    role: data.role ?? null,
    company_name: (data as any).company_name ?? null,
    company_logo_url: (data as any).company_logo_url ?? null, // ✅ AÑADIDO
  };

  profileCache.set(authUserId, profile);
  return profile;
}


export function clearUserMiniProfileCache(authUserId?: string) {
  if (authUserId) profileCache.delete(authUserId);
  else profileCache.clear();
}

/* =======================================================================================
   ✅ COMPAT WRAPPER: getAuthUserIdByVoyUserId
   ======================================================================================= */

/**
 * ✅ Wrapper de compatibilidad
 * Si en algún fichero antiguo aún importas getAuthUserIdByVoyUserId desde applications.service,
 * esto evita que rompa. (Pero lo correcto es importar desde "@/services/ids.service")
 */
export async function getAuthUserIdByVoyUserId(voyUserId: string) {
  return await getAuthUserIdByVoyUserIdRPC(voyUserId);
}

/* =======================================================================================
   ✅ CORE API (tu código)
   ======================================================================================= */

export async function listApplicationsByWorker(): Promise<VoyJobApplicationRow[]> {
  return await listMyApplications();
}

export async function listByJob(jobId: string): Promise<VoyJobApplicationRow[]> {
  const { data, error } = await supabase
    .from("VoyJobApplications")
    .select(
      `*,
       helper:VoyUsers!helper_user_id(
         id,
         full_name,
         avatar_url,
         city,
         district,
         verification_status
       )`
    )
    .eq("job_id", jobId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return (data ?? []) as VoyJobApplicationRow[];
}

export async function getApplicationById(applicationId: string): Promise<VoyJobApplicationRow | null> {
  const { data, error } = await supabase
    .from("VoyJobApplications")
    .select("*")
    .eq("id", applicationId)
    .maybeSingle();

  if (error) throw error;
  return (data as VoyJobApplicationRow) || null;
}

export async function applyToJob(jobId: string, proposal: number | null, message?: string) {
  // ✅ VoyUsers.id del helper
  const meVoyUserId = await getCurrentVoyUserId();

  // ✅ auth.users.id del helper (para chat)
  const { data: authData, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;

  const helperAuthUserId = authData.user?.id;
  if (!helperAuthUserId) throw new Error("No autenticado (auth_user_id).");

  // ✅ job
  const job = await getJobById(jobId);
  if (!job) throw new Error("Trabajo no encontrado.");

  // ✅ upsert application
  const row = {
    job_id: jobId,
    helper_user_id: meVoyUserId, // VoyUsers.id
    message: message ?? null,
    proposed_price: proposal ?? null,
    status: "PENDING" as VoyJobApplicationRow["status"],
  };

  const { data, error } = await supabase
    .from("VoyJobApplications")
    .upsert(row, { onConflict: "job_id,helper_user_id" })
    .select("*")
    .maybeSingle();

  if (error) throw error;

  const application = (data as VoyJobApplicationRow) || null;
  if (!application) throw new Error("No se pudo registrar la solicitud.");

  // ✅ auth_user_id del anunciante por RPC (RLS safe)
  const clientAuthUserId = await getAuthUserIdByVoyUserIdRPC(job.creator_user_id);
  if (!clientAuthUserId) throw new Error("No se pudo obtener el identificador del anunciante.");

  // ✅ chat: SIEMPRE auth ids
  await ensureChatForApplication({
    applicationId: application.id,
    jobId,
    clientUserId: clientAuthUserId, // auth.users.id del anunciante
    helperUserId: helperAuthUserId, // auth.users.id del helper
  });

  return application;
}

async function updateStatus(
  applicationId: string,
  status: VoyJobApplicationRow["status"],
  extra?: Partial<VoyJobApplicationRow>
) {
  const payload: any = {
    status,
    updated_at: timestampNow(),
  };

  // ✅ responded_at solo para estados existentes
  if (status === "ACCEPTED" || status === "REJECTED" || status === "COMPLETED") {
    payload.responded_at = timestampNow();
  }

  if (extra) Object.assign(payload, extra);

  const { data, error } = await supabase
    .from("VoyJobApplications")
    .update(payload)
    .eq("id", applicationId)
    .select("*")
    .single();

  if (error) throw error;
  return data as VoyJobApplicationRow;
}

async function rejectOtherApplications(jobId: string, excludeId: string) {
  const { data, error } = await supabase
    .from("VoyJobApplications")
    .update({
      status: "REJECTED",
      responded_at: timestampNow(),
      updated_at: timestampNow(),
    })
    .eq("job_id", jobId)
    .neq("id", excludeId)
    .not("status", "eq", "REJECTED");

  if (error) throw error;
  return (data ?? []) as VoyJobApplicationRow[];
}

export async function acceptApplication(applicationId: string) {
  const application = await getApplicationById(applicationId);
  if (!application) throw new Error("Solicitud no encontrada.");

  const job = await getJobById(application.job_id);
  if (!job) throw new Error("Trabajo no encontrado.");

  // 1) marcar app aceptada
  const updated = await updateStatus(applicationId, "ACCEPTED");

  // 2) mover job a “en progreso”
  await updateJobStatus(application.job_id, JobStatus.IN_PROGRESS);

  // 3) chat con auth ids (ambos)
  const clientAuthUserId = await getAuthUserIdByVoyUserIdRPC(job.creator_user_id);
  if (!clientAuthUserId) throw new Error("No se pudo obtener el identificador del anunciante.");

  // helper_user_id en la app = VoyUsers.id => convertir a auth_user_id
  const helperAuthUserId = await getAuthUserIdByVoyUserIdRPC(application.helper_user_id);
  if (!helperAuthUserId) throw new Error("No se pudo obtener el identificador del trabajador.");

  await ensureChatForApplication({
    jobId: application.job_id,
    clientUserId: clientAuthUserId,
    helperUserId: helperAuthUserId,
    applicationId: application.id,
  });

  // 4) rechazar las demás apps del job
  await rejectOtherApplications(application.job_id, applicationId);

  return updated;
}

export async function rejectApplication(applicationId: string) {
  return await updateStatus(applicationId, "REJECTED");
}

/**
 * ✅ Cancelar sin "CANCELLED"
 * => Withdraw = borrar postulación
 */
export async function cancelApplication(applicationId: string) {
  const { error } = await supabase.from("VoyJobApplications").delete().eq("id", applicationId);
  if (error) throw error;
  return true;
}

export async function markCompleted(applicationId: string) {
  const application = await getApplicationById(applicationId);
  if (!application) throw new Error("Solicitud no encontrada.");

  const updated = await updateStatus(applicationId, "COMPLETED");
  await updateJobStatus(application.job_id, JobStatus.COMPLETED);

  return updated;
}

/**
 * ✅ Realtime (para WorkerApplicationsView)
 */
export function subscribeToChanges(cb: (event: any) => void) {
  const channel = supabase
    .channel("voy_job_applications_changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "VoyJobApplications" },
      (payload) => {
        cb({ type: "APPLICATION_UPDATE", payload });

        const newRow: any = payload.new;
        if (newRow?.status === "ACCEPTED") {
          cb({
            type: "JOB_UPDATE",
            payload: {
              jobId: newRow.job_id,
              acceptedApplicationId: newRow.id,
              newStatus: "IN_PROGRESS",
            },
          });
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

export type ApplicationsService = {
  listByWorker: typeof listApplicationsByWorker;
  listByJob: typeof listByJob;
  getById: typeof getApplicationById;
  applyToJob: typeof applyToJob;
  acceptApplication: typeof acceptApplication;
  rejectApplication: typeof rejectApplication;
  cancelApplication: typeof cancelApplication;
  markCompleted: typeof markCompleted;
  subscribeToChanges: typeof subscribeToChanges;

  // compat wrapper
  getAuthUserIdByVoyUserId: typeof getAuthUserIdByVoyUserId;

  // ✅ mini profiles
  getUserMiniProfile: typeof getUserMiniProfile;
};

export const applicationsService: ApplicationsService = {
  listByWorker: listApplicationsByWorker,
  listByJob,
  getById: getApplicationById,
  applyToJob,
  acceptApplication,
  rejectApplication,
  cancelApplication,
  markCompleted,
  subscribeToChanges,
  getAuthUserIdByVoyUserId,

  // ✅ mini profiles
  getUserMiniProfile,
};
