import React, { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { getCurrentVoyUser } from "../services/agencyApi";

import { Button } from "@mui/material";
import { downloadInvoicePdf } from "@/services/Billing.service";



type Invoice = {
  id: string;
  created_at?: string | null;
  issued_at?: string | null;
  total?: number | null;
  currency?: string | null;
  plan_id?: string | null;
  status?: string | null;
  hash?: string | null;
  prev_hash?: string | null;
};

const AgencyInvoicesPage: React.FC = () => {
  const [rows, setRows] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Invoice | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const user = await getCurrentVoyUser();

        const { data, error } = await supabase
          .from("VoyInvoices")
          .select("*")
          .eq("payer_user_id", user.id)
          .order("issued_at", { ascending: false });

        if (error) throw error;
        setRows((data || []) as Invoice[]);
      } catch (e) {
        console.error("[AgencyInvoicesPage] load invoices error:", e);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

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
                {["Fecha", "Importe", "Descripción", "Estado", ""].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No hay facturas.
                  </td>
                </tr>
              )}

              {rows.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">
                    {(inv.issued_at || inv.created_at || "").slice(0, 10) || "-"}
                  </td>

                  <td className="px-4 py-3 text-gray-900 font-semibold">
                    {inv.total ?? 0} {inv.currency || "EUR"}
                  </td>

                  <td className="px-4 py-3 text-gray-700">{inv.plan_id || "-"}</td>

                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {inv.status || "PENDING"}
                    </span>
                  </td>

                  <td className="px-4 py-3 flex gap-2">
                    <Button size="small" variant="text" onClick={() => setSelected(inv)}>
                      Ver
                    </Button>

                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => downloadInvoicePdf(inv.id)} // ✅ inv, no invoice
                    >
                      Descargar PDF
                    </Button>
                  </td>
                </tr>
              ))}
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
                <h3 className="text-lg font-bold text-gray-900">Factura {selected.id}</h3>
                <p className="text-sm text-gray-600">
                  {(selected.issued_at || selected.created_at || "").slice(0, 10)}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Plan</span>
                <span>{selected.plan_id || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Importe</span>
                <span>
                  {selected.total ?? 0} {selected.currency || "EUR"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Estado</span>
                <span>{selected.status || "PENDING"}</span>
              </div>

              <div className="space-y-1">
                <p className="font-semibold">Hash</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs break-all">
                  {selected.hash || "-"}
                </div>

                {selected.hash && (
                  <button
                    onClick={() => navigator.clipboard.writeText(selected.hash || "")}
                    className="text-xs text-blue-700 underline"
                  >
                    Copiar
                  </button>
                )}

                {selected.prev_hash && (
                  <p className="text-[11px] text-gray-500 break-all">
                    prev_hash: {selected.prev_hash}
                  </p>
                )}
              </div>

              <div className="pt-2">
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
