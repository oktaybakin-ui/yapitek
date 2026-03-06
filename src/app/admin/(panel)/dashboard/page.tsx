"use client";

import { useEffect, useState } from "react";
import { FolderOpen, Package, Building2, Image as ImageIcon } from "lucide-react";

interface Stats {
  categories: number;
  products: number;
  projects: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ categories: 0, products: 0, projects: 0 });

  useEffect(() => {
    async function load() {
      try {
        const [catRes, prodRes, projRes] = await Promise.all([
          fetch("/api/admin/categories"),
          fetch("/api/admin/products"),
          fetch("/api/admin/projects"),
        ]);
        const cats = await catRes.json();
        const prods = await prodRes.json();
        const projs = await projRes.json();
        setStats({
          categories: Array.isArray(cats) ? cats.length : 0,
          products: Array.isArray(prods) ? prods.length : 0,
          projects: Array.isArray(projs) ? projs.length : 0,
        });
      } catch {
        // ignore
      }
    }
    load();
  }, []);

  const cards = [
    { label: "Kategoriler", value: stats.categories, icon: FolderOpen, color: "bg-blue-500" },
    { label: "Ürünler", value: stats.products, icon: Package, color: "bg-green-500" },
    { label: "Projeler", value: stats.projects, icon: Building2, color: "bg-purple-500" },
    { label: "Görseller", value: "-", icon: ImageIcon, color: "bg-orange-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">{c.label}</span>
              <div className={`${c.color} w-10 h-10 rounded flex items-center justify-center`}>
                <c.icon size={20} className="text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
