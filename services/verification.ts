import { supabase } from "@/services/supabase";

export type VerificationStatus = "pending" | "verified" | "rejected" | null;

export type VerificationType = "helper" | "company" | "particular" | null;

export type VerificationData = {
  verification_status: VerificationStatus;
  verification_type: VerificationType;
  verification_requested_at: string | null;
  verification_document: string | null;
};

export async function fetchVerification(userId: string): Promise<VerificationData> {
  const { data, error } = await supabase
    .from("VoyUsers")
    .select("verification_status, verification_type, verification_requested_at, verification_document")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return {
    verification_status: (data?.verification_status ?? null) as VerificationStatus,
    verification_type: (data?.verification_type ?? null) as VerificationType,
    verification_requested_at: data?.verification_requested_at ?? null,
    verification_document: data?.verification_document ?? null,
  };
}

/**
 * Solicita verificación:
 * - deja status=pending
 * - guarda verification_type
 * - guarda verification_requested_at
 * - guarda verification_document (opcional, por ejemplo: "NIF" o "Cif")
 */
export async function requestVerification(params: {
  userId: string;
  verification_type: VerificationType;
  verification_document?: string | null;
}): Promise<void> {
  const { userId, verification_type, verification_document } = params;

  const { error } = await supabase
    .from("VoyUsers")
    .update({
      verification_status: "pending",
      verification_type,
      verification_requested_at: new Date().toISOString(),
      verification_document: verification_document ?? null,
    })
    .eq("id", userId);

  if (error) throw error;
}
