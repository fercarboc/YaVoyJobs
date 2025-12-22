import { supabase } from '../supabase';
import { VoyRole } from '../../types/marketplace';

export async function getCurrentVoyUser() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;
  const { data, error } = await supabase
    .from('VoyUsers')
    .select('*')
    .eq('auth_user_id', session.user.id)
    .single();
  if (error) throw error;
  return data;
}

export async function updateVoyUserRole(role: VoyRole) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('No session');
  const { error } = await supabase
    .from('VoyUsers')
    .update({ role })
    .eq('auth_user_id', session.user.id);
  if (error) throw error;
  return true;
}
