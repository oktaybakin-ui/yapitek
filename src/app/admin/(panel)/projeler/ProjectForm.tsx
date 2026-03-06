"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/supabase/types";
import MultiImageUploader from "@/components/admin/MultiImageUploader";
import TagInput from "@/components/admin/TagInput";

interface Props {
  project: Project | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function ProjectForm({ project, onSaved, onCancel }: Props) {
  const isEdit = !!project;
  const [form, setForm] = useState({
    title: project?.title || "",
    location: project?.location || "",
    category_type: project?.category_type || "",
    description: project?.description || "",
    materials: project?.materials || [],
    images: project?.images || (project?.image_url ? [project.image_url] : []),
    status: project?.status || "completed" as "completed" | "ongoing",
    progress: project?.progress ?? 100,
    sort_order: project?.sort_order ?? 0,
  });
  const [saving, setSaving] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = isEdit
      ? `/api/admin/projects/${project!.id}`
      : "/api/admin/projects";
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
        Projelere Dön
      </button>

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Proje Düzenle" : "Yeni Proje"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">Proje Adı</label>
            <input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Konum</label>
            <input
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">Kategori Tipi</label>
            <input
              value={form.category_type}
              onChange={(e) => update("category_type", e.target.value)}
              placeholder="Konut, Ticari, Kamu, Sanayi"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Durum</label>
            <select
              value={form.status}
              onChange={(e) => update("status", e.target.value as "completed" | "ongoing")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            >
              <option value="completed">Tamamlandı</option>
              <option value="ongoing">Devam Ediyor</option>
            </select>
          </div>
        </div>

        {form.status === "ongoing" && (
          <div>
            <label className="block text-sm font-medium mb-1">İlerleme (%)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={form.progress}
              onChange={(e) => update("progress", Number(e.target.value))}
              className="w-24 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
            />
          </div>
        )}

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
          <label className="block text-sm font-medium mb-1">Malzemeler</label>
          <TagInput
            value={form.materials}
            onChange={(v) => update("materials", v)}
            placeholder="Malzeme adı yazıp Enter'a basın"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Görseller (max 10)</label>
          <MultiImageUploader
            value={form.images}
            onChange={(v) => update("images", v)}
            bucket="projects"
            max={10}
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
