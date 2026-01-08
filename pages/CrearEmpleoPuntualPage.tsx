import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Clock,
  Euro,
  Star,
  UserCheck,
  Car,
  Search,
  CheckCircle2,
  ChevronRight,
  Info,
  ArrowRight,
  Loader2,
  AlertCircle,
  Eye,
} from "lucide-react";
import { jobsService, getJobById } from "@/services/jobs.service";

import type { Category, HelperCard, JobPayload, DurationOption, BudgetType, ContactPref } from "@/types";
import { JobStatus } from "@/types";

// Utils
const haversineKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
};

const CATEGORY_OPTIONS: Category[] = [
  "Acompañamiento",
  "Limpieza",
  "Mudanza",
  "Recados",
  "Mascotas",
  "Montaje",
  "Jardín",
  "Otros",
];

const parseCategory = (value?: string | null): Category => {
  if (!value) return "Otros";
  return CATEGORY_OPTIONS.includes(value as Category) ? (value as Category) : "Otros";
};

const toJobStatus = (value?: string | null): JobStatus => {
  const candidate = (value ?? "").trim().toUpperCase() as JobStatus;
  return Object.values(JobStatus).includes(candidate) ? candidate : JobStatus.OPEN;
};

// UI Components
const SkeletonCard = () => (
  <div className="bg-white border border-slate-200 rounded-xl p-3 animate-pulse mb-3">
    <div className="flex gap-3">
      <div className="w-10 h-10 bg-slate-200 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-slate-200 rounded w-1/2" />
        <div className="h-2 bg-slate-200 rounded w-1/4" />
      </div>
    </div>
  </div>
);

