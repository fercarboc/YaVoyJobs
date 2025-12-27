import React from "react";

const AdminMetricsPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Métricas</h1>
        <p className="text-sm text-gray-600">Placeholder para Jobs / Alquiler / Marketplace.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {["Jobs", "Alquiler", "Marketplace"].map((block) => (
          <div key={block} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
            <p className="text-xs uppercase text-gray-500 font-bold">{block}</p>
            <p className="text-sm text-gray-600 mt-1">Añadir gráficas y funnels aquí.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMetricsPage;
