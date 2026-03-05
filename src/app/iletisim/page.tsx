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
    lines: ["Organize Sanayi Bölgesi", "Yapı Malzemeleri Cad. No:42", "İstanbul, Türkiye"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["0212 123 45 67 (Satış)", "0212 123 45 68 (Teknik)", "0532 123 45 67 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["info@yapitek.com", "satis@yapitek.com", "teknik@yapitek.com"],
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
              className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
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
              <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                <MessageSquare size={20} className="text-accent" />
                <div>
                  <div className="font-medium text-sm">Hızlı Yanıt</div>
                  <div className="text-muted text-xs">
                    Mesajlarınıza en geç 24 saat içinde yanıt veriyoruz.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
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
            <form className="bg-card rounded-2xl border border-border p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Firma Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Firma adı (opsiyonel)"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Konu
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors">
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
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
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="bg-background rounded-2xl border border-border h-80 flex items-center justify-center">
          <div className="text-center text-muted">
            <MapPin size={48} className="mx-auto mb-3 text-accent/30" />
            <p className="text-sm">
              Google Maps haritası buraya eklenecek
            </p>
            <p className="text-xs mt-1">
              OSB Yapı Malzemeleri Cad. No:42, İstanbul
            </p>
          </div>
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
