import { supabase } from '../supabase';
import { Product } from '../../types/marketplace';

export async function listProductsWithMyPrice(params: any) {
  const { data, error } = await supabase.rpc('list_products_with_my_price', params);
  if (error) throw error;
  return data as Product[];
}

export async function createProduct(input: Partial<Product>) {
  const { data, error } = await supabase
    .from('voy_marketplace.products')
    .insert([input])
    .select()
    .single();
  if (error) throw error;
  return data as Product;
}

export async function updateProduct(id: string, input: Partial<Product>) {
  const { data, error } = await supabase
    .from('voy_marketplace.products')
    .update(input)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as Product;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('voy_marketplace.products')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
}
