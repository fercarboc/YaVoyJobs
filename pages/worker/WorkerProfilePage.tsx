import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "@/services/supabase";
import { AuthState } from "@/types";
import { theme } from "@/theme";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import PhotoUploader from "@/components/profile/PhotoUploader";
import VerificationStatusCard from "@/components/verification/VerificationStatusCard";

type Props = {
  auth: AuthState;
};

type ProfileForm = {
  full_name: string;
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

export default function WorkerProfilePage({ auth }: Props) {
  const userId = auth.user?.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<ProfileForm>({
    full_name: auth.user?.full_name ?? "",
    phone: auth.user?.phone ?? "",
    city: auth.user?.city ?? "",
    district: auth.user?.district ?? "",
    neighborhood: auth.user?.neighborhood ?? "",
    address: auth.user?.address ?? "",
    postal_code: auth.user?.postal_code ?? "",
    province: auth.user?.province ?? "",
    country: auth.user?.country ?? "España",
    document_type: auth.user?.document_type ?? "NIF",
    document_number: auth.user?.document_number ?? "",
    selfie_photo_url: auth.user?.selfie_photo_url ?? null,
    document_photo_url: auth.user?.document_photo_url ?? null,
  });

  // contraseña
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
            "full_name, phone, city, district, neighborhood, address, postal_code, province, country, document_type, document_number, selfie_photo_url, document_photo_url"
          )
          .eq("id", userId)
          .single();

        if (error) throw error;

        setForm((prev) => ({
          ...prev,
          ...data,
          country: data?.country ?? "España",
          document_type: data?.document_type ?? "NIF",
          selfie_photo_url: data?.selfie_photo_url ?? null,
          document_photo_url: data?.document_photo_url ?? null,
        }));
      } catch (e) {
        console.error(e);
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
          // selfie_photo_url y document_photo_url los gestiona PhotoUploader
          // aquí no los tocamos para no pisarlos
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

  if (loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando perfil...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-lg font-bold text-slate-900">Mi Perfil (Trabajador)</h1>
      <p className="text-xs text-slate-500 mt-1">
        Completa tus datos. Esto ayuda a empresas/particulares a confiar y contratar.
      </p>

      {/* FOTOS: SELFIE + DOCUMENTO */}
      <div className="mt-5 bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h2 className="text-sm font-bold text-slate-900">Fotos</h2>
        <p className="text-xs text-slate-500 mt-1">
          Sube selfie y documento. Se usarán para tu avatar y verificación.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <PhotoUploader
            userId={userId!}
            label="Selfie (avatar)"
            field="selfie_photo_url"
            currentUrl={form.selfie_photo_url}
            onUploaded={(url) => setForm((prev) => ({ ...prev, selfie_photo_url: url }))}
          />

          <PhotoUploader
            userId={userId!}
            label="Documento (foto)"
            field="document_photo_url"
            currentUrl={form.document_photo_url}
            onUploaded={(url) => setForm((prev) => ({ ...prev, document_photo_url: url }))}
          />
        </div>

        <div className="mt-4">
          <Button onClick={onSaveProfile} disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </Button>
        </div>
      </div>

      {/* VERIFICACIÓN */}
      <div className="mt-4">
        <VerificationStatusCard auth={auth} />
      </div>

      {/* DATOS PERSONALES */}
      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Datos personales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Nombre completo"
            type="text"
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            required
          />
          <Input
            label="Teléfono"
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Ej: 600123123"
          />

          <Input
            label="Ciudad"
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Madrid"
          />
          <Input
            label="Provincia"
            type="text"
            value={form.province}
            onChange={(e) => setForm({ ...form, province: e.target.value })}
            placeholder="Madrid / Cantabria"
          />

          <Input
            label="Distrito"
            type="text"
            value={form.district}
            onChange={(e) => setForm({ ...form, district: e.target.value })}
            placeholder="Usera"
          />
          <Input
            label="Barrio"
            type="text"
            value={form.neighborhood}
            onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
            placeholder="San Fermín"
          />

          <Input
            label="Dirección"
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Calle, nº, piso…"
          />
          <Input
            label="Código postal"
            type="text"
            value={form.postal_code}
            onChange={(e) => setForm({ ...form, postal_code: e.target.value })}
            placeholder="28001"
          />

          <Input
            label="País"
            type="text"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            placeholder="España"
          />
        </div>

        <div className="mt-4">
          <Button onClick={onSaveProfile} disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </Button>
        </div>
      </div>

      {/* IDENTIFICACIÓN */}
      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Identificación</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Tipo de documento"
            type="text"
            value={form.document_type}
            onChange={(e) => setForm({ ...form, document_type: e.target.value })}
            placeholder="NIF / NIE / PASAPORTE"
          />
          <Input
            label="Número de documento"
            type="text"
            value={form.document_number}
            onChange={(e) => setForm({ ...form, document_number: e.target.value })}
            placeholder="00000000X"
          />
        </div>

        <div className="mt-4">
          <Button onClick={onSaveProfile} disabled={saving}>
            {saving ? "Guardando..." : "Guardar identificación"}
          </Button>
        </div>
      </div>

      {/* SEGURIDAD */}
      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Seguridad</h2>

        <form onSubmit={onChangePassword} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Nueva contraseña</label>
            <input
              type="password"
              value={pwd.newPassword}
              onChange={(e) => setPwd({ ...pwd, newPassword: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="••••••••"
              required
            />
            <div className="text-[11px] text-slate-500 mt-1">Mínimo 6 caracteres.</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Confirmar contraseña</label>
            <input
              type="password"
              value={pwd.confirm}
              onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="••••••••"
              required
            />
            {!canSavePwd && (pwd.confirm.length > 0 || pwd.newPassword.length > 0) && (
              <div className="text-[11px] text-red-600 mt-1">
                Deben coincidir y tener al menos 6 caracteres.
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={!canSavePwd || pwdSaving}
              className="px-4 py-2 rounded-lg font-bold text-sm"
              style={{
                background: theme.colors.primary,
                color: theme.colors.surface,
                opacity: !canSavePwd || pwdSaving ? 0.6 : 1,
              }}
            >
              {pwdSaving ? "Actualizando..." : "Cambiar contraseña"}
            </button>
          </div>
        </form>
      </div>

      {/* DATOS ECONÓMICOS (placeholder) */}
      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-1">Datos económicos</h2>
        <p className="text-xs text-slate-500">
          Aquí irá: IBAN / Stripe Connect / Wallet / facturación del trabajador.
        </p>
        <div className="mt-3 text-sm text-slate-700 bg-gray-50 border border-gray-200 rounded-xl p-3">
          (Pendiente) Crear tabla/endpoint: VoyWorkerPayouts o integración Stripe Connect.
        </div>
      </div>
    </div>
  );
}
