import React from "react";
import { AgencyPlan } from "../types/agency";

type Props = {
  plan: AgencyPlan;
  currentPlanId?: string;
  onSelect: (id: string, billing: "monthly" | "quarterly" | "annual") => void;
};

const PlanCard: React.FC<Props> = ({ plan, currentPlanId, onSelect }) => {
  const isActive = currentPlanId === plan.id;
  return (
    <div
      className={`border rounded-2xl p-5 shadow-sm bg-white flex flex-col gap-3 ${
        isActive ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-gray-400 font-bold">{plan.name}</p>
          <p className="text-2xl font-bold text-blue-700">{plan.monthly_price ? `${plan.monthly_price} €/mes` : "-"}</p>
        </div>
        {isActive && (
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Plan actual</span>
        )}
      </div>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>• Anuncios activos: {plan.properties_active ?? "—"}</li>
        {(plan.features || []).map((perk) => (
          <li key={perk}>• {perk}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {["monthly", "quarterly", "annual"].map((period) => (
          <button
            key={period}
            type="button"
            onClick={() => onSelect(plan.id, period as any)}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-full border ${
              isActive ? "bg-gray-100 text-gray-600" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {period === "monthly" ? "Mensual" : period === "quarterly" ? "Trimestral" : "Anual"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
