const AdminHeader = () => {
  return (
    <header className="flex flex-wrap justify-between items-end gap-4 border-b border-border-dark pb-6 mb-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">
          Vista General
        </h1>
        <p className="text-[#9da8b9] mt-1">
          Bienvenido al centro de administración de YaVoy.
        </p>
      </div>

      <div className="flex gap-3">
        <div className="bg-surface-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-[#9da8b9] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Supabase Conectado
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            download
          </span>
          Exportar Todo
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
