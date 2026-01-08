import React, { useMemo, useRef, useState } from "react";
import { AdType, RealEstateOperation, RealEstateCategory } from "../types";
import { ICONS } from "../constants";
import { optimizeJobDescription } from "../../../services/geminiService";
import { supabase } from "@/services/supabase";

interface AdCreateFormProps {
  initialType: AdType;
  onSuccess: () => void;
}

type SelectedImage = {
  id: string;
  file: File;
  previewUrl: string;
};

const MAX_IMAGES = 10;

// Helpers
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

function parseCityDistrict(input: string): { city: string | null; district: string | null } {
  const raw = (input || "").trim();
  if (!raw) return { city: null, district: null };
  const parts = raw.split(/[-·|]/).map((p) => p.trim()).filter(Boolean);
  if (parts.length === 1) return { city: parts[0], district: null };
  return { city: parts[0] || null, district: parts[1] || null };
}

/**
 * ✅ GARANTIZA que existe fila en VoyUsers para el auth.user actual
 * y devuelve VoyUsers.id (que es lo que necesita VoyHousingAds.owner_user_id)
 */
async function ensureVoyUserAndGetId(): Promise<{ voyUserId: string; authUserId: string }> {
  const { data: authRes, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;

  const authUser = authRes?.user;
  if (!authUser?.id) throw new Error("No hay sesión iniciada.");

  // 1) intentar leer VoyUsers por auth_user_id
  const { data: existing, error: selErr } = await supabase
    .from("VoyUsers")
    .select("id, auth_user_id")
    .eq("auth_user_id", authUser.id)
    .maybeSingle();

  if (selErr) throw selErr;
  if (existing?.id) return { voyUserId: existing.id, authUserId: authUser.id };

  // 2) crear VoyUsers si no existe (RLS permite INSERT own: auth_user_id = auth.uid())
  const fullName =
    (authUser.user_metadata as any)?.full_name ||
    (authUser.user_metadata as any)?.name ||
    (authUser.email ? authUser.email.split("@")[0] : "Usuario");

  const email = authUser.email || `${authUser.id}@no-email.local`;

  const { data: created, error: insErr } = await supabase
    .from("VoyUsers")
    .insert({
      auth_user_id: authUser.id,
      email,
      full_name: fullName,
      // role tiene default 'PARTICULAR' en tu tabla, si quieres forzar:
      // role: "PARTICULAR",
      // is_active tiene default true
    })
    .select("id, auth_user_id")
    .single();

  if (insErr) throw insErr;
  return { voyUserId: created.id, authUserId: authUser.id };
}

/**
 * ✅ Inserta anuncio de INMO en VoyHousingAds
 */
async function createHousingAd(payload: any) {
  const { data, error } = await supabase
    .from("VoyHousingAds")
    .insert(payload)
    .select("id")
    .single();

  if (error) throw error;
  return data as { id: string };
}

/**
 * ✅ Inserta anuncio de NEGOCIO (ajusta si ya tienes tabla real)
 */
async function createBusinessAd(payload: any) {
  const { data, error } = await supabase
    .from("VoyBusinessAds")
    .insert(payload)
    .select("id")
    .single();

  if (error) throw error;
  return data as { id: string };
}

/**
 * ✅ Subir imágenes y registrar en VoyHousingImages
 * IMPORTANTE: ajusta el bucket al real.
 */
async function uploadHousingImages(params: { adId: string; images: SelectedImage[] }) {
  // ⚠️ Ajusta esto al bucket real que tengas creado en Storage:
  // por ejemplo: "housing-images" o "voy-housing"
  const bucket = "housing-images";

  const basePath = `ads/${params.adId}`;

  for (let i = 0; i < params.images.length; i++) {
    const img = params.images[i];
    const ext = img.file.name.split(".").pop() || "jpg";
    const fileName = `${i + 1}_${uid()}.${ext}`;
    const path = `${basePath}/${fileName}`;

    // Storage upload (upsert true evita 409 si por lo que sea repites path)
    const { error: upErr } = await supabase.storage.from(bucket).upload(path, img.file, {
      cacheControl: "3600",
      upsert: true,
      contentType: img.file.type || undefined,
    });
    if (upErr) throw upErr;

    const { data: pub } = supabase.storage.from(bucket).getPublicUrl(path);

    // Inserta en VoyHousingImages (tu tabla tiene: ad_id, url, file_name, file_type, sort_order)
    const { error: insErr } = await supabase.from("VoyHousingImages").insert({
      ad_id: params.adId,
      url: pub.publicUrl,
      file_name: img.file.name,
      file_type: img.file.type || null,
      sort_order: i,
    });

    if (insErr) throw insErr;
  }
}

async function uploadBusinessImages(_params: { adId: string; images: SelectedImage[] }) {
  // TODO: cuando tengas soporte real para negocios
  return;
}

export const AdCreateForm: React.FC<AdCreateFormProps> = ({ initialType, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<SelectedImage[]>([]);

  const [formData, setFormData] = useState({
    type: initialType,
    title: "",
    description: "",
    location: "",
    price: "",
    // Real Estate
    operation: RealEstateOperation.RENT,
    realEstateCategory: RealEstateCategory.FLAT,
    surface: "",
    availableFrom: "",
    // Business
    sector: "Restaurante",
    monthlyRent: "",
  });

  const sectors = [
    "Restaurante",
    "Bar / Cafetería",
    "Oficina",
    "Taller",
    "Farmacia",
    "Inmobiliaria",
    "Tienda de ropa",
    "Comercio minorista",
    "Otros",
  ];

  const handleNext = () => setStep((s) => Math.min(3, s + 1));
  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const canGoNextStep1 = useMemo(() => {
    return Boolean(formData.title.trim()) && Boolean(formData.price.trim());
  }, [formData.title, formData.price]);

  const handleOptimize = async () => {
    if (!formData.title || !formData.description) return;
    setLoading(true);
    try {
      const optimized = await optimizeJobDescription(`${formData.title}\n\n${formData.description}`);
      setFormData((prev) => ({ ...prev, description: optimized || prev.description }));
    } finally {
      setLoading(false);
    }
  };

  const pickFiles = () => fileInputRef.current?.click();

  const onFilesSelected = (files: FileList | null) => {
    if (!files) return;

    const incoming = Array.from(files);
    const remaining = Math.max(0, MAX_IMAGES - images.length);
    const slice = incoming.slice(0, remaining);

    const newItems: SelectedImage[] = slice.map((file) => ({
      id: uid(),
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newItems]);

    // permite volver a seleccionar los mismos archivos si quieres
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const item = prev.find((x) => x.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((x) => x.id !== id);
    });
  };

  const publish = async () => {
    setLoading(true);
    try {
      if (!formData.title.trim()) throw new Error("Falta título.");
      if (!formData.price.trim()) throw new Error("Falta precio.");

      const price = Number(formData.price || 0);
      if (!Number.isFinite(price) || price <= 0) throw new Error("Precio inválido.");

      const { city, district } = parseCityDistrict(formData.location);

      // ✅ clave: owner_user_id debe ser VoyUsers.id
      const { voyUserId } = await ensureVoyUserAndGetId();

      let createdId: string;

      if (formData.type === AdType.REAL_STATE) {
        const res = await createHousingAd({
          owner_user_id: voyUserId,
          owner_type: "USER",
          title: formData.title,
          description: formData.description || null,
          city,
          district,
          neighborhood: null,
          address_hint: null,
          ad_type: String(formData.realEstateCategory || "FLAT"),
          price,
          price_unit: formData.operation === RealEstateOperation.RENT ? "MONTH" : "TOTAL",
          deposit: null,
          min_stay: null,
          furnished: false,
          bills_included: false,
          available_from: formData.availableFrom || null,
          status: "ACTIVE",
          metadata: {
            operation: formData.operation,
            surface: Number(formData.surface || 0) || 0,
          },
        });

        createdId = res.id;

        if (images.length) {
          await uploadHousingImages({ adId: createdId, images });
        }
      } else {
        const res = await createBusinessAd({
          owner_user_id: voyUserId,
          title: formData.title,
          description: formData.description || null,
          city,
          district,
          price,
          status: "ACTIVE",
          metadata: {
            sector: formData.sector,
            monthlyRent: Number(formData.monthlyRent || 0) || 0,
            surface: Number(formData.surface || 0) || 0,
          },
        });

        createdId = res.id;

        if (images.length) {
          await uploadBusinessImages({ adId: createdId, images });
        }
      }

      images.forEach((i) => URL.revokeObjectURL(i.previewUrl));
      setImages([]);
      onSuccess();
    } catch (e: any) {
      console.error(e);
      alert(e?.message ?? "Error al publicar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {formData.type === AdType.REAL_STATE ? "Publicar Inmueble" : "Traspasar Negocio"}
          </h2>
          <p className="text-sm text-gray-500">Paso {step} de 3</p>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-all ${step >= i ? "bg-blue-600" : "bg-gray-100"}`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-6">
          {formData.type === AdType.REAL_STATE ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, operation: RealEstateOperation.RENT })}
                className={`p-4 rounded-xl border-2 text-center font-bold transition-all ${
                  formData.operation === RealEstateOperation.RENT
                    ? "border-blue-600 bg-blue-50/50 text-blue-600"
                    : "border-gray-100"
                }`}
              >
                Alquiler
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, operation: RealEstateOperation.SALE })}
                className={`p-4 rounded-xl border-2 text-center font-bold transition-all ${
                  formData.operation === RealEstateOperation.SALE
                    ? "border-blue-600 bg-blue-50/50 text-blue-600"
                    : "border-gray-100"
                }`}
              >
                Venta
              </button>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sector del negocio</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-medium"
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Título del anuncio</label>
            <input
              type="text"
              placeholder={formData.type === AdType.REAL_STATE ? "Ej: Piso acogedor en Calle Mayor" : "Ej: Traspaso de pizzería equipada"}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Precio (€)</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ubicación / Zona</label>
              <input
                type="text"
                placeholder="Ej: Madrid - Arganzuela"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNextStep1}
            className={`w-full py-4 rounded-xl font-bold shadow-lg shadow-blue-600/10 transition ${
              canGoNextStep1 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">Descripción</label>
              <button
                type="button"
                onClick={handleOptimize}
                disabled={loading || !formData.title}
                className="text-xs font-bold text-blue-600 flex items-center gap-1"
              >
                {loading ? "Optimizando..." : "Mejorar con IA ✨"}
              </button>
            </div>
            <textarea
              rows={5}
              placeholder="Describe las características principales, estado, equipamiento..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Superficie (m²)</label>
              <input
                type="number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                value={formData.surface}
                onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
              />
            </div>

            {formData.type === AdType.REAL_STATE ? (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Disponible desde</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200"
                  value={formData.availableFrom}
                  onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Alquiler mensual local (€)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200"
                  value={formData.monthlyRent}
                  onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={handleBack} className="flex-1 bg-gray-50 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-100">
              Atrás
            </button>
            <button type="button" onClick={handleNext} className="flex-[2] bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/10">
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => onFilesSelected(e.target.files)}
          />

          <div
            role="button"
            tabIndex={0}
            onClick={pickFiles}
            className="border-2 border-dashed border-gray-200 rounded-3xl p-10 text-center cursor-pointer hover:bg-gray-50 transition"
          >
            <div className="flex justify-center mb-4 text-gray-300">{ICONS.Catalog}</div>
            <p className="text-sm font-bold text-gray-600 mb-2">Añadir fotos del inmueble/negocio</p>
            <p className="text-xs text-gray-400">
              Haz clic para subir (máx. {MAX_IMAGES}). Recomendado: 1200px y buena luz.
            </p>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((img) => (
                <div key={img.id} className="relative rounded-2xl overflow-hidden border bg-white">
                  <img src={img.previewUrl} alt="preview" className="h-28 w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white text-slate-700 rounded-full px-2 py-1 text-xs font-bold shadow"
                    title="Eliminar"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="bg-blue-50 p-6 rounded-2xl space-y-3">
            <h4 className="font-bold text-blue-900 text-center">Resumen del Anuncio</h4>

            <div className="flex justify-between text-sm">
              <span className="text-blue-700/60">Tipo</span>
              <span className="font-bold text-blue-900 uppercase">{formData.type}</span>
            </div>

            {formData.type === AdType.REAL_STATE && (
              <div className="flex justify-between text-sm">
                <span className="text-blue-700/60">Operación</span>
                <span className="font-bold text-blue-900 uppercase">{formData.operation}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-blue-700/60">Precio</span>
              <span className="font-bold text-blue-900">{formData.price}€</span>
            </div>

            <div className="pt-2 border-t border-blue-200 text-[10px] text-blue-600 font-bold uppercase tracking-wider text-center">
              Publicación incluida en plan activo (o pago por anuncio si lo defines así)
            </div>
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={handleBack} className="flex-1 bg-gray-50 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-100">
              Atrás
            </button>
            <button
              type="button"
              onClick={publish}
              disabled={loading}
              className={`flex-[2] py-4 rounded-xl font-bold shadow-lg shadow-blue-600/10 transition ${
                loading ? "bg-blue-300 text-white cursor-wait" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Publicando..." : "Publicar anuncio"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
