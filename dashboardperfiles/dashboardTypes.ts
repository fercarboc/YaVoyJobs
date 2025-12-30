export enum DashboardUserRole {
  EMPRESA = "Company",
  PARTICULAR = "Client",
  PROVEEDOR = "Provider",
  INVITADO = "Guest",
  TRABAJADOR = "Helper",
}

// Alias used by the UI components (mantener compatibilidad con imports existentes)
export const UserRole = DashboardUserRole;
export type UserRole = DashboardUserRole;

export enum AppSection {
  INICIO = "Inicio",
  MIS_TRABAJOS = "Mis Trabajos",
  EXPLORAR_TRABAJOS = "Explorar Trabajos",
  MARKETPLACE = "Marketplace",
  MENSAJES = "Mensajes",          
  PEDIDOS = "Pedidos",
  PAGOS = "Pagos",
  FACTURACION = "Facturación",
  INCENTIVOS = "Incentivos",
  INCIDENCIAS = "Incidencias",
  INFORMES = "Informes",
  CONFIGURACION = "Configuración",
}

export interface SummaryCard {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: any;
}

export interface Job {
  id: string;
  title: string;
  type: "horas" | "fijo";
  price: number;
  barrio: string;
  status: "Abierto" | "En Progreso" | "Completado" | "Cancelado" | "En Trayecto";
  worker?: string;
  insurance: boolean;
  client?: string;
}

// Tipos extendidos para creación y listado en panel empresa
export type JobStatus = "Abierto" | "En Progreso" | "En Trayecto" | "Completado" | "Cancelado";
export type JobType = "horas" | "fijo";
export interface JobPanel {
  id: string;
  title: string;
  description: string;
  category: string;
  district: string;
  neighborhood: string;
  address?: string;
  startDate?: string;
  startTime?: string;
  durationHours?: number;
  type: JobType;
  price: number;
  insuranceRequired: boolean;
  urgent: boolean;
  status: JobStatus;
  createdAt: string;
  assignedTo?: string;
  applicantsCount: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  pricePublic: number;
  priceRegistered: number;
  priceHoreca: number;
  stock: number;
  status: "Activo" | "Pausado";
  image: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  participantName: string;
  participantRole: DashboardUserRole;
  relatedEntityTitle: string; // Título del trabajo o nombre del producto
  entityType: 'trabajo' | 'producto';
  status: 'active' | 'archived';
  lastMessage?: string;
  messages: ChatMessage[];
  avatar?: string;
}
