import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal, {
  StaggerChildren,
  AnimatedCounter,
} from "@/components/ScrollReveal";
import { getCorporateContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "YapıTek Yapı Malzemeleri hakkında bilgi edinin. 15 yılı aşkın deneyimimizle yapı sektörünün güvenilir tedarikçisiyiz.",
};

// Fallback değerler (DB boşken kullanılır)
const fallbackAbout = {
  description:
    "YapıTek olarak 2010 yılından bu yana yapı sektöründe faaliyet göstermekteyiz. Yalıtım malzemelerinden boyalara, yapı kimyasallarından alçı ürünlerine kadar geniş bir yelpazede, sektörün önde gelen markalarının yetkili satıcısı olarak hizmet sunmaktayız.",
  description2:
    "Müşteri memnuniyetini her zaman ön planda tutarak, kaliteli ürünleri uygun fiyatlarla sunmayı, teknik danışmanlık hizmetleri ile projelerinize değer katmayı hedefliyoruz. Deneyimli ekibimiz ve güçlü lojistik altyapımız ile Türkiye genelinde hizmet vermekteyiz.",
  image_url: "/about-main.jpg",
  stats: [
    { label: "Ürün Çeşidi", value: 500, suffix: "+" },
    { label: "Mutlu Müşteri", value: 1000, suffix: "+" },
    { label: "Yıllık Deneyim", value: 15, suffix: "+" },
    { label: "Marka Ortağı", value: 50, suffix: "+" },
  ],
};

const fallbackMission = {
  mission_title: "Misyonumuz",
  mission_desc:
    "Yapı sektörüne kaliteli malzemeler sunarak, projelerinizin güvenli ve sürdürülebilir olmasını sağlamak. Müşterilerimize teknik destek ve danışmanlık hizmetleri ile değer katmak.",
  vision_title: "Vizyonumuz",
  vision_desc:
    "Türkiye'nin en güvenilir ve tercih edilen yapı malzemeleri tedarikçisi olmak. Yenilikçi çözümler ve güçlü marka ortaklıkları ile sektöre yön vermek.",
  values_title: "Değerlerimiz",
  values_desc:
    "Dürüstlük, kalite odaklılık, müşteri memnuniyeti ve sürekli gelişim. Bu değerler iş yapma biçimimizin temelini oluşturmaktadır.",
};

const fallbackReasons = [
  "Türkiye'nin önde gelen markalarının yetkili bayisi",
  "Profesyonel teknik danışmanlık hizmeti",
  "Rekabetçi fiyat politikası",
  "Hızlı ve güvenilir teslimat ağı",
  "TSE ve CE belgeli ürün yelpazesi",
  "Proje bazlı toplu tedarik imkanı",
  "Satış sonrası teknik destek",
  "Uzman ve deneyimli kadro",
];

const fallbackFounder = {
  name: "Mustafa Yılmaz",
  title: "Kurucu",
  description:
    "YapıTek Taah. Yapı Malzemeleri'nin kurucusu Mustafa Yılmaz, yapı sektöründe 15 yılı aşkın deneyime sahiptir. Sektördeki derin bilgi birikimi ve vizyoner yaklaşımıyla YapıTek'i Türkiye'nin güvenilir yapı malzemeleri tedarikçilerinden biri haline getirmiştir.",
  description2:
    "Müşteri memnuniyetini ve kaliteyi iş felsefesinin merkezine koyan Mustafa Yılmaz, firmanın sürdürülebilir büyümesi ve sektörel gelişimi için çalışmalarına devam etmektedir.",
  image_url: "/founder.jpg",
};

/* ───────────── SAYFA BANNER ───────────── */
function PageBanner() {
  return (
    <section className="bg-accent text-white py-20 banner-animate">
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
function AboutContent({ data }: { data: typeof fallbackAbout }) {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal animation="fade-right">
          <div className="relative aspect-[4/3] rounded overflow-hidden img-zoom">
            <Image
              src={data.image_url || "/about-main.jpg"}
              alt="YapıTek yapı malzemeleri"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/30 to-transparent" />
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-left" delay={150}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Biz Kimiz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            YapıTek Yapı Malzemeleri
          </h2>
          <p className="text-muted mt-6 leading-relaxed">{data.description}</p>
          <p className="text-muted mt-4 leading-relaxed">{data.description2}</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {data.stats.map((s) => (
              <div key={s.label} className="bg-background rounded p-5">
                <AnimatedCounter
                  target={s.value}
                  suffix={s.suffix}
                  className="text-3xl font-bold text-accent"
                />
                <div className="text-muted text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────── MİSYON VİZYON DEĞERLER ───────────── */
const iconMap = { mission: Target, vision: Eye, values: Heart };

function MissionVision({ data }: { data: typeof fallbackMission }) {
  const sections = [
    { key: "mission" as const, title: data.mission_title, desc: data.mission_desc },
    { key: "vision" as const, title: data.vision_title, desc: data.vision_desc },
    { key: "values" as const, title: data.values_title, desc: data.values_desc },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerChildren
          animation="fade-up"
          stagger={150}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sections.map((v) => {
            const Icon = iconMap[v.key];
            return (
              <div
                key={v.key}
                className="bg-card rounded p-8 border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ───────────── NEDEN BİZ ───────────── */
function WhyUs({ reasons }: { reasons: string[] }) {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal animation="fade-right">
          <span className="font-semibold text-sm uppercase tracking-wider text-white/80">
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
        </ScrollReveal>
        <StaggerChildren
          animation="fade-up"
          stagger={80}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3 bg-white/10 rounded-sm p-4">
              <CheckCircle size={20} className="text-white/80 shrink-0 mt-0.5" />
              <span className="text-sm">{r}</span>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ───────────── KURUCU ───────────── */
function Founder({ data }: { data: typeof fallbackFounder }) {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal animation="fade-right">
          <div className="relative aspect-square max-w-md mx-auto rounded-sm overflow-hidden img-zoom">
            <Image
              src={data.image_url || "/founder.jpg"}
              alt={`${data.name} - YapıTek ${data.title}`}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 448px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/30 to-transparent" />
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-left" delay={150}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {data.title}
          </span>
          <h2 className="text-3xl font-bold mt-2">{data.name}</h2>
          <p className="text-muted mt-5 leading-relaxed">{data.description}</p>
          <p className="text-muted mt-4 leading-relaxed">{data.description2}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default async function HakkimizdaPage() {
  const content = await getCorporateContent();

  const about = { ...fallbackAbout, ...content.about } as typeof fallbackAbout;
  const mission = { ...fallbackMission, ...content.mission } as typeof fallbackMission;
  const reasons = (content.whyus as { reasons?: string[] })?.reasons?.length
    ? (content.whyus as { reasons: string[] }).reasons
    : fallbackReasons;
  const founder = { ...fallbackFounder, ...content.founder } as typeof fallbackFounder;

  return (
    <>
      <PageBanner />
      <AboutContent data={about} />
      <MissionVision data={mission} />
      <WhyUs reasons={reasons} />
      <Founder data={founder} />
      {/* CTA */}
      <ScrollReveal animation="scale-in">
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
