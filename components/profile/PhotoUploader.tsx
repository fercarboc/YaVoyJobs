import React, { useState } from "react";
import { supabase } from "@/services/supabase";
import { theme } from "@/theme";

type Props = {
  userId: string;
  label: string;
  field: "selfie_photo_url" | "document_photo_url";
  currentUrl: string | null;
  onUploaded: (url: string) => void;
};

export default function PhotoUploader({
  userId,
  label,
  field,
  currentUrl,
  onUploaded,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const bucket = "user-documents";

  const upload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${userId}/${field}_${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          upsert: true,
          cacheControl: "3600",
          contentType: file.type || "image/jpeg",
        });

      if (uploadError) throw uploadError;

      // Preferimos public URL si el bucket es público
      const { data: pub } = supabase.storage.from(bucket).getPublicUrl(path);
      let finalUrl = pub?.publicUrl ?? null;

      // Si no hay pública, generamos signed
      if (!finalUrl) {
        const { data: signed, error: signErr } =
          await supabase.storage
            .from(bucket)
            .createSignedUrl(path, 60 * 60 * 24 * 30);

        if (signErr) throw signErr;
        finalUrl = signed?.signedUrl ?? null;
      }

      if (!finalUrl) throw new Error("No se pudo obtener URL de la imagen");

      // Guardamos en BD
      const { error: dbErr } = await supabase
        .from("VoyUsers")
        .update({ [field]: finalUrl })
        .eq("id", userId);

      if (dbErr) throw dbErr;

      onUploaded(finalUrl);
      setFile(null);
      alert("Imagen subida correctamente");
    } catch (e: any) {
      console.error(e);
      alert("Error al subir imagen: " + (e?.message ?? "desconocido"));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl p-3 bg-gray-50">
      <div className="text-sm font-semibold text-slate-800">{label}</div>

      <div className="mt-2 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
            {currentUrl ? (
              <img
                src={currentUrl}
                alt={label}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[10px] text-gray-400 text-center px-1">
                Sin imagen
              </span>
            )}
          </div>

          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />

            {file && (
              <div className="text-xs text-slate-600 mt-1">{file.name}</div>
            )}
          </div>
        </div>

        <button
          type="button"
          disabled={!file || uploading}
          onClick={upload}
          className="px-3 py-2 rounded-lg text-xs font-bold w-full sm:w-auto"
          style={{
            background: theme.colors.primary,
            color: theme.colors.surface,
            opacity: !file || uploading ? 0.6 : 1,
          }}
        >
          {uploading ? "Subiendo..." : "Subir"}
        </button>
      </div>
    </div>
  );
}
