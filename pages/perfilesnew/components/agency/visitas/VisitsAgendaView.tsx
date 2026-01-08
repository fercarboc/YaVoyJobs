
import React, { useState, useMemo } from 'react';
import { ICONS } from '../../../constants';
import { Visit, VisitStatus } from '../../../types';

const MOCK_VISITS: Visit[] = [
  // Hoy y alrededores para ver el calendario lleno
  { id: '1', propertyTitle: 'Piso Arganzuela', address: 'Batalla del Salado, 12', date: '2024-03-01', time: '10:00', clientName: 'Juan Pérez', clientPhone: '600000001', clientEmail: 'juan@ex.com', status: VisitStatus.CONFIRMED, agentName: 'Carlos M.' },
  { id: '2', propertyTitle: 'Ático Usera', address: 'Marcelo Usera, 88', date: '2024-03-01', time: '12:30', clientName: 'Marta García', clientPhone: '600000002', clientEmail: 'marta@ex.com', status: VisitStatus.SCHEDULED, agentName: 'Elena R.' },
  { id: '3', propertyTitle: 'Local Gran Vía', address: 'Gran Vía, 45', date: '2024-03-05', time: '09:30', clientName: 'Roberto Solís', clientPhone: '600000003', clientEmail: 'roberto@biz.es', status: VisitStatus.SCHEDULED, agentName: 'Carlos M.' },
  { id: '4', propertyTitle: 'Chalet Arturo Soria', address: 'Arturo Soria, 120', date: '2024-03-05', time: '16:00', clientName: 'Ana Belén', clientPhone: '622000111', clientEmail: 'ana@ex.com', status: VisitStatus.CONFIRMED, agentName: 'Elena R.' },
  { id: '5', propertyTitle: 'Piso Malasaña', address: 'Pez, 10', date: '2024-03-12', time: '11:00', clientName: 'Sergi López', clientPhone: '633445566', clientEmail: 'sergi@ex.com', status: VisitStatus.COMPLETED, agentName: 'Carlos M.' },
  { id: '6', propertyTitle: 'Loft Delicias', address: 'Ferrocarril, 2', date: '2024-03-15', time: '18:00', clientName: 'Laura Sanz', clientPhone: '677889900', clientEmail: 'laura@ex.com', status: VisitStatus.CANCELLED, agentName: 'Elena R.' },
  { id: '7', propertyTitle: 'Oficina Centro', address: 'Alcalá, 1', date: '2024-03-15', time: '10:00', clientName: 'IBEX Corp', clientPhone: '912344556', clientEmail: 'info@ibex.com', status: VisitStatus.SCHEDULED, agentName: 'Carlos M.' },
  { id: '8', propertyTitle: 'Estudio Lavapiés', address: 'Argumosa, 24', date: '2024-03-20', time: '13:00', clientName: 'Kevin Cook', clientPhone: '600112233', clientEmail: 'kevin@ex.com', status: VisitStatus.CONFIRMED, agentName: 'Elena R.' },
  { id: '9', propertyTitle: 'Piso Arganzuela', address: 'Batalla del Salado, 12', date: '2024-03-20', time: '17:00', clientName: 'Maria José', clientPhone: '611223344', clientEmail: 'mj@ex.com', status: VisitStatus.SCHEDULED, agentName: 'Carlos M.' },
  { id: '10', propertyTitle: 'Ático Retiro', address: 'Menéndez Pelayo, 5', date: '2024-03-25', time: '11:30', clientName: 'Fernando T.', clientPhone: '699887766', clientEmail: 'fer@ex.com', status: VisitStatus.CONFIRMED, agentName: 'Elena R.' },
  { id: '11', propertyTitle: 'Local Chueca', address: 'Libertad, 14', date: '2024-03-25', time: '16:30', clientName: 'Bar El Tigre', clientPhone: '600111222', clientEmail: 'tigre@ex.com', status: VisitStatus.SCHEDULED, agentName: 'Carlos M.' },
  { id: '12', propertyTitle: 'Piso Salamanca', address: 'Serrano, 100', date: '2024-03-25', time: '18:00', clientName: 'Inversiones G.', clientPhone: '622333444', clientEmail: 'inv@ex.com', status: VisitStatus.SCHEDULED, agentName: 'Elena R.' },
  { id: '13', propertyTitle: 'Dúplex Sanchinarro', address: 'Príncipe Carlos, 22', date: '2024-03-28', time: '09:00', clientName: 'Rosa Melano', clientPhone: '600998877', clientEmail: 'rosa@ex.com', status: VisitStatus.SCHEDULED, agentName: 'Carlos M.' },
  { id: '14', propertyTitle: 'Piso Chamberí', address: 'Ponzano, 44', date: '2024-03-25', time: '09:00', clientName: 'Ignacio H.', clientPhone: '611000999', clientEmail: 'ig@ex.com', status: VisitStatus.NOSHOW, agentName: 'Elena R.' },
];

