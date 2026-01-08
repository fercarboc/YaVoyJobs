import { supabase } from "@/services/supabase";

/**
 * Si ya viene una URL firmada (http/https), la devolvemos tal cual.
 * Si viene un path, firmamos contra un bucket.
 */
export async function getSignedUrl(bucket: string, pathOrUrl: string, expiresIn = 3600): Promise<string> {
  if (!pathOrUrl) throw new Error("Path vacío");
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;

  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(pathOrUrl, expiresIn);
  if (error) throw error;
  return data.signedUrl;
}

/**
 * Firma intentando en varios buckets (por tu BD actual: a veces user-documents, a veces voy-verification)
 */
export async function getSignedUrlAuto(pathOrUrl: string, expiresIn = 3600): Promise<string> {
  if (!pathOrUrl) throw new Error("Path vacío");
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;

  const bucketsToTry = ["voy-verification", "user-documents"];

  let lastErr: any = null;
  for (const bucket of bucketsToTry) {
    try {
      return await getSignedUrl(bucket, pathOrUrl, expiresIn);
    } catch (e) {
      lastErr = e;
    }
  }

  throw lastErr ?? new Error("No se pudo firmar la URL en ningún bucket");
}

/**
 * Fuente única recomendada: RPC voy_current_user_id
 * (evita query extra a VoyUsers por auth_user_id)
 */
export async function getCurrentVoyUserId(): Promise<string> {
  const { data, error } = await supabase.rpc("voy_current_user_id");
  if (error) throw error;
  if (!data) throw new Error("No autenticado o VoyUser no resuelto");
  return data as string;
}

export async function uploadLogo({ file }: { file: File }): Promise<string> {
  const voyUserId = await getCurrentVoyUserId();

  const ext = (file.name.split(".").pop() || "png").toLowerCase();
  const ts = Date.now();
  const path = `${voyUserId}/logo_${ts}.${ext}`;

  const { error } = await supabase.storage
    .from("voy-logos")
    .upload(path, file, { upsert: true, cacheControl: "3600", contentType: file.type });

  if (error) throw error;

  const { error: updateErr } = await supabase
    .from("VoyUsers")
    .update({ company_logo_url: path })
    .eq("id", voyUserId);

  if (updateErr) throw updateErr;

  return path;
}

export async function setAvatarFromSelfie(): Promise<string> {
  const voyUserId = await getCurrentVoyUserId();

  const { data: userRow, error: fetchError } = await supabase
    .from("VoyUsers")
    .select("selfie_photo_url")
    .eq("id", voyUserId)
    .single();

  if (fetchError) throw fetchError;

  const selfiePathOrUrl = (userRow?.selfie_photo_url as string | null) ?? null;
  if (!selfiePathOrUrl) throw new Error("No hay selfie subida todavía.");

  // Guardamos el mismo valor (path o url) como avatar_url
  const { error: updateError } = await supabase
    .from("VoyUsers")
    .update({ avatar_url: selfiePathOrUrl })
    .eq("id", voyUserId);

  if (updateError) throw updateError;

  return selfiePathOrUrl;
}
