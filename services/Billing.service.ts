import { supabase } from "./supabase";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

export type VoyCompany = {
  id: string;
  owner_user_id: string;
  name: string | null;
  brand_name: string | null;
  cif: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  postal_code: string | null;
  country: string | null;

  billing_address: string | null;
  billing_city: string | null;
  billing_province: string | null;
  billing_postal_code: string | null;
  billing_country: string | null;
  billing_tax_id: string | null;
  billing_holder: string | null;
  billing_iban: string | null;
  billing_bank: string | null;
};

export type VoyInvoice = {
  id: string;
  issuer_user_id?: string | null;
  payer_user_id: string;
  company_user_id?: string | null;

  amount: number;                 // NOT NULL (según error que viste)
  currency: string;               // NOT NULL

  status: "PAID" | "PENDING" | "CANCELLED" | "REFUNDED" | string;
  issued_at: string;
  paid_at?: string | null;

  description?: string | null;

  scope?: string | null;
  subscription_id?: string | null;

  plan_id?: string | null;
  period?: string | null;

  subtotal?: number | null;
  vat?: number | null;
  total?: number | null;

  payment_ref?: string | null;

  // hashes (tu tabla tiene varios campos)
  invoice_hash?: string | null;
  previous_invoice_hash?: string | null;
  prev_hash?: string | null;
  hash?: string | null;
  hash_algorithm?: string | null;
  hash_payload?: any | null;

  issuer_entity_id?: string | null;
  invoice_series?: string | null;
  invoice_number?: number | null;

  period_start?: string | null;
  period_end?: string | null;

  created_at?: string;
  updated_at?: string;
  metadata?: Record<string, any> | null;
};

export type InvoiceWithDetails = {
  invoice: VoyInvoice;
  plan?: VoyPlan | null;
  subscription?: VoySubscription | null;
  company?: VoyCompany | null; // datos del cliente (agencia/empresa) desde VoyCompanies
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

function formatDateES(iso?: string | null) {
  if (!iso) return "-";
  const d = new Date(iso);
  return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short", year: "numeric" }).format(d);
}

function formatMoney(amount: number, currency = "EUR") {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency }).format(amount);
}

