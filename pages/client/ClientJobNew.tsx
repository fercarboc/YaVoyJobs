import React, { useState } from "react";
import { createJob } from "@/services/jobs.service";

const ClientJobNew: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    salary: "",
    job_type: "ONE_OFF",
    location: "",
  });
  const [saving, setSaving] = useState(false);

  const onChange = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    try {
      setSaving(true);
      const salaryNumber = Number(form.salary);
      await createJob({
        title: form.title,
        description: form.description,
        category: "GENERAL",
        job_type: form.job_type,
        price_fixed: Number.isFinite(salaryNumber) ? salaryNumber : null,
        price_hourly: null,
        district: form.location || null,
        neighborhood: null,
      });
      alert("Oferta creada");
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "No se pudo crear la oferta");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Crear nueva oferta</h1>
        <p className="text-sm text-gray-600">Publica una oferta de empleo (se guarda en Supabase).</p>
      </div>

      <form className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Título</span>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ej. Dependiente/a de tienda"
              value={form.title}
              onChange={(e) => onChange("title", e.target.value)}
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Salario</span>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ej. 18.000 €/año"
              value={form.salary}
              onChange={(e) => onChange("salary", e.target.value)}
            />
          </label>
        </div>

        <label className="space-y-1 block">
          <span className="text-sm font-semibold text-gray-700">Descripción</span>
          <textarea
            className="w-full border rounded-lg px-3 py-2 text-sm"
            rows={4}
            placeholder="Funciones y responsabilidades"
            value={form.description}
            onChange={(e) => onChange("description", e.target.value)}
          />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Jornada</span>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={form.job_type}
              onChange={(e) => onChange("job_type", e.target.value)}
            >
              <option value="ONE_OFF">Servicio puntual</option>
              <option value="HOURLY">Por horas</option>
            </select>
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Ubicación</span>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ciudad / barrio"
              value={form.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {saving ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientJobNew;
