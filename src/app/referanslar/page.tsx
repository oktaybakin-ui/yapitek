import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "YapıTek çözüm ortakları ve referansları. Türkiye'nin önde gelen yapı malzemesi markalarının yetkili satıcısıyız.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Referanslarımız</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Türkiye&apos;nin ve dünyanın önde gelen yapı malzemesi markalarıyla
          çalışıyoruz.
        </p>
      </div>
    </section>
  );
}

/* ───────────── MARKA ORTAKLARI ───────────── */
const brandCategories = [
  {
    category: "Yalıtım",
    brands: ["İzocam", "Knauf Insulation", "Rockwool", "Dow", "BASF", "Hekim Yapı"],
  },
  {
    category: "Boya",
    brands: ["Filli Boya", "DYO", "Marshall", "Polisan", "Betek", "Jotun"],
  },
  {
    category: "Yapı Kimyasalları",
    brands: ["Weber Saint-Gobain", "Kalekim", "MYK Yapı Kimyasalları", "Sika", "Mapei", "Bostik"],
  },
  {
    category: "Alçı & Levha",
    brands: ["Knauf", "Rigips", "Ytong", "Dalsan", "Norgips", "Lafarge"],
  },
];

function BrandPartners() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Çözüm Ortaklarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            İş Ortağı Markalarımız
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Sektörün lider markalarının yetkili bayisi olarak kaliteli
            ürünleri sizlere ulaştırıyoruz.
          </p>
        </div>

        <div className="space-y-10">
          {brandCategories.map((bc) => (
            <div key={bc.category}>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {bc.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {bc.brands.map((brand) => (
                  <div
                    key={brand}
                    className="bg-background rounded-xl border border-border h-20 flex items-center justify-center font-medium text-sm text-muted hover:text-accent hover:border-accent/30 hover:shadow-md transition-all cursor-pointer text-center px-2"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── PROJE REFERANSLARİ ───────────── */
const projects = [
  {
    title: "Konya Büyükşehir Toplu Konut Projesi",
    desc: "2.500 konut için komple yalıtım ve boya malzemesi tedariki.",
    scope: "Isı Yalıtımı, Boya, Yapı Kimyasalları",
    year: "2024",
  },
  {
    title: "Ankara Esenboğa AVM",
    desc: "Ticari alan yapı malzemeleri tedariği ve teknik danışmanlık.",
    scope: "Alçıpan, Boya, Su Yalıtımı",
    year: "2023",
  },
  {
    title: "İstanbul Rezidans Projesi",
    desc: "Lüks konut projesine özel yapı malzemeleri tedariki.",
    scope: "Tüm Yapı Malzemeleri",
    year: "2024",
  },
  {
    title: "Antalya Otel Renovasyonu",
    desc: "5 yıldızlı otel yenileme projesi malzeme tedariki.",
    scope: "Boya, Sıva, Dekoratif Ürünler",
    year: "2023",
  },
  {
    title: "Bursa Organize Sanayi Fabrika İnşaatı",
    desc: "Endüstriyel yapı için yapı malzemeleri tedarik ve lojistik.",
    scope: "Yapı Levhaları, Yalıtım, Boya",
    year: "2025",
  },
  {
    title: "Eskişehir Üniversite Kampüsü",
    desc: "Kampüs binalarının yenileme projesine malzeme tedariği.",
    scope: "Isı-Su Yalıtımı, Boya",
    year: "2024",
  },
];

function ProjectReferences() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Projelerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Tamamlanan Projeler
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Türkiye genelindeki büyük ölçekli projelere malzeme tedariği
            sağladık.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Building2 size={24} className="text-accent" />
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                  {p.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted text-sm mb-3">{p.desc}</p>
              <div className="text-xs text-accent font-medium">{p.scope}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── MÜŞTERİ YORUMLARI ───────────── */
const testimonials = [
  {
    name: "Ali Yıldırım",
    company: "Yıldırım İnşaat",
    text: "YapıTek ile çalışmaya başladığımızdan beri malzeme tedarik sürecimiz çok kolaylaştı. Hızlı teslimat ve kaliteli ürünler sunuyorlar.",
  },
  {
    name: "Fatma Korkmaz",
    company: "FK Mimarlık",
    text: "Teknik danışmanlık hizmetleri gerçekten faydalı. Doğru malzeme seçiminde bize her zaman yardımcı oluyorlar.",
  },
  {
    name: "Mustafa Çelik",
    company: "Çelik Yapı A.Ş.",
    text: "Proje bazlı toplu alımlarda sunulan fiyat avantajları ve zamanında teslimat garantisi ile güvenilir bir iş ortağı.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="font-semibold text-sm uppercase tracking-wider text-[#EAECE3]">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-white/50 text-sm">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ReferanslarPage() {
  return (
    <>
      <PageBanner />
      <BrandPartners />
      <ProjectReferences />
      <Testimonials />
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Siz de Referanslarımız Arasına Katılın
          </h2>
          <p className="text-muted mt-3">
            Projeniz için en kaliteli yapı malzemelerini tedarik etmek
            istiyorsanız hemen iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors mt-6"
          >
            İletişime Geçin
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
