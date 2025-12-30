// /dashboardperfiles/components/SettingsPanel.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/services/supabase";
import {
  User,
  Shield,
  CreditCard,
  MapPin,
  BadgeCheck,
  Save,
  Lock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

type TabKey = "profile" | "security" | "plans" | "areas" | "payments";

type PlanRow = {
  id: string;
  plan_code: string;
  plan_scope: string;
  name: string;
  price: number;
  currency: string;
  billing_period: string;
  limits: any;
  is_active: boolean;
};

type UserPlanRow = {
  id: string;
  user_id: string;
  plan_id: string;
  status: string;
  current_period_start?: string | null;
  current_period_end?: string | null;
  created_at?: string | null;
  stripe_customer_id?: string | null;
  stripe_subscription_id?: string | null;
  plan?: PlanRow | null;
};

type DistrictRow = { id: string; name: string };
type NeighborhoodRow = { id: string; district_id: string; name: string };

const YA_VOY_BLUE = "#0056b3";

const riskCards = [
  { color: "🟢", title: "Bajo · Recados", example: "Compras, pasear mascotas", price: "2,50 €" },
  { color: "🟡", title: "Medio · Asistencia básica", example: "Mayores", price: "4,00 €" },
  { color: "🟠", title: "Alto · Esfuerzo", example: "Mudanza", price: "6,50 €" },
  { color: "🔴", title: "Muy alto · Peligro", example: "Obras", price: "12,00 €" },
];

const WEEK_DAYS: Array<{ key: string; label: string; full: string }> = [
  { key: "mon", label: "L", full: "Lunes" },
  { key: "tue", label: "M", full: "Martes" },
  { key: "wed", label: "X", full: "Miércoles" },
  { key: "thu", label: "J", full: "Jueves" },
  { key: "fri", label: "V", full: "Viernes" },
  { key: "sat", label: "S", full: "Sábado" },
  { key: "sun", label: "D", full: "Domingo" },
];

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function normalizeJoinedPlan(p: any): PlanRow | null {
  if (!p) return null;
  if (Array.isArray(p)) return p[0] ?? null;
  return p as PlanRow;
}

function buildTimeOptions(stepMinutes = 30) {
  const out: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      out.push(`${hh}:${mm}`);
    }
  }
  return out;
}
const TIME_OPTIONS = buildTimeOptions(30);

function parseHashQuery() {
  // HashRouter: /#/panel?tab=plans&stripe=success
  const hash = window.location.hash || "";
  const hasQuery = hash.includes("?");
  const qs = hasQuery ? hash.split("?")[1] : "";
  const sp = new URLSearchParams(qs);
  return { hash, sp };
}

