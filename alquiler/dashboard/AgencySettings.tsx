import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import { AgencyPlanId } from "../types/agency.types";
import { PLANS, getPlan, setPlan } from "../services/billing.mock";

const AgencySettings: React.FC = () => {
  const [current, setCurrent] = useState<AgencyPlanId>(getPlan().id);

  const handleSelect = (id: AgencyPlanId) => {
    if (id === current) return;
    setPlan(id);
    setCurrent(id);
    alert("Cambio de plan simulado. TODO: integrar checkout real.");
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Configuración y Planes</h2>
        <p className="text-sm text-gray-500">Gestiona tu suscripción y límites de anuncios.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {(Object.values(PLANS) as any[]).map((plan) => (
          <PlanCard key={plan.id} plan={plan} current={current} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default AgencySettings;
