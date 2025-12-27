
import React from 'react';
import { Link } from 'react-router-dom';
import { HousingListing } from '../types/housing.types';

interface Props {
  listing: HousingListing;
}

const HousingCard: React.FC<Props> = ({ listing }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={listing.images[0]} 
          alt={listing.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {listing.furnished && (
            <span className="bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-gray-700">Amueblado</span>
          )}
          {listing.bills_included && (
            <span className="bg-blue-600/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-white">Gastos inc.</span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{listing.type}</span>
          <span className="text-lg font-bold text-gray-900">{listing.price}€<span className="text-sm font-normal text-gray-500">/{listing.price_unit === 'month' ? 'mes' : 'sem'}</span></span>
        </div>
        
        <h3 className="font-bold text-gray-900 line-clamp-1 mb-1">{listing.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{listing.district} · {listing.neighborhood}</p>
        
        <Link 
          to={`/alquiler/${listing.id}`}
          className="block w-full text-center py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default HousingCard;
