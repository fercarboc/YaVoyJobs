// components/routing/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import type { AuthState } from "@/types";
import { UserRole } from "@/types";
import ProtectedRoute from "./ProtectedRoute";

// Públicos
import Landing from "@/pages/Landing";
import SectorsPage from "@/pages/SectorsPage";
import DownloadPage from "@/pages/DownloadPage";
import ParticularesInfoPage from "@/pages/informacion/particulares";
import InmobiliariasInfo from "@/pages/informacion/inmobiliarias";
import InfoMarketplace from "@/pages/informacion/infomarketplace";
import Seguro from "@/pages/informacion/seguro";
import InfoEmpresas from "@/pages/informacion/empresas";
import EmpleoInfo from "@/pages/informacion/Empleo";
import Colaborador from "@/pages/Colaborador/colaborador";
// Ejemplo de uso futuro:
// import RequireBaseRole from "./RequireBaseRole";
// import RequireModule from "./RequireModule";


// Auth
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// Legal
import AvisoLegalPage from "@/pages/legal/AvisoLegalPage";
import PrivacidadPage from "@/pages/legal/PrivacidadPage";
import CookiesPage from "@/pages/legal/CookiesPage";
import TerminosPage from "@/pages/legal/TerminosPage";

// Client
import ClientHomePage from "@/pages/client/ClientHomePage";
import ClientAdsPage from "@/pages/client/ClientAdsPage";
import ClientInvoicesPage from "@/pages/client/ClientInvoicesPage";
import ClientProfilePage from "@/pages/client/ClientProfilePage";
import ClientJobs from "@/pages/client/ClientJobs";
import ClientJobNew from "@/pages/client/ClientJobNew";
import ClientJobDetail from "@/pages/client/ClientJobDetail";
import ClientDashboardShell from "@/components/client/ClientDashboardShell";
import CrearEmpleoPuntualPage from "@/pages/CrearEmpleoPuntualPage";

// Admin / Worker
import AdminLayout from "@/admin/layout/AdminLayout";
//import { AdminLayout } from "@/admin/layout/AdminLayout";

import AdminHomePage from "@/admin/pages/AdminHomePage";
import AdminUsersPage from "@/admin/pages/AdminUsersPage";
import AdminProvidersPage from "@/admin/pages/AdminProvidersPage";
import AdminPlansPage from "@/admin/pages/AdminPlansPage";
import AdminSubscriptionsPage from "@/admin/pages/AdminSubscriptionsPage";
import AdminInvoicesPage from "@/admin/pages/AdminInvoicesPage";
import AdminPaymentsPage from "@/admin/pages/AdminPaymentsPage";
import AdminMetricsPage from "@/admin/pages/AdminMetricsPage";
import AdminFinancePage from "@/admin/pages/AdminFinancePage";
import AdminLogsPage from "@/admin/pages/AdminLogsPage";
import MarketplaceSection from "@/admin/sections/MarketplaceSection";
import WorkerDashboard from "@/pages/worker/WorkerDashboard";
import WorkerProfilePage from "@/pages/worker/WorkerProfilePage";
import DashboardPerfiles from "@/dashboardperfiles/DashboardPerfiles";
import WorkerJobs from "@/pages/worker/WorkerJobs";
import WorkerJobDetail from "@/pages/worker/WorkerJobDetail";
import WorkerDashboardShell from "@/pages/worker/WorkerDashboardShell";
import PerfilesPage from "@/pages/perfilesnew";










// Marketplace
import MarketplaceRoutes from "../../pages/marketplace";

// Agency
import AgencyGuard from "@/agency/components/AgencyGuard";
import AgencyLayout from "@/agency/components/AgencyLayout";
import AgencyDashboardHome from "@/agency/pages/AgencyDashboardHome";
import AgencyProfilePage from "@/agency/pages/AgencyProfilePage";
import AgencyAdsListPage from "@/agency/pages/AgencyAdsListPage";
import AgencyAdFormPage from "@/agency/pages/AgencyAdFormPage";
import AgencyLeadsPage from "@/agency/pages/AgencyLeadsPage";
import AgencyMetricsPage from "@/agency/pages/AgencyMetricsPage";
import AgencyInvoicesPage from "@/agency/pages/AgencyInvoicesPage";
import AgencyPlansPage from "@/agency/pages/AgencyPlansPage";

// Chat
import ChatListPage from "@/pages/chat/ChatListPage";
import ChatRoomPage from "@/pages/chat/ChatRoomPage";
import ChatPlaceholderPage from "@/pages/chat/ChatPlaceholderPage";

// Alquileres

import AlquilerRoutes from "@/alquiler/routes/alquiler.routes";


type Props = {
  auth: AuthState;
  setToast?: React.Dispatch<React.SetStateAction<any>>; // 👈 opcional para no romper App.tsx
};

