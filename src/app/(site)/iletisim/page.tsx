import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
} from "lucide-react";
import ScrollReveal, { StaggerChildren } from "@/components/ScrollReveal";
import { getContactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "YapıTek Yapı Malzemeleri ile iletişime geçin. Adres, telefon, e-posta ve iletişim formu.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20 banner-animate">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">İletişim</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Projeleriniz için teklif almak veya bilgi edinmek istiyorsanız
          bizimle iletişime geçin.
        </p>
      </div>
    </section>
  );
}

function ContactInfo({ contact }: { contact: Awaited<ReturnType<typeof getContactInfo>> }) {
  const infoCards = [
    {
      icon: MapPin,
      title: "Adres",
      lines: [contact.address, contact.address2, contact.postal_code],
    },
    {
      icon: Phone,
      title: "Telefon",
      lines: [contact.phone],
    },
    {
      icon: Mail,
      title: "E-posta",
      lines: contact.emails,
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      lines: contact.hours,
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerChildren
          animation="fade-up"
          stagger={100}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map((info) => (
            <div
              key={info.title}
              className="bg-background rounded border border-border p-6 hover-lift"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mb-4">
                <info.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
              {info.lines.map((line) => (
                <p key={line} className="text-muted text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Sol: açıklama */}
          <ScrollReveal animation="fade-right" className="lg:col-span-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              İletişim Formu
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Bize Mesaj Gönderin
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Projeleriniz hakkında bilgi almak, teklif istemek veya teknik
              sorularınız için aşağıdaki formu doldurun. En kısa sürede size
              dönüş yapacağız.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 bg-card rounded-sm p-4 border border-border">
                <MessageSquare size={20} className="text-accent" />
                <div>
                  <div className="font-medium text-sm">Hızlı Yanıt</div>
                  <div className="text-muted text-xs">
                    Mesajlarınıza en geç 24 saat içinde yanıt veriyoruz.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card rounded-sm p-4 border border-border">
                <Send size={20} className="text-accent" />
                <div>
                  <div className="font-medium text-sm">Ücretsiz Teklif</div>
                  <div className="text-muted text-xs">
                    Tüm ürün gruplarında ücretsiz fiyat teklifi sunuyoruz.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sağ: form */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-3">
            <form className="bg-card rounded border border-border p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Firma Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Firma adı (opsiyonel)"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Konu
                </label>
                <select className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors">
                  <option>Fiyat Teklifi</option>
                  <option>Teknik Bilgi</option>
                  <option>Sipariş Takibi</option>
                  <option>İş Birliği</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Mesajınız *
                </label>
                <textarea
                  rows={5}
                  placeholder="Projeniz veya ihtiyacınız hakkında bilgi verin..."
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Mesaj Gönder
                <ArrowRight size={18} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────── HARİTA ───────────── */
function Map({ query, address }: { query: string; address: string }) {
  return (
    <ScrollReveal animation="fade-in">
      <section className="bg-surface-dark">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="relative rounded border border-white/10 overflow-hidden h-96">
            <iframe
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) invert(92%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YapıTek Konum"
            />
            {/* Logo overlay on pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10 flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-xl p-1.5">
                <img src="/logo.png" alt="YapıTek" className="h-8 w-auto" />
              </div>
              <div className="w-3 h-3 bg-accent rotate-45 -mt-1.5 shadow-md" />
              <div className="w-2.5 h-2.5 bg-accent rounded-full mt-0.5 shadow-md" />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 text-white/50 text-sm">
            <MapPin size={16} className="text-accent" />
            {address}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default async function IletisimPage() {
  const contact = await getContactInfo();

  return (
    <>
      <PageBanner />
      <ContactInfo contact={contact} />
      <ContactForm />
      <Map
        query={contact.map_query}
        address={`${contact.address}, ${contact.address2} ${contact.postal_code}`}
      />
    </>
  );
}
