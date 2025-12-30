// /dashboardperfiles/components/JobsManager.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  MapPin,
  Filter,
  CheckCircle2,
  Shield,
  Navigation,
  Pencil,
  Trash2,
  X,
  Save,
  AlertTriangle,
} from "lucide-react";
import { DashboardUserRole, JobPanel, JobType } from "../dashboardTypes";
import DistrictAvailabilityMockMap from "./DistrictAvailabilityMockMap";
import { seededRandom } from "../utils/seededRandom";
import CreateJobModal from "./CreateJobModal";
import { supabase } from "@/services/supabase";

// ✅ tu enum REAL (OPEN/ASSIGNED/IN_PROGRESS/COMPLETED/CANCELLED)
import { JobStatus } from "@/types";

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

  // (opcional, para edición)
  description?: string;
  category?: string;
  address?: string;
};

const districtOptions = ["Todos", "Usera", "Arganzuela", "Carabanchel", "Chamberí", "Tetuán", "Salamanca"] as const;
const statusOptions = ["Todos", "Abierto", "En Progreso", "En Trayecto", "Completado", "Cancelado"] as const;
const typeOptions = ["Todos", "Por hora", "Precio fijo"] as const;

// Para tu tabla VoyJobs: job_type = 'ONE_OFF' | 'HOURLY'
type DbJobType = "ONE_OFF" | "HOURLY";

interface JobsManagerProps {
  role: DashboardUserRole;
}

function mapDbStatusToUi(dbStatus: string | null | undefined): JobRow["status"] {
  if (!dbStatus) return "Abierto";
  const s = String(dbStatus).toUpperCase();

  if (s === "OPEN") return "Abierto";
  if (s === "ASSIGNED") return "En Trayecto"; // si prefieres, cámbialo a "En Progreso"
  if (s === "IN_PROGRESS") return "En Progreso";
  if (s === "COMPLETED") return "Completado";
  if (s === "CANCELLED") return "Cancelado";

  const allowed = new Set<JobRow["status"]>(["Abierto", "En Progreso", "En Trayecto", "Completado", "Cancelado"]);
  if (allowed.has(dbStatus as any)) return dbStatus as any;

  return "Abierto";
}

function mapUiStatusToDb(ui: JobRow["status"]): JobStatus {
  switch (ui) {
    case "Abierto":
      return JobStatus.OPEN;
    case "En Trayecto":
      return JobStatus.ASSIGNED;
    case "En Progreso":
      return JobStatus.IN_PROGRESS;
    case "Completado":
      return JobStatus.COMPLETED;
    case "Cancelado":
      return JobStatus.CANCELLED;
    default:
      return JobStatus.OPEN;
  }
}

function formatPostedAt(createdAt: string | null | undefined): string {
  if (!createdAt) return "—";
  try {
    const d = new Date(createdAt);
    return d.toLocaleString();
  } catch {
    return "—";
  }
}

