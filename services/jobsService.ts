import { supabase } from './supabase';

export interface JobPayload {
  title: string;
  description: string;
  category?: string;
  microtask_id: string;
  [key: string]: any;
}

export async function createJob(payload: JobPayload) {
  const { data, error } = await supabase
    .from('VoyJobs')
    .insert([payload])
    .select()
    .single();
  if (error) throw new Error('Error creando anuncio: ' + error.message);
  return data;
}

export async function updateJobMicrotask(jobId: string, microtaskId: string) {
  const { data, error } = await supabase
    .from('VoyJobs')
    .update({ microtask_id: microtaskId })
    .eq('id', jobId)
    .select()
    .single();
  if (error) throw new Error('Error actualizando microtarea: ' + error.message);
  return data;
}
