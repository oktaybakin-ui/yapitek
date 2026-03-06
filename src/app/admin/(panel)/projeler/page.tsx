"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Project } from "@/lib/supabase/types";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import ProjectForm from "./ProjectForm";

export default function ProjelerPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<Project | null>(null);

  async function load() {
    const res = await fetch("/api/admin/projects");
    const data = await res.json();
    if (Array.isArray(data)) setProjects(data);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete() {
    if (!deleting) return;
    await fetch(`/api/admin/projects/${deleting.id}`, { method: "DELETE" });
    setDeleting(null);
    load();
  }

  function handleSaved() {
    setShowForm(false);
    setEditing(null);
    load();
  }

  const filtered = filter
    ? projects.filter((p) => p.status === filter)
    : projects;

  if (showForm) {
    return (
      <ProjectForm
        project={editing}
        onSaved={handleSaved}
        onCancel={() => { setShowForm(false); setEditing(null); }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Projeler</h1>
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="">Tümü</option>
            <option value="completed">Tamamlanan</option>
            <option value="ongoing">Devam Eden</option>
          </select>
          <button
            onClick={() => { setEditing(null); setShowForm(true); }}
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
          >
            <Plus size={16} />
            Yeni Proje
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proje</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Konum</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Durum</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((proj) => (
              <tr key={proj.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{proj.title}</div>
                  <div className="text-xs text-gray-500">{proj.category_type}</div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">
                  {proj.location}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    proj.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {proj.status === "completed" ? "Tamamlandı" : `Devam (%${proj.progress})`}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => { setEditing(proj); setShowForm(true); }}
                      className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setDeleting(proj)}
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
                  Proje bulunamadı.
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
