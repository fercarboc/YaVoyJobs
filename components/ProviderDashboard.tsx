import React, { useEffect, useState } from 'react';
import { getMySellerProfiles } from '../services/marketplace/sellerService';
import { listProductsWithMyPrice, createProduct, updateProduct, deleteProduct } from '../services/marketplace/productsService';
import { SellerProfile, Product } from '../types/marketplace';

const ProviderDashboard: React.FC = () => {
  const [seller, setSeller] = useState<SellerProfile | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Partial<Product>>({ name: '', description: '', category_id: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    try {
      const sellers = await getMySellerProfiles();
      if (sellers.length > 0) {
        setSeller(sellers[0]);
        loadProducts(sellers[0].id);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async (seller_id: string) => {
    try {
      const data = await listProductsWithMyPrice({ seller_id });
      setProducts(data);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleEdit = (product: Product) => {
    setForm(product);
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Eliminar producto?')) return;
    await deleteProduct(id);
    if (seller) loadProducts(seller.id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seller) return;
    if (editingId) {
      await updateProduct(editingId, form);
    } else {
      await createProduct({ ...form, seller_id: seller.id });
    }
    setShowForm(false);
    setEditingId(null);
    setForm({ name: '', description: '', category_id: '' });
    loadProducts(seller.id);
  };

  if (loading) return <div>Cargando...</div>;
  if (!seller) return <div>No tienes perfil de proveedor.</div>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Panel de Proveedor</h2>
      <button className="mb-4 bg-emerald-500 text-white px-4 py-2 rounded" onClick={() => setShowForm(true)}>Nuevo producto</button>
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
          <input className="mb-2 w-full border p-2" placeholder="Nombre" value={form.name || ''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          <textarea className="mb-2 w-full border p-2" placeholder="Descripción" value={form.description || ''} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required />
          <input className="mb-2 w-full border p-2" placeholder="Categoría" value={form.category_id || ''} onChange={e => setForm(f => ({ ...f, category_id: e.target.value }))} required />
          <button className="bg-emerald-600 text-white px-4 py-2 rounded mr-2" type="submit">{editingId ? 'Actualizar' : 'Crear'}</button>
          <button className="bg-gray-300 px-4 py-2 rounded" type="button" onClick={() => { setShowForm(false); setEditingId(null); setForm({ name: '', description: '', category_id: '' }); }}>Cancelar</button>
        </form>
      )}
      <h3 className="text-xl font-semibold mb-2">Productos</h3>
      <ul>
        {products.map(p => (
          <li key={p.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <strong>{p.name}</strong> <span className="text-sm text-gray-500">({p.category_id})</span>
              <div className="text-xs text-gray-600">{p.description}</div>
            </div>
            <div>
              <button className="text-blue-600 mr-2" onClick={() => handleEdit(p)}>Editar</button>
              <button className="text-red-600" onClick={() => handleDelete(p.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderDashboard;
