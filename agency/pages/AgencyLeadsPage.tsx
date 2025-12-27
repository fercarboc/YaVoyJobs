import React, { useEffect, useState } from "react";
import LeadsTable from "../components/LeadsTable";
import { HousingLead } from "../types/agency";
import { listMyHousingLeads, updateLeadStatus } from "../services/agencyApi";

const AgencyLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<HousingLead[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await listMyHousingLeads(statusFilter ? { status: statusFilter } : undefined);
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [statusFilter]);

  const handleStatus = async (id: string, status: HousingLead["status"]) => {
    await updateLeadStatus(id, status);
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-600">Contactos recibidos de tus anuncios.</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
        >
          <option value="">Todos</option>
          <option value="NEW">Nuevos</option>
          <option value="READ">Leídos</option>
          <option value="CLOSED">Cerrados</option>
        </select>
      </div>

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando...</div>
      ) : (
        <LeadsTable leads={leads} onStatus={handleStatus} />
      )}
    </div>
  );
};

export default AgencyLeadsPage;