export const VisitsAgendaView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedVisit, setSelectedVisit] = useState<Visit | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // Marzo 2024 para el mock

  // Lógica del calendario
  const monthDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    // Ajuste para lunes como primer día (JS: 0=Dom, 1=Lun...)
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalSlots = 42; // 6 semanas * 7 días
    
    const days = [];
    
    // Días mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startOffset; i > 0; i--) {
      days.push({ day: prevMonthLastDay - i + 1, isCurrentMonth: false, fullDate: '' });
    }
    
    // Días mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({ day: i, isCurrentMonth: true, fullDate: dateStr });
    }
    
    // Días mes siguiente
    let nextDay = 1;
    while (days.length < totalSlots) {
      days.push({ day: nextDay++, isCurrentMonth: false, fullDate: '' });
    }
    
    return days;
  }, [currentDate]);

  const getStatusStyle = (status: VisitStatus) => {
    switch (status) {
      case VisitStatus.CONFIRMED: return 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100';
      case VisitStatus.SCHEDULED: return 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100';
      case VisitStatus.COMPLETED: return 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100';
      case VisitStatus.CANCELLED: return 'bg-red-50 text-red-700 border-red-100 hover:bg-red-100';
      case VisitStatus.NOSHOW: return 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const goToday = () => setCurrentDate(new Date(2024, 2, 1)); // En producción sería new Date()

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-12">
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Visitas / Agenda</h2>
          <p className="text-gray-500 mt-1">Gestión profesional de citas inmobiliarias</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border border-gray-200 p-1 rounded-xl flex shadow-sm">
            <button 
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'calendar' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {ICONS.Calendar} Calendario
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {ICONS.List} Lista
            </button>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            {ICONS.Add} Nueva visita
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === 'calendar' ? (
        <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm overflow-hidden flex flex-col min-h-[800px]">
          {/* Calendar Header Controls */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-black text-gray-900 capitalize">
                {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button onClick={prevMonth} className="p-2 hover:bg-gray-50 transition-colors border-r border-gray-100 text-gray-400 hover:text-blue-600">{ICONS.Chevron}</button>
                <button onClick={goToday} className="px-4 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">Hoy</button>
                <button onClick={nextMonth} className="p-2 hover:bg-gray-50 transition-colors rotate-180 border-l border-gray-100 text-gray-400 hover:text-blue-600">{ICONS.Chevron}</button>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
               <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1.5 bg-white border border-gray-100 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Programada
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ml-2"></span> Confirmada
               </div>
            </div>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 border-b border-gray-100">
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map(d => (
              <div key={d} className="py-3 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50/50">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 flex-1">
            {monthDays.map((dayObj, idx) => {
              const dayVisits = MOCK_VISITS.filter(v => v.date === dayObj.fullDate);
              return (
                <div 
                  key={idx} 
                  onClick={() => dayObj.isCurrentMonth && setShowForm(true)}
                  className={`min-h-[120px] p-2 border-r border-b border-gray-100 transition-all ${dayObj.isCurrentMonth ? 'bg-white hover:bg-blue-50/30 cursor-pointer' : 'bg-gray-50/40 opacity-40 select-none'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-black ${dayObj.isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}`}>
                      {dayObj.day}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    {dayVisits.slice(0, 3).map(visit => (
                      <div 
                        key={visit.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVisit(visit);
                        }}
                        className={`px-2 py-1.5 rounded-lg border text-[10px] font-bold truncate transition-all shadow-sm ${getStatusStyle(visit.status)}`}
                      >
                        <span className="mr-1.5 opacity-60">{visit.time}</span>
                        {visit.propertyTitle}
                      </div>
                    ))}
                    {dayVisits.length > 3 && (
                      <div className="text-[9px] font-black text-blue-600 px-2 pt-1 uppercase">
                        + {dayVisits.length - 3} más
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Lista - Se mantiene según requisito */
        <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha / Hora</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Inmueble / Dirección</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interesado</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MOCK_VISITS.map(visit => (
                  <tr key={visit.id} className="hover:bg-gray-50/30 transition-colors cursor-pointer" onClick={() => setSelectedVisit(visit)}>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm">{visit.date}</span>
                        <span className="text-xs text-blue-600 font-bold">{visit.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col max-w-[250px]">
                        <span className="font-bold text-gray-900 text-sm truncate">{visit.propertyTitle}</span>
                        <span className="text-[10px] text-gray-400 truncate">{visit.address}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">{visit.clientName}</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{visit.clientPhone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border ${
                        visit.status === VisitStatus.CONFIRMED ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        visit.status === VisitStatus.SCHEDULED ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        visit.status === VisitStatus.COMPLETED ? 'bg-gray-50 text-gray-600 border-gray-100' :
                        'bg-red-50 text-red-600 border-red-100'
                      }`}>
                        {visit.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1 justify-end ml-auto">
                        Ver {ICONS.Chevron}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Visit Detail Drawer (Sin cambios de lógica, solo mejoras visuales sutiles) */}
      {selectedVisit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white h-full w-full max-w-md shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto">
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                   <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border mb-2 inline-block ${
                      selectedVisit.status === VisitStatus.CONFIRMED ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      selectedVisit.status === VisitStatus.SCHEDULED ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      'bg-gray-50 text-gray-600 border-gray-100'
                   }`}>
                    {selectedVisit.status}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">Detalle de la Visita</h3>
                  <p className="text-sm text-gray-500 mt-1">Ref: #{selectedVisit.id}</p>
                </div>
                <button onClick={() => setSelectedVisit(null)} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  {ICONS.Chevron}
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Inmueble</h4>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white overflow-hidden shadow-sm flex-shrink-0">
                      <img src={`https://picsum.photos/100/100?random=${selectedVisit.id}`} className="w-full h-full object-cover" alt="Inmueble" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900">{selectedVisit.propertyTitle}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{selectedVisit.address}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Fecha</p>
                    <p className="font-bold text-gray-900">{selectedVisit.date}</p>
                  </div>
                  <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Hora</p>
                    <p className="font-bold text-blue-600">{selectedVisit.time}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Interesado</h4>
                  <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{selectedVisit.clientName}</p>
                      <p className="text-xs text-gray-500">{selectedVisit.clientEmail}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-100">Llamar</button>
                      <button className="flex-1 bg-emerald-50 text-emerald-600 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-100">WhatsApp</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 space-y-3">
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">Marcar como Realizada</button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-50 text-gray-500 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all">Editar visita</button>
                  <button className="bg-red-50 text-red-600 py-3 rounded-xl text-sm font-bold hover:bg-red-100 transition-all">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Create Form - Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-gray-900">Programar Nueva Visita</h3>
                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">{ICONS.Chevron}</button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 px-1">Seleccionar Inmueble</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-bold outline-none focus:ring-2 focus:ring-blue-600/10">
                    <option>Piso luminoso Arganzuela</option>
                    <option>Ático reformado Usera</option>
                    <option>Local comercial Gran Vía</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 px-1">Fecha</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-600/10" defaultValue="2024-03-01" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 px-1">Hora</label>
                    <input type="time" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-600/10" />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Datos del Interesado</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 rounded-xl border border-white bg-white outline-none focus:ring-2 focus:ring-blue-600/10 shadow-sm" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 rounded-xl border border-white bg-white outline-none focus:ring-2 focus:ring-blue-600/10 shadow-sm" />
                      <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-white bg-white outline-none focus:ring-2 focus:ring-blue-600/10 shadow-sm" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1">
                  <input type="checkbox" id="reminder" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600/10" defaultChecked />
                  <label htmlFor="reminder" className="text-sm font-medium text-gray-700">Enviar recordatorio automático al cliente</label>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-50 text-gray-500 py-4 rounded-2xl font-bold transition-all hover:bg-gray-100">Cancelar</button>
                <button onClick={() => setShowForm(false)} className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">Programar Visita</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
