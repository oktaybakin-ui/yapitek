"use client";

import { useEffect, useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";

type Tab = "hero" | "advantages" | "about_preview" | "calculator" | "cta";

interface HeroData {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  stats: { label: string; value: number; suffix: string }[];
}

interface AdvantageItem {
  icon: string;
  title: string;
  desc: string;
}

interface AdvantagesData {
  items: AdvantageItem[];
}

interface AboutPreviewData {
  heading: string;
  description: string;
  bullets: string[];
  image_url: string;
}

interface CalculatorData {
  heading: string;
  description: string;
}

interface CTAData {
  heading: string;
  description: string;
  phone: string;
}

const defaultHero: HeroData = {
  badge: "Yapı Malzemeleri Tedarikçiniz",
  title1: "Projeleriniz İçin",
  title2: "Güvenilir Çözüm Ortağı",
  subtitle:
    "Yalıtım, boya, alçı, yapı kimyasalları ve daha fazlası. Sektörün lider markalarının yetkili satış noktasıyız.",
  stats: [
    { label: "Ürün Çeşidi", value: 500, suffix: "+" },
    { label: "Mutlu Müşteri", value: 1000, suffix: "+" },
    { label: "Yıllık Deneyim", value: 15, suffix: "+" },
    { label: "Marka Ortağı", value: 50, suffix: "+" },
  ],
};

const iconOptions = [
  { value: "Truck", label: "Kamyon (Teslimat)" },
  { value: "Shield", label: "Kalkan (Garanti)" },
  { value: "Award", label: "Ödül (Kalite)" },
  { value: "Headphones", label: "Kulaklık (Destek)" },
  { value: "CheckCircle", label: "Onay İşareti" },
  { value: "Star", label: "Yıldız" },
  { value: "Clock", label: "Saat" },
  { value: "Users", label: "Kullanıcılar" },
];

const defaultAdvantages: AdvantagesData = {
  items: [
    { icon: "Truck", title: "Hızlı Teslimat", desc: "Siparişleriniz en kısa sürede şantiyenizde" },
    { icon: "Shield", title: "Garantili Ürünler", desc: "Tüm ürünlerimiz orijinal ve garantili" },
    { icon: "Award", title: "Kalite Belgeli", desc: "TSE ve CE belgeli ürün yelpazesi" },
    { icon: "Headphones", title: "Teknik Destek", desc: "Uzman kadromuz her zaman yanınızda" },
  ],
};

const defaultAboutPreview: AboutPreviewData = {
  heading: "Yapı Sektöründe 15 Yılı Aşkın Tecrübe",
  description:
    "YapıTek olarak, yapı malzemeleri sektöründe uzun yıllara dayanan deneyimimizle müşterilerimize kaliteli ürünler ve profesyonel hizmet sunuyoruz. Türkiye genelindeki projelere güvenilir tedarik sağlıyoruz.",
  bullets: [
    "500+ ürün çeşidi ile geniş ürün yelpazesi",
    "Sektörün önde gelen markalarının yetkili bayisi",
    "Proje bazlı teknik danışmanlık hizmeti",
    "Türkiye genelinde hızlı teslimat ağı",
  ],
  image_url: "",
};

const defaultCalculator: CalculatorData = {
  heading: "Malzeme İhtiyacınızı Hesaplayın",
  description: "Boya, yalıtım ve sıva için online hesaplama aracımızı kullanın.",
};

const defaultCTA: CTAData = {
  heading: "Projeniz İçin Teklif Alın",
  description: "Yapı malzemesi ihtiyaçlarınız için uzman ekibimizle iletişime geçin.",
  phone: "+90 (532) 301 54 25",
};

export default function AnasayfaPage() {
  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [hero, setHero] = useState<HeroData>(defaultHero);
  const [advantages, setAdvantages] = useState<AdvantagesData>(defaultAdvantages);
  const [aboutPreview, setAboutPreview] = useState<AboutPreviewData>(defaultAboutPreview);
  const [calculator, setCalculator] = useState<CalculatorData>(defaultCalculator);
  const [cta, setCTA] = useState<CTAData>(defaultCTA);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/corporate");
      const data = await res.json();
      if (data.hero) setHero({ ...defaultHero, ...data.hero });
      if (data.advantages) setAdvantages({ ...defaultAdvantages, ...data.advantages });
      if (data.about_preview) setAboutPreview({ ...defaultAboutPreview, ...data.about_preview });
      if (data.calculator) setCalculator({ ...defaultCalculator, ...data.calculator });
      if (data.cta) setCTA({ ...defaultCTA, ...data.cta });
    }
    load();
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);

    await fetch("/api/admin/corporate", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hero, advantages, about_preview: aboutPreview, calculator, cta }),
    });

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "hero", label: "Hero" },
    { key: "advantages", label: "Avantajlar" },
    { key: "about_preview", label: "Hakkımızda Önizleme" },
    { key: "calculator", label: "Hesaplama Banner" },
    { key: "cta", label: "CTA" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Anasayfa İçeriği</h1>
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
        {/* Hero */}
        {tab === "hero" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Hero Bölümü</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Rozet Metni</label>
              <input
                value={hero.badge}
                onChange={(e) => setHero((s) => ({ ...s, badge: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="Yapı Malzemeleri Tedarikçiniz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Başlık (1. Satır)</label>
              <input
                value={hero.title1}
                onChange={(e) => setHero((s) => ({ ...s, title1: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="Projeleriniz İçin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Başlık (2. Satır - Vurgulu)</label>
              <input
                value={hero.title2}
                onChange={(e) => setHero((s) => ({ ...s, title2: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="Güvenilir Çözüm Ortağı"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Alt Yazı</label>
              <textarea
                value={hero.subtitle}
                onChange={(e) => setHero((s) => ({ ...s, subtitle: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">İstatistikler</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hero.stats.map((stat, i) => (
                  <div key={i} className="border border-gray-200 rounded p-3 space-y-2">
                    <input
                      value={stat.label}
                      onChange={(e) => {
                        const stats = [...hero.stats];
                        stats[i] = { ...stats[i], label: e.target.value };
                        setHero((s) => ({ ...s, stats }));
                      }}
                      placeholder="Etiket"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={stat.value}
                        onChange={(e) => {
                          const stats = [...hero.stats];
                          stats[i] = { ...stats[i], value: Number(e.target.value) };
                          setHero((s) => ({ ...s, stats }));
                        }}
                        placeholder="Değer"
                        className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      />
                      <input
                        value={stat.suffix}
                        onChange={(e) => {
                          const stats = [...hero.stats];
                          stats[i] = { ...stats[i], suffix: e.target.value };
                          setHero((s) => ({ ...s, stats }));
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

        {/* Avantajlar */}
        {tab === "advantages" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Avantajlar</h2>

            <div className="space-y-4">
              {advantages.items.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Avantaj {i + 1}</span>
                    {advantages.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const items = advantages.items.filter((_, idx) => idx !== i);
                          setAdvantages({ items });
                        }}
                        className="p-1.5 rounded hover:bg-red-50 text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">İkon</label>
                    <select
                      value={item.icon}
                      onChange={(e) => {
                        const items = [...advantages.items];
                        items[i] = { ...items[i], icon: e.target.value };
                        setAdvantages({ items });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    >
                      {iconOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Başlık</label>
                    <input
                      value={item.title}
                      onChange={(e) => {
                        const items = [...advantages.items];
                        items[i] = { ...items[i], title: e.target.value };
                        setAdvantages({ items });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Açıklama</label>
                    <input
                      value={item.desc}
                      onChange={(e) => {
                        const items = [...advantages.items];
                        items[i] = { ...items[i], desc: e.target.value };
                        setAdvantages({ items });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            {advantages.items.length < 6 && (
              <button
                type="button"
                onClick={() =>
                  setAdvantages({
                    items: [...advantages.items, { icon: "CheckCircle", title: "", desc: "" }],
                  })
                }
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium"
              >
                <Plus size={16} />
                Avantaj Ekle
              </button>
            )}
          </div>
        )}

        {/* Hakkımızda Önizleme */}
        {tab === "about_preview" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Hakkımızda Önizleme</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Başlık</label>
              <input
                value={aboutPreview.heading}
                onChange={(e) => setAboutPreview((s) => ({ ...s, heading: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama</label>
              <textarea
                value={aboutPreview.description}
                onChange={(e) => setAboutPreview((s) => ({ ...s, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Görsel</label>
              <ImageUploader
                value={aboutPreview.image_url}
                onChange={(v) => setAboutPreview((s) => ({ ...s, image_url: v }))}
                bucket="corporate"
              />
              <p className="text-xs text-gray-400 mt-1">Boş bırakılırsa varsayılan görsel kullanılır.</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Öne Çıkan Maddeler</label>
              <div className="space-y-2">
                {aboutPreview.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      value={bullet}
                      onChange={(e) => {
                        const bullets = [...aboutPreview.bullets];
                        bullets[i] = e.target.value;
                        setAboutPreview((s) => ({ ...s, bullets }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                      placeholder={`Madde ${i + 1}`}
                    />
                    {aboutPreview.bullets.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const bullets = aboutPreview.bullets.filter((_, idx) => idx !== i);
                          setAboutPreview((s) => ({ ...s, bullets }));
                        }}
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
                onClick={() => setAboutPreview((s) => ({ ...s, bullets: [...s.bullets, ""] }))}
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium mt-2"
              >
                <Plus size={16} />
                Madde Ekle
              </button>
            </div>
          </div>
        )}

        {/* Hesaplama Banner */}
        {tab === "calculator" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">Hesaplama Banner</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Başlık</label>
              <input
                value={calculator.heading}
                onChange={(e) => setCalculator((s) => ({ ...s, heading: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama</label>
              <textarea
                value={calculator.description}
                onChange={(e) => setCalculator((s) => ({ ...s, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        {tab === "cta" && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold mb-4">CTA (Aksiyon Çağrısı)</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Başlık</label>
              <input
                value={cta.heading}
                onChange={(e) => setCTA((s) => ({ ...s, heading: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Açıklama</label>
              <textarea
                value={cta.description}
                onChange={(e) => setCTA((s) => ({ ...s, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefon Numarası</label>
              <input
                value={cta.phone}
                onChange={(e) => setCTA((s) => ({ ...s, phone: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-accent"
                placeholder="+90 (532) 301 54 25"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
