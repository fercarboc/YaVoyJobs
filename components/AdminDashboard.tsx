import React, { useEffect, useState } from 'react';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { supabase } from '../services/supabase';
import { Icons } from './Icons';
import { COLORS } from "@/constants/colors";

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

interface SectorStats {
  sector: string;
  jobCount: number;
  acceptedCount: number;
  companyCount: number;
}

interface PlatformSettings {
  free_period_enabled: boolean;
  free_period_start: string;
  free_period_end: string;
  bono_5_price: number;
  bono_10_price: number;
  bono_20_price: number;
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
  const [sectorStats, setSectorStats] = useState<SectorStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'sectors' | 'users' | 'revenue' | 'settings'>('overview');
  const [settings, setSettings] = useState<PlatformSettings>({
    free_period_enabled: false,
    free_period_start: '',
    free_period_end: '',
    bono_5_price: 20,
    bono_10_price: 35,
    bono_20_price: 60
  });

  useEffect(() => {
    loadStats();
    loadSectorStats();
    loadSettings();
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

  const loadSectorStats = async () => {
    try {
      const { data: jobs } = await supabase
        .from('VoyJobs')
        .select('category');

      const { data: applications } = await supabase
        .from('VoyJobApplications')
        .select('job_id, status');

      const { data: companies } = await supabase
        .from('VoyUsers')
        .select('company_sector, role')
        .eq('role', 'COMPANY');

      // Agrupar por sector
      const sectorMap: Record<string, SectorStats> = {};
      
      jobs?.forEach(job => {
        const sector = job.category || 'OTROS';
        if (!sectorMap[sector]) {
          sectorMap[sector] = { sector, jobCount: 0, acceptedCount: 0, companyCount: 0 };
        }
        sectorMap[sector].jobCount++;
      });

      // Contar aplicaciones aceptadas por sector
      const jobIds = jobs?.map(j => (j as any).id) || [];
      applications?.forEach(app => {
        if (app.status === 'ACCEPTED' && jobIds.includes(app.job_id)) {
          const job = jobs?.find((j: any) => j.id === app.job_id);
          const sector = (job as any)?.category || 'OTROS';
          if (sectorMap[sector]) {
            sectorMap[sector].acceptedCount++;
          }
        }
      });

      // Contar empresas por sector
      companies?.forEach(company => {
        const sector = company.company_sector || 'OTROS';
        if (!sectorMap[sector]) {
          sectorMap[sector] = { sector, jobCount: 0, acceptedCount: 0, companyCount: 0 };
        }
        sectorMap[sector].companyCount++;
      });

      setSectorStats(Object.values(sectorMap));
    } catch (error) {
      console.error('Error loading sector stats:', error);
    }
  };

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('VoyPlatformSettings')
        .select('*')
        .single();
      
      if (data) {
        setSettings(data);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveSettings = async () => {
    try {
      const { error } = await supabase
        .from('VoyPlatformSettings')
        .upsert(settings);
      
      if (error) throw error;
      alert('Configuración guardada exitosamente');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error al guardar configuración');
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
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <Icons.LayoutDashboard size={32} className="text-brand-600" />
        Panel de Administración
      </h2>

      {/* Tabs Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
            activeTab === 'overview' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-800'
          }`}
        >
          <Icons.LayoutDashboard size={18} />
          Resumen
        </button>
        <button
          onClick={() => setActiveTab('sectors')}
          className={`px-6 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
            activeTab === 'sectors' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-800'
          }`}
        >
          <Icons.BarChart size={18} />
          Sectores
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
            activeTab === 'users' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-800'
          }`}
        >
          <Icons.Users size={18} />
          Usuarios
        </button>
        <button
          onClick={() => setActiveTab('revenue')}
          className={`px-6 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
            activeTab === 'revenue' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-800'
          }`}
        >
          <Icons.DollarSign size={18} />
          Ingresos
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
            activeTab === 'settings' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-800'
          }`}
        >
          <Icons.Shield size={18} />
          Configuración
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
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
      )}

      {/* Sectors Tab */}
      {activeTab === 'sectors' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Estadísticas por Sector</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Anuncios</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aceptados</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresas</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tasa Éxito</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sectorStats.map((stat, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{stat.sector}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{stat.jobCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-emerald-600 font-semibold">{stat.acceptedCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{stat.companyCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                          {stat.jobCount > 0 ? Math.round((stat.acceptedCount / stat.jobCount) * 100) : 0}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <Icons.User size={32} className="mb-3 opacity-80" />
              <p className="text-sm opacity-90 mb-1">Trabajadores Activos</p>
              <p className="text-4xl font-black">{stats.totalWorkers}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
              <Icons.Building size={32} className="mb-3 opacity-80" />
              <p className="text-sm opacity-90 mb-1">Empresas Registradas</p>
              <p className="text-4xl font-black">{stats.totalCompanies}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
              <Icons.Users size={32} className="mb-3 opacity-80" />
              <p className="text-sm opacity-90 mb-1">Particulares</p>
              <p className="text-4xl font-black">{stats.totalParticulars}</p>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Tab */}
      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Ingresos por Comisiones</h3>
              <p className="text-4xl font-black text-emerald-600 mb-2">{stats.totalRevenue.toFixed(2)}€</p>
              <p className="text-sm text-gray-500">{stats.totalPayments} pagos procesados</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Ingresos por Bonos</h3>
              <p className="text-4xl font-black text-purple-600 mb-2">{stats.subscriptionRevenue.toFixed(2)}€</p>
              <p className="text-sm text-gray-500">{stats.activeSubscriptions} bonos activos</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Ingresos Totales</h3>
            <p className="text-5xl font-black text-brand-600">
              {(stats.totalRevenue + stats.subscriptionRevenue).toFixed(2)}€
            </p>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-6">Configuración de la Plataforma</h3>
            
            {/* Free Period Settings */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icons.Gift className="text-brand-500" />
                Período Gratuito
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Input
                    type="checkbox"
                    id="free_period"
                    checked={settings.free_period_enabled}
                    onChange={e => setSettings({ ...settings, free_period_enabled: e.target.checked })}
                    style={{ width: 20, height: 20 }}
                  />
                  <label htmlFor="free_period" className="font-medium text-gray-700">Habilitar período gratuito para nuevos usuarios</label>
                </div>
                
                {settings.free_period_enabled && (
                  <div className="grid grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio</label>
                      <Input
                        type="date"
                        value={settings.free_period_start}
                        onChange={e => setSettings({ ...settings, free_period_start: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Fin</label>
                      <Input
                        type="date"
                        value={settings.free_period_end}
                        onChange={e => setSettings({ ...settings, free_period_end: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing Settings */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icons.DollarSign className="text-brand-500" />
                Precios de Bonos
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bono 5 Anuncios</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={settings.bono_5_price}
                      onChange={e => setSettings({ ...settings, bono_5_price: parseFloat(e.target.value) })}
                      min={0}
                      step={0.01}
                      required
                    />
                    <span className="text-gray-600 font-medium">€</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bono 10 Anuncios</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={settings.bono_10_price}
                      onChange={e => setSettings({ ...settings, bono_10_price: parseFloat(e.target.value) })}
                      min={0}
                      step={0.01}
                      required
                    />
                    <span className="text-gray-600 font-medium">€</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bono 20 Anuncios</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={settings.bono_20_price}
                      onChange={e => setSettings({ ...settings, bono_20_price: parseFloat(e.target.value) })}
                      min={0}
                      step={0.01}
                      required
                    />
                    <span className="text-gray-600 font-medium">€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button onClick={saveSettings} style={{ padding: '12px 24px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icons.CheckCircle size={20} />
                Guardar Configuración
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
