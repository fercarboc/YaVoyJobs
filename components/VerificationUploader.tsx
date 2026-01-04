import React, { useEffect, useMemo, useState } from "react";
import {
  createSignedUrl,
  getCurrentVoyUser,
  saveVerificationToVoyUser,
  uploadVerificationFile,
} from "@/services/verificationStorage";

type UIType = "agency" | "helper" | "particular" | "company";

type Props = {
  defaultVerificationType?: UIType;
  showTypeSelector?: boolean;
};

function humanStatus(s: string | null | undefined) {
  if (!s) return "Sin solicitar";
  if (s === "pending") return "Pendiente";
  if (s === "verified") return "Verificado";
  if (s === "rejected") return "Rechazado";
  return s;
}

function isHttpUrl(v?: string | null) {
  return !!v && /^https?:\/\//i.test(v);
}

/**
 * Normaliza valores que a veces vienen como URL completa (public o signed)
 * y otras como path. Para signedUrl, Supabase necesita PATH, no URL.
 */
function normalizeStoragePath(v: string) {
  if (!isHttpUrl(v)) return v;

  // Caso: .../storage/v1/object/public/<bucket>/<path>
  const m1 = v.match(/\/storage\/v1\/object\/public\/[^/]+\/(.+)$/);
  if (m1?.[1]) return decodeURIComponent(m1[1]);

  // Caso: .../storage/v1/object\/sign/<bucket>/<path>?token=...
  const m2 = v.match(/\/storage\/v1\/object\/sign\/[^/]+\/(.+?)(\?|$)/);
  if (m2?.[1]) return decodeURIComponent(m2[1]);

  // Si no reconoce patrón, devuelve tal cual (se tratará como URL)
  return v;
}

