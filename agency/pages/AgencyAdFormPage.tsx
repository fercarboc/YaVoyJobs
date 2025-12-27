import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import {
  addHousingImages,
  createHousingAd,
  deleteHousingImage,
  getHousingAdById,
  listHousingImages,
  reorderHousingImages,
  updateHousingAd,
} from "../services/agencyApi";
import { HousingAd, HousingAdStatus, HousingImage, HousingAdType } from "../types/agency";

type FormState = Partial<HousingAd> & { price_unit?: "month" | "week" };

const defaults: FormState = {
  title: "",
  description: "",
  ad_type: "FULL_APARTMENT",
  price: 0,
  price_unit: "month",
  deposit: 0,
  min_stay: "",
  furnished: false,
  bills_included: false,
  available_from: "",
  city: "",
  district: "",
  neighborhood: "",
  address_hint: "",
  contact_phone: "",
  contact_email: "",
  status: "ACTIVE",
};

const AgencyAdFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const editing = Boolean(id);
  const [form, setForm] = useState<FormState>(defaults);
  const [loading, setLoading] = useState(editing);
  const [existingImages, setExistingImages] = useState<HousingImage[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!editing || !id) return;
      setLoading(true);
      const ad = await getHousingAdById(id);
      setForm({ ...ad, price_unit: ad.price_unit as any });
      const imgs = await listHousingImages(id);
      setExistingImages(imgs);
      setLoading(false);
    };
    load();
  }, [editing, id]);

  const onChange = (key: keyof FormState, value: any) => setForm((f) => ({ ...f, [key]: value }));
  const barrioOptions = useMemo(() => [], []); // placeholder for dependent selects

  const handleAddFiles = (files: File[]) => {
    const merged = [...newFiles, ...files].slice(0, 10);
    setNewFiles(merged);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.price || form.price <= 0) {
      alert("Título y precio son obligatorios");
      return;
    }
    let adId = id;
    if (editing && id) {
      await updateHousingAd(id, form as HousingAd);
    } else {
      const created = await createHousingAd(form as HousingAd);
      adId = created.id;
    }

    if (adId && newFiles.length) {
      await addHousingImages(adId, newFiles);
    }

    if (adId && existingImages.length) {
      await reorderHousingImages(
        adId,
        existingImages.map((i) => i.id)
      );
    }

    alert("Guardado");
    navigate("/agency/ads");
  };

  const moveExisting = (idx: number, dir: -1 | 1) => {
    setExistingImages((prev) => {
      const next = [...prev];
      const t = idx + dir;
      if (t < 0 || t >= next.length) return prev;
      [next[idx], next[t]] = [next[t], next[idx]];
      return next;
    });
  };

  const moveNew = (idx: number, dir: -1 | 1) => {
    setNewFiles((prev) => {
      const next = [...prev];
      const t = idx + dir;
      if (t < 0 || t >= next.length) return prev;
      [next[idx], next[t]] = [next[t], next[idx]];
      return next;
    });
  };

  const removeExisting = async (img: HousingImage) => {
    if (!id) return;
    if (!confirm("¿Borrar imagen?")) return;
    await deleteHousingImage(img);
    setExistingImages((prev) => prev.filter((i) => i.id !== img.id));
  };

  const removeNew = (idx: number) => setNewFiles((prev) => prev.filter((_, i) => i !== idx));

  if (loading) return <div className="p-4 text-sm text-gray-500">Cargando...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{editing ? "Editar anuncio" : "Nuevo anuncio"}</h1>
          <p className="text-sm text-gray-600">Completa los datos del inmueble.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/agency/ads")}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full"
        >
          Cancelar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
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
            <span className="text-sm font-semibold text-gray-700">Tipo</span>
            <select
              value={form.ad_type}
              onChange={(e) => onChange("ad_type", e.target.value as HousingAdType)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            >
              <option value="ROOM">Habitación</option>
              <option value="FULL_APARTMENT">Piso completo</option>
            </select>
          </label>
        </div>

        <label className="space-y-1 block">
          <span className="text-sm font-semibold text-gray-700">Descripción</span>
          <textarea
            value={form.description}
            onChange={(e) => onChange("description", e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            rows={5}
          />
        </label>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Precio</span>
            <input
              type="number"
              value={form.price ?? 0}
              onChange={(e) => onChange("price", Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Unidad</span>
            <select
              value={form.price_unit}
              onChange={(e) => onChange("price_unit", e.target.value as "month" | "week")}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            >
              <option value="month">Mes</option>
              <option value="week">Semana</option>
            </select>
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Depósito</span>
            <input
              type="number"
              value={form.deposit ?? 0}
              onChange={(e) => onChange("deposit", Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Estancia mínima</span>
            <input
              value={form.min_stay || ""}
              onChange={(e) => onChange("min_stay", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Disponible desde</span>
            <input
              type="date"
              value={form.available_from || ""}
              onChange={(e) => onChange("available_from", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Estado</span>
            <select
              value={form.status}
              onChange={(e) => onChange("status", e.target.value as HousingAdStatus)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            >
              <option value="ACTIVE">Activo</option>
              <option value="PAUSED">Pausado</option>
            </select>
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Ciudad</span>
            <input
              value={form.city || ""}
              onChange={(e) => onChange("city", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Distrito</span>
            <input
              value={form.district || ""}
              onChange={(e) => onChange("district", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Barrio</span>
            <input
              value={form.neighborhood || ""}
              onChange={(e) => onChange("neighborhood", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Referencia dirección</span>
            <input
              value={form.address_hint || ""}
              onChange={(e) => onChange("address_hint", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={form.furnished || false}
              onChange={(e) => onChange("furnished", e.target.checked)}
              className="rounded border-gray-300"
            />
            Amueblado
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={form.bills_included || false}
              onChange={(e) => onChange("bills_included", e.target.checked)}
              className="rounded border-gray-300"
            />
            Gastos incluidos
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Teléfono de contacto</span>
            <input
              value={form.contact_phone || ""}
              onChange={(e) => onChange("contact_phone", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Email de contacto</span>
            <input
              type="email"
              value={form.contact_email || ""}
              onChange={(e) => onChange("contact_email", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
        </div>

        <ImageUploader
          existing={existingImages}
          newFiles={newFiles}
          onAddFiles={handleAddFiles}
          onRemoveExisting={removeExisting}
          onRemoveNew={removeNew}
          onMoveExisting={moveExisting}
          onMoveNew={moveNew}
        />

        <div className="flex justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={() => navigate("/agency/ads")}
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
      </form>
    </div>
  );
};

export default AgencyAdFormPage;
