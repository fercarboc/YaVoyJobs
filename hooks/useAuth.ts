// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { supabase } from "@/services/supabase";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionUser, setSessionUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!mounted) return;

      if (error) {
        console.error("[useAuth] getSession error:", error);
        setIsAuthenticated(false);
        setSessionUser(null);
        setLoading(false);
        return;
      }

      const user = data.session?.user ?? null;
      setSessionUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!mounted) return;
      const user = session?.user ?? null;
      setSessionUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setSessionUser(null);
  };

  return { loading, isAuthenticated, sessionUser, logout };
}
