export enum UserRole {
  WORKER = "WORKER",
  CLIENT = "CLIENT",
  COMPANY = "COMPANY",
  AGENCY = "AGENCY",
  PROVIDER = "PROVIDER",
  ADMIN = "ADMIN",
}

export enum JobStatus {
  DRAFT = "DRAFT",
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CLOSED = "CLOSED",
}

export enum JobType {
  MICRO = "MICRO",
  ANUNCIO = "ANUNCIO",
}

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  budget: string;
  status: JobStatus;
  candidateCount?: number;
  category?: string;
  type: JobType;
  estimatedDuration?: string;
  jobStatus?: JobStatus;
}

export type CandidateStatus = "PENDING" | "ACCEPTED" | "REJECTED";

export interface Candidate {
  id: string;
  jobId: string;
  jobTitle: string;
  jobBudget: string;
  employerName: string;
  jobLocation: string;
  appliedAt: string;
  status: CandidateStatus;
  jobStatus: JobStatus;
}

export interface ProductPromotion {
  active: boolean;
  startDate: string;
  endDate: string;
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
  duration: number;
  startDate: string;
  status: "Activa" | "Programada";
  price: number;
}

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  DELIVERED = "DELIVERED",
}

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

export interface Visit {
  id: string;
  propertyTitle: string;
  address: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  status: VisitStatus;
  agentName: string;
}

export enum VisitStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  NOSHOW = "NOSHOW",
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
  date: string;
  description: string;
  type: "incidencia" | "devolucion";
}

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

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  city?: string;
  rating?: number;
  isVerified?: boolean;
  email?: string;
  planName?: string;
}
