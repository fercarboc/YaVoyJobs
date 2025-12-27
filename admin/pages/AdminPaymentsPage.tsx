import React, { useEffect, useState } from "react";
import { listPayments } from "@/services/adminApi";

const AdminPaymentsPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    listPayments()
      .then(setData)
      .catch((err) => setError(err?.message || "No se pudieron cargar los pagos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pagos</h1>
        <p className="text-sm text-gray-600">VoyPayments.</p>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando pagos...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">ID</th>
                <th className="text-left px-4 py-3">Usuario</th>
                <th className="text-left px-4 py-3">Importe</th>
                <th className="text-left px-4 py-3">Estado</th>
                <th className="text-left px-4 py-3">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900 font-semibold">{p.id}</td>
                  <td className="px-4 py-3 text-gray-700">{p.user_id || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {p.amount} {p.currency}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{p.status || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{p.created_at ? new Date(p.created_at).toLocaleDateString() : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPaymentsPage;
