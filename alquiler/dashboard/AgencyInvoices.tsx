import React from "react";
import DataTable from "../components/DataTable";
import { listInvoices } from "../services/billing.mock";

const AgencyInvoices: React.FC = () => {
  const invoices = listInvoices();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Facturas</h2>
        <p className="text-sm text-gray-500">Historial de facturación de la plataforma.</p>
      </div>
      <DataTable
        columns={[
          { key: "id", header: "Nº Factura" },
          { key: "period", header: "Periodo" },
          { key: "amount", header: "Importe", render: (row) => `${row.amount}€` },
          {
            key: "status",
            header: "Estado",
            render: (row) => (
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  row.status === "Pagada" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {row.status}
              </span>
            ),
          },
          {
            key: "action",
            header: "",
            render: () => (
              <button className="text-sm text-blue-700 hover:underline" type="button">
                Ver/Descargar
              </button>
            ),
          },
        ]}
        data={invoices}
        emptyText="Sin facturas"
      />
      <p className="text-xs text-gray-500">TODO: Integrar descarga PDF real.</p>
    </div>
  );
};

export default AgencyInvoices;
