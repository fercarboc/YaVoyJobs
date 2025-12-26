import React, { useMemo, useState } from "react";
import { Plus, Search, MapPin, Filter, CheckCircle2, Shield, Navigation } from "lucide-react";
import { DashboardUserRole, JobPanel, JobStatus } from "../dashboardTypes";
import DistrictAvailabilityMockMap from "./DistrictAvailabilityMockMap";
import { seededRandom } from "../utils/seededRandom";
import CreateJobModal from "./CreateJobModal";

type JobRow = {
  id: string;
  title: string;
  type: "horas" | "fijo";
  price: number;
  district: string;
  neighborhood: string;
  status: "Abierto" | "En Progreso" | "En Trayecto" | "Completado" | "Cancelado";
  assignedTo?: string;
  postedAt: string;
};

const JOBS: JobRow[] = [
  { id: "J-1201", title: "Limpieza local 200m2", type: "horas", price: 15, district: "Arganzuela", neighborhood: "Delicias", status: "En Progreso", assignedTo: "Equipo A", postedAt: "hace 3h" },
  { id: "J-1202", title: "Pintura fachada", type: "fijo", price: 820, district: "Chamberí", neighborhood: "Trafalgar", status: "Abierto", postedAt: "hace 1h" },
  { id: "J-1203", title: "Fontanería urgente", type: "fijo", price: 140, district: "Usera", neighborhood: "San Fermín", status: "En Trayecto", assignedTo: "Proveedor Pro", postedAt: "hace 30m" },
  { id: "J-1204", title: "Mudanza oficina pequeña", type: "fijo", price: 320, district: "Carabanchel", neighborhood: "Abrantes", status: "Abierto", postedAt: "ayer" },
  { id: "J-1205", title: "Mantenimiento jardín", type: "horas", price: 18, district: "Chamberí", neighborhood: "Ríos Rosas", status: "Completado", assignedTo: "Jardín Plus", postedAt: "hace 2d" },
  { id: "J-1206", title: "Montaje estanterías", type: "fijo", price: 90, district: "Tetuán", neighborhood: "Bellas Vistas", status: "Abierto", postedAt: "hace 4h" },
  { id: "J-1207", title: "Revisión eléctrica", type: "fijo", price: 120, district: "Salamanca", neighborhood: "Goya", status: "En Progreso", assignedTo: "Elec Madrid", postedAt: "hace 1h" },
  { id: "J-1208", title: "Limpieza semanal oficinas", type: "horas", price: 14, district: "Arganzuela", neighborhood: "Legazpi", status: "Abierto", postedAt: "hace 5h" },
  { id: "J-1209", title: "Paseo mascotas comunidad", type: "horas", price: 12, district: "Chamberí", neighborhood: "Arapiles", status: "Abierto", postedAt: "hace 40m" },
  { id: "J-1210", title: "Reparación carpintería", type: "fijo", price: 180, district: "Carabanchel", neighborhood: "Vista Alegre", status: "Abierto", postedAt: "hace 2h" },
];

const districtOptions = ["Todos", "Usera", "Arganzuela", "Carabanchel", "Chamberí", "Tetuán", "Salamanca"] as const;
const statusOptions = ["Todos", "Abierto", "En Progreso", "En Trayecto", "Completado", "Cancelado"] as const;
const typeOptions = ["Todos", "Por hora", "Precio fijo"] as const;

interface JobsManagerProps {
  role: DashboardUserRole;
}

