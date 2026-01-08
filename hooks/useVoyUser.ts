// src/hooks/useVoyUser.ts
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/services/supabase";
import type { User } from "@/types";
import { mapLegacyRoleToBase, UserRole } from "@/types";
import { normalizeRole } from "@/pages/perfilesnew/roleResolver";

export type UseVoyUserState = {
  loading: boolean;
  error: string | null;
  voyUserId: string | null;
  voyUser: User | null;
  role: UserRole | null;
  baseRole: string | null;
  clientType: string | null;
  refetch: () => Promise<void>;
};

type VoyUserDataState = Omit<UseVoyUserState, "refetch">;

const INITIAL: VoyUserDataState = {
  loading: true,
  error: null,
  voyUserId: null,
  voyUser: null,
  role: null,
  baseRole: null,
  clientType: null,
};

export function useVoyUser(): UseVoyUserState {
  const [state, setState] = useState<VoyUserDataState>(INITIAL);

  const load = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // 1) VoyUserId por RPC (fuente única)
      const { data: voyUserId, error: rpcError } = await supabase.rpc("voy_current_user_id");
      if (rpcError) throw rpcError;

      if (!voyUserId) {
        setState({ ...INITIAL, loading: false });
        return;
      }

      // 2) Traer VoyUsers (perfil)
      const { data: voyUser, error } = await supabase
        .from("VoyUsers")
        .select("*")
        .eq("id", voyUserId)
        .single();

      if (error) throw error;

      const normalized = normalizeRole(voyUser.role) ?? (voyUser.role as UserRole);
      const mapped = mapLegacyRoleToBase(normalized);

      const user: User = {
        ...(voyUser as User),
        role: normalized,
        baseRole: mapped.baseRole,
        clientType: mapped.clientType,
      };

      setState({
        loading: false,
        error: null,
        voyUserId,
        voyUser: user,
        role: normalized,
        baseRole: mapped.baseRole,
        clientType: mapped.clientType,
      });
    } catch (e: any) {
      setState({
        ...INITIAL,
        loading: false,
        error: e?.message ?? "Error cargando VoyUser",
      });
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (!mounted) return;
      await load();
    })();

    return () => {
      mounted = false;
    };
  }, [load]);

  const refetch = useCallback(async () => {
    await load();
  }, [load]);

  return { ...state, refetch };
}
