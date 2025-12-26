
import React from 'react';
import { User, Bell, ChevronDown, LogOut } from 'lucide-react';
import { AppSection, DashboardUserRole } from '../dashboardTypes';

import { NAVIGATION_ITEMS } from '../navigation';

interface HeaderProps {
  currentRole: DashboardUserRole;
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
  /** Only used in demo/dev. In production you should NOT show the role switcher. */
  onRoleChange?: (role: DashboardUserRole) => void;
  /** Hide in real app: dashboard must reflect the logged-in user role. */
  showRoleSwitcher?: boolean;
  /** Optional real user info */
  userName?: string;
  avatarUrl?: string;
  /** Action to cerrar/cerrar sesión desde el perfil */
  onCloseProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  activeSection,
  setActiveSection,
  onRoleChange,
  showRoleSwitcher = false,
  userName = 'Usuario',
  avatarUrl,
  onCloseProfile,
}) => {
  const visibleNav = NAVIGATION_ITEMS.filter(item => item.roles.includes(currentRole));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0056b3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">YaVoy<span className="text-[#0056b3]">Pro</span></span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-1 overflow-x-auto no-scrollbar max-w-[calc(100vw-360px)] pr-2">
              {visibleNav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label ?? item.id}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Role Switcher (Simulator) - ONLY for demo/dev */}
            {showRoleSwitcher && onRoleChange && (
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-100 rounded-full text-[11px] font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
                  Role: {currentRole}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {Object.values(DashboardUserRole).map((role) => (
                    <button
                      key={role}
                      onClick={() => onRoleChange(role)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="p-1.5 text-gray-400 hover:text-gray-600 relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 border-l border-gray-200 pl-3 ml-2">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-900 leading-none truncate max-w-[120px]">{userName}</p>
                <p className="text-[11px] text-gray-500 mt-1">{currentRole}</p>
              </div>
              <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
                <img src={avatarUrl || "https://picsum.photos/seed/user1/100/100"} alt="profile" />
              </div>
              <button
                type="button"
                onClick={onCloseProfile}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Cerrar perfil"
              >
                <LogOut size={14} />
                Cerrar perfil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Subnav (Horizontal Scroll) */}
      <div className="xl:hidden bg-white border-t border-gray-100 px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-4 h-12">
          {visibleNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`whitespace-nowrap px-3 py-1 text-sm font-medium border-b-2 transition-colors ${
                activeSection === item.id
                  ? 'border-[#0056b3] text-[#0056b3]'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
