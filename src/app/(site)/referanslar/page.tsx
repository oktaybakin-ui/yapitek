import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Star } from "lucide-react";
import ScrollReveal, { StaggerChildren } from "@/components/ScrollReveal";
import { getBrandPartners, getTestimonials } from "@/lib/data";

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
// DB boşken kullanılacak fallback
const fallbackBrands = [
  { name: "İzocam", logo_url: "/brands/izocam.svg", category: "Yalıtım" },
  { name: "Knauf", logo_url: "/brands/knauf.png", category: "Yalıtım / Alçı" },
  { name: "Hekim Yapı", logo_url: "/brands/hekim-yapi.png", category: "Yalıtım" },
  { name: "Bonus XPS", logo_url: "/brands/bonus-xps.svg", category: "Yalıtım" },
  { name: "Dalsan", logo_url: "/brands/dalsan.png", category: "Alçı / Levha" },
  { name: "ABS", logo_url: "/brands/abs.png", category: "Alçı / Levha" },
  { name: "FIXA", logo_url: "/brands/fixa.png", category: "Yapı Kimyasalları" },
  { name: "Filli Boya", logo_url: "/brands/filli-boya.png", category: "Boya" },
  { name: "DYO", logo_url: "/brands/dyo.png", category: "Boya" },
  { name: "Marshall", logo_url: "/brands/marshall.png", category: "Boya" },
  { name: "Polisan", logo_url: "/brands/polisan.png", category: "Boya" },
  { name: "Betek", logo_url: "/brands/betek.png", category: "Boya" },
  { name: "Weber", logo_url: "/brands/weber.svg", category: "Yapı Kimyasalları" },
  { name: "Kalekim", logo_url: "/brands/kalekim.svg", category: "Yapı Kimyasalları" },
  { name: "Ytong", logo_url: "/brands/ytong.png", category: "Yapı Levha" },
  { name: "Rigips", logo_url: "/brands/rigips.png", category: "Alçı / Levha" },
];

function BrandPartners({ brands }: { brands: { name: string; logo_url: string; category: string }[] }) {
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
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card rounded border border-border p-6 flex flex-col items-center justify-center gap-3 hover-lift"
            >
              <Image
                src={brand.logo_url}
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

/* ───────────── MÜŞTERİ YORUMLARI ───────────── */
const fallbackTestimonials = [
  {
    author_name: "Ali Yıldırım",
    company: "Yıldırım İnşaat",
    text: "YapıTek ile çalışmaya başladığımızdan beri malzeme tedarik sürecimiz çok kolaylaştı. Hızlı teslimat ve kaliteli ürünler sunuyorlar.",
  },
  {
    author_name: "Fatma Korkmaz",
    company: "FK Mimarlık",
    text: "Teknik danışmanlık hizmetleri gerçekten faydalı. Doğru malzeme seçiminde bize her zaman yardımcı oluyorlar.",
  },
  {
    author_name: "Mustafa Çelik",
    company: "Çelik Yapı A.Ş.",
    text: "Proje bazlı toplu alımlarda sunulan fiyat avantajları ve zamanında teslimat garantisi ile güvenilir bir iş ortağı.",
  },
];

function Testimonials({ items }: { items: { author_name: string; company: string; text: string }[] }) {
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
          {items.map((t) => (
            <div
              key={t.author_name}
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
                <div className="font-semibold">{t.author_name}</div>
                <div className="text-white/50 text-sm">{t.company}</div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default async function ReferanslarPage() {
  const [dbBrands, dbTestimonials] = await Promise.all([
    getBrandPartners(),
    getTestimonials(),
  ]);

  const brands = dbBrands.length > 0 ? dbBrands : fallbackBrands;
  const testimonials = dbTestimonials.length > 0 ? dbTestimonials : fallbackTestimonials;

  return (
    <>
      <PageBanner />
      <BrandPartners brands={brands} />
      <Testimonials items={testimonials} />
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
