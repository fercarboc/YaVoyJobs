import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import { AgencyAd } from "../types/agency.types";
import { listAgencyAds, updateAd, deleteAd, getPlan } from "../services/agency.service";

const AdsManager: React.FC = () => {
  const navigate = useNavigate();
  const [ads, setAds] = useState<AgencyAd[]>(() => listAgencyAds());
  const [filter, setFilter] = useState({ district: "", status: "", text: "" });
  const [toDelete, setToDelete] = useState<AgencyAd | null>(null);
  const plan = useMemo(() => getPlan(), []);

  const filtered = ads.filter((ad) => {
    const matchesDistrict = filter.district ? ad.district === filter.district : true;
    const matchesStatus = filter.status ? ad.status === filter.status : true;
    const matchesText =
      filter.text.length > 0
        ? ad.title.toLowerCase().includes(filter.text.toLowerCase()) ||
          ad.neighborhood.toLowerCase().includes(filter.text.toLowerCase())
        : true;
    return matchesDistrict && matchesStatus && matchesText;
  });

  const toggleStatus = (ad: AgencyAd) => {
    if (ad.status === "Pausado") {
      const activeCount = ads.filter((a) => a.status === "Activo").length;
      if (activeCount >= plan.maxActiveAds) {
        alert(`Has alcanzado el límite de anuncios activos de tu plan (${plan.maxActiveAds}). Ve a Configuración para ampliar.`);
        return;
      }
    }
    const updated = updateAd(ad.id, { status: ad.status === "Activo" ? "Pausado" : "Activo" });
    if (updated) {
      setAds((prev) => prev.map((a) => (a.id === ad.id ? updated : a)));
    }
  };

  const confirmDelete = () => {
    if (!toDelete) return;
    deleteAd(toDelete.id);
    setAds((prev) => prev.filter((a) => a.id !== toDelete.id));
    setToDelete(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Anuncios</h2>
          <p className="text-sm text-gray-500">Gestiona tu inventario activo y pausado.</p>
        </div>
        <Link
          to="/alquiler/agencia/anuncios/nuevo"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full"
        >
          Nuevo anuncio
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          value={filter.text}
          onChange={(e) => setFilter((f) => ({ ...f, text: e.target.value }))}
          placeholder="Buscar por título o barrio"
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        />
        <select
          value={filter.district}
          onChange={(e) => setFilter((f) => ({ ...f, district: e.target.value }))}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Distrito</option>
          {Array.from(new Set(ads.map((a) => a.district))).map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <select
          value={filter.status}
          onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Estado</option>
          <option value="Activo">Activo</option>
          <option value="Pausado">Pausado</option>
        </select>
      </div>

      <DataTable
        columns={[
          {
            key: "img",
            header: "Foto",
            render: (row: AgencyAd) => (
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                {row.images[0] ? (
                  <img src={row.images[0]} alt={row.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Sin foto</div>
                )}
              </div>
            ),
          },
          { key: "title", header: "Título" },
          {
            key: "location",
            header: "Distrito/Barrio",
            render: (row) => (
              <div>
                <div className="font-semibold">{row.district}</div>
                <div className="text-xs text-gray-500">{row.neighborhood}</div>
              </div>
            ),
          },
          {
            key: "price",
            header: "Precio",
            render: (row) => (
              <div className="font-semibold">
                {row.price}€/{row.priceUnit}
              </div>
            ),
          },
          { key: "type", header: "Tipo" },
          { key: "status", header: "Estado" },
          { key: "createdAt", header: "Publicado" },
          {
            key: "actions",
            header: "Acciones",
            render: (row) => (
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => navigate(`/alquiler/agencia/anuncios/${row.id}/editar`)}
                  className="text-blue-700 hover:underline"
                >
                  Editar
                </button>
                <button onClick={() => toggleStatus(row)} className="text-gray-700 hover:underline">
                  {row.status === "Activo" ? "Pausar" : "Activar"}
                </button>
                <button onClick={() => setToDelete(row)} className="text-red-600 hover:underline">
                  Borrar
                </button>
              </div>
            ),
          },
        ]}
        data={filtered}
        emptyText="Sin anuncios"
      />

      {toDelete && (
        <ConfirmDialog
          title="¿Eliminar definitivamente?"
          description={`Se eliminará ${toDelete.title} y no contará en tus activos.`}
          onConfirm={confirmDelete}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
};

export default AdsManager;
