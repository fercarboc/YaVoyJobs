
export type Category = 
  | 'Acompañamiento' 
  | 'Limpieza' 
  | 'Mudanza' 
  | 'Recados' 
  | 'Mascotas' 
  | 'Montaje' 
  | 'Jardín' 
  | 'Otros';

export type DurationOption = '1h' | '2h' | '3h' | 'media_jornada' | 'jornada';
export type BudgetType = 'total' | 'hora';
export type ContactPref = 'chat' | 'call';
export type JobStatus = 'draft' | 'published';
export type HelperStatus = 'available' | 'busy' | 'away';

export interface HelperCard {
  helper_user_id: string;
  display_name: string;
  avatar_url: string | null;
  verified: boolean;
  has_vehicle: boolean;
  fast_responder: boolean;
  status: HelperStatus;
  last_active_min_ago: number;
  categories: Category[];
  skills: string[];
  rating: number;
  lat: number | null;
  lng: number | null;
  location_consent: boolean;
  distanceKm?: number;
}

export interface JobPayload {
  id?: string;
  category: Category;
  zone_text: string;
  lat: number | null;
  lng: number | null;
  scheduled_date: string;
  scheduled_time: string;
  flexible: boolean;
  duration_option: DurationOption;
  budget_amount: number;
  budget_type: BudgetType;
  requirements: string[];
  description: string;
  contact_pref: ContactPref;
  status: JobStatus;
}

export interface Invite {
  id: string;
  job_id: string;
  helper_user_id: string;
  client_user_id: string;
  status: 'sent' | 'accepted' | 'declined';
  created_at: string;
}