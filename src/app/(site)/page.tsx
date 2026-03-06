export const dynamic = "force-dynamic";

import BrandMarquee from "@/components/BrandMarquee";
import CategoryCarousel from "@/components/CategoryCarousel";
import ScrollReveal, {
  StaggerChildren,
  AnimatedCounter,
} from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import {
  ChevronRight,
  Shield,
  Truck,
  Award,
  Headphones,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { getCategories } from "@/lib/data";

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section className="relative bg-surface-dark overflow-hidden">
      <HeroSlider />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/30" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="hero-animate hero-animate-1 inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 px-4 py-1.5 rounded mb-6">
            Yapı Malzemeleri Tedarikçiniz
          </div>
          <h1 className="hero-animate hero-animate-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Projeleriniz İçin
            <br />
            <span className="text-accent">Güvenilir Çözüm Ortağı</span>
          </h1>
          <p className="hero-animate hero-animate-3 mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            Yalıtım, boya, alçı, yapı kimyasalları ve daha fazlası.
            Sektörün lider markalarının yetkili satış noktasıyız.
          </p>
          <div className="hero-animate hero-animate-4 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/urunler"
              className="btn-shine inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded font-semibold hover:bg-accent-dark transition-colors"
            >
              Ürünlerimiz
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded font-semibold hover:bg-white/5 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>

        {/* Rakamlar */}
        <div className="hero-animate hero-animate-5 mt-20 border-t border-white/10 pt-10">
          <div className="hero-line h-px bg-accent/40 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 500, suffix: "+", label: "Ürün Çeşidi" },
              { num: 1000, suffix: "+", label: "Mutlu Müşteri" },
              { num: 15, suffix: "+", label: "Yıllık Deneyim" },
              { num: 50, suffix: "+", label: "Marka Ortağı" },
            ].map((s) => (
              <div key={s.label}>
                <AnimatedCounter
                  target={s.num}
                  suffix={s.suffix}
                  className="text-2xl md:text-3xl font-bold text-white"
                />
                <div className="text-white/40 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── AVANTAJLAR ───────────── */
const advantages = [
  { icon: Truck, title: "Hızlı Teslimat", desc: "Siparişleriniz en kısa sürede şantiyenizde" },
  { icon: Shield, title: "Garantili Ürünler", desc: "Tüm ürünlerimiz orijinal ve garantili" },
  { icon: Award, title: "Kalite Belgeli", desc: "TSE ve CE belgeli ürün yelpazesi" },
  { icon: Headphones, title: "Teknik Destek", desc: "Uzman kadromuz her zaman yanınızda" },
];

function Advantages() {
  return (
    <section className="py-14 bg-card border-b border-border">
      <StaggerChildren
        animation="fade-up"
        stagger={120}
        className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {advantages.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center shrink-0">
              <item.icon size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </StaggerChildren>
    </section>
  );
}

/* ───────────── ÜRÜN KATEGORİLERİ ───────────── */
function Products({ categories }: { categories: { iconName: string; title: string; desc: string; id: string; photo: string }[] }) {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-up" className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold">Ürün Kategorilerimiz</h2>
          <p className="text-muted mt-3">
            Tüm yapı malzemesi ihtiyaçlarınızı tek noktadan karşılıyoruz.
          </p>
        </ScrollReveal>

        <CategoryCarousel categories={categories} />
      </div>
    </section>
  );
}

/* ───────────── HAKKIMIZDA ÖN İZLEME ───────────── */
function AboutPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal animation="fade-right">
          <h2 className="text-3xl font-bold">
            Yapı Sektöründe 15 Yılı Aşkın Tecrübe
          </h2>
          <p className="text-muted mt-5 leading-relaxed">
            YapıTek olarak, yapı malzemeleri sektöründe uzun yıllara dayanan
            deneyimimizle müşterilerimize kaliteli ürünler ve profesyonel
            hizmet sunuyoruz. Türkiye genelindeki projelere güvenilir
            tedarik sağlıyoruz.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "500+ ürün çeşidi ile geniş ürün yelpazesi",
              "Sektörün önde gelen markalarının yetkili bayisi",
              "Proje bazlı teknik danışmanlık hizmeti",
              "Türkiye genelinde hızlı teslimat ağı",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold mt-8 hover:gap-3 transition-all"
          >
            Daha Fazla Bilgi <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={200}>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden img-zoom">
            <Image
              src="/about-preview.jpg"
              alt="YapıTek inşaat projesi"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────── HESAPLAMA CTA ───────────── */
function CalculatorBanner() {
  return (
    <ScrollReveal animation="fade-in">
      <section className="bg-accent">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold">Malzeme İhtiyacınızı Hesaplayın</h2>
            <p className="text-white/60 mt-1">
              Boya, yalıtım ve sıva için online hesaplama aracımızı kullanın.
            </p>
          </div>
          <Link
            href="/hesaplama"
            className="btn-shine inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded font-semibold hover:bg-white/90 transition-colors shrink-0"
          >
            Hesaplama Aracı
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───────────── CTA ───────────── */
function CTA() {
  return (
    <section className="py-20 bg-card">
      <ScrollReveal animation="scale-in" className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold">Projeniz İçin Teklif Alın</h2>
        <p className="text-muted mt-3">
          Yapı malzemesi ihtiyaçlarınız için uzman ekibimizle iletişime geçin.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="btn-shine inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded font-semibold hover:bg-accent-dark transition-colors"
          >
            İletişime Geçin
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+905323015425"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 rounded font-semibold hover:bg-foreground hover:text-surface-dark transition-colors"
          >
            <Phone size={16} />
            +90 (532) 301 54 25
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default async function Home() {
  const dbCategories = await getCategories();
  const categories = dbCategories.map((c) => ({
    iconName: c.icon_name,
    title: c.title,
    desc: c.description,
    id: c.id,
    photo: c.photo_url,
  }));

  return (
    <>
      <Hero />
      <Advantages />
      <Products categories={categories} />
      <AboutPreview />
      <CalculatorBanner />
      <BrandMarquee />
      <CTA />
    </>
  );
}
