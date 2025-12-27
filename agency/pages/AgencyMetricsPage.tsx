import React, { useEffect, useState } from "react";
import { listMyHousingAds, listMyHousingLeads } from "../services/agencyApi";

type MetricRow = { ad: string; contacts: number; contacts7: number; views: number };

const AgencyMetricsPage: React.FC = () => {
  const [rows, setRows] = useState<MetricRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [ads, leads] = await Promise.all([listMyHousingAds(), listMyHousingLeads()]);
      const sevenDays = Date.now() - 7 * 24 * 60 * 60 * 1000;
      const data: MetricRow[] = ads.map((ad) => {
        const byAd = leads.filter((l) => l.ad_id === ad.id);
        return {
          ad: ad.title,
          contacts: byAd.length,
          contacts7: byAd.filter((l) => new Date(l.created_at || "").getTime() >= sevenDays).length,
          views: 0, // TODO tracking vistas
        };
      });
      setRows(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Métricas</h1>
        <p className="text-sm text-gray-600">Contactos por anuncio. Vistas se añadirán próximamente.</p>
      </div>
      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando...</div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Anuncio", "Contactos totales", "Contactos 7d", "Vistas"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    Sin datos aún.
                  </td>
                </tr>
              )}
              {rows.map((row) => (
                <tr key={row.ad} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.ad}</td>
                  <td className="px-4 py-3 text-gray-700">{row.contacts}</td>
                  <td className="px-4 py-3 text-gray-700">{row.contacts7}</td>
                  <td className="px-4 py-3 text-gray-500">0 (TODO)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-xs text-gray-500">TODO: tracking de vistas y gráficos.</p>
    </div>
  );
};

export default AgencyMetricsPage;
