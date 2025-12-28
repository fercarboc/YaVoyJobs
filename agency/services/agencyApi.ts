import { supabase } from "../../services/supabase";
import {
  AgencyPlan,
  AgencySubscription,
  CompanyProfile,
  HousingAd,
  HousingAdStatus,
  HousingImage,
  HousingLead,
} from "../types/agency";

const BUCKET = "housing-images";

/* Utils */
function ensure<T>(data: T | null, error: any): T {
  if (error) throw error;
  if (!data) throw new Error("No data");
  return data;
}

export async function getCurrentVoyUser() {
  const { data: auth } = await supabase.auth.getUser();
  const uid = auth.user?.id;
  if (!uid) throw new Error("No session");
  const { data, error } = await supabase.from("VoyUsers").select("*").eq("auth_user_id", uid).single();
  if (error) throw error;
  return data;
}

/* Agency profile */
export async function getMyCompany(): Promise<CompanyProfile | null> {
  const user = await getCurrentVoyUser();
  const { data, error } = await supabase
    .from("VoyAgencyProfiles")
    .select("*")
    .eq("agency_user_id", user.id)
    .maybeSingle();
  if (error) throw error;
  return data as CompanyProfile | null;
}

export async function upsertMyCompany(input: CompanyProfile): Promise<CompanyProfile> {
  const user = await getCurrentVoyUser();
  const payload = { ...input, agency_user_id: user.id };
  const { data, error } = await supabase
    .from("VoyAgencyProfiles")
    .upsert(payload, { onConflict: "agency_user_id" })
    .select()
    .single();
  if (error) throw error;
  return data as CompanyProfile;
}

/* Districts / Neighborhoods (MAESTRAS) */
export type District = { id: string; name: string; city: string };
export type Neighborhood = { id: string; district_id: string; name: string };

export async function listDistricts(city = "MADRID"): Promise<District[]> {
  const { data, error } = await supabase
    .from("VoyDistricts")
    .select("id, name, city")
    .eq("city", city)
    .eq("is_active", true)
    .order("name", { ascending: true });
  if (error) throw error;
  return (data || []) as District[];
}

export async function listNeighborhoods(districtId: string): Promise<Neighborhood[]> {
  const { data, error } = await supabase
    .from("VoyNeighborhoods")
    .select("id, district_id, name")
    .eq("district_id", districtId)
    .eq("is_active", true)
    .order("name", { ascending: true });
  if (error) throw error;
  return (data || []) as Neighborhood[];
}

/* Ads */
export async function listMyHousingAds(filters?: Partial<HousingAd>) {
  const user = await getCurrentVoyUser();
  let query = supabase
    .from("VoyHousingAds")
    .select("*, images:VoyHousingImages(url,sort_order), leads:VoyHousingLeads(id)")
    .eq("owner_user_id", user.id)
    .eq("owner_type", "AGENCY");
  if (filters?.status) query = query.eq("status", filters.status);
  if (filters?.district) query = query.eq("district", filters.district);
  if (filters?.neighborhood) query = query.eq("neighborhood", filters.neighborhood);
  if (filters?.ad_type) query = query.eq("ad_type", filters.ad_type);
  const { data, error } = await query.order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []) as (HousingAd & { images?: HousingImage[]; leads?: any[] })[];
}

export async function getHousingAdById(id: string) {
  const user = await getCurrentVoyUser();
  const { data, error } = await supabase
    .from("VoyHousingAds")
    .select("*, images:VoyHousingImages(*), leads:VoyHousingLeads(id)")
    .eq("id", id)
    .eq("owner_user_id", user.id)
    .single();
  if (error) throw error;
  return data as HousingAd & { images?: HousingImage[] };
}

const AD_FIELDS: (keyof HousingAd)[] = [
  "title",
  "description",
  "ad_type",
  "price",
  "price_unit",
  "deposit",
  "min_stay",
  "furnished",
  "bills_included",
  "available_from",
  "city",
  "district",
  "neighborhood",
  "address_hint",
  "contact_phone",
  "contact_email",
  "status",
];

function sanitizeAdPayload(payload: Partial<HousingAd>) {
  const cleaned: Record<string, any> = {};
  AD_FIELDS.forEach((key) => {
    const value = (payload as any)[key];
    if (value === "" || value === undefined) return;
    cleaned[key] = value;
  });
  return cleaned;
}

export async function createHousingAd(payload: Partial<HousingAd>) {
  const user = await getCurrentVoyUser();
  const insert = {
    ...sanitizeAdPayload(payload),
    owner_user_id: user.id,
    owner_type: "AGENCY",
  };
  const { data, error } = await supabase.from("VoyHousingAds").insert(insert).select().single();
  if (error) throw error;
  return data as HousingAd;
}

export async function updateHousingAd(id: string, payload: Partial<HousingAd>) {
  const user = await getCurrentVoyUser();
  const { data, error } = await supabase
    .from("VoyHousingAds")
    .update(sanitizeAdPayload(payload))
    .eq("id", id)
    .eq("owner_user_id", user.id)
    .select()
    .single();
  if (error) throw error;
  return data as HousingAd;
}

