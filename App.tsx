// App.tsx
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { supabase } from "./services/supabase";
import { Layout } from "./components/Layout";
import AppRoutes from "./components/routing/AppRoutes";
import type { AuthState } from "./types";

const INITIAL_AUTH: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export default function App() {
  const [auth, setAuth] = useState<AuthState>(INITIAL_AUTH);

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
        setAuth({ ...INITIAL_AUTH, loading: false });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setAuth({ ...INITIAL_AUTH, loading: false });
    }
  };

  useEffect(() => {
    console.log("[APP BOOT]");

    // 1) Cargar sesion inicial con perfil completo
    supabase.auth.getSession().then(({ data }) => {
      const authUserId = data.session?.user?.id;
      if (authUserId) {
        fetchProfile(authUserId);
      } else {
        setAuth({ ...INITIAL_AUTH, loading: false });
      }
    });

    // 2) Escuchar cambios de auth y refrescar perfil
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const authUserId = session?.user?.id;
      if (authUserId) {
        fetchProfile(authUserId);
      } else {
        setAuth({ ...INITIAL_AUTH, loading: false });
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuth({ ...INITIAL_AUTH, loading: false });
  };

  return (
    <HashRouter>
      <Layout auth={auth} onLogout={handleLogout}>
        <AppRoutes auth={auth} />
      </Layout>
    </HashRouter>
  );
}
