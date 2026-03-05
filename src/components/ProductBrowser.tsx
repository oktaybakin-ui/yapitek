"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
  ChevronRight,
  Phone,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
};

type Product = { name: string; image?: string };

interface Category {
  id: string;
  iconName: string;
  title: string;
  photo: string;
  desc: string;
  brands: string[];
  products: Product[];
}

function ProductCard({ product }: { product: Product }) {
  if (product.image) {
    return (
      <div className="group bg-white rounded border border-border overflow-hidden hover:border-accent/30 hover:shadow-md transition-all">
        <div className="relative h-40 overflow-hidden bg-background">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="px-3 py-2.5">
          <p className="text-sm font-medium leading-tight">{product.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-white rounded border border-border px-4 py-3.5 text-sm hover:border-accent/30 hover:shadow-sm transition-all group">
      <span className="w-2 h-2 bg-accent/60 rounded-full shrink-0 group-hover:bg-accent transition-colors" />
      <span className="font-medium">{product.name}</span>
    </div>
  );
}

export default function ProductBrowser({
  categories,
}: {
  categories: Category[];
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  const activeCat = categories.find((c) => c.id === activeId) ?? categories[0];
  const Icon = iconMap[activeCat.iconName] || Building2;

  const withImages = activeCat.products.filter((p) => p.image);
  const withoutImages = activeCat.products.filter((p) => !p.image);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* ─── Sol Sidebar ─── */}
      <aside className="lg:w-72 shrink-0">
        <div className="lg:sticky lg:top-36">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3 px-1">
            Kategoriler
          </h2>
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {categories.map((cat) => {
              const CatIcon = iconMap[cat.iconName] || Building2;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all whitespace-nowrap shrink-0 lg:shrink lg:whitespace-normal text-left ${
                    isActive
                      ? "bg-accent text-white shadow-md"
                      : "bg-white border border-border text-foreground hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  <CatIcon
                    size={18}
                    className={isActive ? "text-white" : "text-accent"}
                  />
                  {cat.title}
                  <ChevronRight
                    size={14}
                    className={`ml-auto hidden lg:block transition-transform ${
                      isActive ? "translate-x-0.5" : ""
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* CTA sidebar */}
          <div className="hidden lg:block mt-6 bg-accent/5 border border-accent/20 rounded p-5">
            <p className="text-sm font-semibold text-foreground">
              Toplu Sipariş İçin
            </p>
            <p className="text-xs text-muted mt-1">
              Proje bazlı fiyat teklifi alın
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-accent text-white text-xs font-semibold px-4 py-2 rounded mt-3 hover:bg-accent-dark transition-colors"
            >
              <Phone size={12} />
              İletişime Geçin
            </Link>
          </div>
        </div>
      </aside>

      {/* ─── Sağ İçerik ─── */}
      <main className="flex-1 min-w-0">
        {/* Kategori başlığı */}
        <div className="relative h-48 md:h-56 rounded overflow-hidden mb-6">
          <Image
            src={activeCat.photo}
            alt={activeCat.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-5 left-6 md:left-8 flex items-center gap-4">
            <div className="w-11 h-11 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {activeCat.title}
              </h2>
              <p className="text-white/70 text-sm">{activeCat.desc}</p>
            </div>
          </div>
        </div>

        {/* Marka etiketleri */}
        {activeCat.brands.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {activeCat.brands.map((b) => (
              <span
                key={b}
                className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Ürün sayısı */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">
              {activeCat.products.length}
            </span>{" "}
            ürün listeleniyor
          </p>
        </div>

        {/* Görselli ürünler */}
        {withImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            {withImages.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        )}

        {/* Görselsiz ürünler */}
        {withoutImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {withoutImages.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        )}

        {/* Alt CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-white border border-border rounded p-6">
          <div className="flex-1">
            <p className="font-semibold">
              {activeCat.title} için fiyat teklifi alın
            </p>
            <p className="text-sm text-muted mt-1">
              Proje detaylarınızı paylaşın, size özel teklif hazırlayalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-accent-dark transition-colors shrink-0"
          >
            Teklif Al
            <ChevronRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
