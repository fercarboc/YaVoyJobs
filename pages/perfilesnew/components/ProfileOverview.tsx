import React, { useState } from "react";
import { useVoyUser } from "@/hooks/useVoyUser";
import { useAuth } from "@/hooks/useAuth";
import { useSignedMediaUrl } from "@/hooks/useSignedMediaUrl";

type ProfileOverviewProps = {
  onGoSecurity?: () => void;
  onGoVerification?: () => void;
};

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ onGoSecurity, onGoVerification }) => {
  const { voyUser, role, loading, error } = useVoyUser();
  const { logout } = useAuth();

  const name = voyUser?.full_name ?? voyUser?.email ?? "Usuario YaVoy";
  const email = voyUser?.email ?? "Sin correo asignado";
  const location = (voyUser as any)?.city ?? "Ciudad pendiente";
  const roleLabel = role ?? ((voyUser as any)?.role as any) ?? "Rol sin definir";

  const avatarPathOrUrl = (voyUser as any)?.avatar_url as string | null | undefined;
  const { url: avatarUrl } = useSignedMediaUrl(avatarPathOrUrl);

  const verificationStatusRaw = (voyUser as any)?.verification_status as string | null | undefined;
  const statusUp = (verificationStatusRaw ?? "").toString().toUpperCase();
  const isVerified = ["VERIFIED", "APPROVED", "OK"].includes(statusUp);

  const securityLabel = voyUser
    ? isVerified
      ? "Cuenta verificada"
      : verificationStatusRaw
        ? `Verificación: ${verificationStatusRaw}`
        : "Verificación pendiente"
    : "—";

  const securityClass = voyUser ? (isVerified ? "text-emerald-600" : "text-amber-600") : "text-slate-500";

  return (
    <section className="space-y-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Perfil</p>
          <h2 className="text-3xl font-semibold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-500">{email}</p>
          {error ? <p className="mt-2 text-sm text-red-600">Error: {error}</p> : null}
        </div>

        <div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden flex items-center justify-center text-slate-600 font-semibold text-lg">
          {avatarUrl ? <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" /> : name.charAt(0).toUpperCase()}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Ubicación</p>
          <p className="text-sm font-medium text-slate-700">{loading ? "Cargando..." : location}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Rol</p>
          <p className="text-sm font-medium text-slate-700">{loading ? "Cargando..." : roleLabel}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Seguridad</p>
          <p className={`text-sm font-medium ${securityClass}`}>{loading ? "Cargando..." : securityLabel}</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={onGoVerification}
          disabled={!onGoVerification}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-60"
        >
          Ir a verificación
        </button>

        <button
          type="button"
          onClick={onGoSecurity}
          disabled={!onGoSecurity}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-60"
        >
          Seguridad y contraseña
        </button>

      
      </div>
    </section>
  );
};

export default ProfileOverview;