export default function SettingsPanel() {
  const [tab, setTab] = useState<TabKey>("profile");

  // Auth
  const [authUserId, setAuthUserId] = useState<string | null>(null);
  const [authEmail, setAuthEmail] = useState<string | null>(null);

  // VoyUsers
  const [voyUserId, setVoyUserId] = useState<string | null>(null);
  const [voyUser, setVoyUser] = useState<any | null>(null);

  // Loading + toast
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingAreas, setSavingAreas] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Profile
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Madrid");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("Madrid");

  // Plans
  const [plans, setPlans] = useState<PlanRow[]>([]);
  const [userPlan, setUserPlan] = useState<UserPlanRow | null>(null);
  const [loadingPlans, setLoadingPlans] = useState(false);

  // Areas catalogs
  const [districts, setDistricts] = useState<DistrictRow[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<NeighborhoodRow[]>([]);
  const [loadingAreasCatalogs, setLoadingAreasCatalogs] = useState(false);

  // Areas selection
  const [primaryDistrict, setPrimaryDistrict] = useState<string>("");
  const [primaryNeighborhood, setPrimaryNeighborhood] = useState<string>("");
  const [adjacentDistricts, setAdjacentDistricts] = useState<string[]>([]);
  const [adjacentNeighborhoods, setAdjacentNeighborhoods] = useState<string[]>([]);

  // Schedule
  const [availableDays, setAvailableDays] = useState<Record<string, boolean>>({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: false,
    sun: false,
  });
  const [timeFrom, setTimeFrom] = useState<string>("17:00");
  const [timeTo, setTimeTo] = useState<string>("20:00");

  // Security
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  const showToast = (type: "ok" | "err", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 2200);
  };

  // ✅ Boot: auth + VoyUsers
  useEffect(() => {
    const boot = async () => {
      setLoading(true);
      try {
        const { data } = await supabase.auth.getUser();
        const u = data?.user;

        if (!u?.id) {
          setAuthUserId(null);
          setAuthEmail(null);
          setVoyUser(null);
          setVoyUserId(null);
          return;
        }

        setAuthUserId(u.id);
        setAuthEmail(u.email ?? null);

        const { data: v, error } = await supabase
          .from("VoyUsers")
          .select("*")
          .eq("auth_user_id", u.id)
          .maybeSingle();

        if (error) {
          console.error("VoyUsers load error:", error);
          setVoyUser(null);
          setVoyUserId(null);
          return;
        }

        setVoyUser(v ?? null);
        setVoyUserId(v?.id ?? null);

        setFullName(v?.full_name ?? "");
        setPhone(v?.phone ?? "");
        setCity(v?.city ?? "Madrid");
        setAddress(v?.address ?? "");
        setPostalCode(v?.postal_code ?? "");
        setProvince(v?.province ?? "Madrid");

        setPrimaryDistrict(v?.primary_district ?? v?.district ?? "");
        setPrimaryNeighborhood(v?.primary_neighborhood ?? v?.neighborhood ?? "");
        setAdjacentDistricts(Array.isArray(v?.adjacent_districts) ? v.adjacent_districts : []);
        setAdjacentNeighborhoods(Array.isArray(v?.adjacent_neighborhoods) ? v.adjacent_neighborhoods : []);
        setAvailableDays(
          v?.availability_days ?? {
            mon: true, tue: true, wed: true, thu: true, fri: true, sat: false, sun: false,
          }
        );
        setTimeFrom(v?.availability_time_from ?? "17:00");
        setTimeTo(v?.availability_time_to ?? "20:00");
      } finally {
        setLoading(false);
      }
    };

    boot();
  }, []);

  // ✅ Catálogos distritos/barrios
  useEffect(() => {
    if (!authUserId) return;

    const loadAreasCatalogs = async () => {
      setLoadingAreasCatalogs(true);
      try {
        const { data: d1, error: e1 } = await supabase
          .from("VoyDistricts")
          .select("id,name")
          .order("name", { ascending: true });
        if (e1) console.warn("VoyDistricts error:", e1);
        setDistricts((d1 ?? []) as any);

        const { data: d2, error: e2 } = await supabase
          .from("VoyNeighborhoods")
          .select("id,district_id,name")
          .order("name", { ascending: true });
        if (e2) console.warn("VoyNeighborhoods error:", e2);
        setNeighborhoods((d2 ?? []) as any);
      } finally {
        setLoadingAreasCatalogs(false);
      }
    };

    loadAreasCatalogs();
  }, [authUserId]);

  // ✅ loadPlans reutilizable (para refrescar al volver de Stripe)
  const loadPlans = useCallback(async () => {
    if (!voyUserId) return;

    setLoadingPlans(true);
    try {
      const { data: p, error: ep } = await supabase
        .from("voyplans")
        .select("id,plan_code,plan_scope,name,price,currency,billing_period,limits,is_active")
        .eq("is_active", true)
        .in("plan_code", ["CLIENT_BASIC_990", "CLIENT_HOUSING_990"])
        .order("price", { ascending: true });

      if (ep) console.error("voyplans load error:", ep);
      setPlans((p ?? []) as any);

      const { data: up, error: eup } = await supabase
        .from("VoyUserPlans")
        .select(`
          id,
          user_id,
          plan_id,
          status,
          current_period_start,
          current_period_end,
          created_at,
          stripe_customer_id,
          stripe_subscription_id,
          plan:voyplans (
            id,plan_code,plan_scope,name,price,currency,billing_period,limits,is_active
          )
        `)
        .eq("user_id", voyUserId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (eup) {
        console.warn("VoyUserPlans load warn:", eup);
        setUserPlan(null);
      } else {
        const mapped: UserPlanRow | null = up
          ? { ...up, plan: normalizeJoinedPlan((up as any).plan) }
          : null;
        setUserPlan(mapped);
      }
    } finally {
      setLoadingPlans(false);
    }
  }, [voyUserId]);

  // ✅ Cargar planes al entrar
  useEffect(() => {
    if (!voyUserId) return;
    loadPlans();
  }, [voyUserId, loadPlans]);

  // ✅ Si vienes de Stripe: forzar tab + refrescar
  useEffect(() => {
    if (!voyUserId) return;

    const { hash, sp } = parseHashQuery();
    const stripe = sp.get("stripe");  // success | cancel
    const tabParam = sp.get("tab");   // plans

    if (tabParam === "plans") setTab("plans");

    if (stripe === "success") {
      setTab("plans");
      showToast("ok", "Pago correcto. Actualizando plan...");
      loadPlans();

      // limpia query para evitar repetición
      const cleanHash = hash.split("?")[0];
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${cleanHash}`);
    }

    if (stripe === "cancel") {
      setTab("plans");
      showToast("err", "Pago cancelado.");
      const cleanHash = hash.split("?")[0];
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${cleanHash}`);
    }
  }, [voyUserId, loadPlans]);

  const isLogged = Boolean(authUserId);
  const canEditProfile = Boolean(voyUserId);

  const neighborhoodOptionsForPrimaryDistrict = useMemo(() => {
    const distId = districts.find((d) => d.name === primaryDistrict)?.id;
    if (!distId) return [];
    return neighborhoods.filter((n) => n.district_id === distId).map((n) => n.name);
  }, [primaryDistrict, districts, neighborhoods]);

  const saveProfile = async () => {
    if (!voyUserId) {
      showToast("err", "No puedo guardar: no existe tu fila en VoyUsers (o RLS).");
      return;
    }
    setSavingProfile(true);
    try {
      const payload: any = {
        full_name: fullName.trim(),
        phone: phone.trim() || null,
        city: city.trim() || null,
        address: address.trim() || null,
        postal_code: postalCode.trim() || null,
        province: province.trim() || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("VoyUsers").update(payload).eq("id", voyUserId);
      if (error) throw error;

      setVoyUser((prev: any) => ({ ...(prev ?? {}), ...payload }));
      showToast("ok", "Perfil guardado");
    } catch (e: any) {
      console.error(e);
      showToast("err", e?.message ? `Error: ${e.message}` : "Error guardando perfil");
    } finally {
      setSavingProfile(false);
    }
  };

  const changePassword = async () => {
    if (!authUserId) return;
    if (!newPassword || newPassword.length < 6) {
      showToast("err", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (newPassword !== newPassword2) {
      showToast("err", "Las contraseñas no coinciden.");
      return;
    }
    setSavingPassword(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      setNewPassword("");
      setNewPassword2("");
      showToast("ok", "Contraseña actualizada");
    } catch (e: any) {
      console.error(e);
      showToast("err", e?.message ? `Error: ${e.message}` : "Error actualizando contraseña");
    } finally {
      setSavingPassword(false);
    }
  };

  const selectPlan = async (plan: PlanRow) => {
    try {
      const { data, error } = await supabase.functions.invoke("create-plan-checkout", {
        body: {
          plan_code: plan.plan_code,
          returnUrl: `${window.location.origin}/#/panel?tab=plans&stripe=success`,
          cancelUrl: `${window.location.origin}/#/panel?tab=plans&stripe=cancel`,
        },
      });

      if (error) {
        console.error("selectPlan error:", error);
        // @ts-ignore
        const res = (error as any).context;
        if (res) console.error("Edge error body:", await res.text());
        throw error;
      }

      if (!data?.url) throw new Error("Stripe URL no recibida");
      showToast("ok", "Redirigiendo a Stripe...");
      window.location.href = data.url;
    } catch (e: any) {
      console.error("selectPlan error RAW:", e);
      showToast("err", "Error iniciando pago (mira consola)");
    }
  };

  const openCustomerPortal = async () => {
    try {
      showToast("ok", "Abriendo portal de Stripe (test)...");
      const returnUrl = `${window.location.origin}/#/panel?tab=payments`;

      const { data, error } = await supabase.functions.invoke("create-customer-portal", {
        body: { returnUrl },
      });

      if (error) throw error;
      const url = (data as any)?.url;
      if (!url) throw new Error("No se recibió URL del portal");

      window.location.href = url;
    } catch (e: any) {
      console.error(e);
      showToast("err", e?.message ? `Error: ${e.message}` : "Error abriendo portal");
    }
  };

  const toggleDay = (key: string) => {
    setAvailableDays((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveAreasAndSchedule = async () => {
    if (!voyUserId) {
      showToast("err", "No puedo guardar: no existe tu fila en VoyUsers (o RLS).");
      return;
    }
    setSavingAreas(true);
    try {
      const payload: any = {
        primary_district: primaryDistrict || null,
        primary_neighborhood: primaryNeighborhood || null,
        adjacent_districts: adjacentDistricts,
        adjacent_neighborhoods: adjacentNeighborhoods,
        availability_days: availableDays,
        availability_time_from: timeFrom,
        availability_time_to: timeTo,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("VoyUsers").update(payload).eq("id", voyUserId);
      if (error) throw error;

      setVoyUser((prev: any) => ({ ...(prev ?? {}), ...payload }));
      showToast("ok", "Zonas y horario guardados");
    } catch (e: any) {
      console.error(e);
      showToast("err", e?.message ? `Error: ${e.message}` : "Error guardando zonas/horario");
    } finally {
      setSavingAreas(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-sm text-slate-600">Cargando configuración...</div>;
  }

  if (!isLogged) {
    return <div className="p-6 text-sm text-slate-700">Debes iniciar sesión para ver Configuración.</div>;
  }

  if (isLogged && !voyUserId) {
    return (
      <div className="p-6 space-y-2">
        <div className="flex items-center gap-2 text-amber-700">
          <AlertTriangle size={16} />
          <p className="font-semibold">Estás logado, pero no puedo cargar tu perfil (VoyUsers).</p>
        </div>
        <p className="text-sm text-slate-700">
          Causas típicas: no existe tu fila en <b>VoyUsers</b> o la <b>RLS</b> no permite leerla.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configuración</h2>
        <p className="text-gray-500 text-sm">Configura tus datos, pagos y zonas de servicio.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <aside className="xl:col-span-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-3 space-y-3 shadow-sm">
            <div className="relative">
              <input
                placeholder="Buscar sección"
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              />
            </div>

            <NavItem
              active={tab === "profile"}
              title="Perfil y cuenta"
              subtitle="Datos básicos de contacto."
              icon={<User size={18} />}
              onClick={() => setTab("profile")}
            />
            <NavItem
              active={tab === "security"}
              title="Seguridad"
              subtitle="Contraseña y acceso."
              icon={<Shield size={18} />}
              onClick={() => setTab("security")}
            />
            <NavItem
              active={tab === "plans"}
              title="Planes"
              subtitle="Plan suscrito y límites."
              icon={<BadgeCheck size={18} />}
              onClick={() => setTab("plans")}
            />
            <NavItem
              active={tab === "areas"}
              title="Barrios y disponibilidad"
              subtitle="Zonas y horario habitual."
              icon={<MapPin size={18} />}
              onClick={() => setTab("areas")}
            />
            <NavItem
              active={tab === "payments"}
              title="Métodos de pago"
              subtitle="Tarjetas y datos bancarios."
              icon={<CreditCard size={18} />}
              onClick={() => setTab("payments")}
            />
          </div>
        </aside>

        <main className="xl:col-span-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            {tab === "profile" && (
              <Section title="Perfil y cuenta" subtitle="Datos básicos de contacto.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input label="Nombre completo" value={fullName} onChange={setFullName} />
                  <Input label="Email" value={authEmail ?? ""} onChange={() => {}} disabled />
                  <Input label="Teléfono" value={phone} onChange={setPhone} />
                  <Input label="Ciudad" value={city} onChange={setCity} />
                  <Input label="Dirección" value={address} onChange={setAddress} />
                  <Input label="CP" value={postalCode} onChange={setPostalCode} placeholder="28001" />
                  <Input label="Provincia" value={province} onChange={setProvince} />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-xs text-slate-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                    Estos datos se usarán para facturación (planes, comisión y seguro) cuando conectemos Stripe.
                  </p>
                  <button
                    onClick={saveProfile}
                    disabled={!canEditProfile || savingProfile}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white",
                      (!canEditProfile || savingProfile) && "opacity-60"
                    )}
                    style={{ background: YA_VOY_BLUE }}
                  >
                    <Save size={16} />
                    Guardar
                  </button>
                </div>
              </Section>
            )}

            {tab === "security" && (
              <Section title="Seguridad" subtitle="Contraseña y acceso.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input
                    label="Nueva contraseña"
                    value={newPassword}
                    onChange={setNewPassword}
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                  />
                  <Input
                    label="Repetir contraseña"
                    value={newPassword2}
                    onChange={setNewPassword2}
                    type="password"
                    placeholder="Repite la contraseña"
                  />
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={changePassword}
                    disabled={savingPassword}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white",
                      savingPassword && "opacity-60"
                    )}
                    style={{ background: YA_VOY_BLUE }}
                  >
                    <Lock size={16} />
                    Cambiar contraseña
                  </button>
                </div>
              </Section>
            )}

            {tab === "plans" && (
              <Section title="Planes" subtitle="Planes disponibles para Particulares.">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card title="Plan actual">
                    {loadingPlans ? (
                      <p className="text-sm text-slate-600">Cargando plan...</p>
                    ) : userPlan?.plan ? (
                      <div className="space-y-2">
                        <p className="text-sm font-bold text-slate-900">{userPlan.plan.name}</p>
                        <p className="text-sm text-slate-600">
                          {userPlan.plan.price} {userPlan.plan.currency} / {userPlan.plan.billing_period}
                        </p>
                        <p className="text-xs text-slate-500">
                          Estado: <b>{userPlan.status}</b>
                        </p>
                        {(userPlan.current_period_start || userPlan.current_period_end) && (
                          <p className="text-[11px] text-slate-500">
                            Periodo: {userPlan.current_period_start ?? "—"} → {userPlan.current_period_end ?? "—"}
                          </p>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-600">
                        No hay plan activo (aún). Puedes pagar por anuncio suelto o contratar un plan.
                      </p>
                    )}
                  </Card>

                  <Card title="Planes disponibles (Particular)">
                    {loadingPlans ? (
                      <p className="text-sm text-slate-600">Cargando planes...</p>
                    ) : plans.length === 0 ? (
                      <p className="text-sm text-slate-600">No hay planes activos.</p>
                    ) : (
                      <div className="space-y-2">
                        {plans.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl p-3"
                          >
                            <div>
                              <p className="text-sm font-bold text-slate-900">{p.name}</p>
                              <p className="text-xs text-slate-600">
                                {p.price} {p.currency} / {p.billing_period}
                              </p>
                              <p className="text-[11px] text-slate-500">{p.plan_code}</p>
                            </div>
                            <button
                              onClick={() => selectPlan(p)}
                              className="px-3 py-2 rounded-xl text-xs font-bold text-white"
                              style={{ background: YA_VOY_BLUE }}
                            >
                              Seleccionar
                            </button>
                          </div>
                        ))}

                        <div className="text-[12px] text-slate-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                          <b>Opción anuncio suelto</b>: 3€ por anuncio (se cobra cuando publicas).
                          <br />
                          <b>Plan mensual</b>: se cobra al seleccionar (Stripe Checkout).
                        </div>
                      </div>
                    )}
                  </Card>
                </div>

                <div className="mt-4 border border-gray-200 rounded-2xl p-4 bg-white">
                  <p className="text-sm font-bold text-slate-900">Costes por trabajo (comisión + seguro)</p>
                  <p className="text-xs text-slate-600">
                    Comisión plataforma: <b>3€</b> + seguro por día de trabajo (o por servicio).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {riskCards.map((c) => (
                      <div
                        key={c.title}
                        className="border border-gray-200 rounded-2xl p-3 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {c.color} {c.title}
                          </p>
                          <p className="text-xs text-slate-600">{c.example}</p>
                        </div>
                        <p className="text-sm font-extrabold text-slate-900">{c.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>
            )}

            {tab === "areas" && (
              <Section title="Barrios y disponibilidad" subtitle="Zonas y horario habitual para match.">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card title="Zona principal + horario">
                    <Select
                      label="Distrito principal"
                      value={primaryDistrict}
                      onChange={(v) => {
                        setPrimaryDistrict(v);
                        setPrimaryNeighborhood("");
                      }}
                      options={districts.map((d) => d.name)}
                      placeholder={loadingAreasCatalogs ? "Cargando..." : "Selecciona distrito"}
                    />

                    <div className="mt-3">
                      <Select
                        label="Barrio principal"
                        value={primaryNeighborhood}
                        onChange={setPrimaryNeighborhood}
                        options={neighborhoodOptionsForPrimaryDistrict}
                        placeholder={!primaryDistrict ? "Selecciona distrito primero" : "Selecciona barrio"}
                        disabled={!primaryDistrict}
                      />
                    </div>

                    <div className="mt-4 border-t border-gray-100 pt-4 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 mb-2">Días disponibles</p>
                        <div className="flex flex-wrap gap-2">
                          {WEEK_DAYS.map((d) => {
                            const checked = !!availableDays[d.key];
                            return (
                              <label
                                key={d.key}
                                title={d.full}
                                className={cn(
                                  "flex items-center gap-2 px-3 py-2 rounded-xl border text-sm cursor-pointer select-none",
                                  checked ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleDay(d.key)}
                                  className="h-4 w-4"
                                />
                                <span className="font-bold">{d.label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Select
                          label="Hora desde"
                          value={timeFrom}
                          onChange={setTimeFrom}
                          options={TIME_OPTIONS}
                          placeholder="Selecciona hora"
                        />
                        <Select
                          label="Hora hasta"
                          value={timeTo}
                          onChange={setTimeTo}
                          options={TIME_OPTIONS}
                          placeholder="Selecciona hora"
                        />
                      </div>

                      <div className="text-[12px] text-slate-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                        Esto se usará para <b>match</b> de trabajadores por zona + disponibilidad.
                      </div>
                    </div>
                  </Card>

                  <Card title="Zonas adyacentes">
                    <MultiSelect
                      label="Distritos adyacentes"
                      options={districts.map((d) => d.name)}
                      value={adjacentDistricts}
                      onChange={setAdjacentDistricts}
                      placeholder="Selecciona 1 o varios"
                    />

                    <div className="mt-3">
                      <MultiSelect
                        label="Barrios adyacentes"
                        options={neighborhoods.map((n) => n.name)}
                        value={adjacentNeighborhoods}
                        onChange={setAdjacentNeighborhoods}
                        placeholder="Selecciona 1 o varios"
                      />
                    </div>
                  </Card>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 flex items-center gap-2">
                    <AlertTriangle size={14} />
                    Guardaremos la zona/hora en VoyUsers para mejorar búsqueda y notificaciones.
                  </div>

                  <button
                    onClick={saveAreasAndSchedule}
                    disabled={savingAreas}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white",
                      savingAreas && "opacity-60"
                    )}
                    style={{ background: YA_VOY_BLUE }}
                  >
                    <Save size={16} />
                    Guardar
                  </button>
                </div>
              </Section>
            )}

            {tab === "payments" && (
              <Section title="Métodos de pago" subtitle="Tarjetas, IBAN (SEPA) e histórico.">
                <div className="space-y-3">
                  <div className="text-sm text-slate-700 space-y-2">
                    <p className="font-semibold">Fase 1 (TEST): Portal de Stripe</p>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                      <li>Gestionar tarjetas (Payment Methods) desde Stripe Customer Portal</li>
                      <li>Más adelante: SEPA/IBAN + histórico real de cobros</li>
                    </ul>

                    <div className="text-xs text-slate-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                      Requisitos: estar logado + existir fila en <b>VoyUsers</b> con <b>auth_user_id</b>.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={openCustomerPortal}
                      className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                      style={{ background: YA_VOY_BLUE }}
                    >
                      Gestionar métodos de pago (Stripe Test)
                    </button>

                    <button
                      onClick={() => showToast("ok", "Histórico (fase 2): lo conectamos con VoyInvoices")}
                      className="px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 bg-white text-slate-800"
                    >
                      Ver histórico (próximamente)
                    </button>
                  </div>
                </div>
              </Section>
            )}
          </div>
        </main>
      </div>

      {toast && (
        <div
          className={cn(
            "fixed bottom-6 right-6 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
            toast.type === "ok" ? "bg-emerald-600 text-white" : "bg-slate-900 text-white"
          )}
        >
          {toast.type === "ok" ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}

/* ---------------- UI helpers ---------------- */

const NavItem: React.FC<{
  active: boolean;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick: () => void;
}> = ({ active, title, subtitle, icon, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 text-left border rounded-2xl p-3 transition",
      active ? "border-black/80 bg-blue-50/40" : "border-gray-200 hover:bg-gray-50"
    )}
  >
    <div className="h-9 w-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  </button>
);

const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="space-y-3">
    <div>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border border-gray-200 rounded-2xl p-4 bg-white">
    <p className="text-sm font-bold text-slate-900 mb-2">{title}</p>
    {children}
  </div>
);

const Input: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
}> = ({ label, value, onChange, disabled, type = "text", placeholder }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "border rounded-xl px-3 py-2 text-sm",
        disabled ? "bg-gray-50 border-gray-200 text-slate-500" : "bg-white border-gray-200"
      )}
    />
  </label>
);

const Select: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
}> = ({ label, value, onChange, options, placeholder, disabled }) => (
  <label className="text-sm text-slate-700 flex flex-col gap-1">
    <span className="text-xs font-semibold text-slate-600">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={cn(
        "border rounded-xl px-3 py-2 text-sm",
        disabled ? "bg-gray-50 border-gray-200 text-slate-500" : "bg-white border-gray-200"
      )}
    >
      <option value="">{placeholder ?? "Selecciona"}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </label>
);

const MultiSelect: React.FC<{
  label: string;
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}> = ({ label, options, value, onChange, placeholder }) => {
  const toggle = (opt: string) => {
    if (value.includes(opt)) onChange(value.filter((x) => x !== opt));
    else onChange([...value, opt]);
  };

  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold text-slate-600">{label}</p>
      <div className="border border-gray-200 rounded-2xl p-3">
        <div className="flex flex-wrap gap-2">
          {value.length === 0 && (
            <span className="text-xs text-slate-500">{placeholder ?? "Selecciona opciones"}</span>
          )}
          {value.map((v) => (
            <span
              key={v}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-slate-800 border border-blue-100"
            >
              {v}
            </span>
          ))}
        </div>

        <div className="mt-3 max-h-40 overflow-auto border-t border-gray-100 pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {options.map((opt) => {
              const checked = value.includes(opt);
              return (
                <label key={opt} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(opt)}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
