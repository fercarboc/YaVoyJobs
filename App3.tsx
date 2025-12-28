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

  async function fetchProfile() {
    const { data: authData, error: authErr } = await supabase.auth.getUser();
    if (authErr) throw authErr;
    const user = authData.user;
    if (!user) throw new Error("No auth user");

    const { data, error } = await supabase
      .from("VoyUsers")
      .select("id, auth_user_id, email, role, username, first_name, last_name, phone_number, status, full_name, city, district, company_sector")
      .eq("auth_user_id", user.id)
      .maybeSingle();

    if (error) {
      console.error("[PROFILE] VoyUsers select error FULL:", JSON.stringify(error, null, 2));
      throw error;
    }

    return data ?? null;
  }

  useEffect(() => {
    console.log("[APP BOOT]");

    // 1) Cargar sesion inicial con perfil completo (con try/catch)
    (async () => {
      try {
        const profile = await fetchProfile();
        if (profile) {
          setAuth({
            isAuthenticated: true,
            loading: false,
            user: {
              id: profile.id,
              auth_user_id: profile.auth_user_id,
              full_name: profile.full_name,
              email: profile.email,
              role: profile.role,
              city: profile.city,
              district: profile.district,
              company_sector: profile.company_sector,
            } as any,
          });
        } else {
          setAuth({ ...INITIAL_AUTH, loading: false });
        }
      } catch (err) {
        console.error("Error fetching profile FULL:", JSON.stringify(err, null, 2));
        setAuth({ ...INITIAL_AUTH, loading: false });
      }
    })();

    // 2) Escuchar cambios de auth y refrescar perfil
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const authUserId = session?.user?.id;
      if (authUserId) {
        try {
          const profile = await fetchProfile();
          if (profile) {
            setAuth({
              isAuthenticated: true,
              loading: false,
              user: {
                id: profile.id,
                auth_user_id: profile.auth_user_id,
                full_name: profile.full_name,
                email: profile.email,
                role: profile.role,
                city: profile.city,
                district: profile.district,
                company_sector: profile.company_sector,
              } as any,
            });
          } else {
            setAuth({ ...INITIAL_AUTH, loading: false });
          }
        } catch (err) {
          console.error("[PROFILE] fatal loading profile (listener):", err);
          setAuth({ ...INITIAL_AUTH, loading: false });
        }
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
