import React from "react";

type Stat = { label: string; value: number | string; hint?: string };

const StatsCards: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase">{s.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
          {s.hint && <p className="text-xs text-gray-500 mt-1">{s.hint}</p>}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
