const AdminSidebar = () => {
  return (
    <aside className="w-72 bg-[#111418] border-r border-border-dark flex flex-col h-full shrink-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/20 flex items-center justify-center rounded-lg size-10 text-primary">
            <span className="material-symbols-outlined text-3xl">
              admin_panel_settings
            </span>
          </div>
          <div>
            <h1 className="text-white text-lg font-bold">YaVoy Admin</h1>
            <p className="text-[#9da8b9] text-xs">Panel de Control v2.4</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-surface-dark border border-border-dark">
          <div
            className="bg-center bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz2SqvO5U4Og6aZa63zKYMIYIc7Qgc583PfCFo_pbyQP9qjM3Wl0RvQBmZA6y7c9PO1ndMntbkd_tmWkqVOIxWksiqIL7YK8ZAhXRYN_ulGQhq2YHXVkuqh4z3i03UGmIFOSqPiWo9Pq2F8HCY2nV2m77TEv6W5hD1odfagq7k1HIsoMYkluR6cc0mXNutTlMtn2ld-gm-KyTJbVp8wAQkE3z8dAuFWmroM_cOSVfVf8Nw768WgIS8L0T3eUae3SI_VIGrJApddjM")',
            }}
          />
          <div className="overflow-hidden">
            <p className="text-white text-sm font-medium truncate">
              Carlos Admin
            </p>
            <p className="text-[#9da8b9] text-xs truncate">Super Admin</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {[
            ["dashboard", "Dashboard General"],
            ["economy", "Economía & Stripe"],
            ["plans", "Planes y Precios"],
            ["users", "Usuarios & Empresas"],
            ["profile360", "Perfil 360 & KYC"],
            ["antifraud", "Antifraude"],
            ["support", "Soporte"],
            ["reports", "Informes"],
            ["system", "Sistema"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#282f39] text-[#9da8b9] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-border-dark">
        <button className="flex items-center gap-3 text-[#9da8b9] hover:text-red-400 w-full">
          <span className="material-symbols-outlined">logout</span>
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
