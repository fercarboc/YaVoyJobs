import React, { useMemo, useState, useEffect } from "react";
import { X, MapPin, Layers, Clock, Shield, AlertCircle } from "lucide-react";
import { JobPanel, JobType } from "../dashboardTypes";

const YA_VOY_BLUE = "#0056b3";

const DISTRICTS = ["Usera", "Arganzuela", "Carabanchel", "Chamberí", "Tetuán", "Salamanca"] as const;
const NEIGHBORHOODS_BY_DISTRICT: Record<string, string[]> = {
  Usera: ["San Fermín", "Almendrales", "Orcasitas"],
  Arganzuela: ["Delicias", "Legazpi", "Chopera"],
  Carabanchel: ["Abrantes", "Vista Alegre", "Opañel"],
  Chamberí: ["Trafalgar", "Ríos Rosas", "Arapiles", "Gaztambide"],
  Tetuán: ["Bellas Vistas", "Cuatro Caminos", "Castillejos"],
  Salamanca: ["Goya", "Lista", "Recoletos"],
};

const CATEGORIES = ["Pasear mascota", "Limpieza", "Mudanza", "Fontanería", "Jardín", "Reparto", "Reparaciones"] as const;

type Mode = "create" | "edit";

type Props = {
  open: boolean;
  onClose: () => void;

  // create
  onCreate: (job: JobPanel) => void;

  // edit (optional)
  mode?: Mode;
  initial?: JobPanel | null;
  onUpdate?: (job: JobPanel) => void;
};

type Errors = Partial<Record<keyof JobPanel, string>> & { durationHours?: string; type?: string };

