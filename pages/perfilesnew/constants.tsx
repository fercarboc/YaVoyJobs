import React from "react";
import { Job, Candidate, JobStatus, JobType } from "./types";

const makeIcon = (symbol: string, className = "text-gray-400") => (
  <span className={`inline-flex items-center justify-center w-6 h-6 text-lg ${className}`}>{symbol}</span>
);

export const ICONS = {
  Home: makeIcon("🏠", "text-blue-600"),
  Search: makeIcon("🔍"),
  Jobs: makeIcon("📝"),
  List: makeIcon("📋"),
  Users: makeIcon("👥"),
  Catalog: makeIcon("🗂️"),
  Orders: makeIcon("📦"),
  Returns: makeIcon("↩️"),
  Megaphone: makeIcon("📣"),
  Add: makeIcon("➕", "text-blue-600"),
  RealEstate: makeIcon("🏢"),
  Business: makeIcon("💼"),
  Clock: makeIcon("⏱️"),
  Profile: makeIcon("👤"),
  Messages: makeIcon("💬"),
  Payments: makeIcon("💳"),
  Check: makeIcon("✔️", "text-green-600"),
  Star: makeIcon("⭐️", "text-yellow-500"),
  Location: makeIcon("📍"),
  Calendar: makeIcon("📆"),
  Micro: makeIcon("✨"),
  Percent: makeIcon("％"),
  Tag: makeIcon("🏷️"),
  Chevron: makeIcon("❯"),
  Lock: makeIcon("🔒"),
  Plans: makeIcon("📃"),
  Verified: makeIcon("✅", "text-emerald-600"),
  Alert: makeIcon("⚠️", "text-amber-500"),
  Package: makeIcon("📦", "text-blue-600"),
  Eye: makeIcon("👁️"),
};

export const COLORS = {
  primary: "text-blue-600",
  secondary: "text-gray-500",
};

export const mockParticularJobs: Job[] = [
  {
    id: "job-1",
    title: "Montaje de estantería IKEA",
    description: "Montar 3 estanterías Kallax en una oficina pequeña.",
    location: "Madrid Central",
    budget: "45€",
    status: JobStatus.OPEN,
    jobStatus: JobStatus.OPEN,
    candidateCount: 4,
    category: "Montaje",
    type: JobType.MICRO,
    estimatedDuration: "2h",
  },
  {
    id: "job-2",
    title: "Ayuda mudanza puntual",
    description: "Traslado de cajas ligeras y algunos muebles pequeños con ascensor.",
    location: "Barcelona, Eixample",
    budget: "80€",
    status: JobStatus.OPEN,
    jobStatus: JobStatus.OPEN,
    candidateCount: 6,
    category: "Mudanza",
    type: JobType.MICRO,
    estimatedDuration: "4h",
  },
  {
    id: "job-3",
    title: "Limpieza fin de obra terraza",
    description: "Retirada de escombros ligeros y limpieza profunda de terraza.",
    location: "Valencia",
    budget: "60€",
    status: JobStatus.IN_PROGRESS,
    jobStatus: JobStatus.IN_PROGRESS,
    candidateCount: 3,
    category: "Limpieza",
    type: JobType.ANUNCIO,
    estimatedDuration: "3h",
  },
];

export const mockWorkerApplications: Candidate[] = [
  {
    id: "app-1",
    jobId: "job-1",
    jobTitle: "Montaje de estantería IKEA",
    jobBudget: "45€",
    employerName: "Lucía Ruiz",
    jobLocation: "Madrid Central",
    appliedAt: "01 Mar 2024",
    status: "PENDING",
    jobStatus: JobStatus.OPEN,
  },
  {
    id: "app-2",
    jobId: "job-2",
    jobTitle: "Ayuda mudanza puntual",
    jobBudget: "80€",
    employerName: "Empresa Logística SL",
    jobLocation: "Barcelona, Eixample",
    appliedAt: "28 Feb 2024",
    status: "PENDING",
    jobStatus: JobStatus.OPEN,
  },
];

export const mockCandidatesByJobId: Record<string, Candidate[]> = {
  "job-1": mockWorkerApplications,
  "job-2": [
    {
      ...mockWorkerApplications[1],
      id: "app-3",
      status: "REJECTED",
      appliedAt: "28 Feb 2024",
    },
  ],
};

export const mockParticularStats = {
  activeAds: 3,
  candidatesThisMonth: 8,
  currentPlan: "Particular Gratis",
  estimatedSpent: 125,
};
