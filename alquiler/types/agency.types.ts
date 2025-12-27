export type AgencyPlanId = "mensual" | "trimestral" | "anual";

export type AgencyPlan = {
  id: AgencyPlanId;
  name: string;
  price: string;
  maxActiveAds: number;
  perks: string[];
};

export type AgencyProfile = {
  name: string;
  cif?: string;
  phone: string;
  email: string;
  contactPerson: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
  country: string;
};

export type AgencyAd = {
  id: string;
  title: string;
  description: string;
  district: string;
  neighborhood: string;
  type: "Habitación" | "Piso";
  price: number;
  priceUnit: "mes" | "semana";
  deposit?: number;
  minStay?: string;
  furnished: boolean;
  billsIncluded: boolean;
  availableFrom: string;
  sqm?: number;
  contactPhone?: string;
  contactEmail?: string;
  status: "Activo" | "Pausado";
  images: string[];
  createdAt: string;
};

export type AgencyContact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  adId: string;
  adTitle: string;
  date: string;
  status: "nuevo" | "atendido";
};

export type AgencyInvoice = {
  id: string;
  period: string;
  amount: number;
  status: "Pagada" | "Pendiente";
  url?: string;
};
