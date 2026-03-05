import type { Metadata } from "next";
import {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
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

type Product = { name: string; image?: string };

const productCategories = [
  {
    id: "su-yalitimi",
    icon: Droplets,
    title: "Su Yalıtımı",
    photo: "/products/su-yalitimi.jpg",
    desc: "Binaları su hasarından koruyan yüksek performanslı yalıtım çözümleri.",
    brands: ["FIXA", "İzocam", "Sika"],
    products: [
      { name: "Cam Tülü Taşıyıcılı Membran", image: "/products/su-yalitimi/cam-tulu-membran.jpg" },
      { name: "Polyester Keçe Taşıyıcılı Membran", image: "/products/su-yalitimi/polyester-membran.jpg" },
      { name: "Keçe Taşıyıcısız Membran", image: "/products/su-yalitimi/kece-membran.jpg" },
      { name: "Arduazlı Membran", image: "/products/su-yalitimi/arduazli-membran.jpg" },
      { name: "PVC Geomembran", image: "/products/su-yalitimi/pvc-geomembran.jpg" },
      { name: "HDPE Membran", image: "/products/su-yalitimi/hdpe-membran.jpg" },
      { name: "TPO Membran", image: "/products/su-yalitimi/tpo-membran.jpg" },
      { name: "PVB Çatı Membranı", image: "/products/su-yalitimi/pvb-cati-membran.jpg" },
      { name: "Baca Bandı", image: "/products/su-yalitimi/baca-bandi.jpg" },
      { name: "Su Tutucu Bant", image: "/products/su-yalitimi/su-tutucu-bant.jpg" },
      { name: "Su ile Şişen Bant (Swel)", image: "/products/su-yalitimi/sisen-bant.jpg" },
      { name: "FIXA POLAN A – Poliüretan Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-a.jpg" },
      { name: "FIXA POLAN 500 – PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-500.jpg" },
      { name: "FIXA POLAN 620 – PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-620.jpg" },
      { name: "FIXA POLAN 700 – Poliürea Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-700.jpg" },
      { name: "FIXA BİTÜMFİX PU – Bitüm+PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-bitumfix-pu.jpg" },
      { name: "FIXA IMPERMO PVC – Su Tutucu Bant", image: "/products/su-yalitimi/fixa-impermo-pvc.jpg" },
      { name: "FIXA IMPERMO Şişen Bant", image: "/products/su-yalitimi/fixa-impermo-sisen.jpg" },
      { name: "FIXA IMPERMO Su Yalıtım Filesi", image: "/products/su-yalitimi/fixa-impermo-file.jpg" },
      { name: "Likit Membran" },
      { name: "Kristalize Su Yalıtımı" },
      { name: "Çimento Esaslı Su Yalıtımı" },
      { name: "Silikon Esaslı Su Yalıtımı" },
      { name: "Kapiler Su Yalıtımı" },
      { name: "Hibrid Polimer Su Yalıtımı" },
      { name: "MS Polimer Su Yalıtımı" },
      { name: "Dilatasyon Bandı" },
      { name: "Drenaj Levhaları" },
    ] as Product[],
  },
  {
    id: "isi-yalitimi",
    icon: Layers,
    title: "Isı Yalıtımı",
    photo: "/products/isi-yalitimi.jpg",
    desc: "Enerji tasarrufu sağlayan, TSE belgeli ısı yalıtım malzemeleri.",
    brands: ["İzocam", "Knauf", "Hekim Yapı", "Bonus XPS", "Dalsan"],
    products: [
      { name: "EPS (Strafor) Levhalar", image: "/products/isi-yalitimi/eps-strafor.jpg" },
      { name: "XPS Isı Yalıtım Levhaları", image: "/products/isi-yalitimi/xps-levha.jpg" },
      { name: "Bonus XPS Platin Levha", image: "/products/isi-yalitimi/bonus-xps-platin.jpg" },
      { name: "Cam Yünü", image: "/products/isi-yalitimi/cam-yunu.jpg" },
      { name: "Cam Yünü Levha", image: "/products/isi-yalitimi/cam-yunu-levha.jpg" },
      { name: "Mineral Yün", image: "/products/isi-yalitimi/mineral-yun.jpg" },
      { name: "Mantolama Yapıştırıcıları", image: "/products/isi-yalitimi/mantolama-yapistirici.jpg" },
      { name: "Mantolama Sıvası", image: "/products/isi-yalitimi/siva.jpg" },
      { name: "Dekoratif Sıva", image: "/products/isi-yalitimi/dekoratif-siva.jpg" },
      { name: "Isı Yalıtım Dübelleri", image: "/products/isi-yalitimi/dubel.jpg" },
      { name: "Mantolama Filesi", image: "/products/isi-yalitimi/file.jpg" },
      { name: "Fileli Köşe Profili", image: "/products/isi-yalitimi/fileli-kose.jpg" },
      { name: "Çatı Şiltesi ve Levhası", image: "/products/isi-yalitimi/cati-siltesi.jpg" },
      { name: "XPE Şilte", image: "/products/isi-yalitimi/xpe-silte.jpg" },
      { name: "Ara Bölme Levhaları", image: "/products/isi-yalitimi/ara-bolme.jpg" },
      { name: "Giydirme Cephe Levhaları", image: "/products/isi-yalitimi/giydirme-cephe.jpg" },
      { name: "Bitüm Kaplı Taş Yünü Levha", image: "/products/isi-yalitimi/bitum-kapli-tasyunu.jpg" },
      { name: "Rabitz Telli Sanayi Şiltesi", image: "/products/isi-yalitimi/rabitz-sanayi.jpg" },
      { name: "Yangın Kapı Levhası", image: "/products/isi-yalitimi/yangin-kapi.jpg" },
      { name: "Prefabrik Boru Yalıtımı", image: "/products/isi-yalitimi/prefabrik-boru.jpg" },
      { name: "Dalsan Fibero Mineral Yün", image: "/products/isi-yalitimi/dalsan-fibero.jpg" },
      { name: "Şap Altı Şilteler" },
      { name: "Poliüretan Köpük" },
      { name: "Seramik Yünü" },
    ] as Product[],
  },
  {
    id: "boya",
    icon: Paintbrush,
    title: "Boya",
    photo: "/products/boya.jpg",
    desc: "İç ve dış mekanlar için premium kalitede boya çözümleri.",
    brands: ["Filli Boya", "DYO", "Marshall", "Polisan", "Betek"],
    products: [
      { name: "İç Cephe Boyaları" },
      { name: "Dış Cephe Boyaları" },
      { name: "Astar ve Primer" },
      { name: "Tavan Boyaları" },
      { name: "Antipas ve Koruyucu Boyalar" },
      { name: "Vernik ve Cilalar" },
      { name: "Dekoratif Boyalar" },
      { name: "Endüstriyel Boyalar" },
    ] as Product[],
  },
  {
    id: "yapi-kimyasallari",
    icon: FlaskConical,
    title: "Yapı Kimyasalları",
    photo: "/products/yapi-kimyasallari.jpg",
    desc: "Yapıların dayanıklılığını artıran kimyasal çözümler.",
    brands: ["FIXA", "Weber", "Kalekim"],
    products: [
      { name: "Epoksi Esaslı Ankraj ve Tamir Harcı", image: "/products/yapi-kimyasallari/epoksi-ankraj.jpg" },
      { name: "FIXA SS 935 Silikon Mastik", image: "/products/yapi-kimyasallari/fixa-ss935.jpg" },
      { name: "FIXA SS 930 Silikon Mastik", image: "/products/yapi-kimyasallari/fixa-ss930.jpg" },
      { name: "FIXA PU 970 Poliüretan Mastik", image: "/products/yapi-kimyasallari/fixa-pu970.jpg" },
      { name: "FIXA MS 940 MS Polimer Mastik", image: "/products/yapi-kimyasallari/fixa-ms940.jpg" },
      { name: "FIXA AS 910 Akrilik Mastik", image: "/products/yapi-kimyasallari/fixa-as910.jpg" },
      { name: "Fayans Yapıştırıcıları" },
      { name: "Derz Dolgu Malzemeleri" },
      { name: "Beton ve Harç Katkıları" },
      { name: "Çimento Esaslı Sıvalar" },
      { name: "Onarım Güçlendirme Ürünleri" },
      { name: "Endüstriyel Zemin Ürünleri" },
      { name: "Teknik Harçlar" },
      { name: "Zemin Çözüm Ürünleri" },
      { name: "Sızdırmazlık Malzemeleri" },
      { name: "MS Polimer Mastikler" },
      { name: "Poliüretan Mastikler" },
      { name: "Poliüretan+Katran Mastikler" },
      { name: "Akrilik Mastikler" },
      { name: "Silikon Mastikler" },
      { name: "Tarihi Eser Ürünleri" },
    ] as Product[],
  },
  {
    id: "alci-siva",
    icon: Hammer,
    title: "Alçı & Sıva",
    photo: "/products/alci-siva.jpg",
    desc: "İç mekan düzenleme ve kaplama için alçı ve sıva ürünleri.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS"],
    products: [
      { name: "ABS M19 Makine Sıva Alçısı", image: "/products/alci-siva/abs-m19-makine.jpg" },
      { name: "ABS Sıva Alçısı", image: "/products/alci-siva/abs-siva-alcisi.jpg" },
      { name: "Dalsan Grio Saten Perdah", image: "/products/alci-siva/dalsan-grio-saten.jpg" },
      { name: "Sivatek Perlitli Sıva Alçısı", image: "/products/alci-siva/sivatek-perlitli.jpg" },
      { name: "Floortek Kendinden Yayılan Şap", image: "/products/alci-siva/floortek-sap.jpg" },
      { name: "Sıva Köşe Profili", image: "/products/alci-siva/dalsan-siva-kose.jpg" },
      { name: "Rigips Makine Alçısı" },
      { name: "Rigips Perlitli Sıva" },
      { name: "Alçıtek Gold Makine Sıva" },
      { name: "PRF/PRFMAX Makine Alçısı" },
      { name: "Maklux Makine Sıva Alçısı" },
      { name: "Saten Alçı" },
      { name: "Kartonpiyer Alçısı" },
      { name: "Derz Dolgu Alçısı" },
      { name: "Grio Silikonlu Esnek Derz Dolgu" },
      { name: "Dış Cephe Sıvaları" },
      { name: "Isı Yalıtım Sıvaları" },
    ] as Product[],
  },
  {
    id: "yapi-levhalari",
    icon: Building2,
    title: "Yapı Levhaları",
    photo: "/products/yapi-levhalari.jpg",
    desc: "Bölme duvar, asma tavan ve kaplama için yapı levhaları.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS", "Ytong"],
    products: [
      { name: "Dalsan Beyaz COREX Alçı Plaka", image: "/products/yapi-levhalari/dalsan-beyaz-corex.jpg" },
      { name: "Dalsan A1 COREX Yangın Dayanımlı", image: "/products/yapi-levhalari/dalsan-a1-corex.jpg" },
      { name: "Dalsan Ergoboard", image: "/products/yapi-levhalari/dalsan-ergoboard.jpg" },
      { name: "Dalsan BoardeX Dış Cephe", image: "/products/yapi-levhalari/dalsan-boardex.jpg" },
      { name: "ABS Alçı Plaka FLX", image: "/products/yapi-levhalari/abs-alci-plaka.jpg" },
      { name: "Ses Yalıtım Levhaları", image: "/products/yapi-levhalari/ses-yalitim.jpg" },
      { name: "Fibercement Desenli (Bauholz)", image: "/products/yapi-levhalari/fibercement-bauholz.jpg" },
      { name: "Fibercement Siding (Bausiding)", image: "/products/yapi-levhalari/fibercement-siding.jpg" },
      { name: "Fibercement Düz Levha (Baunorm)", image: "/products/yapi-levhalari/fibercement-duz.jpg" },
      { name: "Klima Levhası", image: "/products/yapi-levhalari/klima-levha.jpg" },
      { name: "Dalsan Askı Çubuğu", image: "/products/yapi-levhalari/dalsan-aski-cubugu.jpg" },
      { name: "Dalsan Sıva Filesi", image: "/products/yapi-levhalari/dalsan-siva-filesi.jpg" },
      { name: "Dalsan Köşe Profili", image: "/products/yapi-levhalari/dalsan-kose-profili.jpg" },
      { name: "Dalsan Revizyon Kapağı", image: "/products/yapi-levhalari/dalsan-revizyon-kapak.jpg" },
      { name: "Suya Dayanıklı Alçıpan" },
      { name: "Yangına Dayanıklı Alçıpan" },
      { name: "Taşıyıcı Profiller (C-U)" },
      { name: "Asma Tavan Profilleri" },
      { name: "OSB Levhalar" },
      { name: "Duvar U ve C Profilleri" },
      { name: "Kapı Destek Profili" },
      { name: "Vidalar ve Dübeller" },
      { name: "Alçıpan Klips ve Pençe" },
    ] as Product[],
  },
];

function ProductCard({ product }: { product: Product }) {
  if (product.image) {
    return (
      <div className="group bg-background rounded-sm border border-border overflow-hidden hover:border-accent/30 hover:shadow-md transition-all">
        <div className="relative h-36 overflow-hidden">
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
    <div className="flex items-center gap-2 bg-background rounded-sm px-4 py-3 text-sm hover:bg-accent/5 transition-colors border border-transparent hover:border-border">
      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
      {product.name}
    </div>
  );
}

function CategorySection({
  cat,
}: {
  cat: (typeof productCategories)[number];
}) {
  const withImages = cat.products.filter((p) => p.image);
  const withoutImages = cat.products.filter((p) => !p.image);

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
          {/* Marka etiketleri */}
          {cat.brands.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {cat.brands.map((b) => (
                <span
                  key={b}
                  className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* Görselli ürünler */}
          {withImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-4">
              {withImages.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          )}

          {/* Görselsiz ürünler */}
          {withoutImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {withoutImages.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          )}

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