const AppRoutes: React.FC<Props> = ({ auth }) => {
  return (
    <Routes>
      {/* Públicos */}
      <Route path="/" element={<Landing />} />
      <Route path="/sectores" element={<SectorsPage />} />
      <Route path="/informacion/particulares" element={<ParticularesInfoPage />} />
      <Route path="/informacion/inmobiliarias" element={<InmobiliariasInfo />} />
      <Route path="/informacion/infomarketplace" element={<InfoMarketplace />} />
      <Route path="/informacion/infoempresas" element={<InfoEmpresas />} />
      <Route path="/informacion/Empleo" element={<EmpleoInfo />} />
      <Route path="/informacion/seguro" element={<Seguro />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/alquiler/*" element={<AlquilerRoutes />} />
      {/* Ejemplo de uso:
        <Route
          path="/empleo/ofertas"
          element={
            <RequireBaseRole auth={auth} allowed={['CLIENT']}>
              <OfertasPage />
            </RequireBaseRole>
          }
        />
        <Route
          path="/empleo/publicar"
          element={
            <RequireModule auth={auth} module="services">
              <PublicarOfertaPage />
            </RequireModule>
          }
        />
      */}

      {/* Marketplace (público) */}
      <Route path="/marketplace/*" element={<MarketplaceRoutes auth={auth} />} />

      {/* Auth */}
      <Route path="/login" element={<Login auth={auth} />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/perfil"
        element={
          <ProtectedRoute
            auth={auth}
            roles={[
              UserRole.ADMIN,
              UserRole.HELPER,
              UserRole.PARTICULAR,
              UserRole.COMPANY,
              UserRole.AGENCY,
              UserRole.PROVIDER,
            ]}
          >
            <PerfilesPage auth={auth} />
          </ProtectedRoute>
        }
      />

      {/* Legal */}
      <Route path="/aviso-legal" element={<AvisoLegalPage />} />
      <Route path="/privacidad" element={<PrivacidadPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/terminos" element={<TerminosPage />} />

      <Route
        path="/jobs/oneoff/new"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY, UserRole.AGENCY]}>
            <CrearEmpleoPuntualPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs/oneoff/:jobId/edit"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY, UserRole.AGENCY]}>
            <CrearEmpleoPuntualPage />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.ADMIN]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminHomePage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="providers" element={<AdminProvidersPage />} />
        <Route path="plans" element={<AdminPlansPage />} />
        <Route path="subscriptions" element={<AdminSubscriptionsPage />} />
        <Route path="invoices" element={<AdminInvoicesPage />} />
        <Route path="payments" element={<AdminPaymentsPage />} />
        <Route path="metrics" element={<AdminMetricsPage />} />
        <Route path="finance" element={<AdminFinancePage />} />
        <Route path="logs" element={<AdminLogsPage />} />
        <Route path="marketplace" element={<MarketplaceSection />} />
      </Route>

      {/* Agency */}
      <Route
        path="/agency"
        element={
          <AgencyGuard>
            <AgencyLayout />
          </AgencyGuard>
        }
      >
        <Route index element={<AgencyDashboardHome />} />
        <Route path="profile" element={<AgencyProfilePage />} />
        <Route path="ads" element={<AgencyAdsListPage />} />
        <Route path="ads/new" element={<AgencyAdFormPage />} />
        <Route path="ads/:id/edit" element={<AgencyAdFormPage />} />
        <Route path="leads" element={<AgencyLeadsPage />} />
        <Route path="metrics" element={<AgencyMetricsPage />} />
        <Route path="invoices" element={<AgencyInvoicesPage />} />
        <Route path="plans" element={<AgencyPlansPage />} />
      </Route>

      {/* Client (IMPORTANTE: Outlet) */}
      <Route
        path="/client"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY]}>
            <ClientDashboardShell auth={auth}>
              <Outlet />
            </ClientDashboardShell>
          </ProtectedRoute>
        }
      >
        <Route index element={<ClientHomePage />} />
        <Route path="anuncios" element={<ClientAdsPage />} />
        <Route path="facturas" element={<ClientInvoicesPage />} />
        <Route path="perfil" element={<ClientProfilePage />} />
        <Route path="jobs" element={<ClientJobs />} />
        <Route path="jobs/new" element={<ClientJobNew />} />
        <Route path="jobs/:id" element={<ClientJobDetail />} />
      </Route>

      {/* Dashboard unificado (worker/particular/company) */}
      <Route
        path="/panel"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.HELPER, UserRole.PARTICULAR, UserRole.COMPANY]}>
            <DashboardPerfiles auth={auth} />
          </ProtectedRoute>
        }
      />

      {/* Worker */}
      <Route
        path="/worker"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.HELPER]}>
            <WorkerDashboardShell auth={auth} />
          </ProtectedRoute>
        }
      >
        <Route index element={<WorkerDashboard auth={auth} />} />
        <Route path="perfil" element={<WorkerProfilePage auth={auth} />} />
        <Route path="trabajos" element={<WorkerDashboard auth={auth} />} />
        <Route path="jobs" element={<WorkerJobs />} />
        <Route path="solicitudes" element={<WorkerJobs initialTab="applications" />} />
        <Route path="jobs/:id" element={<WorkerJobDetail />} />
        <Route path="pagos" element={<div className="p-4 text-sm">Pagos (pendiente)</div>} />
        <Route path="seguridad" element={<div className="p-4 text-sm">Seguridad (pendiente)</div>} />
      </Route>

      <Route
        path="/worker/chat"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.HELPER]}>
            <ChatPlaceholderPage
              title="Chat trabajador"
              subtitle="El chat estará disponible cuando una solicitud sea aceptada."
              basePath="/worker/jobs"
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client/chat"
        element={
          <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY]}>
            <ChatPlaceholderPage
              title="Chat cliente"
              subtitle="Consulta las conversaciones de candidaturas aceptadas."
              basePath="/client/jobs"
            />
          </ProtectedRoute>
        }
      />

      {/* Chat */}
      <Route element={<ProtectedRoute auth={auth} roles={[UserRole.HELPER, UserRole.PARTICULAR, UserRole.COMPANY]} />}>
        <Route path="/chat" element={<ChatListPage auth={auth} />} />
        <Route path="/chat/:jobId" element={<ChatRoomPage auth={auth} />} />
      </Route>

      {/* Alquileres */}
      <Route path="/alquiler/*" element={<AlquilerRoutes />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
