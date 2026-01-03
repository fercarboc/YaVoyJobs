const DashboardSection = () => {
  return (
    <section id="dashboard" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            dashboard
          </span>
          Dashboard General
        </h2>
        <span className="text-xs text-[#9da8b9] bg-surface-dark px-2 py-1 rounded border border-border-dark">
          Fuente: public.kpi_overview
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-surface-dark border border-border-dark p-5 rounded-xl flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da8b9] text-sm font-medium">
              Ingresos Totales (MRR)
            </p>
            <span className="material-symbols-outlined text-green-500 text-lg">
              trending_up
            </span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">€45,231.00</p>
          <p className="text-green-500 text-xs font-medium flex items-center gap-1">
            +12% <span className="text-[#9da8b9]">vs mes anterior</span>
          </p>
        </div>

        {/* KPI 2 */}
        <div className="bg-surface-dark border border-border-dark p-5 rounded-xl flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da8b9] text-sm font-medium">
              Usuarios Activos
            </p>
            <span className="material-symbols-outlined text-primary text-lg">
              group
            </span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">12,540</p>
          <p className="text-green-500 text-xs font-medium flex items-center gap-1">
            +5% <span className="text-[#9da8b9]">nuevos registros</span>
          </p>
        </div>

        {/* KPI 3 */}
        <div className="bg-surface-dark border border-border-dark p-5 rounded-xl flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da8b9] text-sm font-medium">
              Tasa de Cancelación
            </p>
            <span className="material-symbols-outlined text-red-400 text-lg">
              trending_down
            </span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">2.4%</p>
          <p className="text-red-400 text-xs font-medium flex items-center gap-1">
            +0.2% <span className="text-[#9da8b9]">riesgo de fuga</span>
          </p>
        </div>

        {/* KPI 4 */}
        <div className="bg-surface-dark border border-border-dark p-5 rounded-xl flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da8b9] text-sm font-medium">
              Incidencias Abiertas
            </p>
            <span className="material-symbols-outlined text-orange-400 text-lg">
              warning
            </span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">18</p>
          <p className="text-[#9da8b9] text-xs font-medium flex items-center gap-1">
            3 urgentes
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
