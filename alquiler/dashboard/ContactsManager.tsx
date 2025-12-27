import React, { useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import { listContacts, updateContactStatus } from "../services/agency.service";
import { AgencyContact } from "../types/agency.types";

const ContactsManager: React.FC = () => {
  const [contacts, setContacts] = useState<AgencyContact[]>(() => listContacts());
  const [statusFilter, setStatusFilter] = useState("");

  const filtered = useMemo(
    () => contacts.filter((c) => (statusFilter ? c.status === statusFilter : true)),
    [contacts, statusFilter]
  );

  const markDone = (id: string) => {
    const updated = updateContactStatus(id, "atendido");
    if (updated) {
      setContacts((prev) => prev.map((c) => (c.id === id ? updated : c)));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Contactos</h2>
          <p className="text-sm text-gray-500">Mensajes recibidos desde tus anuncios.</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Todos</option>
          <option value="nuevo">Nuevos</option>
          <option value="atendido">Atendidos</option>
        </select>
      </div>

      <DataTable
        columns={[
          { key: "name", header: "Nombre" },
          { key: "email", header: "Email" },
          { key: "phone", header: "Teléfono" },
          { key: "adTitle", header: "Anuncio" },
          { key: "date", header: "Fecha" },
          {
            key: "status",
            header: "Estado",
            render: (row) => (
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  row.status === "nuevo" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {row.status}
              </span>
            ),
          },
          {
            key: "actions",
            header: "Acciones",
            render: (row) =>
              row.status === "nuevo" && (
                <button onClick={() => markDone(row.id)} className="text-sm text-blue-700 hover:underline">
                  Marcar atendido
                </button>
              ),
          },
        ]}
        data={filtered}
        emptyText="Sin contactos"
      />
    </div>
  );
};

export default ContactsManager;
