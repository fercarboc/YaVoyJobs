import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export default function AdminInsurancePage() {
  const [providers, setProviders] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [policies, setPolicies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      setError('');
      const [prov, plan, pol] = await Promise.all([
        supabase.from('VoyInsuranceProviders').select('*'),
        supabase.from('VoyInsurancePlans').select('*'),
        supabase.from('VoyInsurancePolicies').select('*'),
      ]);
      if (prov.error || plan.error || pol.error) setError('Error cargando datos');
      else {
        setProviders(prov.data || []);
        setPlans(plan.data || []);
        setPolicies(pol.data || []);
      }
      setLoading(false);
    }
    fetchAll();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Seguros</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <h2 className="text-lg font-bold mt-6 mb-2">Proveedores</h2>
      <table className="min-w-full border text-sm mb-6">
        <thead><tr className="bg-gray-100"><th className="p-2 border">ID</th><th className="p-2 border">Nombre</th></tr></thead>
        <tbody>{providers.map(p => <tr key={p.id}><td className="border p-2">{p.id}</td><td className="border p-2">{p.name}</td></tr>)}</tbody>
      </table>
      <h2 className="text-lg font-bold mt-6 mb-2">Planes</h2>
      <table className="min-w-full border text-sm mb-6">
        <thead><tr className="bg-gray-100"><th className="p-2 border">ID</th><th className="p-2 border">Nombre</th><th className="p-2 border">Cobertura</th></tr></thead>
        <tbody>{plans.map(p => <tr key={p.id}><td className="border p-2">{p.id}</td><td className="border p-2">{p.name}</td><td className="border p-2">{p.coverage_summary}</td></tr>)}</tbody>
      </table>
      <h2 className="text-lg font-bold mt-6 mb-2">Pólizas</h2>
      <table className="min-w-full border text-sm mb-6">
        <thead><tr className="bg-gray-100"><th className="p-2 border">ID</th><th className="p-2 border">Número</th></tr></thead>
        <tbody>{policies.map(p => <tr key={p.id}><td className="border p-2">{p.id}</td><td className="border p-2">{p.policy_number}</td></tr>)}</tbody>
      </table>
      {loading && <div className="text-center p-4">Cargando...</div>}
    </div>
  );
}
