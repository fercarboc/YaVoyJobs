const EconomySection = () => {
  return (
    <section id="economy" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">payments</span>
          Economía & Stripe
        </h2>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border-dark flex justify-between items-center bg-[#161a20]">
          <h3 className="font-medium text-white">Transacciones Recientes</h3>
          <div className="flex gap-2">
            <button className="bg-[#282f39] hover:bg-[#323b47] text-white text-xs px-3 py-1.5 rounded border border-border-dark flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filtros
            </button>
            <button className="bg-[#282f39] hover:bg-[#323b47] text-white text-xs px-3 py-1.5 rounded border border-border-dark flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1c2027] border-b border-border-dark">
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase">ID Transacción</th>
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase">Usuario</th>
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase">Plan</th>
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase">Monto</th>
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase">Estado</th>
                <th className="px-6 py-4 text-xs font-semibold text-[#9da8b9] uppercase text-right">Acción</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border-dark">
              <tr className="hover:bg-[#282f39]/50 transition-colors">
                <td className="px-6 py-4 text-sm text-white font-mono">TX-9921-STR</td>
                <td className="px-6 py-4 text-sm text-[#9da8b9]">Ana García</td>
                <td className="px-6 py-4">
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">
                    PRO
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-white font-medium">€29.99</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    Completado
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#9da8b9] hover:text-white">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-[#282f39]/50 transition-colors">
                <td className="px-6 py-4 text-sm text-white font-mono">TX-9922-STR</td>
                <td className="px-6 py-4 text-sm text-[#9da8b9]">Empresa Tech SL</td>
                <td className="px-6 py-4">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-bold">
                    ENTERPRISE
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-white font-medium">€299.00</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                    Pendiente
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#9da8b9] hover:text-white">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
