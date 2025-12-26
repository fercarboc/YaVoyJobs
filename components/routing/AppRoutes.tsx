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
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import WorkerDashboard from "@/pages/worker/WorkerDashboard";
import WorkerLayout from "@/pages/worker/WorkerLayout";
import WorkerProfilePage from "@/pages/worker/WorkerProfilePage";
import DashboardPerfiles from "@/dashboardperfiles/DashboardPerfiles";

// Marketplace
import Marketplace from "@/pages/marketplace";

// Chat
import ChatListPage from "@/pages/chat/ChatListPage";
import ChatRoomPage from "@/pages/chat/ChatRoomPage";

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
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
