// src/services/housingLeads.service.ts
import { supabase } from "@/services/supabase";

export type HousingLead = {
  id: string;
  ad_id: string;
  requester_user_id: string;
  message?: string | null;
  status: string;
  created_at: string;
  ad?: {
    id: string;
    title: string;
    ad_type: string;
    price: number;
    price_unit: string;
    city?: string | null;
    district?: string | null;
    status: string;
  } | null;
};

// 👇 Supabase embed ad:ad_id también suele venir como array
type HousingLeadDbRow = Omit<HousingLead, "ad"> & {
  ad?: {
    id: any;
    title: any;
    ad_type: any;
    price: any;
    price_unit: any;
    city: any;
    district: any;
    status: any;
  }[] | null;
};

function normalizeAd(row: HousingLeadDbRow): HousingLead {
  const adArr = row.ad ?? null;
  const ad = Array.isArray(adArr) ? (adArr[0] ?? null) : (adArr as any);

  return {
    ...(row as any),
    ad: ad
      ? {
          id: String(ad.id ?? ""),
          title: String(ad.title ?? ""),
          ad_type: String(ad.ad_type ?? ""),
          price: Number(ad.price ?? 0),
          price_unit: String(ad.price_unit ?? ""),
          city: ad.city ?? null,
          district: ad.district ?? null,
          status: String(ad.status ?? ""),
        }
      : null,
  };
}

export async function listMyHousingLeads(params?: { limit?: number }) {
  const limit = params?.limit ?? 50;

  const { data, error } = await supabase
    .from("VoyHousingLeads")
    .select(
      `
      id, ad_id, requester_user_id, message, status, created_at,
      ad:ad_id ( id, title, ad_type, price, price_unit, city, district, status )
    `
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const rows = (data ?? []) as HousingLeadDbRow[];
  return rows.map(normalizeAd);
}
