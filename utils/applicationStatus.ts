export type ApplicationStatus = "IN_REVIEW" | "ACCEPTED" | "REJECTED";

export const APPLICATION_STATUS_STYLES: Record<
  ApplicationStatus,
  { label: string; bubble: string; text: string }
> = {
  IN_REVIEW: {
    label: "En revisión",
    bubble: "bg-yellow-100 text-yellow-800",
    text: "text-yellow-700",
  },
  ACCEPTED: {
    label: "Aceptada",
    bubble: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  },
  REJECTED: {
    label: "Rechazada",
    bubble: "bg-rose-100 text-rose-700",
    text: "text-rose-600",
  },
};

export function mapApplicationStatus(status?: string | null): ApplicationStatus {
  if (!status) return "IN_REVIEW";
  const normalized = status.toUpperCase();
  if (normalized === "ACCEPTED") return "ACCEPTED";
  if (normalized === "COMPLETED") return "ACCEPTED";
  if (normalized === "REJECTED" || normalized === "CANCELLED") return "REJECTED";
  return "IN_REVIEW";
}
