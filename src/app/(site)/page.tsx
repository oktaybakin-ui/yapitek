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
  Star,
  Clock,
  Users,
} from "lucide-react";
import { getCategories, getHomepageContent, type HomepageContent } from "@/lib/data";

/* ───────────── HERO ───────────── */
function Hero({ data }: { data: HomepageContent["hero"] }) {
  return (
    <section className="relative bg-surface-dark overflow-hidden">
      <HeroSlider />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/30" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="hero-animate hero-animate-1 inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 px-4 py-1.5 rounded mb-6">
            {data.badge}
          </div>
          <h1 className="hero-animate hero-animate-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            {data.title1}
            <br />
            <span className="text-accent">{data.title2}</span>
          </h1>
          <p className="hero-animate hero-animate-3 mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            {data.subtitle}
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
            {data.stats.map((s) => (
              <div key={s.label}>
                <AnimatedCounter
                  target={s.value}
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
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Truck,
  Shield,
  Award,
  Headphones,
  CheckCircle,
  Star,
  Clock,
  Users,
};

function Advantages({ data }: { data: HomepageContent["advantages"] }) {
  return (
    <section className="py-14 bg-card border-b border-border">
      <StaggerChildren
        animation="fade-up"
        stagger={120}
        className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {data.items.map((item) => {
          const Icon = iconMap[item.icon] || Shield;
          return (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          );
        })}
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
function AboutPreview({ data }: { data: HomepageContent["about_preview"] }) {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal animation="fade-right">
          <h2 className="text-3xl font-bold">
            {data.heading}
          </h2>
          <p className="text-muted mt-5 leading-relaxed">
            {data.description}
          </p>
          <ul className="mt-6 space-y-3">
            {data.bullets.map((item) => (
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
              src={data.image_url || "/about-preview.jpg"}
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
function CalculatorBanner({ data }: { data: HomepageContent["calculator"] }) {
  return (
    <ScrollReveal animation="fade-in">
      <section className="bg-accent">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold">{data.heading}</h2>
            <p className="text-white/60 mt-1">
              {data.description}
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
function CTA({ data }: { data: HomepageContent["cta"] }) {
  const telHref = `tel:${data.phone.replace(/[\s()-]/g, "")}`;
  return (
    <section className="py-20 bg-card">
      <ScrollReveal animation="scale-in" className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold">{data.heading}</h2>
        <p className="text-muted mt-3">
          {data.description}
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
            href={telHref}
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 rounded font-semibold hover:bg-foreground hover:text-surface-dark transition-colors"
          >
            <Phone size={16} />
            {data.phone}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default async function Home() {
  const [dbCategories, homepage] = await Promise.all([
    getCategories(),
    getHomepageContent(),
  ]);
  const categories = dbCategories.map((c) => ({
    iconName: c.icon_name,
    title: c.title,
    desc: c.description,
    id: c.id,
    photo: c.photo_url,
  }));

  return (
    <>
      <Hero data={homepage.hero} />
      <Advantages data={homepage.advantages} />
      <Products categories={categories} />
      <AboutPreview data={homepage.about_preview} />
      <CalculatorBanner data={homepage.calculator} />
      <BrandMarquee />
      <CTA data={homepage.cta} />
    </>
  );
}
