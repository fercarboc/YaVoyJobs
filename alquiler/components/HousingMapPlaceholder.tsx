
import React, { useState } from 'react';

const HousingMapPlaceholder: React.FC = () => {
  const [zoom, setZoom] = useState(14);

  return (
    <div className="sticky top-4 w-full h-[calc(100vh-2rem)] bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200 relative overflow-hidden group">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center opacity-40">
          <div className="bg-blue-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <p className="font-bold text-blue-900 uppercase tracking-widest text-sm">Mapa del barrio (Placeholder)</p>
          <p className="text-xs text-blue-700 mt-1">Próximamente: Integración con Mapbox</p>
        </div>
      </div>

      {/* Simulated Pins */}
      <div className="absolute inset-0 overflow-auto no-scrollbar cursor-grab active:cursor-grabbing">
        <div className="w-[200%] h-[200%] relative bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white px-2 py-1 rounded shadow-lg border border-blue-600 text-[10px] font-bold text-blue-600 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition cursor-pointer"
              style={{ 
                left: `${20 + (i * 15) + Math.random() * 10}%`, 
                top: `${30 + (i * 12) + Math.random() * 10}%` 
              }}
            >
              {350 + (i * 100)}€
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button onClick={() => setZoom(z => z + 1)} className="bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 font-bold">+</button>
        <button onClick={() => setZoom(z => Math.max(1, z - 1))} className="bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 font-bold">-</button>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold border border-gray-200 uppercase">
        Zoom: {zoom}x
      </div>
    </div>
  );
};

export default HousingMapPlaceholder;
