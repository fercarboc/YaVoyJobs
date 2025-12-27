import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { getAdminStats } from "@/services/adminApi";

type Stats = Awaited<ReturnType<typeof getAdminStats>>;

const AdminHomePage: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAdminStats()
      .then(setStats)
      .catch((err) => setError(err?.message || "No se pudieron cargar los KPIs"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Home</h1>
        <p className="text-sm text-gray-600">KPIs generales y alertas.</p>
      </div>
      {error && <div className="p-3 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200">{error}</div>}
      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando KPIs...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <StatCard title="Usuarios" value={stats?.users ?? "—"} helper="Total en VoyUsers" />
          <StatCard title="Proveedores" value={stats?.providers ?? "—"} helper="Role PROVIDER" />
          <StatCard title="Trabajos" value={stats?.jobs ?? "—"} helper="VoyJobs" />
          <StatCard title="Anuncios vivienda" value={stats?.housing ?? "—"} helper="VoyHousingAds" />
          <StatCard title="Facturas pendientes" value={stats?.invoicesPending ?? "—"} />
          <StatCard title="Facturas pagadas" value={stats?.invoicesPaid ?? "—"} />
          <StatCard
            title="Pagos MTD"
            value={stats ? `${stats.paymentsMTD.toFixed(2)} €` : "—"}
            helper="Suma de VoyPayments en el mes"
          />
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
