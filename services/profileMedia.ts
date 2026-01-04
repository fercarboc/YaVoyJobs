import { supabase } from "@/services/supabase";

export async function getSignedUrl(bucket: string, path: string, expiresIn = 3600): Promise<string> {
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresIn);
  if (error) throw error;
  return data.signedUrl;
}

export async function getCurrentVoyUserId(): Promise<string> {
  const { data: auth, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;
  const uid = auth.user?.id;
  if (!uid) throw new Error("No autenticado");

  const { data, error } = await supabase
    .from("VoyUsers")
    .select("id")
    .eq("auth_user_id", uid)
    .single();
  if (error) throw error;
  if (!data?.id) throw new Error("Usuario no encontrado");
  return data.id as string;
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

  const selfiePath = userRow?.selfie_photo_url as string | null;
  if (!selfiePath) throw new Error("No hay selfie subida todavía.");

  const { error: updateError } = await supabase
    .from("VoyUsers")
    .update({ avatar_url: selfiePath })
    .eq("id", voyUserId);
  if (updateError) throw updateError;

  return selfiePath;
}
