const AntifraudSection = () => {
  return (
    <section id="antifraud" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            security
          </span>
          Antifraude &amp; Seguridad
        </h2>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-xl p-0 overflow-hidden">
        {/* ALERT HEADER */}
        <div className="p-4 bg-red-900/10 border-b border-border-dark flex items-center gap-3">
          <span className="material-symbols-outlined text-red-500">
            warning
          </span>
          <p className="text-red-200 text-sm font-medium">
            Se han detectado 3 intentos de acceso sospechosos en las últimas 24h.
          </p>
        </div>

        {/* EVENTS */}
        <div className="p-4">
          <div className="flex flex-col gap-2">
            {/* EVENT 1 */}
            <div className="flex items-center justify-between p-3 rounded hover:bg-[#282f39] transition-colors border-b border-border-dark last:border-0">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 text-red-500 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-lg">
                    public_off
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    IP Bloqueada (Rusia)
                  </p>
                  <p className="text-[#9da8b9] text-xs">
                    85.21.XX.XX - Intentos múltiples de login fallido
                  </p>
                </div>
              </div>
              <span className="text-[#9da8b9] text-xs font-mono">
                Hace 2h
              </span>
            </div>

            {/* EVENT 2 */}
            <div className="flex items-center justify-between p-3 rounded hover:bg-[#282f39] transition-colors border-b border-border-dark last:border-0">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 text-orange-500 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-lg">
                    credit_card_off
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Tarjeta Sospechosa
                  </p>
                  <p className="text-[#9da8b9] text-xs">
                    Usuario ID #4421 - Bin match failed
                  </p>
                </div>
              </div>
              <span className="text-[#9da8b9] text-xs font-mono">
                Hace 5h
              </span>
            </div>

            {/* EVENT 3 */}
            <div className="flex items-center justify-between p-3 rounded hover:bg-[#282f39] transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-lg">
                    vpn_lock
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Acceso desde VPN detectado
                  </p>
                  <p className="text-[#9da8b9] text-xs">
                    Usuario ID #7312 - País inconsistente
                  </p>
                </div>
              </div>
              <span className="text-[#9da8b9] text-xs font-mono">
                Hace 9h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntifraudSection;
