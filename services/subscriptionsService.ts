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

export async function getCurrentVoyUser() {
  const { data: auth } = await supabase.auth.getUser();
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
