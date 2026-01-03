const SystemSection = () => {
  return (
    <section id="system" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            dns
          </span>
          Estado del Sistema
        </h2>

        <span className="text-green-500 text-sm font-bold flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Todo Operativo
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* RECURSOS */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-white font-medium text-sm">
            Recursos del Servidor
          </h3>

          <div className="space-y-4">
            {/* CPU */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#9da8b9]">CPU Usage</span>
                <span className="text-white">24%</span>
              </div>
              <div className="w-full bg-[#111418] rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "24%" }}
                />
              </div>
            </div>

            {/* RAM */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#9da8b9]">RAM Usage</span>
                <span className="text-white">65%</span>
              </div>
              <div className="w-full bg-[#111418] rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

            {/* STORAGE */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#9da8b9]">Storage</span>
                <span className="text-white">450GB / 1TB</span>
              </div>
              <div className="w-full bg-[#111418] rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* LOGS */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-2 overflow-y-auto max-h-48">
          <h3 className="text-white font-medium text-sm sticky top-0 bg-surface-dark pb-2">
            Logs del Sistema
          </h3>

          <div className="text-xs font-mono text-[#9da8b9] space-y-1">
            <p>
              <span className="text-blue-400">[INFO]</span> 10:45:01 - Backup database successful
            </p>
            <p>
              <span className="text-blue-400">[INFO]</span> 10:30:00 - Cron job 'invoice_gen' started
            </p>
            <p>
              <span className="text-yellow-400">[WARN]</span> 10:15:22 - High latency detected on node-eu-1
            </p>
            <p>
              <span className="text-blue-400">[INFO]</span> 09:55:00 - User sync completed (205 records)
            </p>
            <p>
              <span className="text-blue-400">[INFO]</span> 09:00:00 - System startup sequence initiated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
