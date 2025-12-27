import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { AgencyAd } from "../types/agency.types";
import { createAd, listAgencyAds, updateAd } from "../services/agency.service";

const districts = ["Arganzuela", "Usera", "Carabanchel", "Centro", "Chamartín", "Retiro"];
const neighborhoods: Record<string, string[]> = {
  Arganzuela: ["Delicias", "Legazpi"],
  Usera: ["Moscardó", "Zofío"],
  Carabanchel: ["Opañel", "Comillas"],
  Centro: ["Sol", "Malasaña"],
  Chamartín: ["Prosperidad", "Hispanoamérica"],
  Retiro: ["Ibiza", "Pacífico"],
};

const emptyAd: Omit<AgencyAd, "id" | "createdAt"> = {
  title: "",
  description: "",
  district: "",
  neighborhood: "",
  type: "Piso",
  price: 0,
  priceUnit: "mes",
  deposit: 0,
  minStay: "",
  furnished: false,
  billsIncluded: false,
  availableFrom: "",
  contactPhone: "",
  contactEmail: "",
  status: "Activo",
  images: [],
};

const AdForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const editing = Boolean(id);
  const [form, setForm] = useState<Omit<AgencyAd, "id" | "createdAt">>(emptyAd);

  useEffect(() => {
    if (editing && id) {
      const ad = listAgencyAds().find((a) => a.id === id);
      if (ad) {
        const { createdAt, id: _, ...rest } = ad;
        setForm(rest);
      }
    }
  }, [editing, id]);

  const barrioOptions = useMemo(() => neighborhoods[form.district] || [], [form.district]);

  const onChange = (key: keyof typeof form, value: any) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.district || !form.neighborhood) {
      alert("Completa título, distrito y barrio");
      return;
    }
    if (editing && id) {
      updateAd(id, form as any);
    } else {
      createAd(form as any);
    }
    navigate("/alquiler/agencia/anuncios");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{editing ? "Editar anuncio" : "Nuevo anuncio"}</h2>
          <p className="text-sm text-gray-500">Completa la información del anuncio.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2 rounded-full border border-gray-200"
        >
          Cancelar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="space-y-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Título</span>
            <input
              value={form.title}
              onChange={(e) => onChange("title", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              required
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Descripción</span>
            <textarea
              value={form.description}
              onChange={(e) => onChange("description", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              rows={5}
              required
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Distrito</span>
              <select
                value={form.district}
                onChange={(e) => onChange("district", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
                required
              >
                <option value="">Seleccionar</option>
                {districts.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Barrio</span>
              <select
                value={form.neighborhood}
                onChange={(e) => onChange("neighborhood", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
                required
              >
                <option value="">Seleccionar</option>
                {barrioOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Tipo</span>
              <select
                value={form.type}
                onChange={(e) => onChange("type", e.target.value as any)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              >
                <option>Habitación</option>
                <option>Piso</option>
              </select>
            </label>

            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Estado</span>
              <select
                value={form.status}
                onChange={(e) => onChange("status", e.target.value as any)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              >
                <option>Activo</option>
                <option>Pausado</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Precio</span>
              <input
                type="number"
                value={form.price}
                onChange={(e) => onChange("price", Number(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Unidad</span>
              <select
                value={form.priceUnit}
                onChange={(e) => onChange("priceUnit", e.target.value as any)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              >
                <option value="mes">Mes</option>
                <option value="semana">Semana</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Fianza</span>
              <input
                type="number"
                value={form.deposit ?? 0}
                onChange={(e) => onChange("deposit", Number(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Estancia mínima</span>
              <input
                value={form.minStay}
                onChange={(e) => onChange("minStay", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Disponible desde</span>
              <input
                type="date"
                value={form.availableFrom}
                onChange={(e) => onChange("availableFrom", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Metros (opcional)</span>
              <input
                type="number"
                value={form.sqm ?? ""}
                onChange={(e) => onChange("sqm" as any, e.target.value ? Number(e.target.value) : undefined)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={form.furnished}
                onChange={(e) => onChange("furnished", e.target.checked)}
                className="rounded border-gray-300"
              />
              Amueblado
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={form.billsIncluded}
                onChange={(e) => onChange("billsIncluded", e.target.checked)}
                className="rounded border-gray-300"
              />
              Gastos incluidos
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <ImageUploader images={form.images} onChange={(imgs) => onChange("images", imgs)} />

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Teléfono (opcional)</span>
              <input
                value={form.contactPhone}
                onChange={(e) => onChange("contactPhone", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
            <label className="space-y-1 block">
              <span className="text-sm font-semibold text-gray-700">Email (opcional)</span>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => onChange("contactEmail", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-200 rounded-full text-sm font-semibold text-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdForm;
