
import React, { useState } from 'react';
import { UserRole } from '../types';
import { ICONS } from '../constants';

interface PlansViewProps {
  role: UserRole;
  hasInmoPlan?: boolean;
  hasNegocioPlan?: boolean;
  onActivateSimulatedPlan?: (id: string) => void;
}

export const PlansView: React.FC<PlansViewProps> = ({ 
  role, 
  hasInmoPlan, 
  hasNegocioPlan, 
  onActivateSimulatedPlan 
}) => {
  const isAgency = role === UserRole.AGENCY;
  const isProvider = role === UserRole.PROVIDER;
  const isCompany = role === UserRole.COMPANY;
  const isWorker = role === UserRole.WORKER;
  
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'semestral' | 'annual'>('monthly');

  const getPriceDetails = (basePrice: number) => {
    if (billingCycle === 'semestral') {
      const total = basePrice * 6 * 0.9;
      return {
        label: `${total.toFixed(2)} €`,
        effective: `${(total / 6).toFixed(2)} €/mes`,
        discount: '-10%'
      };
    }
    if (billingCycle === 'annual') {
      const total = basePrice * 12 * 0.83;
      return {
        label: `${total.toFixed(2)} €`,
        effective: `${(total / 12).toFixed(2)} €/mes`,
        discount: '-17%'
      };
    }
    return {
      label: `${basePrice.toFixed(2)} €`,
      effective: null,
      discount: null
    };
  };

  let standardPlans = [];
  
  if (isAgency) {
    standardPlans = [
      { 
        name: 'Agencia50', basePrice: 29.90, period: '/mes', 
        features: ['Hasta 50 anuncios activos', 'Inmobiliaria ilimitada', 'Reportes de Leads', 'Soporte prioritario'], 
        button: 'Cambiar a este plan', active: true 
      },
      { 
        name: 'Agencia100', basePrice: 59.90, period: '/mes', 
        features: ['Hasta 100 anuncios activos', 'Inmobiliaria ilimitada', 'Acceso API Leads', 'Account Manager'], 
        button: 'Mejorar plan', active: false 
      },
    ];
  } else if (isProvider) {
    standardPlans = [
      { 
        name: 'Market30', basePrice: 24.90, period: '/30 días', 
        features: ['Hasta 100 productos', 'Gestión de pedidos', 'Chat marketplace', 'Reportes de ventas'], 
        button: 'Cambiar a este plan', active: true 
      },
      { 
        name: 'Market50', basePrice: 49.90, period: '/30 días', 
        features: ['Hasta 250 productos', 'Gestión pedidos avanzada', 'Publicidad destacada', 'Exportación de datos'], 
        button: 'Mejorar plan', active: false 
      },
    ];
  } else if (isCompany) {
    standardPlans = [
      { name: 'Pago por anuncio', basePrice: 6.00, period: '/anuncio', features: ['Publicación individual', 'Anuncios Micro/Job', 'Seguro RC: Desde 3,00 €', 'Permanencia: Ninguna'], button: 'Usar este modo', active: true },
      { name: 'Empresa Básico', basePrice: 19.90, period: '/mes', features: ['Publicación anuncios ilimitados', 'Comisión YaVoy: 0 €', 'Seguro RC se paga por servicio', 'Facturación unificada'], button: 'Contratar plan', active: false },
    ];
  } else if (isWorker) {
    standardPlans = [
      { name: 'Colaborador Gratis', basePrice: 0, features: ['Perfil básico', 'Postulaciones estándar', 'Pago seguro garantizado', 'Badge verificado básico'], button: 'Plan actual', active: true },
      { name: 'Colaborador PRO', id: 'worker_pro', basePrice: 14.90, period: '/mes', features: ['Badge "Top Rated" destacado', 'Postulaciones ilimitadas', 'Chat prioritario con clientes', 'Seguro RC Premium incluido'], button: 'Activar PRO', active: false },
    ];
  } else {
    standardPlans = [
      { name: 'Particular Gratis (Pago por uso)', basePrice: 0, features: ['Alta en plataforma: Gratis', 'Anuncios microtrabajos: Gratis', 'Comisión YaVoy: 3,00 €', 'Seguro RC: Desde 2,00 €'], button: 'Plan actual', active: true, note: 'Solo pagarás la comisión de YaVoy y el seguro por cada servicio.' },
      { name: 'Plan Básico Particular', basePrice: 9.90, period: '/mes', features: ['Aplicable SOLO a microtrabajos', 'Comisión YaVoy: 0 €', 'Seguro RC se paga por servicio', 'Atención prioritaria'], button: 'Contratar plan', active: false },
    ];
  }

  const specialtyPlans = [
    { name: 'Plan Inmo30', basePrice: 9.90, period: '/30 días', features: ['Acceso a módulo inmobiliario', '1 anuncio / postulación pro', 'Alta visibilidad local', 'Plan renovable'], id: 'inmo30', active: hasInmoPlan },
    { name: 'Plan Negocio6', basePrice: 59.90, period: '/6 meses', features: ['Acceso a módulo Negocios', '1 anuncio de traspaso', 'Segmentación por sector', 'Consultoría básica'], id: 'negocio6', active: hasNegocioPlan }
  ];

  // Para Agencias, mostramos el Plan Negocios de forma destacada si no lo tienen
  if (isAgency) {
    specialtyPlans.push({
      name: 'Plan Negocios Pro',
      basePrice: 49.90,
      period: '/mes',
      features: ['Publicación anuncios de traspaso ilimitados', 'Gestión de interesados', 'Contratos de arras/venta base', 'Visibilidad premium'],
      id: 'negocios_agency_plan',
      active: hasNegocioPlan
    });
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Planes y Facturación</h2>
          <p className="text-gray-500 mt-1">Gestiona tu suscripción para {role.toLowerCase()}</p>
        </div>
        {(isAgency || isProvider || isWorker) && (
           <div className="bg-white p-1 rounded-xl border border-gray-100 flex shadow-sm">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Mensual
              </button>
              <button 
                onClick={() => setBillingCycle('semestral')}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${billingCycle === 'semestral' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Semestral <span className={billingCycle === 'semestral' ? 'text-blue-100' : 'text-emerald-500'}>-10%</span>
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Anual <span className={billingCycle === 'annual' ? 'text-blue-100' : 'text-emerald-500'}>-17%</span>
              </button>
           </div>
        )}
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 px-1">
          {isAgency ? 'Planes para Agencias' : isProvider ? 'Planes Marketplace' : isWorker ? 'Planes Colaborador' : 'Planes para Servicios'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardPlans.map((plan, i) => {
            const pricing = getPriceDetails(plan.basePrice);
            return (
              <div key={i} className={`p-8 rounded-[2.5rem] border-2 transition-all relative overflow-hidden flex flex-col ${plan.active ? 'border-blue-600 bg-blue-50/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                {plan.active && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Plan Actual</span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex flex-col mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900">{pricing.label}</span>
                    <span className="text-gray-500 font-medium text-sm">
                      {billingCycle === 'monthly' ? (plan.period || '/mes') : (billingCycle === 'semestral' ? '/6 meses' : '/12 meses')}
                    </span>
                  </div>
                  {pricing.effective && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold text-blue-600">Coste efectivo: {pricing.effective}</span>
                      <span className="bg-emerald-100 text-emerald-700 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Ahorras {pricing.discount}</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <span className="text-emerald-500">{ICONS.Check}</span> {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => !plan.active && onActivateSimulatedPlan?.(plan.id || plan.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${plan.active ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'}`}
                >
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 px-1">Módulos Especiales</h3>
        <p className="text-sm text-gray-500 px-1 -mt-4">Accede a mercados exclusivos de inmobiliaria y negocios.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialtyPlans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border-2 transition-all relative overflow-hidden flex flex-col ${plan.active ? 'border-blue-600 bg-blue-50/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
              {plan.active && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Activo</span>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-black text-gray-900">{plan.basePrice.toFixed(2)} €</span>
                <span className="text-gray-400 font-medium text-xs">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <span className="text-blue-500">{ICONS.Check}</span> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => !plan.active && onActivateSimulatedPlan?.(plan.id)}
                disabled={plan.active}
                className={`w-full py-3 rounded-xl font-bold transition-all border ${
                  plan.active 
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                    : 'bg-gray-50 text-blue-600 border-blue-50 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {plan.active ? 'Plan Activo' : 'Activar Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
