import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import providerBackofficeTheme from './providerBackofficeTheme';
import ProviderPanelTab from './ProviderPanelTab';

import ProviderProductsTab from './ProviderProductsTab';
import ProviderOrdersTab from './ProviderOrdersTab';
import ProviderReturnsTab from './ProviderReturnsTab';
import ProviderInvoicesTab from './ProviderInvoicesTab';

import ProviderHistoryTab from './ProviderHistoryTab';
import ProviderProfileTab from './ProviderProfileTab';
import { UserAvatar } from '../common/Avatar';

const TABS = [
  { key: 'panel', label: 'Panel' },
  { key: 'products', label: 'Productos' },
  { key: 'orders', label: 'Pedidos' },
  { key: 'returns', label: 'Devoluciones' },
  { key: 'invoices', label: 'Facturas' },
  { key: 'history', label: 'Histórico' },
  { key: 'profile', label: 'Perfil' },
];

const ProviderModal: React.FC<{ onClose: () => void; user: any; onLogout?: () => void }> = ({ onClose, user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('panel');

  return (
    <ThemeProvider theme={providerBackofficeTheme}>
      <div className="fixed inset-0 z-50 flex items-stretch justify-stretch bg-black bg-opacity-40">
        <div className="bg-white w-full h-full relative flex flex-col">
          {/* Cabecera */}
          <div className="flex items-center justify-between px-6 py-3 bg-blue-700" style={{ minHeight: 48 }}>
            <span className="text-white text-lg font-bold tracking-tight">Backoffice Proveedor</span>
            <div className="flex items-center gap-3">
              <UserAvatar user={user} size={36} />
              <button onClick={onClose} className="text-white text-xl font-bold hover:text-blue-200 focus:outline-none" aria-label="Cerrar">×</button>
              {onLogout && (
                <button onClick={onLogout} className="ml-2 text-white text-xs font-semibold bg-blue-900 px-3 py-1 rounded hover:bg-blue-800">Cerrar sesión</button>
              )}
            </div>
          </div>
          {/* Tabs superiores */}
          <div className="flex border-b border-gray-200 bg-gray-50 px-6" style={{ minHeight: 40 }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={`py-2 px-3 font-semibold transition border-b-2 -mb-px text-xs ${activeTab === tab.key ? 'border-blue-700 text-blue-700 bg-white' : 'border-transparent text-gray-500 hover:text-blue-700'}`}
                onClick={() => setActiveTab(tab.key)}
                style={{ minHeight: 36 }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Contenido de la pestaña activa */}
          <div className="flex-1 overflow-y-auto p-0 bg-white">
            {activeTab === 'panel' && <ProviderPanelTab user={user} />}
            {activeTab === 'products' && <ProviderProductsTab user={user} />}
            {activeTab === 'orders' && <ProviderOrdersTab user={user} />}
            {activeTab === 'returns' && <ProviderReturnsTab user={user} />}
            {activeTab === 'invoices' && <ProviderInvoicesTab user={user} />}
            {activeTab === 'history' && <ProviderHistoryTab user={user} />}
            {activeTab === 'profile' && <ProviderProfileTab user={user} />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProviderModal;
