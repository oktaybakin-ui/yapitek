import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Users,
  Package,
  Wrench,
  ClipboardList,
  Warehouse,
  ArrowRight,
  CheckCircle,
  Phone,
  type LucideIcon,
  Droplets,
  Paintbrush,
  Shield,
  Hammer,
  Layers,
  Building2,
} from "lucide-react";
import ScrollReveal, { StaggerChildren } from "@/components/ScrollReveal";
import { getServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "YapıTek hizmetleri. Toptan satış, teknik danışmanlık, proje bazlı tedarik, yerinde teslimat ve daha fazlası.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20 banner-animate">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Hizmetlerimiz</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Yapı malzemesi tedariğinden teknik danışmanlığa kadar kapsamlı
          hizmetlerimizle projelerinize değer katıyoruz.
        </p>
      </div>
    </section>
  );
}

// İkon eşlemesi
const iconMap: Record<string, LucideIcon> = {
  Package, Truck, Users, Wrench, ClipboardList, Warehouse,
  Droplets, Paintbrush, Shield, Hammer, Layers, Building2,
};

// Fallback veriler
const fallbackServices = [
  {
    title: "Toptan ve Perakende Satış",
    image_url: "/services/toptan-satis.jpg",
    icon_name: "Package",
    description: "Bireysel müşterilerden büyük inşaat firmalarına kadar her ölçekte satış hizmeti sunuyoruz. Toptan alımlarda özel fiyat avantajları sağlıyoruz.",
    features: [
      "Rekabetçi toptan fiyatlar",
      "Perakende satış imkanı",
      "Özel müşteri indirimleri",
      "Cari hesap imkanı",
    ],
  },
  {
    title: "Teknik Danışmanlık",
    image_url: "/services/teknik-danismanlik.jpg",
    icon_name: "Users",
    description: "Uzman kadromuz, projenizin ihtiyaçlarına göre en uygun malzeme seçiminde size rehberlik eder. Doğru ürünü doğru yerde kullanmanız için teknik destek sağlıyoruz.",
    features: [
      "Ücretsiz teknik destek",
      "Proje bazlı malzeme önerileri",
      "Uygulama rehberliği",
      "Sertifikalı teknik ekip",
    ],
  },
  {
    title: "Proje Bazlı Tedarik",
    image_url: "/services/proje-tedarik.jpg",
    icon_name: "ClipboardList",
    description: "Büyük ölçekli inşaat projeleri için komple malzeme listesi çıkarma ve toplu tedarik hizmeti veriyoruz. Projenizin her aşaması için planlama yapıyoruz.",
    features: [
      "Metraj ve keşif hizmeti",
      "Toplu malzeme tedariki",
      "Proje takip sistemi",
      "Aşamalı teslimat planı",
    ],
  },
  {
    title: "Yerinde Teslimat",
    image_url: "/services/teslimat.jpg",
    icon_name: "Truck",
    description: "Kendi araç filomuzla şantiyenize veya projenize doğrudan teslimat yapıyoruz. Zamanında ve hasarsız teslimat garantisi sunuyoruz.",
    features: [
      "Şantiyeye teslim",
      "Vinç ve forklift ile indirme",
      "Zamanında teslimat garantisi",
      "Kargo takip sistemi",
    ],
  },
  {
    title: "Depolama ve Stok Yönetimi",
    image_url: "/services/depolama.jpg",
    icon_name: "Warehouse",
    description: "Büyük stok kapasitemiz sayesinde ihtiyaç duyduğunuz ürünleri her zaman hazır bulunduruyoruz. Acil ihtiyaçlarınızda hızlı çözüm sunuyoruz.",
    features: [
      "Geniş stok yelpazesi",
      "Acil sipariş karşılama",
      "Güvenli depolama koşulları",
      "Stok bildirim sistemi",
    ],
  },
  {
    title: "Satış Sonrası Destek",
    image_url: "/services/satis-sonrasi.jpg",
    icon_name: "Wrench",
    description: "Satış sonrası da yanınızdayız. Ürün uygulaması, sorun giderme ve teknik bilgilendirme konularında destek vermeye devam ediyoruz.",
    features: [
      "Uygulama desteği",
      "Sorun giderme rehberliği",
      "Ürün garanti takibi",
      "Müşteri memnuniyeti takibi",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; image_url: string; icon_name: string; description: string; features: string[] };
  index: number;
}) {
  const Icon = iconMap[service.icon_name] || Package;
  return (
    <ScrollReveal
      animation={index % 2 === 0 ? "fade-right" : "fade-left"}
      delay={index * 50}
    >
      <div className="bg-card rounded border border-border overflow-hidden hover-lift">
        <div className="relative h-48 md:h-56">
          <Image
            src={service.image_url || "/services/toptan-satis.jpg"}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <div className="w-11 h-11 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon size={22} className="text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-10">
          <p className="text-muted leading-relaxed">{service.description}</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ───────────── SÜRECİMİZ ───────────── */
const steps = [
  { num: "01", title: "İhtiyaç Analizi", desc: "Projenizin gereksinimlerini birlikte değerlendiriyoruz." },
  { num: "02", title: "Teklif Hazırlama", desc: "En uygun ürün ve fiyat teklifini oluşturuyoruz." },
  { num: "03", title: "Sipariş & Tedarik", desc: "Onaylanan siparişlerinizi hızla hazırlıyoruz." },
  { num: "04", title: "Teslimat & Destek", desc: "Ürünlerinizi teslim edip satış sonrası destek sağlıyoruz." },
];

function Process() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <span className="font-semibold text-sm uppercase tracking-wider text-white/80">
            Nasıl Çalışıyoruz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Çalışma Sürecimiz
          </h2>
        </ScrollReveal>
        <StaggerChildren
          animation="fade-up"
          stagger={150}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-5xl font-bold text-white/20 mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default async function HizmetlerPage() {
  const dbServices = await getServices();
  const services = dbServices.length > 0 ? dbServices : fallbackServices;

  return (
    <>
      <PageBanner />
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
      <Process />
      {/* CTA */}
      <ScrollReveal animation="scale-in">
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Hizmetlerimiz Hakkında Bilgi Alın
            </h2>
            <p className="text-muted mt-3">
              Projeleriniz için nasıl yardımcı olabileceğimizi konuşalım.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-shine inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Teklif Al
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+905323015425"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3.5 rounded-sm font-semibold hover:bg-accent hover:text-white transition-colors"
              >
                <Phone size={18} />
                Hemen Arayın
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
