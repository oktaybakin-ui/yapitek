"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import type { Category } from "@/lib/supabase/types";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import CategoryForm from "./CategoryForm";

export default function KategorilerPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editing, setEditing] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<Category | null>(null);

  async function load() {
    const res = await fetch("/api/admin/categories");
    const data = await res.json();
    if (Array.isArray(data)) setCategories(data);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete() {
    if (!deleting) return;
    await fetch(`/api/admin/categories/${deleting.id}`, { method: "DELETE" });
    setDeleting(null);
    load();
  }

  function handleEdit(cat: Category) {
    setEditing(cat);
    setShowForm(true);
  }

  function handleNew() {
    setEditing(null);
    setShowForm(true);
  }

  function handleSaved() {
    setShowForm(false);
    setEditing(null);
    load();
  }

  if (showForm) {
    return (
      <CategoryForm
        category={editing}
        onSaved={handleSaved}
        onCancel={() => { setShowForm(false); setEditing(null); }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Kategoriler</h1>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
        >
          <Plus size={16} />
          Yeni Kategori
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-10" />
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Markalar</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-400">
                  <GripVertical size={16} />
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium">{cat.title}</div>
                  <div className="text-xs text-gray-500">{cat.id}</div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {cat.brands?.map((b) => (
                      <span key={b} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{b}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setDeleting(cat)}
                      className="p-1.5 rounded hover:bg-red-50 text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  Henüz kategori eklenmemiş.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DeleteConfirmModal
        open={!!deleting}
        title={deleting?.title || ""}
        onConfirm={handleDelete}
        onCancel={() => setDeleting(null)}
      />
    </div>
  );
}