const Toast = ({ msg, type }: { msg: string; type: "success" | "error" }) => (
  <div
    className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white text-xs font-bold animate-in slide-in-from-bottom-5 ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    }`}
  >
    {msg}
  </div>
);

const CrearEmpleoPuntualPage: React.FC = () => {
  // States
  const [form, setForm] = useState<JobPayload>({
    category: "Acompañamiento",
    zone_text: "",
    lat: null,
    lng: null,
    scheduled_date: new Date().toISOString().split("T")[0],
    scheduled_time: "12:00",
    flexible: false,
    duration_option: "2h" as DurationOption,
    budget_amount: 0,
    budget_type: "total" as BudgetType,
    requirements: [],
    description: "",
    contact_pref: "chat" as ContactPref,
    status: JobStatus.DRAFT, // ✅ enum, no string
  });

  const [helpers, setHelpers] = useState<HelperCard[]>([]);
  const [loadingHelpers, setLoadingHelpers] = useState(false);
  const [radius, setRadius] = useState<number>(3);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  const [hasVehicle, setHasVehicle] = useState(false);
  const [isFastResponder, setIsFastResponder] = useState(false);
  const [isCategoryMatch, setIsCategoryMatch] = useState(true);
  const [viewTimeMode, setViewTimeMode] = useState<"ahora" | "fecha">("ahora");
  const [isSimulatingCategoryMatch, setIsSimulatingCategoryMatch] = useState(false);

  const [invitedIds, setInvitedIds] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loadingJob, setLoadingJob] = useState(false);
  const [jobLoadError, setJobLoadError] = useState<string | null>(null);

  const autoSaveTimer = useRef<number | null>(null);
  const { jobId } = useParams<{ jobId?: string }>();
  const navigate = useNavigate();
  const isPublishingRef = useRef(false);

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    window.setTimeout(() => setToast(null), 3000);
  };

  // Form Validation
  const errors = useMemo(() => {
    const errs: Record<string, string> = {};
    if (!form.zone_text) errs.zone_text = "Zona requerida";
    if (form.budget_amount <= 0) errs.budget = "Indica presupuesto";
    if (form.description.length < 20) errs.description = "Mínimo 20 caracteres";
    return errs;
  }, [form.zone_text, form.budget_amount, form.description.length]);

  const isValid = Object.keys(errors).length === 0;

  // Helper Filtering & Distance Calculation
  const filteredHelpers = useMemo(() => {
    const list = helpers.map((h) => {
      let dist: number | undefined = undefined;

      // ✅ no uses truthy/falsy con números; usa != null
      if (form.lat != null && form.lng != null && h.lat != null && h.lng != null) {
        dist = haversineKm(form.lat, form.lng, h.lat, h.lng);
      }

      return { ...h, distanceKm: dist };
    });

    return list.filter((h) => {
      if (h.distanceKm !== undefined && h.distanceKm > radius) return false;
      return true;
    });
  }, [helpers, radius, form.lat, form.lng]);

  const availabilityStatus = useMemo(() => {
    const count = filteredHelpers.length;
    if (count >= 10)
      return {
        label: "ALTA",
        color: "bg-green-100 text-green-700",
        suggestion: "Alta disponibilidad en tu zona",
      };
    if (count >= 4)
      return {
        label: "MEDIA",
        color: "bg-yellow-100 text-yellow-700",
        suggestion: "Sugerencia: invita 2-3 helpers para confirmar",
      };
    return {
      label: "BAJA",
      color: "bg-red-100 text-red-700",
      suggestion: "Sugerencia: amplía a 5 km o marca horario flexible",
    };
  }, [filteredHelpers.length]);

  // Fetch Logic
  const loadHelpers = useCallback(async () => {
    setLoadingHelpers(true);
    const minLoadTime = new Promise((resolve) => setTimeout(resolve, 700));

    try {
      let data = await jobsService.listHelpers({
        verified: isVerifiedOnly,
        hasVehicle: hasVehicle,
        fastResponder: isFastResponder,
        category: isCategoryMatch ? form.category : null,
      });

      // Fallback Category Match
      if (isCategoryMatch && data.length === 0) {
        setIsSimulatingCategoryMatch(true);
        data = await jobsService.listHelpers({
          verified: isVerifiedOnly,
          hasVehicle: hasVehicle,
          fastResponder: isFastResponder,
          category: null,
        });
      } else {
        setIsSimulatingCategoryMatch(false);
      }

      await minLoadTime;
      setHelpers(data);
    } catch (e: any) {
      console.error("Error al cargar helpers:", e?.message || e);
      showToast("Aviso: Conectando con modo offline", "error");
    } finally {
      setLoadingHelpers(false);
    }
  }, [isVerifiedOnly, hasVehicle, isFastResponder, isCategoryMatch, form.category]);

  useEffect(() => {
    loadHelpers();
  }, [loadHelpers]);

  useEffect(() => {
    if (!jobId) {
      setJobLoadError(null);
      return;
    }

    let mounted = true;
    setLoadingJob(true);
    setJobLoadError(null);

    const loadJob = async () => {
      try {
        const job = await getJobById(jobId);
        if (!mounted) return;

        if (!job) {
          setJobLoadError("No se pudo encontrar el anuncio solicitado");
          return;
        }

        setForm((prev) => ({
          ...prev,
          id: job.id,
          category: parseCategory(job.category),
          description: job.description ?? prev.description,
          zone_text: prev.zone_text || job.neighborhood || job.district || job.city || "",
          district: job.district ?? prev.district,
          neighborhood: job.neighborhood ?? prev.neighborhood,
          city: job.city ?? prev.city,
          budget_amount: job.price_fixed ?? prev.budget_amount,
          status: toJobStatus(job.status),
        }));
      } catch (error: any) {
        if (!mounted) return;
        console.error("[CrearEmpleoPuntual] cargar job:", error);
        setJobLoadError(error?.message || "Error al cargar el anuncio");
      } finally {
        if (mounted) setLoadingJob(false);
      }
    };

    loadJob();

    return () => {
      mounted = false;
    };
  }, [jobId]);

  // Auto-save logic
  useEffect(() => {
    if (autoSaveTimer.current) window.clearInterval(autoSaveTimer.current);

    autoSaveTimer.current = window.setInterval(async () => {
      if (form.zone_text && form.category) {
        try {
          setIsSaving(true);

          const autoSaveStatus = form.status === JobStatus.OPEN ? JobStatus.OPEN : JobStatus.DRAFT;

          const jobId = await jobsService.createOrUpdateJob({
            ...form,
            status: autoSaveStatus,
          });

          setForm((prev) => ({ ...prev, id: jobId }));
          window.setTimeout(() => setIsSaving(false), 700);
        } catch {
          setIsSaving(false);
        }
      }
    }, 15000);

    return () => {
      if (autoSaveTimer.current) window.clearInterval(autoSaveTimer.current);
    };
  }, [form]);

  // Actions
  const publishOnce = useCallback(async () => {
    if (!isValid) {
      showToast("Completa todos los campos obligatorios antes de publicar.", "error");
      return;
    }

    if (isPublishingRef.current) return;
    isPublishingRef.current = true;
    setIsSaving(true);

    try {
      const jobId = await jobsService.createOrUpdateJob({
        ...form,
        status: JobStatus.OPEN,
      });

      setForm((prev) => ({ ...prev, id: jobId, status: JobStatus.OPEN }));
      setShowPreview(false);
      showToast("Anuncio publicado con éxito.", "success");
      navigate("/client/anuncios", { replace: true });
    } catch (error: any) {
      console.error("[CrearEmpleoPuntual] publicar", error);
      showToast("Error al publicar: " + (error?.message || "Servicio no disponible"), "error");
    } finally {
      isPublishingRef.current = false;
      setIsSaving(false);
    }
  }, [form, isValid, navigate]);

  const handleInvite = async (helperId: string) => {
    let jobId = form.id;

    if (!jobId) {
      try {
        jobId = await jobsService.createOrUpdateJob({ ...form, status: JobStatus.DRAFT });
        setForm((prev) => ({ ...prev, id: jobId! }));
      } catch {
        // si no puedo crear borrador, no invito
        showToast("No se pudo crear el borrador para invitar.", "error");
        return;
      }
    }

    try {
      await jobsService.sendInvite(jobId!, helperId);
      setInvitedIds((prev) => new Set(prev).add(helperId));
      showToast("Invitación enviada", "success");
    } catch {
      showToast("Error al enviar invitación", "error");
    }
  };

  const useLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((prev) => ({
          ...prev,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          zone_text: prev.zone_text || "Ubicación detectada",
        }));
        showToast("Ubicación actualizada", "success");
      },
      () => showToast("Permiso de ubicación denegado", "error")
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen pb-10">
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-tight">Publicar trabajo puntual</h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">YaVoy Express</p>
        </div>
        <div className="flex items-center gap-3">
          {isSaving && (
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
              <Loader2 size={12} className="animate-spin" /> GUARDANDO...
            </div>
          )}
          <div className="hidden sm:flex items-center gap-1 text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">
            <CheckCircle2 size={12} /> BORRADOR ACTIVO
          </div>
        </div>
      </header>
      {jobId && jobLoadError && (
        <div className="mx-auto max-w-[1400px] px-6 py-2 text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-b-xl">
          {jobLoadError}
        </div>
      )}
      {jobId && loadingJob && (
        <div className="mx-auto max-w-[1400px] px-6 py-2 text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-b-xl">
          Cargando anuncio anterior...
        </div>
      )}

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-6">
        {/* Formulario Izquierda */}
        <div className="flex-1 lg:max-w-[62%]">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              publishOnce();
            }}
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Categoria */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Categoría</label>
                  <select
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/10"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
                  >
                    {["Acompañamiento", "Limpieza", "Mudanza", "Recados", "Mascotas", "Montaje", "Jardín", "Otros"].map(
                      (c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Zona */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Zona (Barrio o CP)</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ej: Chamberí"
                      className={`w-full text-sm bg-slate-50 border rounded-lg pl-3 pr-10 py-2 outline-none focus:ring-2 focus:ring-indigo-500/10 ${
                        errors.zone_text ? "border-red-300" : "border-slate-200"
                      }`}
                      value={form.zone_text}
                      onChange={(e) => setForm({ ...form, zone_text: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={useLocation}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      <MapPin size={16} />
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-400">Usamos ubicación aproximada para mostrar helpers cercanos.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fecha/Hora */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">¿Cuándo?</label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-lg px-2 py-2"
                      value={form.scheduled_date}
                      onChange={(e) => setForm({ ...form, scheduled_date: e.target.value })}
                    />
                    <input
                      type="time"
                      className="w-24 text-sm bg-slate-50 border border-slate-200 rounded-lg px-2 py-2"
                      value={form.scheduled_time}
                      onChange={(e) => setForm({ ...form, scheduled_time: e.target.value })}
                    />
                  </div>
                  <label className="flex items-center gap-2 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.flexible}
                      onChange={(e) => setForm({ ...form, flexible: e.target.checked })}
                      className="w-3.5 h-3.5 accent-indigo-600"
                    />
                    <span className="text-[11px] text-slate-500 font-medium">Horario flexible (±2h)</span>
                  </label>
                </div>

                {/* Duración */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Duración estimada</label>
                  <div className="flex flex-wrap gap-1">
                    {["1h", "2h", "3h", "media_jornada", "jornada"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setForm({ ...form, duration_option: d as DurationOption })}
                        className={`text-[10px] px-2.5 py-1.5 rounded-lg border font-bold transition-all ${
                          form.duration_option === d
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-white border-slate-200 text-slate-500"
                        }`}
                      >
                        {d.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Presupuesto */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Presupuesto</label>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Euro size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="number"
                      className={`w-28 text-sm pl-8 pr-3 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500/10 font-bold ${
                        errors.budget ? "border-red-300" : "border-slate-200"
                      }`}
                      value={form.budget_amount}
                      onChange={(e) => setForm({ ...form, budget_amount: parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    {["total", "hora"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, budget_type: t as BudgetType })}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md capitalize transition-all ${
                          form.budget_type === t ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 italic">“A mayor urgencia, mayor respuesta”</span>
                </div>
              </div>

              {/* Requisitos */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Requisitos adicionales</label>
                <div className="flex flex-wrap gap-2">
                  {["Verificado", "Con vehículo", "Herramientas", "Fuerza física", "Experiencia", "Idiomas"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => {
                        const newReqs = form.requirements.includes(r)
                          ? form.requirements.filter((it) => it !== r)
                          : [...form.requirements, r];
                        setForm({ ...form, requirements: newReqs });
                      }}
                      className={`text-[10px] px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                        form.requirements.includes(r)
                          ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                          : "bg-white border-slate-200 text-slate-600"
                      }`}
                    >
                      {r === "Verificado" && <UserCheck size={12} />}
                      {r === "Con vehículo" && <Car size={12} />}
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Descripcion */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Descripción detallada</label>
                <textarea
                  className={`w-full text-sm bg-slate-50 border rounded-xl px-3 py-2 h-24 outline-none focus:ring-2 focus:ring-indigo-500/10 resize-none ${
                    errors.description ? "border-red-200" : "border-slate-200"
                  }`}
                  placeholder="Detalla las tareas a realizar..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
                <div className="flex justify-between">
                  <p className={`text-[9px] ${form.description.length < 20 ? "text-red-500" : "text-slate-400"}`}>
                    {form.description.length < 20
                      ? `${20 - form.description.length} caracteres más requeridos`
                      : `Correcto`}
                  </p>
                  <p className="text-[9px] text-slate-400">Máx 500 carac.</p>
                </div>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={!isValid}
                className={`flex-[2] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isValid
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100 scale-100 hover:scale-[1.01]"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                Publicar anuncio ahora <ChevronRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="flex-1 bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Eye size={18} /> Vista previa
              </button>
            </div>
          </form>
        </div>

        {/* Panel Helpers Derecha */}
        <div className="w-full lg:w-[38%]">
          <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm sticky top-20 overflow-hidden">
            {/* Cabecera Helpers */}
            <div className="bg-slate-50 p-4 border-b border-slate-200">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  Helpers cerca <Info size={14} className="text-slate-400 cursor-help" />
                </h2>
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${availabilityStatus.color}`}>
                  {availabilityStatus.label}
                </div>
              </div>

              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-4">
                {availabilityStatus.suggestion}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-600">Filtro de radio:</span>
                  <div className="flex bg-white border border-slate-200 rounded-lg p-0.5 overflow-hidden">
                    {[1, 3, 5, 10].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRadius(r)}
                        className={`px-2 py-1 text-[10px] font-bold transition-all ${
                          radius === r ? "bg-indigo-600 text-white shadow-sm" : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        {r}km
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 bg-slate-200/50 p-1 rounded-xl gap-1">
                  <button
                    type="button"
                    onClick={() => setViewTimeMode("ahora")}
                    className={`py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                      viewTimeMode === "ahora" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
                    }`}
                  >
                    Ahora
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewTimeMode("fecha")}
                    className={`py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                      viewTimeMode === "fecha" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
                    }`}
                  >
                    Para esta fecha
                  </button>
                </div>
              </div>
            </div>

            {/* Microfiltros */}
            <div className="p-4 border-b border-slate-100 flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: "Verificados", state: isVerifiedOnly, set: setIsVerifiedOnly },
                { label: "Vehículo", state: hasVehicle, set: setHasVehicle },
                { label: "Rápidos", state: isFastResponder, set: setIsFastResponder },
                { label: "Categoría", state: isCategoryMatch, set: setIsCategoryMatch },
              ].map((f) => (
                <label key={f.label} className="flex items-center gap-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={f.state}
                    onChange={(e) => f.set(e.target.checked)}
                    className="w-3 h-3 accent-indigo-600"
                  />
                  <span className="text-[10px] font-medium text-slate-500 group-hover:text-slate-800">
                    {f.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Listado Helpers */}
            <div className="p-4 max-h-[480px] overflow-y-auto custom-scrollbar">
              {isSimulatingCategoryMatch && (
                <div className="mb-4 bg-orange-50 border border-orange-100 p-2 rounded-lg flex items-start gap-2">
                  <AlertCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-[9px] text-orange-700 font-medium">
                    No hay helpers exactos en tu categoría, mostramos perfiles similares cercanos.
                  </p>
                </div>
              )}

              {loadingHelpers ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : filteredHelpers.length > 0 ? (
                <div className="space-y-3">
                  {filteredHelpers.map((h) => (
                    <div
                      key={h.helper_user_id}
                      className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <img
                            src={h.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(h.display_name)}`}
                            className="w-10 h-10 rounded-full border border-slate-50 object-cover"
                            alt={h.display_name}
                          />
                          <span
                            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full ${
                              h.status === "available" ? "bg-green-500" : "bg-red-400"
                            }`}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-[11px] font-bold text-slate-800 truncate flex items-center gap-1">
                                {h.display_name} {h.verified && <UserCheck size={12} className="text-blue-500" />}
                              </h4>
                              <p className="text-[9px] text-slate-500 flex items-center gap-1 mt-0.5">
                                <MapPin size={10} />{" "}
                                {h.distanceKm !== undefined ? `${h.distanceKm} km` : "—"} • Activo hace{" "}
                                {h.last_active_min_ago}m
                              </p>
                            </div>
                            <div className="flex items-center gap-0.5 bg-yellow-50 px-1 py-0.5 rounded text-[10px] font-bold text-yellow-700">
                              <Star size={10} fill="currentColor" /> {h.rating}
                            </div>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-1">
                            {h.skills.slice(0, 2).map((sk) => (
                              <span
                                key={sk}
                                className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase font-bold"
                              >
                                {sk}
                              </span>
                            ))}
                          </div>

                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              disabled={invitedIds.has(h.helper_user_id)}
                              onClick={() => handleInvite(h.helper_user_id)}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                                invitedIds.has(h.helper_user_id)
                                  ? "bg-green-50 text-green-600 cursor-default"
                                  : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-100"
                              }`}
                            >
                              {invitedIds.has(h.helper_user_id) ? "Invitado ✓" : "Invitar"}
                            </button>
                            <button
                              type="button"
                              className="px-2.5 py-1.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                              <Search size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center px-4">
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 border border-red-100 flex flex-col items-center gap-1">
                    <ArrowRight className="rotate-45" size={20} />
                    <p className="text-[10px] font-bold">Sin resultados cercanos</p>
                    <p className="text-[9px] opacity-75 leading-tight">
                      Prueba ampliando el radio a 10km o desactivando filtros.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRadius(10)}
                    className="text-[10px] font-bold text-indigo-600 hover:underline underline-offset-4"
                  >
                    Ampliar a 10km automáticamente
                  </button>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-200">
              <p className="text-[9px] text-slate-400 italic">
                La disponibilidad es aproximada y depende del consentimiento de ubicación del helper.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h3 className="text-xl font-bold">Vista previa del anuncio</h3>
              <p className="text-xs opacity-80 mt-1">Revisa cómo lo verán los helpers antes de publicar.</p>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full">
                    {form.category.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">{form.zone_text || "Zona sin definir"}</h2>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-indigo-600">{form.budget_amount}€</p>
                  <p className="text-[10px] text-slate-400 font-bold">
                    PRESUPUESTO {form.budget_type.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-2xl flex items-center gap-3">
                  <Calendar size={18} className="text-indigo-500" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Fecha</p>
                    <p className="text-sm font-bold">{form.scheduled_date}</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl flex items-center gap-3">
                  <Clock size={18} className="text-indigo-500" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Hora</p>
                    <p className="text-sm font-bold">
                      {form.scheduled_time} {form.flexible ? "(±2h)" : ""}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Descripción del trabajo</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
                  {form.description || "Sin descripción proporcionada..."}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Requisitos solicitados</h4>
                <div className="flex flex-wrap gap-2">
                  {form.requirements.length > 0 ? (
                    form.requirements.map((r) => (
                      <span
                        key={r}
                        className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 font-bold"
                      >
                        {r}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400">Ninguno especificado</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex gap-3">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
              >
                Seguir editando
              </button>
              <button
                type="button"
                onClick={() => {
                  publishOnce();
                }}
                className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-colors"
              >
                Confirmar y publicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrearEmpleoPuntualPage;
