
import { HousingListing } from '../types/housing.types';

export const DISTRICTS = {
  'Centro': ['Sol', 'Embajadores', 'Cortes', 'Justicia', 'Malasaña'],
  'Arganzuela': ['Imperial', 'Acacias', 'Chopera', 'Legazpi'],
  'Salamanca': ['Recoletos', 'Goya', 'Lista', 'Guindalera'],
  'Chamberí': ['Gaztambide', 'Arapiles', 'Trafalgar', 'Ríos Rosas']
};

const generateMockListings = (): HousingListing[] => {
  const listings: HousingListing[] = [];
  const districts = Object.keys(DISTRICTS);
  
  for (let i = 1; i <= 25; i++) {
    const district = districts[i % districts.length];
    const neighborhoods = DISTRICTS[district as keyof typeof DISTRICTS];
    const neighborhood = neighborhoods[i % neighborhoods.length];
    const type = i % 3 === 0 ? 'Piso' : 'Habitación';
    const isAgency = i % 5 === 0;

    listings.push({
      id: `h-${i}`,
      title: `${type} acogedor en ${neighborhood}`,
      district,
      neighborhood,
      type,
      price: type === 'Piso' ? 800 + (i * 20) : 350 + (i * 10),
      price_unit: 'month',
      furnished: i % 2 === 0,
      bills_included: i % 3 === 0,
      deposit: type === 'Piso' ? 1200 : 400,
      min_stay: i % 4 === 0 ? '3 meses' : '6 meses',
      images: [
        `https://picsum.photos/seed/housing-${i}-1/800/600`,
        `https://picsum.photos/seed/housing-${i}-2/800/600`,
        `https://picsum.photos/seed/housing-${i}-3/800/600`,
      ],
      description: `Este fantástico ${type.toLowerCase()} se encuentra en una de las mejores zonas de ${neighborhood}. Totalmente equipado y listo para entrar a vivir. Cuenta con excelentes conexiones de transporte y servicios cercanos.`,
      publisher_type: isAgency ? 'AGENCY' : 'PARTICULAR',
      publisher_name: isAgency ? 'InmoBarrio S.L.' : 'Juan García',
      publisher_rating: 4 + (Math.random() * 1),
      available_from: '2024-05-01',
      sqm: type === 'Piso' ? 50 + i : undefined,
      created_at: new Date(Date.now() - i * 3600000 * 24).toISOString(),
    });
  }
  return listings;
};

export const MOCK_HOUSING_LISTINGS = generateMockListings();
