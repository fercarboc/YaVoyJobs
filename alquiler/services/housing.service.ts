
import { supabase } from "@/services/supabase";
import { HousingListing, HousingFilters, HousingSortOption } from "../types/housing.types";

const BUCKET = "housing-images";
const PLACEHOLDER_IMG = "https://placehold.co/800x600?text=YaVoy+Housing";

function mapType(ad_type?: string | null) {
  if (ad_type === "ROOM") return "Habitación";
  if (ad_type === "FULL_APARTMENT") return "Piso";
  return "Piso";
}

async function toPublicUrl(path?: string | null) {
  if (!path) return PLACEHOLDER_IMG;
  if (/^https?:\/\//i.test(path)) return path;

  try {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    if (data?.publicUrl) return data.publicUrl;
    const { data: signed } = await supabase.storage.from(BUCKET).createSignedUrl(path, 60 * 60 * 24 * 30);
    return signed?.signedUrl || PLACEHOLDER_IMG;
  } catch (e) {
    console.error("[housing] toPublicUrl error", e);
    return PLACEHOLDER_IMG;
  }
}

async function fetchCoverImages(adIds: string[]) {
  if (!adIds.length) return {};
  const { data, error } = await supabase
    .from("VoyHousingImages")
    .select("ad_id,url,sort_order")
    .in("ad_id", adIds)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  const map: Record<string, string> = {};
  for (const row of data || []) {
    if (!map[row.ad_id]) {
      map[row.ad_id] = await toPublicUrl(row.url);
    }
  }
  return map;
}

export const housingService = {
  listPublic: async (
    filters: HousingFilters,
    sort: HousingSortOption,
    page: number = 1,
    pageSize: number = 6
  ): Promise<{ results: HousingListing[]; total: number }> => {
    const offset = (page - 1) * pageSize;

    const cityFilter = filters.city ? String(filters.city).toUpperCase() : null;
    const districtFilter = filters.district || "";
    const neighborhoodFilter = filters.neighborhood || "";

    let query = supabase
      .from("VoyHousingAds")
      .select("*", { count: "exact" })
      .eq("status", "ACTIVE")
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (cityFilter) query = query.eq("city", cityFilter);
    if (districtFilter) query = query.eq("district", districtFilter);
    if (neighborhoodFilter) query = query.eq("neighborhood", neighborhoodFilter);

    if (filters.type) {
      const adType = filters.type === "Piso" ? "FULL_APARTMENT" : "ROOM";
      query = query.eq("ad_type", adType);
    }
    if (filters.minPrice) query = query.gte("price", filters.minPrice);
    if (filters.maxPrice) query = query.lte("price", filters.maxPrice);

    const { data, error, count } = await query;
    if (error) throw error;

    const ads = data || [];
    let coverMap: Record<string, string> = {};
    try {
      coverMap = await fetchCoverImages(ads.map((a: any) => a.id));
    } catch (e) {
      console.error("[housing] cover images error", e);
    }

    const results: HousingListing[] = ads.map((row: any) => ({
      id: row.id,
      title: row.title,
      district: row.district || "",
      neighborhood: row.neighborhood || "",
      type: mapType(row.ad_type),
      price: row.price || 0,
      price_unit: row.price_unit || "month",
      furnished: !!row.furnished,
      bills_included: !!row.bills_included,
      deposit: row.deposit || 0,
      min_stay: row.min_stay || "",
      images: [coverMap[row.id] || PLACEHOLDER_IMG],
      description: row.description || "",
      publisher_type: row.owner_type === "AGENCY" ? "AGENCY" : "PARTICULAR",
      publisher_name: row.metadata?.publisher_name || "Anunciante",
      publisher_rating: row.metadata?.rating || 4.8,
      available_from: row.available_from || "",
      sqm: row.metadata?.sqm || undefined,
      created_at: row.created_at,
    }));

    // sort on client for price if requested
    if (sort === "price_asc") results.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") results.sort((a, b) => b.price - a.price);

    return { results, total: count || results.length };
  },

  getById: async (id: string): Promise<HousingListing | null> => {
    const { data, error } = await supabase
      .from("VoyHousingAds")
      .select("*")
      .eq("id", id)
      .eq("status", "ACTIVE")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;

    const { data: imgs, error: imgErr } = await supabase
      .from("VoyHousingImages")
      .select("*")
      .eq("ad_id", data.id)
      .order("sort_order", { ascending: true });
    if (imgErr) throw imgErr;

    // Renombrar sort_order -> position en el front si se necesita
    const rows = (imgs || []).map((img: any) => ({ ...img, position: img.sort_order }));
    const images = await Promise.all(rows.map((img) => toPublicUrl(img.url)));

    const listing: HousingListing = {
      id: data.id,
      title: data.title,
      district: data.district || "",
      neighborhood: data.neighborhood || "",
      type: mapType(data.ad_type),
      price: data.price || 0,
      price_unit: data.price_unit || "month",
      furnished: !!data.furnished,
      bills_included: !!data.bills_included,
      deposit: data.deposit || 0,
      min_stay: data.min_stay || "",
      images: images.length ? images : [PLACEHOLDER_IMG],
      description: data.description || "",
      publisher_type: data.owner_type === "AGENCY" ? "AGENCY" : "PARTICULAR",
      publisher_name: data.metadata?.publisher_name || "Anunciante",
      publisher_rating: data.metadata?.rating || 4.8,
      available_from: data.available_from || "",
      sqm: data.metadata?.sqm || undefined,
      created_at: data.created_at,
    };

    return listing;
  }
};
