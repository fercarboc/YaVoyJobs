import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl w-full text-center space-y-6 p-10">
        <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Gracias por tu compra</h1>
        <p className="text-sm text-slate-500">
          Hemos recibido tu pedido y estamos notificando a los proveedores involucrados. Recibirás confirmaciones y
          actualizaciones por email.
        </p>
        <Link
          to="/marketplace"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition"
        >
          Volver al Marketplace
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
