import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "YapıTek hizmetleri. Toptan satış, teknik danışmanlık, proje bazlı tedarik, yerinde teslimat ve daha fazlası.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
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

const services = [
  {
    icon: Package,
    title: "Toptan ve Perakende Satış",
    desc: "Bireysel müşterilerden büyük inşaat firmalarına kadar her ölçekte satış hizmeti sunuyoruz. Toptan alımlarda özel fiyat avantajları sağlıyoruz.",
    features: [
      "Rekabetçi toptan fiyatlar",
      "Perakende satış imkanı",
      "Özel müşteri indirimleri",
      "Cari hesap imkanı",
    ],
  },
  {
    icon: Users,
    title: "Teknik Danışmanlık",
    desc: "Uzman kadromuz, projenizin ihtiyaçlarına göre en uygun malzeme seçiminde size rehberlik eder. Doğru ürünü doğru yerde kullanmanız için teknik destek sağlıyoruz.",
    features: [
      "Ücretsiz teknik destek",
      "Proje bazlı malzeme önerileri",
      "Uygulama rehberliği",
      "Sertifikalı teknik ekip",
    ],
  },
  {
    icon: ClipboardList,
    title: "Proje Bazlı Tedarik",
    desc: "Büyük ölçekli inşaat projeleri için komple malzeme listesi çıkarma ve toplu tedarik hizmeti veriyoruz. Projenizin her aşaması için planlama yapıyoruz.",
    features: [
      "Metraj ve keşif hizmeti",
      "Toplu malzeme tedariki",
      "Proje takip sistemi",
      "Aşamalı teslimat planı",
    ],
  },
  {
    icon: Truck,
    title: "Yerinde Teslimat",
    desc: "Kendi araç filomuzla şantiyenize veya projenize doğrudan teslimat yapıyoruz. Zamanında ve hasarsız teslimat garantisi sunuyoruz.",
    features: [
      "Şantiyeye teslim",
      "Vinç ve forklift ile indirme",
      "Zamanında teslimat garantisi",
      "Kargo takip sistemi",
    ],
  },
  {
    icon: Warehouse,
    title: "Depolama ve Stok Yönetimi",
    desc: "Büyük stok kapasitemiz sayesinde ihtiyaç duyduğunuz ürünleri her zaman hazır bulunduruyoruz. Acil ihtiyaçlarınızda hızlı çözüm sunuyoruz.",
    features: [
      "Geniş stok yelpazesi",
      "Acil sipariş karşılama",
      "Güvenli depolama koşulları",
      "Stok bildirim sistemi",
    ],
  },
  {
    icon: Wrench,
    title: "Satış Sonrası Destek",
    desc: "Satış sonrası da yanınızdayız. Ürün uygulaması, sorun giderme ve teknik bilgilendirme konularında destek vermeye devam ediyoruz.",
    features: [
      "Uygulama desteği",
      "Sorun giderme rehberliği",
      "Ürün garanti takibi",
      "Müşteri memnuniyeti takibi",
    ],
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <service.icon size={28} className="text-accent" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold">{service.title}</h2>
      </div>
      <p className="text-muted leading-relaxed">{service.desc}</p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-accent shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
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
        <div className="text-center mb-14">
          <span className="font-semibold text-sm uppercase tracking-wider text-[#EAECE3]">
            Nasıl Çalışıyoruz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Çalışma Sürecimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-5xl font-bold text-[#EAECE3]/30 mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HizmetlerPage() {
  return (
    <>
      <PageBanner />
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
      <Process />
      {/* CTA */}
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
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Teklif Al
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+902121234567"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3.5 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              <Phone size={18} />
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
