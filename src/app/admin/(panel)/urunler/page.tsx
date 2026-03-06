"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Product, Category } from "@/lib/supabase/types";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import ProductForm from "./ProductForm";

export default function UrunlerPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<Product | null>(null);

  async function load() {
    const [prodRes, catRes] = await Promise.all([
      fetch("/api/admin/products"),
      fetch("/api/admin/categories"),
    ]);
    const prods = await prodRes.json();
    const cats = await catRes.json();
    if (Array.isArray(prods)) setProducts(prods);
    if (Array.isArray(cats)) setCategories(cats);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete() {
    if (!deleting) return;
    await fetch(`/api/admin/products/${deleting.id}`, { method: "DELETE" });
    setDeleting(null);
    load();
  }

  function handleSaved() {
    setShowForm(false);
    setEditing(null);
    load();
  }

  const filtered = filter
    ? products.filter((p) => p.category_id === filter)
    : products;

  const catMap = Object.fromEntries(categories.map((c) => [c.id, c.title]));

  if (showForm) {
    return (
      <ProductForm
        product={editing}
        categories={categories}
        onSaved={handleSaved}
        onCancel={() => { setShowForm(false); setEditing(null); }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Ürünler</h1>
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
          <button
            onClick={() => { setEditing(null); setShowForm(true); }}
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
          >
            <Plus size={16} />
            Yeni Ürün
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ürün</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Kategori</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Görsel</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((prod) => (
              <tr key={prod.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{prod.name}</div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                    {catMap[prod.category_id] || prod.category_id}
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs ${prod.image_url ? "text-green-600" : "text-gray-400"}`}>
                    {prod.image_url ? "Var" : "Yok"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => { setEditing(prod); setShowForm(true); }}
                      className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setDeleting(prod)}
                      className="p-1.5 rounded hover:bg-red-50 text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  Ürün bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DeleteConfirmModal
        open={!!deleting}
        title={deleting?.name || ""}
        onConfirm={handleDelete}
        onCancel={() => setDeleting(null)}
      />
    </div>
  );
}
