import type { Metadata } from "next";
import {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
  ChevronRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "YapıTek yapı malzemeleri ürün kataloğu. Su yalıtımı, ısı yalıtımı, boya, yapı kimyasalları, alçı ve yapı levhaları.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Ürünlerimiz</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          İhtiyacınız olan tüm yapı malzemelerini en kaliteli markalarla
          tek çatı altında sunuyoruz.
        </p>
      </div>
    </section>
  );
}

const productCategories = [
  {
    id: "su-yalitimi",
    icon: Droplets,
    title: "Su Yalıtımı",
    photo: "/products/su-yalitimi.jpg",
    desc: "Binaları su hasarından koruyan yüksek performanslı yalıtım çözümleri.",
    products: [
      "Bitümlü Su Yalıtım Membranları",
      "Likit Membran",
      "PVC Su Yalıtım Örtüleri",
      "Kristalize Su Yalıtımı",
      "Su Tutucu Bantlar",
      "Şişen Bant ve Mastikler",
      "Drenaj Levhaları",
      "Zemin Altı Yalıtım Sistemleri",
    ],
  },
  {
    id: "isi-yalitimi",
    icon: Layers,
    title: "Isı Yalıtımı",
    photo: "/products/isi-yalitimi.jpg",
    desc: "Enerji tasarrufu sağlayan, TSE belgeli ısı yalıtım malzemeleri.",
    products: [
      "EPS (Strafor) Levhalar",
      "XPS Isı Yalıtım Levhaları",
      "Taş Yünü Levhalar",
      "Cam Yünü Levhalar",
      "Poliüretan Köpük",
      "Isı Yalıtım Dübelleri",
      "Mantolama Sistemleri",
      "Çatı Yalıtım Malzemeleri",
    ],
  },
  {
    id: "boya",
    icon: Paintbrush,
    title: "Boya",
    photo: "/products/boya.jpg",
    desc: "İç ve dış mekanlar için premium kalitede boya çözümleri.",
    products: [
      "İç Cephe Boyaları",
      "Dış Cephe Boyaları",
      "Astar ve Primer",
      "Tavan Boyaları",
      "Antipas ve Koruyucu Boyalar",
      "Vernik ve Cilalar",
      "Dekoratif Boyalar",
      "Endüstriyel Boyalar",
    ],
  },
  {
    id: "yapi-kimyasallari",
    icon: FlaskConical,
    title: "Yapı Kimyasalları",
    photo: "/products/yapi-kimyasallari.jpg",
    desc: "Yapıların dayanıklılığını artıran kimyasal çözümler.",
    products: [
      "Fayans Yapıştırıcıları",
      "Derz Dolgu Malzemeleri",
      "Beton Katkıları",
      "Epoksi Ürünleri",
      "Zemin Kaplamalar",
      "Tamir Harçları",
      "Ankraj Kimyasalları",
      "Sızdırmazlık Malzemeleri",
    ],
  },
  {
    id: "alci-siva",
    icon: Hammer,
    title: "Alçı & Sıva",
    photo: "/products/alci-siva.jpg",
    desc: "İç mekan düzenleme ve kaplama için alçı ve sıva ürünleri.",
    products: [
      "Makine Sıvası",
      "Alçı Sıva",
      "Hazır Sıva",
      "Perlitli Sıva",
      "Dekoratif Sıva",
      "Tavan Alçısı",
      "Kartonpiyer Yapıştırıcı",
      "Dış Cephe Sıvaları",
    ],
  },
  {
    id: "yapi-levhalari",
    icon: Building2,
    title: "Yapı Levhaları",
    photo: "/products/yapi-levhalari.jpg",
    desc: "Bölme duvar, asma tavan ve kaplama için yapı levhaları.",
    products: [
      "Standart Alçıpan",
      "Suya Dayanıklı Alçıpan",
      "Yangına Dayanıklı Alçıpan",
      "Ses Yalıtım Levhaları",
      "OSB Levhalar",
      "Çimento Levhalar",
      "Taşıyıcı Profiller (C-U)",
      "Asma Tavan Profilleri",
    ],
  },
];

function CategorySection({
  cat,
}: {
  cat: (typeof productCategories)[number];
}) {
  return (
    <section id={cat.id} className="scroll-mt-24">
      <div className="bg-card rounded border border-border overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={cat.photo}
            alt={cat.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-8 md:left-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <cat.icon size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              <p className="text-white/70 text-sm">{cat.desc}</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {cat.products.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 bg-background rounded-sm px-4 py-3 text-sm hover:bg-accent/5 transition-colors"
              >
                <ChevronRight size={14} className="text-accent shrink-0" />
                {p}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              Fiyat Teklifi Al
            </Link>
            <Link
              href="/hesaplama"
              className="text-accent text-sm font-medium hover:underline"
            >
              Malzeme Hesapla →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UrunlerPage() {
  return (
    <>
      <PageBanner />
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {/* Kategori hızlı navigasyon */}
          <div className="flex flex-wrap gap-3 justify-center pb-8 border-b border-border">
            {productCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <cat.icon size={16} />
                {cat.title}
              </a>
            ))}
          </div>

          {/* Kategoriler */}
          {productCategories.map((cat) => (
            <CategorySection key={cat.id} cat={cat} />
          ))}

          {/* CTA */}
          <div className="bg-accent rounded p-10 text-white text-center">
            <h3 className="text-2xl font-bold">
              Aradığınız Ürünü Bulamadınız mı?
            </h3>
            <p className="text-white/70 mt-2 max-w-lg mx-auto">
              Kataloğumuzda yer almayan ürünler için bizi arayın.
              İhtiyacınız olan malzemeyi temin edebiliriz.
            </p>
            <a
              href="tel:+90312XXXXXXX"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-3.5 rounded-sm font-semibold hover:bg-white transition-colors mt-6"
            >
              <Phone size={18} />
              0312 XXX XX XX
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
