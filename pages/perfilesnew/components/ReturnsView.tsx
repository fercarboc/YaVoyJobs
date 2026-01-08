
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { Issue, IssueStatus, IssuePriority } from '../types';

export const ReturnsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'abiertas' | 'devoluciones' | 'historico'>('abiertas');
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const mockIssues: Issue[] = [
    { id: 'INC-44', clientId: '1', clientName: 'Mario R.', orderId: '#ORD-1015', productName: 'Kit Herramientas Pro', reason: 'Producto defectuoso', status: IssueStatus.NEW, priority: IssuePriority.HIGH, date: '25 Feb 2024', description: 'El taladro no carga correctamente. He intentado con varios enchufes y nada.', type: 'incidencia' },
    { id: 'DEV-12', clientId: '2', clientName: 'Lucía B.', orderId: '#ORD-1020', productName: 'Estantería Metálica', reason: 'No cabe en el espacio', status: IssueStatus.REVIEWING, priority: IssuePriority.MEDIUM, date: '22 Feb 2024', description: 'Las medidas reales no coinciden con las de la descripción por 2cm.', type: 'devolucion' },
  ];

  if (selectedIssue) {
    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 pb-12">
        <button onClick={() => setSelectedIssue(null)} className="text-sm font-bold text-gray-400 flex items-center gap-1 hover:text-gray-900 transition-colors">
          {ICONS.Chevron} Volver al listado
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                 <div className="flex justify-between items-start">
                    <div>
                       <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest mb-2 inline-block ${
                          selectedIssue.priority === IssuePriority.HIGH ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                       }`}>Prioridad {selectedIssue.priority}</span>
                       <h3 className="text-2xl font-black text-gray-900">{selectedIssue.reason}</h3>
                       <p className="text-sm text-gray-500 mt-1">Ref: {selectedIssue.id} • Pedido {selectedIssue.orderId}</p>
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase">{selectedIssue.date}</span>
                 </div>

                 <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Descripción del problema</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedIssue.description}</p>
                 </div>

                 <div className="space-y-4">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Mensajería con el cliente</h4>
                    <div className="bg-gray-50/50 p-4 rounded-[2rem] border border-gray-100 space-y-4 max-h-[300px] overflow-y-auto">
                       <div className="flex flex-col gap-2">
                          <div className="bg-white p-3 rounded-2xl border border-gray-100 self-start max-w-[80%] text-sm shadow-sm">
                             <p className="font-bold text-[10px] text-blue-600 mb-1">{selectedIssue.clientName}</p>
                             <p>{selectedIssue.description}</p>
                          </div>
                          <div className="bg-blue-600 p-3 rounded-2xl self-end max-w-[80%] text-sm text-white shadow-md">
                             <p className="font-bold text-[10px] text-blue-100 mb-1">Tú (Proveedor)</p>
                             <p>Hola {selectedIssue.clientName}, lamentamos las molestias. ¿Podrías enviarnos una foto del cable de carga?</p>
                          </div>
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <input type="text" placeholder="Escribe tu respuesta..." className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-600/20" />
                       <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-colors">Enviar</button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                 <h4 className="font-bold text-gray-900">Estado: <span className="text-blue-600 uppercase text-sm ml-2">{selectedIssue.status}</span></h4>
                 
                 <div className="space-y-3 pt-4 border-t border-gray-50">
                    <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors">Solicitar más info</button>
                    <button className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-bold text-xs hover:bg-emerald-100 transition-colors">Aprobar devolución</button>
                    <button className="w-full bg-amber-50 text-amber-600 py-3 rounded-xl font-bold text-xs hover:bg-amber-100 transition-colors">Proponer reemplazo</button>
                    <button className="w-full bg-gray-50 text-gray-400 py-3 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors">Rechazar (con motivo)</button>
                 </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="text-amber-500 shrink-0">{ICONS.Alert}</div>
                    <h4 className="font-bold">Emisión de Reembolso</h4>
                 </div>
                 <p className="text-gray-400 text-xs leading-relaxed mb-6">Si no puedes solucionar la incidencia mediante reemplazo, puedes emitir un reembolso total o parcial al cliente.</p>
                 <button className="w-full bg-white/10 text-white py-3 rounded-xl font-bold text-xs hover:bg-white/20 transition-colors border border-white/20">Gestionar Reembolso</button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Incidencias y Devoluciones</h2>
          <p className="text-gray-500 mt-1">Central de reclamaciones y atención al cliente post-venta</p>
        </div>
      </div>

      <div className="flex p-1 bg-gray-100 rounded-2xl w-full max-w-lg">
        <button onClick={() => setActiveTab('abiertas')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'abiertas' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Abiertas</button>
        <button onClick={() => setActiveTab('devoluciones')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'devoluciones' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Devoluciones</button>
        <button onClick={() => setActiveTab('historico')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'historico' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Histórico</button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID / Fecha</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cliente</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pedido / Producto</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Motivo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockIssues.map(issue => (
                <tr key={issue.id} className="hover:bg-gray-50/30 transition-colors cursor-pointer" onClick={() => setSelectedIssue(issue)}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                       <span className="font-bold text-gray-900 text-sm">#{issue.id}</span>
                       <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{issue.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{issue.clientName}</td>
                  <td className="px-6 py-4">
                     <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-900 truncate max-w-[150px]">{issue.productName}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{issue.orderId}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500">{issue.reason}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      issue.status === IssueStatus.NEW ? 'bg-blue-600 text-white' : 
                      issue.status === IssueStatus.REVIEWING ? 'bg-amber-50 text-amber-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {issue.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1 justify-end ml-auto">
                      Gestionar {ICONS.Chevron}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
