import React from 'react';
import ClientDashboardShell from '../../components/client/ClientDashboardShell';
import type { AuthState } from '../../types';

interface Props {
  auth: AuthState;
}

const ClientInvoicesPage: React.FC<Props> = ({ auth }) => {
  return (
    <ClientDashboardShell auth={auth}>
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Facturas y Pagos</h1>
      <p className="text-sm text-slate-600 mt-1">
        Aquí irá la parte de pagos (Stripe) y facturación de anuncios/comisiones/seguro.
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-gray-100 p-4">
          <div className="text-sm font-extrabold text-slate-900">Pagos</div>
          <div className="text-sm text-slate-600 mt-2">
            Placeholder: lista de pagos, estados, devoluciones si aplica.
          </div>
          <button
            className="mt-4 px-4 py-2 rounded-xl text-sm font-extrabold text-white shadow hover:opacity-95 transition"
            style={{ background: '#0ea5e9' }}
            onClick={() => alert('Luego conectamos: ir a checkout')}
          >
            Ir a pagar
          </button>
        </div>

        <div className="rounded-2xl border border-gray-100 p-4">
          <div className="text-sm font-extrabold text-slate-900">Facturas</div>
          <div className="text-sm text-slate-600 mt-2">
            Placeholder: facturas emitidas, descargar PDF, etc.
          </div>
        </div>
      </div>
    </ClientDashboardShell>
  );
};

export default ClientInvoicesPage;