export const JobsManager: React.FC<JobsManagerProps> = ({ role }) => {
  const isCompany =
    role === DashboardUserRole.EMPRESA ||
    role === DashboardUserRole.PARTICULAR ||
    role === DashboardUserRole.PROVEEDOR;

  const [voyUserId, setVoyUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [jobs, setJobs] = useState<JobRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]>("Todos");
  const [districtFilter, setDistrictFilter] = useState<(typeof districtOptions)[number]>("Todos");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState<string>("Todos");
  const [typeFilter, setTypeFilter] = useState<(typeof typeOptions)[number]>("Todos");
  const [selectedJobId, setSelectedJobId] = useState<string>("");

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editJob, setEditJob] = useState<JobRow | null>(null);

  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  // 1) Obtener VoyUsers.id
  useEffect(() => {
    const loadVoyUser = async () => {
      setLoading(true);
      try {
        const { data: authData } = await supabase.auth.getUser();
        const authUid = authData?.user?.id;
        if (!authUid) {
          setVoyUserId(null);
          setJobs([]);
          return;
        }

        const { data, error } = await supabase
          .from("VoyUsers")
          .select("id")
          .eq("auth_user_id", authUid)
          .single();

        if (error) throw error;

        setVoyUserId(data?.id ?? null);
      } catch (e) {
        console.error("Error loading VoyUsers.id:", e);
        setVoyUserId(null);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    loadVoyUser();
  }, []);

  // 2) Cargar mis trabajos desde VoyJobs
  useEffect(() => {
    const loadJobs = async () => {
      if (!voyUserId) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("VoyJobs")
          .select(
            `
              id,
              title,
              description,
              category,
              address_hint,
              district,
              neighborhood,
              status,
              created_at,
              price_fixed,
              price_hourly,
              job_type,
              assigned_to_user_id
            `
          )
          .eq("creator_user_id", voyUserId)
          .order("created_at", { ascending: false });

        if (error) throw error;

        const mapped: JobRow[] = (data ?? []).map((j: any) => {
          const type: JobRow["type"] = String(j.job_type).toUpperCase() === "HOURLY" ? "horas" : "fijo";
          const price = type === "horas" ? Number(j.price_hourly ?? 0) : Number(j.price_fixed ?? 0);

          return {
            id: j.id,
            title: j.title ?? "—",
            description: j.description ?? undefined,
            category: j.category ?? undefined,
            address: j.address_hint ?? undefined,
            type,
            price,
            district: j.district ?? "—",
            neighborhood: j.neighborhood ?? "—",
            status: mapDbStatusToUi(j.status),
            assignedTo: j.assigned_to_user_id ?? undefined,
            postedAt: formatPostedAt(j.created_at),
          };
        });

        setJobs(mapped);
        setSelectedJobId((prev) => prev || mapped[0]?.id || "");
      } catch (e: any) {
        console.error("VoyJobs load error:", e);
        showToast(e?.message ? `Error: ${e.message}` : "Error cargando trabajos");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [voyUserId]);

  const neighborhoods = useMemo(() => {
    if (districtFilter === "Todos") return ["Todos"];
    const list = jobs.filter((j) => j.district === districtFilter).map((j) => j.neighborhood);
    return ["Todos", ...Array.from(new Set(list))];
  }, [districtFilter, jobs]);

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
  }, [jobs, statusFilter, districtFilter, neighborhoodFilter, typeFilter, search]);

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

  // 3) Crear trabajo (insert)
  const handleCreateJob = async (job: JobPanel) => {
    if (!voyUserId) {
      showToast("No hay usuario cargado");
      return;
    }

    try {
      const dbJobType: DbJobType = job.type === "horas" ? "HOURLY" : "ONE_OFF";

      const payload: any = {
        creator_user_id: voyUserId,
        title: job.title,
        description: job.description ?? null,
        category: job.category ?? "Otros",
        city: "Madrid",
        district: job.district ?? null,
        neighborhood: job.neighborhood ?? null,
        address_hint: job.address ?? null,

        job_type: dbJobType,

        price_hourly: dbJobType === "HOURLY" ? job.price : null,
        price_fixed: dbJobType === "ONE_OFF" ? job.price : null,

        price_negotiable: false,

        status: JobStatus.OPEN,
        assigned_to_user_id: null,
      };

      const { data, error } = await supabase
        .from("VoyJobs")
        .insert(payload)
        .select(
          `
            id,
            title,
            description,
            category,
            address_hint,
            district,
            neighborhood,
            status,
            created_at,
            price_fixed,
            price_hourly,
            job_type,
            assigned_to_user_id
          `
        )
        .single();

      if (error) throw error;

      const type: JobRow["type"] = String(data.job_type).toUpperCase() === "HOURLY" ? "horas" : "fijo";
      const price = type === "horas" ? Number(data.price_hourly ?? 0) : Number(data.price_fixed ?? 0);

      const asRow: JobRow = {
        id: data.id,
        title: data.title ?? job.title,
        description: data.description ?? undefined,
        category: data.category ?? undefined,
        address: data.address_hint ?? undefined,
        type,
        price,
        district: data.district ?? job.district,
        neighborhood: data.neighborhood ?? job.neighborhood,
        status: mapDbStatusToUi(data.status),
        assignedTo: data.assigned_to_user_id ?? undefined,
        postedAt: formatPostedAt(data.created_at),
      };

      setJobs((prev) => [asRow, ...prev]);
      setSelectedJobId(asRow.id);
      showToast("Anuncio publicado");
    } catch (e: any) {
      console.error("Error insert VoyJobs:", e);
      showToast(e?.message ? `Error: ${e.message}` : "Error publicando anuncio");
    }
  };

  // 4) Editar trabajo (update)
  const handleSaveEdit = async (next: JobRow) => {
    try {
      const dbJobType: DbJobType = next.type === "horas" ? "HOURLY" : "ONE_OFF";

      const updatePayload: any = {
        title: next.title,
        district: next.district,
        neighborhood: next.neighborhood,
        status: mapUiStatusToDb(next.status),
        job_type: dbJobType,
        description: next.description ?? null,
        category: next.category ?? null,
        address_hint: next.address ?? null,
        price_hourly: dbJobType === "HOURLY" ? next.price : null,
        price_fixed: dbJobType === "ONE_OFF" ? next.price : null,
      };

      const { data, error } = await supabase
        .from("VoyJobs")
        .update(updatePayload)
        .eq("id", next.id)
        .select(
          `
          id,
          title,
          description,
          category,
          address_hint,
          district,
          neighborhood,
          status,
          created_at,
          price_fixed,
          price_hourly,
          job_type,
          assigned_to_user_id
        `
        )
        .single();

      if (error) throw error;

      const type: JobRow["type"] = String(data.job_type).toUpperCase() === "HOURLY" ? "horas" : "fijo";
      const price = type === "horas" ? Number(data.price_hourly ?? 0) : Number(data.price_fixed ?? 0);

      const patched: JobRow = {
        id: data.id,
        title: data.title ?? next.title,
        description: data.description ?? undefined,
        category: data.category ?? undefined,
        address: data.address_hint ?? undefined,
        type,
        price,
        district: data.district ?? next.district,
        neighborhood: data.neighborhood ?? next.neighborhood,
        status: mapDbStatusToUi(data.status),
        assignedTo: data.assigned_to_user_id ?? undefined,
        postedAt: formatPostedAt(data.created_at),
      };

      setJobs((prev) => prev.map((j) => (j.id === patched.id ? patched : j)));
      showToast("Anuncio actualizado");
      setEditJob(null);
    } catch (e: any) {
      console.error("Error update VoyJobs:", e);
      showToast(e?.message ? `Error: ${e.message}` : "Error actualizando anuncio");
    }
  };

  // 5) Borrar trabajo (delete)
  const handleDeleteJob = async (jobId: string) => {
    const ok = window.confirm("¿Seguro que quieres borrar este anuncio? Esta acción no se puede deshacer.");
    if (!ok) return;

    try {
      const { error } = await supabase.from("VoyJobs").delete().eq("id", jobId);
      if (error) throw error;

      setJobs((prev) => prev.filter((j) => j.id !== jobId));
      setSelectedJobId((prev) => (prev === jobId ? "" : prev));
      showToast("Anuncio eliminado");
    } catch (e: any) {
      console.error("Error delete VoyJobs:", e);
      showToast(e?.message ? `Error: ${e.message}` : "Error eliminando anuncio");
    }
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
        <p className="text-sm text-gray-600">
          Vista avanzada pensada para Empresa/Provider. Usa &quot;Explorar Trabajos&quot; para buscar tareas.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div className="text-sm text-slate-600 p-3">Cargando trabajos...</div>;
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
              <span className="text-xs text-slate-500">
                Mostrando {filteredJobs.length} de {jobs.length}
              </span>
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
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{job.title}</p>
                      <p className="text-[11px] text-slate-500">
                        #{job.id} · {job.postedAt}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900 whitespace-nowrap">
                          €{job.price}{" "}
                          <span className="text-xs text-slate-500">{job.type === "horas" ? "/h" : "fijo"}</span>
                        </p>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${statusClass(
                            job.status
                          )}`}
                        >
                          {job.status}
                        </span>
                      </div>

                      {/* ✅ Acciones: Editar / Borrar */}
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          title="Modificar"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditJob(job);
                          }}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                        >
                          <Pencil size={16} className="text-slate-700" />
                        </button>

                        <button
                          type="button"
                          title="Borrar"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteJob(job.id);
                          }}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-red-50"
                        >
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
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
                ? {
                    id: selectedJob.id,
                    title: selectedJob.title,
                    district: selectedJob.district,
                    neighborhood: selectedJob.neighborhood,
                  }
                : undefined
            }
            workersCount={workersCount}
            seedKey={seedKey}
          />
        </div>
      </div>

      {/* Create */}
      <CreateJobModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} onCreate={handleCreateJob} />

      {/* Edit */}
      <EditJobModal
        open={!!editJob}
        job={editJob}
        onClose={() => setEditJob(null)}
        onSave={handleSaveEdit}
      />

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

// ----------------------------------------------------
// Edit modal (incluido aquí para que sea “fichero completo”)
// ----------------------------------------------------
const EditJobModal: React.FC<{
  open: boolean;
  job: JobRow | null;
  onClose: () => void;
  onSave: (next: JobRow) => Promise<void> | void;
}> = ({ open, job, onClose, onSave }) => {
  const [local, setLocal] = useState<JobRow | null>(job);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLocal(job);
  }, [job]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open || !local) return null;

  const canSave =
    local.title.trim() &&
    local.district.trim() &&
    local.neighborhood.trim() &&
    local.price > 0 &&
    (local.type === "horas" || local.type === "fijo");

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-5 border border-gray-200 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-slate-500">Modificar anuncio</p>
            <h3 className="text-lg font-bold text-slate-900">{local.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-50">
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Título" value={local.title} onChange={(v) => setLocal({ ...local, title: v })} />
          <Field
            label="Precio (€)"
            type="number"
            value={String(local.price ?? "")}
            onChange={(v) => setLocal({ ...local, price: Number(v || 0) })}
          />

          <Select2
            label="Tipo"
            value={local.type}
            onChange={(v) => setLocal({ ...local, type: v as any })}
            options={[
              { value: "horas", label: "Por hora" },
              { value: "fijo", label: "Precio fijo" },
            ]}
          />

          <Select2
            label="Estado"
            value={local.status}
            onChange={(v) => setLocal({ ...local, status: v as any })}
            options={[
              { value: "Abierto", label: "Abierto" },
              { value: "En Trayecto", label: "En Trayecto" },
              { value: "En Progreso", label: "En Progreso" },
              { value: "Completado", label: "Completado" },
              { value: "Cancelado", label: "Cancelado" },
            ]}
          />

          <Field label="Distrito" value={local.district} onChange={(v) => setLocal({ ...local, district: v })} />
          <Field
            label="Barrio"
            value={local.neighborhood}
            onChange={(v) => setLocal({ ...local, neighborhood: v })}
          />

          <Field
            label="Descripción (opcional)"
            value={local.description ?? ""}
            onChange={(v) => setLocal({ ...local, description: v })}
            textarea
          />
          <Field
            label="Dirección (opcional)"
            value={local.address ?? ""}
            onChange={(v) => setLocal({ ...local, address: v })}
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <AlertTriangle size={14} />
            Esto actualiza el anuncio en la base de datos.
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 text-slate-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              disabled={!canSave || saving}
              onClick={async () => {
                setSaving(true);
                try {
                  await onSave(local);
                } finally {
                  setSaving(false);
                }
              }}
              className="px-4 py-2 rounded-xl text-sm font-bold text-white disabled:opacity-60 bg-[#0056b3] hover:bg-blue-700 inline-flex items-center gap-2"
            >
              <Save size={16} />
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}> = ({ label, value, onChange, type = "text", textarea }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-100"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-100"
      />
    )}
  </label>
);

const Select2: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}> = ({ label, value, onChange, options }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);

export default JobsManager;
