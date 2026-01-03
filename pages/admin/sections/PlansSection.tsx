const PlansSection = () => {
  return (
    <section id="plans" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            sell
          </span>
          Gestión de Planes
        </h2>

        <button className="bg-[#282f39] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#323b47] transition-colors border border-border-dark">
          Guardar Cambios
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PLAN BÁSICO */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">
              Básico / Free
            </h3>
            <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs font-bold uppercase">
              Activo
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#9da8b9] uppercase font-bold">
              Precio Mensual
            </label>
            <div className="flex items-center bg-[#111418] rounded border border-border-dark px-3 py-2">
              <span className="text-[#9da8b9]">€</span>
              <input
                type="number"
                value="0"
                disabled
                className="bg-transparent border-none text-white focus:ring-0 p-0 ml-2 w-full font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border-dark">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Acceso limitado
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Publicidad
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Soporte 24/7
              </span>
              <span className="material-symbols-outlined text-[#3b4554] text-xl">
                toggle_off
              </span>
            </div>
          </div>
        </div>

        {/* PLAN PRO */}
        <div className="bg-surface-dark border-2 border-primary/50 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">
              Pro
            </h3>
            <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs font-bold uppercase">
              Activo
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#9da8b9] uppercase font-bold">
              Precio Mensual
            </label>
            <div className="flex items-center bg-[#111418] rounded border border-border-dark px-3 py-2">
              <span className="text-[#9da8b9]">€</span>
              <input
                type="number"
                value="29.99"
                className="bg-transparent border-none text-white focus:ring-0 p-0 ml-2 w-full font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border-dark">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Acceso ilimitado
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Sin Publicidad
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Soporte Prioritario
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>
          </div>
        </div>

        {/* PLAN ENTERPRISE */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">
              Enterprise
            </h3>
            <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs font-bold uppercase">
              Activo
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#9da8b9] uppercase font-bold">
              Precio Mensual
            </label>
            <div className="flex items-center bg-[#111418] rounded border border-border-dark px-3 py-2">
              <span className="text-[#9da8b9]">€</span>
              <input
                type="number"
                value="299.00"
                className="bg-transparent border-none text-white focus:ring-0 p-0 ml-2 w-full font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border-dark">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                API Access
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                Manager Dedicado
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9da8b9]">
                SLA 99.9%
              </span>
              <span className="material-symbols-outlined text-primary text-xl">
                toggle_on
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
