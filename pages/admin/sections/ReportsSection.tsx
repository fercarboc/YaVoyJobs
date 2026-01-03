const ReportsSection = () => {
  return (
    <section id="reports" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            bar_chart
          </span>
          Informes &amp; Analítica
        </h2>

        <div className="flex bg-[#111418] rounded-lg p-1 border border-border-dark">
          <button className="px-3 py-1 text-xs font-medium rounded bg-[#282f39] text-white">
            7D
          </button>
          <button className="px-3 py-1 text-xs font-medium rounded text-[#9da8b9] hover:text-white">
            1M
          </button>
          <button className="px-3 py-1 text-xs font-medium rounded text-[#9da8b9] hover:text-white">
            1Y
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CRECIMIENTO DE USUARIOS */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 h-64 flex flex-col">
          <h3 className="text-[#9da8b9] font-medium text-sm mb-4">
            Crecimiento de Usuarios
          </h3>

          <div className="flex-1 flex items-end justify-between gap-2 px-2">
            <div className="w-full bg-primary/20 rounded-t h-[40%] hover:bg-primary/40 transition-all relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                40%
              </div>
            </div>

            <div className="w-full bg-primary/20 rounded-t h-[55%] hover:bg-primary/40 transition-all relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                55%
              </div>
            </div>

            <div className="w-full bg-primary/20 rounded-t h-[45%] hover:bg-primary/40 transition-all relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                45%
              </div>
            </div>

            <div className="w-full bg-primary/20 rounded-t h-[70%] hover:bg-primary/40 transition-all relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                70%
              </div>
            </div>

            <div className="w-full bg-primary/20 rounded-t h-[60%] hover:bg-primary/40 transition-all relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                60%
              </div>
            </div>

            <div className="w-full bg-primary rounded-t h-[85%] hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(43,124,238,0.3)] relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                85%
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-2 text-[10px] text-[#4b5563] uppercase font-bold">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>

        {/* FUENTES DE TRÁFICO */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 h-64 flex flex-col">
          <h3 className="text-[#9da8b9] font-medium text-sm mb-4">
            Fuentes de Tráfico
          </h3>

          <div className="flex-1 flex items-center justify-center gap-8">
            <div className="relative size-32 rounded-full border-[12px] border-[#282f39] border-t-primary border-r-primary border-l-purple-500 rotate-45" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-[#9da8b9]">
                <span className="size-3 rounded-full bg-primary" />
                Orgánico (65%)
              </div>
              <div className="flex items-center gap-2 text-sm text-[#9da8b9]">
                <span className="size-3 rounded-full bg-purple-500" />
                Ads (25%)
              </div>
              <div className="flex items-center gap-2 text-sm text-[#9da8b9]">
                <span className="size-3 rounded-full bg-[#282f39]" />
                Directo (10%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
