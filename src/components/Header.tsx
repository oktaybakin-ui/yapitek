"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Kurumsal" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hesaplama", label: "Hesaplama" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Üst bilgi çubuğu */}
      <div className="hidden lg:block bg-foreground text-white/80 text-xs">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+90312XXXXXXX" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              0312 XXX XX XX
            </a>
            <a href="mailto:info@yapitek.tr" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} />
              info@yapitek.tr
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} />
            Pzt - Cmt: 08:00 - 18:00
          </div>
        </div>
      </div>

      {/* Ana navigasyon */}
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="YapıTek Yapı Malzemeleri"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative hover:text-accent transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/iletisim"
            className="hidden lg:inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent-dark transition-colors btn-shine"
          >
            Teklif Al
            <ChevronRight size={15} />
          </Link>

          <button
            className="lg:hidden text-foreground"
            aria-label="Menü"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${
                  mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${
                  mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobil menü - animated */}
        <div
          ref={mobileRef}
          className={`lg:hidden border-t border-border bg-white overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="transition-all duration-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                <Link
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="pt-3 border-t border-border transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Teklif Al
                <ChevronRight size={15} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
