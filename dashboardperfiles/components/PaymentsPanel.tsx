import React, { useMemo, useState } from "react";
import { DashboardUserRole } from "../dashboardTypes";
import { CreditCard, Wallet, TrendingUp, Receipt, AlertCircle, ArrowDownToLine, Shield, Banknote, Download, Clock3 } from "lucide-react";

type Movement = {
  id: string;
  date: string;
  concept: string;
  type: "cargo" | "abono";
  amount: number;
  state: "completado" | "pendiente" | "retenido";
};

const YA_VOY_BLUE = "#0056b3";

export const PaymentsPanel: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<"mov" | "escrow" | "payouts" | "metodos" | "facturas">("mov");
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);

  const isHelper = role === DashboardUserRole.TRABAJADOR;
  const isProvider = role === DashboardUserRole.PROVEEDOR;
  const isBuyer = role === DashboardUserRole.EMPRESA || role === DashboardUserRole.PARTICULAR;

  const cards = useMemo(() => {
    if (isHelper) {
      return [
        { label: "Saldo disponible", value: "€320", icon: <Wallet size={18} /> },
        { label: "Retenido", value: "€120", icon: <Shield size={18} /> },
        { label: "Ganado este mes", value: "€540", icon: <TrendingUp size={18} /> },
        { label: "Próximo pago", value: "02 Ene", icon: <Clock3 size={18} /> },
      ];
    }
    if (isProvider) {
      return [
        { label: "Ventas mes", value: "€4.8k", icon: <TrendingUp size={18} /> },
        { label: "Saldo a liquidar", value: "€980", icon: <Wallet size={18} /> },
        { label: "Comisiones", value: "€240", icon: <Banknote size={18} /> },
        { label: "Devoluciones", value: "€80", icon: <AlertCircle size={18} /> },
      ];
    }
    return [
      { label: "Gastado este mes", value: "€1.2k", icon: <CreditCard size={18} /> },
      { label: "Pagos retenidos", value: "€210", icon: <Shield size={18} /> },
      { label: "Reembolsos", value: "€90", icon: <ArrowDownToLine size={18} /> },
      { label: "Facturas", value: "12 disponibles", icon: <Receipt size={18} /> },
    ];
  }, [isBuyer, isHelper, isProvider]);

  const movements: Movement[] = [
    { id: "mv1", date: "27/12", concept: "Trabajo #123 - Pintura", type: "abono", amount: 120, state: "retenido" },
    { id: "mv2", date: "26/12", concept: "Pedido #456 - Marketplace", type: "cargo", amount: -45, state: "completado" },
    { id: "mv3", date: "25/12", concept: "Propina", type: "abono", amount: 8, state: "completado" },
    { id: "mv4", date: "24/12", concept: "Trabajo #789 - Reparación", type: "abono", amount: 90, state: "pendiente" },
  ];

  const selected = movements.find((m) => m.id === selectedMovement) ?? movements[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">{isHelper || isProvider ? "Cobros" : "Pagos"}</h1>
          <p className="text-sm text-slate-600">Resumen de movimientos y retenciones.</p>
        </div>
        {(isHelper || isProvider) && (
          <button
            className="px-4 py-2 rounded-xl text-sm font-bold text-white"
            style={{ background: YA_VOY_BLUE }}
          >
            Solicitar retiro (mock)
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] flex items-center justify-center">{card.icon}</div>
            <div>
              <p className="text-xs font-semibold text-slate-600">{card.label}</p>
              <p className="text-lg font-extrabold text-slate-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex flex-wrap border-b border-gray-200 px-3">
          {[
            { key: "mov", label: "Movimientos" },
            { key: "escrow", label: "Retenciones / Depósitos" },
            ...(isHelper || isProvider ? [{ key: "payouts", label: "Payouts" }] : []),
            ...(isBuyer ? [{ key: "metodos", label: "Métodos de pago" }] : []),
            ...(isBuyer || isHelper || isProvider ? [{ key: "facturas", label: "Facturas" }] : []),
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3 py-3 text-sm font-semibold border-b-2 transition ${
                activeTab === tab.key ? "border-[#0056b3] text-[#0056b3]" : "border-transparent text-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === "mov" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <table className="w-full text-sm">
                  <thead className="text-left text-slate-500">
                    <tr>
                      <th className="py-2">Fecha</th>
                      <th className="py-2">Concepto</th>
                      <th className="py-2">Tipo</th>
                      <th className="py-2">Importe</th>
                      <th className="py-2">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {movements.map((m) => (
                      <tr
                        key={m.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedMovement(m.id)}
                      >
                        <td className="py-2">{m.date}</td>
                        <td className="py-2">{m.concept}</td>
                        <td className="py-2">{m.type === "abono" ? "Abono" : "Cargo"}</td>
                        <td className="py-2 font-bold">{m.amount > 0 ? `+€${m.amount}` : `€${m.amount}`}</td>
                        <td className="py-2">
                          <BadgeState state={m.state} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/80">
                <p className="text-sm font-bold text-slate-900 mb-2">Detalle</p>
                <p className="text-sm text-slate-700 mb-2">{selected.concept}</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>Base: €{Math.abs(selected.amount * 0.8).toFixed(2)}</p>
                  <p>Comisión plataforma: €{Math.abs(selected.amount * 0.12).toFixed(2)}</p>
                  <p>Seguro: €{Math.abs(selected.amount * 0.03).toFixed(2)}</p>
                  <p>IVA: €{Math.abs(selected.amount * 0.05).toFixed(2)}</p>
                </div>
                <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-bold border border-gray-200 hover:bg-white">
                  <Download size={16} /> Descargar recibo (mock)
                </button>
              </div>
            </div>
          )}

          {activeTab === "escrow" && (
            <div className="space-y-3">
              {[
                { id: "esc-1", title: "Trabajo #123 - Pintura", amount: "€120", status: "Retenido hasta confirmación" },
                { id: "esc-2", title: "Pedido #456 - Marketplace", amount: "€45", status: "Retenido (envío en curso)" },
              ].map((e) => (
                <div key={e.id} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{e.title}</p>
                    <p className="text-xs text-slate-500">{e.status}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{e.amount}</span>
                    {isBuyer && (
                      <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: YA_VOY_BLUE }}>
                        Confirmar
                      </button>
                    )}
                    {(isHelper || isProvider) && (
                      <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#0056b3] border border-blue-200">
                        Marcar finalizado
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "payouts" && (isHelper || isProvider) && (
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Estado Stripe Connect</p>
                  <p className="text-xs text-slate-500">Verificado</p>
                </div>
                <BadgeState state="completado" />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 space-y-2">
                <p className="text-sm font-bold text-slate-900">Solicitar retiro</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="Importe (€)" />
                  <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="IBAN / Cuenta" />
                </div>
                <button className="w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: YA_VOY_BLUE }}>
                  Solicitar (mock)
                </button>
              </div>
            </div>
          )}

          {activeTab === "metodos" && isBuyer && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Visa •••• 4242", "Mastercard •••• 8855"].map((card) => (
                <div key={card} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between text-sm">
                  <span>{card}</span>
                  <button className="text-xs font-bold text-red-500">Eliminar</button>
                </div>
              ))}
              <button className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-sm font-bold text-slate-700 hover:border-blue-200">
                + Añadir tarjeta
              </button>
            </div>
          )}

          {activeTab === "facturas" && (
            <div className="space-y-2">
              {[
                { mes: "Diciembre", num: "INV-2025-12", estado: "Disponible" },
                { mes: "Noviembre", num: "INV-2025-11", estado: "Disponible" },
                { mes: "Octubre", num: "INV-2025-10", estado: "Descargada" },
              ].map((f) => (
                <div key={f.num} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-bold text-slate-900">{f.mes}</p>
                    <p className="text-xs text-slate-500">{f.num}</p>
                  </div>
                  <button className="text-xs font-bold text-[#0056b3] flex items-center gap-1">
                    <Download size={14} /> Descargar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BadgeState: React.FC<{ state: Movement["state"] | "completado" }> = ({ state }) => {
  const map: Record<string, { label: string; className: string }> = {
    completado: { label: "Completado", className: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    pendiente: { label: "Pendiente", className: "bg-amber-50 text-amber-700 border-amber-100" },
    retenido: { label: "Retenido", className: "bg-blue-50 text-blue-700 border-blue-100" },
  };
  const item = map[state] ?? map["pendiente"];
  return <span className={`px-2 py-1 rounded-full border text-[11px] font-bold ${item.className}`}>{item.label}</span>;
};

export default PaymentsPanel;
