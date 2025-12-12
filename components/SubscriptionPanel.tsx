import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { 
  SUBSCRIPTION_PLANS, 
  SubscriptionType, 
  Subscription,
  getActiveSubscription,
  getCompanySubscriptions 
} from '../services/subscriptionService';

interface SubscriptionPanelProps {
  userId: string;
  onPurchase: (type: SubscriptionType) => void;
}

export function SubscriptionPanel({ userId, onPurchase }: SubscriptionPanelProps) {
  const [activeSubscription, setActiveSubscription] = useState<Subscription | null>(null);
  const [allSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubscriptions();
  }, [userId]);

  const loadSubscriptions = async () => {
    setLoading(true);
    try {
      const [active, all] = await Promise.all([
        getActiveSubscription(userId),
        getCompanySubscriptions(userId)
      ]);
      setActiveSubscription(active);
      setAllSubscriptions(all);
    } catch (err) {
      console.error('Error loading subscriptions:', err);
    } finally {
      setLoading(false);
    }
  };

  const getDaysRemaining = (endDate: string): number => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">Activo</span>;
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">Pendiente</span>;
      case 'expired':
        return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-semibold">Expirado</span>;
      case 'cancelled':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">Cancelado</span>;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Active Subscription Banner */}
      {activeSubscription && (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-500 rounded-full p-3">
              <Icons.Check size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-900">Bono Activo</h3>
              <p className="text-green-700 font-semibold">
                Plan {SUBSCRIPTION_PLANS[activeSubscription.subscription_type].name}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {getDaysRemaining(activeSubscription.end_date!)} días restantes - Vence el{' '}
                {new Date(activeSubscription.end_date!).toLocaleDateString('es-ES')}
              </p>
              <div className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg inline-flex items-center">
                <Icons.Check size={16} className="mr-2" />
                Contrataciones ilimitadas sin comisión
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plans */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Bonos de Empresa</h2>
        <p className="text-gray-600 mb-6">
          Renueva tu bono antes de que expire para seguir ahorrando
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(SUBSCRIPTION_PLANS).map(([key, plan]) => (
            <div
              key={key}
              className={`border-2 rounded-lg p-6 ${
                key === 'semester' ? 'border-purple-500 relative' : 'border-gray-200'
              }`}
            >
              {key === 'semester' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Recomendado
                </div>
              )}
              <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}€</div>
              {'savings' in plan && plan.savings && (
                <p className="text-sm text-green-600 font-semibold mb-4">{plan.savings}</p>
              )}
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contrataciones ilimitadas</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ahorra desde la 2ª contratación</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predecible y sin sorpresas</span>
                </li>
              </ul>
              <button
                onClick={() => onPurchase(key as SubscriptionType)}
                className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Activar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
          <Icons.Info size={20} className="mr-2" />
          ¿Por qué un bono?
        </h3>
        <div className="text-sm text-blue-800 space-y-1">
          <p><strong>Sin bono:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>15€ por cada contratación</li>
            <li>5 contrataciones = 75€</li>
            <li>10 contrataciones = 150€</li>
          </ul>
          <p className="mt-3"><strong>Con bono mensual (15€):</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>✓ Contrataciones ilimitadas sin comisión</li>
            <li>✓ Ahorra desde la 2ª contratación</li>
            <li>✓ Predecible y sin sorpresas</li>
          </ul>
        </div>
      </div>

      {/* History */}
      {allSubscriptions.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mb-3">Historial de Bonos</h3>
          <div className="space-y-2">
            {allSubscriptions.map((sub) => (
              <div
                key={sub.id}
                className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{SUBSCRIPTION_PLANS[sub.subscription_type].name}</p>
                  <p className="text-sm text-gray-500">
                    {sub.created_at ? new Date(sub.created_at).toLocaleDateString('es-ES') : '-'}
                  </p>
                </div>
                <div className="text-right">
                  {getStatusBadge(sub.status)}
                  <p className="text-lg font-bold text-gray-900 mt-1">{sub.amount}€</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
