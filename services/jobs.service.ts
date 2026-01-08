import { supabase } from "@/services/supabase";
import type { HelperCard, JobPayload } from "@/types";
import { JobStatus } from "@/types";

export type VoyJobRow = {
  id: string;
  creator_user_id: string;
  title: string;
  description: string | null;
  category: string;
  job_type: string;
  price_fixed: number | null;
  price_hourly: number | null;
  district: string | null;
  neighborhood: string | null;
  city: string | null;
  status: string;
  created_at: string;
};

export type VoyJobApplicationRow = {
  id: string;
  job_id: string;
  helper_user_id: string;
  message: string | null;
  proposed_price: number | null;
  proposed_hourly_rate: number | null;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "COMPLETED";
  created_at: string;
  updated_at?: string;
  responded_at?: string | null;
  helper?: {
    id: string;
    full_name?: string | null;
    avatar_url?: string | null;
    city?: string | null;
    district?: string | null;
    auth_user_id?: string | null;
    verification_status?: string | null;
  };
};

export async function getCurrentVoyUserId() {
  const { data, error } = await supabase.rpc("voy_current_user_id");
  if (error) throw error;
  return data as string; // uuid VoyUsers.id
}

export async function listMyJobs(): Promise<VoyJobRow[]> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("*")
    .eq("creator_user_id", me)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listMyJobsEmployment(): Promise<VoyJobRow[]> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("*")
    .eq("creator_user_id", me)
    .neq("job_type", "ONE_OFF")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listMyJobsOneOff(): Promise<VoyJobRow[]> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("*")
    .eq("creator_user_id", me)
    .eq("job_type", "ONE_OFF")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listOpenJobs(filters?: {
  district?: string;
  categoryIn?: string[];
}): Promise<VoyJobRow[]> {
  let q = supabase
    .from("VoyJobs")
    .select("*")
    .eq("status", "OPEN")
    .order("created_at", { ascending: false });

  if (filters?.district) q = q.eq("district", filters.district);
  if (filters?.categoryIn?.length) q = q.in("category", filters.categoryIn);

  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listOpenJobsEmployment(filters?: {
  district?: string;
  categoryIn?: string[];
}): Promise<VoyJobRow[]> {
  let q = supabase
    .from("VoyJobs")
    .select("*")
    .eq("status", "OPEN")
    .neq("job_type", "ONE_OFF")
    .order("created_at", { ascending: false });

  if (filters?.district) q = q.eq("district", filters.district);
  if (filters?.categoryIn?.length) q = q.in("category", filters.categoryIn);

  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listOpenJobsForHelpers(filters?: {
  district?: string;
  categoryIn?: string[];
  jobTypes?: string[];
}): Promise<VoyJobRow[]> {
  const me = await getCurrentVoyUserId();
  let q = supabase
    .from("VoyJobs")
    .select("*")
    .eq("status", "OPEN")
    .neq("creator_user_id", me)
    .order("created_at", { ascending: false });

  if (filters?.district) q = q.eq("district", filters.district);
  if (filters?.categoryIn?.length) q = q.in("category", filters.categoryIn);
  if (filters?.jobTypes?.length) q = q.in("job_type", filters.jobTypes);

  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

// Nombres solicitados (alias) para evitar confusión con ONE_OFF vs Empleo
export const listMyOneOffJobs = listMyJobsOneOff;
export const listMyEmploymentJobs = listMyJobsEmployment;
export const listOpenEmploymentJobs = listOpenJobsEmployment;

export async function getJobById(id: string): Promise<VoyJobRow | null> {
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data as VoyJobRow) || null;
}

export async function createJob(payload: {
  title: string;
  description?: string;
  category: string;
  job_type: string; // ONE_OFF, HOURLY, etc (según tu enum)
  price_fixed?: number | null;
  price_hourly?: number | null;
  district?: string | null;
  neighborhood?: string | null;
}) {
  const me = await getCurrentVoyUserId();

  const { data, error } = await supabase
    .from("VoyJobs")
    .insert({
      creator_user_id: me,
      title: payload.title,
      description: payload.description ?? null,
      category: payload.category,
      job_type: payload.job_type,
      price_fixed: payload.price_fixed ?? null,
      price_hourly: payload.price_hourly ?? null,
      district: payload.district ?? null,
      neighborhood: payload.neighborhood ?? null,
      status: JobStatus.OPEN, // ✅ enum -> string "OPEN"
      city: "Madrid",
    })
    .select("*")
    .single();

  if (error) throw error;
  return data as VoyJobRow;
}

export async function applyToJob(jobId: string, proposal: number, message: string) {
  const me = await getCurrentVoyUserId();

  const { data, error } = await supabase
    .from("VoyJobApplications")
    .insert({
      job_id: jobId,
      helper_user_id: me,
      proposed_price: proposal,
      message,
      status: "PENDING",
    })
    .select("*")
    .single();

  if (error) throw error;
  return data;
}

export async function withdrawApplication(jobId: string) {
  const me = await getCurrentVoyUserId();

  const { error } = await supabase
    .from("VoyJobApplications")
    .delete()
    .eq("job_id", jobId)
    .eq("helper_user_id", me);

  if (error) throw error;
}

/* =======================================================================
   === Helpers disponibles + Invitaciones
   ======================================================================= */

export type ListHelpersFilters = {
  verified?: boolean;
  hasVehicle?: boolean;
  fastResponder?: boolean;
  category?: string | null; // categoría seleccionada en el anuncio
  requireSameCategory?: boolean; // si quieres forzar categories contains
  lat?: number | null;
  lng?: number | null;
  radiusKm?: number | null; // si lat/lng disponibles
};

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function normalizeJobStatus(input?: string | null): JobStatus {
  const v = String(input ?? "").trim().toUpperCase();
  switch (v) {
    case "DRAFT":
      return JobStatus.DRAFT;
    case "OPEN":
      return JobStatus.OPEN;
    case "ASSIGNED":
      return JobStatus.ASSIGNED;
    case "IN_PROGRESS":
      return JobStatus.IN_PROGRESS;
    case "COMPLETED":
      return JobStatus.COMPLETED;
    case "CANCELLED":
      return JobStatus.CANCELLED;
    default:
      return JobStatus.OPEN;
  }
}

/**
 * Lista helpers visibles para el panel derecho.
 * Usa VoyHelpersPublic (VIEW) que debe existir en Supabase.
 */
export async function listHelpers(filters: ListHelpersFilters): Promise<HelperCard[]> {
  let q = supabase
    .from("VoyHelpersPublic")
    .select(
      "helper_user_id, display_name, avatar_url, verified, has_vehicle, fast_responder, status, last_active_min_ago, categories, skills, rating, lat, lng, location_consent"
    )
    .eq("location_consent", true);

  if (filters.verified) q = q.eq("verified", true);
  if (filters.hasVehicle) q = q.eq("has_vehicle", true);
  if (filters.fastResponder) q = q.eq("fast_responder", true);

  if (filters.requireSameCategory && filters.category) {
    q = q.contains("categories", [filters.category]);
  }

  const { data, error } = await q.order("rating", { ascending: false });
  if (error) throw error;

  const rows = (data ?? []) as any[];

  const normalized: HelperCard[] = rows.map((r) => {
    const lat: number | null = r.lat ?? null;
    const lng: number | null = r.lng ?? null;

    let dist: number | undefined = undefined;
    if (filters.lat != null && filters.lng != null && lat != null && lng != null) {
      const d = haversineKm(filters.lat, filters.lng, lat, lng);
      dist = Math.round(d * 10) / 10; // 1 decimal
    }

    return {
      helper_user_id: String(r.helper_user_id),
      display_name: String(r.display_name ?? ""),
      avatar_url: (r.avatar_url ?? null) as string | null, // ✅ obligatorio en types.ts
      verified: Boolean(r.verified),
      has_vehicle: Boolean(r.has_vehicle),
      fast_responder: Boolean(r.fast_responder),
      status: (r.status ?? "available") as any,
      last_active_min_ago: typeof r.last_active_min_ago === "number" ? r.last_active_min_ago : 0,
      categories: Array.isArray(r.categories) ? r.categories : [],
      skills: Array.isArray(r.skills) ? r.skills : [],
      rating: typeof r.rating === "number" ? r.rating : 0,
      lat,
      lng,
      location_consent: Boolean(r.location_consent),
      distanceKm: dist, // ✅ tu types.ts usa distanceKm
    };
  });

  // filtro por radio
  const byRadius =
    filters.radiusKm != null
      ? normalized.filter((h) => h.distanceKm == null || h.distanceKm <= filters.radiusKm!)
      : normalized;

  // Orden: primero cercanía, luego rating
  byRadius.sort((a, b) => {
    const da = a.distanceKm ?? Number.POSITIVE_INFINITY;
    const db = b.distanceKm ?? Number.POSITIVE_INFINITY;
    if (da !== db) return da - db;
    return (b.rating ?? 0) - (a.rating ?? 0);
  });

  return byRadius;
}

/**
 * Envía invitación a un helper para un job.
 * Usa VoyJobInvites.
 */
export async function sendInvite(jobId: string, helperUserId: string): Promise<void> {
  const me = await getCurrentVoyUserId();
  const { error } = await supabase.from("VoyJobInvites").insert({
    job_id: jobId,
    helper_user_id: helperUserId,
    client_user_id: me,
    status: "sent",
  });
  if (error) throw error;
}

/**
 * Para la pantalla “Crear Empleo Puntual” (OneOff UI).
 * No toca tu createJob() actual.
 */
export async function createOrUpdateJobFromOneOffUI(payload: {
  id?: string;
  title: string;
  description: string;
  category: string;
  job_type?: string; // por defecto ONE_OFF
  price_fixed?: number | null;
  price_hourly?: number | null;
  district?: string | null;
  neighborhood?: string | null;
  city?: string | null;
  status?: string; // DRAFT/OPEN/etc
}) {
  const me = await getCurrentVoyUserId();

  const row = {
    creator_user_id: me,
    title: payload.title,
    description: payload.description ?? null,
    category: payload.category,
    job_type: payload.job_type ?? "ONE_OFF",
    price_fixed: payload.price_fixed ?? null,
    price_hourly: payload.price_hourly ?? null,
    district: payload.district ?? null,
    neighborhood: payload.neighborhood ?? null,
    city: payload.city ?? "Madrid",
    status: normalizeJobStatus(payload.status),
  };

  if (payload.id) {
    const { data, error } = await supabase
      .from("VoyJobs")
      .update(row)
      .eq("id", payload.id)
      .select("*")
      .single();
    if (error) throw error;
    return data as VoyJobRow;
  }

  const { data, error } = await supabase
    .from("VoyJobs")
    .insert(row)
    .select("*")
    .single();
  if (error) throw error;
  return data as VoyJobRow;
}

export async function updateJobStatus(jobId: string, status: JobStatus): Promise<void> {
  const { error } = await supabase.from("VoyJobs").update({ status }).eq("id", jobId);
  if (error) throw error;
}

export async function listMyApplications(): Promise<VoyJobApplicationRow[]> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyJobApplications")
    .select(
      `*,
      helper:VoyUsers!helper_user_id(
        id,
        auth_user_id,
        full_name,
        avatar_url,
        city,
        district,
        verification_status
      )`
    )
    .eq("helper_user_id", me)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as VoyJobApplicationRow[];
}

export async function listJobsByIds(jobIds: string[]): Promise<VoyJobRow[]> {
  if (!jobIds.length) return [];
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("*")
    .in("id", jobIds)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function getApplicationForJob(jobId: string): Promise<VoyJobApplicationRow | null> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyJobApplications")
    .select(
      `*,
      helper:VoyUsers!helper_user_id(
        id,
        auth_user_id,
        full_name,
        avatar_url,
        city,
        district,
        verification_status
      )`
    )
    .eq("helper_user_id", me)
    .eq("job_id", jobId)
    .maybeSingle();
  if (error) throw error;
  return (data as VoyJobApplicationRow) || null;
}

// ======================================================================
// Wrapper de compatibilidad para pantallas IA Studio (NO BORRAR)
// Permite: import { jobsService } from "@/services/jobs.service";
// ======================================================================

export const jobsService = {
  async listHelpers(filters: {
    verified?: boolean;
    hasVehicle?: boolean;
    fastResponder?: boolean;
    category?: string | null;
    lat?: number | null;
    lng?: number | null;
    radiusKm?: number | null;
  }) {
    return await listHelpers({
      verified: filters.verified,
      hasVehicle: filters.hasVehicle,
      fastResponder: filters.fastResponder,
      category: filters.category ?? null,
      lat: filters.lat ?? null,
      lng: filters.lng ?? null,
      radiusKm: filters.radiusKm ?? null,
    });
  },

  async createOrUpdateJob(payload: JobPayload & { id?: string; status?: string }) {
    // Tu pantalla espera que devuelva un string (jobId)
    const row = await createOrUpdateJobFromOneOffUI({
      id: (payload as any).id,
      title: (payload as any).title ?? (payload as any).zone_text ?? "Trabajo puntual",
      description: (payload as any).description ?? "",
      category: (payload as any).category ?? "Otros",
      job_type: (payload as any).job_type ?? "ONE_OFF",
      price_fixed: (payload as any).budget_amount ?? null,
      price_hourly: null,
      district: (payload as any).district ?? null,
      neighborhood: (payload as any).neighborhood ?? null,
      city: (payload as any).city ?? "Madrid",
      status: normalizeJobStatus((payload as any).status ?? JobStatus.OPEN),
    });

    return row.id;
  },

  async getJobById(id: string) {
    return await getJobById(id);
  },

  async updateJobStatus(jobId: string, status: JobStatus) {
    return await updateJobStatus(jobId, status);
  },

  async listMyApplications() {
    return await listMyApplications();
  },

  async listJobsByIds(jobIds: string[]) {
    return await listJobsByIds(jobIds);
  },

  async getApplicationForJob(jobId: string) {
    return await getApplicationForJob(jobId);
  },

  async sendInvite(jobId: string, helperUserId: string) {
    return await sendInvite(jobId, helperUserId);
  },
  async listOpenJobsForHelpers(filters?: { district?: string; categoryIn?: string[]; jobTypes?: string[] }) {
    return await listOpenJobsForHelpers(filters);
  },
};
