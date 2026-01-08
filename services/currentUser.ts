// src/services/currentUser.ts
import { supabase } from "@/services/supabase";

export async function getAuthUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user ?? null;
}

export async function getVoyUserId(): Promise<string | null> {
  // Recomendado por tu guía: RPC única para ID
  const { data, error } = await supabase.rpc("voy_current_user_id");
  if (error) throw error;
  return data ?? null;
}

export async function getVoyUserById(voyUserId: string) {
  const { data, error } = await supabase
    .from("VoyUsers")
    .select("*")
    .eq("id", voyUserId)
    .single();

  if (error) throw error;
  return data;
}
