// src/services/housingAds.service.ts
import { supabase } from "@/services/supabase";

export type HousingAd = {
  id: string;
  owner_user_id: string;
  owner_type: string;
  title: string;
  description?: string | null;
  city?: string | null;
  district?: string | null;
  neighborhood?: string | null;
  address_hint?: string | null;
  ad_type: string;
  price: number;
  price_unit: string;
  deposit?: number | null;
  min_stay?: string | null;
  furnished: boolean;
  bills_included: boolean;
  available_from?: string | null; // date
  status: string;
  metadata: any;
  created_at: string;
  updated_at: string;
  owner?: {
    full_name: string;
    avatar_url?: string | null;
    company_logo_url?: string | null;
    role?: string | null;
  } | null;
};

// 👇 Esto es lo que REALMENTE devuelve Supabase: owner como array (embed)
type HousingAdDbRow = Omit<HousingAd, "owner"> & {
  owner?: {
    full_name: any;
    avatar_url: any;
    company_logo_url: any;
    role: any;
  }[] | null;
};

function normalizeOwner(row: HousingAdDbRow): HousingAd {
  const ownerArr = row.owner ?? null;
  const owner = Array.isArray(ownerArr) ? (ownerArr[0] ?? null) : (ownerArr as any);

  return {
    ...(row as any),
    owner: owner
      ? {
          full_name: String(owner.full_name ?? ""),
          avatar_url: owner.avatar_url ?? null,
          company_logo_url: owner.company_logo_url ?? null,
          role: owner.role ?? null,
        }
      : null,
  };
}

export async function listActiveHousingAds(params?: {
  city?: string;
  district?: string;
  adType?: string;
  limit?: number;
  offset?: number;
}) {
  const limit = params?.limit ?? 20;
  const offset = params?.offset ?? 0;

  let q = supabase
    .from("VoyHousingAds")
    .select(
      `
      id, owner_user_id, owner_type, title, description,
      city, district, neighborhood, address_hint,
      ad_type, price, price_unit, deposit, min_stay,
      furnished, bills_included, available_from,
      status, metadata, created_at, updated_at,
      owner:owner_user_id ( full_name, avatar_url, company_logo_url, role )
    `
    )
    .eq("status", "ACTIVE")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (params?.city) q = q.eq("city", params.city);
  if (params?.district) q = q.eq("district", params.district);
  if (params?.adType) q = q.eq("ad_type", params.adType);

  const { data, error } = await q;
  if (error) throw error;

  const rows = (data ?? []) as HousingAdDbRow[];
  return rows.map(normalizeOwner);
}
