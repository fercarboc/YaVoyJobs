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

// Admin / Worker
import AdminLayout from "@/admin/layout/AdminLayout";
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
import WorkerDashboard from "@/pages/worker/WorkerDashboard";
import WorkerLayout from "@/pages/worker/WorkerLayout";
import WorkerProfilePage from "@/pages/worker/WorkerProfilePage";
import DashboardPerfiles from "@/dashboardperfiles/DashboardPerfiles";

// Marketplace
import Marketplace from "@/pages/marketplace";

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
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/alquiler/*" element={<AlquilerRoutes />} />

      {/* Marketplace (público) */}
      <Route path="/marketplace" element={<Marketplace />} />

      {/* Auth */}
      <Route path="/login" element={<Login auth={auth} />} />

      <Route path="/register" element={<Register />} />

      {/* Legal */}
      <Route path="/aviso-legal" element={<AvisoLegalPage />} />
      <Route path="/privacidad" element={<PrivacidadPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/terminos" element={<TerminosPage />} />

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
      <Route element={<ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY]} />}>
        <Route path="/client" element={<Outlet />}>
          <Route index element={<ClientHomePage auth={auth} />} />
          <Route path="anuncios" element={<ClientAdsPage auth={auth} />} />
          <Route path="facturas" element={<ClientInvoicesPage auth={auth} />} />
          <Route path="perfil" element={<ClientProfilePage auth={auth} />} />
        </Route>
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
      <Route element={<ProtectedRoute auth={auth} roles={[UserRole.HELPER]} />}>
        <Route path="/worker" element={<WorkerLayout auth={auth} />}>
          <Route index element={<WorkerDashboard auth={auth} />} />
          <Route path="perfil" element={<WorkerProfilePage auth={auth} />} />
          <Route path="pagos" element={<div className="p-4 text-sm">Pagos (pendiente)</div>} />
          <Route path="seguridad" element={<div className="p-4 text-sm">Seguridad (pendiente)</div>} />
        </Route>
      </Route>

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
