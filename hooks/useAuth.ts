// src/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase'; // <-- ajusta si tu path es otro
import { AuthState, UserRole, mapLegacyRoleToBase } from '../types';

const INITIAL_AUTH: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(INITIAL_AUTH);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const session = data?.session;

        if (!mounted) return;

        if (session?.user?.id && session.user.email) {
          await fetchProfile(session.user.id, session.user.email);
        } else {
          setAuth({ isAuthenticated: false, user: null, loading: false });
        }
      } catch (e) {
        console.error('useAuth init error:', e);
        if (mounted) setAuth({ isAuthenticated: false, user: null, loading: false });
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      try {
        if (!mounted) return;

        if (session?.user?.id && session.user.email) {
          await fetchProfile(session.user.id, session.user.email);
        } else {
          setAuth({ isAuthenticated: false, user: null, loading: false });
        }
      } catch (e) {
        console.error('onAuthStateChange error:', e);
        if (mounted) setAuth({ isAuthenticated: false, user: null, loading: false });
      }
    });

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfile = async (authUserId: string, _email: string) => {
    try {
      const { data, error } = await supabase
        .from('VoyUsers')
        .select('id, auth_user_id, full_name, role, email, city, district, company_sector')
        .eq('auth_user_id', authUserId)
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
            role: data.role as UserRole,
            baseRole: mapped.baseRole,
            clientType: mapped.clientType,
            city: data.city,
            district: data.district,
            company_sector: data.company_sector,
          },
        });
      } else {
        setAuth({ isAuthenticated: false, user: null, loading: false });
      }
    } catch (e) {
      console.error('Error fetching profile:', e);
      setAuth({ isAuthenticated: false, user: null, loading: false });
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setAuth({ isAuthenticated: false, user: null, loading: false });
  };

  return { auth, setAuth, logout, fetchProfile };
}
