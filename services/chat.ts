// src/services/chat.ts
import { supabase } from "@/services/supabase";
import type { UserRole } from "@/types";

/**
 * Tablas esperadas:
 * - VoyJobChats: id, job_id, client_user_id, helper_user_id, created_at
 * - VoyJobMessages: id, chat_id, sender_user_id, message, created_at, read_at
 * - VoyJobs: id, title (para getJobTitle)
 */

export type VoyJobChat = {
  id: string;
  job_id: string;
  client_user_id: string;
  helper_user_id: string;
  application_id?: string | null;
  created_at: string;
};

export type VoyJobMessage = {
  id: string;
  chat_id: string;
  sender_user_id: string;
  message: string;
  created_at: string;
  read_at: string | null;
};

// ✅ Alias para páginas antiguas que importan "VoyMessage"
export type VoyMessage = VoyJobMessage;

/** Buscar chat asociado a un jobId (si existe) */
export async function getChatByJobId(jobId: string) {
  const { data, error } = await supabase
    .from("VoyJobChats")
    .select("id, job_id, client_user_id, helper_user_id, application_id, created_at")
    .eq("job_id", jobId)
    .maybeSingle();

  if (error) throw error;
  return (data ?? null) as VoyJobChat | null;
}

export async function getChatById(chatId: string) {
  const { data, error } = await supabase
    .from("VoyJobChats")
    .select("id, job_id, client_user_id, helper_user_id, application_id, created_at")
    .eq("id", chatId)
    .maybeSingle();

  if (error) throw error;
  return (data ?? null) as VoyJobChat | null;
}

export async function getChatByApplicationId(applicationId: string) {
  const { data, error } = await supabase
    .from("VoyJobChats")
    .select("id, job_id, client_user_id, helper_user_id, application_id, created_at")
    .eq("application_id", applicationId)
    .maybeSingle();

  if (error) throw error;
  return (data ?? null) as VoyJobChat | null;
}

/** Crear chat si no existe */
export async function ensureChatForJob(params: {
  jobId: string;
  clientUserId: string;
  helperUserId: string;
}) {
  const { jobId, clientUserId, helperUserId } = params;

  const existing = await getChatByJobId(jobId);
  if (existing) return existing;

  const { data, error } = await supabase
    .from("VoyJobChats")
    .insert([
      {
        job_id: jobId,
        client_user_id: clientUserId,
        helper_user_id: helperUserId,
      },
    ])
    .select("id, job_id, client_user_id, helper_user_id, created_at")
    .single();

  if (error) throw error;
  return data as VoyJobChat;
}

export async function ensureChatForApplication(params: {
  applicationId: string;
  jobId: string;
  clientUserId: string;
  helperUserId: string;
}) {
  const { applicationId, jobId, clientUserId, helperUserId } = params;

  const existing = await getChatByApplicationId(applicationId);
  if (existing) return existing;

  const { data, error } = await supabase
    .from("VoyJobChats")
    .insert([
      {
        application_id: applicationId,
        job_id: jobId,
        client_user_id: clientUserId,
        helper_user_id: helperUserId,
      },
    ])
    .select("id, job_id, client_user_id, helper_user_id, application_id, created_at")
    .single();

  if (error) throw error;
  return data as VoyJobChat;
}

/** Listado de chats del usuario */
export async function listMyChats(params: { userId: string; role: UserRole }) {
  const { userId, role } = params;
  const isHelper = role === "HELPER";

  const q = supabase
    .from("VoyJobChats")
    .select("id, job_id, client_user_id, helper_user_id, created_at")
    .order("created_at", { ascending: false });

  const { data, error } = isHelper
    ? await q.eq("helper_user_id", userId)
    : await q.eq("client_user_id", userId);

  if (error) throw error;
  return (data ?? []) as VoyJobChat[];
}

/** Mensajes de un chat */
export async function listJobMessages(chatId: string, limit = 200) {
  const { data, error } = await supabase
    .from("VoyJobMessages")
    .select("id, chat_id, sender_user_id, message, created_at, read_at")
    .eq("chat_id", chatId)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return (data ?? []) as VoyJobMessage[];
}

/** Enviar mensaje */
export async function sendJobMessage(params: {
  chatId: string;
  senderUserId: string;
  message: string;
}) {
  const { chatId, senderUserId, message } = params;

  const { data, error } = await supabase
    .from("VoyJobMessages")
    .insert([
      {
        chat_id: chatId,
        sender_user_id: senderUserId,
        message,
      },
    ])
    .select("id, chat_id, sender_user_id, message, created_at, read_at")
    .single();

  if (error) throw error;
  return data as VoyJobMessage;
}

/** Marcar mensaje como leído */
export async function markMessageRead(messageId: string) {
  const { error } = await supabase
    .from("VoyJobMessages")
    .update({ read_at: new Date().toISOString() })
    .eq("id", messageId);

  if (error) throw error;
}

/** ✅ Devuelve el título del trabajo (para cabecera de chat) */
export async function getJobTitle(jobId: string): Promise<string> {
  const { data, error } = await supabase
    .from("VoyJobs")
    .select("title")
    .eq("id", jobId)
    .maybeSingle();

  if (error) throw error;
  return data?.title ?? "Chat";
}

/**
 * ✅ Suscripción realtime a mensajes de un chat.
 * Devuelve una función "unsubscribe" para limpiar en useEffect.
 */
export function subscribeToChatMessages(params: {
  chatId: string;
  onInsert: (msg: VoyJobMessage) => void;
}) {
  const { chatId, onInsert } = params;

  const channel = supabase
    .channel(`voy-chat-${chatId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "VoyJobMessages",
        filter: `chat_id=eq.${chatId}`,
      },
      (payload) => {
        const row = payload.new as any;
        onInsert({
          id: row.id,
          chat_id: row.chat_id,
          sender_user_id: row.sender_user_id,
          message: row.message,
          created_at: row.created_at,
          read_at: row.read_at ?? null,
        });
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

/* ------------------------------------------------------------------ */
/* ✅ COMPATIBILIDAD: exports que tus páginas estaban esperando          */
/* ------------------------------------------------------------------ */

// alias de nombres genéricos (para no tocar ChatListPage / ChatRoomPage aún)
export const listMessages = listJobMessages;
export const sendMessage = sendJobMessage;
