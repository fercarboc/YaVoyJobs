import { supabase } from "@/services/supabase";

export type VoyJobRow = {
  id: string;
  creator_user_id: string;
  title: string;
  description: string | null;
  category: string;
  job_type: string; // enum VoyJobType
  price_fixed: number | null;
  price_hourly: number | null;
  district: string | null;
  neighborhood: string | null;
  status: string; // enum VoyJobStatus
  created_at: string;
};

export async function getCurrentVoyUserId() {
  const { data, error } = await supabase.rpc("voy_current_user_id");
  if (error) throw error;
  return data as string; // uuid VoyUsers.id
}

export async function listMyJobs() {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from('VoyJobs')
    .select('*')
    .eq('creator_user_id', me)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
}

export async function listOpenJobs(filters?: { district?: string; categoryIn?: string[] }) {
  let q = supabase
    .from('VoyJobs')
    .select('*')
    .eq('status', 'OPEN')
    .order('created_at', { ascending: false });

  if (filters?.district) q = q.eq('district', filters.district);
  if (filters?.categoryIn?.length) q = q.in('category', filters.categoryIn);

  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as VoyJobRow[];
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
    .from('VoyJobs')
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
      status: 'OPEN',
      city: 'Madrid',
    })
    .select('*')
    .single();

  if (error) throw error;
  return data as VoyJobRow;
}

export async function applyToJob(jobId: string, proposal: number, message: string) {
  const me = await getCurrentVoyUserId();

  const { data, error } = await supabase
    .from('VoyJobApplications')
    .insert({
      job_id: jobId,
      helper_user_id: me,
      proposed_price: proposal,
      message,
      status: 'PENDING',
    })
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

export async function withdrawApplication(jobId: string) {
  const me = await getCurrentVoyUserId();

  const { error } = await supabase
    .from('VoyJobApplications')
    .delete()
    .eq('job_id', jobId)
    .eq('helper_user_id', me);

  if (error) throw error;
}
