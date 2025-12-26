import React, { useMemo, useState } from "react";
import { DashboardUserRole } from "../dashboardTypes";
import { Clock3, Plus, Filter, X, MessageSquare, Upload, ShieldAlert } from "lucide-react";

type IncidentStatus = "Abierta" | "En curso" | "Resuelta";
type IncidentPriority = "Baja" | "Media" | "Alta";

type Incident = {
  id: string;
  title: string;
  status: IncidentStatus;
  priority: IncidentPriority;
  date: string;
  category: string;
  messages: { author: string; text: string; time: string }[];
};

type CreateIncidentForm = {
  category: string;
  subject: string;
  description: string;
  relatedId?: string;
};

const YA_VOY_BLUE = "#0056b3";

export const IncidentsPanel: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  const [filterStatus, setFilterStatus] = useState<IncidentStatus | "Todas">("Todas");
  const [filterPriority, setFilterPriority] = useState<IncidentPriority | "Todas">("Todas");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>("inc-1");
  const [showModal, setShowModal] = useState(false);

  const categories = useMemo(() => {
    if (role === DashboardUserRole.TRABAJADOR) {
      return ["Cliente no responde", "Acceso/ubicación", "Problema de seguridad", "Pago retenido", "Daños/herramientas"];
    }
    if (role === DashboardUserRole.PROVEEDOR) {
      return ["Devolución", "Envío", "Stock", "Pago", "Factura"];
    }
    if (role === DashboardUserRole.EMPRESA || role === DashboardUserRole.PARTICULAR) {
      return ["Trabajo mal realizado", "No se presentó", "Reembolso", "Daños", "Comportamiento"];
    }
    return ["Marketplace / Compra invitado"];
  }, [role]);

  const incidentsMock: Incident[] = [
    {
      id: "inc-1",
      title: "Pago retenido tras marcar finalizado",
      status: "En curso",
      priority: "Alta",
      date: "27/12/2025",
      category: "Pago",
      messages: [
        { author: "Tú", text: "He terminado el trabajo, pero el pago sigue retenido.", time: "10:05" },
        { author: "Soporte", text: "Estamos revisando la confirmación del cliente.", time: "10:20" },
      ],
    },
    {
      id: "inc-2",
      title: "Cliente no responde a la entrega",
      status: "Abierta",
      priority: "Media",
      date: "26/12/2025",
      category: "Cliente no responde",
      messages: [{ author: "Tú", text: "No responde al chat, necesito cerrar la visita.", time: "18:00" }],
    },
    {
      id: "inc-3",
      title: "Solicitud de reembolso parcial",
      status: "Resuelta",
      priority: "Baja",
      date: "20/12/2025",
      category: "Reembolso",
      messages: [{ author: "Soporte", text: "Reembolso aprobado y procesado.", time: "09:10" }],
    },
  ];

  const filtered = incidentsMock.filter((i) => {
    const matchesStatus = filterStatus === "Todas" || i.status === filterStatus;
    const matchesPriority = filterPriority === "Todas" || i.priority === filterPriority;
    const matchesSearch = i.title.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const selected = incidentsMock.find((i) => i.id === selectedId) ?? filtered[0] ?? incidentsMock[0];

  const canMarkRisk = role === DashboardUserRole.TRABAJADOR;
  const showRelated =
    role === DashboardUserRole.EMPRESA ||
    role === DashboardUserRole.PARTICULAR ||
    role === DashboardUserRole.PROVEEDOR;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Incidencias</h1>
          <p className="text-sm text-slate-600">Gestiona y responde incidencias sin salir del panel.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white"
          style={{ background: YA_VOY_BLUE }}
        >
          <Plus size={16} /> Nueva incidencia
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Lista */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar incidencia"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </div>
          <div className="flex gap-2 text-xs font-semibold flex-wrap">
            {["Todas", "Abierta", "En curso", "Resuelta"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st as any)}
                className={`px-3 py-1 rounded-full border ${
                  filterStatus === st ? "bg-blue-50 text-[#0056b3] border-blue-100" : "border-gray-200 text-slate-700"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
          <div className="flex gap-2 text-xs font-semibold flex-wrap">
            {["Todas", "Baja", "Media", "Alta"].map((p) => (
              <button
                key={p}
                onClick={() => setFilterPriority(p as any)}
                className={`px-3 py-1 rounded-full border ${
                  filterPriority === p ? "bg-blue-50 text-[#0056b3] border-blue-100" : "border-gray-200 text-slate-700"
                }`}
              >
                Prioridad {p}
              </button>
            ))}
          </div>

          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
            {filtered.map((i) => (
              <button
                key={i.id}
                onClick={() => setSelectedId(i.id)}
                className={`w-full text-left border rounded-xl p-3 space-y-1 transition ${
                  selected?.id === i.id ? "border-blue-200 bg-blue-50/60" : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#0056b3]">{i.category}</span>
                  <span className="text-gray-500">{i.date}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{i.title}</p>
                <div className="flex items-center gap-2 text-[11px]">
                  <Badge label={i.status} type={i.status} />
                  <Badge label={`Prioridad ${i.priority}`} type={i.priority} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detalle */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-slate-500">ID {selected?.id}</p>
              <h3 className="text-lg font-bold text-slate-900">{selected?.title}</h3>
              <div className="flex items-center gap-2 text-xs mt-1">
                <Badge label={selected?.status ?? ""} type={selected?.status ?? "Abierta"} />
                <Badge label={`Prioridad ${selected?.priority ?? ""}`} type={selected?.priority ?? "Media"} />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button className="px-3 py-1.5 rounded-lg border border-gray-200 font-bold text-slate-700">Cambiar estado</button>
              <button className="px-3 py-1.5 rounded-lg border border-gray-200 font-bold text-slate-700">Escalar a soporte</button>
              <button className="px-3 py-1.5 rounded-lg border border-gray-200 font-bold text-red-600">Cerrar</button>
              {canMarkRisk && (
                <button className="px-3 py-1.5 rounded-lg border border-red-200 text-red-700 font-bold flex items-center gap-1">
                  <ShieldAlert size={14} /> Marcar riesgo
                </button>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
            {selected?.messages.map((m, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0056b3] flex items-center justify-center text-xs font-bold">
                  {m.author[0]}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold text-slate-800">{m.author}</span>
                    <span>{m.time}</span>
                  </div>
                  <p className="text-sm text-slate-800 mt-1">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply */}
          <div className="border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <MessageSquare size={16} className="text-[#0056b3]" />
              Añade una respuesta o adjunta evidencias.
            </div>
            <textarea className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="Escribe tu mensaje..." rows={3} />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-[#0056b3] font-bold cursor-pointer">
                <Upload size={16} /> Adjuntar archivo (mock)
                <input type="file" className="hidden" />
              </label>
              <button className="ml-auto px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: YA_VOY_BLUE }}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal crear */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-xl p-6 border border-gray-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Crear incidencia</h3>
              <button onClick={() => setShowModal(false)}>
                <X size={18} className="text-gray-500" />
              </button>
            </div>
            <CreateIncidentForm categories={categories} showRelated={showRelated} />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold">
                Cancelar
              </button>
              <button className="px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: YA_VOY_BLUE }}>
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Badge: React.FC<{ label: string; type: IncidentStatus | IncidentPriority }> = ({ label, type }) => {
  const styles: Record<string, string> = {
    Abierta: "bg-amber-50 text-amber-700 border-amber-100",
    "En curso": "bg-blue-50 text-blue-700 border-blue-100",
    Resuelta: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Baja: "bg-gray-100 text-gray-600 border-gray-200",
    Media: "bg-blue-50 text-blue-700 border-blue-100",
    Alta: "bg-red-50 text-red-700 border-red-100",
  };
  return (
    <span className={`px-2 py-1 rounded-full border text-[11px] font-bold ${styles[type] ?? "bg-gray-100 text-gray-600"}`}>
      {label}
    </span>
  );
};

const CreateIncidentForm: React.FC<{ categories: string[]; showRelated: boolean }> = ({ categories, showRelated }) => {
  const [form, setForm] = useState<CreateIncidentForm>({ category: categories[0], subject: "", description: "" });
  return (
    <div className="space-y-3">
      <div>
        <label className="text-xs font-semibold text-slate-600">Categoría</label>
        <select
          value={form.category}
          onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
          className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-slate-600">Asunto</label>
        <input
          value={form.subject}
          onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
          placeholder="Ej: Pago retenido en trabajo #123"
        />
      </div>
      <div>
        <label className="text-xs font-semibold text-slate-600">Descripción</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
          rows={4}
          placeholder="Describe qué ocurrió y cómo podemos ayudarte"
        />
      </div>
      {showRelated && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-slate-600">Relacionado (trabajo/pedido)</label>
            <select className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Trabajo #123 - Pintura</option>
              <option>Trabajo #456 - Mudanza</option>
              <option>Pedido #789 - Marketplace</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Adjunto (mock)</label>
            <div className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-600">
              <Upload size={16} /> Añadir archivo
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <Clock3 size={14} /> Se actualizará el estado cuando soporte responda. (Mock)
      </div>
    </div>
  );
};

export default IncidentsPanel;
