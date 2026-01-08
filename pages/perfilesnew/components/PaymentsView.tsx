
import React from 'react';
import { UserRole } from '../types';
import { ICONS } from '../constants';

interface PaymentsViewProps {
  role: UserRole;
}

export const PaymentsView: React.FC<PaymentsViewProps> = ({ role }) => {
  const isWorker = role === UserRole.WORKER;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pagos</h2>
          <p className="text-gray-500 mt-1">
            {isWorker 
              ? 'Gestiona tus cobros por servicios prestados' 
              : 'Gestiona los pagos de tus servicios solicitados'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: List of Jobs */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 px-1">
            {isWorker ? 'Servicios realizados' : 'Servicios solicitados'}
            <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-[10px] flex items-center justify-center">3</span>
          </h3>
          
          <div className="space-y-3">
            {[
              { id: 1, title: 'Montaje de estantería IKEA', worker: 'Alex G.', date: '22 Feb', amount: 45, status: isWorker ? 'Pagado' : 'Pagado' },
              { id: 2, title: 'Ayuda mudanza puntual', worker: 'Mario R.', date: 'Hoy', amount: 80, status: isWorker ? 'En proceso' : 'Pendiente de pago' },
              { id: 3, title: 'Limpieza fin de obra', worker: 'Lucía B.', date: 'Pendiente', amount: 60, status: isWorker ? 'Pendiente' : 'En revisión' },
            ].map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${item.status.includes('Pagado') ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {ICONS.Payments}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-2">
                      {item.date} • {!isWorker && `Trabajador: ${item.worker}`} {isWorker && 'Servicio finalizado'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 border-t sm:border-t-0 pt-3 sm:pt-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    item.status.includes('Pagado') ? 'bg-emerald-50 text-emerald-600' : 
                    item.status.includes('proceso') ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {item.status}
                  </span>
                  <p className="font-bold text-gray-900">{item.amount}€</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Financial Highlights */}
        <div className="space-y-6">
          {isWorker ? (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 px-1">Pagos a recibir</h3>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Saldo disponible</p>
                  <h4 className="text-4xl font-black text-blue-600">125,00€</h4>
                </div>
                <div className="pt-6 border-t border-gray-50 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Próximo pago programado</span>
                    <span className="font-bold text-gray-900">28 Feb</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Importe bruto</span>
                    <span className="font-bold text-gray-900">125,00€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Comisión YaVoy</span>
                    <span className="font-bold text-emerald-600">0,00€</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-100 font-bold text-lg">
                    <span className="text-gray-900">Importe neto</span>
                    <span className="text-blue-600">125,00€</span>
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">Solicitar retiro</button>
              </div>

              <div className="bg-blue-600 p-6 rounded-3xl text-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  {ICONS.Check} Histórico mensual
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-100 text-[10px] font-bold uppercase">Realizados</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-[10px] font-bold uppercase">Total Cobrado</p>
                    <p className="text-2xl font-bold">452€</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 px-1">Pagos a realizar</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border-2 border-blue-600 shadow-lg shadow-blue-600/5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase mb-2 inline-block">Urgente</span>
                      <h4 className="font-bold text-gray-900">Ayuda mudanza puntual</h4>
                    </div>
                    <p className="text-xl font-bold text-gray-900">80,00€</p>
                  </div>
                  <div className="space-y-2 border-t border-gray-50 pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Trabajador: Mario R.</span>
                      <span className="text-gray-900 font-medium">80,00€</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Seguro de servicio</span>
                      <span className="text-gray-900 font-medium">Incluido</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-2 text-blue-600">
                      <span>Total a pagar</span>
                      <span>80,00€</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    {ICONS.Check} Pagar trabajo
                  </button>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    {ICONS.Clock} Histórico mensual
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase">Solicitados</p>
                      <p className="text-2xl font-bold text-gray-900">4</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase">Total Pagado</p>
                      <p className="text-2xl font-bold text-gray-900">225€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
