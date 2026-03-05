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

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "YapıTek Yapı Malzemeleri ile iletişime geçin. Adres, telefon, e-posta ve iletişim formu.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
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

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["Söğütözü Mah. Söğütözü Cd. No:2/A - 13", "Koç Kuleleri - Çankaya / ANKARA", "06510"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["0312 XXX XX XX (Satış)", "0312 XXX XX XX (Teknik)"],
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["info@yapitek.tr", "mustafa@yapitek.tr"],
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi - Cuma: 08:00 - 18:00", "Cumartesi: 09:00 - 15:00", "Pazar: Kapalı"],
  },
];

function ContactInfo() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="bg-background rounded border border-border p-6 hover:shadow-md transition-shadow"
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
        </div>
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
          <div className="lg:col-span-2">
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
          </div>

          {/* Sağ: form */}
          <div className="lg:col-span-3">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Mesaj Gönder
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── HARİTA ───────────── */
function Map() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded border border-white/10 overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1!2d32.8083!3d39.9142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f00a37f9b5b%3A0x0!2zU8O2xJ_DvHTDtnrDvCBNYWguIFPDtsSfw7x0w7Z6w7wgQ2QuIE5vOjIvQS0xMywgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) contrast(1.1) invert(92%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="YapıTek Konum"
          />
        </div>
        <div className="flex items-center gap-3 mt-4 text-white/50 text-sm">
          <MapPin size={16} className="text-accent" />
          Söğütözü Mah. Söğütözü Cd. No:2/A-13, Koç Kuleleri, Çankaya/Ankara 06510
        </div>
      </div>
    </section>
  );
}

export default function IletisimPage() {
  return (
    <>
      <PageBanner />
      <ContactInfo />
      <ContactForm />
      <Map />
    </>
  );
}
