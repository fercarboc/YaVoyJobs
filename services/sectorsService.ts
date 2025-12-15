import { supabase } from './supabase';

export interface Sector {
  id: string;
  name: string;
  display_order: number;
  risk_level?: string;
}

export async function getSectorsOrdered(): Promise<Sector[]> {
  const { data, error } = await supabase
    .from('VoySectors')
    .select('*')
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });
  if (error) throw new Error('Error cargando sectores: ' + error.message);
  return data as Sector[];
}
