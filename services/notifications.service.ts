import { supabase } from "@/services/supabase";
import { getCurrentVoyUserId } from "@/services/jobs.service";
import type { Notification } from "@/types";

export type NotificationRow = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  related_job_id?: string;
  related_application_id?: string;
  is_read: boolean;
  created_at: string;
};

export async function listUnreadNotificationsForWorker(): Promise<NotificationRow[]> {
  const me = await getCurrentVoyUserId();
  const { data, error } = await supabase
    .from("VoyNotifications")
    .select("*")
    .eq("user_id", me)
    .eq("is_read", false);
  if (error) throw error;
  return (data ?? []) as NotificationRow[];
}

export async function markNotificationsAsRead(ids: string[]): Promise<void> {
  if (!ids.length) return;
  const { error } = await supabase.from("VoyNotifications").update({ is_read: true }).in("id", ids);
  if (error) throw error;
}

export async function markApplicationsNotificationsRead(applicationIds: string[]): Promise<void> {
  if (!applicationIds.length) return;
  const { data, error } = await supabase
    .from("VoyNotifications")
    .select("id")
    .in("related_application_id", applicationIds)
    .eq("is_read", false);

  if (error) throw error;
  const ids = (data ?? []).map((row: any) => row.id);
  if (ids.length) {
    await markNotificationsAsRead(ids);
  }
}

export type NotificationPayload = {
  userId: string;
  title: string;
  message: string;
  type: Notification["type"];
  relatedJobId?: string;
  relatedApplicationId?: string;
};

export async function createNotification(payload: NotificationPayload): Promise<void> {
  const { error } = await supabase.from("VoyNotifications").insert({
    user_id: payload.userId,
    title: payload.title,
    message: payload.message,
    type: payload.type,
    related_job_id: payload.relatedJobId ?? null,
    related_application_id: payload.relatedApplicationId ?? null,
    is_read: false,
  });
  if (error) throw error;
}
