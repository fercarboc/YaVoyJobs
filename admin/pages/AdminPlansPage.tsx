import React, { useEffect, useState } from "react";
import { listPlanDiscounts, listPlans } from "@/services/adminApi";

const AdminPlansPage: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [discounts, setDiscounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([listPlans(), listPlanDiscounts()])
      .then(([p, d]) => {
        setPlans(p);
        setDiscounts(d);
      })
      .catch((err) => setError(err?.message || "No se pudieron cargar los planes"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Planes</h1>
        <p className="text-sm text-gray-600">Planes y descuentos configurados.</p>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando planes...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Plan</th>
                <th className="text-left px-4 py-3">Scope</th>
                <th className="text-left px-4 py-3">Precio</th>
                <th className="text-left px-4 py-3">Periodo</th>
                <th className="text-left px-4 py-3">Activo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {plans.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{p.name}</td>
                  <td className="px-4 py-3 text-gray-700">{p.plan_scope}</td>
                  <td className="px-4 py-3 text-gray-700">{p.price} {p.currency}</td>
                  <td className="px-4 py-3 text-gray-700">{p.billing_period || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">{p.is_active ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Descuentos</h2>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto mt-2">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Scope</th>
                <th className="text-left px-4 py-3">Meses</th>
                <th className="text-left px-4 py-3">Descuento</th>
                <th className="text-left px-4 py-3">Activo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {discounts.map((d) => (
                <tr key={`${d.plan_scope}-${d.commitment_months}`} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{d.plan_scope}</td>
                  <td className="px-4 py-3 text-gray-700">{d.commitment_months}</td>
                  <td className="px-4 py-3 text-gray-700">{d.discount_pct}%</td>
                  <td className="px-4 py-3 text-gray-700">{d.is_active ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPlansPage;
