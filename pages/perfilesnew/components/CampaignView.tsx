
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { Campaign } from '../types';

export const CampaignView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'create'>('active');
  const [selectedProduct, setSelectedProduct] = useState('Kit Herramientas Pro');
  const [placement, setPlacement] = useState<'Banner Superior' | 'Producto Destacado'>('Banner Superior');
  const [duration, setDuration] = useState<7 | 14 | 30>(7);

  const campaigns: Campaign[] = [
    { id: '1', productId: '1', productName: 'Kit Herramientas Pro', placement: 'Producto Destacado', duration: 14, startDate: '2024-02-20', status: 'Activa', price: 19.90 },
    { id: '2', productId: '2', productName: 'Estantería Metálica', placement: 'Banner Superior', duration: 7, startDate: '2024-03-05', status: 'Programada', price: 29.90 },
  ];

  const getPrice = () => {
    let base = placement === 'Banner Superior' ? 10 : 5;
    return (base * duration).toFixed(2);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Publicidad y Campañas</h2>
          <p className="text-gray-500 mt-1">Impulsa tus productos en los mejores espacios del marketplace</p>
        </div>
      </div>

      <div className="flex p-1 bg-gray-100 rounded-2xl w-full max-w-sm">
        <button 
          onClick={() => setActiveTab('active')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'active' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {ICONS.Megaphone} Campañas
        </button>
        <button 
          onClick={() => setActiveTab('create')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'create' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {ICONS.Add} Crear Campaña
        </button>
      </div>

      {activeTab === 'active' ? (
        <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Producto</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Placement</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duración</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Inversión</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {campaigns.map(c => (
                  <tr key={c.id} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                            {ICONS.Package}
                         </div>
                         <span className="font-bold text-gray-900 text-sm">{c.productName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500 font-medium">{c.placement}</td>
                    <td className="px-6 py-4 text-xs text-gray-500">{c.duration} días <span className="text-[10px] text-gray-300 ml-1">desde {c.startDate}</span></td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 text-center">{c.price.toFixed(2)}€</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                        c.status === 'Activa' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Nueva Campaña</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Producto a promocionar</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option>Kit Herramientas Pro</option>
                  <option>Estantería Metálica 5 baldas</option>
                  <option>Pintura Plástica Blanca 10L</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Placement (Ubicación)</label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button 
                    onClick={() => setPlacement('Banner Superior')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${placement === 'Banner Superior' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-50'}`}
                  >
                    <p className="font-bold text-sm text-gray-900">Banner Superior</p>
                    <p className="text-[10px] text-gray-500 mt-1">Máxima visibilidad en la cabecera.</p>
                  </button>
                  <button 
                    onClick={() => setPlacement('Producto Destacado')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${placement === 'Producto Destacado' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-50'}`}
                  >
                    <p className="font-bold text-sm text-gray-900">Card Destacada</p>
                    <p className="text-[10px] text-gray-500 mt-1">Aparece en los primeros resultados.</p>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Duración</label>
                <div className="flex gap-2 mt-1">
                  {[7, 14, 30].map(d => (
                    <button 
                      key={d}
                      onClick={() => setDuration(d as 7|14|30)}
                      className={`flex-1 py-3 rounded-xl font-bold border ${duration === d ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-500 border-gray-100'}`}
                    >
                      {d} días
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
               <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Total campaña</p>
                  <p className="text-3xl font-black text-gray-900">{getPrice()} €</p>
               </div>
               <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                 Contratar Campaña
               </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center uppercase font-bold tracking-tighter">
              YaVoy genera automáticamente el banner con tus datos. Tú solo eliges el producto.
            </p>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Previsualización en vivo</h3>
            {placement === 'Banner Superior' ? (
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 space-y-4">
                  <span className="bg-white/20 text-[10px] font-black uppercase px-2 py-1 rounded-full border border-white/20 tracking-widest">Oferta Patrocinada</span>
                  <div>
                    <h4 className="text-2xl font-black">{selectedProduct}</h4>
                    <p className="text-sm text-blue-100 mt-1">La mejor calidad al mejor precio disponible ahora.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-3xl font-black">29.99€</p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-all">Ver producto</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border-2 border-blue-600 rounded-[2.5rem] p-6 shadow-xl relative group max-w-sm mx-auto">
                <div className="absolute top-4 right-4 text-blue-600">{ICONS.Verified}</div>
                <div className="h-40 bg-gray-100 rounded-3xl mb-4 overflow-hidden">
                  <img src="https://picsum.photos/400/400?random=1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-full mb-2 inline-block">Producto Destacado</span>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{selectedProduct}</h4>
                <div className="flex items-center justify-between mt-4">
                   <p className="text-2xl font-black text-gray-900">29.99€</p>
                   <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-md shadow-blue-600/20">Ver producto</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
