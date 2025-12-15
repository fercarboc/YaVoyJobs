import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

interface AdminJob {
  id: string;
  title: string;
  microtask_id: string;
  risk_level?: string;
  insurance_fee?: number;
  insurance_status?: string;
  created_at: string;
}

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError('');
      const { data, error } = await supabase
        .from('VoyJobs')
        .select('id,title,microtask_id,created_at,VoyMicroTasks(risk_level),VoyJobInsurance(insurance_fee,status)')
        .order('created_at', { ascending: false });
      if (error) setError(error.message);
      else setJobs((data || []).map((j: any) => ({
        ...j,
        risk_level: j.VoyMicroTasks?.risk_level,
        insurance_fee: j.VoyJobInsurance?.insurance_fee,
        insurance_status: j.VoyJobInsurance?.status,
      })));
      setLoading(false);
    }
    fetchJobs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Jobs</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Título</th>
            <th className="p-2 border">Microtarea</th>
            <th className="p-2 border">Riesgo</th>
            <th className="p-2 border">Seguro (€)</th>
            <th className="p-2 border">Estado Seguro</th>
            <th className="p-2 border">Creado</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={7} className="text-center p-4">Cargando...</td></tr>
          ) : jobs.length === 0 ? (
            <tr><td colSpan={7} className="text-center p-4">Sin datos</td></tr>
          ) : jobs.map(job => (
            <tr key={job.id}>
              <td className="border p-2">{job.id}</td>
              <td className="border p-2">{job.title}</td>
              <td className="border p-2">{job.microtask_id}</td>
              <td className="border p-2">{job.risk_level || '-'}</td>
              <td className="border p-2">{job.insurance_fee ?? '-'}</td>
              <td className="border p-2">{job.insurance_status || '-'}</td>
              <td className="border p-2">{new Date(job.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
