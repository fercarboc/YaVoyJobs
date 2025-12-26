import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "@/services/supabase";
import PhotoUploader from "@/components/profile/PhotoUploader";
import { DashboardUserRole } from "../dashboardTypes";

type Props = {
  role: DashboardUserRole;
  userId?: string;
  userEmail?: string;
  avatarUrl?: string;
};

type ProfileForm = {
  full_name: string;
  last_name: string;
  phone: string;
  city: string;
  district: string;
  neighborhood: string;
  address: string;
  postal_code: string;
  province: string;
  country: string;
  document_type: string;
  document_number: string;
  selfie_photo_url: string | null;
  document_photo_url: string | null;
};

const initialForm: ProfileForm = {
  full_name: "",
  last_name: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
  address: "",
  postal_code: "",
  province: "",
  country: "España",
  document_type: "NIF",
  document_number: "",
  selfie_photo_url: null,
  document_photo_url: null,
};

const SectionCard: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
    <div className="mb-4">
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const ConfigManager: React.FC<Props> = ({ userId, userEmail }) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<ProfileForm>(initialForm);

  const [pwd, setPwd] = useState({ newPassword: "", confirm: "" });
  const [pwdSaving, setPwdSaving] = useState(false);

  const canSavePwd = useMemo(() => {
    return pwd.newPassword.length >= 6 && pwd.newPassword === pwd.confirm;
  }, [pwd]);

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("VoyUsers")
          .select(
            "full_name, last_name, phone, city, district, neighborhood, address, postal_code, province, country, document_type, document_number, selfie_photo_url, document_photo_url"
          )
          .eq("id", userId)
          .single();

        if (error) throw error;
        if (data) {
          setForm((prev) => ({
            ...prev,
            ...data,
            country: data?.country ?? "España",
            document_type: data?.document_type ?? "NIF",
            selfie_photo_url: data?.selfie_photo_url ?? null,
            document_photo_url: data?.document_photo_url ?? null,
          }));
        }
      } catch (e) {
        console.error("Error cargando perfil", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  const onSaveProfile = async () => {
    if (!userId) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from("VoyUsers")
        .update({
          full_name: form.full_name,
          last_name: form.last_name || null,
          phone: form.phone || null,
          city: form.city || null,
          district: form.district || null,
          neighborhood: form.neighborhood || null,
          address: form.address || null,
          postal_code: form.postal_code || null,
          province: form.province || null,
          country: form.country || "España",
          document_type: form.document_type || "NIF",
          document_number: form.document_number || null,
        })
        .eq("id", userId);

      if (error) throw error;
      alert("Perfil actualizado.");
    } catch (e: any) {
      console.error(e);
      alert("Error al guardar perfil: " + (e?.message ?? "desconocido"));
    } finally {
      setSaving(false);
    }
  };

  const onChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSavePwd) return;
    setPwdSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: pwd.newPassword });
      if (error) throw error;
      alert("Contraseña actualizada.");
      setPwd({ newPassword: "", confirm: "" });
    } catch (e: any) {
      console.error(e);
      alert("Error al cambiar contraseña: " + (e?.message ?? "desconocido"));
    } finally {
      setPwdSaving(false);
    }
  };

  if (!userId) {
    return <div className="p-4 text-sm text-slate-600">No se encontró el usuario.</div>;
  }

  if (loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando perfil...</div>;
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Configuración de Cuenta</h1>
          <p className="text-sm text-slate-500">Actualiza tus datos personales, documentos y contraseña.</p>
        </div>
        <div className="text-xs text-slate-500">
          ID: <span className="font-mono">{userId}</span>
          {userEmail && (
            <>
              <br />
              Email: <span className="font-mono">{userEmail}</span>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SectionCard title="Fotos" subtitle="Selfie para avatar y documento de identidad.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PhotoUploader
              userId={userId}
              label="Selfie (avatar)"
              field="selfie_photo_url"
              currentUrl={form.selfie_photo_url}
              onUploaded={(url) => setForm((prev) => ({ ...prev, selfie_photo_url: url }))}
            />

            <PhotoUploader
              userId={userId}
              label="Documento (foto)"
              field="document_photo_url"
              currentUrl={form.document_photo_url}
              onUploaded={(url) => setForm((prev) => ({ ...prev, document_photo_url: url }))}
            />
          </div>
        </SectionCard>

        <SectionCard title="Verificación e incentivos">
          <div className="text-sm text-slate-600">
            Próximo paso: mostrar estado de verificación, incentivos y enlaces a payouts.
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Datos personales">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600">Nombre</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Apellidos</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              placeholder="Opcional"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Teléfono</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="600123123"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Documento (NIF/NIE/Pasaporte)</label>
            <div className="flex gap-2">
              <input
                className="mt-1 w-28 rounded-lg border border-gray-200 px-3 py-2 text-sm"
                value={form.document_type}
                onChange={(e) => setForm({ ...form, document_type: e.target.value })}
              />
              <input
                className="mt-1 flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm"
                value={form.document_number}
                onChange={(e) => setForm({ ...form, document_number: e.target.value })}
                placeholder="00000000X"
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Dirección y área de trabajo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600">Ciudad</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder="Madrid"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Provincia</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.province}
              onChange={(e) => setForm({ ...form, province: e.target.value })}
              placeholder="Madrid / Cantabria"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Distrito</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.district}
              onChange={(e) => setForm({ ...form, district: e.target.value })}
              placeholder="Usera"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Barrio</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.neighborhood}
              onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
              placeholder="San Fermín"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-slate-600">Dirección</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Calle, nº, piso"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Código Postal</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.postal_code}
              onChange={(e) => setForm({ ...form, postal_code: e.target.value })}
              placeholder="28001"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">País</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              placeholder="España"
            />
          </div>
        </div>
      </SectionCard>

      <div className="flex flex-col md:flex-row gap-4">
        <SectionCard title="Guardar cambios">
          <button
            onClick={onSaveProfile}
            disabled={saving}
            className="px-4 py-2 rounded-lg font-bold text-sm bg-[#0056b3] text-white hover:bg-blue-700 transition disabled:opacity-60"
          >
            {saving ? "Guardando..." : "Guardar perfil"}
          </button>
        </SectionCard>

        <SectionCard title="Cambiar contraseña" subtitle="Mínimo 6 caracteres.">
          <form onSubmit={onChangePassword} className="grid grid-cols-1 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-600">Nueva contraseña</label>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                value={pwd.newPassword}
                onChange={(e) => setPwd({ ...pwd, newPassword: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600">Confirmar contraseña</label>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                value={pwd.confirm}
                onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
                required
              />
              {!canSavePwd && (pwd.confirm.length > 0 || pwd.newPassword.length > 0) && (
                <div className="text-[11px] text-red-600 mt-1">Deben coincidir y tener al menos 6 caracteres.</div>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={!canSavePwd || pwdSaving}
                className="px-4 py-2 rounded-lg font-bold text-sm bg-gray-900 text-white hover:bg-black transition disabled:opacity-60"
              >
                {pwdSaving ? "Actualizando..." : "Actualizar contraseña"}
              </button>
            </div>
          </form>
        </SectionCard>
      </div>
    </div>
  );
};

export default ConfigManager;
