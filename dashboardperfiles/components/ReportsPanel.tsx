import React, { useMemo, useState } from "react";
import { DashboardUserRole } from "../dashboardTypes";
import { BarChart3, FileDown, FileSpreadsheet, MapPin, Calendar, Layers, CheckCircle2, XCircle, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react";

type DateRangePreset = "7d" | "30d" | "90d" | "custom";
type StatusFilter = "Todos" | "Completado" | "En Progreso" | "Cancelado" | "Retenido";
type Category = "Limpieza" | "Mudanza" | "Fontanería" | "Jardín" | "Reparto";

type KPI = { title: string; value: string; delta: string; positive?: boolean };
type ChartPoint = { label: string; value: number };
type TableRow = Record<string, string | number>;
type TableColumn = { key: string; label: string };

const YA_VOY_BLUE = "#0056b3";
const barrios = ["Usera", "Arganzuela", "Carabanchel", "Chamberí", "Tetuán", "Salamanca"];
const categories: Category[] = ["Limpieza", "Mudanza", "Fontanería", "Jardín", "Reparto"];

export const ReportsPanel: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  const [range, setRange] = useState<DateRangePreset>("30d");
  const [status, setStatus] = useState<StatusFilter>("Todos");
  const [district, setDistrict] = useState<string>("Todos");
  const [category, setCategory] = useState<Category | "Todas">("Todas");
  const [activeTab, setActiveTab] = useState<string>("Resumen");

  const tabs = useMemo(() => getTabsByRole(role), [role]);

  const { kpis, charts, table, insights } = useMemo(() => {
    const filters = { range, status, district, category };
    return buildRoleData(role, filters, activeTab);
  }, [role, range, status, district, category, activeTab]);

  const onExport = (type: "pdf" | "csv") => {
    // TODO: integrar con generador real (jsPDF o backend)
    console.log("export", { type, role, range, status, district, category, tab: activeTab, rows: table.rows.length });
    alert(`Export ${type.toUpperCase()} (mock)`);
  };

  const subtitle = getSubtitle(role);

  const handleApply = () => {
    // Con datos mock solo refrescamos useMemo
  };

  const isGuest = role === DashboardUserRole.INVITADO;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Informes</h1>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onExport("pdf")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50"
          >
            <FileDown size={16} /> Exportar PDF
          </button>
          <button
            onClick={() => onExport("csv")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50"
          >
            <FileSpreadsheet size={16} /> Exportar CSV
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          {(["7d", "30d", "90d", "custom"] as DateRangePreset[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 rounded-full border ${
                range === r ? "bg-blue-50 text-[#0056b3] border-blue-100" : "border-gray-200 text-slate-700"
              }`}
            >
              {r === "custom" ? "Personalizado" : r.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <Select label="Distrito/Barrio" value={district} onChange={setDistrict} options={["Todos", ...barrios]} icon={<MapPin size={14} />} />
          <Select label="Estado" value={status} onChange={(v) => setStatus(v as StatusFilter)} options={["Todos", "Completado", "En Progreso", "Cancelado", "Retenido"]} icon={<CheckCircle2 size={14} />} />
          <Select label="Categoría" value={category} onChange={(v) => setCategory(v as any)} options={["Todas", ...categories]} icon={<Layers size={14} />} />
          <div className="flex items-end">
            <button
              onClick={handleApply}
              className="w-full bg-[#0056b3] text-white text-sm font-bold rounded-xl px-3 py-2.5 hover:bg-blue-800 transition"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex flex-wrap border-b border-gray-200 px-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-3 text-sm font-semibold border-b-2 transition ${
                activeTab === tab ? "border-[#0056b3] text-[#0056b3]" : "border-transparent text-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-4">
          {isGuest && activeTab === "Pedidos invitado" ? (
            <GuestView />
          ) : isGuest ? (
            <GuestLocked />
          ) : (
            <>
              {/* KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                {kpis.map((kpi) => (
                  <KpiCard key={kpi.title} kpi={kpi} />
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {charts.map((chart) => (
                  <ChartCard key={chart.title} title={chart.title} type={chart.type} data={chart.data} />
                ))}
              </div>

              {/* Insights */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2">
                <p className="text-sm font-bold text-slate-900">Insights</p>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {insights.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>

              {/* Table */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                <Table table={table} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/* Helpers */

const getSubtitle = (role: DashboardUserRole) => {
  switch (role) {
    case DashboardUserRole.TRABAJADOR:
      return "Rendimiento y cobros";
    case DashboardUserRole.PARTICULAR:
      return "Gasto y calidad";
    case DashboardUserRole.EMPRESA:
      return "Operativa y control";
    case DashboardUserRole.PROVEEDOR:
      return "Ventas y pedidos";
    default:
      return "Sin informes (solo pedidos invitado)";
  }
};

const getTabsByRole = (role: DashboardUserRole): string[] => {
  switch (role) {
    case DashboardUserRole.TRABAJADOR:
      return ["Resumen", "Finanzas", "Operativa", "Calidad"];
    case DashboardUserRole.PARTICULAR:
      return ["Resumen", "Finanzas", "Calidad"];
    case DashboardUserRole.EMPRESA:
      return ["Resumen", "Finanzas", "Operativa", "Calidad"];
    case DashboardUserRole.PROVEEDOR:
      return ["Resumen", "Finanzas", "Ventas", "Logística"];
    case DashboardUserRole.INVITADO:
    default:
      return ["Resumen", "Pedidos invitado"];
  }
};

/* Mock builders */
const buildRoleData = (
  role: DashboardUserRole,
  filters: { range: DateRangePreset; status: StatusFilter; district: string; category: Category | "Todas" },
  tab: string
) => {
  switch (role) {
    case DashboardUserRole.TRABAJADOR:
      return buildHelperData(filters, tab);
    case DashboardUserRole.PARTICULAR:
      return buildClientData(filters, tab);
    case DashboardUserRole.EMPRESA:
      return buildCompanyData(filters, tab);
    case DashboardUserRole.PROVEEDOR:
      return buildProviderData(filters, tab);
    default:
      return buildGuestData();
  }
};

const buildHelperData = (filters: any, tab: string) => {
  const kpis: KPI[] = [
    { title: "Ganancias netas", value: "€820", delta: "+12%", positive: true },
    { title: "Pendiente de cobro", value: "€180", delta: "-5%", positive: true },
    { title: "Trabajos completados", value: "45", delta: "+3", positive: true },
    { title: "Horas trabajadas", value: "122h", delta: "+8h", positive: true },
    { title: "Valoración media", value: "4.7", delta: "+0.1", positive: true },
    { title: "Incentivos ganados", value: "€40", delta: "+€10", positive: true },
  ];
  const charts = [
    { title: "Evolución ingresos", type: "line" as const, data: mockLine([120, 140, 160, 150, 190, 210]) },
    { title: "Ingresos por barrio", type: "bar" as const, data: mockBar(["Usera", "Chamberí", "Carabanchel"], [320, 210, 150]) },
    { title: "Ratio éxito", type: "bar" as const, data: mockBar(["Completado", "En curso", "Retenido"], [75, 15, 10]) },
  ];
  const table = {
    columns: [
      { key: "fecha", label: "Fecha" },
      { key: "trabajo", label: "Trabajo" },
      { key: "cliente", label: "Cliente" },
      { key: "barrio", label: "Barrio" },
      { key: "bruto", label: "Bruto" },
      { key: "comision", label: "Comisión" },
      { key: "seguro", label: "Seguro" },
      { key: "neto", label: "Neto" },
      { key: "estado", label: "Estado" },
      { key: "accion", label: "Acción" },
    ] as TableColumn[],
    rows: [
      { fecha: "27/12", trabajo: "Pintura piso", cliente: "Ana M.", barrio: "Usera", bruto: "€140", comision: "€12", seguro: "€2", neto: "€126", estado: "Completado", accion: "Ver" },
      { fecha: "26/12", trabajo: "Mudanza", cliente: "Carlos R.", barrio: "Arganzuela", bruto: "€200", comision: "€18", seguro: "€3", neto: "€179", estado: "En Progreso", accion: "Ver" },
      { fecha: "25/12", trabajo: "Fontanería", cliente: "Lucía S.", barrio: "Carabanchel", bruto: "€90", comision: "€8", seguro: "€1", neto: "€81", estado: "Retenido", accion: "Ver" },
    ] as TableRow[],
  };
  const insights = [
    "Usera es el barrio con mayor ingreso (€320).",
    "Tu tasa de completados es 75%.",
    "Incentivos aportaron €40 este mes.",
  ];
  return { kpis, charts, table, insights };
};

const buildClientData = (filters: any, tab: string) => {
  const kpis: KPI[] = [
    { title: "Gasto total", value: "€1,240", delta: "+5%", positive: false },
    { title: "Trabajos contratados", value: "22", delta: "+2", positive: true },
    { title: "Ahorro por bonos/plan", value: "€45", delta: "+€10", positive: true },
    { title: "Incidencias abiertas", value: "1", delta: "-1", positive: true },
    { title: "Tiempo medio de cobertura", value: "2.1h", delta: "-0.3h", positive: true },
    { title: "Valoración a trabajadores", value: "4.5", delta: "+0.2", positive: true },
  ];
  const charts = [
    { title: "Evolución de gasto", type: "line" as const, data: mockLine([80, 120, 140, 110, 160, 200]) },
    { title: "Gasto por categoría", type: "bar" as const, data: mockBar(["Limpieza", "Mudanza", "Jardín"], [320, 210, 90]) },
    { title: "Incidencias", type: "bar" as const, data: mockBar(["Abiertas", "Cerradas"], [1, 5]) },
  ];
  const table = {
    columns: [
      { key: "fecha", label: "Fecha" },
      { key: "trabajo", label: "Trabajo" },
      { key: "worker", label: "Trabajador" },
      { key: "barrio", label: "Barrio" },
      { key: "total", label: "Total" },
      { key: "estado", label: "Estado" },
      { key: "incidencia", label: "Incidencia" },
      { key: "factura", label: "Factura" },
    ] as TableColumn[],
    rows: [
      { fecha: "27/12", trabajo: "Limpieza 3h", worker: "María P.", barrio: "Usera", total: "€45", estado: "Completado", incidencia: "Ninguna", factura: "INV-2025-12" },
      { fecha: "25/12", trabajo: "Pintura", worker: "J. López", barrio: "Tetuán", total: "€180", estado: "En Progreso", incidencia: "-", factura: "Pendiente" },
      { fecha: "22/12", trabajo: "Mudanza", worker: "Luis A.", barrio: "Carabanchel", total: "€220", estado: "Completado", incidencia: "Cerrada", factura: "INV-2025-11" },
    ] as TableRow[],
  };
  const insights = [
    "Limpieza concentra el mayor gasto este mes.",
    "Solo 1 incidencia abierta, buen nivel de servicio.",
    "Ahorro por plan/bono: €45 (mock).",
  ];
  return { kpis, charts, table, insights };
};

const buildCompanyData = (filters: any, tab: string) => {
  const kpis: KPI[] = [
    { title: "Gasto total", value: "€3,980", delta: "+8%", positive: false },
    { title: "Coste medio por trabajo", value: "€95", delta: "-3%", positive: true },
    { title: "Tiempo cobertura", value: "1.8h", delta: "-0.4h", positive: true },
    { title: "Incidencias", value: "3", delta: "+1", positive: false },
    { title: "Facturas disponibles", value: "18", delta: "+2", positive: true },
  ];
  const charts = [
    { title: "Gasto por barrio", type: "bar" as const, data: mockBar(["Usera", "Chamberí", "Salamanca"], [820, 660, 540]) },
    { title: "Evolución mensual", type: "line" as const, data: mockLine([600, 720, 680, 740, 820, 900]) },
    { title: "Incidencias", type: "bar" as const, data: mockBar(["Abiertas", "Cerradas"], [2, 5]) },
  ];
  const table = {
    columns: [
      { key: "fecha", label: "Fecha" },
      { key: "trabajo", label: "Trabajo" },
      { key: "responsable", label: "Responsable" },
      { key: "barrio", label: "Barrio" },
      { key: "total", label: "Total" },
      { key: "estado", label: "Estado" },
      { key: "factura", label: "Factura" },
    ] as TableColumn[],
    rows: [
      { fecha: "27/12", trabajo: "Instalación wifi", responsable: "IT", barrio: "Usera", total: "€130", estado: "Completado", factura: "INV-2025-12-03" },
      { fecha: "24/12", trabajo: "Mantenimiento", responsable: "Ops", barrio: "Chamberí", total: "€95", estado: "En Progreso", factura: "Pendiente" },
      { fecha: "20/12", trabajo: "Pintura fachada", responsable: "Facility", barrio: "Salamanca", total: "€650", estado: "Completado", factura: "INV-2025-12-01" },
    ] as TableRow[],
  };
  const insights = [
    "Usera y Chamberí concentran el mayor gasto.",
    "Coste medio por trabajo bajó 3%.",
    "18 facturas disponibles este periodo.",
  ];
  return { kpis, charts, table, insights };
};

const buildProviderData = (filters: any, tab: string) => {
  const kpis: KPI[] = [
    { title: "Ventas brutas", value: "€6,400", delta: "+9%", positive: true },
    { title: "Ventas netas", value: "€5,720", delta: "+7%", positive: true },
    { title: "Pedidos completados", value: "220", delta: "+12", positive: true },
    { title: "Pedidos en curso", value: "18", delta: "+2", positive: false },
    { title: "Devoluciones", value: "3.2%", delta: "-0.4%", positive: true },
    { title: "Ticket medio", value: "€26", delta: "+€1", positive: true },
  ];
  const charts = [
    { title: "Ventas por día", type: "line" as const, data: mockLine([800, 900, 760, 820, 950, 1100]) },
    { title: "Top productos", type: "bar" as const, data: mockBar(["Aceite 5L", "Pack limpieza", "Café"], [320, 210, 140]) },
    { title: "Logística", type: "bar" as const, data: mockBar(["Envío", "Recogida"], [180, 40]) },
  ];
  const table = {
    columns: [
      { key: "fecha", label: "Fecha" },
      { key: "pedido", label: "Pedido" },
      { key: "cliente", label: "Cliente" },
      { key: "total", label: "Total" },
      { key: "estado", label: "Estado" },
      { key: "envio", label: "Envío/Recogida" },
      { key: "devolucion", label: "Devolución" },
    ] as TableColumn[],
    rows: [
      { fecha: "27/12", pedido: "#A123", cliente: "Restaurante Sol", total: "€180", estado: "Completado", envio: "Envío", devolucion: "-" },
      { fecha: "26/12", pedido: "#A122", cliente: "Café Norte", total: "€95", estado: "En Curso", envio: "Envío", devolucion: "-" },
      { fecha: "25/12", pedido: "#A121", cliente: "Bar Sur", total: "€75", estado: "Completado", envio: "Recogida", devolucion: "No" },
    ] as TableRow[],
  };
  const insights = [
    "Ventas netas crecieron 7% esta semana.",
    "Aceite 5L es el producto con mayor revenue.",
    "Solo 3.2% de devoluciones (mock).",
  ];
  return { kpis, charts, table, insights };
};

const buildGuestData = () => {
  return {
    kpis: [],
    charts: [],
    table: { columns: [], rows: [] },
    insights: [],
  };
};

/* UI subcomponents */
const Select: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  icon?: React.ReactNode;
}> = ({ label, value, onChange, options, icon }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
      {icon}
      {label}
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </label>
);

const KpiCard: React.FC<{ kpi: KPI }> = ({ kpi }) => {
  const positive = kpi.positive ?? true;
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <p className="text-xs font-semibold text-slate-600">{kpi.title}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xl font-extrabold text-slate-900">{kpi.value}</p>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            positive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {kpi.delta}
        </span>
      </div>
    </div>
  );
};

const ChartCard: React.FC<{ title: string; type: "line" | "bar"; data: ChartPoint[] }> = ({ title, type, data }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
      <BarChart3 size={16} className="text-[#0056b3]" />
      {title}
    </div>
    <MockChart type={type} data={data} />
  </div>
);

const MockChart: React.FC<{ type: "line" | "bar"; data: ChartPoint[] }> = ({ type, data }) => {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-2 h-32">
        {data.map((d) => (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full ${type === "bar" ? "rounded-md" : "rounded-full"}`}
              style={{
                height: `${(d.value / max) * 100}%`,
                background: type === "bar" ? "linear-gradient(180deg, #0056b3, #4f8ee6)" : "linear-gradient(180deg, #8fbaf5, #0056b3)",
              }}
            ></div>
            <span className="text-[11px] text-slate-600 text-center truncate w-full">{d.label}</span>
          </div>
        ))}
      </div>
      {type === "line" && (
        <div className="text-[11px] text-slate-500 text-right">Mock chart – integrar Recharts si está disponible.</div>
      )}
    </div>
  );
};

