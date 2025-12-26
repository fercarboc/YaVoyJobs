import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Shield,
  Filter,
  CheckCircle2,
  X,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";
import { DashboardUserRole } from "../dashboardTypes";

type JobExplore = {
  id: string;
  title: string;
  category: string;
  district: string;
  neighborhood: string;
  distanceKm: number;
  type: "hourly" | "fixed";
  price: number;
  durationText: string;
  postedAt: string;
  status: "open" | "assigned" | "closed";
  applicantsCount: number;
  clientName: string;
  requiresInsurance: boolean;
};

const YA_VOY_BLUE = "#0056b3";
const districts = ["Todos los distritos", "Usera", "Chamberí", "Arganzuela", "Carabanchel", "Tetuán", "Salamanca"] as const;
const categories = [
  "Ayuda a mayores",
  "Pasear mascota",
  "Limpieza",
  "Mudanza",
  "Fontanería",
  "Jardín",
  "Reparto",
  "Electricidad",
  "Pintura",
  "Cuidado de niños",
  "Clases particulares",
  "Informática",
  "Reparaciones hogar",
  "Cocina",
  "Compras y recados",
  "Transporte",
  "Almacén y logística",
  "Otros",
] as const;
const typeFilters = ["Todos", "Por hora", "Precio fijo"] as const;
const orderOptions = ["Más recientes", "Más cerca", "Mejor pagados"] as const;

