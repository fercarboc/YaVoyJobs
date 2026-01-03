import React from "react";

const Colaborador: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 transition-colors duration-200">
      {/* Estilos del scrollbar (equivalente al <style> del HTML) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 20px; }
        .material-symbols-outlined { vertical-align: middle; }
      `}</style>

      <div className="flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-[#e7f3ec] dark:border-gray-800 px-6 py-3 shadow-sm">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg text-primary-dark">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-text-main dark:text-white">
                YaVoy
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-3">
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>

              <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-gray-700">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-text-main dark:text-white">Alex Morgan</p>
                  <p className="text-xs text-text-secondary font-medium">Colaborador</p>
                </div>

                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer"
                  aria-label="Avatar"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALT3SDEMnc8y2ZsBJ6ZISMqKkUSRqCNRhrkdOvsN93OVjF9y8nJ5dn3r0hMRezJJL7dc1kC4aNzPLyK1D0M7M1srme-zsr7smwJ9IAbnCDb1EEaGd1L8ZoZwkZu0NXWHJyfkkogcN1uONbMpwEyx6Ko3zI8PnTKzO1o0PqzMwT7nY79hqsKWcFieyX07ZG_YX2_Go6OYhtrzMobBws5KPJZEf59_QS5XEiIt5yf4UOs53LmEING6WwoSYOz-1mj7BZAX0J4booo0k")',
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 max-w-[1440px] w-full mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
          {/* TOP CARDS */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-24 shadow-md"
                  aria-label="Avatar grande"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDi0Z8h8hROQhby6PYqEEu2LFTePwybCqHHAU_EHJcUW5BC2s3LyfjXPqP2saKe23tuxUMy17S1lmdeKqHuo3UIc4_q-5SsG1Ah-YN2E_DBap0b-EVBEJkI9Dr9MvxiqsUUSqUwzQDR8kxMnKMT9XCnHw04X-ybR2PQ9FijUV814DPbr9qB3VwuiFdOHVL6gr7tBYO-LBmbR0Y66oabpSaTXWMH6UYTha1WcZAXg56-gqxhjvueK9yiM0C-06nOm14JNhPFqV8CB_E")',
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 bg-primary text-black rounded-full p-1 border-2 border-white dark:border-surface-dark"
                  title="Socio Verificado"
                >
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                <div>
                  <h1 className="text-2xl font-bold text-text-main dark:text-white">
                    ¡Bienvenido de nuevo, Alex!
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-text-secondary mt-1">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span className="text-sm font-medium">Socio Verificado</span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
                  <div className="bg-[#e7f3ec] dark:bg-green-900/30 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-dark dark:text-primary">
                      account_balance_wallet
                    </span>
                    <div>
                      <p className="text-xs text-text-secondary dark:text-green-300 font-semibold uppercase">
                        Saldo en Cartera
                      </p>
                      <p className="text-lg font-bold text-text-main dark:text-white">150.00€</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-500">pending</span>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Pago Pendiente</p>
                      <p className="text-lg font-bold text-gray-700 dark:text-gray-300">45.00€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="font-bold text-text-main dark:text-white">Meta de Bono Semanal</h3>
                  <p className="text-sm text-text-secondary">5 colaboraciones más para un bono de 50€</p>
                </div>
                <span className="text-2xl font-bold text-primary">75%</span>
              </div>

              <div className="w-full bg-[#d0e7d9] dark:bg-gray-700 rounded-full h-3 mb-2">
                <div
                  className="bg-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: "75%" }}
                />
              </div>

              <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                <span>0</span>
                <span>100%</span>
              </div>
            </div>
          </section>

          {/* GRID MAIN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[600px]">
            {/* LEFT */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-text-main dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">explore</span>
                  Anuncios Disponibles
                </h3>
                <div className="flex gap-2">
                  <button className="text-sm font-bold text-primary hover:underline">Ver Lista</button>
                </div>
              </div>

              {/* MAP */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  aria-label="Mapa"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc7tBtS0519Mm170T0oN0MrTwuFaHWG8t4ukrs4ya11tafbz8BqdlhNVZYOb97miiSIvW9zCzJPCTV6CSTT36AALtlU1L3OzbsMs_4VJGFcWRJqCkq5U5FVf_M-Id9vNKuioK3dh8DOTw02-Ta9MGJGT9u0uxkBsRu2sVIIG6C2W2l7xaN7Rm4m_L8dz0dqbUkF62NIrZMT8x7pGXpaCwZV8-OikAGU4yFLploMM4XJ526CZ8BZuvWud0sAktPflxXqsgp7y3evso")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="bg-white dark:bg-surface-dark text-text-main dark:text-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                  <button className="bg-white dark:bg-surface-dark text-text-main dark:text-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="bg-white dark:bg-surface-dark text-text-main dark:text-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
              </div>

              {/* FILTER CHIPS */}
              <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-lg">apps</span> Todo
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main dark:text-gray-300 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-lg">local_shipping</span> Entrega
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main dark:text-gray-300 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-lg">directions_car</span> Transporte
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main dark:text-gray-300 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-lg">handyman</span> Asistencia
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main dark:text-gray-300 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-lg text-amber-500">bolt</span> Urgente
                </button>
              </div>

              {/* JOB LIST */}
              <div className="space-y-3">
                {/* Card 1 */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-start gap-4 w-full sm:w-auto">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined">package_2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white text-lg">
                        Entrega Urgente de Paquete
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">near_me</span> a 1.2 km
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Centro</span>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <span className="text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded">
                          Urgente
                        </span>
                        <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                          Caja Pequeña
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto justify-between sm:justify-center border-t sm:border-t-0 border-gray-100 dark:border-gray-700 pt-3 sm:pt-0">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase font-bold">Recompensa</p>
                      <p className="text-xl font-extrabold text-primary">25.00€</p>
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
                      Enviar Propuesta
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-start gap-4 w-full sm:w-auto">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600 dark:text-purple-400">
                      <span className="material-symbols-outlined">chair</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white text-lg">Montaje de Muebles</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">near_me</span> a 3.5 km
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Zona Oeste</span>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                          Mesa IKEA
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto justify-between sm:justify-center border-t sm:border-t-0 border-gray-100 dark:border-gray-700 pt-3 sm:pt-0">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase font-bold">Recompensa</p>
                      <p className="text-xl font-extrabold text-primary">60.00€</p>
                    </div>
                    <button className="bg-primary/10 hover:bg-primary hover:text-black text-primary-dark dark:text-primary font-bold py-2 px-4 rounded-lg text-sm transition-colors border border-primary/20">
                      Enviar Propuesta
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Mis Colaboraciones */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full max-h-[600px]">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">
                    Mis Colaboraciones
                  </h3>

                  <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                    <button className="flex-1 py-1.5 px-3 rounded-md text-sm font-bold bg-white dark:bg-gray-700 text-text-main dark:text-white shadow-sm transition-all">
                      Aceptadas (2)
                    </button>
                    <button className="flex-1 py-1.5 px-3 rounded-md text-sm font-medium text-gray-500 hover:text-text-main dark:hover:text-white transition-all">
                      Pendientes (1)
                    </button>
                    <button className="flex-1 py-1.5 px-3 rounded-md text-sm font-medium text-gray-500 hover:text-text-main dark:hover:text-white transition-all">
                      Finalizadas
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                  {/* Item 1 */}
                  <div className="bg-white dark:bg-gray-800/50 border border-l-4 border-l-primary border-gray-100 dark:border-gray-700 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-text-secondary font-bold uppercase mb-1">En Progreso</p>
                        <h4 className="font-bold text-text-main dark:text-white">Ayuda en Jardinería</h4>
                      </div>
                      <p className="font-bold text-lg text-text-main dark:text-white">60.00€</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="size-6 rounded-full bg-cover bg-center"
                        aria-label="Avatar cliente"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFIMXSJmAchYiEL2mSUXEr0D83XdIY81rPtIDNEpCTGsztChiPuh0UtfgxRTcRVNmdNesYXcorHqjKsm_V3yAslLXt93r-sN-lxgvvZ7EYp0tJQJ5XMafzds34YtyBZqyoOSrJ8BnwlJzkRauOrY6i5X37EM7qJFSMOPOQYOSycbtsHY-bZQ6boF0NRfgjPpUx1dimZY1u4WuDGK4Ju3yOgF2eQ4T-m28Tit9s_2HkIn76aZ47o3qG1mwuIDcCgYJN6kFUVwynvjY")',
                        }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Cliente: Maria S.</span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-bold text-gray-700 dark:text-gray-200 transition-colors">
                      <span className="material-symbols-outlined text-base">chat</span> Abrir Chat
                    </button>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white dark:bg-gray-800/50 border border-l-4 border-l-primary border-gray-100 dark:border-gray-700 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-text-secondary font-bold uppercase mb-1">
                          Programado: Hoy 16:00
                        </p>
                        <h4 className="font-bold text-text-main dark:text-white">Cuidado de Mascotas</h4>
                      </div>
                      <p className="font-bold text-lg text-text-main dark:text-white">35.00€</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="size-6 rounded-full bg-cover bg-center"
                        aria-label="Avatar cliente"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkRL672OjtNk9gQW3INyXAcSvamDXYIEKqNdLl345qHWFn2COdW0BTkGNDpkmbJGSTZY06nMf60dtDxuOmDwSuhdBLfMdBYO0CS_uDdDyILd5N_ORaajI7FM81twkvJNWaVO6o8BcbO297xHsYa0WbMnsRaxWzoGw4rGigaSqptylTNrnzER0vd-9pjVU7vWsPCFuMit06VGq-Hr-p-G0h9txoAEDLValVARNrOd_ftOkavTT-v1pzpuJdRb4QJTVfP4-WL16fs-0")',
                        }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Cliente: John D.</span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-bold text-gray-700 dark:text-gray-200 transition-colors">
                      <span className="material-symbols-outlined text-base">chat</span> Abrir Chat
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase">Datos de Cobro</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Ganado</span>
                      <span className="font-bold text-text-main dark:text-white">450.00€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Disponible</span>
                      <span className="font-bold text-primary">150.00€</span>
                    </div>
                    <button className="w-full mt-2 text-primary text-xs font-bold uppercase tracking-wide hover:underline text-left flex items-center gap-1">
                      Ver Análisis{" "}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-gray-500 mb-2 uppercase">Estado de la Cuenta</h4>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>{" "}
                      Identidad Verificada
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>{" "}
                      Banco Vinculado
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="material-symbols-outlined text-base">radio_button_unchecked</span>{" "}
                      Info. Fiscal
                    </li>
                  </ul>
                  <a className="text-xs text-gray-500 underline hover:text-primary" href="#">
                    Gestionar Verificación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="mt-auto py-6 border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-[1440px] mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-lg">
              YaVoy actúa únicamente como plataforma intermediaria conectando colaboradores independientes con clientes. Los colaboradores son contratistas independientes, no empleados de YaVoy.
            </p>
            <div className="flex gap-6 text-xs font-bold text-gray-600 dark:text-gray-300">
              <a className="hover:text-primary transition-colors" href="#">
                Términos de Servicio
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Política de Privacidad
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Acuerdo de Contratista
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Colaborador;
