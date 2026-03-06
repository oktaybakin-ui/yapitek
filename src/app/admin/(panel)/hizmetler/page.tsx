"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import type { Service } from "@/lib/supabase/types";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import ServiceForm from "./ServiceForm";

export default function HizmetlerPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<Service | null>(null);

  async function load() {
    const res = await fetch("/api/admin/services");
    const data = await res.json();
    if (Array.isArray(data)) setServices(data);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete() {
    if (!deleting) return;
    await fetch(`/api/admin/services/${deleting.id}`, { method: "DELETE" });
    setDeleting(null);
    load();
  }

  function handleEdit(svc: Service) {
    setEditing(svc);
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
      <ServiceForm
        service={editing}
        onSaved={handleSaved}
        onCancel={() => { setShowForm(false); setEditing(null); }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Hizmetler</h1>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
        >
          <Plus size={16} />
          Yeni Hizmet
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-10" />
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hizmet</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Özellikler</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Görsel</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc) => (
              <tr key={svc.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-400">
                  <GripVertical size={16} />
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium">{svc.title}</div>
                  <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">{svc.description}</div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-xs text-gray-500">{svc.features?.length || 0} özellik</span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  {svc.image_url ? (
                    <span className="text-xs text-green-600">Var</span>
                  ) : (
                    <span className="text-xs text-gray-400">Yok</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(svc)}
                      className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setDeleting(svc)}
                      className="p-1.5 rounded hover:bg-red-50 text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  Henüz hizmet eklenmemiş.
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
