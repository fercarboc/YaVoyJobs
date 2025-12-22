import { supabase } from '../supabase';
import { BuyerProfile } from '../../types/marketplace';

export async function getMyBuyerProfile() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;
  const { data, error } = await supabase
    .from('voy_marketplace.buyer_profiles')
    .select('*')
    .eq('user_id', session.user.id)
    .single();
  if (error) throw error;
  return data as BuyerProfile;
}

export async function upsertMyBuyerProfileHoreca(profile: Partial<BuyerProfile>) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('No session');
  const { data, error } = await supabase
    .from('voy_marketplace.buyer_profiles')
    .upsert([
      {
        ...profile,
        user_id: session.user.id,
        buyer_type: 'HORECA',
        is_verified: false
      }
    ], { onConflict: ['user_id'] })
    .select()
    .single();
  if (error) throw error;
  return data as BuyerProfile;
}
