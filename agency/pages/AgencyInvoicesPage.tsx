import React, { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { getCurrentVoyUser } from "../services/agencyApi";

type Invoice = {
  id: string;
  created_at?: string;
  amount?: number;
  currency?: string;
  description?: string;
  status?: string;
};

const AgencyInvoicesPage: React.FC = () => {
  const [rows, setRows] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const user = await getCurrentVoyUser();
      const { data, error } = await supabase
        .from("VoyInvoices")
        .select("*")
        .eq("payer_user_id", user.id)
        .order("created_at", { ascending: false });
      if (!error && data) setRows(data as Invoice[]);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Facturas</h1>
        <p className="text-sm text-gray-600">Pagos de la plataforma.</p>
      </div>
      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando...</div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Fecha", "Importe", "Descripción", "Estado", ""].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No hay facturas.
                  </td>
                </tr>
              )}
              {rows.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{inv.created_at?.slice(0, 10) || "-"}</td>
                  <td className="px-4 py-3 text-gray-900 font-semibold">
                    {inv.amount ?? 0} {inv.currency || "EUR"}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{inv.description || "-"}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {inv.status || "PENDING"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-blue-700 hover:underline">Ver</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AgencyInvoicesPage;