export const CreateJobModal: React.FC<Props> = ({
  open,
  onClose,
  onCreate,
  mode = "create",
  initial = null,
  onUpdate,
}) => {
  const isEdit = mode === "edit";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number] | "">("");
  const [district, setDistrict] = useState<(typeof DISTRICTS)[number] | "">("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState<JobType | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [durationHours, setDurationHours] = useState<number | "">("");
  const [insuranceRequired, setInsuranceRequired] = useState(true);
  const [urgent, setUrgent] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [flexible, setFlexible] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prefill form when editing (or when initial changes)
  useEffect(() => {
    if (!open) return;

    if (isEdit && initial) {
      setTitle(initial.title ?? "");
      setDescription(initial.description ?? "");
      setCategory((initial.category as any) ?? "");
      setDistrict((initial.district as any) ?? "");
      setNeighborhood(initial.neighborhood ?? "");
      setAddress(initial.address ?? "");
      setType((initial.type as any) ?? "");
      setPrice(typeof initial.price === "number" ? initial.price : "");
      setDurationHours(typeof initial.durationHours === "number" ? initial.durationHours : "");
      setInsuranceRequired(Boolean(initial.insuranceRequired));
      setUrgent(Boolean(initial.urgent));

      // flexible logic (if no date/time -> assume flexible)
      const hasDate = Boolean(initial.startDate);
      const hasTime = Boolean(initial.startTime);
      const isFlex = !hasDate && !hasTime;
      setFlexible(isFlex);
      setStartDate(initial.startDate ?? "");
      setStartTime(initial.startTime ?? "");

      setErrors({});
      return;
    }

    // Create mode -> reset clean each open
    if (!isEdit) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, isEdit, initial?.id]);

  const neighborhoods = useMemo(() => {
    if (!district) return [];
    return NEIGHBORHOODS_BY_DISTRICT[district] ?? [];
  }, [district]);

  const summary = useMemo(() => {
    if (type === "horas" && price && durationHours) {
      return `Estimado: €${(Number(price) * Number(durationHours)).toFixed(2)} (${price} €/h x ${durationHours}h)`;
    }
    if (type === "fijo" && price) {
      return `Total: €${Number(price).toFixed(2)}`;
    }
    return "Completa los campos para ver el estimado.";
  }, [type, price, durationHours]);

  const validate = () => {
    const next: Errors = {};
    if (!title.trim()) next.title = "Título requerido";
    if (!description.trim()) next.description = "Descripción requerida";
    if (!category) next.category = "Selecciona sector";
    if (!district) next.district = "Selecciona distrito";
    if (!neighborhood) next.neighborhood = "Selecciona barrio";
    if (!type) next.type = "Selecciona modalidad";
    if (!price || Number(price) <= 0) next.price = "Precio > 0";
    if (type === "horas" && (!durationHours || Number(durationHours) <= 0)) next.durationHours = "Horas requeridas";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setDistrict("");
    setNeighborhood("");
    setAddress("");
    setType("");
    setPrice("");
    setDurationHours("");
    setInsuranceRequired(true);
    setUrgent(false);
    setStartDate("");
    setStartTime("");
    setFlexible(false);
    setErrors({});
  };

  const buildPayload = () => {
    const now = new Date();
    const id =
      isEdit && initial?.id
        ? initial.id
        : "YV-" + Math.floor(10000 + Math.random() * 90000);

    const job: JobPanel = {
      id,
      title: title.trim(),
      description: description.trim(),
      category: category as string,
      district: district as string,
      neighborhood,
      address: address || undefined,
      startDate: flexible ? undefined : startDate || undefined,
      startTime: flexible ? undefined : startTime || undefined,
      durationHours: type === "horas" ? Number(durationHours) : undefined,
      type: type as JobType,
      price: Number(price),
      insuranceRequired,
      urgent,
      status: isEdit ? (initial?.status ?? "Abierto") : "Abierto",
      createdAt: isEdit ? (initial?.createdAt ?? now.toISOString()) : now.toISOString(),
      applicantsCount: isEdit ? (initial?.applicantsCount ?? 0) : 0,
      assignedTo: isEdit ? initial?.assignedTo : undefined,
    };

    return job;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const job = buildPayload();

    if (isEdit) {
      if (!onUpdate) {
        console.warn("CreateJobModal in edit mode but no onUpdate provided");
        return;
      }
      onUpdate(job);
      onClose();
      return;
    }

    onCreate(job);
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl p-6 border border-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-slate-500">{isEdit ? "Editar anuncio" : "Nuevo anuncio"}</p>
            <h3 className="text-xl font-bold text-slate-900">{isEdit ? "Modificar trabajo" : "Publicar trabajo"}</h3>
          </div>
          <button onClick={onClose}>
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            {/* Info */}
            <Section title="Información del trabajo">
              <Field
                label="Título"
                value={title}
                onChange={setTitle}
                placeholder="Ej: Pintura de piso 80m2"
                error={errors.title}
              />
              <Field
                label="Descripción"
                value={description}
                onChange={setDescription}
                placeholder="Describe tareas, materiales, accesos..."
                textarea
                error={errors.description}
              />
              <SelectField
                label="Sector / Categoría"
                value={category}
                onChange={(v) => setCategory(v as any)}
                options={CATEGORIES}
                placeholder="Selecciona categoría"
                error={errors.category}
              />
              <Toggle label="Urgente" checked={urgent} onChange={setUrgent} />
            </Section>

            {/* Ubicación */}
            <Section title="Ubicación">
              <SelectField
                label="Distrito"
                value={district}
                onChange={(v) => {
                  setDistrict(v as any);
                  // Si cambia distrito, resetea barrio si no coincide
                  setNeighborhood("");
                }}
                options={DISTRICTS}
                placeholder="Selecciona distrito"
                error={errors.district}
              />
              <SelectField
                label="Barrio"
                value={neighborhood}
                onChange={setNeighborhood}
                options={district ? neighborhoods : []}
                placeholder={district ? "Selecciona barrio" : "Selecciona distrito primero"}
                disabled={!district}
                error={errors.neighborhood}
              />
              <Field
                label="Dirección (opcional)"
                value={address}
                onChange={setAddress}
                placeholder="Calle y nº (opcional)"
              />
            </Section>

            {/* Precio */}
            <Section title="Precio y modalidad">
              <SelectField
                label="Tipo de precio"
                value={type}
                onChange={(v) => setType(v as JobType)}
                options={["horas", "fijo"]}
                placeholder="Elige modalidad"
                error={errors.type}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field
                  label="Precio (€)"
                  value={price === "" ? "" : String(price)}
                  onChange={(v) => setPrice(v ? Number(v) : "")}
                  placeholder="Ej: 20"
                  type="number"
                  error={errors.price}
                />
                {type === "horas" && (
                  <Field
                    label="Duración estimada (h)"
                    value={durationHours === "" ? "" : String(durationHours)}
                    onChange={(v) => setDurationHours(v ? Number(v) : "")}
                    placeholder="Ej: 4"
                    type="number"
                    error={errors.durationHours}
                  />
                )}
              </div>
              <Toggle label="Requiere seguro" checked={insuranceRequired} onChange={setInsuranceRequired} />
              <div className="text-xs text-slate-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                {summary}
              </div>
            </Section>

            {/* Fecha */}
            <Section title="Fecha / disponibilidad">
              <Toggle label="Flexible (a convenir)" checked={flexible} onChange={setFlexible} />
              {!flexible && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Field label="Fecha inicio" value={startDate} onChange={setStartDate} type="date" />
                  <Field label="Hora inicio" value={startTime} onChange={setStartTime} type="time" />
                </div>
              )}
            </Section>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-3">
            <p className="text-sm font-bold text-slate-900">Vista previa</p>
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-900">{title || "Título del trabajo"}</p>
                <span className="text-[11px] px-2 py-1 rounded-full bg-blue-50 text-[#0056b3] font-bold">
                  {type || "Tipo"}
                </span>
              </div>

              <p className="text-xs text-slate-500 line-clamp-3">{description || "Descripción corta..."}</p>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin size={12} /> {district || "Distrito"} · {neighborhood || "Barrio"}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Layers size={12} /> {category || "Categoría"}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock size={12} />{" "}
                {type === "horas" && durationHours
                  ? `${durationHours}h`
                  : type === "fijo"
                  ? "Precio fijo"
                  : "Duración"}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Shield size={12} className={insuranceRequired ? "text-emerald-600" : "text-gray-400"} />{" "}
                {insuranceRequired ? "Requiere seguro" : "Seguro opcional"}
              </div>

              <div className="text-sm font-extrabold text-slate-900">
                {price ? `€${price}${type === "horas" ? "/h" : ""}` : "Precio"}
              </div>

              {urgent && (
                <div className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2 py-1 inline-block">
                  Urgente
                </div>
              )}
            </div>
          </div>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="flex items-center gap-2 text-xs text-red-600 mt-2">
            <AlertCircle size={14} /> Revisa los campos marcados en rojo.
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 text-slate-700 hover:bg-gray-50"
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            disabled={
              !title ||
              !description ||
              !category ||
              !district ||
              !neighborhood ||
              !type ||
              !price ||
              (type === "horas" && !durationHours)
            }
            className="px-5 py-2 rounded-xl text-sm font-bold text-white disabled:opacity-60"
            style={{ background: YA_VOY_BLUE }}
          >
            {isEdit ? "Guardar cambios" : "Publicar anuncio"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-2">
    <p className="text-sm font-bold text-slate-900">{title}</p>
    <div className="grid grid-cols-1 gap-3">{children}</div>
  </div>
);

const Field: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  type?: string;
  error?: string;
}> = ({ label, value, onChange, placeholder, textarea, type = "text", error }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className={`border rounded-xl px-3 py-2 text-sm ${
          error ? "border-red-300" : "border-gray-200"
        } focus:ring-2 focus:ring-blue-100`}
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border rounded-xl px-3 py-2 text-sm ${
          error ? "border-red-300" : "border-gray-200"
        } focus:ring-2 focus:ring-blue-100`}
      />
    )}
    {error && <span className="text-[11px] text-red-600">{error}</span>}
  </label>
);

const SelectField: React.FC<{
  label: string;
  value: string | "";
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}> = ({ label, value, onChange, options, placeholder, disabled, error }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`border rounded-xl px-3 py-2 text-sm bg-white ${
        error ? "border-red-300" : "border-gray-200"
      } ${disabled ? "bg-gray-50" : ""}`}
    >
      <option value="">{placeholder || "Selecciona"}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <span className="text-[11px] text-red-600">{error}</span>}
  </label>
);

const Toggle: React.FC<{ label: string; checked: boolean; onChange: (v: boolean) => void }> = ({
  label,
  checked,
  onChange,
}) => (
  <label className="flex items-center gap-2 text-sm text-slate-700">
    <input
      type="checkbox"
      className="h-4 w-4"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    {label}
  </label>
);

export default CreateJobModal;
