import React from "react";
import PlanSelector from "@/components/billing/PlanSelector";

const AgencyPlansPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Planes</h1>
        <p className="text-sm text-gray-600">Activa o cambia tu plan de alquiler.</p>
      </div>
      <PlanSelector scope="AGENCY_HOUSING" />
    </div>
  );
};

export default AgencyPlansPage;
