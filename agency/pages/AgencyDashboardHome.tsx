import React, { useEffect, useState } from "react";
import StatsCards from "../components/StatsCards";
import LeadsTable from "../components/LeadsTable";
import { listMyHousingAds, listMyHousingLeads } from "../services/agencyApi";
import { HousingLead } from "../types/agency";
import { Link } from "react-router-dom";

const AgencyDashboardHome: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ active: 0, total: 0, leads7: 0, leadsAll: 0 });
  const [lastLeads, setLastLeads] = useState<HousingLead[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const ads = await listMyHousingAds();
        const leads = await listMyHousingLeads();
        const sevenDays = Date.now() - 7 * 24 * 60 * 60 * 1000;
        setStats({
          active: ads.filter((a) => a.status === "ACTIVE").length,
          total: ads.length,
          leads7: leads.filter((l) => new Date(l.created_at || "").getTime() >= sevenDays).length,
          leadsAll: leads.length,
        });
        setLastLeads(leads.slice(0, 10));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="p-4 text-sm text-gray-500">Cargando...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard inmobiliaria</h1>
          <p className="text-sm text-gray-600">Resumen de tu actividad de alquiler.</p>
        </div>
        <Link
          to="/agency/ads/new"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full"
        >
          Crear anuncio
        </Link>
      </div>

      <StatsCards
        stats={[
          { label: "Anuncios activos", value: stats.active },
          { label: "Anuncios totales", value: stats.total },
          { label: "Contactos últimos 7 días", value: stats.leads7 },
          { label: "Contactos totales", value: stats.leadsAll },
        ]}
      />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Últimos contactos</h2>
          <Link to="/agency/leads" className="text-sm text-blue-700 hover:text-blue-800 font-semibold">
            Ver todos
          </Link>
        </div>
        <LeadsTable leads={lastLeads} onStatus={() => {}} />
      </div>
    </div>
  );
};

export default AgencyDashboardHome;
