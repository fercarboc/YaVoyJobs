
export enum UserRole {
  PARTICULAR = 'PARTICULAR',
  COMPANY = 'COMPANY',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN',
  AGENCY = 'AGENCY',
  PROVIDER = 'PROVIDER',
  // Legacy identifiers (for compatibility)
  WORKER = 'WORKER',
  CLIENT = 'CLIENT',
  REAL_ESTATE = 'REAL_ESTATE',
  INMO = 'INMO',
  MARKET_PROVIDER = 'MARKET_PROVIDER'
}

export type BaseRole = 'ADMIN' | 'CLIENT' | 'HELPER' | 'AGENCY';
export type ClientType = 'PERSON' | 'BUSINESS';
export type ModuleKey = 'services' | 'real_estate' | 'marketplace_provider';

export type CompanySectorSlug =
  | 'tecnologia-digital'
  | 'hogar-mantenimiento'
  | 'mascotas'
  | 'compras-recados'
  | 'hosteleria-eventos'
  | 'transporte-reparto'
  | 'mayores-dependencia'
  | 'educacion-formacion'
  | 'comercio-negocios'
  | 'salud-bienestar'
  | 'creatividad-arte'
  | 'administracion-oficina'
  | 'construccion-oficios'
  | 'agricultura-campo'
  | 'turismo-alojamiento'
  | 'seguridad-control'
  | 'marketing-calle'
  | 'tecnologia-domestica'
  | 'moda-textil'
  | 'otros-servicios';


export enum JobStatus {
  OPEN = 'OPEN',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DRAFT = 'DRAFT'
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
  last_name?: string;
  role: UserRole;
  baseRole?: BaseRole;
  clientType?: ClientType;
  email: string;
  city?: string;
  address?: string;
  postal_code?: string;
  province?: string;
  country?: string;
  document_type?: string;
  document_number?: string;
  selfie_photo_url?: string;
  document_photo_url?: string;
  district?: string;
  company_sector?: CompanySector | null;
  created_at?: string;
  phone?: string;
  neighborhood?: string; // ✅ añadir esto
   birth_year?: number | null;
  is_active?: boolean | null;

  verification_document?: string | null;
  verification_status?: string | null;
  verification_type?: string | null;
  verification_requested_at?: string | null;

  updated_at?: string;
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
  
   sector?: CompanySectorSlug | null;

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

export function mapLegacyRoleToBase(role?: UserRole | string | null): { baseRole: BaseRole; clientType?: ClientType } {
  switch (role) {
    case UserRole.PARTICULAR:
      return { baseRole: 'CLIENT', clientType: 'PERSON' };
    case UserRole.COMPANY:
      return { baseRole: 'CLIENT', clientType: 'BUSINESS' };
    case UserRole.HELPER:
      return { baseRole: 'HELPER' };
    case UserRole.ADMIN:
      return { baseRole: 'ADMIN' };
    case UserRole.AGENCY:
      return { baseRole: 'AGENCY' };
    case UserRole.PROVIDER:
      return { baseRole: 'CLIENT', clientType: 'BUSINESS' };
    default:
      return { baseRole: 'CLIENT' };
  }
}





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




// =======================
// EXTRA TYPES (sin colisiones)
// =======================

// Marketplace / Provider
export interface ProductPromotion {
  active: boolean;
  startDate: string; // ISO
  endDate: string;   // ISO
  type: "percent" | "fixed";
  value: number;
  status: string;
}

export interface Product {
  id: string;
  providerId: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: "active" | "archived";
  images: string[];
  isStar?: boolean;
  promotion?: ProductPromotion;
}

export interface Campaign {
  id: string;
  productId: string;
  productName: string;
  placement: string;
  duration: number; // days
  startDate: string; // ISO
  status: "Activa" | "Programada";
  price: number;
}

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  DELIVERED = "DELIVERED",
}

// RealEstate / Business (ads)
export enum AdType {
  REAL_STATE = "REAL_STATE",
  BUSINESS = "BUSINESS",
}

export enum AdStatus {
  AVAILABLE = "AVAILABLE",
  RESERVED = "RESERVED",
  NEGOTIATING = "NEGOTIATING",
}

export enum RealEstateOperation {
  RENT = "RENT",
  SALE = "SALE",
}

export enum RealEstateCategory {
  FLAT = "FLAT",
  LOCAL = "LOCAL",
  OTHER = "OTHER",
}

// Visitas (Agencia)
export enum VisitStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  NOSHOW = "NOSHOW",
}

export interface Visit {
  id: string;
  propertyTitle: string;
  address: string;
  date: string; // ISO
  time: string; // HH:mm
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  status: VisitStatus;
  agentName: string;
}

// Incidencias / devoluciones
export enum IssueStatus {
  NEW = "NEW",
  REVIEWING = "REVIEWING",
  RESOLVED = "RESOLVED",
}

export enum IssuePriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export interface Issue {
  id: string;
  clientId: string;
  clientName: string;
  orderId: string;
  productName: string;
  reason: string;
  status: IssueStatus;
  priority: IssuePriority;
  date: string; // ISO
  description: string;
  type: "incidencia" | "devolucion";
}
