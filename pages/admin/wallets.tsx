import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export default function AdminWalletsPage() {
  const [wallets, setWallets] = useState<any[]>([]);
  const [ledger, setLedger] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      setError('');
      const [w, l] = await Promise.all([
        supabase.from('VoyWallets').select('*'),
        supabase.from('VoyWalletLedger').select('*'),
      ]);
      if (w.error || l.error) setError('Error cargando datos');
      else {
        setWallets(w.data || []);
        setLedger(l.data || []);
      }
      setLoading(false);
    }
    fetchAll();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Wallets</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <h2 className="text-lg font-bold mt-6 mb-2">Wallets</h2>
      <table className="min-w-full border text-sm mb-6">
        <thead><tr className="bg-gray-100"><th className="p-2 border">ID</th><th className="p-2 border">User</th><th className="p-2 border">Balance</th></tr></thead>
        <tbody>{wallets.map(w => <tr key={w.id}><td className="border p-2">{w.id}</td><td className="border p-2">{w.user_id}</td><td className="border p-2">{w.balance}</td></tr>)}</tbody>
      </table>
      <h2 className="text-lg font-bold mt-6 mb-2">Ledger</h2>
      <table className="min-w-full border text-sm mb-6">
        <thead><tr className="bg-gray-100"><th className="p-2 border">ID</th><th className="p-2 border">Wallet</th><th className="p-2 border">Tipo</th><th className="p-2 border">Cantidad</th><th className="p-2 border">Fecha</th></tr></thead>
        <tbody>{ledger.map(l => <tr key={l.id}><td className="border p-2">{l.id}</td><td className="border p-2">{l.wallet_id}</td><td className="border p-2">{l.type}</td><td className="border p-2">{l.amount}</td><td className="border p-2">{new Date(l.created_at).toLocaleString()}</td></tr>)}</tbody>
      </table>
      {loading && <div className="text-center p-4">Cargando...</div>}
    </div>
  );
}
