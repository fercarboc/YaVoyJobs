import React, { useMemo } from "react";
import DataTable from "../components/DataTable";
import { listAgencyAds, listContacts, getPlan } from "../services/agency.service";

const AgencyDashboardHome: React.FC = () => {
  const ads = useMemo(() => listAgencyAds(), []);
  const contacts = useMemo(() => listContacts(), []);
  const plan = useMemo(() => getPlan(), []);

  const metrics = [
    { label: "Anuncios activos", value: ads.filter((a) => a.status === "Activo").length },
    { label: "Contactos últimos 30 días", value: contacts.length },
    { label: "Plan actual", value: plan.name },
    { label: "Próxima renovación", value: "En 30 días" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 font-semibold uppercase">{m.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">Últimos contactos</h3>
          <a href="/alquiler/agencia/contactos" className="text-sm text-blue-700 hover:text-blue-800 font-semibold">
            Ver todos
          </a>
        </div>
        <DataTable
          columns={[
            { key: "name", header: "Nombre" },
            { key: "adTitle", header: "Anuncio" },
            { key: "email", header: "Email" },
            { key: "date", header: "Fecha" },
            { key: "status", header: "Estado" },
          ]}
          data={contacts.slice(0, 5)}
          emptyText="Sin contactos recientes"
        />
      </div>
    </div>
  );
};

export default AgencyDashboardHome;
