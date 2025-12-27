import React from "react";
import { HousingAd } from "../types/agency";

type Props = {
  ads: (HousingAd & { leadCount?: number })[];
  onEdit: (id: string) => void;
  onToggle: (ad: HousingAd) => void;
  onDelete: (id: string) => void;
};

const AdsTable: React.FC<Props> = ({ ads, onEdit, onToggle, onDelete }) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {["Título", "Ubicación", "Precio", "Tipo", "Estado", "Contactos", "Acciones"].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {ads.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                No tienes anuncios aún.
              </td>
            </tr>
          )}
          {ads.map((ad) => (
            <tr key={ad.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">{ad.title}</td>
              <td className="px-4 py-3 text-gray-700">
                {ad.district || "-"} {ad.neighborhood ? ` / ${ad.neighborhood}` : ""}
              </td>
              <td className="px-4 py-3 text-gray-900 font-bold">
                {ad.price}€/{ad.price_unit}
              </td>
              <td className="px-4 py-3 text-gray-700">{ad.ad_type}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    ad.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-700"
                      : ad.status === "PAUSED"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {ad.status}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-700">{ad.leadCount ?? 0}</td>
              <td className="px-4 py-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <button onClick={() => onEdit(ad.id)} className="text-blue-700 hover:underline">
                    Editar
                  </button>
                  <button onClick={() => onToggle(ad)} className="text-gray-700 hover:underline">
                    {ad.status === "ACTIVE" ? "Pausar" : "Activar"}
                  </button>
                  <button onClick={() => onDelete(ad.id)} className="text-red-600 hover:underline">
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdsTable;
