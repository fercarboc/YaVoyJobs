import { supabase } from './supabase';

export interface JobTicket {
  job: {
    id: string;
    title: string;
    description: string;
    category?: string;
    microtask_id: string;
  };
  microtask: {
    name: string;
    risk_level?: string;
  };
  insurance?: {
    insurance_fee: number;
    currency: string;
    status: string;
    plan_id?: string;
    policy_id?: string;
    plan?: {
      name: string;
      coverage_summary?: string;
      coverage_amount?: number;
      deductible?: number;
    };
    policy?: {
      policy_number?: string;
    };
    provider?: {
      name?: string;
      claims_phone?: string;
      claims_email?: string;
    };
  };
}

export async function getJobTicket(jobId: string): Promise<JobTicket> {
  // Query join simplificado, puedes expandir según relaciones reales
  const { data, error } = await supabase.rpc('get_job_ticket', { job_id: jobId });
  if (error) throw new Error('Error obteniendo ticket: ' + error.message);
  return data as JobTicket;
}