export async function deleteHousingAd(id: string) {
  const user = await getCurrentVoyUser();
  const { error } = await supabase.from("VoyHousingAds").delete().eq("id", id).eq("owner_user_id", user.id);
  if (error) throw error;
}

export async function setHousingAdStatus(id: string, status: HousingAdStatus) {
  return updateHousingAd(id, { status });
}

/* Images */
export async function listHousingImages(ad_id: string) {
  const { data, error } = await supabase
    .from("VoyHousingImages")
    .select("*")
    .eq("ad_id", ad_id)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data || []) as HousingImage[];
}

export async function addHousingImages(ad_id: string, files: File[]) {
  const uploads: HousingImage[] = [];
  for (const file of files) {
    if (!/jpe?g|png|webp/i.test(file.type)) {
      throw new Error("Solo se permiten JPG/PNG/WEBP");
    }
    const path = `ads/${ad_id}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, { upsert: true });
    if (uploadError) throw uploadError;
    uploads.push({ id: crypto.randomUUID(), ad_id, url: path, sort_order: uploads.length });
  }
  if (uploads.length) {
    const { data, error } = await supabase.from("VoyHousingImages").insert(uploads).select();
    if (error) throw error;
    return data as HousingImage[];
  }
  return [];
}

export async function deleteHousingImage(image: HousingImage) {
  if (image.url) {
    await supabase.storage.from(BUCKET).remove([image.url]);
  }
  const { error } = await supabase.from("VoyHousingImages").delete().eq("id", image.id);
  if (error) throw error;
}

export async function reorderHousingImages(ad_id: string, orderedIds: string[]) {
  // upsert = INSERT + UPDATE => el INSERT evalúa WITH CHECK (necesita ad_id)
  const updates = orderedIds.map((id, idx) => ({ id, ad_id, sort_order: idx }));

  const { error } = await supabase
    .from("VoyHousingImages")
    .upsert(updates, { onConflict: "id" });

  if (error) throw error;
  return listHousingImages(ad_id);
}


/* Leads */
export async function listMyHousingLeads(filters?: { status?: string }) {
  const user = await getCurrentVoyUser();
  let query = supabase
    .from("VoyHousingLeads")
    .select("*, ad:VoyHousingAds(title)")
    .eq("VoyHousingAds.owner_user_id", user.id)
    .eq("VoyHousingAds.owner_type", "AGENCY")
    .order("created_at", { ascending: false });
  if (filters?.status) query = query.eq("status", filters.status);
  const { data, error } = await query;
  if (error) throw error;
  return (data || []).map((row: any) => ({
    ...row,
    ad_title: row.ad?.title,
  })) as HousingLead[];
}

export async function updateLeadStatus(id: string, status: "NEW" | "READ" | "CLOSED") {
  const { data, error } = await supabase.from("VoyHousingLeads").update({ status }).eq("id", id).select().single();
  if (error) throw error;
  return data as HousingLead;
}

/* Plans & subscriptions */
export async function listAgencyPlans(): Promise<AgencyPlan[]> {
  const { data, error } = await supabase
    .from("voyplans")
    .select("*")
    .eq("plan_scope", "AGENCY_HOUSING")
    .eq("is_active", true);
  if (error) throw error;
  return (data || []).map((p) => ({
    id: p.id,
    name: p.name,
    monthly_price: p.monthly_price,
    properties_active: p.properties_active,
    features: p.features || p.metadata?.features || [],
  }));
}

export async function getMyAgencySubscription(): Promise<AgencySubscription | null> {
  const user = await getCurrentVoyUser();
  const { data, error } = await supabase
    .from("VoyCompanySubscriptions")
    .select("*")
    .eq("company_user_id", user.id)
    .eq("status", "ACTIVE")
    .order("start_date", { ascending: false })
    .maybeSingle();
  if (error) throw error;
  return data as AgencySubscription | null;
}

export async function changeAgencyPlan(plan_id: string, billing_period: "monthly" | "quarterly" | "annual", discount_pct = 0) {
  const user = await getCurrentVoyUser();
  const { data: planData, error: planError } = await supabase.from("voyplans").select("*").eq("id", plan_id).single();
  if (planError) throw planError;
  const amount = planData.monthly_price || 0;
  const { error } = await supabase
    .from("VoyCompanySubscriptions")
    .update({ status: "CANCELED" })
    .eq("company_user_id", user.id)
    .eq("status", "ACTIVE");
  if (error) throw error;

  const { data: sub, error: insertErr } = await supabase
    .from("VoyCompanySubscriptions")
    .insert({
      company_user_id: user.id,
      plan_id,
      subscription_type: "AGENCY_HOUSING",
      amount,
      currency: "EUR",
      status: "ACTIVE",
      start_date: new Date().toISOString(),
      end_date: null,
      metadata: { billing_period, discount_pct },
    })
    .select()
    .single();
  if (insertErr) throw insertErr;
  return sub as AgencySubscription;
}
