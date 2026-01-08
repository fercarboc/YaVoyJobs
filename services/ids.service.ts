// src/services/ids.service.ts
import { supabase } from "@/services/supabase";

/**
 * Convierte VoyUsers.id -> auth.users.id (auth_user_id)
 * Usa RPC para evitar problemas con RLS.
 *
 * Requiere RPC en Supabase:
 *  - voy_auth_user_id_by_voy_user_id(voy_user_id uuid) returns uuid
 */
export async function getAuthUserIdByVoyUserId(voyUserId: string): Promise<string | null> {
  if (!voyUserId) return null;

  const { data, error } = await supabase.rpc("voy_auth_user_id_by_voy_user_id", {
    voy_user_id: voyUserId,
  });

  if (error) {
    console.error("[ids.service] getAuthUserIdByVoyUserId RPC error:", error);
    return null;
  }

  return (data as string) ?? null;
}
