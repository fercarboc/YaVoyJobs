import React, { useEffect, useMemo, useState } from "react";
import {
  BillingPeriod,
  PlanScope,
  VoyPlan,
  VoyPlanDiscount,
  VoySubscription,
  activatePlan,
  createInvoice,
  getActiveSubscription,
  listDiscountsByScope,
  listPlansByScope,
  saveBillingMandate,
} from "@/services/subscriptionsService";

type Props = {
  scope: PlanScope;
  onActivated?: (subscription: VoySubscription | null) => void;
};

const PERIOD_MONTHS: Record<BillingPeriod, number> = {
  monthly: 1,
  semester: 6,
  annual: 12,
};

const PERIOD_LABELS: Record<BillingPeriod, string> = {
  monthly: "Mensual",
  semester: "Semestral",
  annual: "Anual",
};

function formatCurrency(amount: number, currency = "EUR") {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency, minimumFractionDigits: 2 }).format(amount);
}

function formatDate(date?: string | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("es-ES", { year: "numeric", month: "short", day: "numeric" }).format(new Date(date));
}

function extractLimits(limits?: Record<string, any> | null) {
  if (!limits) return [];
  return Object.entries(limits)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => ({ key, value }));
}

const PlanSelector: React.FC<Props> = ({ scope, onActivated }) => {
  const [plans, setPlans] = useState<VoyPlan[]>([]);
  const [discounts, setDiscounts] = useState<VoyPlanDiscount[]>([]);
  const [active, setActive] = useState<VoySubscription | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "iban">("card");
  const [paymentData, setPaymentData] = useState({
    cardholder: "",
    last4: "",
    exp_month: "",
    exp_year: "",
    iban: "",
    holder: "",
    tax_id: "",
    bank: "",
    consent: false,
  });

  const selectedPlan = useMemo(() => plans.find((p) => p.id === selectedPlanId) || null, [plans, selectedPlanId]);

  const selectedDiscount = useMemo(() => {
    const months = PERIOD_MONTHS[period];
    if (months === 1) return 0;
    return discounts.find((d) => d.commitment_months === months)?.discount_pct || 0;
  }, [discounts, period]);

  const calculatedTotal = useMemo(() => {
    if (!selectedPlan) return 0;
    const months = PERIOD_MONTHS[period];
    const base = selectedPlan.price || 0;
    return Math.round(base * months * (1 - selectedDiscount / 100) * 100) / 100;
  }, [period, selectedDiscount, selectedPlan]);

  const loadData = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const [plansData, discountsData, activeSubscription] = await Promise.all([
        listPlansByScope(scope),
        listDiscountsByScope(scope),
        getActiveSubscription(scope),
      ]);
      setPlans(plansData);
      setDiscounts(discountsData);
      setActive(activeSubscription);
      const defaultPlanId = activeSubscription?.plan_id || plansData[0]?.id || null;
      if (!selectedPlanId && defaultPlanId) setSelectedPlanId(defaultPlanId);
    } catch (err: any) {
      setFeedback({ type: "error", message: err?.message || "No se pudieron cargar los planes" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  const handleActivate = async () => {
    if (!selectedPlan) return;
    if (scope === "AGENCY_HOUSING" && calculatedTotal > 0) {
      setShowPayment(true);
      return;
    }
    setSubmitting(true);
    setFeedback(null);
    try {
      const subscription = await activatePlan({ scope, planId: selectedPlan.id, period });
      setActive(subscription);
      setFeedback({ type: "success", message: "Plan activado correctamente" });
      onActivated?.(subscription);
      await loadData();
    } catch (err: any) {
      setFeedback({ type: "error", message: err?.message || "No se pudo activar el plan" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (!selectedPlan) return;
    setSubmitting(true);
    setFeedback(null);
    try {
      if (paymentMethod === "iban") {
        await saveBillingMandate({
          iban: paymentData.iban,
          holder: paymentData.holder,
          tax_id: paymentData.tax_id,
          bank: paymentData.bank,
          consent: paymentData.consent,
        });
      }

      const paymentRef =
        paymentMethod === "card" ? `SIM_STRIPE_${Date.now()}` : `SIM_IBAN_${Date.now()}`;
      if (paymentMethod === "card") {
        await new Promise((res) => setTimeout(res, 600));
      }

      await createInvoice({
        planId: selectedPlan.id,
        period,
        total: calculatedTotal,
        status: paymentMethod === "card" ? "PAID" : "PENDING",
        payment_ref: paymentRef,
        currency: selectedPlan.currency,
      });

      const subscription = await activatePlan({ scope, planId: selectedPlan.id, period });
      setActive(subscription);
      setFeedback({ type: "success", message: "Plan actualizado y factura generada" });
      setShowPayment(false);
      onActivated?.(subscription);
      await loadData();
    } catch (err: any) {
      setFeedback({ type: "error", message: err?.message || "No se pudo procesar el pago" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {feedback && (
        <div
          className={`px-4 py-3 rounded-xl text-sm ${
            feedback.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Tu plan actual</h2>
            <p className="text-sm text-gray-600">Consulta tu suscripcion activa y sus limites.</p>
          </div>
          {active && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Activo
            </span>
          )}
        </div>
        {loading ? (
          <div className="text-sm text-gray-500">Cargando plan actual...</div>
        ) : active ? (
          <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-gray-500 font-bold">Plan</p>
              <p className="text-base font-semibold text-gray-900">{active.plan?.name || active.plan_id}</p>
              <p className="text-sm text-gray-600">Periodo: {PERIOD_LABELS[active.subscription_type as BillingPeriod] || "Mensual"}</p>
              <p className="text-sm text-gray-600">
                Vigencia: {formatDate(active.start_date)} - {formatDate(active.end_date)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 font-bold">Limites</p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {extractLimits(active.plan?.limits).map((item) => (
                  <li key={item.key}>
                    {item.key}: <span className="font-semibold">{String(item.value)}</span>
                  </li>
                ))}
                {!extractLimits(active.plan?.limits).length && <li className="text-gray-500">Sin limites definidos</li>}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-600">Aun no tienes un plan activo.</div>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Cambiar plan</h2>
            <p className="text-sm text-gray-600">Selecciona plan y periodo de facturacion.</p>
          </div>
          <div className="flex gap-2">
            {(["monthly", "semester", "annual"] as BillingPeriod[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPeriod(option)}
                className={`px-3 py-2 rounded-full text-sm font-semibold border ${
                  period === option ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {PERIOD_LABELS[option]}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-sm text-gray-500">Cargando planes...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {plans.map((plan) => {
              const limits = extractLimits(plan.limits);
              const isSelected = selectedPlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`text-left border rounded-2xl p-4 shadow-sm transition ${
                    isSelected ? "border-blue-500 ring-2 ring-blue-100 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase text-gray-500 font-bold">{plan.plan_code}</p>
                      <p className="text-lg font-semibold text-gray-900">{plan.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Desde</p>
                      <p className="text-xl font-bold text-blue-700">{formatCurrency(plan.price, plan.currency)}</p>
                      <p className="text-xs text-gray-500">/mes</p>
                    </div>
                  </div>
                  <ul className="mt-3 text-sm text-gray-700 space-y-1">
                    {limits.map((limit) => (
                      <li key={limit.key} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span className="font-semibold capitalize">{limit.key}</span>: <span>{String(limit.value)}</span>
                      </li>
                    ))}
                    {!limits.length && <li className="text-gray-500">Sin limites definidos.</li>}
                  </ul>
                </button>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              Total {PERIOD_MONTHS[period]} meses:{" "}
              <span className="font-semibold">{formatCurrency(calculatedTotal, selectedPlan?.currency || "EUR")}</span>
              {selectedDiscount ? <span className="text-green-700 ml-2">- {selectedDiscount}% descuento</span> : null}
            </p>
            <p className="text-xs text-gray-500">
              El importe se calcula segun el precio base del plan y el descuento aplicable para el compromiso seleccionado.
            </p>
          </div>
          <button
            type="button"
            onClick={handleActivate}
            disabled={!selectedPlan || submitting}
            className={`px-4 py-2 rounded-xl text-sm font-semibold ${
              !selectedPlan || submitting ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {submitting ? "Activando..." : active ? "Cambiar plan" : "Activar plan"}
          </button>
        </div>
      </div>

      {showPayment && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pago del plan</h3>
                <p className="text-sm text-gray-600">
                  Importe: {formatCurrency(calculatedTotal, selectedPlan?.currency || "EUR")} ({PERIOD_LABELS[period]})
                </p>
              </div>
              <button onClick={() => setShowPayment(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
                ×
              </button>
            </div>

            <div className="flex gap-3">
              {["card", "iban"].map((m) => (
                <button
                  key={m}
                  onClick={() => setPaymentMethod(m as "card" | "iban")}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                    paymentMethod === m ? "border-blue-600 text-blue-700 bg-blue-50" : "border-gray-200 text-gray-700"
                  }`}
                >
                  {m === "card" ? "Tarjeta (simulada)" : "Domiciliación (IBAN)"}
                </button>
              ))}
            </div>

            {paymentMethod === "card" ? (
              <div className="grid gap-3">
                <input
                  placeholder="Titular"
                  value={paymentData.cardholder}
                  onChange={(e) => setPaymentData((p) => ({ ...p, cardholder: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    placeholder="Últimos 4"
                    maxLength={4}
                    value={paymentData.last4}
                    onChange={(e) => setPaymentData((p) => ({ ...p, last4: e.target.value.replace(/\\D/g, "") }))}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                  <div className="flex gap-2">
                    <input
                      placeholder="MM"
                      maxLength={2}
                      value={paymentData.exp_month}
                      onChange={(e) => setPaymentData((p) => ({ ...p, exp_month: e.target.value.replace(/\\D/g, "") }))}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-16"
                    />
                    <input
                      placeholder="YY"
                      maxLength={2}
                      value={paymentData.exp_year}
                      onChange={(e) => setPaymentData((p) => ({ ...p, exp_year: e.target.value.replace(/\\D/g, "") }))}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-16"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-3">
                <input
                  placeholder="IBAN"
                  value={paymentData.iban}
                  onChange={(e) => setPaymentData((p) => ({ ...p, iban: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
                <input
                  placeholder="Titular"
                  value={paymentData.holder}
                  onChange={(e) => setPaymentData((p) => ({ ...p, holder: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
                <input
                  placeholder="DNI/CIF"
                  value={paymentData.tax_id}
                  onChange={(e) => setPaymentData((p) => ({ ...p, tax_id: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
                <input
                  placeholder="Banco (opcional)"
                  value={paymentData.bank}
                  onChange={(e) => setPaymentData((p) => ({ ...p, bank: e.target.value }))}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={paymentData.consent}
                    onChange={(e) => setPaymentData((p) => ({ ...p, consent: e.target.checked }))}
                  />
                  Autorizo la domiciliación del plan.
                </label>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPayment(false)}
                type="button"
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPayment}
                disabled={
                  submitting ||
                  (paymentMethod === "iban" && (!paymentData.iban || !paymentData.holder || !paymentData.tax_id || !paymentData.consent)) ||
                  (paymentMethod === "card" && (!paymentData.cardholder || paymentData.last4.length !== 4))
                }
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold disabled:opacity-50"
              >
                {submitting ? "Procesando..." : "Confirmar y facturar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanSelector;
