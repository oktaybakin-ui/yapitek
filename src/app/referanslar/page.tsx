import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Star } from "lucide-react";
import ScrollReveal, { StaggerChildren } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "YapıTek çözüm ortakları ve referansları. Türkiye'nin önde gelen yapı malzemesi markalarının yetkili satıcısıyız.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20 banner-animate">
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
const allBrands = [
  { name: "İzocam", logo: "/brands/izocam.svg", category: "Yalıtım" },
  { name: "Knauf", logo: "/brands/knauf.png", category: "Yalıtım / Alçı" },
  { name: "Hekim Yapı", logo: "/brands/hekim-yapi.png", category: "Yalıtım" },
  { name: "Bonus XPS", logo: "/brands/bonus-xps.svg", category: "Yalıtım" },
  { name: "Dalsan", logo: "/brands/dalsan.png", category: "Alçı / Levha" },
  { name: "ABS", logo: "/brands/abs.png", category: "Alçı / Levha" },
  { name: "FIXA", logo: "/brands/fixa.png", category: "Yapı Kimyasalları" },
  { name: "Filli Boya", logo: "/brands/filli-boya.png", category: "Boya" },
  { name: "DYO", logo: "/brands/dyo.png", category: "Boya" },
  { name: "Marshall", logo: "/brands/marshall.png", category: "Boya" },
  { name: "Polisan", logo: "/brands/polisan.png", category: "Boya" },
  { name: "Betek", logo: "/brands/betek.png", category: "Boya" },
  { name: "Weber", logo: "/brands/weber.svg", category: "Yapı Kimyasalları" },
  { name: "Kalekim", logo: "/brands/kalekim.svg", category: "Yapı Kimyasalları" },
  { name: "Ytong", logo: "/brands/ytong.png", category: "Yapı Levha" },
  { name: "Rigips", logo: "/brands/rigips.png", category: "Alçı / Levha" },
];

function BrandPartners() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-14">
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
        </ScrollReveal>

        <StaggerChildren
          animation="fade-up"
          stagger={60}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {allBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded border border-border p-6 flex flex-col items-center justify-center gap-3 hover-lift"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
              <span className="text-xs text-muted text-center">{brand.category}</span>
            </div>
          ))}
        </StaggerChildren>
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
        <ScrollReveal animation="fade-up" className="text-center mb-14">
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
        </ScrollReveal>
        <StaggerChildren
          animation="fade-up"
          stagger={100}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded border border-border p-8 hover-lift"
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
        </StaggerChildren>
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
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <span className="font-semibold text-sm uppercase tracking-wider text-white/80">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Müşterilerimiz Ne Diyor?
          </h2>
        </ScrollReveal>
        <StaggerChildren
          animation="fade-up"
          stagger={150}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm rounded p-8 border border-white/10 hover-lift"
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
        </StaggerChildren>
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
      <ScrollReveal animation="scale-in">
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
              className="btn-shine inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-accent-light transition-colors mt-6"
            >
              İletişime Geçin
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
