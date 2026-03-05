import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Hakkında */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Yapı<span className="text-[#EAECE3]">Tek</span>
            </Link>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Kaliteli yapı malzemeleri ile projelerinizin güvenilir tedarikçisi.
              15 yılı aşkın sektör deneyimimizle yanınızdayız.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-white transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-white transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/hesaplama" className="hover:text-white transition-colors">
                  Hesaplama
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürün Kategorileri */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ürünler</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/urunler#su-yalitimi" className="hover:text-white transition-colors">
                  Su Yalıtımı
                </Link>
              </li>
              <li>
                <Link href="/urunler#isi-yalitimi" className="hover:text-white transition-colors">
                  Isı Yalıtımı
                </Link>
              </li>
              <li>
                <Link href="/urunler#boya" className="hover:text-white transition-colors">
                  Boya
                </Link>
              </li>
              <li>
                <Link href="/urunler#yapi-kimyasallari" className="hover:text-white transition-colors">
                  Yapı Kimyasalları
                </Link>
              </li>
              <li>
                <Link href="/urunler#alci-siva" className="hover:text-white transition-colors">
                  Alçı &amp; Sıva
                </Link>
              </li>
              <li>
                <Link href="/urunler#yapi-levhalari" className="hover:text-white transition-colors">
                  Yapı Levhaları
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                OSB Yapı Malzemeleri Cad. No:42, İstanbul
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                0212 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                info@yapitek.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt çizgi */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <span>&copy; 2026 YapıTek. Tüm hakları saklıdır.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white/60 transition-colors">
              KVKK
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