function periodLabel(p?: string | null) {
  if (!p) return "-";
  if (p === "monthly") return "Mensual";
  if (p === "semester") return "Semestral";
  if (p === "annual") return "Anual";
  return p;
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

/** Datos fiscales del cliente (agencia/empresa) desde VoyCompanies por owner_user_id */
export async function getCurrentVoyCompany(): Promise<VoyCompany | null> {
  const user = await getCurrentVoyUser();
  const { data, error } = await supabase.from("VoyCompanies").select("*").eq("owner_user_id", user.id).maybeSingle();
  if (error) throw error;
  return (data as VoyCompany | null) || null;
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
  scope?: PlanScope;
  subscriptionId?: string;
};

export async function createInvoice(params: CreateInvoiceInput) {
  const user = await getCurrentVoyUser();
  const issuedAt = new Date().toISOString();

  // 0) cargar el plan para descripción bonita
  const { data: plan, error: planErr } = await supabase
    .from("voyplans")
    .select("id, name, currency")
    .eq("id", params.planId)
    .maybeSingle();
  if (planErr) throw planErr;

  const pStart = params.periodStart || issuedAt;
  const pEnd = params.periodEnd || null;

  const description =
    `Plan: ${plan?.name || "Plan"}\n` +
    `Periodo: ${periodLabel(params.period)}\n` +
    `Vigencia: ${formatDateES(pStart)} - ${formatDateES(pEnd)}`;

  // 1) hash anterior (cadena)
  const { data: prev, error: prevErr } = await supabase
    .from("VoyInvoices")
    .select("hash, invoice_hash, prev_hash, previous_invoice_hash")
    .eq("payer_user_id", user.id)
    .order("issued_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (prevErr) throw prevErr;

  const prevHash =
    prev?.hash || prev?.invoice_hash || prev?.prev_hash || prev?.previous_invoice_hash || null;

  // 2) nuevo hash
  const invoiceId = crypto.randomUUID();
  const hash = await sha256Hex(`${invoiceId}${user.id}${params.total}${issuedAt}${prevHash || ""}`);

  const currency = params.currency || plan?.currency || "EUR";

  // 3) insertar factura (columnas reales de tu tabla)
  const payload: Partial<VoyInvoice> = {
    id: invoiceId,

    payer_user_id: user.id,
    company_user_id: user.id,

    amount: params.total,        // ✅ NOT NULL
    currency,                   // ✅ NOT NULL

    status: params.status,
    issued_at: issuedAt,
    paid_at: params.status === "PAID" ? issuedAt : null,

    description,

    scope: params.scope || null,
    subscription_id: params.subscriptionId || null,

    plan_id: params.planId,
    period: params.period,

    subtotal: params.total,
    vat: 0,
    total: params.total,

    payment_ref: params.payment_ref || null,

    // hashes: relleno en varios campos por compatibilidad con tu esquema
    invoice_hash: hash,
    hash,
    previous_invoice_hash: prevHash,
    prev_hash: prevHash,
    hash_algorithm: "SHA-256",
    hash_payload: {
      invoiceId,
      payer_user_id: user.id,
      total: params.total,
      issued_at: issuedAt,
      previous: prevHash,
      period: params.period,
      plan_id: params.planId,
      scope: params.scope || null,
      subscription_id: params.subscriptionId || null,
    },

    period_start: pStart,
    period_end: pEnd,

    metadata: {
      period: params.period,
      scope: params.scope || null,
      subscription_id: params.subscriptionId || null,
    },
  };

  const { error } = await supabase.from("VoyInvoices").insert(payload);
  if (error) throw error;

  return { id: invoiceId, hash };
}

/** Trae factura + plan + subscription + datos fiscales (VoyCompanies) */
export async function getInvoiceWithDetails(invoiceId: string): Promise<InvoiceWithDetails> {
  const user = await getCurrentVoyUser();

  // 1) factura
  const { data: invoice, error: invErr } = await supabase
    .from("VoyInvoices")
    .select("*")
    .eq("id", invoiceId)
    .maybeSingle();

  if (invErr) throw invErr;
  if (!invoice) throw new Error("Factura no encontrada");

  // seguridad: si no eres admin, solo tus facturas
  if (user.role !== "ADMIN" && invoice.payer_user_id !== user.id) {
    throw new Error("No autorizado");
  }

  // 2) plan
  let plan: VoyPlan | null = null;
  if (invoice.plan_id) {
    const { data, error } = await supabase.from("voyplans").select("*").eq("id", invoice.plan_id).maybeSingle();
    if (error) throw error;
    plan = (data as VoyPlan | null) || null;
  }

  // 3) subscription
  let subscription: VoySubscription | null = null;
  if (invoice.subscription_id) {
    const { data, error } = await supabase
      .from("VoyCompanySubscriptions")
      .select("*, plan:plan_id(id, plan_code, plan_scope, name, price, currency, billing_period, limits)")
      .eq("id", invoice.subscription_id)
      .maybeSingle();
    if (error) throw error;
    subscription = (data as VoySubscription | null) || null;
  }

  // 4) datos del cliente (VoyCompanies por owner_user_id = payer_user_id)
  const { data: company, error: cErr } = await supabase
    .from("VoyCompanies")
    .select("*")
    .eq("owner_user_id", invoice.payer_user_id)
    .maybeSingle();
  if (cErr) throw cErr;

  return {
    invoice: invoice as VoyInvoice,
    plan,
    subscription,
    company: (company as VoyCompany | null) || null,
  };
}

/** Genera un PDF profesional (frontend) */
export function generateInvoicePdf(input: InvoiceWithDetails) {
  const { invoice, plan, subscription, company } = input;

  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;

  // === ENCABEZADO (EMISOR: YaVoy) ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("YaVoyJobs Group, SL", margin, 55);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("CIF: B89344831", margin, 72);
  doc.text("C/ Gumersindo Azcárate, 33 - 28026 Madrid", margin, 86);
  doc.text("Email: info@yavoyjobs.com  ·  Tel: 672 336 572 / 660 001 002", margin, 100);
  doc.text("Web: www.yavoyjobs.com", margin, 114);

  // === FACTURA (derecha) ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("FACTURA", pageWidth - margin, 55, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const invoiceNumber =
    invoice.invoice_series && invoice.invoice_number
      ? `${invoice.invoice_series}-${invoice.invoice_number}`
      : invoice.id;

  doc.text(`Nº: ${invoiceNumber}`, pageWidth - margin, 74, { align: "right" });
  doc.text(`Fecha: ${formatDateES(invoice.issued_at)}`, pageWidth - margin, 88, { align: "right" });
  doc.text(`Estado: ${invoice.status}`, pageWidth - margin, 102, { align: "right" });

  // === CLIENTE (VoyCompanies) ===
  const clientY = 150;
  doc.setDrawColor(220);
  doc.line(margin, clientY - 18, pageWidth - margin, clientY - 18);

  doc.setFont("helvetica", "bold");
  doc.text("Facturar a:", margin, clientY);

  doc.setFont("helvetica", "normal");
  const clientName = company?.brand_name || company?.name || "Cliente";
  const clientCif = company?.billing_tax_id || company?.cif || "-";
 const clientEmail = company?.email || "-";
const clientPhone = company?.phone || "-";


  const billAddress = company?.billing_address || company?.address || "-";
  const billCity = company?.billing_city || company?.city || "-";
  const billProv = company?.billing_province || company?.province || "-";
  const billCP = company?.billing_postal_code || company?.postal_code || "-";
  const billCountry = company?.billing_country || company?.country || "-";

  doc.text(`${clientName}`, margin, clientY + 16);
  doc.text(`CIF: ${clientCif}`, margin, clientY + 32);
  doc.text(`${billAddress}`, margin, clientY + 48);
  doc.text(`${billCP} · ${billCity} · ${billProv} · ${billCountry}`, margin, clientY + 64);
  doc.text(`Email: ${clientEmail}  ·  Tel: ${clientPhone}`, margin, clientY + 80);

  // === DETALLE (líneas) ===
  const itemPlan = plan?.name || "Plan";
  const itemPeriod = subscription?.subscription_type || invoice.period || "monthly";
  const itemStart = subscription?.start_date || invoice.period_start || invoice.issued_at;
  const itemEnd = subscription?.end_date || invoice.period_end || null;

  const concept =
    `${itemPlan}\n` +
    `Periodo: ${periodLabel(itemPeriod)}\n` +
    `Vigencia: ${formatDateES(itemStart)} - ${formatDateES(itemEnd)}`;

  const tableTop = clientY + 120;

  autoTable(doc, {
    startY: tableTop,
    head: [["Concepto", "Importe"]],
    body: [[concept, formatMoney(invoice.amount ?? invoice.total ?? 0, invoice.currency)]],
    styles: { font: "helvetica", fontSize: 10, cellPadding: 8 },
    headStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0] },
    columnStyles: {
      0: { cellWidth: 380 },
      1: { halign: "right", cellWidth: 120 },
    },
  });

  const afterTableY = (doc as any).lastAutoTable.finalY + 20;

  // === TOTALES ===
  const subtotal = invoice.subtotal ?? invoice.amount ?? 0;
  const vat = invoice.vat ?? 0;
  const total = invoice.total ?? invoice.amount ?? 0;

  doc.setFont("helvetica", "normal");
  doc.text(`Subtotal: ${formatMoney(subtotal, invoice.currency)}`, pageWidth - margin, afterTableY + 10, {
    align: "right",
  });
  doc.text(`IVA: ${formatMoney(vat, invoice.currency)}`, pageWidth - margin, afterTableY + 26, { align: "right" });

  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL: ${formatMoney(total, invoice.currency)}`, pageWidth - margin, afterTableY + 46, { align: "right" });

  // === HASH / FIRMA ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const hash = invoice.hash || invoice.invoice_hash || "-";
  doc.text(`Hash: ${hash}`, margin, 780);

  doc.setFontSize(9);
  doc.text("Gracias por tu confianza.", margin, 805);

  return doc;
}

export async function downloadInvoicePdf(invoiceId: string) {
  const details = await getInvoiceWithDetails(invoiceId);
  const doc = generateInvoicePdf(details);

  const inv = details.invoice;
  const filename =
    inv.invoice_series && inv.invoice_number
      ? `Factura_${inv.invoice_series}-${inv.invoice_number}.pdf`
      : `Factura_${inv.id}.pdf`;

  doc.save(filename);
}
