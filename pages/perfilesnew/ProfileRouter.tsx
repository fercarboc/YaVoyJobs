import React, { useEffect, useMemo, useState } from "react";
import type { AuthState } from "@/types";

import { Layout, type LayoutMenuItem } from "./components/Layout";

// ✅ Usa la página completa del perfil (formulario + verificación + password)
import ProfileFullPage from "./components/ProfileFullPage";

import { WorkerDashboard } from "./components/worker/WorkerDashboard";
import { WorkerSearchView } from "./components/worker/WorkerSearchView";
import { WorkerApplicationsView } from "./components/worker/WorkerApplicationsView";

import { ChatComponent } from "./components/ChatComponent";
import { PaymentsView } from "./components/PaymentsView";
import { RealEstateBusinessView } from "./components/RealEstateBusinessView";
import { RealEstateBusinessPublisherView } from "./components/RealEstateBusinessPublisherView";


import ClientHome from "./roles/client/ClientHome";
import CompanyHome from "./roles/company/CompanyHome";
import AgencyHome from "./roles/agency/AgencyHome";
import ProviderHome from "./roles/provider/ProviderHome";
import AdminHome from "./roles/admin/AdminHome";

import { resolveCanonicalRole, type CanonicalRole } from "./roleResolver";

import { listWorkerInmoAds } from "@/services/inmoNegocios.service";

import { UserRole, type User, type Candidate } from "./types";

type ProfileRouterProps = { auth: AuthState };

type ChatContext =
  | {
      jobTitle: string;
      otherName: string;
    }
  | null;

/** ✅ OJO: DEFAULT de CanonicalRole (NO UserRole) */
const DEFAULT_CANONICAL_ROLE: CanonicalRole = "PARTICULAR";

/** ✅ Labels por CanonicalRole (NO UserRole) */
const ROLE_LABELS: Record<CanonicalRole, string> = {
  PARTICULAR: "Cliente YaVoy",
  COMPANY: "Empresa YaVoy",
  HELPER: "Trabajador YaVoy",
  AGENCY: "Agencia YaVoy",
  PROVIDER: "Proveedor YaVoy",
  ADMIN: "Administrador YaVoy",
};

/** ✅ Menús por CanonicalRole (NO UserRole) */
const ROLE_MENUS: Record<CanonicalRole, LayoutMenuItem[]> = {
  PARTICULAR: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "ads", label: "Mis anuncios", view: "ads" },
    { id: "candidates", label: "Candidatos", view: "candidates" },
    { id: "publish", label: "Publicar", view: "publish" },
    { id: "messages", label: "Mensajes", view: "messages" },
    { id: "payments", label: "Pagos", view: "payments" },
    { id: "profile", label: "Perfil", view: "profile" },
  ],
  COMPANY: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "ads", label: "Mis anuncios", view: "ads" },
    { id: "candidates", label: "Candidatos", view: "candidates" },
    { id: "publish", label: "Publicar", view: "publish" },
    { id: "messages", label: "Mensajes", view: "messages" },
    { id: "payments", label: "Pagos", view: "payments" },
    { id: "profile", label: "Perfil", view: "profile" },
  ],
  HELPER: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "search", label: "Buscar", view: "search" },
    { id: "applications", label: "Mis Postulaciones", view: "applications" },
    { id: "realestate", label: "Inmo y Negocios", view: "realestate" },
    { id: "messages", label: "Mensajes", view: "messages" },
    { id: "payments", label: "Pagos", view: "payments" },
    { id: "profile", label: "Perfil", view: "profile" },
  ],
  AGENCY: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "realestate", label: "Anuncios Inmobiliarios", view: "realestate" },
    { id: "schedule", label: "Visitas / Agenda", view: "schedule" },
    { id: "candidates", label: "Candidatos", view: "candidates" },
    { id: "messages", label: "Mensajes", view: "messages" },
    { id: "payments", label: "Pagos", view: "payments" },
    { id: "profile", label: "Perfil", view: "profile" },
  ],
  PROVIDER: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "catalog", label: "Catálogo", view: "catalog" },
    { id: "orders", label: "Pedidos", view: "orders" },
    { id: "clients", label: "Clientes", view: "clients" },
    { id: "incidents", label: "Incidencias", view: "incidents" },
    { id: "marketing", label: "Publicidad", view: "marketing" },
    { id: "messages", label: "Mensajes", view: "messages" },
    { id: "payments", label: "Pagos", view: "payments" },
    { id: "invoices", label: "Facturas", view: "invoices" },
    { id: "plans", label: "Planes", view: "plans" },
    { id: "profile", label: "Perfil", view: "profile" },
  ],
  ADMIN: [
    { id: "home", label: "Inicio", view: "home" },
    { id: "audit", label: "Auditoría", view: "audit" },
    { id: "support", label: "Soporte", view: "support" },
  ],
};

