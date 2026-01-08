import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export type LayoutMenuItem = {
  id: string;
  label: string;
  view: string;
  disabled?: boolean;
};

export type LayoutProps = {
  roleLabel: string;
  menuItems: LayoutMenuItem[];
  activeView: string;
  onMenuSelect: (view: string) => void;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ roleLabel, menuItems, activeView, onMenuSelect, children }) => (
 <div className="min-h-screen text-slate-900 flex flex-col">

   
    <div className="flex flex-1">
      <Sidebar items={menuItems} activeView={activeView} onSelect={onMenuSelect} />
      <main className="flex-1 p-6 bg-slate-100">{children}</main>

    </div>
  </div>
);
