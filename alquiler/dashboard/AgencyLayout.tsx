import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AgencySideNav from "../components/AgencySideNav";
import AgencyTopBar from "../components/AgencyTopBar";
import { useAuth } from "../hooks/useAuth";

const AgencyLayout: React.FC = () => {
  const { isAuthenticated, activeRole } = useAuth();

  if (!isAuthenticated || activeRole !== "AGENCY") {
    return <Navigate to="/alquiler/login-required" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      <AgencyTopBar />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3 lg:col-span-3">
          <AgencySideNav />
        </div>
        <main className="md:col-span-9 lg:col-span-9 space-y-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AgencyLayout;
