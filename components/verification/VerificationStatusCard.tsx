import React, { useEffect, useMemo, useState } from "react";
import { theme } from "@/theme";
import { Button } from "@/components/common/Button";
import { AuthState, UserRole } from "@/types";
import {
  fetchVerification,
  requestVerification,
  VerificationData,
  VerificationType,
} from "@/services/verification";

type Props = {
  auth: AuthState;
};

function badgeStyles(status: VerificationData["verification_status"]) {
  switch (status) {
    case "verified":
      return "bg-green-100 text-green-800 border-green-200";
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
}

function statusLabel(status: VerificationData["verification_status"]) {
  switch (status) {
    case "verified":
      return "Verificado";
    case "pending":
      return "En revisión";
    case "rejected":
      return "Rechazado";
    default:
      return "Sin solicitar";
  }
}

function typeFromRole(role: UserRole): VerificationType {
  if (role === UserRole.HELPER) return "helper";
  if (role === UserRole.COMPANY) return "company";
  return "particular";
}

export default function VerificationStatusCard({ auth }: Props) {
  const userId = auth.user?.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<VerificationData>({
    verification_status: null,
    verification_type: null,
    verification_requested_at: null,
    verification_document: null,
  });

  const role = auth.user?.role;
  const derivedType = useMemo(() => {
    if (!role) return null;
    return typeFromRole(role);
  }, [role]);

  const reload = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const v = await fetchVerification(userId);
      setData(v);
    } catch (e) {
      console.error("fetchVerification error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const onRequest = async () => {
    if (!userId) return;
    if (!derivedType) return;

    // si falta selfie o documento, avisamos (es lo que quieres UX-wise)
    const selfieOk = !!auth.user?.selfie_photo_url;
    const docOk = !!(auth.user as any)?.document_photo_url;

    if (!selfieOk || !docOk) {
      alert("Antes de solicitar verificación, sube tu selfie y la foto del documento.");
      return;
    }

    setSaving(true);
    try {
      await requestVerification({
        userId,
        verification_type: derivedType,
        verification_document: auth.user?.document_type ?? null,
      });

      alert("Solicitud enviada. Estado: En revisión.");
      await reload();
    } catch (e: any) {
      console.error(e);
      alert("Error al solicitar verificación: " + (e?.message ?? "desconocido"));
    } finally {
      setSaving(false);
    }
  };

  const requestedAt = data.verification_requested_at
    ? new Date(data.verification_requested_at).toLocaleString()
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Verificación</h2>
          <p className="text-xs text-slate-500 mt-1">
            Subir selfie + documento te permite acceder a más trabajos y generar confianza.
          </p>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-[11px] font-bold border ${badgeStyles(
            data.verification_status
          )}`}
        >
          {loading ? "Cargando..." : statusLabel(data.verification_status)}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
          <div className="text-slate-500">Tipo</div>
          <div className="text-slate-900 font-semibold">
            {data.verification_type ?? derivedType ?? "-"}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
          <div className="text-slate-500">Fecha solicitud</div>
          <div className="text-slate-900 font-semibold">{requestedAt ?? "-"}</div>
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-600">
        Requisitos mínimos:
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Selfie subida</li>
          <li>Documento subido</li>
          <li>Datos básicos completos</li>
        </ul>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <Button onClick={onRequest} disabled={saving || loading}>
          {saving ? "Enviando..." : "Solicitar verificación"}
        </Button>

        <button
          type="button"
          onClick={reload}
          className="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition"
          style={{ color: theme.colors.text }}
        >
          Refrescar
        </button>
      </div>

      {data.verification_status === "rejected" && (
        <div className="mt-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
          Tu verificación fue rechazada. Revisa que la foto del documento sea legible y la selfie esté clara.
        </div>
      )}
    </div>
  );
}
