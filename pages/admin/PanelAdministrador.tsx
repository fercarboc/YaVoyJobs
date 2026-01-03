import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

import DashboardSection from "./sections/DashboardSection";
import EconomySection from "./sections/EconomySection";
import PlansSection from "./sections/PlansSection";
import UsersSection from "./sections/UsersSection";
import Profile360Section from "./sections/Profile360Section";
import AntifraudSection from "./sections/AntifraudSection";
import SupportSection from "./sections/SupportSection";
import ReportsSection from "./sections/ReportsSection";
import SystemSection from "./sections/SystemSection";

const PanelAdministrador: React.FC = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark font-display text-white h-screen flex overflow-hidden">
      <AdminSidebar />

      <main className="flex-1 overflow-y-auto bg-background-dark">
        <div className="max-w-[1200px] mx-auto p-8 pb-32 flex flex-col gap-16">
          <AdminHeader />

          <DashboardSection />
          <EconomySection />
          <PlansSection />
          <UsersSection />
          <Profile360Section />
          <AntifraudSection />
          <SupportSection />
          <ReportsSection />
          <SystemSection />
        </div>
      </main>
    </div>
  );
};

export default PanelAdministrador;
