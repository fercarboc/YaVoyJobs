
import React, { useState, useEffect } from 'react';
import HousingFilters from '../components/HousingFilters';
import HousingCard from '../components/HousingCard';
import HousingMapPlaceholder from '../components/HousingMapPlaceholder';
import SortBar from '../components/SortBar';
import EmptyState from '../components/EmptyState';
import { housingService } from '../services/housing.service';
import { HousingListing, HousingFilters as FiltersType, HousingSortOption } from '../types/housing.types';

const PublicList: React.FC = () => {
  const [listings, setListings] = useState<HousingListing[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FiltersType>({});
  const [sort, setSort] = useState<HousingSortOption>('recent');
  const [page, setPage] = useState(1);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const { results, total } = await housingService.listPublic(filters, sort, page);
      if (page === 1) {
        setListings(results);
      } else {
        setListings(prev => [...prev, ...results]);
      }
      setTotal(total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [filters, sort, page]);

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleClearFilters = () => {
    setFilters({});
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Alquiler en el barrio</h1>
        <p className="text-gray-500 mt-1">Busca habitaciones y pisos disponibles cerca de ti.</p>
      </header>

      <HousingFilters onApply={handleApplyFilters} onClear={handleClearFilters} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: List */}
        <div className="flex-1">
          <SortBar total={total} value={sort} onChange={(s) => { setSort(s); setPage(1); }} />

          {loading && page === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-50">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
               ))}
            </div>
          ) : listings.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {listings.map(item => (
                  <HousingCard key={item.id} listing={item} />
                ))}
              </div>
              
              {listings.length < total && (
                <button 
                  onClick={() => setPage(p => p + 1)}
                  disabled={loading}
                  className="w-full mt-8 py-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:border-gray-300 transition"
                >
                  {loading ? 'Cargando...' : 'Cargar más inmuebles'}
                </button>
              )}
            </>
          ) : (
            <EmptyState onClear={handleClearFilters} />
          )}
        </div>

        {/* Right Column: Map */}
        <div className="hidden lg:block lg:w-1/3 xl:w-2/5">
          <HousingMapPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default PublicList;
