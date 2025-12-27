import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AdsTable from "../components/AdsTable";
import { HousingAd, HousingAdStatus } from "../types/agency";
import { deleteHousingAd, listMyHousingAds, setHousingAdStatus } from "../services/agencyApi";

const AgencyAdsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [ads, setAds] = useState<(HousingAd & { leadCount?: number })[]>([]);
  const [filter, setFilter] = useState<{ status?: HousingAdStatus; district?: string; ad_type?: string }>({});
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await listMyHousingAds(filter as any);
    setAds(
      data.map((ad: any) => ({
        ...ad,
        leadCount: ad.leads?.length || 0,
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [filter]);

  const handleToggle = async (ad: HousingAd) => {
    const next = ad.status === "ACTIVE" ? "PAUSED" : "ACTIVE";
    await setHousingAdStatus(ad.id, next);
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar definitivamente el anuncio?")) return;
    await deleteHousingAd(id);
    load();
  };

  const districts = Array.from(new Set(ads.map((a) => a.district).filter(Boolean)));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Anuncios</h1>
          <p className="text-sm text-gray-600">Gestiona tus anuncios de alquiler.</p>
        </div>
        <Link
          to="/agency/ads/new"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full"
        >
          Nuevo anuncio
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={filter.status || ""}
          onChange={(e) => setFilter((f) => ({ ...f, status: (e.target.value as HousingAdStatus) || undefined }))}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Estado</option>
          <option value="ACTIVE">Activo</option>
          <option value="PAUSED">Pausado</option>
          <option value="DELETED">Eliminado</option>
        </select>
        <select
          value={filter.district || ""}
          onChange={(e) => setFilter((f) => ({ ...f, district: e.target.value || undefined }))}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Distrito</option>
          {districts.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <select
          value={filter.ad_type || ""}
          onChange={(e) => setFilter((f) => ({ ...f, ad_type: e.target.value || undefined }))}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Tipo</option>
          <option value="ROOM">Habitación</option>
          <option value="FULL_APARTMENT">Piso completo</option>
        </select>
      </div>

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando...</div>
      ) : (
        <AdsTable ads={ads} onEdit={(id) => navigate(`/agency/ads/${id}/edit`)} onToggle={handleToggle} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default AgencyAdsListPage;
