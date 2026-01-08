import React from "react";

type TopbarProps = {
  roleLabel: string;
  activeView: string;
};

const Topbar: React.FC<TopbarProps> = ({ roleLabel, activeView }) => (
  <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm sticky top-0 z-10">
    <div className="flex flex-col gap-1">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">YaVoy</p>
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Panel de {roleLabel}</p>
          <p className="text-2xl font-semibold text-slate-900 capitalize">{activeView === "home" ? "Inicio" : activeView}</p>
        </div>
        <div className="text-xs uppercase tracking-[0.5em] text-slate-400">Rol asignado</div>
      </div>
    </div>
  </header>
);

export default Topbar;
