import React, { useEffect, useState } from "react";
import { listSubscriptions } from "@/services/adminApi";

const AdminSubscriptionsPage: React.FC = () => {
  const [subs, setSubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    listSubscriptions()
      .then(setSubs)
      .catch((err) => setError(err?.message || "No se pudieron cargar las suscripciones"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Suscripciones</h1>
        <p className="text-sm text-gray-600">Listado de VoyCompanySubscriptions.</p>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando suscripciones...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Plan</th>
                <th className="text-left px-4 py-3">Scope</th>
                <th className="text-left px-4 py-3">Importe</th>
                <th className="text-left px-4 py-3">Tipo</th>
                <th className="text-left px-4 py-3">Estado</th>
                <th className="text-left px-4 py-3">Vigencia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subs.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{s.plan?.name || s.plan_id}</td>
                  <td className="px-4 py-3 text-gray-700">{s.plan?.plan_scope || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {s.amount} {s.currency}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{s.subscription_type}</td>
                  <td className="px-4 py-3 text-gray-700">{s.status}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {s.start_date ? new Date(s.start_date).toLocaleDateString() : "—"} -{" "}
                    {s.end_date ? new Date(s.end_date).toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSubscriptionsPage;
