import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardUserRole, AppSection } from "./dashboardTypes";
import { Header } from "./components/Header";
import { DashboardHome } from "./components/DashboardHome";
import { JobsManager } from "./components/JobsManager";
import { MarketplaceManager } from "./components/MarketplaceManager";
import { OrdersManager } from "./components/OrdersManager";
import { ExplorarTrabajos } from "./components/ExplorarTrabajos";
import { ChatManager } from "./components/ChatManager";
import { IncentivesPanel } from "./components/IncentivesPanel";
import SettingsPanel from "./components/SettingsPanel";
import IncidentsPanel from "./components/IncidentsPanel";
import PaymentsPanel from "./components/PaymentsPanel";
import FacturacionPanel from "./components/FacturacionPanel";
import ReportsPanel from "./components/ReportsPanel";
import { CreditCard, FileText, Gift, AlertCircle, BarChart3, MessageSquare, Settings } from "lucide-react";
import { supabase } from "../services/supabase";

type DashboardShellProps = {
  role?: DashboardUserRole;
  userName?: string;
  avatarUrl?: string;
  userId?: string;
  userEmail?: string;
};

const DashboardShell: React.FC<DashboardShellProps> = ({
  role,
  userName,
  avatarUrl,
  userId,
  userEmail,
}) => {
  const navigate = useNavigate();
  const [devRole, setDevRole] = useState<DashboardUserRole>(DashboardUserRole.PARTICULAR);
  const currentRole = role ?? devRole;

  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.INICIO);

  const handleCloseProfile = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error("Error al cerrar sesión", e);
    } finally {
      window.location.hash = "#/";
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.INICIO:
        return <DashboardHome role={currentRole} />;
      case AppSection.EXPLORAR_TRABAJOS:
        return <ExplorarTrabajos />;
      case AppSection.MIS_TRABAJOS:
  return <JobsManager role={currentRole} currentUserId={userId} />;

      case AppSection.MARKETPLACE:
        return <MarketplaceManager />;
        case AppSection.MENSAJES:
        return <ChatManager currentRole={currentRole} />;
      case AppSection.PEDIDOS:
        return <OrdersManager />;
      case AppSection.PAGOS:
        return <PaymentsPanel role={currentRole} />;
      case AppSection.FACTURACION:
        return <FacturacionPanel role={currentRole} />;
      case AppSection.INCENTIVOS:
        return <IncentivesPanel role={currentRole} />;
      case AppSection.INCIDENCIAS:
        return <IncidentsPanel role={currentRole} />;
      case AppSection.INFORMES:
        return <ReportsPanel role={currentRole} />;
      case AppSection.CONFIGURACION:
        return <SettingsPanel role={currentRole} />;
      default:
        return <DashboardHome role={currentRole} />;
    }
  };

  const handleRoleChange = (nextRole: DashboardUserRole) => {
    setDevRole(nextRole);
    setActiveSection(AppSection.INICIO);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 xl:pb-0">
      <Header
        currentRole={currentRole}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onRoleChange={handleRoleChange}
        showRoleSwitcher={!role && !!import.meta.env.DEV}
        userName={userName}
        avatarUrl={avatarUrl}
        onCloseProfile={handleCloseProfile}
      />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 xl:pt-24 pb-8">
        <div className="animate-in fade-in duration-500">{renderContent()}</div>
      </main>

      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0056b3] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <AlertCircle size={28} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Necesitas ayuda?
        </span>
      </button>

      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around px-2 z-50">
        <button onClick={() => setActiveSection(AppSection.INICIO)} className={`flex flex-col items-center gap-1 ${activeSection === AppSection.INICIO ? "text-[#0056b3]" : "text-gray-400"}`}>
          <BarChart3 size={20} />
          <span className="text-[10px] font-bold">Inicio</span>
        </button>
         <button onClick={() => setActiveSection(AppSection.MENSAJES)} className={`flex flex-col items-center gap-1 ${activeSection === AppSection.MENSAJES ? 'text-[#0056b3]' : 'text-gray-400'}`}>
                  <MessageSquare size={20} />
                  <span className="text-[10px] font-bold">Chats</span>
                </button>
        <button onClick={() => setActiveSection(AppSection.PAGOS)} className={`flex flex-col items-center gap-1 ${activeSection === AppSection.PAGOS ? "text-[#0056b3]" : "text-gray-400"}`}>
          <CreditCard size={20} />
          <span className="text-[10px] font-bold">Pagos</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <div className="w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center text-white -mt-8 shadow-lg">
            <Settings size={20} />
          </div>
          <span className="text-[10px] font-bold">Ajustes</span>
        </button>
        <button onClick={() => setActiveSection(AppSection.FACTURACION)} className={`flex flex-col items-center gap-1 ${activeSection === AppSection.FACTURACION ? "text-[#0056b3]" : "text-gray-400"}`}>
          <FileText size={20} />
          <span className="text-[10px] font-bold">Docs</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Gift size={20} />
          <span className="text-[10px] font-bold">Bonos</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardShell;
