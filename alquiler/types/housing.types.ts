
export type PublisherType = 'PARTICULAR' | 'AGENCY';
export type PriceUnit = 'month' | 'week';
export type HousingType = 'Habitación' | 'Piso';
export type StayType = 'corta' | 'mensual';

export interface HousingListing {
  id: string;
  title: string;
  district: string;
  neighborhood: string;
  type: HousingType;
  price: number;
  price_unit: PriceUnit;
  furnished: boolean;
  bills_included: boolean;
  deposit: number;
  min_stay: string;
  images: string[];
  description: string;
  publisher_type: PublisherType;
  publisher_name: string;
  publisher_rating: number;
  available_from: string;
  sqm?: number;
  created_at: string;
}

export interface HousingFilters {
  district?: string;
  neighborhood?: string;
  type?: HousingType | '';
  minPrice?: number;
  maxPrice?: number;
  stay?: StayType | '';
}

export type HousingSortOption = 'recent' | 'price_asc' | 'price_desc';
