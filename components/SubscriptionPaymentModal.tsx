import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePublishableKey =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  import.meta.env.STRIPE_PUBLISHABLE_KEY;

const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : Promise.resolve(null);

interface SubscriptionPaymentFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  planName: string;
  amount: number;
}

function SubscriptionPaymentForm({ onSuccess, onCancel, planName, amount }: SubscriptionPaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard?subscription=success`,
        },
        redirect: 'if_required'
      });

      if (submitError) {
        setError(submitError.message || 'Error procesando el pago');
        setIsProcessing(false);
      } else {
        onSuccess();
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error procesando el pago');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-purple-50 p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg text-purple-900">{planName}</h3>
        <p className="text-2xl font-bold text-purple-600 mt-1">{amount}€</p>
      </div>

      <PaymentElement />

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isProcessing}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
        >
          {isProcessing ? 'Procesando...' : 'Pagar'}
        </button>
      </div>
    </form>
  );
}

interface SubscriptionPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  clientSecret: string;
  planName: string;
  amount: number;
}

export function SubscriptionPaymentModal({
  isOpen,
  onClose,
  onSuccess,
  clientSecret,
  planName,
  amount
}: SubscriptionPaymentModalProps) {
  if (!isOpen) return null;

  if (!stripePublishableKey) {
    return (
      <div className="p-4 text-sm text-red-600 bg-red-50 rounded-lg">
        Falta configurar VITE_STRIPE_PUBLISHABLE_KEY en el entorno para habilitar pagos.
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#9333ea',
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-md w-full p-6 my-8 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Activar Suscripción</h2>
        <Elements stripe={stripePromise} options={options}>
          <SubscriptionPaymentForm
            onSuccess={onSuccess}
            onCancel={onClose}
            planName={planName}
            amount={amount}
          />
        </Elements>
      </div>
    </div>
  );
}
