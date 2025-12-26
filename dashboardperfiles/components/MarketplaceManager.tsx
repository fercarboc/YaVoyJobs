
import React, { useState } from 'react';
import { Plus, Tag, Layers, Search, BarChart2 } from 'lucide-react';
import { Product } from '../dashboardTypes';

const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Pack Aceite Oliva 5L', category: 'Alimentación', pricePublic: 45, priceRegistered: 40, priceHoreca: 35, stock: 120, status: 'Activo', image: 'https://picsum.photos/seed/olive/200/200' },
  { id: '2', name: 'Vino Tinto Reserva', category: 'Bebidas', pricePublic: 18, priceRegistered: 16, priceHoreca: 12, stock: 45, status: 'Activo', image: 'https://picsum.photos/seed/wine/200/200' },
  { id: '3', name: 'Queso Manchego Curado', category: 'Alimentación', pricePublic: 22, priceRegistered: 20, priceHoreca: 18, stock: 15, status: 'Pausado', image: 'https://picsum.photos/seed/cheese/200/200' },
];

export const MarketplaceManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'create' | 'offers' | 'stock'>('products');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace YaVoy</h2>
          <p className="text-gray-500">Gestiona tus productos y ventas locales</p>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        {[
          { id: 'products', label: 'Mis Productos', icon: <Layers size={18} /> },
          { id: 'create', label: 'Crear Producto', icon: <Plus size={18} /> },
          { id: 'offers', label: 'Ofertas Flash', icon: <Tag size={18} /> },
          { id: 'stock', label: 'Control de Stock', icon: <BarChart2 size={18} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === tab.id 
                ? 'border-[#0056b3] text-[#0056b3]' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INITIAL_PRODUCTS.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    prod.status === 'Activo' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
                  }`}>
                    {prod.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-[#0056b3] uppercase tracking-wide mb-1">{prod.category}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-1">{prod.name}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Precio Público:</span>
                    <span className="font-bold">€{prod.pricePublic}</span>
                  </div>
                  <div className="flex justify-between text-sm bg-blue-50 p-1 px-2 rounded">
                    <span className="text-blue-700 font-medium">Precio Horeca:</span>
                    <span className="font-bold text-blue-700">€{prod.priceHoreca}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-medium">
                    Stock: <span className={`${prod.stock < 20 ? 'text-red-500 font-bold' : 'text-gray-900'}`}>{prod.stock} uds</span>
                  </div>
                  <button className="text-sm font-bold text-blue-600 hover:underline">Editar</button>
                </div>
              </div>
            </div>
          ))}
          <button className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all group">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-3 group-hover:border-blue-300">
              <Plus size={24} />
            </div>
            <span className="font-bold">Nuevo Producto</span>
          </button>
        </div>
      )}

      {activeTab === 'create' && (
        <div className="max-w-4xl bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Detalles del nuevo producto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nombre del Producto</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100" placeholder="Ej: Vino Ribera del Duero..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Categoría</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100">
                  <option>Seleccionar...</option>
                  <option>Alimentación</option>
                  <option>Bebidas</option>
                  <option>Hogar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Descripción</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100" placeholder="Describe tu producto..."></textarea>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Estructura de Precios (€)</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium text-gray-500">Público:</span>
                    <input type="number" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg outline-none" placeholder="0.00" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium text-gray-500">Registrado:</span>
                    <input type="number" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg outline-none" placeholder="0.00" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium text-gray-500">Horeca:</span>
                    <input type="number" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg outline-none" placeholder="0.00" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Imágenes</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl h-32 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer">
                  <Plus size={20} />
                  <span className="text-xs font-bold mt-1">Añadir Fotos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors">Cancelar</button>
            <button className="px-10 py-2.5 rounded-xl font-bold bg-[#0056b3] text-white hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-100">Guardar Producto</button>
          </div>
        </div>
      )}
    </div>
  );
};
