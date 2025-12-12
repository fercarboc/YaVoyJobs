import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { Icons } from './Icons';

interface AdminStats {
  totalUsers: number;
  totalWorkers: number;
  totalCompanies: number;
  totalParticulars: number;
  totalJobs: number;
  totalApplications: number;
  totalPayments: number;
  totalRevenue: number;
  activeSubscriptions: number;
  subscriptionRevenue: number;
}

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalWorkers: 0,
    totalCompanies: 0,
    totalParticulars: 0,
    totalJobs: 0,
    totalApplications: 0,
    totalPayments: 0,
    totalRevenue: 0,
    activeSubscriptions: 0,
    subscriptionRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Get user stats
      const { data: users } = await supabase
        .from('VoyUsers')
        .select('role');

      const totalUsers = users?.length || 0;
      const totalWorkers = users?.filter(u => u.role === 'WORKER').length || 0;
      const totalCompanies = users?.filter(u => u.role === 'COMPANY').length || 0;
      const totalParticulars = users?.filter(u => u.role === 'PARTICULAR').length || 0;

      // Get job stats
      const { count: jobCount } = await supabase
        .from('VoyJobs')
        .select('*', { count: 'exact', head: true });

      // Get application stats
      const { count: appCount } = await supabase
        .from('VoyApplications')
        .select('*', { count: 'exact', head: true });

      // Get payment stats
      const { data: payments } = await supabase
        .from('VoyPayments')
        .select('commission, status');

      const totalPayments = payments?.length || 0;
      const totalRevenue = payments
        ?.filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + p.commission, 0) || 0;

      // Get subscription stats
      const { data: subscriptions } = await supabase
        .from('VoyCompanySubscriptions')
        .select('amount, status, end_date');

      const activeSubscriptions = subscriptions
        ?.filter(s => s.status === 'active' && new Date(s.end_date) > new Date()).length || 0;
      
      const subscriptionRevenue = subscriptions
        ?.filter(s => s.status === 'active')
        .reduce((sum, s) => sum + s.amount, 0) || 0;

      setStats({
        totalUsers,
        totalWorkers,
        totalCompanies,
        totalParticulars,
        totalJobs: jobCount || 0,
        totalApplications: appCount || 0,
        totalPayments,
        totalRevenue,
        activeSubscriptions,
        subscriptionRevenue
      });
    } catch (error) {
      console.error('Error loading admin stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Panel de Administración</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* User Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Usuarios</p>
              <p className="text-3xl font-bold text-purple-600">{stats.totalUsers}</p>
            </div>
            <Icons.Users size={40} className="text-purple-200" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Trabajadores</p>
              <p className="text-3xl font-bold text-blue-600">{stats.totalWorkers}</p>
            </div>
            <Icons.User size={40} className="text-blue-200" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Empresas</p>
              <p className="text-3xl font-bold text-green-600">{stats.totalCompanies}</p>
            </div>
            <Icons.Building size={40} className="text-green-200" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Particulares</p>
              <p className="text-3xl font-bold text-orange-600">{stats.totalParticulars}</p>
            </div>
            <Icons.User size={40} className="text-orange-200" />
          </div>
        </div>

        {/* Job Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Trabajos Publicados</p>
              <p className="text-3xl font-bold text-indigo-600">{stats.totalJobs}</p>
            </div>
            <Icons.Briefcase size={40} className="text-indigo-200" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Postulaciones</p>
              <p className="text-3xl font-bold text-cyan-600">{stats.totalApplications}</p>
            </div>
            <Icons.FileText size={40} className="text-cyan-200" />
          </div>
        </div>

        {/* Revenue Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ingresos Comisiones</p>
              <p className="text-3xl font-bold text-emerald-600">{stats.totalRevenue.toFixed(2)}€</p>
            </div>
            <Icons.Euro size={40} className="text-emerald-200" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Bonos Activos</p>
              <p className="text-3xl font-bold text-pink-600">{stats.activeSubscriptions}</p>
              <p className="text-xs text-gray-500 mt-1">{stats.subscriptionRevenue.toFixed(2)}€</p>
            </div>
            <Icons.Gift size={40} className="text-pink-200" />
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Resumen Financiero</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Pagos Procesados</p>
            <p className="text-2xl font-bold">{stats.totalPayments}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Ingresos por Comisiones</p>
            <p className="text-2xl font-bold text-green-600">{stats.totalRevenue.toFixed(2)}€</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Ingresos por Bonos</p>
            <p className="text-2xl font-bold text-purple-600">{stats.subscriptionRevenue.toFixed(2)}€</p>
          </div>
        </div>
      </div>
    </div>
  );
};