const jobsMock: JobExplore[] = [
  // Usera: 1 open
  { id: "u1", title: "Pasear mascota mediana", category: "Pasear mascota", district: "Usera", neighborhood: "San Fermín", distanceKm: 0.4, type: "hourly", price: 12, durationText: "45 min", postedAt: "hace 1h", status: "open", applicantsCount: 2, clientName: "Ana M.", requiresInsurance: false },
  // Chamberí: 6
  { id: "c1", title: "Pasear mascota pequeña", category: "Pasear mascota", district: "Chamberí", neighborhood: "Ríos Rosas", distanceKm: 1.2, type: "hourly", price: 14, durationText: "1h", postedAt: "hace 30m", status: "open", applicantsCount: 1, clientName: "Carlos R.", requiresInsurance: false },
  { id: "c2", title: "Limpieza piso 3h", category: "Limpieza", district: "Chamberí", neighborhood: "Gaztambide", distanceKm: 1.5, type: "hourly", price: 15, durationText: "3h", postedAt: "hace 2h", status: "open", applicantsCount: 3, clientName: "Lucía S.", requiresInsurance: true },
  { id: "c3", title: "Mudanza sofá", category: "Mudanza", district: "Chamberí", neighborhood: "Trafalgar", distanceKm: 1.8, type: "fixed", price: 45, durationText: "2h", postedAt: "hace 3h", status: "open", applicantsCount: 4, clientName: "Pablo T.", requiresInsurance: true },
  { id: "c4", title: "Fontanería ligera", category: "Fontanería", district: "Chamberí", neighborhood: "Arapiles", distanceKm: 2.0, type: "fixed", price: 70, durationText: "1h", postedAt: "hace 4h", status: "open", applicantsCount: 2, clientName: "Eva L.", requiresInsurance: true },
  { id: "c5", title: "Pasear mascota grande", category: "Pasear mascota", district: "Chamberí", neighborhood: "Vallehermoso", distanceKm: 1.9, type: "hourly", price: 18, durationText: "1h", postedAt: "hace 1h", status: "open", applicantsCount: 5, clientName: "Sergio B.", requiresInsurance: false },
  { id: "c6", title: "Acompañamiento a mayores", category: "Ayuda a mayores", district: "Chamberí", neighborhood: "Trafalgar", distanceKm: 2.2, type: "hourly", price: 14, durationText: "2h", postedAt: "ayer", status: "open", applicantsCount: 1, clientName: "Hotel Azul", requiresInsurance: true },
  // Arganzuela: 3
  { id: "a1", title: "Pasear mascota mediana", category: "Pasear mascota", district: "Arganzuela", neighborhood: "Delicias", distanceKm: 2.5, type: "hourly", price: 13, durationText: "1h", postedAt: "hace 50m", status: "open", applicantsCount: 1, clientName: "Lola C.", requiresInsurance: false },
  { id: "a2", title: "Limpieza oficina", category: "Limpieza", district: "Arganzuela", neighborhood: "Palos", distanceKm: 2.8, type: "hourly", price: 16, durationText: "4h", postedAt: "hace 5h", status: "open", applicantsCount: 2, clientName: "Cowork Arg.", requiresInsurance: true },
  { id: "a3", title: "Mudanza cajas", category: "Mudanza", district: "Arganzuela", neighborhood: "Chopera", distanceKm: 2.9, type: "fixed", price: 60, durationText: "2h", postedAt: "hace 1d", status: "open", applicantsCount: 3, clientName: "Diego F.", requiresInsurance: true },
  // Carabanchel: 3
  { id: "cb1", title: "Fontanería grifo", category: "Fontanería", district: "Carabanchel", neighborhood: "Opañel", distanceKm: 3.5, type: "fixed", price: 55, durationText: "1h", postedAt: "hace 3h", status: "open", applicantsCount: 1, clientName: "Marta G.", requiresInsurance: true },
  { id: "cb2", title: "Jardinería setos", category: "Jardín", district: "Carabanchel", neighborhood: "Vista Alegre", distanceKm: 3.8, type: "fixed", price: 80, durationText: "3h", postedAt: "ayer", status: "open", applicantsCount: 1, clientName: "Chalet Oeste", requiresInsurance: true },
  { id: "cb3", title: "Pasear mascota", category: "Pasear mascota", district: "Carabanchel", neighborhood: "Abrantes", distanceKm: 3.2, type: "hourly", price: 11, durationText: "45 min", postedAt: "hace 2h", status: "open", applicantsCount: 0, clientName: "Luis V.", requiresInsurance: false },
  // Tetuán/Salamanca: 1-2
  { id: "t1", title: "Reparto urgente", category: "Reparto", district: "Tetuán", neighborhood: "Bellas Vistas", distanceKm: 4.0, type: "hourly", price: 17, durationText: "2h", postedAt: "hace 1h", status: "open", applicantsCount: 2, clientName: "Tienda Norte", requiresInsurance: false },
  { id: "s1", title: "Montaje lámpara", category: "Fontanería", district: "Salamanca", neighborhood: "Goya", distanceKm: 4.5, type: "fixed", price: 50, durationText: "1h", postedAt: "ayer", status: "open", applicantsCount: 1, clientName: "María F.", requiresInsurance: false },
];

