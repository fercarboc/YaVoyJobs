import React from 'react';
import { JobTicket } from '../services/jobTicketService';

interface Props {
  ticket: JobTicket;
  platformFee: number;
}

export const JobTicketCard: React.FC<Props> = ({ ticket, platformFee }) => {
  const totalFee = (ticket.insurance?.insurance_fee || 0) + platformFee;
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-200">
      <h3 className="text-lg font-bold mb-4 text-slate-900 flex items-center gap-2">
        <span>🧾</span> Recibo de Comisión
      </h3>
      <div className="text-sm text-slate-700 space-y-2">
        <div className="flex justify-between">
          <span>Concepto / Microtarea</span>
          <span>{ticket.microtask?.name || '-'}</span>
        </div>
        <div className="flex justify-between">
          <span>Seguro (riesgo {ticket.microtask?.risk_level || 'N/A'}, plan)</span>
          <span>{ticket.insurance?.insurance_fee?.toFixed(2) || '0.00'} {ticket.insurance?.currency || '€'}</span>
        </div>
        <div className="flex justify-between">
          <span>Plataforma (fee)</span>
          <span>{platformFee.toFixed(2)} €</span>
        </div>
        <div className="border-t border-dashed my-2"></div>
        <div className="flex justify-between font-bold text-brand-700">
          <span>TOTAL COMISIÓN</span>
          <span>{totalFee.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};
