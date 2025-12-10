
export enum UserRole {
  PARTICULAR = 'PARTICULAR',
  COMPANY = 'COMPANY',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN'
}

export enum JobStatus {
  OPEN = 'OPEN',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum PeriodType {
  ONE_TIME = 'ONE_TIME',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY'
}

export enum ContractType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  TEMPORARY = 'TEMPORARY',
  INTERMITTENT = 'INTERMITTENT'
}

export interface WorkSchedule {
  id: string;
  job_id: string;
  period_type: PeriodType;
  day_of_week?: number[]; // 0=Sun, 6=Sat
  start_time?: string;
  end_time?: string;
  start_date?: string;
  end_date?: string;
}

export interface WorkContract {
  id: string;
  job_id: string;
  contract_type: ContractType;
  monthly_salary?: number;
  social_security: boolean;
  union_required?: boolean;
  contract_document_url?: string;
}

export interface User {
  id: string; // This corresponds to VoyUsers.id
  auth_user_id: string; // Supabase Auth ID
  full_name: string;
  role: UserRole;
  email: string;
  city?: string;
  district?: string;
  company_sector?: CompanySector;  // nuevo
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  job_type: 'ONE_OFF' | 'HOURLY';
  price_fixed?: number;
  price_hourly?: number;
  price_negotiable?: boolean;
  city?: string;
  district?: string;
  neighborhood?: string;
  status: JobStatus;
  creator_user_id: string;
  created_at: string;
  
    sector?: CompanySector | null;          //  nuevo
  // Expanded properties
  creator?: {
    full_name: string;
  };
  // Relations
  schedule?: WorkSchedule[]; // Supabase returns array even if 1:1 sometimes, or we filter 0
  contract?: WorkContract[]; // Array for safety in join
}

export interface JobApplication {
  id: string;
  job_id: string;
  helper_user_id: string;
  message?: string;
  proposed_price?: number;
  proposed_hourly_rate?: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';
  created_at: string;
  updated_at: string;
  
  // Expanded properties
  helper?: {
    full_name: string;
    email: string;
    phone?: string;
  };
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'APPLICATION_ACCEPTED' | 'APPLICATION_REJECTED' | 'NEW_APPLICATION' | 'JOB_STATUS_CHANGED' | 'CHAT_MESSAGE' | 'REVIEW_RECEIVED' | 'SYSTEM';
  related_job_id?: string;
  related_application_id?: string;
  is_read: boolean;
  created_at: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export const DAYS_OF_WEEK = [
  { id: 1, label: 'L', name: 'Lunes' },
  { id: 2, label: 'M', name: 'Martes' },
  { id: 3, label: 'X', name: 'Miércoles' },
  { id: 4, label: 'J', name: 'Jueves' },
  { id: 5, label: 'V', name: 'Viernes' },
  { id: 6, label: 'S', name: 'Sábado' },
  { id: 0, label: 'D', name: 'Domingo' },
];

export type CompanySector =
  | 'HOSTELERIA_RESTAURACION'
  | 'COMERCIO_RETAIL'
  | 'LOGISTICA_ALMACEN'
  | 'MENSAJERIA_REPARTO'
  | 'EVENTOS_PROMOCION'
  | 'CONSTRUCCION_OBRA'
  | 'LIMPIEZA_MANTENIMIENTO'
  | 'ATENCION_PERSONAS'
  | 'SERVICIOS_TECNOLOGICOS'
  | 'SEGURIDAD_VIGILANCIA'
  | 'HOTELES_TURISMO'
  | 'AGRICULTURA_TEMPORAL'
  | 'INDUSTRIA_FABRICAS'
  | 'MARKETING_PUBLICIDAD'
  | 'TRANSPORTE_MOVILIDAD';

export const COMPANY_SECTORS: {
  id: CompanySector;
  label: string;
  short: string;
}[] = [
  { id: 'HOSTELERIA_RESTAURACION', label: 'Hostelería y Restauración', short: 'Hostelería' },
  { id: 'COMERCIO_RETAIL', label: 'Comercio y Retail', short: 'Comercio' },
  { id: 'LOGISTICA_ALMACEN', label: 'Logística y Almacén', short: 'Logística' },
  { id: 'MENSAJERIA_REPARTO', label: 'Mensajería y Reparto', short: 'Reparto' },
  { id: 'EVENTOS_PROMOCION', label: 'Eventos y Promoción', short: 'Eventos' },
  { id: 'CONSTRUCCION_OBRA', label: 'Construcción y Obra', short: 'Construcción' },
  { id: 'LIMPIEZA_MANTENIMIENTO', label: 'Limpieza y Mantenimiento', short: 'Limpieza' },
  { id: 'ATENCION_PERSONAS', label: 'Atención a Personas', short: 'Personas' },
  { id: 'SERVICIOS_TECNOLOGICOS', label: 'Servicios Tecnológicos', short: 'Tecnología' },
  { id: 'SEGURIDAD_VIGILANCIA', label: 'Seguridad y Vigilancia', short: 'Seguridad' },
  { id: 'HOTELES_TURISMO', label: 'Hoteles y Turismo', short: 'Turismo' },
  { id: 'AGRICULTURA_TEMPORAL', label: 'Agricultura y Temporales', short: 'Agricultura' },
  { id: 'INDUSTRIA_FABRICAS', label: 'Industria y Fábricas', short: 'Industria' },
  { id: 'MARKETING_PUBLICIDAD', label: 'Marketing y Publicidad', short: 'Marketing' },
  { id: 'TRANSPORTE_MOVILIDAD', label: 'Transporte y Movilidad', short: 'Transporte' },
];

