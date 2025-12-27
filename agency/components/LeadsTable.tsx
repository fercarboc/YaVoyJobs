import React from "react";
import { HousingLead } from "../types/agency";

type Props = {
  leads: HousingLead[];
  onStatus: (id: string, status: HousingLead["status"]) => void;
};

const LeadsTable: React.FC<Props> = ({ leads, onStatus }) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {["Fecha", "Anuncio", "Solicitante", "Mensaje", "Estado", "Acciones"].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {leads.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                Sin leads todavía.
              </td>
            </tr>
          )}
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">{lead.created_at?.slice(0, 10) || "-"}</td>
              <td className="px-4 py-3 text-gray-900 font-semibold">{lead.ad_title || lead.ad_id}</td>
              <td className="px-4 py-3 text-gray-700">
                <div>{lead.requester_name || "—"}</div>
                <div className="text-xs text-gray-500">{lead.requester_email}</div>
              </td>
              <td className="px-4 py-3 text-gray-700">{lead.message || "Sin mensaje"}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    lead.status === "NEW"
                      ? "bg-amber-100 text-amber-700"
                      : lead.status === "READ"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2 text-sm">
                  {lead.status !== "READ" && (
                    <button onClick={() => onStatus(lead.id, "READ")} className="text-blue-700 hover:underline">
                      Marcar leído
                    </button>
                  )}
                  {lead.status !== "CLOSED" && (
                    <button onClick={() => onStatus(lead.id, "CLOSED")} className="text-emerald-700 hover:underline">
                      Cerrar
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
