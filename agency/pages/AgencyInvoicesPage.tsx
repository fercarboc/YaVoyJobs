import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../services/supabase";
import { Button } from "@mui/material";
import { downloadInvoicePdf, getCurrentVoyUser } from "@/services/Billing.service";

type InvoiceRow = {
  id: string;
  issued_at?: string | null;
  created_at?: string | null;

  amount?: number | null;
  total?: number | null;
  currency?: string | null;

  status?: string | null;

  plan_id?: string | null;
  period?: string | null;
  period_start?: string | null;
  period_end?: string | null;

  invoice_series?: string | null;
  invoice_number?: number | null;

  description?: string | null;

  hash?: string | null;
  invoice_hash?: string | null;
  prev_hash?: string | null;
  previous_invoice_hash?: string | null;

  payment_ref?: string | null;
  stripe_invoice_id?: string | null;
  metadata?: any | null;

  // ✅ OJO: Supabase lo devuelve como array en muchos casos
  plan?: { id: string; name: string | null }[] | null;
};

function formatDate(iso?: string | null) {
  if (!iso) return "-";
  const d = new Date(iso);
  return new Intl.DateTimeFormat("es-ES", { year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

function money(amount: number, currency = "EUR") {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency }).format(amount);
}

function periodLabel(p?: string | null) {
  if (!p) return "-";
  if (p === "monthly") return "Mensual";
  if (p === "semester") return "Semestral";
  if (p === "annual") return "Anual";
  return p;
}

function invoiceNumber(inv: InvoiceRow) {
  if (inv.invoice_series && typeof inv.invoice_number === "number") {
    return `${inv.invoice_series}-${String(inv.invoice_number).padStart(6, "0")}`;
  }
  return inv.id;
}

function paymentLabel(inv: InvoiceRow) {
  const m = inv.metadata || {};
  const pm = (m.payment_method as string | undefined)?.toLowerCase();
  if (pm === "card") return "Tarjeta";
  if (pm === "iban" || pm === "sepa") return "Recibo SEPA";
  return pm ? pm : "-";
}

function bestHash(inv: InvoiceRow) {
  return inv.hash || inv.invoice_hash || "-";
}

const AgencyInvoicesPage: React.FC = () => {
  const [rows, setRows] = useState<InvoiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<InvoiceRow | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const user = await getCurrentVoyUser();

        const { data, error } = await supabase
          .from("VoyInvoices")
          .select("*, plan:plan_id(id, name)")
          .eq("payer_user_id", user.id)
          .order("issued_at", { ascending: false });

        if (error) throw error;

        // ✅ ya encaja porque plan es array
        setRows((data || []) as InvoiceRow[]);
      } catch (e) {
        console.error(e);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const hasInvoices = useMemo(() => rows.length > 0, [rows]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Facturas</h1>
        <p className="text-sm text-gray-600">Pagos de la plataforma.</p>
      </div>

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando...</div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Factura", "Fecha", "Importe", "Descripción", "Estado", "", ""].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {!hasInvoices && (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                    No hay facturas.
                  </td>
                </tr>
              )}

              {rows.map((inv) => {
                const date = inv.issued_at || inv.created_at;
                const amount = (inv.total ?? inv.amount ?? 0) as number;
                const currency = inv.currency || "EUR";

                // ✅ planName ahora sale bien
                const planName = inv.plan?.[0]?.name || "-";

                const desc =
                  inv.description?.trim() ||
                  `${planName} · ${periodLabel(inv.period)} · ${formatDate(inv.period_start)} - ${formatDate(inv.period_end)}`;

                return (
                  <tr key={inv.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{invoiceNumber(inv)}</td>

                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{formatDate(date)}</td>

                    <td className="px-4 py-3 text-gray-900 font-semibold whitespace-nowrap">
                      {money(amount, currency)}
                    </td>

                    <td className="px-4 py-3 text-gray-700">
                      <div className="flex flex-col">
                        <span className="font-semibold">{planName}</span>
                        <span className="text-xs text-gray-500 truncate max-w-[520px]">{desc}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {inv.status || "PENDING"}
                      </span>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      <button className="text-sm text-blue-700 hover:underline" onClick={() => setSelected(inv)}>
                        Ver
                      </button>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      <Button variant="contained" onClick={() => downloadInvoicePdf(inv.id)}>
                        Descargar PDF
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Factura {invoiceNumber(selected)}</h3>
                <p className="text-sm text-gray-600">{formatDate(selected.issued_at || selected.created_at || null)}</p>
              </div>

              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
                ×
              </button>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Plan</span>
                <span>{selected.plan?.[0]?.name || selected.plan_id || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Periodo</span>
                <span>{periodLabel(selected.period)}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Vigencia</span>
                <span>
                  {formatDate(selected.period_start)} - {formatDate(selected.period_end)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Forma de pago</span>
                <span>{paymentLabel(selected)}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Importe</span>
                <span>{money((selected.total ?? selected.amount ?? 0) as number, selected.currency || "EUR")}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Estado</span>
                <span>{selected.status || "-"}</span>
              </div>

              <div className="space-y-1 pt-2">
                <p className="font-semibold">Hash</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs break-all">
                  {bestHash(selected)}
                </div>

                <button
                  onClick={() => navigator.clipboard.writeText(bestHash(selected))}
                  className="text-xs text-blue-700 underline"
                >
                  Copiar
                </button>

                {(selected.prev_hash || selected.previous_invoice_hash) && (
                  <p className="text-[11px] text-gray-500 break-all">
                    prev_hash: {selected.prev_hash || selected.previous_invoice_hash}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Button variant="contained" onClick={() => downloadInvoicePdf(selected.id)}>
                  Descargar PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgencyInvoicesPage;
