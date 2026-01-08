import React from "react";
import type { LayoutMenuItem } from "./Layout";

type SidebarProps = {
  items: LayoutMenuItem[];
  activeView: string;
  onSelect: (view: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ items, activeView, onSelect }) => (
  <aside className="w-64 bg-white border-r border-slate-200 shrink-0">
    <div className="px-6 py-5 border-b border-slate-100">
      <p className="text-sm uppercase tracking-[0.5em] text-slate-400 font-semibold">YaVoy</p>
    </div>
    <nav className="flex flex-col gap-1 p-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => !item.disabled && onSelect(item.view)}
          disabled={item.disabled}
          className={`text-left px-4 py-3 rounded-2xl transition-colors text-sm font-medium ${
            item.disabled
              ? "text-slate-300 bg-slate-50 cursor-not-allowed"
              : activeView === item.view
              ? "bg-slate-900 text-white shadow"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
