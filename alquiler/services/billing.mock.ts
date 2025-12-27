import { AgencyInvoice, AgencyPlan, AgencyPlanId } from "../types/agency.types";

const PLAN_KEY = "yavoy_agency_plan";
const INVOICES_KEY = "yavoy_agency_invoices";

export const PLANS: Record<AgencyPlanId, AgencyPlan> = {
  mensual: {
    id: "mensual",
    name: "Mensual",
    price: "49€/mes",
    maxActiveAds: 10,
    perks: ["Hasta 10 anuncios activos"],
  },
  trimestral: {
    id: "trimestral",
    name: "Trimestral",
    price: "129€",
    maxActiveAds: 15,
    perks: ["Hasta 15 anuncios activos", "2 destacados/mes"],
  },
  anual: {
    id: "anual",
    name: "Anual",
    price: "399€",
    maxActiveAds: 30,
    perks: ["Hasta 30 anuncios activos", "8 destacados/año", "Soporte prioritario"],
  },
};

export function getPlan(): AgencyPlan {
  const stored = localStorage.getItem(PLAN_KEY);
  if (stored && PLANS[stored as AgencyPlanId]) return PLANS[stored as AgencyPlanId];
  return PLANS.mensual;
}

export function setPlan(planId: AgencyPlanId) {
  localStorage.setItem(PLAN_KEY, planId);
}

export function listInvoices(): AgencyInvoice[] {
  try {
    const raw = localStorage.getItem(INVOICES_KEY);
    if (raw) return JSON.parse(raw) as AgencyInvoice[];
  } catch {
    /* ignore */
  }
  const seed: AgencyInvoice[] = [
    { id: "2025-01-001", period: "Ene 2025", amount: 49, status: "Pagada" },
    { id: "2024-12-001", period: "Dic 2024", amount: 49, status: "Pagada" },
    { id: "2024-11-001", period: "Nov 2024", amount: 49, status: "Pagada" },
  ];
  localStorage.setItem(INVOICES_KEY, JSON.stringify(seed));
  return seed;
}

export function setInvoices(list: AgencyInvoice[]) {
  localStorage.setItem(INVOICES_KEY, JSON.stringify(list));
}
