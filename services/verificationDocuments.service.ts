import { supabase } from "@/services/supabase";

export type VerifDocType = "dni_front" | "dni_back" | "cif" | "selfie" | "logo";

const BUCKET = "voy-verification";

async function getVoyUserId(): Promise<string> {
  const { data: auth, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;
  const uid = auth.user?.id;
  if (!uid) throw new Error("No session");

  const { data, error } = await supabase.from("VoyUsers").select("id").eq("auth_user_id", uid).single();
  if (error) throw error;
  return data.id as string;
}

export async function uploadVerificationDoc(input: {
  type: VerifDocType;
  file: File;
  scopeFolder: "helper" | "company" | "particular" | "agency";
}) {
  const voyUserId = await getVoyUserId();
  const ext = input.file.name.split(".").pop()?.toLowerCase() || "bin";
  const safeName = `${input.type}.${ext}`;
  const path = `${input.scopeFolder}/${voyUserId}/${Date.now()}_${safeName}`;

  // 1) sube a storage (privado)
  const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, input.file, {
    upsert: true,
    contentType: input.file.type || undefined,
  });
  if (upErr) throw upErr;

  // 2) registra en tabla
  const { error: insErr } = await supabase.from("VoyVerificationDocuments").insert({
    user_id: voyUserId,
    doc_type: input.type,
    file_path: path,
    mime_type: input.file.type || null,
    size_bytes: input.file.size,
    status: "pending",
  });
  if (insErr) throw insErr;

  return { path };
}

export async function getSignedVerificationUrl(path: string, expiresIn = 60 * 10) {
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, expiresIn);
  if (error) throw error;
  return data.signedUrl;
}

export async function listMyVerificationDocs() {
  const voyUserId = await getVoyUserId();
  const { data, error } = await supabase
    .from("VoyVerificationDocuments")
    .select("*")
    .eq("user_id", voyUserId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
