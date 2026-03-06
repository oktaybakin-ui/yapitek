"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Category } from "@/lib/supabase/types";
import ImageUploader from "@/components/admin/ImageUploader";
import IconPicker from "@/components/admin/IconPicker";
import TagInput from "@/components/admin/TagInput";

interface Props {
  category: Category | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function CategoryForm({ category, onSaved, onCancel }: Props) {
  const isEdit = !!category;
  const [form, setForm] = useState({
    id: category?.id || "",
    icon_name: category?.icon_name || "Droplets",
    title: category?.title || "",
    photo_url: category?.photo_url || "",
    description: category?.description || "",
    brands: category?.brands || [],
    sort_order: category?.sort_order ?? 0,
  });
  const [saving, setSaving] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = isEdit
      ? `/api/admin/categories/${category!.id}`
      : "/api/admin/categories";
    const method = isEdit ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    onSaved();
  }

  return (
    <div>
      <button onClick={onCancel} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900">
        <ArrowLeft size={18} />
        Kategorilere Dön
      </button>

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Kategori Düzenle" : "Yeni Kategori"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">ID (slug)</label>
            <input
              value={form.id}
              onChange={(e) => update("id", e.target.value)}
              disabled={isEdit}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent disabled:bg-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Başlık</label>
            <input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Açıklama</label>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">İkon</label>
          <IconPicker value={form.icon_name} onChange={(v) => update("icon_name", v)} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Görsel</label>
          <ImageUploader
            value={form.photo_url}
            onChange={(v) => update("photo_url", v)}
            bucket="categories"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Markalar</label>
          <TagInput
            value={form.brands}
            onChange={(v) => update("brands", v)}
            placeholder="Marka adı yazıp Enter'a basın"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sıralama</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => update("sort_order", Number(e.target.value))}
            className="w-24 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-accent text-white px-6 py-2 rounded text-sm font-medium hover:bg-accent/90 disabled:opacity-50"
          >
            {saving ? "Kaydediliyor..." : isEdit ? "Güncelle" : "Oluştur"}
          </button>
          <button type="button" onClick={onCancel} className="px-6 py-2 rounded text-sm border border-gray-300 hover:bg-gray-50">
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}
