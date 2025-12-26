import React from "react";
import { Download, Receipt, Filter } from "lucide-react";
import { DashboardUserRole } from "../dashboardTypes";

type Invoice = {
  id: string;
  type: "bono" | "anuncio" | "plan" | "marketplace";
  month: string;
  amount: string;
  status: "Disponible" | "Descargada" | "Pendiente";
};

const invoicesMock: Invoice[] = [
  { id: "INV-2025-12-01", type: "plan", month: "Diciembre", amount: "€29.90", status: "Disponible" },
  { id: "INV-2025-12-02", type: "anuncio", month: "Diciembre", amount: "€9.90", status: "Disponible" },
  { id: "INV-2025-11-01", type: "bono", month: "Noviembre", amount: "€0.00", status: "Descargada" },
  { id: "INV-2025-10-01", type: "marketplace", month: "Octubre", amount: "€45.00", status: "Pendiente" },
];

const typeLabel: Record<Invoice["type"], string> = {
  bono: "Bono / Promo",
  anuncio: "Anuncio",
  plan: "Plan / Suscripción",
  marketplace: "Venta marketplace",
};

export const FacturacionPanel: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 justify-between flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Facturación</h1>
          <p className="text-sm text-slate-600">
            Descarga tus facturas por bonos, anuncios, planes o ventas en marketplace.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Filter size={16} className="text-gray-500" />
          <select className="border border-gray-200 rounded-xl px-3 py-2 text-sm">
            <option>Todos</option>
            <option>Plan</option>
            <option>Anuncios</option>
            <option>Bonos</option>
            <option>Marketplace</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              <th className="px-4 py-3">Mes</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Importe</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoicesMock.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-slate-900">{inv.month}</td>
                <td className="px-4 py-3 text-slate-700">{typeLabel[inv.type]}</td>
                <td className="px-4 py-3 font-bold text-slate-900">{inv.amount}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={inv.status} />
                </td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-2 text-xs font-bold text-[#0056b3]">
                    <Download size={14} /> Descargar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-slate-700 flex items-start gap-3">
        <Receipt className="text-[#0056b3]" size={18} />
        <div>
          <p className="font-bold text-slate-900">Notas de facturación</p>
          <ul className="list-disc pl-4 mt-1 space-y-1">
            <li>Las facturas de anuncios y planes se generan al inicio del periodo.</li>
            <li>Las ventas en marketplace solo facturan si vendes productos (aplica a Providers).</li>
            <li>Los bonos promocionales pueden aparecer con importe 0€ pero generan comprobante.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: Invoice["status"] }> = ({ status }) => {
  const map: Record<Invoice["status"], string> = {
    Disponible: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Descargada: "bg-gray-100 text-gray-700 border-gray-200",
    Pendiente: "bg-amber-50 text-amber-700 border-amber-100",
  };
  return (
    <span className={`px-2 py-1 rounded-full border text-[11px] font-bold ${map[status]}`}>{status}</span>
  );
};

export default FacturacionPanel;
