// src/services/verificationStorage.ts
import { supabase } from "@/services/supabase";

export type VerificationStatus = "pending" | "verified" | "rejected" | null;
export type VerificationType = "helper" | "company" | "particular" | "agency" | null;

const BUCKET = "voy-verification";

function extFromFile(file: File) {
  const nameExt = file.name.split(".").pop()?.toLowerCase();
  if (nameExt) return nameExt;
  const mime = file.type?.toLowerCase();
  if (mime.includes("png")) return "png";
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("pdf")) return "pdf";
  return "bin";
}

export async function getCurrentVoyUser() {
  const { data: auth, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;
  const uid = auth.user?.id;
  if (!uid) throw new Error("No session");

  const { data, error } = await supabase
    .from("VoyUsers")
    .select("id, auth_user_id, role, verification_status, verification_type, document_photo_url, selfie_photo_url, verification_requested_at, verification_document")
    .eq("auth_user_id", uid)
    .single();

  if (error) throw error;
  return data;
}

export async function uploadVerificationFile(params: {
  voyUserId: string;
  verificationType: "helper" | "agency" | "particular" | "company";
  kind: "document" | "selfie";
  file: File;
}) {
  const { voyUserId, verificationType, kind, file } = params;

  // Validaciones básicas
  const maxMB = kind === "selfie" ? 6 : 10;
  if (file.size > maxMB * 1024 * 1024) throw new Error(`El archivo supera ${maxMB}MB`);

  const allowed =
    kind === "document"
      ? ["image/jpeg", "image/png", "application/pdf"]
      : ["image/jpeg", "image/png"];

  if (!allowed.includes(file.type)) {
    throw new Error(
      kind === "document"
        ? "Documento: solo JPG/PNG/PDF"
        : "Selfie: solo JPG/PNG"
    );
  }

  const ext = extFromFile(file);
  const ts = Date.now();
  const path = `${voyUserId}/${kind}_${ts}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    upsert: true,
    contentType: file.type,
    cacheControl: "3600",
  });

  if (error) throw error;

  return { path };
}

export async function createSignedUrl(path: string, expiresInSeconds = 60 * 10) {
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, expiresInSeconds);
  if (error) throw error;
  return data.signedUrl;
}

export async function saveVerificationToVoyUser(params: {
  voyUserId: string;
  verificationType: "helper" | "agency" | "particular" | "company";
  documentPath?: string | null;
  selfiePath?: string | null;
  verification_document?: string | null; // "NIF" | "CIF" etc
}) {
  const { voyUserId, verificationType, documentPath, selfiePath, verification_document } = params;

  const payload: any = {
    verification_status: "pending",
    verification_type: verificationType,
    verification_requested_at: new Date().toISOString(),
  };

  // Guardamos paths en tus columnas existentes
  if (documentPath !== undefined) payload.document_photo_url = documentPath;
  if (selfiePath !== undefined) payload.selfie_photo_url = selfiePath;

  if (verification_document !== undefined) payload.verification_document = verification_document;

  const { error } = await supabase.from("VoyUsers").update(payload).eq("id", voyUserId);
  if (error) throw error;
}
