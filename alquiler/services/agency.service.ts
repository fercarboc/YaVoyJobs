import { AgencyAd, AgencyContact, AgencyInvoice, AgencyPlan, AgencyPlanId, AgencyProfile } from "../types/agency.types";
import { PLANS, getPlan as getPlanMock, setPlan as setPlanMock } from "./billing.mock";

const ADS_KEY = "yavoy_agency_ads";
const CONTACTS_KEY = "yavoy_agency_contacts";
const PROFILE_KEY = "yavoy_agency_profile";

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* PROFILE */
export function getAgencyProfile(): AgencyProfile {
  return readJSON<AgencyProfile>(PROFILE_KEY, {
    name: "Tu Inmobiliaria",
    cif: "B00000000",
    phone: "+34 600 000 000",
    email: "contacto@inmobiliaria.com",
    contactPerson: "Contacto",
    address: "Calle Ejemplo 1",
    city: "Madrid",
    postalCode: "28000",
    province: "Madrid",
    country: "España",
  });
}

export function updateAgencyProfile(input: AgencyProfile) {
  writeJSON(PROFILE_KEY, input);
  return input;
}

/* ADS CRUD */
export function listAgencyAds(): AgencyAd[] {
  return readJSON<AgencyAd[]>(ADS_KEY, seedAds());
}

export function createAd(ad: Omit<AgencyAd, "id" | "createdAt">): AgencyAd {
  const list = listAgencyAds();
  const newAd: AgencyAd = { ...ad, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  list.push(newAd);
  writeJSON(ADS_KEY, list);
  return newAd;
}

export function updateAd(id: string, input: Partial<AgencyAd>) {
  const list = listAgencyAds();
  const idx = list.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...input };
  writeJSON(ADS_KEY, list);
  return list[idx];
}

export function deleteAd(id: string) {
  const list = listAgencyAds().filter((a) => a.id !== id);
  writeJSON(ADS_KEY, list);
}

/* CONTACTS */
export function listContacts(): AgencyContact[] {
  return readJSON<AgencyContact[]>(CONTACTS_KEY, seedContacts());
}

export function updateContactStatus(id: string, status: AgencyContact["status"]) {
  const list = listContacts();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  list[idx].status = status;
  writeJSON(CONTACTS_KEY, list);
  return list[idx];
}

/* PLANES */
export function getPlan(): AgencyPlan {
  return getPlanMock();
}

export function setPlan(planId: AgencyPlanId) {
  setPlanMock(planId);
}

/* INVOICES */
export function listInvoices(): AgencyInvoice[] {
  return readJSON<AgencyInvoice[]>("yavoy_agency_invoices", []);
}

/* Seeds */
function seedAds(): AgencyAd[] {
  const now = new Date().toISOString();
  return [
    {
      id: crypto.randomUUID(),
      title: "Piso luminoso en Arganzuela",
      description: "3 habitaciones, 2 baños, recién reformado, ideal familias.",
      district: "Arganzuela",
      neighborhood: "Delicias",
      type: "Piso",
      price: 1200,
      priceUnit: "mes",
      deposit: 1200,
      minStay: "12 meses",
      furnished: true,
      billsIncluded: false,
      availableFrom: "2025-01-15",
      contactPhone: "+34 600 000 001",
      contactEmail: "comercial@inmo.com",
      status: "Activo",
      images: [],
      createdAt: now,
    },
    {
      id: crypto.randomUUID(),
      title: "Habitación en piso compartido",
      description: "Habitación amplia con luz natural, gastos incluidos.",
      district: "Usera",
      neighborhood: "Moscardó",
      type: "Habitación",
      price: 450,
      priceUnit: "mes",
      deposit: 450,
      minStay: "6 meses",
      furnished: true,
      billsIncluded: true,
      availableFrom: "2025-02-01",
      contactPhone: "+34 600 000 002",
      contactEmail: "rooms@inmo.com",
      status: "Activo",
      images: [],
      createdAt: now,
    },
  ];
}

function seedContacts(): AgencyContact[] {
  const ads = seedAds();
  return [
    {
      id: crypto.randomUUID(),
      name: "Laura Gómez",
      email: "laura@example.com",
      phone: "+34 611 222 333",
      adId: ads[0].id,
      adTitle: ads[0].title,
      date: new Date().toISOString(),
      status: "nuevo",
    },
    {
      id: crypto.randomUUID(),
      name: "Carlos Ruiz",
      email: "carlos@example.com",
      phone: "+34 622 333 444",
      adId: ads[1].id,
      adTitle: ads[1].title,
      date: new Date().toISOString(),
      status: "atendido",
    },
  ];
}
