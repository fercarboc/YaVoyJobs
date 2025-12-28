export type HousingAdType = "ROOM" | "FULL_APARTMENT";
export type HousingAdStatus = "ACTIVE" | "PAUSED" | "DELETED";

export type HousingAd = {
  id: string;
  title: string;
  description: string;
  ad_type: HousingAdType;
  price: number;
  price_unit: "month" | "week";
  deposit?: number | null;
  min_stay?: string | null;
  furnished: boolean;
  bills_included: boolean;
  available_from?: string | null;
  city?: string | null;
  district?: string | null;
  neighborhood?: string | null;
  address_hint?: string | null;
  contact_phone?: string | null;
  contact_email?: string | null;
  metadata?: any;
  status: HousingAdStatus;
  created_at?: string;
  updated_at?: string;
  owner_user_id: string;
  owner_type: "CLIENT" | "AGENCY";
};

export type HousingImage = {
  id: string;
  ad_id: string;
  url: string; // storage path ads/{ad_id}/{filename}
  sort_order?: number | null;
  created_at?: string;
};

export type HousingLeadStatus = "NEW" | "READ" | "CLOSED";

export type HousingLead = {
  id: string;
  ad_id: string;
  requester_user_id: string;
  message?: string | null;
  status: HousingLeadStatus;
  created_at?: string;
  requester_name?: string | null;
  requester_email?: string | null;
  ad_title?: string | null;
};

export type AgencyPlan = {
  id: string;
  name: string;
  monthly_price?: number | null;
  properties_active?: number | null;
  features?: string[]; // from metadata
};

export type AgencySubscription = {
  id: string;
  plan_id: string;
  status: string;
  start_date?: string | null;
  end_date?: string | null;
  amount?: number | null;
  currency?: string | null;
  billing_period?: "monthly" | "quarterly" | "annual";
  discount_pct?: number | null;
};

export type CompanyProfile = {
  id?: string;
  agency_user_id: string;
  brand_name?: string | null;
  legal_name?: string | null;
  cif?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  district?: string | null;
  neighborhood?: string | null;
  postal_code?: string | null;
  province?: string | null;
  country?: string | null;
  contact_person?: string | null;
  contact_phone?: string | null;
  contact_email?: string | null;
  billing_iban?: string | null;
  billing_holder?: string | null;
  billing_tax_id?: string | null;
  billing_bank?: string | null;
  billing_address?: string | null;
  billing_city?: string | null;
  billing_postal_code?: string | null;
  billing_province?: string | null;
  billing_country?: string | null;
  billing_consent?: boolean | null;
};
