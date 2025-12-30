import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../services/supabase";
import { Button, IconButton, Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
  metadata?: any | null;

  // En este componente lo rellenamos “a mano” desde voyplans
  plan?: { id: string; name: string | null } | null;
};

type VoyPlanRow = {
  id: string;
  name: string | null;
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
  // fallback compacto (evita enseñar el UUID entero)
  return inv.id?.slice(0, 8) || "-";
}

function paymentLabel(inv: InvoiceRow) {
  const m = inv.metadata || {};
  const pm = (m.payment_method as string | undefined) || (m.paymentMethod as string | undefined);
  if (pm === "card") return "Tarjeta";
  if (pm === "iban" || pm === "sepa") return "Recibo SEPA";
  // Si en metadata no viene, deja “-”
  return pm ? pm : "-";
}

function bestHash(inv: InvoiceRow) {
  return inv.hash || inv.invoice_hash || "-";
}

const AgencyInvoicesPage: React.FC = () => {
  const [rows, setRows] = useState<InvoiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<InvoiceRow | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        // 1) Usuario Voy (id = VoyUsers.id)
        const user = await getCurrentVoyUser();

        // 2) Facturas (SIN join plan:plan_id porque no tienes relationship FK en schema cache)
        const { data: invoices, error: invErr } = await supabase
          .from("VoyInvoices")
          .select(
            [
              "id",
              "issued_at",
              "created_at",
              "amount",
              "total",
              "currency",
              "status",
              "plan_id",
              "period",
              "period_start",
              "period_end",
              "invoice_series",
              "invoice_number",
              "description",
              "hash",
              "invoice_hash",
              "prev_hash",
              "previous_invoice_hash",
              "payment_ref",
              "metadata",
            ].join(",")
          )
          .eq("payer_user_id", user.id)
          .order("issued_at", { ascending: false });

        if (invErr) throw invErr;

        const invRows: InvoiceRow[] = (invoices || []).map((x: any) => ({
          ...x,
          plan: null,
        }));

        // 3) Traer nombres de planes desde la tabla real: "voyplans" (minúscula)
        const planIds = Array.from(new Set(invRows.map((x) => x.plan_id).filter(Boolean))) as string[];

        let plansMap = new Map<string, string | null>();
        if (planIds.length > 0) {
          const { data: plans, error: planErr } = await supabase
            .from("voyplans")
            .select("id,name")
            .in("id", planIds);

          if (!planErr && plans) {
            (plans as VoyPlanRow[]).forEach((p) => plansMap.set(p.id, p.name));
          }
        }

        // 4) Enriquecer facturas con plan.name
        const enriched = invRows.map((inv) => {
          const planName = inv.plan_id ? plansMap.get(inv.plan_id) ?? null : null;
          return {
            ...inv,
            plan: inv.plan_id ? { id: inv.plan_id, name: planName } : null,
          } as InvoiceRow;
        });

        setRows(enriched);
      } catch (e: any) {
        console.error("[AgencyInvoicesPage] load error:", e);
        setRows([]);
        setErrorMsg(e?.message || "Error cargando facturas");
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

      {!!errorMsg && (
        <div className="border border-red-200 bg-red-50 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}
        </div>
      )}

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
                const planName = inv.plan?.name || inv.plan_id || "-";

                const desc =
                  inv.description?.trim() ||
                  `${planName} · ${periodLabel(inv.period)} · ${formatDate(inv.period_start)} - ${formatDate(
                    inv.period_end
                  )}`;

                return (
                  <tr key={inv.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-semibold whitespace-nowrap">
                      {invoiceNumber(inv)}
                    </td>

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

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {inv.status || "PENDING"}
                      </span>
                    </td>

                    <td className="px-2 py-2">
                      <Tooltip title="Ver detalle">
                        <IconButton size="small" onClick={() => setSelected(inv)}>
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </td>

                    <td className="px-2 py-2">
                      <Tooltip title="Descargar PDF">
                        <IconButton size="small" color="primary" onClick={() => downloadInvoicePdf(inv.id)}>
                          <DownloadIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
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
              <div className="flex justify-between gap-4">
                <span className="font-semibold">Plan</span>
                <span className="text-right">{selected.plan?.name || selected.plan_id || "-"}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Periodo</span>
                <span className="text-right">{periodLabel(selected.period)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Vigencia</span>
                <span className="text-right">
                  {formatDate(selected.period_start)} - {formatDate(selected.period_end)}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Forma de pago</span>
                <span className="text-right">{paymentLabel(selected)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Referencia</span>
                <span className="text-right">{selected.payment_ref || "-"}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Importe</span>
                <span className="text-right">
                  {money((selected.total ?? selected.amount ?? 0) as number, selected.currency || "EUR")}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-semibold">Estado</span>
                <span className="text-right">{selected.status || "-"}</span>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-semibold">Hash</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs break-all">
                  {bestHash(selected)}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="small"
                    variant="text"
                    startIcon={<ContentCopyIcon fontSize="small" />}
                    onClick={() => navigator.clipboard.writeText(bestHash(selected))}
                  >
                    Copiar
                  </Button>
                </div>

                {(selected.prev_hash || selected.previous_invoice_hash) && (
                  <p className="text-[11px] text-gray-500 break-all">
                    prev_hash: {selected.prev_hash || selected.previous_invoice_hash}
                  </p>
                )}
              </div>

              <div className="pt-3 flex justify-end">
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<DownloadIcon fontSize="small" />}
                  onClick={() => downloadInvoicePdf(selected.id)}
                >
                  PDF
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
