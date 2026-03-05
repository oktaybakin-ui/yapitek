import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Truck,
  Award,
  Headphones,
  Droplets,
  Paintbrush,
  Layers,
  FlaskConical,
  Hammer,
  Building2,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent opacity-90" />
      {/* Dekoratif daireler */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 flex flex-col items-center text-center text-white">
        <span className="inline-block bg-white/10 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Kaliteli Yapı Malzemeleri
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
          Güvenilir Yapı Malzemeleri ile
          <br />
          <span className="text-[#EAECE3]">Projenizi Hayata Geçirin</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
          Yalıtım, boya, alçı, yapı kimyasalları ve daha fazlası...
          Türkiye&apos;nin önde gelen markalarının yetkili satış noktasıyız.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 bg-[#EAECE3] text-accent px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors text-lg"
          >
            Ürünlerimizi İnceleyin
            <ChevronRight size={20} />
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
          >
            Bize Ulaşın
          </Link>
        </div>

        {/* İstatistikler */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-white/60 text-sm mt-1">Ürün Çeşidi</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">1000+</div>
            <div className="text-white/60 text-sm mt-1">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">15+</div>
            <div className="text-white/60 text-sm mt-1">Yıllık Deneyim</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">50+</div>
            <div className="text-white/60 text-sm mt-1">Marka Ortağı</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── AVANTAJLAR ───────────── */
const advantages = [
  { icon: Truck, title: "Hızlı Teslimat", desc: "Siparişleriniz en kısa sürede şantiyenizde" },
  { icon: Shield, title: "Garantili Ürünler", desc: "Tüm ürünlerimiz orijinal ve garantilidir" },
  { icon: Award, title: "Kalite Belgeli", desc: "TSE ve CE belgeli ürün yelpazesi" },
  { icon: Headphones, title: "Teknik Destek", desc: "Uzman kadromuzla 7/24 yanınızdayız" },
];

function Advantages() {
  return (
    <section className="py-16 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center gap-3 p-6"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <item.icon size={28} className="text-accent" />
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-muted text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── ÜRÜN KATEGORİLERİ ───────────── */
const categories = [
  { icon: Droplets, title: "Su Yalıtımı", desc: "Su yalıtım membranları, mastik, şerit ve su tutucu sistemler", id: "su-yalitimi" },
  { icon: Layers, title: "Isı Yalıtımı", desc: "EPS, XPS, taş yünü, cam yünü ve ısı yalıtım levhaları", id: "isi-yalitimi" },
  { icon: Paintbrush, title: "Boya", desc: "İç cephe, dış cephe, endüstriyel ve dekoratif boyalar", id: "boya" },
  { icon: FlaskConical, title: "Yapı Kimyasalları", desc: "Derz dolgu, yapıştırıcı, katkı malzemeleri ve harçlar", id: "yapi-kimyasallari" },
  { icon: Hammer, title: "Alçı & Sıva", desc: "Alçıpan, sıva, perlitli ve dekoratif sıva ürünleri", id: "alci-siva" },
  { icon: Building2, title: "Yapı Levhaları", desc: "Alçıpan, OSB, çimento levha ve taşıyıcı profiller", id: "yapi-levhalari" },
];

function Products() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Ürün Yelpazesi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Ürün Kategorilerimiz
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            İhtiyacınız olan tüm yapı malzemelerini tek çatı altında bulabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              href={`/urunler#${cat.id}`}
              key={cat.title}
              className="group bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                <cat.icon
                  size={28}
                  className="text-accent group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-muted text-sm mb-4">{cat.desc}</p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                Detaylı İncele <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Tüm Ürünleri Gör
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── HAKKIMIZDA ÖN İZLEME ───────────── */
function AboutPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Hakkımızda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Kalite ve Güvenin Adresi
          </h2>
          <p className="text-muted mt-6 leading-relaxed">
            YapıTek olarak, yapı sektöründe uzun yıllara dayanan deneyimimizle
            müşterilerimize en kaliteli yapı malzemelerini sunuyoruz. Yalıtım,
            boya, alçı, yapı kimyasalları ve daha birçok ürün grubunda
            Türkiye&apos;nin önde gelen markalarının yetkili satıcısıyız.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "500+ ürün çeşidi ile geniş ürün yelpazesi",
              "Türkiye genelinde hızlı teslimat ağı",
              "Uzman teknik danışmanlık hizmeti",
              "Rekabetçi fiyat politikası",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle size={18} className="text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors mt-8"
          >
            Daha Fazla Bilgi
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
            <Building2 size={120} className="text-accent/30" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden lg:block">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm text-white/80">Yıllık Tecrübe</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── HESAPLAMA BANNERI ───────────── */
function CalculatorBanner() {
  return (
    <section className="py-16 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Malzeme İhtiyacınızı Hesaplayın
          </h2>
          <p className="text-white/70 mt-2 max-w-lg">
            Yalıtım, boya ve sıva ihtiyaçlarınız için online hesaplama aracımızı
            kullanarak projenizin malzeme miktarını öğrenin.
          </p>
        </div>
        <Link
          href="/hesaplama"
          className="inline-flex items-center gap-2 bg-[#EAECE3] text-accent px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors shrink-0"
        >
          Hesaplama Aracı
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

/* ───────────── MARKALAR ───────────── */
const brands = [
  "İzocam", "Knauf", "Weber", "Betek", "Filli Boya", "DYO",
  "Marshall", "Polisan", "Hekim Yapı", "Kalekim", "Ytong", "Rigips",
];

function Brands() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Çözüm Ortaklarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Güçlü Markalarla Çalışıyoruz
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-card rounded-xl border border-border h-24 flex items-center justify-center font-semibold text-muted hover:text-accent hover:border-accent/30 hover:shadow-md transition-all cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/referanslar"
            className="text-accent font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            Tüm Referanslarımız <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CTA ───────────── */
function CTA() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Projeniz İçin Teklif Alın
        </h2>
        <p className="text-muted mt-4 max-w-xl mx-auto">
          Yapı malzemesi ihtiyaçlarınız için hemen bizimle iletişime geçin.
          Uzman ekibimiz en uygun çözümü sunacaktır.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            İletişime Geçin
            <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+902121234567"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            <Phone size={18} />
            0212 123 45 67
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────── ANA SAYFA ───────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Products />
      <AboutPreview />
      <CalculatorBanner />
      <Brands />
      <CTA />
    </>
  );
}
