"use client";

import { useEffect, useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";

type Tab = "about" | "mission" | "whyus" | "founder" | "contact" | "social";

interface AboutData {
  description: string;
  description2: string;
  image_url: string;
  stats: { label: string; value: number; suffix: string }[];
}

interface MissionData {
  mission_title: string;
  mission_desc: string;
  vision_title: string;
  vision_desc: string;
  values_title: string;
  values_desc: string;
}

interface WhyUsData {
  reasons: string[];
}

interface FounderData {
  name: string;
  title: string;
  description: string;
  description2: string;
  image_url: string;
}

interface ContactData {
  address: string;
  address2: string;
  postal_code: string;
  phone: string;
  emails: string[];
  hours: string[];
  map_query: string;
}

interface SocialData {
  facebook: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
}

const defaultAbout: AboutData = {
  description: "",
  description2: "",
  image_url: "",
  stats: [
    { label: "Ürün Çeşidi", value: 500, suffix: "+" },
    { label: "Mutlu Müşteri", value: 1000, suffix: "+" },
    { label: "Yıllık Deneyim", value: 15, suffix: "+" },
    { label: "Marka Ortağı", value: 50, suffix: "+" },
  ],
};

const defaultMission: MissionData = {
  mission_title: "Misyonumuz",
  mission_desc: "",
  vision_title: "Vizyonumuz",
  vision_desc: "",
  values_title: "Değerlerimiz",
  values_desc: "",
};

const defaultWhyUs: WhyUsData = {
  reasons: [],
};

const defaultFounder: FounderData = {
  name: "",
  title: "Kurucu",
  description: "",
  description2: "",
  image_url: "",
};

const defaultContact: ContactData = {
  address: "Söğütözü Mah. Söğütözü Cd. No:2/A - 13",
  address2: "Koç Kuleleri - Çankaya / ANKARA",
  postal_code: "06510",
  phone: "+90 (532) 301 54 25",
  emails: ["info@yapitek.tr"],
  hours: ["Pazartesi - Cuma: 08:00 - 18:00", "Cumartesi: 09:00 - 15:00", "Pazar: Kapalı"],
  map_query: "Koç+Kuleleri,+Söğütözü+Mahallesi,+Söğütözü+Caddesi,+Çankaya,+Ankara",
};

const defaultSocial: SocialData = {
  facebook: "",
  instagram: "https://www.instagram.com/yapitekyapi",
  linkedin: "",
  whatsapp: "905321234567",
};

export default function KurumsalPage() {
  const [tab, setTab] = useState<Tab>("about");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [about, setAbout] = useState<AboutData>(defaultAbout);
  const [mission, setMission] = useState<MissionData>(defaultMission);
  const [whyus, setWhyUs] = useState<WhyUsData>(defaultWhyUs);
  const [founder, setFounder] = useState<FounderData>(defaultFounder);
  const [contact, setContact] = useState<ContactData>(defaultContact);
  const [social, setSocial] = useState<SocialData>(defaultSocial);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/corporate");
      const data = await res.json();
      if (data.about) setAbout({ ...defaultAbout, ...data.about });
      if (data.mission) setMission({ ...defaultMission, ...data.mission });
      if (data.whyus) setWhyUs({ ...defaultWhyUs, ...data.whyus });
      if (data.founder) setFounder({ ...defaultFounder, ...data.founder });
      if (data.contact) setContact({ ...defaultContact, ...data.contact });
      if (data.social) setSocial({ ...defaultSocial, ...data.social });
    }
    load();
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);

    await fetch("/api/admin/corporate", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ about, mission, whyus, founder, contact, social }),
    });

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "about", label: "Hakkımızda" },
    { key: "mission", label: "Misyon / Vizyon" },
    { key: "whyus", label: "Neden Biz" },
    { key: "founder", label: "Kurucu" },
    { key: "contact", label: "İletişim" },
    { key: "social", label: "Sosyal Medya" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Kurumsal İçerik</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent/90 disabled:opacity-50"
        >
          <Save size={16} />
          {saving ? "Kaydediliyor..." : saved ? "Kaydedildi!" : "Tümünü Kaydet"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded p-1 w-fit flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              tab === t.key ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
        {/* Hakkımızda */}
        {tab === "about" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Hakkımızda Bölümü</h2>

            <div>
              <label className="block text-sm font-medium mb-2">Görsel</label>
              <ImageUploader
                value={about.image_url}
                onChange={(v) => setAbout((s) => ({ ...s, image_url: v }))}
                bucket="corporate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama (1. Paragraf)</label>
              <textarea
                value={about.description}
                onChange={(e) => setAbout((s) => ({ ...s, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama (2. Paragraf)</label>
              <textarea
                value={about.description2}
                onChange={(e) => setAbout((s) => ({ ...s, description2: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">İstatistikler</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.stats.map((stat, i) => (
                  <div key={i} className="border border-gray-200 rounded p-3 space-y-2">
                    <input
                      value={stat.label}
                      onChange={(e) => {
                        const stats = [...about.stats];
                        stats[i] = { ...stats[i], label: e.target.value };
                        setAbout((s) => ({ ...s, stats }));
                      }}
                      placeholder="Etiket"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={stat.value}
                        onChange={(e) => {
                          const stats = [...about.stats];
                          stats[i] = { ...stats[i], value: Number(e.target.value) };
                          setAbout((s) => ({ ...s, stats }));
                        }}
                        placeholder="Değer"
                        className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      />
                      <input
                        value={stat.suffix}
                        onChange={(e) => {
                          const stats = [...about.stats];
                          stats[i] = { ...stats[i], suffix: e.target.value };
                          setAbout((s) => ({ ...s, stats }));
                        }}
                        placeholder="Sonek"
                        className="w-20 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Misyon / Vizyon / Değerler */}
        {tab === "mission" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Misyon / Vizyon / Değerler</h2>

            {(["mission", "vision", "values"] as const).map((section) => {
              const titleKey = `${section}_title` as keyof MissionData;
              const descKey = `${section}_desc` as keyof MissionData;
              return (
                <div key={section} className="border border-gray-200 rounded p-4 space-y-3">
                  <input
                    value={mission[titleKey]}
                    onChange={(e) => setMission((s) => ({ ...s, [titleKey]: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-medium focus:outline-none focus:border-accent"
                    placeholder="Başlık"
                  />
                  <textarea
                    value={mission[descKey]}
                    onChange={(e) => setMission((s) => ({ ...s, [descKey]: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
                    placeholder="Açıklama"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Neden Biz */}
        {tab === "whyus" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Neden Biz?</h2>
            <p className="text-sm text-gray-500 mb-4">
              Bizi tercih etmeniz için nedenleri listeleyin.
            </p>

            <div className="space-y-2">
              {whyus.reasons.map((reason, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={reason}
                    onChange={(e) => {
                      const reasons = [...whyus.reasons];
                      reasons[i] = e.target.value;
                      setWhyUs({ reasons });
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    placeholder={`Neden ${i + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const reasons = whyus.reasons.filter((_, idx) => idx !== i);
                      setWhyUs({ reasons });
                    }}
                    className="p-2 rounded hover:bg-red-50 text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setWhyUs({ reasons: [...whyus.reasons, ""] })}
              className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium"
            >
              <Plus size={16} />
              Yeni Neden Ekle
            </button>
          </div>
        )}

        {/* Kurucu */}
        {tab === "founder" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Kurucu Bilgileri</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Ad Soyad</label>
                <input
                  value={founder.name}
                  onChange={(e) => setFounder((s) => ({ ...s, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ünvan</label>
                <input
                  value={founder.title}
                  onChange={(e) => setFounder((s) => ({ ...s, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Fotoğraf</label>
              <ImageUploader
                value={founder.image_url}
                onChange={(v) => setFounder((s) => ({ ...s, image_url: v }))}
                bucket="corporate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama (1. Paragraf)</label>
              <textarea
                value={founder.description}
                onChange={(e) => setFounder((s) => ({ ...s, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama (2. Paragraf)</label>
              <textarea
                value={founder.description2}
                onChange={(e) => setFounder((s) => ({ ...s, description2: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>
          </div>
        )}

        {/* İletişim */}
        {tab === "contact" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">İletişim Bilgileri</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Adres (1. Satır)</label>
              <input
                value={contact.address}
                onChange={(e) => setContact((s) => ({ ...s, address: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Adres (2. Satır)</label>
              <input
                value={contact.address2}
                onChange={(e) => setContact((s) => ({ ...s, address2: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Posta Kodu</label>
              <input
                value={contact.postal_code}
                onChange={(e) => setContact((s) => ({ ...s, postal_code: e.target.value }))}
                className="w-32 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefon</label>
              <input
                value={contact.phone}
                onChange={(e) => setContact((s) => ({ ...s, phone: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-posta Adresleri</label>
              <div className="space-y-2">
                {contact.emails.map((email, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      value={email}
                      onChange={(e) => {
                        const emails = [...contact.emails];
                        emails[i] = e.target.value;
                        setContact((s) => ({ ...s, emails }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="ornek@yapitek.tr"
                    />
                    {contact.emails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setContact((s) => ({ ...s, emails: s.emails.filter((_, idx) => idx !== i) }))}
                        className="p-2 rounded hover:bg-red-50 text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setContact((s) => ({ ...s, emails: [...s.emails, ""] }))}
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium mt-2"
              >
                <Plus size={16} />
                E-posta Ekle
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Çalışma Saatleri</label>
              <div className="space-y-2">
                {contact.hours.map((hour, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      value={hour}
                      onChange={(e) => {
                        const hours = [...contact.hours];
                        hours[i] = e.target.value;
                        setContact((s) => ({ ...s, hours }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="Pazartesi - Cuma: 08:00 - 18:00"
                    />
                    <button
                      type="button"
                      onClick={() => setContact((s) => ({ ...s, hours: s.hours.filter((_, idx) => idx !== i) }))}
                      className="p-2 rounded hover:bg-red-50 text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setContact((s) => ({ ...s, hours: [...s.hours, ""] }))}
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium mt-2"
              >
                <Plus size={16} />
                Satır Ekle
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Harita Sorgusu</label>
              <input
                value={contact.map_query}
                onChange={(e) => setContact((s) => ({ ...s, map_query: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="Google Maps sorgusu"
              />
              <p className="text-xs text-gray-400 mt-1">Google Maps embed URL&apos;sinde kullanılacak sorgu metni</p>
            </div>
          </div>
        )}

        {/* Sosyal Medya */}
        {tab === "social" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Sosyal Medya Hesapları</h2>
            <p className="text-sm text-gray-500 mb-4">
              Boş bırakılan hesaplar sitede gösterilmez.
            </p>

            <div>
              <label className="block text-sm font-medium mb-1">Instagram</label>
              <input
                value={social.instagram}
                onChange={(e) => setSocial((s) => ({ ...s, instagram: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="https://www.instagram.com/kullaniciadi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <input
                value={social.facebook}
                onChange={(e) => setSocial((s) => ({ ...s, facebook: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="https://www.facebook.com/sayfaadi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <input
                value={social.linkedin}
                onChange={(e) => setSocial((s) => ({ ...s, linkedin: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="https://www.linkedin.com/company/sirketadi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Numarası</label>
              <input
                value={social.whatsapp}
                onChange={(e) => setSocial((s) => ({ ...s, whatsapp: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="905321234567 (ülke kodu ile, başında + olmadan)"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
