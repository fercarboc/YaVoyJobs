import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import {
  addHousingImages,
  deleteHousingImage,
  getHousingAdById,
  listHousingImages,
  reorderHousingImages,
  createHousingAd,
  updateHousingAd,
  listDistricts,
  listNeighborhoods,
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

function validateFiles(files: File[]) {
  const valid: File[] = [];
  const invalid: File[] = [];
  for (const f of files) {
    // algunos navegadores pueden traer type vacío; validamos por extensión también
    const byType = /image\/(jpeg|jpg|png|webp)$/i.test(f.type || "");
    const byExt = /\.(jpe?g|png|webp)$/i.test(f.name || "");
    if (byType || byExt) valid.push(f);
    else invalid.push(f);
  }
  return { valid, invalid };
}

const AgencyAdFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [adIdState, setAdIdState] = useState<string | null>(id ?? null);
  const editing = Boolean(adIdState);

  const [form, setForm] = useState<FormState>(defaults);
  const [loading, setLoading] = useState<boolean>(Boolean(id));
  const [saving, setSaving] = useState<boolean>(false);

  const [existingImages, setExistingImages] = useState<HousingImage[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);

  const [districts, setDistricts] = useState<{ id: string; name: string }[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<{ id: string; name: string }[]>([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [loadingGeo, setLoadingGeo] = useState(false);

  // 1) Cargar anuncio si edit
  useEffect(() => {
    const load = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const ad = await getHousingAdById(id);
        setForm({ ...ad, price_unit: (ad.price_unit as any) ?? "month" });
        const imgs = await listHousingImages(id);
        setExistingImages(imgs);
        setAdIdState(id);
      } catch (e) {
        console.error("[AgencyAdFormPage] load ad error:", e);
        alert("No se pudo cargar el anuncio.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  // 2) Cargar distritos (una vez)
  useEffect(() => {
    const loadDistricts = async () => {
      try {
        const ds = await listDistricts("MADRID");
        setDistricts(ds);
      } catch (e) {
        console.error("Error cargando distritos", e);
      }
    };
    loadDistricts();
  }, []);

  // 3) Si ya hay district en el form (edición), resolver selectedDistrictId y cargar barrios
  useEffect(() => {
    const syncDistrictAndLoadNeighborhoods = async () => {
      if (!districts.length) return;
      const districtName = (form.district || "").trim();
      if (!districtName) return;

      const match = districts.find(
        (d) => d.name.toLowerCase().trim() === districtName.toLowerCase().trim()
      );
      if (!match) return;

      // si ya está seleccionado, no repitas
      if (selectedDistrictId === match.id && neighborhoods.length) return;

      setSelectedDistrictId(match.id);
      setLoadingGeo(true);
      try {
        const neigh = await listNeighborhoods(match.id);
        setNeighborhoods(neigh);
      } catch (e) {
        console.error("Error cargando barrios", e);
      } finally {
        setLoadingGeo(false);
      }
    };

    syncDistrictAndLoadNeighborhoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districts, form.district]);

  const onChange = (key: keyof FormState, value: any) =>
    setForm((f) => ({ ...f, [key]: value }));

  const barrioOptions = useMemo(() => neighborhoods, [neighborhoods]);

  const handleAddFiles = (files: File[]) => {
    const { valid, invalid } = validateFiles(files);
    if (invalid.length) {
      alert("Alguna imagen no es válida. Solo JPG/PNG/WEBP.");
    }
    setNewFiles((prev) => [...prev, ...valid].slice(0, 10));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;

    setSaving(true);
    try {
      const title = (form.title ?? "").trim();
      const price = Number(form.price ?? 0);

      if (!title || !Number.isFinite(price) || price <= 0) {
        alert("Título y precio son obligatorios");
        return;
      }

      const city = "MADRID";
      const district = (form.district || "").trim();
      const neighborhood = (form.neighborhood || "").trim();

      let adId = adIdState;

      if (adId) {
        await updateHousingAd(adId, { ...form, title, price, city, district, neighborhood } as HousingAd);
      } else {
        const created = await createHousingAd({ ...form, title, price, city, district, neighborhood } as HousingAd);
        adId = created.id;
        setAdIdState(created.id); // evita duplicados en reintentos
      }

      if (!adId) throw new Error("No se pudo determinar el ID del anuncio.");

      // subir imágenes nuevas
      if (newFiles.length) {
        await addHousingImages(adId, newFiles);
        setNewFiles([]);
        const refreshed = await listHousingImages(adId);
        setExistingImages(refreshed);
      }

      // reordenar (esto requiere FIX en agencyApi.ts)
      if (existingImages.length) {
        await reorderHousingImages(
          adId,
          existingImages.map((i) => i.id)
        );
      }

      alert("Guardado");
      navigate("/agency/ads");
    } catch (err: any) {
      console.error(err);
      const msg =
        err?.message ||
        err?.error_description ||
        (typeof err === "string" ? err : null) ||
        "No se pudo guardar el anuncio. Si persiste, contacta soporte.";
      alert(msg);
    } finally {
      setSaving(false);
    }
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
    const adId = adIdState;
    if (!adId) return;
    if (!confirm("¿Borrar imagen?")) return;
    try {
      await deleteHousingImage(img);
      setExistingImages((prev) => prev.filter((i) => i.id !== img.id));
    } catch (err) {
      console.error(err);
      alert("No se pudo borrar la imagen");
    }
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
          disabled={saving}
        >
          Cancelar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Título</span>
            <input
              value={form.title ?? ""}
              onChange={(e) => onChange("title", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              required
              disabled={saving}
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Tipo</span>
            <select
              value={(form.ad_type as HousingAdType) ?? "FULL_APARTMENT"}
              onChange={(e) => onChange("ad_type", e.target.value as HousingAdType)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            >
              <option value="ROOM">Habitación</option>
              <option value="FULL_APARTMENT">Piso completo</option>
            </select>
          </label>
        </div>

        <label className="space-y-1 block">
          <span className="text-sm font-semibold text-gray-700">Descripción</span>
          <textarea
            value={form.description ?? ""}
            onChange={(e) => onChange("description", e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            rows={5}
            disabled={saving}
          />
        </label>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Precio</span>
            <input
              type="number"
              value={Number(form.price ?? 0)}
              onChange={(e) => onChange("price", Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              min={0}
              disabled={saving}
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Unidad</span>
            <select
              value={form.price_unit ?? "month"}
              onChange={(e) => onChange("price_unit", e.target.value as "month" | "week")}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            >
              <option value="month">Mes</option>
              <option value="week">Semana</option>
            </select>
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Depósito</span>
            <input
              type="number"
              value={Number(form.deposit ?? 0)}
              onChange={(e) => onChange("deposit", Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              min={0}
              disabled={saving}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Estancia mínima</span>
            <input
              value={form.min_stay ?? ""}
              onChange={(e) => onChange("min_stay", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              placeholder="Ej: 6 meses"
              disabled={saving}
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Disponible desde</span>
            <input
              type="date"
              value={form.available_from ?? ""}
              onChange={(e) => onChange("available_from", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Estado</span>
            <select
              value={(form.status as HousingAdStatus) ?? "ACTIVE"}
              onChange={(e) => onChange("status", e.target.value as HousingAdStatus)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
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
              value={"MADRID"}
              disabled
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 text-gray-600"
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Distrito</span>
            <select
              value={selectedDistrictId || ""}
              onChange={async (e) => {
                const idSelected = e.target.value || null;
                setSelectedDistrictId(idSelected);
                setNeighborhoods([]);
                setLoadingGeo(true);
                try {
                  if (idSelected) {
                    const d = districts.find((d) => d.id === idSelected);
                    setForm((f) => ({ ...f, city: "MADRID", district: d?.name ?? "", neighborhood: "" }));
                    const neigh = await listNeighborhoods(idSelected);
                    setNeighborhoods(neigh);
                  } else {
                    setForm((f) => ({ ...f, district: "", neighborhood: "" }));
                  }
                } finally {
                  setLoadingGeo(false);
                }
              }}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            >
              <option value="">Selecciona distrito</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Barrio</span>
            <select
              value={form.neighborhood ?? ""}
              onChange={(e) => onChange("neighborhood", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={!selectedDistrictId || loadingGeo || saving}
            >
              <option value="">{loadingGeo ? "Cargando..." : "Selecciona barrio"}</option>
              {barrioOptions.map((n) => (
                <option key={n.id} value={n.name}>
                  {n.name}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Referencia dirección</span>
            <input
              value={form.address_hint ?? ""}
              onChange={(e) => onChange("address_hint", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={Boolean(form.furnished)}
              onChange={(e) => onChange("furnished", e.target.checked)}
              className="rounded border-gray-300"
              disabled={saving}
            />
            Amueblado
          </label>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={Boolean(form.bills_included)}
              onChange={(e) => onChange("bills_included", e.target.checked)}
              className="rounded border-gray-300"
              disabled={saving}
            />
            Gastos incluidos
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Teléfono de contacto</span>
            <input
              value={form.contact_phone ?? ""}
              onChange={(e) => onChange("contact_phone", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">Email de contacto</span>
            <input
              type="email"
              value={form.contact_email ?? ""}
              onChange={(e) => onChange("contact_email", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            />
          </label>
        </div>

        <ImageUploader
          existing={existingImages}
          newFiles={newFiles}
          onAddFiles={handleAddFiles}
          onRemoveExisting={removeExisting}
          onRemoveNew={(idx) => setNewFiles((prev) => prev.filter((_, i) => i !== idx))}
          onMoveExisting={moveExisting}
          onMoveNew={moveNew}
        />

        <div className="flex justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={() => navigate("/agency/ads")}
            className="px-4 py-2 border border-gray-200 rounded-full text-sm font-semibold text-gray-600"
            disabled={saving}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold disabled:opacity-60"
            disabled={saving}
          >
            {saving ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyAdFormPage;
