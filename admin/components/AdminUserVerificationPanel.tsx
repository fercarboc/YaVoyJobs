import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";
import { getSignedUrl } from "@/services/profileMedia";

type Props = {
  userId: string;
};

type VoyUser = {
  id: string;
  full_name: string | null;
  email: string | null;
  verification_status: string | null;
  verification_type: string | null;
  verification_document: string | null;
  document_photo_url: string | null;
  selfie_photo_url: string | null;
  company_logo_url: string | null;
};

export default function AdminUserVerificationPanel({ userId }: Props) {
  const [user, setUser] = useState<VoyUser | null>(null);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("VoyUsers")
        .select(
          "id, full_name, email, verification_status, verification_type, verification_document, document_photo_url, selfie_photo_url, company_logo_url"
        )
        .eq("id", userId)
        .single();
      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }
      setUser(data as VoyUser);

      if (data?.document_photo_url) {
        try {
          const url = await getSignedUrl("voy-verification", data.document_photo_url, 600);
          setDocUrl(url);
        } catch (e) {
          console.error(e);
        }
      } else {
        setDocUrl(null);
      }

      if (data?.selfie_photo_url) {
        try {
          const url = await getSignedUrl("voy-verification", data.selfie_photo_url, 600);
          setSelfieUrl(url);
        } catch (e) {
          console.error(e);
        }
      } else {
        setSelfieUrl(null);
      }

      if (data?.company_logo_url) {
        try {
          const url = await getSignedUrl("voy-logos", data.company_logo_url, 600);
          setLogoUrl(url);
        } catch (e) {
          console.error(e);
        }
      } else {
        setLogoUrl(null);
      }

      setLoading(false);
    };
    load();
  }, [userId]);

  const updateStatus = async (status: "verified" | "rejected") => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("VoyUsers")
      .update({ verification_status: status })
      .eq("id", user.id);
    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      setUser({ ...user, verification_status: status });
    }
    setSaving(false);
  };

  if (loading) return <div className="text-sm text-gray-600">Cargando...</div>;
  if (!user) return <div className="text-sm text-red-600">Usuario no encontrado.</div>;

  const isCompany = user.verification_type === "company" || user.verification_type === "agency";

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          {user.full_name || "Sin nombre"} — {user.email}
        </h3>
        <p className="text-xs text-slate-500">
          Estado: {user.verification_status || "—"} · Tipo: {user.verification_type || "—"} · Doc:{" "}
          {user.verification_document || "—"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="border rounded-xl p-3 bg-white space-y-2">
          <div className="text-sm font-semibold">Documento</div>
          {docUrl ? (
            <img src={docUrl} alt="Documento" className="w-full rounded-lg border object-contain max-h-80" />
          ) : (
            <div className="text-xs text-gray-500">Sin documento</div>
          )}
        </div>

        <div className="border rounded-xl p-3 bg-white space-y-2">
          <div className="text-sm font-semibold">{isCompany ? "Logo" : "Selfie"}</div>
          {isCompany ? (
            logoUrl ? (
              <img src={logoUrl} alt="Logo" className="w-full rounded-lg border object-contain max-h-80" />
            ) : (
              <div className="text-xs text-gray-500">Sin logo</div>
            )
          ) : selfieUrl ? (
            <img src={selfieUrl} alt="Selfie" className="w-full rounded-lg border object-contain max-h-80" />
          ) : (
            <div className="text-xs text-gray-500">Sin selfie</div>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => updateStatus("verified")}
          disabled={saving}
          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold disabled:opacity-60"
        >
          ✅ Verificar
        </button>
        <button
          type="button"
          onClick={() => updateStatus("rejected")}
          disabled={saving}
          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold disabled:opacity-60"
        >
          ❌ Rechazar
        </button>
      </div>
    </div>
  );
}
