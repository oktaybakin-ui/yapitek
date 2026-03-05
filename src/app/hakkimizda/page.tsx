import type { Metadata } from "next";
import {
  Building2,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "YapıTek Yapı Malzemeleri hakkında bilgi edinin. 15 yılı aşkın deneyimimizle yapı sektörünün güvenilir tedarikçisiyiz.",
};

/* ───────────── SAYFA BANNER ───────────── */
function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Hakkımızda</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          15 yılı aşkın sektör deneyimimizle yapı malzemeleri alanında
          güvenilir çözüm ortağınızız.
        </p>
      </div>
    </section>
  );
}

/* ───────────── HAKKIMIZDA İÇERİK ───────────── */
function AboutContent() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
            <Building2 size={120} className="text-accent/30" />
          </div>
        </div>
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Biz Kimiz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            YapıTek Yapı Malzemeleri
          </h2>
          <p className="text-muted mt-6 leading-relaxed">
            YapıTek olarak 2010 yılından bu yana yapı sektöründe faaliyet
            göstermekteyiz. Yalıtım malzemelerinden boyalara, yapı
            kimyasallarından alçı ürünlerine kadar geniş bir yelpazede,
            sektörün önde gelen markalarının yetkili satıcısı olarak hizmet
            sunmaktayız.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Müşteri memnuniyetini her zaman ön planda tutarak, kaliteli
            ürünleri uygun fiyatlarla sunmayı, teknik danışmanlık hizmetleri
            ile projelerinize değer katmayı hedefliyoruz. Deneyimli ekibimiz
            ve güçlü lojistik altyapımız ile Türkiye genelinde hizmet
            vermekteyiz.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-5">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-muted text-sm mt-1">Ürün Çeşidi</div>
            </div>
            <div className="bg-background rounded-xl p-5">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-muted text-sm mt-1">Mutlu Müşteri</div>
            </div>
            <div className="bg-background rounded-xl p-5">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-muted text-sm mt-1">Yıllık Deneyim</div>
            </div>
            <div className="bg-background rounded-xl p-5">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-muted text-sm mt-1">Marka Ortağı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── MİSYON VİZYON DEĞERLER ───────────── */
const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    desc: "Yapı sektörüne kaliteli malzemeler sunarak, projelerinizin güvenli ve sürdürülebilir olmasını sağlamak. Müşterilerimize teknik destek ve danışmanlık hizmetleri ile değer katmak.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    desc: "Türkiye'nin en güvenilir ve tercih edilen yapı malzemeleri tedarikçisi olmak. Yenilikçi çözümler ve güçlü marka ortaklıkları ile sektöre yön vermek.",
  },
  {
    icon: Heart,
    title: "Değerlerimiz",
    desc: "Dürüstlük, kalite odaklılık, müşteri memnuniyeti ve sürekli gelişim. Bu değerler iş yapma biçimimizin temelini oluşturmaktadır.",
  },
];

function MissionVision() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <v.icon size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── NEDEN BİZ ───────────── */
const reasons = [
  "Türkiye'nin önde gelen markalarının yetkili bayisi",
  "Profesyonel teknik danışmanlık hizmeti",
  "Rekabetçi fiyat politikası",
  "Hızlı ve güvenilir teslimat ağı",
  "TSE ve CE belgeli ürün yelpazesi",
  "Proje bazlı toplu tedarik imkanı",
  "Satış sonrası teknik destek",
  "Uzman ve deneyimli kadro",
];

function WhyUs() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-semibold text-sm uppercase tracking-wider text-[#EAECE3]">
            Neden YapıTek?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Bizi Tercih Etmeniz İçin Nedenler
          </h2>
          <p className="text-white/70 mt-4 leading-relaxed">
            YapıTek olarak sektörde fark yaratan hizmet anlayışımız,
            kaliteli ürünlerimiz ve müşteri odaklı yaklaşımımız ile
            projelerinizin güvenilir çözüm ortağıyız.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle size={20} className="text-[#EAECE3] shrink-0 mt-0.5" />
              <span className="text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── EKİP ───────────── */
const team = [
  { name: "Ahmet Yılmaz", role: "Genel Müdür", icon: Users },
  { name: "Mehmet Kaya", role: "Satış Müdürü", icon: TrendingUp },
  { name: "Ayşe Demir", role: "Teknik Müdür", icon: Award },
];

function Team() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Ekibimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Yönetim Kadromuz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="text-center bg-background rounded-xl p-8 border border-border"
            >
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <m.icon size={36} className="text-accent" />
              </div>
              <h4 className="font-semibold text-lg">{m.name}</h4>
              <p className="text-muted text-sm mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner />
      <AboutContent />
      <MissionVision />
      <WhyUs />
      <Team />
      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Bizimle Çalışmak İster Misiniz?
          </h2>
          <p className="text-muted mt-3">
            Projeleriniz için en uygun yapı malzemesi çözümlerini sunmak
            için buradayız.
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
