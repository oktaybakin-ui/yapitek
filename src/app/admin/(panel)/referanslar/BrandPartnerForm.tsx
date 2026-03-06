"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { BrandPartner } from "@/lib/supabase/types";
import ImageUploader from "@/components/admin/ImageUploader";

interface Props {
  partner: BrandPartner | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function BrandPartnerForm({ partner, onSaved, onCancel }: Props) {
  const isEdit = !!partner;
  const [form, setForm] = useState({
    name: partner?.name || "",
    logo_url: partner?.logo_url || "",
    category: partner?.category || "",
    sort_order: partner?.sort_order ?? 0,
  });
  const [saving, setSaving] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = isEdit
      ? `/api/admin/brand-partners/${partner!.id}`
      : "/api/admin/brand-partners";
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
        Referanslara Dön
      </button>

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Marka Düzenle" : "Yeni Marka"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">Marka Adı</label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <input
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              placeholder="Yalıtım, Boya, vb."
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Logo</label>
          <ImageUploader
            value={form.logo_url}
            onChange={(v) => update("logo_url", v)}
            bucket="corporate"
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
