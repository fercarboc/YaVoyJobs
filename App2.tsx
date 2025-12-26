// src/App.tsx
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { supabase } from "@/services/supabase";
import { Layout } from "@/components/Layout";
import type { AuthState } from "@/types";
import AppRoutes from "@/components/routing/AppRoutes";

const INITIAL_AUTH: AuthState = { isAuthenticated: false, user: null, loading: true };

export default function App() {
  const [auth, setAuth] = useState<AuthState>(INITIAL_AUTH);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) await fetchProfile(session.user.id);
      else setAuth({ isAuthenticated: false, user: null, loading: false });
    };

    load();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) await fetchProfile(session.user.id);
      else setAuth({ isAuthenticated: false, user: null, loading: false });
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (authUserId: string) => {
    try {
      const { data, error } = await supabase
        .from("VoyUsers")
        .select("id, auth_user_id, full_name, role, email, city, district, company_sector")
        .eq("auth_user_id", authUserId)
        .single();

      if (error) throw error;

      if (data) {
        setAuth({
          isAuthenticated: true,
          loading: false,
          user: {
            id: data.id,
            auth_user_id: data.auth_user_id,
            full_name: data.full_name,
            email: data.email,
            role: data.role,
            city: data.city,
            district: data.district,
            company_sector: data.company_sector,
          } as any,
        });
      } else {
        setAuth({ isAuthenticated: false, user: null, loading: false });
      }
    } catch (e) {
      console.error("Error fetching profile", e);
      setAuth({ isAuthenticated: false, user: null, loading: false });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuth({ isAuthenticated: false, user: null, loading: false });
  };

  return (
    <HashRouter>
      <Layout auth={auth} onLogout={handleLogout}>
        <AppRoutes auth={auth} setToast={setToast} />
        {toast && (
          <div
            className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium z-50 ${
              toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
            }`}
          >
            {toast.message}
          </div>
        )}
      </Layout>
    </HashRouter>
  );
}