export const ExplorarTrabajos: React.FC<{ role?: DashboardUserRole }> = () => {
  const [districtFilter, setDistrictFilter] = useState<(typeof districts)[number]>("Todos los distritos");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<(typeof typeFilters)[number]>("Todos");
  const [orderBy, setOrderBy] = useState<(typeof orderOptions)[number]>("Más recientes");
  const [search, setSearch] = useState("");
  const [appliedIds, setAppliedIds] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const [modalJob, setModalJob] = useState<JobExplore | null>(null);
  const [proposal, setProposal] = useState("");
  const [message, setMessage] = useState("");
  const [accept, setAccept] = useState(false);

  const filteredJobs = useMemo(() => {
    let jobs = jobsMock.filter((j) => j.status === "open");
    if (districtFilter !== "Todos los distritos") jobs = jobs.filter((j) => j.district === districtFilter);
    if (categoryFilter.length > 0) jobs = jobs.filter((j) => categoryFilter.includes(j.category));
    if (typeFilter === "Por hora") jobs = jobs.filter((j) => j.type === "hourly");
    if (typeFilter === "Precio fijo") jobs = jobs.filter((j) => j.type === "fixed");
    if (search.trim()) {
      const q = search.toLowerCase();
      jobs = jobs.filter((j) =>
        `${j.title} ${j.clientName} ${j.category}`.toLowerCase().includes(q)
      );
    }
    jobs = [...jobs].sort((a, b) => {
      if (orderBy === "Más cerca") return a.distanceKm - b.distanceKm;
      if (orderBy === "Mejor pagados") return b.price - a.price;
      return 0; // mock para Más recientes
    });
    return jobs;
  }, [districtFilter, categoryFilter, typeFilter, orderBy, search]);

  const demandByDistrict = useMemo(() => {
    const base = categoryFilter.length ? jobsMock.filter((j) => categoryFilter.includes(j.category) && j.status === "open") : jobsMock.filter((j) => j.status === "open");
    return districts
      .filter((d) => d !== "Todos los distritos")
      .map((d) => ({ district: d, count: base.filter((j) => j.district === d).length }));
  }, [categoryFilter]);

  const topDistrict = useMemo(() => {
    return demandByDistrict.reduce((max, d) => (d.count > max.count ? d : max), { district: "Chamberí", count: 0 });
  }, [demandByDistrict]);

  const showSuggestion = districtFilter !== "Todos los distritos" && filteredJobs.length < 2 && topDistrict.count > filteredJobs.length;

  const resetFilters = () => {
    setDistrictFilter("Todos los distritos");
    setCategoryFilter([]);
    setTypeFilter("Todos");
    setOrderBy("Más recientes");
    setSearch("");
  };

  const openApply = (job: JobExplore) => {
    setModalJob(job);
    setProposal(job.type === "hourly" ? `${job.price}` : `${job.price}`);
    setMessage("");
    setAccept(false);
  };

  const confirmApply = () => {
    if (!modalJob) return;
    if (!accept) {
      setToast("Debes aceptar las condiciones / seguro");
      hideToast();
      return;
    }
    const next = new Set(appliedIds);
    next.add(modalJob.id);
    setAppliedIds(next);
    // UI increment applicants
    modalJob.applicantsCount += 1;
    setToast("Candidatura enviada");
    hideToast();
    setModalJob(null);
    // TODO create job application record
  };

  const withdraw = (job: JobExplore) => {
    const next = new Set(appliedIds);
    if (next.delete(job.id)) {
      setAppliedIds(next);
      job.applicantsCount = Math.max(0, job.applicantsCount - 1);
      setToast("Candidatura retirada");
      hideToast();
    }
  };

  const hideToast = () => {
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Explorar trabajos</h2>
          <p className="text-gray-500">Postúlate en otros distritos y categorías.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Ej: Pasear mascota, limpieza..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="p-2 border border-gray-200 rounded-xl hover:bg-white text-gray-500" onClick={resetFilters}>
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <Select
            label="Distrito"
            value={districtFilter}
            onChange={(v) => setDistrictFilter(v as any)}
            options={districts}
            icon={<MapPin size={14} />}
          />
          <Select
            label="Tipo"
            value={typeFilter}
            onChange={(v) => setTypeFilter(v as any)}
            options={typeFilters}
            icon={<CheckCircle2 size={14} />}
          />
          <Select
            label="Ordenar por"
            value={orderBy}
            onChange={(v) => setOrderBy(v as any)}
            options={orderOptions}
            icon={<ArrowUpRight size={14} />}
          />
          <button
            onClick={resetFilters}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-800 hover:bg-gray-50"
          >
            Limpiar filtros
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = categoryFilter.includes(cat);
            return (
              <button
                key={cat}
                onClick={() =>
                  setCategoryFilter((prev) =>
                    active ? prev.filter((c) => c !== cat) : [...prev, cat]
                  )
                }
                className={`px-3 py-1.5 rounded-full border text-sm font-semibold ${
                  active ? "bg-blue-50 text-[#0056b3] border-blue-100" : "border-gray-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Demanda por distrito */}
      <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-slate-900">Demanda por distrito</p>
          <span className="text-xs text-slate-500">Click para cambiar</span>
        </div>
        <div className="flex overflow-x-auto gap-2 no-scrollbar pb-1">
          {demandByDistrict.map((d) => {
            const active = districtFilter === d.district;
            return (
              <button
                key={d.district}
                onClick={() => setDistrictFilter(d.district as any)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full border text-sm font-semibold ${
                  active ? "bg-blue-50 text-[#0056b3] border-blue-100" : "border-gray-200 text-slate-700"
                }`}
              >
                {d.district} • {d.count}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sugerencia */}
      {showSuggestion && (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-amber-800">
            <AlertCircle size={18} />
            En {topDistrict.district} hay {topDistrict.count} anuncios similares.
          </div>
          <button
            onClick={() => setDistrictFilter(topDistrict.district as any)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700"
          >
            Ver {topDistrict.district}
          </button>
        </div>
      )}

      {/* Listado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => {
          const applied = appliedIds.has(job.id);
          return (
            <div
              key={job.id}
              className="bg-white rounded-3xl border border-gray-200 p-5 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-xs font-bold text-[#0056b3] uppercase">{job.category}</div>
                <div className="text-right">
                  <p className="text-xl font-black text-gray-900">
                    €{job.price} <span className="text-xs text-gray-500 font-bold">{job.type === "hourly" ? "/hora" : "precio fijo"}</span>
                  </p>
                  <p className="text-[11px] text-gray-500">Publicado {job.postedAt}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0056b3] transition-colors mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">Cliente: <span className="font-semibold text-gray-800">{job.clientName}</span></p>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{job.district} · {job.neighborhood} · {job.distanceKm.toFixed(1)} km</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Clock size={16} className="text-gray-400" />
                <span>{job.durationText}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-4">
                <Shield size={14} className={job.requiresInsurance ? "text-emerald-600" : "text-gray-400"} />
                {job.requiresInsurance ? "Requiere seguro" : "Seguro opcional"}
              </div>

              <div className="mt-auto flex items-center justify-between gap-2">
                <div className="text-xs text-gray-500">{job.applicantsCount} candidatos</div>
                {applied ? (
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-2 rounded-xl text-xs font-bold bg-gray-100 text-gray-600"
                      disabled
                    >
                      Candidatura enviada
                    </button>
                    <button
                      className="px-3 py-2 rounded-xl text-[11px] font-bold border border-gray-200 text-slate-700 hover:bg-gray-50"
                      onClick={() => withdraw(job)}
                    >
                      Retirar
                    </button>
                  </div>
                ) : (
                  <button
                    className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-[#0056b3] hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                    onClick={() => openApply(job)}
                  >
                    Postularme ahora
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {filteredJobs.length === 0 && (
          <div className="col-span-full text-sm text-slate-600 bg-white border border-gray-200 rounded-2xl p-6">
            Sin resultados con los filtros actuales.
          </div>
        )}
      </div>

      {/* Modal */}
      {modalJob && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 border border-gray-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Distrito: {modalJob.district}</p>
                <h3 className="text-lg font-bold text-slate-900">{modalJob.title}</h3>
                <p className="text-sm text-slate-600">Precio: €{modalJob.price} {modalJob.type === "hourly" ? "/hora" : "fijo"}</p>
              </div>
              <button onClick={() => setModalJob(null)}>
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <label className="text-sm text-slate-700 flex flex-col gap-1">
              Mensaje al cliente
              <textarea
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hola, tengo disponibilidad inmediata..."
              />
            </label>

            <label className="text-sm text-slate-700 flex flex-col gap-1">
              Propuesta ({modalJob.type === "hourly" ? "€/hora" : "total"})
              <input
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
              />
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" className="h-4 w-4" checked={accept} onChange={(e) => setAccept(e.target.checked)} />
              Acepto condiciones / seguro
            </label>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalJob(null)}
                className="px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 text-slate-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmApply}
                className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                style={{ background: YA_VOY_BLUE }}
              >
                Confirmar candidatura
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
};

/* UI helpers */
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
