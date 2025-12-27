import { supabase } from "./supabase";

export type AdminRole = "PARTICULAR" | "COMPANY" | "HELPER" | "ADMIN" | "PROVIDER";
export type ProviderType = "HOUSING_AGENCY" | "MARKET_VENDOR";

export type AdminUser = {
  id: string;
  auth_user_id?: string | null;
  full_name: string;
  email: string;
  phone?: string | null;
  role: AdminRole;
  city?: string | null;
  district?: string | null;
  is_active?: boolean | null;
  created_at?: string;
};

export type ProviderProfile = {
  id: string;
  provider_user_id: string;
  provider_type: ProviderType;
  display_name?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  district?: string | null;
  neighborhood?: string | null;
  postal_code?: string | null;
  province?: string | null;
  country?: string | null;
  contact_person?: string | null;
  website?: string | null;
  created_at?: string;
  updated_at?: string;
  user?: AdminUser;
};

type CountResult = { count: number };

async function countTable(table: string, filter?: (query: any) => any): Promise<number> {
  let query: any = supabase.from(table).select("*", { count: "exact", head: true });
  if (filter) query = filter(query);
  const { count, error } = await query;
  if (error) throw error;
  return count || 0;
}

export async function getAdminStats() {
  const [users, providers, jobs, housing, invoicesPending, invoicesPaid, paymentsMTD] = await Promise.all([
    countTable("VoyUsers"),
    countTable("VoyUsers", (q) => q.eq("role", "PROVIDER")),
    countTable("VoyJobs"),
    countTable("VoyHousingAds"),
    countTable("VoyInvoices", (q) => q.eq("status", "PENDING")),
    countTable("VoyInvoices", (q) => q.eq("status", "PAID")),
    sumPaymentsCurrentMonth(),
  ]);

  return {
    users,
    providers,
    jobs,
    housing,
    invoicesPending,
    invoicesPaid,
    paymentsMTD,
  };
}

async function sumPaymentsCurrentMonth() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const { data, error } = await supabase
    .from("VoyPayments")
    .select("amount")
    .gte("created_at", start);
  if (error) throw error;
  return (data || []).reduce((acc: number, row: any) => acc + Number(row.amount || 0), 0);
}

export async function listUsers(role?: AdminRole) {
  let query = supabase.from("VoyUsers").select("*").order("created_at", { ascending: false });
  if (role) query = query.eq("role", role);
  const { data, error } = await query;
  if (error) throw error;
  return (data || []) as AdminUser[];
}

export async function updateUserRole(userId: string, role: AdminRole) {
  const { data, error } = await supabase.from("VoyUsers").update({ role }).eq("id", userId).select().single();
  if (error) throw error;
  return data as AdminUser;
}

export async function updateUserActive(userId: string, isActive: boolean) {
  const { data, error } = await supabase.from("VoyUsers").update({ is_active: isActive }).eq("id", userId).select().single();
  if (error) throw error;
  return data as AdminUser;
}

export async function findUserByEmail(email: string) {
  const { data, error } = await supabase.from("VoyUsers").select("*").eq("email", email).maybeSingle();
  if (error) throw error;
  return (data as AdminUser) || null;
}

export async function listProviders(providerType?: ProviderType) {
  let query = supabase
    .from("VoyProviderProfiles")
    .select("*, user:provider_user_id(id,full_name,email,role,is_active,created_at)")
    .order("created_at", { ascending: false });
  if (providerType) query = query.eq("provider_type", providerType);
  const { data, error } = await query;
  if (error) throw error;
  return (data || []) as ProviderProfile[];
}

export async function upsertProviderProfile(input: Omit<ProviderProfile, "id" | "created_at" | "updated_at" | "user">) {
  await updateUserRole(input.provider_user_id, "PROVIDER");
  const { data, error } = await supabase.from("VoyProviderProfiles").upsert(input, { onConflict: "provider_user_id" }).select().single();
  if (error) throw error;
  return data as ProviderProfile;
}

export async function createProviderInvite(email: string, providerType: ProviderType, expiresAt: string) {
  const token = crypto.randomUUID();
  const { data, error } = await supabase
    .from("VoyInvites")
    .insert({
      email,
      target_role: "PROVIDER",
      provider_type: providerType,
      token,
      expires_at: expiresAt,
    })
    .select()
    .single();
  if (error) throw error;
  return data as any;
}

export async function listPlans() {
  const { data, error } = await supabase.from("voyplans").select("*").order("plan_scope", { ascending: true }).order("price", { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function listPlanDiscounts() {
  const { data, error } = await supabase.from("voyplan_discounts").select("*");
  if (error) throw error;
  return data || [];
}

export async function listSubscriptions() {
  const { data, error } = await supabase
    .from("VoyCompanySubscriptions")
    .select("*, plan:plan_id(name,plan_scope,price)")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw error;
  return data || [];
}

export async function listInvoices() {
  const { data, error } = await supabase.from("VoyInvoices").select("*").order("created_at", { ascending: false }).limit(200);
  if (error) throw error;
  return data || [];
}

export async function listPayments() {
  const { data, error } = await supabase.from("VoyPayments").select("*").order("created_at", { ascending: false }).limit(200);
  if (error) throw error;
  return data || [];
}

export async function listAdminLogs() {
  const { data, error } = await supabase.from("VoyAdminLogs").select("*").order("created_at", { ascending: false }).limit(200);
  if (error) throw error;
  return data || [];
}
