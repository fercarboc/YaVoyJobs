import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";
import { getSignedUrl, uploadLogo } from "@/services/profileMedia";

type Props = {
  title?: string;
  description?: string;
};

const MAX_MB = 3;
const ACCEPT = "image/png,image/jpeg,image/webp";
const LOGO_BUCKET = "voy-logos"; // bucket privado para logos

export default function LogoUploader({
  title = "Logo",
  description = "Sube el logo de tu empresa o inmobiliaria (PNG/JPG/WEBP).",
}: Props) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [logoPath, setLogoPath] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const load = async () => {
    setLoading(true);
    setFeedback(null);

    try {
      const { data: authData, error: authErr } = await supabase.auth.getUser();
      if (authErr) throw authErr;

      const uid = authData.user?.id;
      if (!uid) throw new Error("No session");

      const { data, error } = await supabase
        .from("VoyUsers")
        .select("company_logo_url")
        .eq("auth_user_id", uid)
        .single();

      if (error) throw error;

      const path = (data?.company_logo_url ?? null) as string | null;
      setLogoPath(path);

      if (path) {
        const signed = await getSignedUrl(LOGO_BUCKET, path, 3600);
        setLogoUrl(signed);
      } else {
        setLogoUrl(null);
      }
    } catch (e: any) {
      setFeedback({ type: "error", message: e?.message || "No se pudo cargar el logo" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onPick = async (file?: File | null) => {
    if (!file) return;
    setFeedback(null);

    if (!ACCEPT.split(",").includes(file.type)) {
      setFeedback({ type: "error", message: "Formato no válido. Usa PNG/JPG/WEBP." });
      return;
    }

    if (file.size > MAX_MB * 1024 * 1024) {
      setFeedback({ type: "error", message: `Máximo ${MAX_MB}MB.` });
      return;
    }

    setSaving(true);
    try {
      const path = await uploadLogo({ file });

      setLogoPath(path);

      const signed = await getSignedUrl(LOGO_BUCKET, path, 3600);

      setLogoUrl(signed);
      setFeedback({ type: "success", message: "Logo actualizado correctamente." });
    } catch (e: any) {
      setFeedback({ type: "error", message: e?.message || "No se pudo subir el logo" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {feedback && (
        <div
          className={`px-3 py-2 rounded-xl text-sm ${
            feedback.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {feedback.message}
        </div>
      )}

      {loading ? (
        <div className="text-sm text-gray-500">Cargando…</div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden flex items-center justify-center">
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs text-gray-400">Sin logo</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="px-3 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white cursor-pointer">
              {saving ? "Subiendo…" : "Subir logo"}
              <input
                type="file"
                accept={ACCEPT}
                className="hidden"
                onChange={(e) => onPick(e.target.files?.[0])}
                disabled={saving}
              />
            </label>

            <button
              type="button"
              onClick={load}
              className="px-3 py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700"
              disabled={saving}
            >
              Refrescar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
