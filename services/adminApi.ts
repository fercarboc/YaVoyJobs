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

export type ListResult<T> = {
  data: T[];
  count: number;
  error?: Error;
};

export type ListAdminUsersParams = {
  role?: AdminRole;
  status?: "ACTIVE" | "INACTIVE";
  q?: string;
  page?: number;
  pageSize?: number;
};

export type ListAdminAgenciesParams = {
  q?: string;
  page?: number;
  pageSize?: number;
};

export type ListAdminInvoicesParams = {
  period?: "this_month" | "last_month" | "last_30";
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  clientQ?: string;
  payerUserId?: string;
  page?: number;
  pageSize?: number;
};

export type AdminAgency = ProviderProfile;

export type AdminInvoice = {
  id: string;
  invoice_number?: number | string;      // en tu tabla hay 0/1 etc
  invoice_code?: string;                 // A-2026-000001 ✅
  invoice_series?: string;               // A-2026
  issued_at?: string;                    // ✅ fecha real
  created_at?: string;                   // fallback
  status?: string;
  total?: number | null;                 // en tu tabla existe
  amount?: number | null;                // en tu tabla existe
  currency?: string;

  payer_user_id?: string | null;
  issuer_user_id?: string | null;

  payer?: { id: string; full_name?: string; email?: string };
  issuer?: { id: string; full_name?: string; email?: string };
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

function applyUserFilters(query: any, params: ListAdminUsersParams) {
  let updated = query;
  if (params.role) {
    updated = updated.eq("role", params.role);
  }
  if (params.status) {
    if (params.status === "ACTIVE") {
      updated = updated.eq("is_active", true);
    } else if (params.status === "INACTIVE") {
      updated = updated.eq("is_active", false);
    }
  }
  if (params.q) {
    const like = `%${params.q.trim()}%`;
    updated = updated.or(`full_name.ilike.${like},email.ilike.${like},phone.ilike.${like}`);
  }
  return updated;
}

function rangeForPage(page?: number, pageSize?: number) {
  const size = pageSize ?? 25;
  const current = Math.max(1, page ?? 1);
  const from = (current - 1) * size;
  return {
    from,
    to: from + size - 1,
    page: current,
    pageSize: size,
  };
}

export async function listAdminUsers(params: ListAdminUsersParams = {}): Promise<ListResult<AdminUser>> {
  try {
    const pagination = rangeForPage(params.page, params.pageSize);
    const countQuery = applyUserFilters(
      supabase.from("VoyUsers").select("id", { count: "exact", head: true }),
      params
    );
    const { count, error: countError } = await countQuery;
    if (countError) return { data: [], count: 0, error: countError };

    let query = applyUserFilters(
      supabase
        .from("VoyUsers")
        .select("id,auth_user_id,full_name,email,phone,role,city,district,is_active,created_at")
        .order("created_at", { ascending: false }),
      params
    );
    query = query.range(pagination.from, pagination.to);
    const { data, error } = await query;
    if (error) return { data: [], count: count ?? 0, error };
    return { data: (data || []) as AdminUser[], count: count ?? 0 };
    } catch (err: any) {
    return { data: [], count: 0, error: err instanceof Error ? err : new Error("Error al consultar usuarios") };
  }
}

export async function listAdminAgencies(params: ListAdminAgenciesParams = {}): Promise<ListResult<AdminAgency>> {
  try {
    const pagination = rangeForPage(params.page, params.pageSize);
    let countQuery = supabase
      .from("VoyProviderProfiles")
      .select("id", { count: "exact", head: true })
      .eq("provider_type", "HOUSING_AGENCY");
    if (params.q) {
      countQuery = countQuery.ilike("display_name", `%${params.q}%`);
    }
    const { count, error: countError } = await countQuery;
    if (countError) return { data: [], count: 0, error: countError };

    let query = supabase
      .from("VoyProviderProfiles")
      .select("*, user:provider_user_id(id,full_name,email,role,is_active,created_at)")
      .eq("provider_type", "HOUSING_AGENCY")
      .order("created_at", { ascending: false });
    if (params.q) {
      query = query.ilike("display_name", `%${params.q}%`);
    }
    query = query.range(pagination.from, pagination.to);
    const { data, error } = await query;
    if (error) return { data: [], count: count ?? 0, error };
    return { data: (data || []) as AdminAgency[], count: count ?? 0 };
  } catch (err: any) {
    return { data: [], count: 0, error: err instanceof Error ? err : new Error("Error al consultar agencias") };
  }
}

function getPeriodRange(period: ListAdminInvoicesParams["period"]) {
  if (!period) return {};
  const now = new Date();
  if (period === "this_month") {
    const from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
    const to = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString();
    return { from, to };
  }
  if (period === "last_month") {
    const fromDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const toDate = new Date(now.getFullYear(), now.getMonth(), 0);
    return { from: fromDate.toISOString(), to: toDate.toISOString() };
  }
  if (period === "last_30") {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 30);
    return { from: fromDate.toISOString() };
  }
  return {};
}

