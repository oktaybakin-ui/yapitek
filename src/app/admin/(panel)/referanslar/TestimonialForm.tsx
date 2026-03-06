"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Testimonial } from "@/lib/supabase/types";

interface Props {
  testimonial: Testimonial | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function TestimonialForm({ testimonial, onSaved, onCancel }: Props) {
  const isEdit = !!testimonial;
  const [form, setForm] = useState({
    author_name: testimonial?.author_name || "",
    company: testimonial?.company || "",
    text: testimonial?.text || "",
    sort_order: testimonial?.sort_order ?? 0,
  });
  const [saving, setSaving] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = isEdit
      ? `/api/admin/testimonials/${testimonial!.id}`
      : "/api/admin/testimonials";
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
        {isEdit ? "Yorum Düzenle" : "Yeni Yorum"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">Ad Soyad</label>
            <input
              value={form.author_name}
              onChange={(e) => update("author_name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Firma</label>
            <input
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Yorum Metni</label>
          <textarea
            value={form.text}
            onChange={(e) => update("text", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
            required
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
