import React, { useMemo, useState } from 'react';
import { Button } from '../../components/common/Button';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: {
    name: string;
    description: string;
    price: number;
    stock: number;
    category?: string;
    offer_price?: number;
  }) => void;
};

const DEFAULT_FORM = {
  name: '',
  description: '',
  price: '',
  stock: '',
  offer_price: '',
  category: '',
};

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState<typeof DEFAULT_FORM>(DEFAULT_FORM);

  const cleanedPrice = useMemo(() => Number(form.price), [form.price]);
  const cleanedOffer = useMemo(() => (form.offer_price ? Number(form.offer_price) : undefined), [form.offer_price]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;
    onSave({
      name: form.name,
      description: form.description,
      price: cleanedPrice,
      stock: Number(form.stock),
      offer_price: cleanedOffer,
      category: form.category || undefined,
    });
    setForm(DEFAULT_FORM);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-10"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b">
          <h3 className="text-lg font-bold text-gray-900">Crear nuevo producto</h3>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Título</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Descripción</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none min-h-[90px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Precio</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Stock</label>
              <input
                type="number"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                min="0"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Oferta (opcional)</label>
              <input
                type="number"
                value={form.offer_price}
                onChange={(e) => setForm({ ...form, offer_price: e.target.value })}
                className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Categoría</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="mt-1 w-full border rounded-xl px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <Button type="submit" variant="primary">
              Guardar producto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
