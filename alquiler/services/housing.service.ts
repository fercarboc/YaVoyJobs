
import { MOCK_HOUSING_LISTINGS } from './housing.mock';
import { HousingListing, HousingFilters, HousingSortOption } from '../types/housing.types';

export const housingService = {
  listPublic: async (
    filters: HousingFilters,
    sort: HousingSortOption,
    page: number = 1,
    pageSize: number = 6
  ): Promise<{ results: HousingListing[]; total: number }> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // TODO: replace mock with supabase query
    let filtered = [...MOCK_HOUSING_LISTINGS];

    if (filters.district) {
      filtered = filtered.filter(item => item.district === filters.district);
    }
    if (filters.neighborhood) {
      filtered = filtered.filter(item => item.neighborhood === filters.neighborhood);
    }
    if (filters.type) {
      filtered = filtered.filter(item => item.type === filters.type);
    }
    if (filters.minPrice) {
      filtered = filtered.filter(item => item.price >= (filters.minPrice || 0));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(item => item.price <= (filters.maxPrice || Infinity));
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sort === 'price_asc') return a.price - b.price;
      if (sort === 'price_desc') return b.price - a.price;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    const total = filtered.length;
    const results = filtered.slice((page - 1) * pageSize, page * pageSize);

    return { results, total };
  },

  getById: async (id: string): Promise<HousingListing | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // TODO: replace mock with supabase query
    const listing = MOCK_HOUSING_LISTINGS.find(item => item.id === id);
    return listing || null;
  }
};