const VIEW_DESCRIPTIONS: Record<string, { title: string; description: string }> = {
  ads: { title: "Mis anuncios", description: "Aquí controlarás el estado de cada publicación." },
  candidates: { title: "Candidatos", description: "Aquí verás candidaturas y podrás gestionarlas." },
  publish: { title: "Publicar", description: "Formulario de nuevos anuncios listo para conectar con backend." },
  search: { title: "Buscar", description: "Explora trabajos y ofertas cercanas para postularte." },
  applications: { title: "Mis Postulaciones", description: "Listado de postulaciones con sus estados." },
  realestate: { title: "Inmo y Negocios", description: "Sección dedicada a inmuebles y negocios." },
  schedule: { title: "Visitas / Agenda", description: "Agenda citas y visitas con clientes." },
  messages: { title: "Mensajes", description: "Todos los chats aparecerán en esta sección." },
  payments: { title: "Pagos", description: "Movimientos, comprobantes y facturas." },
  catalog: { title: "Catálogo", description: "Gestiona tu catálogo de productos y servicios." },
  orders: { title: "Pedidos", description: "Resumen de pedidos y entregas." },
  clients: { title: "Clientes", description: "Lista de cuentas comerciales." },
  incidents: { title: "Incidencias", description: "Reportes y devoluciones." },
  marketing: { title: "Publicidad", description: "Campañas activas." },
  invoices: { title: "Facturas", description: "Facturación completa." },
  plans: { title: "Planes", description: "Gestión de planes y suscripciones." },
  audit: { title: "Auditoría", description: "Información administrativa." },
  support: { title: "Soporte", description: "Tickets abiertos y respuestas." },
  profile: { title: "Perfil", description: "Tu información personal." },
};

const ViewPlaceholder: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <section className="space-y-3 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Próximamente</p>
    <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
    <p className="text-sm text-slate-500">{description}</p>
  </section>
);

/** ✅ CanonicalRole -> UserRole (tu enum real) */
const canonicalToUserRole = (role: CanonicalRole | null): UserRole => {
  switch (role) {
    case "ADMIN":
      return UserRole.ADMIN;
    case "HELPER":
      return UserRole.WORKER;
    case "PARTICULAR":
      return UserRole.CLIENT;
    case "COMPANY":
      return UserRole.COMPANY;
    case "AGENCY":
      return UserRole.AGENCY;
    case "PROVIDER":
      return UserRole.PROVIDER;
    default:
      return UserRole.CLIENT;
  }
};

