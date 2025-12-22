import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

export function useUserById(userId: string | null) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    supabase
      .from('VoyUsers')
      .select('*')
      .eq('id', userId)
      .single()
      .then(({ data }) => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}
