import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { Icons } from './Icons';

interface FinancialPanelProps {
  userId: string;
  userRole: 'COMPANY' | 'PARTICULAR';
}

interface Payment {
  id: string;
  amount: number;
  commission: number;
  payment_type: string;
  status: string;
  created_at: string;
  completed_at: string | null;
  worker: {
    name: string;
  };
}

export const FinancialPanel: React.FC<FinancialPanelProps> = ({ userId, userRole }) => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCommissions, setTotalCommissions] = useState(0);

  useEffect(() => {
    loadPayments();
  }, [userId]);

  const loadPayments = async () => {
    try {
      const { data, error } = await supabase
        .from('VoyPayments')
        .select(`
          *,
          worker:VoyUsers!VoyPayments_worker_id_fkey(name)
        `)
        .eq('employer_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPayments(data || []);

      // Calculate total commissions paid
      const total = (data || [])
        .filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + p.commission, 0);
      
      setTotalCommissions(total);
    } catch (error) {
      console.error('Error loading payments:', error);
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
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Mis Pagos y Comisiones</h3>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Comisiones Pagadas</p>
          <p className="text-2xl font-bold text-purple-600">{totalCommissions.toFixed(2)}€</p>
        </div>
      </div>

      {payments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Icons.Euro size={48} className="mx-auto mb-2 opacity-50" />
          <p>No tienes pagos registrados aún</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4">Fecha</th>
                <th className="text-left py-2 px-4">Trabajador</th>
                <th className="text-right py-2 px-4">Comisión</th>
                <th className="text-center py-2 px-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {new Date(payment.created_at).toLocaleDateString('es-ES')}
                  </td>
                  <td className="py-3 px-4">{payment.worker.name}</td>
                  <td className="py-3 px-4 text-right font-semibold">
                    {payment.commission === 0 ? (
                      <span className="text-green-600">0€ (bono activo)</span>
                    ) : (
                      <span>{payment.commission.toFixed(2)}€</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {payment.status === 'completed' ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Completado
                      </span>
                    ) : payment.status === 'pending' ? (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        Pendiente
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        Fallido
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
