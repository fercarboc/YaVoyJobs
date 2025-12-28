import { supabase } from "./supabase";

// TODO: mover a Edge Function cuando el backend este listo

export type PlanScope = "AGENCY_HOUSING" | "COMPANY_JOBS";
export type BillingPeriod = "monthly" | "semester" | "annual";

export type VoyPlan = {
  id: string;
  plan_code: string;
  plan_scope: PlanScope;
  name: string;
  price: number;
  currency: string;
  billing_period?: string | null;
  limits?: Record<string, any> | null;
  is_active?: boolean | null;
};

export type VoyPlanDiscount = {
  plan_scope: PlanScope;
  commitment_months: 6 | 12;
  discount_pct: number;
  is_active?: boolean | null;
};

export type VoySubscription = {
  id: string;
  company_user_id: string;
  plan_id: string;
  amount: number;
  currency: string;
  status: "pending" | "active" | "expired" | "cancelled";
  subscription_type: BillingPeriod;
  start_date: string | null;
  end_date: string | null;
  metadata?: Record<string, any> | null;
  created_at?: string;
  updated_at?: string;
  plan?: VoyPlan | null;
};

const BILLING_MONTHS: Record<BillingPeriod, number> = {
  monthly: 1,
  semester: 6,
  annual: 12,
};

function roundAmount(value: number) {
  return Math.round(value * 100) / 100;
}

function addMonths(date: Date, months: number) {
  const copy = new Date(date);
  copy.setMonth(copy.getMonth() + months);
  return copy;
}

async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** VoyUser actual (tabla VoyUsers) */
export async function getCurrentVoyUser() {
  const { data: auth, error: authErr } = await supabase.auth.getUser();
  if (authErr) throw authErr;

  const uid = auth.user?.id;
  if (!uid) throw new Error("No session");

  const { data, error } = await supabase.from("VoyUsers").select("*").eq("auth_user_id", uid).single();
  if (error) throw error;
  return data;
}

export async function listPlansByScope(scope: PlanScope): Promise<VoyPlan[]> {
  const { data, error } = await supabase
    .from("voyplans")
    .select("*")
    .eq("plan_scope", scope)
    .eq("is_active", true)
    .order("price", { ascending: true });

  if (error) throw error;
  return (data || []) as VoyPlan[];
}

export async function listDiscountsByScope(scope: PlanScope): Promise<VoyPlanDiscount[]> {
  const { data, error } = await supabase
    .from("voyplan_discounts")
    .select("*")
    .eq("plan_scope", scope)
    .eq("is_active", true);

  if (error) throw error;
  return (data || []) as VoyPlanDiscount[];
}

async function getPlanIdsForScope(scope: PlanScope) {
  const plans = await listPlansByScope(scope);
  return plans.map((p) => p.id);
}

export async function getActiveSubscription(scope: PlanScope): Promise<VoySubscription | null> {
  const [voyUser, planIds] = await Promise.all([getCurrentVoyUser(), getPlanIdsForScope(scope)]);
  if (!planIds.length) return null;

  const { data, error } = await supabase
    .from("VoyCompanySubscriptions")
    .select("*, plan:plan_id(id, plan_code, plan_scope, name, price, currency, billing_period, limits)")
    .eq("company_user_id", voyUser.id)
    .eq("status", "active")
    .in("plan_id", planIds)
    .gte("end_date", new Date().toISOString())
    .order("created_at", { ascending: false })
    .maybeSingle();

  if (error) throw error;
  return (data as VoySubscription | null) || null;
}

export async function cancelActiveSubscriptionsForScope(voyUserId: string, scope: PlanScope) {
  const planIds = await getPlanIdsForScope(scope);
  if (!planIds.length) return;

  const { error } = await supabase
    .from("VoyCompanySubscriptions")
    .update({ status: "cancelled", updated_at: new Date().toISOString() })
    .eq("company_user_id", voyUserId)
    .eq("status", "active")
    .in("plan_id", planIds);

  if (error) throw error;
}