const ProfileRouter: React.FC<ProfileRouterProps> = ({ auth }) => {
  const [resolvedRole, setResolvedRole] = useState<CanonicalRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState("home");
  const [chatContext, setChatContext] = useState<ChatContext>(null);

  const [inmoAds, setInmoAds] = useState<any[]>([]);
  const [loadingInmoAds, setLoadingInmoAds] = useState(false);

  useEffect(() => {
    let canceled = false;
    setLoading(true);

    resolveCanonicalRole(auth)
      .then((r) => {
        if (canceled) return;
        setResolvedRole(r ?? DEFAULT_CANONICAL_ROLE);
        setActiveView("home");
      })
      .catch(() => {
        if (canceled) return;
        setResolvedRole(DEFAULT_CANONICAL_ROLE);
        setActiveView("home");
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [auth]);

  const canonicalRole = resolvedRole ?? DEFAULT_CANONICAL_ROLE;
  const menuItems = ROLE_MENUS[canonicalRole];
  const roleLabel = ROLE_LABELS[canonicalRole];
  const userRole = canonicalToUserRole(canonicalRole);

  // auth.user puede variar (y no siempre trae todos los campos)
  const userShape = (auth as any)?.user ?? null;

  const workerUser = useMemo<User>(() => {
    const name = userShape?.full_name ?? userShape?.email ?? "Usuario YaVoy";
    return {
      id: userShape?.id ?? "guest",
      name,
      avatar: userShape?.avatar_url ?? userShape?.selfie_photo_url ?? "",
      role: userRole,
      city: userShape?.city ?? "Madrid",
      rating: 4.9,
      isVerified: (userShape?.verification_status ?? "").toString().toUpperCase() === "VERIFIED",
      email: userShape?.email ?? undefined,
    };
  }, [userShape, userRole]);

  // ✅ Cargar anuncios reales SOLO cuando el worker entra en "realestate"
  useEffect(() => {
    let canceled = false;

    if (canonicalRole !== "HELPER") return;
    if (activeView !== "realestate") return;

    setLoadingInmoAds(true);

    (async () => {
      try {
        const data = await listWorkerInmoAds(30);
        if (!canceled) setInmoAds(data);
      } catch {
        if (!canceled) setInmoAds([]);
      } finally {
        if (!canceled) setLoadingInmoAds(false);
      }
    })();

    return () => {
      canceled = true;
    };
  }, [canonicalRole, activeView]);

  const handleOpenChat = (application: Candidate) => {
    setChatContext({ jobTitle: application.jobTitle, otherName: application.employerName });
    setActiveView("messages");
  };

  const renderWorkerContent = () => {
    switch (activeView) {
      case "home":
        return (
          <WorkerDashboard
            user={workerUser}
            onViewProfile={() => setActiveView("profile")}
            onSearchJobs={() => setActiveView("search")}
          />
        );

      case "search":
        return <WorkerSearchView />;

      case "applications":
        return <WorkerApplicationsView user={workerUser} onOpenChat={handleOpenChat} />;
        

      case "realestate":
        return (
          <RealEstateBusinessPublisherView
            hasInmoPlan={true}       // aquí irá tu lógica real
            hasNegocioPlan={false}   // aquí irá tu lógica real
            role={UserRole.WORKER}
            onGoToPlans={() => setActiveView("plans")}
          />
        );


      case "messages":
        return chatContext ? (
          <ChatComponent jobTitle={chatContext.jobTitle} otherName={chatContext.otherName} />
        ) : (
          <ViewPlaceholder
            title="Mensajes"
            description="Selecciona una postulación aceptada o inicia un chat desde Mis Postulaciones."
          />
        );

      case "payments":
        return <PaymentsView role={UserRole.WORKER} />;

      case "profile":
        // ✅ AQUÍ: el perfil completo (overview + formularios)
        return <ProfileFullPage />;

      default:
        return (
          <WorkerDashboard
            user={workerUser}
            onViewProfile={() => setActiveView("profile")}
            onSearchJobs={() => setActiveView("search")}
          />
        );
    }
  };

  const activeContent = useMemo(() => {
    // ✅ HELPER/WORKER
    if (canonicalRole === "HELPER") return renderWorkerContent();

    // ✅ HOME por rol
    if (activeView === "home") {
      switch (canonicalRole) {
        case "PARTICULAR":
          return <ClientHome />;
        case "COMPANY":
          return <CompanyHome />;
        case "AGENCY":
          return <AgencyHome />;
        case "PROVIDER":
          return <ProviderHome />;
        case "ADMIN":
          return <AdminHome />;
        default:
          return <ClientHome />;
      }
    }

    // ✅ PERFIL para cualquier rol (muestra y guarda datos reales)
    if (activeView === "profile") {
      return <ProfileFullPage />;
    }

    // ✅ Placeholder para el resto
    const descriptor = VIEW_DESCRIPTIONS[activeView] ?? {
      title: "Vista en construcción",
      description: "Estamos preparando esta sección para ti.",
    };

    return <ViewPlaceholder title={descriptor.title} description={descriptor.description} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeView, canonicalRole, chatContext, workerUser]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-lg font-semibold text-slate-900">Cargando tu rol...</p>
      </div>
    );
  }

  return (
    <Layout roleLabel={roleLabel} menuItems={menuItems} activeView={activeView} onMenuSelect={setActiveView}>
      {activeContent}
    </Layout>
  );
};

export default ProfileRouter;
