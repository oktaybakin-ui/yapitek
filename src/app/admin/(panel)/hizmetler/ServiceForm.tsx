"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import type { Service } from "@/lib/supabase/types";
import ImageUploader from "@/components/admin/ImageUploader";
import IconPicker from "@/components/admin/IconPicker";

interface Props {
  service: Service | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function ServiceForm({ service, onSaved, onCancel }: Props) {
  const isEdit = !!service;
  const [form, setForm] = useState({
    title: service?.title || "",
    description: service?.description || "",
    image_url: service?.image_url || "",
    icon_name: service?.icon_name || "Package",
    features: service?.features || [],
    sort_order: service?.sort_order ?? 0,
  });
  const [saving, setSaving] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = isEdit
      ? `/api/admin/services/${service!.id}`
      : "/api/admin/services";
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
        Hizmetlere Dön
      </button>

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Hizmet Düzenle" : "Yeni Hizmet"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Hizmet Adı</label>
          <input
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Açıklama</label>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={4}
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
            value={form.image_url}
            onChange={(v) => update("image_url", v)}
            bucket="corporate"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Özellikler</label>
          <div className="space-y-2">
            {form.features.map((feat, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={feat}
                  onChange={(e) => {
                    const features = [...form.features];
                    features[i] = e.target.value;
                    update("features", features);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                  placeholder={`Özellik ${i + 1}`}
                />
                <button
                  type="button"
                  onClick={() => update("features", form.features.filter((_, idx) => idx !== i))}
                  className="p-2 rounded hover:bg-red-50 text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => update("features", [...form.features, ""])}
            className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium mt-2"
          >
            <Plus size={16} />
            Özellik Ekle
          </button>
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
