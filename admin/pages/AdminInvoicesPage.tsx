import React, { useEffect, useMemo, useState } from "react";
import { AdminInvoice, listAdminInvoices } from "@/services/adminApi";

const quickPeriods = [
  { label: "Este mes", value: "this_month" },
  { label: "Mes anterior", value: "last_month" },
  { label: "Últimos 30 días", value: "last_30" },
] as const;

const statusOptions = ["ALL", "PENDING", "PAID", "CANCELLED", "FAILED"];
const pageSize = 20;

const formatDate = (value?: string) => (value ? new Date(value).toLocaleDateString() : "-");

const AdminInvoicesPage: React.FC = () => {
  const [data, setData] = useState<AdminInvoice[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [period, setPeriod] = useState<"" | "this_month" | "last_month" | "last_30">("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [status, setStatus] = useState("");
  const [clientQ, setClientQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadInvoices = async () => {
    setLoading(true);
    setError(null);
    const params = {
      period: period || undefined,
      dateFrom: dateFrom ? new Date(dateFrom).toISOString() : undefined,
      dateTo: dateTo ? new Date(dateTo).toISOString() : undefined,
      status: status || undefined,
      clientQ: clientQ || undefined,
      page,
      pageSize,
    };
    const result = await listAdminInvoices(params);
    if (result.error) {
      const message = result.error.message.includes("RLS")
        ? "Sin permisos por RLS para consultar VoyInvoices"
        : result.error.message || "No se pudieron cargar las facturas";
      setError(message);
      setData([]);
      setCount(0);
    } else {
      setData(result.data);
      setCount(result.count);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadInvoices();
  }, [period, dateFrom, dateTo, status, clientQ, page]);

  const startIndex = useMemo(() => (count === 0 ? 0 : (page - 1) * pageSize + 1), [count, page]);
  const endIndex = useMemo(() => Math.min(count, page * pageSize), [count, page]);
  const totalPages = Math.max(1, Math.ceil(count / pageSize));

  const handlePeriodSelect = (value: "this_month" | "last_month" | "last_30") => {
    setPeriod((prev) => (prev === value ? "" : value));
    setDateFrom("");
    setDateTo("");
    setPage(1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Facturas</h1>
        <p className="text-sm text-gray-600">Gestión avanzada de VoyInvoices.</p>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-2 text-xs">
          {quickPeriods.map((p) => (
            <button
              key={p.value}
              onClick={() => handlePeriodSelect(p.value)}
              className={`px-3 py-1 rounded-full border ${period === p.value ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600"}`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center text-xs">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500">Desde</span>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 border rounded-xl text-xs"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500">Hasta</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 border rounded-xl text-xs"
            />
          </div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2 border rounded-xl text-xs"
          >
            {statusOptions.map((state) => (
              <option key={state} value={state === "ALL" ? "" : state}>
                {state === "ALL" ? "Todos los estados" : state}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <input
              value={clientQ}
              onChange={(e) => {
                setClientQ(e.target.value);
                setPage(1);
              }}
              placeholder="Buscar cliente"
              className="px-3 py-2 border rounded-xl text-xs"
            />
            <button
              onClick={() => {
                setClientQ("");
                setPage(1);
              }}
              className="text-xs text-blue-600 hover:underline"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <p>
          Mostrando {startIndex}-{endIndex} de {count}
        </p>
        <div className="flex gap-2">
          <button
            disabled={page <= 1 || loading}
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 rounded-xl border text-xs disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            disabled={page >= totalPages || loading}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 rounded-xl border text-xs disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>
      )}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando facturas...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Fecha</th>
                <th className="text-left px-4 py-3">Nº Factura</th>
                <th className="text-left px-4 py-3">Cliente</th>
                <th className="text-left px-4 py-3">Importe</th>
                <th className="text-left px-4 py-3">Estado</th>
                <th className="text-left px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((invoice) => {
                const clientName =
                  invoice.payer?.full_name || invoice.payer?.email || invoice.issuer?.full_name || invoice.issuer?.email || "-";
                const amount = (invoice.total ?? invoice.amount ?? 0) as number;

                const currency = invoice.currency || "EUR";
                return (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">{formatDate(invoice.issued_at || invoice.created_at)}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold" title={invoice.id}>
                      {invoice.invoice_code || invoice.invoice_number || invoice.id}

                    </td>
                    <td className="px-4 py-3 text-gray-700">{clientName}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {amount.toFixed(2)} {currency}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{invoice.status || "-"}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/#/admin/invoices/${invoice.id}`}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        Ver
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminInvoicesPage;
