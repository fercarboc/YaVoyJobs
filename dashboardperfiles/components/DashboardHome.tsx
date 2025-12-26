
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area 
} from 'recharts';
import { 
  TrendingUp, 
  Briefcase, 
  CheckCircle, 
  ShoppingBag, 
  CreditCard, 
  AlertTriangle,
  Star,
  Clock,
  Wallet,
  // Added missing Gift import
  Gift
} from 'lucide-react';

import { DashboardUserRole } from '../dashboardTypes';

interface DashboardHomeProps {
  role: DashboardUserRole;
}

const data = [
  { name: 'Chamartín', jobs: 400, sales: 240 },
  { name: 'Salamanca', jobs: 300, sales: 139 },
  { name: 'Retiro', jobs: 200, sales: 980 },
  { name: 'Centro', jobs: 278, sales: 390 },
  { name: 'Latina', jobs: 189, sales: 480 },
  { name: 'Tetuán', jobs: 239, sales: 380 },
];

const revenueData = [
  { month: 'Jan', income: 1200, balance: 400 },
  { month: 'Feb', income: 1500, balance: 700 },
  { month: 'Mar', income: 1100, balance: 900 },
  { month: 'Apr', income: 1800, balance: 1200 },
  { month: 'May', income: 2100, balance: 1800 },
  { month: 'Jun', income: 2400, balance: 2100 },
];

export const DashboardHome: React.FC<DashboardHomeProps> = ({ role }) => {
  const isWorker = role === DashboardUserRole.TRABAJADOR;

  const cards = isWorker ? [
    { title: 'Saldo Disponible', value: '€842.50', icon: <Wallet />, color: 'blue' },
    { title: 'Tareas Realizadas', value: '24', icon: <CheckCircle />, color: 'green' },
    { title: 'Valoración Pro', value: '4.9', icon: <Star />, color: 'amber' },
    { title: 'Horas Este Mes', value: '86h', icon: <Clock />, color: 'indigo' },
    { title: 'Incentivos Bonus', value: '€45', icon: <Gift />, color: 'emerald' },
    { title: 'Alertas', value: '1', icon: <AlertTriangle />, color: 'rose' },
  ] : [
    { title: 'Trabajos Activos', value: '12', icon: <Briefcase />, color: 'blue' },
    { title: 'Completados', value: '145', icon: <CheckCircle />, color: 'green' },
    { title: 'Ventas Market', value: '€2.4k', icon: <ShoppingBag />, color: 'purple' },
    { title: 'Ingresos Mes', value: '€4,850', icon: <CreditCard />, color: 'indigo' },
    { title: 'Incentivos', value: '€120', icon: <TrendingUp />, color: 'emerald' },
    { title: 'Incidencias', value: '2', icon: <AlertTriangle />, color: 'rose' },
  ];

  return (
    <div className="space-y-6">
      {/* Alerts Banner */}
      <div className="flex flex-col gap-3">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-sm font-bold text-amber-800">
              {isWorker ? 'Próxima Tarea: Reparación en Chamberí' : 'Acción requerida: Pagos pendientes'}
            </h4>
            <p className="text-sm text-amber-700">
              {isWorker ? 'Comienza en 45 minutos. Asegúrate de marcar el trayecto al salir.' : 'Tienes 2 facturas pendientes de validación para liberar fondos.'}
            </p>
          </div>
          <button className="ml-auto text-sm font-semibold text-amber-800 underline">
            {isWorker ? 'Ver Mapa' : 'Gestionar'}
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-${card.color}-50 text-${card.color}-600`}>
              {card.icon}
            </div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{card.title}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">{isWorker ? 'Ganancias por Barrio' : 'Actividad por Barrio'}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey={isWorker ? "sales" : "jobs"} fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} name={isWorker ? "Ingresos" : "Trabajos"} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">{isWorker ? 'Evolución de Ingresos' : 'Ingresos vs Gastos'}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                <Tooltip />
                <Area type="monotone" dataKey="income" stroke="#3b82f6" fillOpacity={1} fill="url(#colorIncome)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
