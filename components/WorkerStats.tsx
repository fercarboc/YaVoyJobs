import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

interface WorkerStatsProps {
  userId: string;
}

interface JobStats {
  totalJobs: number;
  acceptedJobs: number;
  successRate: number;
}

export const WorkerStats: React.FC<WorkerStatsProps> = ({ userId }) => {
  const [stats, setStats] = useState<JobStats>({
    totalJobs: 0,
    acceptedJobs: 0,
    successRate: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, [userId]);

  const loadStats = async () => {
    try {
      // Get all applications for this worker
      const { data: applications, error } = await supabase
        .from('VoyApplications')
        .select('status')
        .eq('worker_id', userId);

      if (error) throw error;

      const totalJobs = applications?.length || 0;
      const acceptedJobs = applications?.filter(app => app.status === 'accepted').length || 0;
      const successRate = totalJobs > 0 ? Math.round((acceptedJobs / totalJobs) * 100) : 0;

      setStats({
        totalJobs,
        acceptedJobs,
        successRate
      });
    } catch (error) {
      console.error('Error loading worker stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Mis Estadísticas</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">{stats.totalJobs}</p>
          <p className="text-sm text-gray-600">Postulaciones</p>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{stats.acceptedJobs}</p>
          <p className="text-sm text-gray-600">Aceptadas</p>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{stats.successRate}%</p>
          <p className="text-sm text-gray-600">Tasa de Éxito</p>
        </div>
      </div>

      {stats.acceptedJobs > 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            ¡Excelente trabajo! Has sido aceptado en {stats.acceptedJobs} {stats.acceptedJobs === 1 ? 'trabajo' : 'trabajos'}.
          </p>
        </div>
      )}
    </div>
  );
};
