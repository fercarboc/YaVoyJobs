// App.tsx
import React, { useCallback, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { supabase } from "./services/supabase";
import { Layout } from "./components/Layout";
import AppRoutes from "./components/routing/AppRoutes";
import type { AuthState } from "./types";
import { mapLegacyRoleToBase, UserRole } from "./types";
import { CartProvider } from "./marketplace/context/CartContext";

const INITIAL_AUTH: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export default function App() {
  const [auth, setAuth] = useState<AuthState>(INITIAL_AUTH);

  const fetchProfile = useCallback(async (authUserId: string) => {
    try {
      const { data, error } = await supabase
        .from("VoyUsers")
        .select(
          "id, auth_user_id, full_name, role, email, city, district, company_sector, avatar_url, selfie_photo_url, verification_status"
        )
        .eq("auth_user_id", authUserId)
        .single();

      if (error) throw error;

      if (data) {
        const mapped = mapLegacyRoleToBase(data.role as UserRole);
        setAuth({
          isAuthenticated: true,
          loading: false,
          user: {
            id: data.id,
            auth_user_id: data.auth_user_id,
            full_name: data.full_name,
            email: data.email,
            role: data.role,
            baseRole: mapped.baseRole,
            clientType: mapped.clientType,
            city: data.city,
            district: data.district,
            company_sector: data.company_sector,
            avatar_url: data.avatar_url,
            selfie_photo_url: data.selfie_photo_url,
            verification_status: data.verification_status,
          } as any,
        });
      } else {
        setAuth({ ...INITIAL_AUTH, loading: false });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setAuth({ ...INITIAL_AUTH, loading: false });
    }
  }, []);

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
  }, [fetchProfile]);

  useEffect(() => {
    const refreshProfile = async () => {
      const { data } = await supabase.auth.getSession();
      const authUserId = data.session?.user?.id;
      if (authUserId) {
        fetchProfile(authUserId);
      }
    };

    window.addEventListener("voy:user-updated", refreshProfile);
    return () => {
      window.removeEventListener("voy:user-updated", refreshProfile);
    };
  }, [fetchProfile]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuth({ ...INITIAL_AUTH, loading: false });
  };

  return (
    <CartProvider>
      <HashRouter>
        <Layout auth={auth} onLogout={handleLogout}>
          <AppRoutes auth={auth} />
        </Layout>
      </HashRouter>
    </CartProvider>
  );
}
