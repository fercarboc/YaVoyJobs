import { supabase } from './supabase';

export interface MicroTask {
  id: string;
  name: string;
  sector_id: string;
  risk_level?: string;
}

export async function getMicrotasksBySector(sectorId: string): Promise<MicroTask[]> {
  const { data, error } = await supabase
    .from('VoyMicroTasks')
    .select('*')
    .eq('sector_id', sectorId)
    .order('name', { ascending: true });
  if (error) throw new Error('Error cargando microtareas: ' + error.message);
  return data as MicroTask[];
}