export async function activatePlan(params: { scope: PlanScope; planId: string; period: BillingPeriod }): Promise<VoySubscription> {
  const { scope, planId, period } = params;

  const [voyUser, discounts] = await Promise.all([getCurrentVoyUser(), listDiscountsByScope(scope)]);

  const { data: plan, error: planError } = await supabase
    .from("voyplans")
    .select("*")
    .eq("id", planId)
    .eq("plan_scope", scope)
    .single();

  if (planError) throw planError;

  const months = BILLING_MONTHS[period];
  const discount = period === "monthly" ? 0 : discounts.find((d) => d.commitment_months === months)?.discount_pct || 0;
  const total = roundAmount((plan.price || 0) * months * (1 - discount / 100));

  const startDate = new Date();
  const endDate = addMonths(startDate, months);

  await cancelActiveSubscriptionsForScope(voyUser.id, scope);

  const { data: subscription, error } = await supabase
    .from("VoyCompanySubscriptions")
    .insert({
      company_user_id: voyUser.id,
      plan_id: planId,
      subscription_type: period,
      amount: total,
      currency: plan.currency || "EUR",
      status: "active",
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      metadata: { plan_scope: scope, commitment_months: months, discount_pct: discount },
    })
    .select("*, plan:plan_id(id, plan_code, plan_scope, name, price, currency, billing_period, limits)")
    .single();

  if (error) throw error;
  return subscription as VoySubscription;
}

export type PaymentMethod = "card" | "iban";

export async function saveBillingMandate(input: {
  iban?: string;
  holder?: string;
  tax_id?: string;
  bank?: string;
  consent?: boolean;
}) {
  const user = await getCurrentVoyUser();

  const payload = {
    agency_user_id: user.id,
    billing_iban: input.iban || null,
    billing_holder: input.holder || null,
    billing_tax_id: input.tax_id || null,
    billing_bank: input.bank || null,
    billing_consent: input.consent ?? true,
  };

  const { error } = await supabase.from("VoyAgencyProfiles").upsert(payload, { onConflict: "agency_user_id" });
  if (error) throw error;
}

type CreateInvoiceInput = {
  planId: string;
  period: BillingPeriod;
  total: number;
  status: "PAID" | "PENDING";
  payment_ref?: string;
  currency?: string;
  periodStart?: string;
  periodEnd?: string;
  scope?: string; // opcional
  description?: string;
};

export async function createInvoice(params: CreateInvoiceInput) {
  const user = await getCurrentVoyUser();
  const issuedAt = new Date().toISOString();

  // 1) hash anterior (cadena legal)
  const { data: prev, error: prevErr } = await supabase
    .from("VoyInvoices")
    .select("hash")
    .eq("payer_user_id", user.id)
    .order("issued_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (prevErr) throw prevErr;

  const prevHash = prev?.hash || null;

  // 2) nuevo hash
  const invoiceId = crypto.randomUUID();
  const hash = await sha256Hex(
    `${invoiceId}${user.id}${params.total}${issuedAt}${prevHash || ""}`
  );

  // 3) INSERT REAL alineado con la tabla
  const { error } = await supabase.from("VoyInvoices").insert({
    id: invoiceId,

    // Relaciones
    payer_user_id: user.id,
    company_user_id: user.id,
    plan_id: params.planId,

    // 🔴 CAMPOS OBLIGATORIOS
    amount: params.total,              // ✅ CLAVE
    currency: params.currency || "EUR", // ✅ CLAVE
    status: params.status,

    // Fechas
    issued_at: issuedAt,
    paid_at: params.status === "PAID" ? issuedAt : null,
    created_at: issuedAt,

    // Periodo
    period: params.period,
    period_start: params.periodStart || issuedAt,
    period_end: params.periodEnd || null,

    // Importes
    subtotal: params.total,
    vat: 0,
    total: params.total,

    // Hash legal
    hash,
    previous_invoice_hash: prevHash,
    hash_algorithm: "SHA-256",
    hash_payload: {
      invoiceId,
      payer_user_id: user.id,
      total: params.total,
      issued_at: issuedAt,
      previous: prevHash,
      period: params.period,
      plan_id: params.planId,
    },

    // Extras
    payment_ref: params.payment_ref || null,
    metadata: {
      scope: params.scope || null,
      billing_period: params.period,
    },
  });

  if (error) throw error;

  return { id: invoiceId, hash };
}