export const JobsManager: React.FC<JobsManagerProps> = ({ role }) => {
  const isCompany = role === DashboardUserRole.EMPRESA || role === DashboardUserRole.PARTICULAR || role === DashboardUserRole.PROVEEDOR;
  const [jobs, setJobs] = useState<JobRow[]>(JOBS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]>("Todos");
  const [districtFilter, setDistrictFilter] = useState<(typeof districtOptions)[number]>("Todos");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState<string>("Todos");
  const [typeFilter, setTypeFilter] = useState<(typeof typeOptions)[number]>("Todos");
  const [selectedJobId, setSelectedJobId] = useState<string>(jobs[0]?.id ?? "");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const neighborhoods = useMemo(() => {
    if (districtFilter === "Todos") return ["Todos"];
    const list = jobs.filter((j) => j.district === districtFilter).map((j) => j.neighborhood);
    return ["Todos", ...Array.from(new Set(list))];
  }, [districtFilter]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((j) => {
      if (statusFilter !== "Todos" && j.status !== statusFilter) return false;
      if (districtFilter !== "Todos" && j.district !== districtFilter) return false;
      if (neighborhoodFilter !== "Todos" && j.neighborhood !== neighborhoodFilter) return false;
      if (typeFilter === "Por hora" && j.type !== "horas") return false;
      if (typeFilter === "Precio fijo" && j.type !== "fijo") return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!`${j.title} ${j.district} ${j.neighborhood}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [statusFilter, districtFilter, neighborhoodFilter, typeFilter, search]);

  const selectedJob = filteredJobs.find((j) => j.id === selectedJobId) ?? filteredJobs[0] ?? jobs[0];
  const activeDistrict = districtFilter !== "Todos" ? districtFilter : selectedJob?.district ?? "Todos";
  const activeNeighborhood = neighborhoodFilter !== "Todos" ? neighborhoodFilter : selectedJob?.neighborhood ?? "Todos";

  const workersCount = getWorkersCount(activeDistrict, activeNeighborhood);
  const seedKey = `${activeDistrict}-${activeNeighborhood}-${selectedJob?.id ?? "none"}`;

  const clearFilters = () => {
    setStatusFilter("Todos");
    setDistrictFilter("Todos");
    setNeighborhoodFilter("Todos");
    setTypeFilter("Todos");
    setSearch("");
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  const handleCreateJob = (job: JobPanel) => {
    const asRow: JobRow = {
      id: job.id,
      title: job.title,
      type: job.type,
      price: job.price,
      district: job.district,
      neighborhood: job.neighborhood,
      status: job.status as JobRow["status"],
      assignedTo: job.assignedTo,
      postedAt: "nuevo",
    };
    setJobs((prev) => [asRow, ...prev]);
    setSelectedJobId(job.id);
    // TODO: call API/Supabase insert job
    showToast("Anuncio publicado");
  };

  const statusClass = (status: JobRow["status"]) => {
    switch (status) {
      case "En Trayecto":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "En Progreso":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Completado":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Cancelado":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  if (!isCompany) {
    return (
      <div className="space-y-4 pt-2">
        <h2 className="text-2xl font-bold text-gray-900">Mis Trabajos</h2>
        <p className="text-sm text-gray-600">Vista avanzada pensada para Empresa/Provider. Usa "Explorar Trabajos" para buscar tareas.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mis Trabajos</h2>
          <p className="text-gray-500 text-sm">Gestiona tus anuncios y visualiza la disponibilidad estimada.</p>
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-[#0056b3] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          onClick={() => setIsCreateOpen(true)}
        >
          <Plus size={20} />
          Publicar Nuevo Trabajo
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3">
        {/* Left column */}
        <div className="xl:col-span-5 space-y-3">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm divide-y divide-gray-100">
            <div className="px-4 py-3 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Mis anuncios</p>
              <span className="text-xs text-slate-500">Mostrando {filteredJobs.length} de {jobs.length}</span>
            </div>
            {filteredJobs.map((job) => {
              const selected = job.id === selectedJob?.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition ${
                    selected ? "bg-blue-50/60 border-l-4 border-[#0056b3]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{job.title}</p>
                      <p className="text-[11px] text-slate-500">#{job.id} · {job.postedAt}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">
                        €{job.price} <span className="text-xs text-slate-500">{job.type === "horas" ? "/h" : "fijo"}</span>
                      </p>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${statusClass(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-gray-400" />
                      {job.district} · {job.neighborhood}
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield size={12} className="text-gray-400" />
                      {job.assignedTo ? `Asignado: ${job.assignedTo}` : "Sin asignar"}
                    </div>
                  </div>
                </button>
              );
            })}
            {filteredJobs.length === 0 && (
              <div className="px-4 py-6 text-sm text-slate-500">Sin anuncios con los filtros actuales.</div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="xl:col-span-7 space-y-3">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-slate-900">Filtros</p>
              <button
                onClick={clearFilters}
                className="text-xs font-bold text-slate-700 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50"
              >
                Limpiar
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <Select
                label="Estado"
                value={statusFilter}
                onChange={(v) => setStatusFilter(v as any)}
                options={statusOptions}
                icon={<CheckCircle2 size={14} />}
              />
              <Select
                label="Distrito"
                value={districtFilter}
                onChange={(v) => {
                  setDistrictFilter(v as any);
                  setNeighborhoodFilter("Todos");
                }}
                options={districtOptions}
                icon={<MapPin size={14} />}
              />
              <Select
                label="Barrio"
                value={neighborhoodFilter}
                onChange={(v) => setNeighborhoodFilter(v)}
                options={neighborhoods as any}
                icon={<Navigation size={14} />}
              />
              <Select
                label="Tipo"
                value={typeFilter}
                onChange={(v) => setTypeFilter(v as any)}
                options={typeOptions}
                icon={<Filter size={14} />}
              />
            </div>
          </div>

          <DistrictAvailabilityMockMap
            district={activeDistrict}
            neighborhood={activeNeighborhood}
            selectedJob={
              selectedJob
                ? { id: selectedJob.id, title: selectedJob.title, district: selectedJob.district, neighborhood: selectedJob.neighborhood }
                : undefined
            }
            workersCount={workersCount}
            seedKey={seedKey}
          />
        </div>
      </div>
      <CreateJobModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} onCreate={handleCreateJob} />
      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
};

const Select: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: readonly string[];
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

const getWorkersCount = (district: string, neighborhood: string) => {
  const base: Record<string, number> = {
    Chamberí: 25,
    Arganzuela: 18,
    Carabanchel: 16,
    Usera: 10,
    Tetuán: 14,
    Salamanca: 20,
    Todos: 40,
  };
  const b = base[district] ?? base["Todos"];
  if (neighborhood && neighborhood !== "Todos") {
    const rand = seededRandom(`${district}-${neighborhood}`)();
    const variation = 0.2 * b;
    return Math.max(3, Math.round(b + variation * (rand - 0.5)));
  }
  return b;
};
