
import React, { useState } from 'react';
import { JobType } from '../types';
import { ICONS } from '../constants';
import { optimizeJobDescription } from '../../../services/geminiService';

export const JobCreateForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: JobType.MICRO,
    title: '',
    description: '',
    category: '',
    location: '',
    date: '',
    time: '',
    duration: '',
    budget: '',
    people: '1'
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleOptimize = async () => {
    if (!formData.title || !formData.description) return;
    setLoading(true);
    const optimized = await optimizeJobDescription(formData.title, formData.description);
    setFormData({ ...formData, description: optimized || formData.description });
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Publicar anuncio</h2>
          <p className="text-sm text-gray-500">Paso {step} de 3</p>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${step >= i ? 'bg-blue-600' : 'bg-gray-100'}`}></div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setFormData({...formData, type: JobType.MICRO})}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${formData.type === JobType.MICRO ? 'border-blue-600 bg-blue-50/50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="mb-2">{ICONS.Micro}</div>
              <h4 className="font-bold text-gray-900">Microempleo</h4>
              <p className="text-xs text-gray-500 mt-1">Tarea puntual, rápida y sencilla.</p>
            </button>
            <button 
              onClick={() => setFormData({...formData, type: JobType.JOB})}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${formData.type === JobType.JOB ? 'border-blue-600 bg-blue-50/50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="mb-2 text-blue-600">{ICONS.Jobs}</div>
              <h4 className="font-bold text-gray-900">Colaboración</h4>
              <p className="text-xs text-gray-500 mt-1">Requerimientos más específicos.</p>
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Título descriptivo</label>
            <input 
              type="text" 
              placeholder="Ej: Montaje de estanterías en salón" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Categoría</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 bg-white">
              <option>Hogar y Mantenimiento</option>
              <option>Reparto y Logística</option>
              <option>Limpieza</option>
              <option>Hostelería</option>
              <option>Otros</option>
            </select>
          </div>
          <button onClick={handleNext} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10">Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">Descripción detallada</label>
              <button 
                onClick={handleOptimize}
                disabled={loading || !formData.title}
                className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline disabled:opacity-50"
              >
                {loading ? 'Optimizando...' : 'Optimizar con IA ✨'}
              </button>
            </div>
            <textarea 
              rows={5}
              placeholder="Explica qué necesitas exactamente, materiales necesarios, etc." 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
              <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hora inicio</label>
              <input type="time" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleBack} className="flex-1 bg-gray-50 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">Atrás</button>
            <button onClick={handleNext} className="flex-[2] bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10">Siguiente</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <label className="block text-sm font-bold text-blue-900 mb-4 text-center">Importe total ofrecido (€)</label>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl font-bold text-blue-600">€</span>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-32 text-center text-4xl font-bold bg-transparent focus:outline-none border-b-2 border-blue-200 focus:border-blue-600"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
              />
            </div>
            <p className="text-[10px] text-blue-500 text-center mt-4 uppercase tracking-wider font-bold">Pago asegurado por Stripe</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Personas necesarias</label>
            <div className="flex items-center gap-4">
              <input 
                type="range" min="1" max="10" 
                className="flex-1 accent-blue-600"
                value={formData.people}
                onChange={(e) => setFormData({...formData, people: e.target.value})}
              />
              <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-900">{formData.people}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleBack} className="flex-1 bg-gray-50 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">Atrás</button>
            <button onClick={onSuccess} className="flex-[2] bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10">Publicar anuncio</button>
          </div>
        </div>
      )}
    </div>
  );
};