function applyInvoiceFilters(query: any, params: ListAdminInvoicesParams, clientIds?: string[]) {
  let updated = query;
  if (params.status) {
    updated = updated.eq("status", params.status);
  }
  if (params.payerUserId) {
    updated = updated.eq("payer_user_id", params.payerUserId);
  }
  const periodRange = getPeriodRange(params.period);
  const fromDate = params.dateFrom || periodRange.from;
  const toDate = params.dateTo || periodRange.to;
  if (fromDate) {
    updated = updated.gte("issued_at", fromDate);
  }
  if (toDate) {
    updated = updated.lte("issued_at", toDate);
  }
 if (clientIds && clientIds.length > 0) {
  const serialized = clientIds.join(",");
  updated = updated.or(`payer_user_id.in.(${serialized}),issuer_user_id.in.(${serialized})`);
}

  return updated;
}

async function findClientUserIds(clientQ: string) {
  const like = `%${clientQ.trim()}%`;
  const { data, error } = await supabase
    .from("VoyUsers")
    .select("id")
    .or(`full_name.ilike.${like},email.ilike.${like}`);
  if (error) throw error;
  return (data || []).map((row: any) => row.id).filter(Boolean);
}

export async function listAdminInvoices(params: ListAdminInvoicesParams = {}): Promise<ListResult<AdminInvoice>> {
  try {
    const pagination = rangeForPage(params.page, params.pageSize);

    // 1) clientQ -> ids
    let clientIds: string[] | undefined;
    if (params.clientQ && params.clientQ.trim().length >= 2) {
      clientIds = await findClientUserIds(params.clientQ);
      if (!clientIds.length) return { data: [], count: 0 };
    }

    // 2) COUNT
    let countQuery: any = supabase.from("VoyInvoices").select("id", { count: "exact", head: true });
    countQuery = applyInvoiceFilters(countQuery, params, clientIds);
    const { count, error: countError } = await countQuery;
    if (countError) return { data: [], count: 0, error: countError };

    // 3) DATA (sin embeds)
    let query: any = supabase
      .from("VoyInvoices")
      .select("id,invoice_number,invoice_code,invoice_series,issued_at,created_at,status,total,amount,currency,payer_user_id,issuer_user_id")
      .order("issued_at", { ascending: false });

    query = applyInvoiceFilters(query, params, clientIds);
    query = query.range(pagination.from, pagination.to);

    const { data, error } = await query;
    if (error) return { data: [], count: count ?? 0, error };

    const rows = (data || []) as any[];

    // 4) join users
    const userIds = Array.from(new Set(rows.flatMap((r) => [r.payer_user_id, r.issuer_user_id]).filter(Boolean)));
    const usersById = new Map<string, { id: string; full_name?: string; email?: string }>();

    if (userIds.length) {
      const { data: users, error: usersErr } = await supabase.from("VoyUsers").select("id,full_name,email").in("id", userIds);
      if (usersErr) return { data: [], count: count ?? 0, error: usersErr };
      (users || []).forEach((u: any) => usersById.set(u.id, u));
    }

    const normalized: AdminInvoice[] = rows.map((r) => ({
      id: r.id,
      invoice_number: r.invoice_number ?? undefined,
      invoice_code: r.invoice_code ?? undefined,
      invoice_series: r.invoice_series ?? undefined,
      issued_at: r.issued_at ?? undefined,
      created_at: r.created_at ?? undefined,
      status: r.status ?? undefined,
      total: r.total ?? undefined,
      amount: r.amount ?? undefined,
      currency: r.currency ?? undefined,
      payer_user_id: r.payer_user_id ?? undefined,
      issuer_user_id: r.issuer_user_id ?? undefined,
      payer: r.payer_user_id ? usersById.get(r.payer_user_id) : undefined,
      issuer: r.issuer_user_id ? usersById.get(r.issuer_user_id) : undefined,
    }));

    return { data: normalized, count: count ?? 0 };
  } catch (err: any) {
    return { data: [], count: 0, error: err instanceof Error ? err : new Error("Error al consultar facturas") };
  }
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
