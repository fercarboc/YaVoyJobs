import { supabase } from '../supabase';
import { SellerProfile } from '../../types/marketplace';

export async function createSellerProfile(input: Partial<SellerProfile>) {
  const { data, error } = await supabase
    .from('voy_marketplace.seller_profiles')
    .insert([input])
    .select()
    .single();
  if (error) throw error;
  return data as SellerProfile;
}

export async function getMySellerProfiles() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return [];
  const { data, error } = await supabase
    .from('voy_marketplace.seller_profiles')
    .select('*')
    .eq('owner_user_id', session.user.id);
  if (error) throw error;
  return data as SellerProfile[];
}
