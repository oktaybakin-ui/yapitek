"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hesaplama", label: "Hesaplama" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-accent text-white shadow-md">
      {/* Üst bar */}
      <div className="hidden lg:block border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={14} />
              <a href="tel:+902121234567" className="hover:underline">
                0212 123 45 67
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} />
              <a href="mailto:info@yapitek.com" className="hover:underline">
                info@yapitek.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Pzt - Cmt: 08:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Ana navbar */}
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Yapı<span className="text-[#EAECE3]">Tek</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#EAECE3] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/iletisim"
          className="hidden lg:inline-flex items-center gap-2 bg-[#EAECE3] text-accent px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white transition-colors"
        >
          Teklif Al
          <ArrowRight size={16} />
        </Link>

        {/* Mobil menü butonu */}
        <button
          className="lg:hidden"
          aria-label="Menü"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="lg:hidden bg-accent border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-[#EAECE3] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-[#EAECE3] text-accent px-5 py-2.5 rounded-lg text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Teklif Al
                <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
