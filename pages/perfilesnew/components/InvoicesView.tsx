import React from "react";
import { ICONS } from "../constants";

const invoices = [
  { id: "INV-2024-001", date: "12/03/2024", amount: "125,00€", status: "Pagada" },
  { id: "INV-2024-002", date: "06/03/2024", amount: "80,00€", status: "Pendiente" },
  { id: "INV-2024-003", date: "28/02/2024", amount: "45,00€", status: "Pagada" },
];

const badgeClass = (status: string) => {
  if (status === "Pagada") return "bg-emerald-50 text-emerald-600 border border-emerald-100";
  if (status === "Pendiente") return "bg-amber-50 text-amber-600 border border-amber-100";
  return "bg-gray-50 text-gray-400 border border-gray-100";
};

const InvoicesView: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Facturas</h2>
        <p className="text-gray-500 mt-1">Historial completo de facturación y recibos.</p>
      </div>
      <button className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
        {ICONS.Download ?? ICONS.Chevron}
        Descargar todas
      </button>
    </div>

    <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/60 border-b border-gray-100">
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nº Factura</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Importe</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50/30 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.date}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{invoice.amount}</td>
                <td className="px-6 py-4 text-right">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1 ${badgeClass(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default InvoicesView;