const Table: React.FC<{ table: { columns: TableColumn[]; rows: TableRow[] } }> = ({ table }) => {
  const [query, setQuery] = useState("");
  const filteredRows = table.rows.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold text-slate-900">Detalles</p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2 text-sm"
          placeholder="Buscar..."
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              {table.columns.map((col) => (
                <th key={col.key} className="py-2 pr-4">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {table.columns.map((col) => (
                  <td key={col.key} className="py-2 pr-4 text-slate-800 whitespace-nowrap">
                    {row[col.key] as any}
                  </td>
                ))}
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={table.columns.length} className="py-3 text-center text-sm text-slate-500">
                  Sin resultados con los filtros actuales.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GuestLocked: React.FC = () => (
  <div className="text-center py-12 space-y-2">
    <p className="text-lg font-bold text-slate-900">Inicia sesión para ver informes</p>
    <p className="text-sm text-slate-600">Solo los pedidos invitado están disponibles sin cuenta.</p>
  </div>
);

const GuestView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const rows = [
    { fecha: "26/12", pedido: "#G-123", email: "guest@mail.com", total: "€45", estado: "Completado", recibo: "Descargar" },
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="text-sm text-slate-700 flex flex-col gap-1">
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-200 rounded-xl px-3 py-2 text-sm" />
        </label>
        <label className="text-sm text-slate-700 flex flex-col gap-1">
          Código pedido
          <input value={code} onChange={(e) => setCode(e.target.value)} className="border border-gray-200 rounded-xl px-3 py-2 text-sm" />
        </label>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <Table
          table={{
            columns: [
              { key: "fecha", label: "Fecha" },
              { key: "pedido", label: "Pedido" },
              { key: "email", label: "Email" },
              { key: "total", label: "Total" },
              { key: "estado", label: "Estado" },
              { key: "recibo", label: "Recibo" },
            ],
            rows,
          }}
        />
      </div>
    </div>
  );
};

/* mock chart data */
const mockLine = (values: number[]): ChartPoint[] => values.map((v, idx) => ({ label: `S${idx + 1}`, value: v }));
const mockBar = (labels: string[], values: number[]): ChartPoint[] => labels.map((l, idx) => ({ label: l, value: values[idx] ?? 0 }));

export default ReportsPanel;
