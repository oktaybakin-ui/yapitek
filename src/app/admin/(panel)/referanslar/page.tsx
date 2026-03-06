"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, GripVertical, Image as ImageIcon } from "lucide-react";
import type { BrandPartner, Testimonial } from "@/lib/supabase/types";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import BrandPartnerForm from "./BrandPartnerForm";
import TestimonialForm from "./TestimonialForm";

type Tab = "brands" | "testimonials";

export default function ReferanslarPage() {
  const [tab, setTab] = useState<Tab>("brands");

  // Brand Partners state
  const [brands, setBrands] = useState<BrandPartner[]>([]);
  const [editingBrand, setEditingBrand] = useState<BrandPartner | null>(null);
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [deletingBrand, setDeletingBrand] = useState<BrandPartner | null>(null);

  // Testimonials state
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [deletingTestimonial, setDeletingTestimonial] = useState<Testimonial | null>(null);

  async function loadBrands() {
    const res = await fetch("/api/admin/brand-partners");
    const data = await res.json();
    if (Array.isArray(data)) setBrands(data);
  }

  async function loadTestimonials() {
    const res = await fetch("/api/admin/testimonials");
    const data = await res.json();
    if (Array.isArray(data)) setTestimonials(data);
  }

  useEffect(() => {
    loadBrands();
    loadTestimonials();
  }, []);

  // Brand handlers
  async function handleDeleteBrand() {
    if (!deletingBrand) return;
    await fetch(`/api/admin/brand-partners/${deletingBrand.id}`, { method: "DELETE" });
    setDeletingBrand(null);
    loadBrands();
  }

  function handleBrandSaved() {
    setShowBrandForm(false);
    setEditingBrand(null);
    loadBrands();
  }

  // Testimonial handlers
  async function handleDeleteTestimonial() {
    if (!deletingTestimonial) return;
    await fetch(`/api/admin/testimonials/${deletingTestimonial.id}`, { method: "DELETE" });
    setDeletingTestimonial(null);
    loadTestimonials();
  }

  function handleTestimonialSaved() {
    setShowTestimonialForm(false);
    setEditingTestimonial(null);
    loadTestimonials();
  }

  // Form views
  if (showBrandForm) {
    return (
      <BrandPartnerForm
        partner={editingBrand}
        onSaved={handleBrandSaved}
        onCancel={() => { setShowBrandForm(false); setEditingBrand(null); }}
      />
    );
  }

  if (showTestimonialForm) {
    return (
      <TestimonialForm
        testimonial={editingTestimonial}
        onSaved={handleTestimonialSaved}
        onCancel={() => { setShowTestimonialForm(false); setEditingTestimonial(null); }}
      />
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Referanslar</h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded p-1 w-fit">
        <button
          onClick={() => setTab("brands")}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            tab === "brands" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Marka Ortakları ({brands.length})
        </button>
        <button
          onClick={() => setTab("testimonials")}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            tab === "testimonials" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Müşteri Yorumları ({testimonials.length})
        </button>
      </div>

      {/* Brands Tab */}
      {tab === "brands" && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Marka Ortakları</h2>
            <button
              onClick={() => { setEditingBrand(null); setShowBrandForm(true); }}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
            >
              <Plus size={16} />
              Yeni Marka
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-10" />
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marka</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Kategori</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Logo</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((b) => (
                  <tr key={b.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">
                      <GripVertical size={16} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{b.name}</div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{b.category}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {b.logo_url ? (
                        <span className="text-xs text-green-600">Var</span>
                      ) : (
                        <span className="text-xs text-gray-400">Yok</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => { setEditingBrand(b); setShowBrandForm(true); }}
                          className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => setDeletingBrand(b)}
                          className="p-1.5 rounded hover:bg-red-50 text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {brands.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                      Henüz marka eklenmemiş.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <DeleteConfirmModal
            open={!!deletingBrand}
            title={deletingBrand?.name || ""}
            onConfirm={handleDeleteBrand}
            onCancel={() => setDeletingBrand(null)}
          />
        </>
      )}

      {/* Testimonials Tab */}
      {tab === "testimonials" && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Müşteri Yorumları</h2>
            <button
              onClick={() => { setEditingTestimonial(null); setShowTestimonialForm(true); }}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90"
            >
              <Plus size={16} />
              Yeni Yorum
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-10" />
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kişi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Firma</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Yorum</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((t) => (
                  <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">
                      <GripVertical size={16} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{t.author_name}</div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-sm text-gray-600">{t.company}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-sm text-gray-500 line-clamp-1">{t.text}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => { setEditingTestimonial(t); setShowTestimonialForm(true); }}
                          className="p-1.5 rounded hover:bg-blue-50 text-blue-600"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => setDeletingTestimonial(t)}
                          className="p-1.5 rounded hover:bg-red-50 text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {testimonials.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                      Henüz yorum eklenmemiş.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <DeleteConfirmModal
            open={!!deletingTestimonial}
            title={deletingTestimonial?.author_name || ""}
            onConfirm={handleDeleteTestimonial}
            onCancel={() => setDeletingTestimonial(null)}
          />
        </>
      )}
    </div>
  );
}
