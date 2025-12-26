import React from 'react';
import { Icons } from '../../components/Icons';
import { theme } from "@/theme";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const AdminDashboard = () => {
  // Mock data for Admin demo
  const data = [
    { name: 'Lun', jobs: 40 },
    { name: 'Mar', jobs: 30 },
    { name: 'Mie', jobs: 20 },
    { name: 'Jue', jobs: 27 },
    { name: 'Vie', jobs: 18 },
    { name: 'Sab', jobs: 23 },
    { name: 'Dom', jobs: 34 },
  ];

  const pieData = [
    { name: 'Particulares', value: 400 },
    { name: 'Empresas', value: 300 },
    { name: 'Trabajadores', value: 300 },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Resumen semanal de actividad</p>
          </div>
          <button className="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition flex items-center gap-2">
            <Icons.ArrowRight size={18} />
            Ver reportes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-slate-500">Usuarios Activos</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">1.245</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-slate-500">Trabajos Total</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">328</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-slate-500">Volumen Transaccionado</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">€12.430</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-slate-900 mb-4">Actividad Semanal</h3>
            <div className="w-full h-64">
              <ResponsiveContainer>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ReTooltip />
                  <Legend />
                  <Bar dataKey="jobs" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-slate-900 mb-4">Usuarios por tipo</h3>
            <div className="w-full h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={theme.colors.primary[index % theme.colors.primary.length]} />
                    ))}
                  </Pie>
                  <ReTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
