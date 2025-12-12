import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { Icons } from './Icons';
import { getActiveSubscription, getCompanySubscriptions, type Subscription } from '../services/subscriptionService';

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
  const [activeSubscription, setActiveSubscription] = useState<Subscription | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    loadPayments();
    if (userRole === 'COMPANY') {
      loadSubscriptions();
    }
  }, [userId, userRole]);

  const loadSubscriptions = async () => {
    try {
      const active = await getActiveSubscription(userId);
      const all = await getCompanySubscriptions(userId);
      setActiveSubscription(active);
      setSubscriptions(all);
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    }
  };

  const loadPayments = async () => {
    try {
      const { data, error } = await supabase
        .from('VoyPayments')
        .select('*')
        .eq('employer_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

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
    <div className="space-y-6">
      {/* Active Subscription Banner */}
      {userRole === 'COMPANY' && activeSubscription && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-500 rounded-full p-2">
              <Icons.Check size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-green-900">Bono Activo</h4>
              <p className="text-sm text-green-700 mt-1">
                Bono {activeSubscription.subscription_type} - 0€ por contratación
              </p>
              <p className="text-xs text-green-600 mt-2">
                Válido hasta: {new Date(activeSubscription.end_date!).toLocaleDateString('es-ES')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-700">{activeSubscription.amount}€</p>
              <p className="text-xs text-green-600">pagado</p>
            </div>
          </div>
        </div>
      )}

      {/* Subscription History for Companies */}
      {userRole === 'COMPANY' && subscriptions.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Historial de Bonos</h3>
          <div className="space-y-2">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium capitalize">{sub.subscription_type}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(sub.created_at).toLocaleDateString('es-ES')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{sub.amount}€</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    sub.status === 'active' ? 'bg-green-100 text-green-800' :
                    sub.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {sub.status === 'active' ? 'Activo' : 
                     sub.status === 'pending' ? 'Pendiente' : 
                     sub.status === 'expired' ? 'Expirado' : 'Cancelado'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payments Panel */}
      <div className="bg-white rounded-lg shadow-md p-6">{loading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      ) : (
        <>
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
                  <td className="py-3 px-4">Trabajador</td>
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
        </>
      )}
      </div>
    </div>
  );
};
