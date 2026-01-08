import { supabase } from "../../services/supabase";
import { MarketIncident, MarketVendor, Product, SubOrder, VendorPayment } from "../types/marketplace.types";

type ProductFilters = {
  promoted?: boolean;
  search?: string;
  category?: string;
  vendorId?: string;
  lowStock?: boolean;
};

type OrderCreationPayload = {
  buyerId?: string;
  guestInfo?: {
    name: string;
    email: string;
  };
  shipping: {
    address: string;
    city: string;
    postalCode: string;
  };
  items: Array<{
    productId: string;
    name?: string;
    quantity: number;
    price: number;
    vendorId?: string;
  }>;
  total: number;
};

const groupItemsByVendor = (items: OrderCreationPayload["items"]) => {
  return items.reduce<Record<string, OrderCreationPayload["items"]>>((acc, item) => {
    const vendorId = item.vendorId || "unknown";
    if (!acc[vendorId]) {
      acc[vendorId] = [];
    }
    acc[vendorId].push(item);
    return acc;
  }, {});
};

export const marketplaceApi = {
  async getProducts(filters: ProductFilters = {}) {
    try {
      let query = supabase
        .from("VoyMarketProducts")
        .select(`
          *,
          vendor:vendor_id(*),
          category:category_id(*)
        `)
        .eq("status", "published")
        .order("updated_at", { ascending: false });

      if (filters.promoted) {
        query = query.eq("is_promoted", true);
      }

      if (filters.search) {
        query = query.ilike("name", `%${filters.search}%`);
      }

      if (filters.vendorId) {
        query = query.eq("vendor_id", filters.vendorId);
      }

      if (filters.category && filters.category !== "Todas") {
        query = query.ilike("category", `%${filters.category}%`);
      }

      if (filters.lowStock) {
        query = query.lt("stock", 5);
      }

      const { data, error } = await query;
      return { data: (data as Product[]) || [], error };
    } catch (error) {
      return { data: [], error: error as Error };
    }
  },

  async getProductById(id: string) {
    if (!id) return { data: null, error: new Error("ID de producto requerido") };
    const { data, error } = await supabase
      .from("VoyMarketProducts")
      .select(`
        *,
        vendor:vendor_id(*),
        category:category_id(*)
      `)
      .eq("id", id)
      .single();
    return { data: data as Product | null, error };
  },

  async getCategories() {
    const { data, error } = await supabase.from("VoyMarketCategories").select("*").order("name");
    return { data: (data as { id: string; name: string }[]) || [], error };
  },

  async createProduct(productData: Partial<Product>) {
    if (!productData.vendor_id) {
      return { data: null, error: new Error("Vendor ID missing") };
    }
    const { data, error } = await supabase
      .from("VoyMarketProducts")
      .insert(productData)
      .select("*")
      .single();
    return { data: data as Product | null, error };
  },

  async getVendorOrders(vendorId: string) {
    if (!vendorId) return { data: [], error: new Error("Vendor ID requerido") };
    const { data, error } = await supabase
      .from("VoyMarketSubOrders")
      .select(`
        *,
        order:order_id(*),
        items:VoyMarketOrderItems(*)
      `)
      .eq("vendor_id", vendorId)
      .order("created_at", { ascending: false });
    return { data: (data as SubOrder[]) || [], error };
  },

  async getVendorPayments(vendorId?: string) {
    let query = supabase
      .from("VoyMarketLedger")
      .select(`
        *,
        vendor:vendor_id(business_name)
      `)
      .order("created_at", { ascending: false });
    if (vendorId) {
      query = query.eq("vendor_id", vendorId);
    }
    const { data, error } = await query;
    return {
      data: (data as VendorPayment[]) || [],
      error,
    };
  },

  async getIncidents(vendorId?: string) {
    try {
      let query = supabase.from("VoyMarketIncidents").select("*");
      if (vendorId) query = query.eq("vendor_id", vendorId);
      const { data, error } = await query.order("created_at", { ascending: false });
      return { data: (data as MarketIncident[]) || [], error };
    } catch (err) {
      // Tabla aún no creada en algunas instancias. Retornamos mock para no romper UX.
      return {
        data: [
          {
            id: "inc-000",
            vendor_id: vendorId || "v1",
            title: "Incidencia simulada",
            description: "Estamos preparando el historial de incidencias.",
            status: "open",
            severity: "medium",
            created_at: new Date().toISOString(),
          },
        ],
        error: err as Error,
      };
    }
  },

  async getAllVendors() {
    const { data, error } = await supabase
      .from("VoyMarketVendors")
      .select(`
        *,
        company:company_id(*)
      `)
      .order("created_at", { ascending: false });
    return { data: (data as MarketVendor[]) || [], error };
  },

  async getOrdersForBuyer(buyerId: string) {
    if (!buyerId) return { data: [], error: new Error("Usuario no autenticado") };
    const { data, error } = await supabase
      .from("VoyMarketOrders")
      .select(`
        *,
        sub_orders:VoyMarketSubOrders(
          *,
          items:VoyMarketOrderItems(*)
        )
      `)
      .eq("buyer_id", buyerId)
      .order("created_at", { ascending: false });
    return { data: data as any[], error };
  },

  async placeOrder(payload: OrderCreationPayload) {
    if (!payload.items.length) {
      return { data: null, error: new Error("El carrito está vacío") };
    }

    if (!payload.shipping?.address || !payload.shipping.city || !payload.shipping.postalCode) {
      return { data: null, error: new Error("Faltan datos de envío") };
    }

    const orderInsert = {
      buyer_id: payload.buyerId ?? null,
      total: payload.total,
      status: "pending",
      shipping_address: payload.shipping.address,
      shipping_city: payload.shipping.city,
      shipping_postal_code: payload.shipping.postalCode,
      customer_name: payload.guestInfo?.name ?? null,
      customer_email: payload.guestInfo?.email ?? null,
    };

    const { data: order, error: orderError } = await supabase
      .from("VoyMarketOrders")
      .insert(orderInsert)
      .select("*")
      .single();

    if (orderError || !order) {
      return { data: null, error: orderError ?? new Error("No se pudo crear el pedido") };
    }

    const groups = groupItemsByVendor(payload.items);
    for (const [vendorId, vendorItems] of Object.entries(groups)) {
      const subtotal = vendorItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const { data: subOrder, error: subError } = await supabase
        .from("VoyMarketSubOrders")
        .insert({
          order_id: order.id,
          vendor_id: vendorId,
          subtotal,
          status: "pending",
        })
        .select("*")
        .single();

      if (subError || !subOrder) {
        return { data: null, error: subError ?? new Error("No se pudo crear la suborden") };
      }

      const itemsPayload = (vendorItems as OrderCreationPayload["items"]).map((item) => ({
        sub_order_id: subOrder.id,
        product_id: item.productId,
        product_name: item.name ?? "Producto YaVoy",
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase.from("VoyMarketOrderItems").insert(itemsPayload);
      if (itemsError) {
        return { data: null, error: itemsError };
      }
    }

    return { data: order, error: null };
  },
};
