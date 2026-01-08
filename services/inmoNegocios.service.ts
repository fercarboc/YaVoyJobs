// src/services/inmoNegocios.service.ts
import { supabase } from "@/services/supabase";


import { AdType, AdStatus, RealEstateOperation,RealEstateCategory } from "@/pages/perfilesnew/types";

type HousingAdRow = {
  id: any;
  title: any;
  city: any;
  district: any;
  price: any;
  status: any;   // en BD puede ser ACTIVE, RESERVED, etc
  ad_type: any;  // FLAT, LOCAL, ROOM, ...
  metadata: any;
  images?: Array<{ url: any; sort_order: any }> | null;
};

function mapStatus(dbStatus: string): AdStatus {
  const s = (dbStatus || "").toUpperCase();

  // Ajusta aquí si tu BD usa otros nombres
  if (s === "ACTIVE" || s === "AVAILABLE") return AdStatus.AVAILABLE;
  if (s === "RESERVED") return AdStatus.RESERVED;
  if (s === "NEGOTIATING") return AdStatus.NEGOTIATING;

  // fallback seguro
  return AdStatus.AVAILABLE;
}

function mapOperation(meta: any): RealEstateOperation {
  const op = String(meta?.operation ?? "").toUpperCase();
  return op === "SALE" ? RealEstateOperation.SALE : RealEstateOperation.RENT;
}

function mapCategory(adType: string): RealEstateCategory {
  const t = (adType || "").toUpperCase();

  switch (t) {
    case "FLAT":
      return RealEstateCategory.FLAT;
    case "LOCAL":
      return RealEstateCategory.LOCAL;

    // Si en BD tienes habitaciones u otros, los llevamos a OTHER
    case "ROOM":
    case "HABITACION":
    default:
      return RealEstateCategory.OTHER;
  }
}

export async function listWorkerInmoAds(limit = 30) {
  const { data, error } = await supabase
    .from("VoyHousingAds")
    .select(
      `
      id, title, city, district, price, status, ad_type, metadata,
      images:VoyHousingImages ( url, sort_order )
    `
    )
    .eq("status", "ACTIVE")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const rows = (data ?? []) as HousingAdRow[];

  return rows.map((r) => {
    const imgs = Array.isArray(r.images) ? r.images.slice() : [];
    imgs.sort((a, b) => Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0));

    const imageUrl = imgs[0]?.url ?? `https://picsum.photos/400/300?random=${String(r.id)}`;

    return {
      id: String(r.id),
      type: AdType.REAL_STATE,
      title: String(r.title ?? ""),
      location: [r.city, r.district].filter(Boolean).join(" · ") || "—",
      price: Number(r.price ?? 0),
      status: mapStatus(String(r.status ?? "")),
      operation: mapOperation(r.metadata),
      realEstateCategory: mapCategory(String(r.ad_type ?? "")),
      surface: Number(r.metadata?.surface ?? 0),
      leads: null, // worker no ve interesados reales
      imageUrl,
    };
  });
}