export default function VerificationUploader({
  defaultVerificationType = "helper",
  showTypeSelector = false,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const [voyUser, setVoyUser] = useState<any>(null);

  const [verificationType, setVerificationType] = useState<UIType>(defaultVerificationType);
  const [verificationDocument, setVerificationDocument] = useState<string>("NIF");

  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  const [documentPreview, setDocumentPreview] = useState<string | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

  // OJO: puede venir URL o path. Normalizamos para lógica interna.
  const docPath = useMemo(() => {
    const v = voyUser?.document_photo_url as string | null;
    return v ? normalizeStoragePath(v) : null;
  }, [voyUser]);

  const selfiePath = useMemo(() => {
    const v = voyUser?.selfie_photo_url as string | null;
    return v ? normalizeStoragePath(v) : null;
  }, [voyUser]);

  const load = async () => {
    setLoading(true);
    setErr(null);
    setOk(null);
    try {
      const u = await getCurrentVoyUser();
      setVoyUser(u);

      const typeToUse = (u?.verification_type as UIType) || defaultVerificationType;
      setVerificationType(typeToUse);

      if (u?.verification_document) {
        setVerificationDocument(u.verification_document);
      }

      // Previews: si es URL completa, usarla tal cual.
      // Si es path, crear signed url.
      if (u?.document_photo_url) {
        const raw = u.document_photo_url as string;
        const normalized = normalizeStoragePath(raw);

        const url = isHttpUrl(raw)
          ? raw
          : await createSignedUrl(normalized, 600);

        setDocumentPreview(url);
      } else {
        setDocumentPreview(null);
      }

      if (u?.selfie_photo_url) {
        const raw = u.selfie_photo_url as string;
        const normalized = normalizeStoragePath(raw);

        const url = isHttpUrl(raw)
          ? raw
          : await createSignedUrl(normalized, 600);

        setSelfiePreview(url);
      } else {
        setSelfiePreview(null);
      }
    } catch (e: any) {
      setErr(e?.message || "No se pudo cargar la verificacion");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultVerificationType]);

  const onPickDoc = (f: File | null) => {
    setDocumentFile(f);
    setOk(null);
    setErr(null);
    setDocumentPreview(f ? URL.createObjectURL(f) : null);
  };

  const onPickSelfie = (f: File | null) => {
    setSelfieFile(f);
    setOk(null);
    setErr(null);
    setSelfiePreview(f ? URL.createObjectURL(f) : null);
  };

  const handleSubmit = async () => {
    if (!voyUser?.id) return;

    // Nota: docPath/selfiePath ya están normalizados (si venía URL, extrae path si puede)
    if (!documentFile && !docPath) {
      setErr("Sube tu documento (NIF/NIE/CIF) para solicitar verificacion.");
      return;
    }
    if (!selfieFile && !selfiePath) {
      setErr("Sube un selfie para solicitar verificacion.");
      return;
    }

    setSaving(true);
    setErr(null);
    setOk(null);

    try {
      let newDocPath: string | null | undefined = undefined;
      let newSelfiePath: string | null | undefined = undefined;

      if (documentFile) {
        const up = await uploadVerificationFile({
          voyUserId: voyUser.id,
          verificationType,
          kind: "document",
          file: documentFile,
        });
        newDocPath = up.path;
      }

      if (selfieFile) {
        const up = await uploadVerificationFile({
          voyUserId: voyUser.id,
          verificationType,
          kind: "selfie",
          file: selfieFile,
        });
        newSelfiePath = up.path;
      }

      await saveVerificationToVoyUser({
        voyUserId: voyUser.id,
        verificationType,
        verification_document: verificationDocument,
        // si no se sube nuevo, no se toca (undefined)
        // si se sube nuevo, guardamos PATH (up.path)
        // si existía URL, docPath/selfiePath ya está normalizado, pero NO lo reenviamos aquí
        // para no sobreescribir con valores antiguos.
        documentPath: newDocPath,
        selfiePath: newSelfiePath,
      });

      setOk("Solicitud de verificacion enviada. Estado: Pendiente.");
      await load();
      setDocumentFile(null);
      setSelfieFile(null);
    } catch (e: any) {
      setErr(e?.message || "No se pudo enviar la solicitud de verificacion");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-sm text-gray-600">Cargando verificacion...</div>;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Verificacion de identidad</h2>
          <p className="text-sm text-gray-600">
            Sube documento y selfie. El equipo revisara y validara tu cuenta.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700">
          {humanStatus(voyUser?.verification_status)}
        </span>
      </div>

      {err && (
        <div className="px-4 py-3 rounded-xl text-sm bg-red-50 text-red-700 border border-red-200">
          {err}
        </div>
      )}
      {ok && (
        <div className="px-4 py-3 rounded-xl text-sm bg-green-50 text-green-700 border border-green-200">
          {ok}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500">Tipo de verificacion</label>
          {showTypeSelector ? (
            <select
              value={verificationType}
              onChange={(e) => setVerificationType(e.target.value as UIType)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            >
              <option value="helper">Trabajador</option>
              <option value="particular">Particular</option>
              <option value="company">Empresa</option>
              <option value="agency">Inmobiliaria</option>
            </select>
          ) : (
            <div className="px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-800">
              {verificationType === "helper" && "Trabajador"}
              {verificationType === "particular" && "Particular"}
              {verificationType === "company" && "Empresa"}
              {verificationType === "agency" && "Inmobiliaria"}
            </div>
          )}
          <p className="text-xs text-gray-500">
            Esto define la carpeta en Storage:{" "}
            <span className="font-semibold">{verificationType}/{"{VoyUserId}"}/...</span>
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500">Documento</label>
          <select
            value={verificationDocument}
            onChange={(e) => setVerificationDocument(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
          >
            <option value="NIF">NIF</option>
            <option value="NIE">NIE</option>
            <option value="CIF">CIF</option>
            <option value="PASSPORT">Pasaporte</option>
          </select>
          <p className="text-xs text-gray-500">Se guarda en VoyUsers.verification_document.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-900">Documento</p>
            {docPath ? (
              <span className="text-xs text-gray-500">Ya subido</span>
            ) : (
              <span className="text-xs text-gray-500">Pendiente</span>
            )}
          </div>

          <input
            type="file"
            accept="image/png,image/jpeg,application/pdf"
            onChange={(e) => onPickDoc(e.target.files?.[0] || null)}
            className="block w-full text-sm"
          />

          {documentPreview && (
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              {documentFile?.type === "application/pdf" ? (
                <p className="text-sm text-gray-700">
                  PDF seleccionado: <span className="font-semibold">{documentFile.name}</span>
                </p>
              ) : (
                <img
                  src={documentPreview}
                  alt="Documento"
                  className="w-full rounded-lg object-cover max-h-56"
                />
              )}
            </div>
          )}

          <p className="text-xs text-gray-500">
            Formatos: JPG/PNG/PDF. Recomendado: foto clara y legible. Max 10MB.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-900">Selfie</p>
            {selfiePath ? (
              <span className="text-xs text-gray-500">Ya subido</span>
            ) : (
              <span className="text-xs text-gray-500">Pendiente</span>
            )}
          </div>

          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={(e) => onPickSelfie(e.target.files?.[0] || null)}
            className="block w-full text-sm"
          />

          {selfiePreview && (
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <img
                src={selfiePreview}
                alt="Selfie"
                className="w-full rounded-lg object-cover max-h-56"
              />
            </div>
          )}

          <p className="text-xs text-gray-500">Formatos: JPG/PNG. Max 6MB. Hazlo con buena luz.</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={load}
          className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700"
        >
          Recargar
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold disabled:opacity-60"
        >
          {saving ? "Enviando..." : "Solicitar verificacion"}
        </button>
      </div>
    </div>
  );
}
