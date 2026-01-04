import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";

type Props = {
  onSelect: (userId: string) => void;
};

type Row = {
  id: string;
  full_name: string | null;
  email: string | null;
  verification_status: string | null;
  verification_type: string | null;
};

const statusBadge = (status: string | null) => {
  const common = "px-2 py-1 rounded-full text-xs font-semibold";
  if (status === "verified") return <span className={`${common} bg-green-100 text-green-700`}>🟢 Verificado</span>;
  if (status === "rejected") return <span className={`${common} bg-red-100 text-red-700`}>🔴 Rechazado</span>;
  if (status === "pending") return <span className={`${common} bg-amber-100 text-amber-700`}>🟡 Pendiente</span>;
  return <span className={`${common} bg-gray-100 text-gray-600`}>—</span>;
};

export default function AdminUsersList({ onSelect }: Props) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{ status: string; type: string }>({ status: "", type: "" });

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      let query = supabase.from("VoyUsers").select("id, full_name, email, verification_status, verification_type").order("created_at", { ascending: false });
      if (filters.status) query = query.eq("verification_status", filters.status);
      if (filters.type) query = query.eq("verification_type", filters.type);
      const { data, error } = await query;
      if (error) {
        console.error(error);
        setRows([]);
      } else {
        setRows((data ?? []) as Row[]);
      }
      setLoading(false);
    };
    load();
  }, [filters.status, filters.type]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <select
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
          className="px-3 py-2 border rounded-lg text-sm"
        >
          <option value="">Estado</option>
          <option value="pending">Pendiente</option>
          <option value="verified">Verificado</option>
          <option value="rejected">Rechazado</option>
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
          className="px-3 py-2 border rounded-lg text-sm"
        >
          <option value="">Tipo</option>
          <option value="particular">Particular</option>
          <option value="helper">Helper</option>
          <option value="company">Company</option>
          <option value="agency">Agency</option>
        </select>
      </div>

      {loading ? (
        <div className="text-sm text-gray-500">Cargando usuarios...</div>
      ) : (
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl bg-white">
          {rows.map((u) => (
            <button
              key={u.id}
              onClick={() => onSelect(u.id)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-slate-900">{u.full_name || "Sin nombre"}</div>
                <div className="text-xs text-slate-500">{u.email || "Sin email"}</div>
                <div className="text-xs text-slate-500">Tipo: {u.verification_type || "—"}</div>
              </div>
              {statusBadge(u.verification_status)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
