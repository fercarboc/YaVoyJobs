import React, { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/services/supabase";
import type { UserRole } from "@/types";

import { useVoyUser } from "@/hooks/useVoyUser";
import ProfileOverview from "./ProfileOverview";

import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import VerificationStatusCard from "@/components/verification/VerificationStatusCard";
import VerificationUploader from "@/components/VerificationUploader";

import { setAvatarFromSelfie } from "@/services/profileMedia";

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

  company_logo_url: string | null;
  company_name: string;
  cif: string | null;
  company_sector: string | null;

  primary_district: string | null;
  primary_neighborhood: string | null;
  adjacent_districts: string;
  adjacent_neighborhoods: string;

  availability_days: string;
  availability_time_from: string;
  availability_time_to: string;
};

const Card: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
    </div>
    {children}
  </section>
);

const ProfileFullPage: React.FC = () => {
  const { voyUser, role, loading, error } = useVoyUser();

  // ⚠️ IMPORTANTE:
  // userId aquí debe ser el ID de VoyUsers (no auth.users).
  // En tu tabla se ve claro: VoyUsers.id y VoyUsers.auth_user_id son distintos.
  const userId = voyUser?.id;

  const isCompanyRole = useMemo(() => {
    const r = (voyUser?.role ?? role) as UserRole | undefined;
    return r === "COMPANY" || r === "AGENCY" || r === "PROVIDER";
  }, [voyUser?.role, role]);

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<ProfileForm>(() => ({
    full_name: voyUser?.full_name ?? "",
    phone: (voyUser as any)?.phone ?? "",
    city: (voyUser as any)?.city ?? "",
    district: (voyUser as any)?.district ?? "",
    neighborhood: (voyUser as any)?.neighborhood ?? "",
    address: (voyUser as any)?.address ?? "",
    postal_code: (voyUser as any)?.postal_code ?? "",
    province: (voyUser as any)?.province ?? "",
    country: (voyUser as any)?.country ?? "España",

    document_type: (voyUser as any)?.document_type ?? "NIF",
    document_number: (voyUser as any)?.document_number ?? "",

    company_logo_url: (voyUser as any)?.company_logo_url ?? null,
    company_name: (voyUser as any)?.company_name ?? "",
    cif: (voyUser as any)?.cif ?? null,
    company_sector: (voyUser as any)?.company_sector ?? null,

    primary_district: (voyUser as any)?.primary_district ?? null,
    primary_neighborhood: (voyUser as any)?.primary_neighborhood ?? null,
    adjacent_districts: Array.isArray((voyUser as any)?.adjacent_districts)
      ? (voyUser as any).adjacent_districts.join(", ")
      : ((voyUser as any)?.adjacent_districts ?? ""),
    adjacent_neighborhoods: Array.isArray((voyUser as any)?.adjacent_neighborhoods)
      ? (voyUser as any).adjacent_neighborhoods.join(", ")
      : ((voyUser as any)?.adjacent_neighborhoods ?? ""),

    availability_days: JSON.stringify((voyUser as any)?.availability_days ?? {}),
    availability_time_from: (voyUser as any)?.availability_time_from ?? "",
    availability_time_to: (voyUser as any)?.availability_time_to ?? "",
  }));

  // Cuando llega voyUser, hidrata form
  useEffect(() => {
    if (!voyUser) return;
    setForm((prev) => ({
      ...prev,
      full_name: voyUser?.full_name ?? prev.full_name,
      phone: (voyUser as any)?.phone ?? prev.phone,
      city: (voyUser as any)?.city ?? prev.city,
      district: (voyUser as any)?.district ?? prev.district,
      neighborhood: (voyUser as any)?.neighborhood ?? prev.neighborhood,
      address: (voyUser as any)?.address ?? prev.address,
      postal_code: (voyUser as any)?.postal_code ?? prev.postal_code,
      province: (voyUser as any)?.province ?? prev.province,
      country: (voyUser as any)?.country ?? prev.country,

      document_type: (voyUser as any)?.document_type ?? prev.document_type,
      document_number: (voyUser as any)?.document_number ?? prev.document_number,

      company_logo_url: (voyUser as any)?.company_logo_url ?? prev.company_logo_url,
      company_name: (voyUser as any)?.company_name ?? prev.company_name,
      cif: (voyUser as any)?.cif ?? prev.cif,
      company_sector: (voyUser as any)?.company_sector ?? prev.company_sector,

      primary_district: (voyUser as any)?.primary_district ?? prev.primary_district,
      primary_neighborhood: (voyUser as any)?.primary_neighborhood ?? prev.primary_neighborhood,
      adjacent_districts: Array.isArray((voyUser as any)?.adjacent_districts)
        ? (voyUser as any).adjacent_districts.join(", ")
        : ((voyUser as any)?.adjacent_districts ?? prev.adjacent_districts),
      adjacent_neighborhoods: Array.isArray((voyUser as any)?.adjacent_neighborhoods)
        ? (voyUser as any).adjacent_neighborhoods.join(", ")
        : ((voyUser as any)?.adjacent_neighborhoods ?? prev.adjacent_neighborhoods),

      availability_days: JSON.stringify((voyUser as any)?.availability_days ?? {}),
      availability_time_from: (voyUser as any)?.availability_time_from ?? prev.availability_time_from,
      availability_time_to: (voyUser as any)?.availability_time_to ?? prev.availability_time_to,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voyUser?.id]);

  // Scroll refs
  const verificationRef = useRef<HTMLDivElement | null>(null);
  const securityRef = useRef<HTMLDivElement | null>(null);

  // Password
  const [pwd, setPwd] = useState({ newPassword: "", confirm: "" });
  const [pwdSaving, setPwdSaving] = useState(false);
  const canSavePwd = useMemo(() => pwd.newPassword.length >= 6 && pwd.newPassword === pwd.confirm, [pwd]);

  // ✅ AUTO: si hay selfie pero no avatar -> copiar selfie a avatar automáticamente
  const avatarSyncDoneRef = useRef(false);
  useEffect(() => {
    const selfie = (voyUser as any)?.selfie_photo_url as string | null | undefined;
    const avatar = (voyUser as any)?.avatar_url as string | null | undefined;

    if (!userId) return;
    if (!selfie) return;

    // ya sincronizado en esta sesión
    if (avatarSyncDoneRef.current) return;

    // Si ya tiene avatar (o coincide), no hacemos nada
    if (avatar && avatar === selfie) return;

    avatarSyncDoneRef.current = true;

    (async () => {
      try {
        await setAvatarFromSelfie(); // usa al user actual
        // si quieres refrescar instantáneo, añadimos refetch en useVoyUser
      } catch (e) {
        console.warn("[ProfileFullPage] avatar sync error", e);
      }
    })();
  }, [userId, voyUser]);

  // Cargar desde BD (por si el hook no trae todo)
  useEffect(() => {
    const run = async () => {
      if (!userId) return;
      try {
        const { data, error } = await supabase
          .from("VoyUsers")
          .select(
            "full_name, phone, city, district, neighborhood, address, postal_code, province, country, document_type, document_number, company_logo_url, company_name, cif, company_sector, primary_district, primary_neighborhood, adjacent_districts, adjacent_neighborhoods, availability_days, availability_time_from, availability_time_to"
          )
          .eq("id", userId)
          .single();

        if (error) throw error;

        setForm((prev) => ({
          ...prev,
          ...(data as any),
          country: (data as any)?.country ?? "España",
          document_type: (data as any)?.document_type ?? "NIF",
          company_logo_url: (data as any)?.company_logo_url ?? null,
          company_name: (data as any)?.company_name ?? "",
          cif: (data as any)?.cif ?? null,
          company_sector: (data as any)?.company_sector ?? null,
          primary_district: (data as any)?.primary_district ?? null,
          primary_neighborhood: (data as any)?.primary_neighborhood ?? null,
          adjacent_districts: Array.isArray((data as any)?.adjacent_districts)
            ? (data as any).adjacent_districts.join(", ")
            : ((data as any)?.adjacent_districts ?? ""),
          adjacent_neighborhoods: Array.isArray((data as any)?.adjacent_neighborhoods)
            ? (data as any).adjacent_neighborhoods.join(", ")
            : ((data as any)?.adjacent_neighborhoods ?? ""),
          availability_days: JSON.stringify((data as any)?.availability_days ?? {}),
          availability_time_from: (data as any)?.availability_time_from ?? "",
          availability_time_to: (data as any)?.availability_time_to ?? "",
        }));
      } catch (e) {
        console.error("[ProfileFullPage] load VoyUsers error:", e);
      }
    };

    run();
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

          // Empresa
          company_logo_url: form.company_logo_url ?? null,
          company_name: form.company_name || null,
          cif: form.cif ?? null,
          company_sector: form.company_sector ?? null,

          primary_district: form.primary_district ?? null,
          primary_neighborhood: form.primary_neighborhood ?? null,
          adjacent_districts: (form.adjacent_districts ?? "").split(",").map((v) => v.trim()).filter(Boolean),
          adjacent_neighborhoods: (form.adjacent_neighborhoods ?? "").split(",").map((v) => v.trim()).filter(Boolean),

          availability_days: (() => {
            try {
              return JSON.parse(form.availability_days);
            } catch {
              return {};
            }
          })(),
          availability_time_from: form.availability_time_from || null,
          availability_time_to: form.availability_time_to || null,
        })
        .eq("id", userId);

      if (error) throw error;
      alert("Perfil actualizado.");
    } catch (e: any) {
      console.error("[ProfileFullPage] save error:", e);
      alert(e?.message ?? "Error al guardar perfil.");
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
      alert(e?.message ?? "Error al cambiar contraseña.");
    } finally {
      setPwdSaving(false);
    }
  };

  const goSecurity = () => securityRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const goVerification = () => verificationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="space-y-4">
      <ProfileOverview onGoSecurity={goSecurity} onGoVerification={goVerification} />

      {error ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? <div className="text-sm text-slate-600">Cargando perfil...</div> : null}

      {/* ✅ VERIFICACIÓN (ÚNICA subida de documento + selfie) */}
      <div ref={verificationRef}>
        <Card title="Verificación" subtitle="Sube documento y selfie. El equipo revisará y validará tu cuenta.">
          <div className="space-y-3">
            <VerificationUploader defaultVerificationType={isCompanyRole ? "company" : "helper"} showTypeSelector={false} />
            <VerificationStatusCard auth={{ user: voyUser } as any} />
          </div>
        </Card>
      </div>

      {/* DATOS PERSONALES */}
      <Card title="Datos personales" subtitle="Estos datos se usan para tu perfil y confianza.">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input label="Nombre completo" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          <Input label="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input label="Ciudad" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          <Input label="Provincia" value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} />
          <Input label="Distrito" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} />
          <Input label="Barrio" value={form.neighborhood} onChange={(e) => setForm({ ...form, neighborhood: e.target.value })} />
          <Input label="Dirección" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <Input label="Código postal" value={form.postal_code} onChange={(e) => setForm({ ...form, postal_code: e.target.value })} />
          <Input label="País" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={onSaveProfile} disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </Button>
        </div>
      </Card>

      {/* IDENTIFICACIÓN (solo datos; NO subidas aquí para evitar duplicados) */}
      <Card title="Identificación" subtitle="Tipo y número de documento (la subida se hace arriba en Verificación).">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input label="Tipo de documento" value={form.document_type} onChange={(e) => setForm({ ...form, document_type: e.target.value })} />
          <Input label="Número de documento" value={form.document_number} onChange={(e) => setForm({ ...form, document_number: e.target.value })} />
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={onSaveProfile} disabled={saving}>
            {saving ? "Guardando..." : "Guardar identificación"}
          </Button>
        </div>
      </Card>

      {/* EMPRESA */}
      {isCompanyRole ? (
        <Card title="Datos empresariales" subtitle="Fiscalidad y áreas de trabajo.">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Input label="Nombre comercial / razón social" value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} />
            <Input label="CIF" value={form.cif ?? ""} onChange={(e) => setForm({ ...form, cif: e.target.value })} />
            <Input label="Sector" value={form.company_sector ?? ""} onChange={(e) => setForm({ ...form, company_sector: e.target.value })} />
            <Input label="Distrito principal" value={form.primary_district ?? ""} onChange={(e) => setForm({ ...form, primary_district: e.target.value })} />
            <Input label="Barrio principal" value={form.primary_neighborhood ?? ""} onChange={(e) => setForm({ ...form, primary_neighborhood: e.target.value })} />
            <Input label="Distritos adyacentes" value={form.adjacent_districts} onChange={(e) => setForm({ ...form, adjacent_districts: e.target.value })} />
            <Input label="Barrios adyacentes" value={form.adjacent_neighborhoods} onChange={(e) => setForm({ ...form, adjacent_neighborhoods: e.target.value })} />
            <Input label="Desde (hora)" value={form.availability_time_from} onChange={(e) => setForm({ ...form, availability_time_from: e.target.value })} />
            <Input label="Hasta (hora)" value={form.availability_time_to} onChange={(e) => setForm({ ...form, availability_time_to: e.target.value })} />
          </div>

          <div className="mt-4 flex justify-end">
            <Button onClick={onSaveProfile} disabled={saving}>
              {saving ? "Guardando..." : "Guardar empresa"}
            </Button>
          </div>
        </Card>
      ) : null}

      {/* SEGURIDAD */}
      <div ref={securityRef}>
        <Card title="Seguridad" subtitle="Cambia tu contraseña.">
          <form onSubmit={onChangePassword} className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">Nueva contraseña</label>
              <input
                type="password"
                autoComplete="new-password"
                value={pwd.newPassword}
                onChange={(e) => setPwd({ ...pwd, newPassword: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="••••••••"
                required
              />
              <div className="mt-1 text-[11px] text-slate-500">Mínimo 6 caracteres.</div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">Confirmar contraseña</label>
              <input
                type="password"
                autoComplete="new-password"
                value={pwd.confirm}
                onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="••••••••"
                required
              />
              {!canSavePwd && (pwd.confirm.length > 0 || pwd.newPassword.length > 0) ? (
                <div className="mt-1 text-[11px] text-red-600">Deben coincidir y tener al menos 6 caracteres.</div>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!canSavePwd || pwdSaving}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {pwdSaving ? "Actualizando..." : "Cambiar contraseña"}
              </button>
            </div>
          </form>
        </Card>
      </div>

     {/* DISPONIBILIDAD (V2 - SOLO LECTURA) */}
<Card
  title="Disponibilidad"
  subtitle="Versión 2 (próximamente). Esta opción se activará en una actualización posterior."
>
  <div className="space-y-4">
    {/* Banner informativo */}
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">Próximamente (V2)</p>
      <p className="mt-1 text-sm text-slate-600">
        En la versión 2 podrás definir tus días y horarios disponibles para mejorar el matching y las
        notificaciones. Por ahora está desactivado.
      </p>
    </div>

    {/* UI final (desactivada) */}
    <fieldset disabled className="space-y-4 opacity-60">
      {/* Días */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2">
          Días disponibles
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {[
            { key: "mon", label: "Lun" },
            { key: "tue", label: "Mar" },
            { key: "wed", label: "Mié" },
            { key: "thu", label: "Jue" },
            { key: "fri", label: "Vie" },
            { key: "sat", label: "Sáb" },
            { key: "sun", label: "Dom" },
          ].map((d) => (
            <label
              key={d.key}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              <input
                type="checkbox"
                checked={(() => {
                  try {
                    const obj = JSON.parse(form.availability_days || "{}");
                    return Boolean(obj?.[d.key]);
                  } catch {
                    return false;
                  }
                })()}
                readOnly
              />
              <span className="font-medium">{d.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Horario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2">
            Desde
          </label>
          <input
            type="time"
            value={form.availability_time_from || "17:00"}
            readOnly
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2">
            Hasta
          </label>
          <input
            type="time"
            value={form.availability_time_to || "20:00"}
            readOnly
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-white"
          />
        </div>
      </div>
    </fieldset>

    {/* Botón desactivado (estético, no funcional) */}
    <button
      type="button"
      disabled
      className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed"
      title="Disponible en la versión 2"
    >
      Guardar disponibilidad (V2)
    </button>
  </div>
</Card>

    </div>
  );
};

export default ProfileFullPage;
