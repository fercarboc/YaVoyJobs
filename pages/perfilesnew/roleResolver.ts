import { supabase } from "@/services/supabase";
import type { AuthState } from "@/types";
import { UserRole } from "@/types";

// ✅ CanonicalRole pasa a ser un alias de UserRole (sin tipos incompatibles)
export type CanonicalRole = UserRole;

// ✅ Ahora el mapa devuelve UserRole (no strings sueltos)
const LEGACY_ROLE_MAP: Record<string, UserRole> = {
  ADMIN: UserRole.ADMIN,
  HELPER: UserRole.HELPER,
  PARTICULAR: UserRole.PARTICULAR,
  COMPANY: UserRole.COMPANY,
  AGENCY: UserRole.AGENCY,
  PROVIDER: UserRole.PROVIDER,

  // legacy / compat
  WORKER: UserRole.HELPER, // worker antiguo -> helper
  CLIENT: UserRole.PARTICULAR, // client antiguo -> particular
  REAL_ESTATE: UserRole.AGENCY,
  INMO: UserRole.AGENCY,
  MARKET_PROVIDER: UserRole.PROVIDER,
};

export function normalizeRole(input?: string | null): UserRole | null {
  if (!input) return null;

  const r = input.toUpperCase().trim();

  // ✅ Usa el mapa primero (más mantenible)
  return LEGACY_ROLE_MAP[r] ?? null;
}

export async function resolveCanonicalRole(auth: AuthState): Promise<UserRole | null> {
  const sources = [
    (auth as any).voyUser?.role,
    (auth as any).profile?.role,
    auth.user?.role,
    (auth as any).role,
  ];

  for (const candidate of sources) {
    const normalized = normalizeRole(typeof candidate === "string" ? candidate : null);
    if (normalized) return normalized;
  }

  // ⚠️ En tu tipo User:
  // - auth.user.id = VoyUsers.id
  // - auth.user.auth_user_id = Supabase Auth ID
  const authUserId = auth.user?.auth_user_id;
  if (!authUserId) return null;

  try {
    const { data, error } = await supabase
      .from("VoyUsers")
      .select("role")
      .eq("auth_user_id", authUserId)
      .maybeSingle();

    if (error) {
      console.error("[roleResolver] error loading role from VoyUsers", error);
      return null;
    }

    return normalizeRole(data?.role ?? null);
  } catch (err) {
    console.error("[roleResolver] failed to resolve role", err);
    return null;
  }
}
