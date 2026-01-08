
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { Product } from '../types';

export const CatalogView: React.FC<{ productCount: number, productLimit: number }> = ({ productCount, productLimit }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showSalesModal, setShowSalesModal] = useState(false);

  const [products, setProducts] = useState<Product[]>([
    { id: '1', providerId: 'prov-1', name: 'Kit Herramientas Pro', description: 'Un kit profesional completo con todas las herramientas esenciales para el mantenimiento del hogar.', price: 89.90, stock: 15, category: 'Ferretería', status: 'active', images: [], isStar: true },
    { id: '2', providerId: 'prov-1', name: 'Estantería Metálica 5 baldas', description: 'Estantería de acero galvanizado resistente, ideal para garajes o almacenes.', price: 45.00, stock: 4, category: 'Muebles', status: 'active', images: [], promotion: { active: true, startDate: '2024-03-01', endDate: '2024-03-30', type: 'percent', value: 10, status: 'Activa' } },
    { id: '3', providerId: 'prov-1', name: 'Pintura Plástica Blanca 10L', description: 'Pintura blanca de alta calidad para interiores, con excelente cobertura y acabado mate.', price: 32.50, stock: 0, category: 'Pintura', status: 'archived', images: [] },
  ]);

  const starCount = products.filter(p => p.isStar).length;
  const starLimit = productLimit > 100 ? 3 : 1;

  const toggleStar = (id: string) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        if (!p.isStar && starCount >= starLimit) {
          alert(`Has alcanzado el límite de productos estrella (${starLimit}) para tu plan.`);
          return p;
        }
        return { ...p, isStar: !p.isStar };
      }
      return p;
    }));
  };

  const sortedProducts = [...products].sort((a, b) => (a.isStar === b.isStar ? 0 : a.isStar ? -1 : 1));

  if (showAdd || editingProduct) {
    const p = editingProduct || {} as Partial<Product>;
    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 pb-12">
        <button onClick={() => { setShowAdd(false); setEditingProduct(null); }} className="text-sm font-bold text-gray-400 flex items-center gap-1 hover:text-gray-900 transition-colors">
          {ICONS.Chevron} Volver al catálogo
        </button>
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm max-w-2xl mx-auto space-y-8">
           <div className="flex justify-between items-center">
             <h3 className="text-2xl font-bold text-gray-900">{editingProduct ? 'Editar producto' : 'Añadir producto'}</h3>
             <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:bg-white transition-all">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={p.isStar || false}
                  onChange={() => toggleStar(p.id!)}
                />
                <span className={p.isStar ? 'text-amber-500' : 'text-gray-300'}>{ICONS.Star}</span>
                <span className="text-xs font-bold text-gray-600 uppercase">Producto Estrella</span>
             </label>
           </div>
           
           <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del producto</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20 outline-none" placeholder="Ej: Kit Taladro 18V" defaultValue={p.name} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Precio Original (€)</label>
                    <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20 outline-none" placeholder="0.00" defaultValue={p.price} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Stock inicial</label>
                    <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20 outline-none" placeholder="0" defaultValue={p.stock} />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-[2rem] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">{ICONS.Percent}</span>
                    <h4 className="font-bold text-blue-900">Promoción del producto</h4>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={p.promotion?.active || false} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-blue-700 uppercase mb-1 px-1">Fecha Inicio</label>
                    <input type="date" className="w-full px-4 py-2 rounded-xl border border-blue-100 bg-white text-sm" defaultValue={p.promotion?.startDate} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-blue-700 uppercase mb-1 px-1">Fecha Fin</label>
                    <input type="date" className="w-full px-4 py-2 rounded-xl border border-blue-100 bg-white text-sm" defaultValue={p.promotion?.endDate} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-[10px] font-bold text-blue-700 uppercase mb-1 px-1">Tipo de Descuento</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-blue-100 bg-white text-sm font-medium">
                      <option value="percent">Porcentaje (%)</option>
                      <option value="fixed">Precio Fijo (€)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-blue-700 uppercase mb-1 px-1">Valor</label>
                    <input type="number" className="w-full px-4 py-2 rounded-xl border border-blue-100 bg-white text-sm" placeholder="10" defaultValue={p.promotion?.value} />
                  </div>
                </div>
                
                <div className="pt-2 flex items-center justify-between border-t border-blue-100">
                  <span className="text-xs font-bold text-blue-600">Vista previa precio:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-xs">{p.price || '0.00'} €</span>
                    <span className="text-sm font-black text-blue-900">{(p.price || 0) * 0.9} €</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Descripción</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20 outline-none resize-none" placeholder="Detalles del producto..." defaultValue={p.description}></textarea>
              </div>
              <div className="border-2 border-dashed border-gray-100 rounded-[2rem] p-12 text-center bg-gray-50/50 hover:bg-white transition-colors cursor-pointer group">
                 <div className="flex justify-center mb-2 text-gray-300 group-hover:text-blue-600 transition-colors">{ICONS.Package}</div>
                 <p className="text-xs font-bold text-gray-400 uppercase">Subir imágenes del producto</p>
                 <p className="text-[10px] text-gray-300 mt-1">Arrastra o haz clic para subir</p>
              </div>
           </div>
           <button onClick={() => { setShowAdd(false); setEditingProduct(null); }} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
             {editingProduct ? 'Guardar Cambios' : 'Añadir al catálogo'}
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Catálogo</h2>
          <p className="text-gray-500 mt-1">Gestión de inventario de marketplace</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={() => setShowSalesModal(true)}
             className="bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl font-bold hover:bg-emerald-100 transition-all flex items-center gap-2 border border-emerald-100"
           >
             {ICONS.Tag} Rebajas de Temporada
           </button>
           <button 
             onClick={() => {
                if (productCount >= productLimit) {
                   alert('Límite de productos alcanzado. Por favor, mejora tu plan.');
                   return;
                }
                setShowAdd(true);
             }}
             className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/10 ${productCount >= productLimit ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
           >
             {ICONS.Add} Añadir producto
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Producto</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categoría</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Precio</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Stock</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Estado / Promo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {sortedProducts.map(p => (
                <tr key={p.id} className={`hover:bg-gray-50/30 transition-colors ${p.isStar ? 'bg-amber-50/30' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                          <img src={`https://picsum.photos/50/50?random=${p.id}`} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-bold text-gray-900 text-sm truncate">{p.name}</span>
                            {p.isStar && <span className="text-amber-500 shrink-0">{ICONS.Star}</span>}
                          </div>
                          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">ID: #{p.id.padStart(4, '0')}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500 font-medium">{p.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold ${p.promotion?.active ? 'text-blue-600' : 'text-gray-900'}`}>
                        {p.promotion?.active 
                          ? (p.price * (1 - p.promotion.value / 100)).toFixed(2) 
                          : p.price.toFixed(2)}€
                      </span>
                      {p.promotion?.active && (
                        <span className="text-[9px] text-gray-400 line-through font-bold">{p.price.toFixed(2)}€</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-xs font-bold ${p.stock <= 5 && p.stock > 0 ? 'text-amber-500' : p.stock === 0 ? 'text-red-500' : 'text-gray-900'}`}>
                      {p.stock === 0 ? 'Agotado' : p.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${p.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                        {p.status === 'active' ? 'Activo' : 'Archivado'}
                      </span>
                      {p.promotion?.active && (
                        <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                          {ICONS.Percent} {p.promotion.value}% off
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setEditingProduct(p)}
                      className="text-blue-600 font-bold text-xs hover:underline"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showSalesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900">Configurar Rebajas de Temporada</h3>
                <button onClick={() => setShowSalesModal(false)} className="text-gray-400 hover:text-gray-600">{ICONS.Chevron}</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Campaña de rebajas</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-bold">
                    <option>Rebajas Invierno</option>
                    <option>Rebajas Verano</option>
                    <option>Black Friday</option>
                    <option>Campaña Personalizada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Descuento Global (%)</label>
                  <input type="number" placeholder="20" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600/20 outline-none" />
                </div>
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex gap-3">
                  <div className="text-amber-500 shrink-0">{ICONS.Alert}</div>
                  <p className="text-[11px] text-amber-700 font-medium leading-relaxed">
                    <strong>Importante:</strong> Las rebajas no se aplican si el producto ya tiene una promoción individual activa (prevalece la promo del producto).
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowSalesModal(false)} className="flex-1 bg-gray-50 text-gray-500 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">Cancelar</button>
                <button onClick={() => setShowSalesModal(false)} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all">Aplicar rebajas</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
