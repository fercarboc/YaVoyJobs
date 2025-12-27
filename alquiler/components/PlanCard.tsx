import React from "react";
import { AgencyPlan, AgencyPlanId } from "../types/agency.types";

type Props = {
  plan: AgencyPlan;
  current: AgencyPlanId;
  onSelect: (id: AgencyPlanId) => void;
};

const PlanCard: React.FC<Props> = ({ plan, current, onSelect }) => {
  const isActive = current === plan.id;
  return (
    <div
      className={`border rounded-2xl p-5 shadow-sm bg-white flex flex-col gap-3 ${
        isActive ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-gray-400 font-bold">{plan.name}</p>
          <p className="text-2xl font-bold text-blue-700">{plan.price}</p>
        </div>
        {isActive && (
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Plan actual</span>
        )}
      </div>
      <ul className="text-sm text-gray-700 space-y-1">
        {plan.perks.map((perk) => (
          <li key={perk}>• {perk}</li>
        ))}
        <li>• Límite: {plan.maxActiveAds} anuncios activos</li>
      </ul>
      <button
        type="button"
        onClick={() => onSelect(plan.id)}
        className={`mt-auto px-4 py-2 rounded-full text-sm font-semibold ${
          isActive ? "bg-gray-100 text-gray-600" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isActive ? "Plan vigente" : "Elegir plan"}
      </button>
    </div>
  );
};

export default PlanCard;
