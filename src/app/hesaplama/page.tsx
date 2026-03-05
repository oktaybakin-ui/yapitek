"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  Calculator,
  Droplets,
  Layers,
  Paintbrush,
  Hammer,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/* ───────────── HESAPLAMA TİPLERİ ───────────── */
type CalcType = "boya" | "yalitim" | "siva" | "su-yalitim";

interface CalcResult {
  label: string;
  value: string;
  unit: string;
}

const calcTypes = [
  { id: "boya" as CalcType, icon: Paintbrush, label: "Boya Hesaplama" },
  { id: "yalitim" as CalcType, icon: Layers, label: "Isı Yalıtım Hesaplama" },
  { id: "siva" as CalcType, icon: Hammer, label: "Sıva Hesaplama" },
  { id: "su-yalitim" as CalcType, icon: Droplets, label: "Su Yalıtım Hesaplama" },
];

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Malzeme Hesaplama</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Projeniz için gereken malzeme miktarını hesaplayın. Boya, yalıtım,
          sıva ve su yalıtımı ihtiyaçlarınızı kolayca planlayın.
        </p>
      </div>
    </section>
  );
}

/* ───────────── BOYA HESAPLAMA ───────────── */
function BoyaCalc() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [coats, setCoats] = useState("2");
  const [doorCount, setDoorCount] = useState("1");
  const [windowCount, setWindowCount] = useState("2");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    const c = parseInt(coats);
    const doors = parseInt(doorCount) * 1.8; // ~1.8 m² per door
    const windows = parseInt(windowCount) * 1.5; // ~1.5 m² per window
    if (isNaN(w) || isNaN(h)) return;

    const totalArea = w * h * 4 - doors - windows; // 4 duvar
    const paintNeeded = (totalArea * c) / 12; // ~12 m²/lt
    const primerNeeded = totalArea / 10; // ~10 m²/lt

    setResults([
      { label: "Toplam Duvar Alanı", value: totalArea.toFixed(1), unit: "m²" },
      { label: "Boya İhtiyacı", value: paintNeeded.toFixed(1), unit: "litre" },
      { label: "Astar İhtiyacı", value: primerNeeded.toFixed(1), unit: "litre" },
      { label: "Boya Kovası (15 lt)", value: Math.ceil(paintNeeded / 15).toString(), unit: "adet" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">
        Oda boyutlarını girerek ihtiyacınız olan boya miktarını hesaplayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Oda Genişliği (m)</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Örn: 5" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Oda Yüksekliği (m)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Örn: 2.8" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kat Sayısı (Boya)</label>
          <select value={coats} onChange={(e) => setCoats(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="1">1 Kat</option>
            <option value="2">2 Kat</option>
            <option value="3">3 Kat</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kapı Sayısı</label>
          <input type="number" value={doorCount} onChange={(e) => setDoorCount(e.target.value)} placeholder="1" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Pencere Sayısı</label>
          <input type="number" value={windowCount} onChange={(e) => setWindowCount(e.target.value)} placeholder="2" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
      </div>
      <button onClick={calculate} className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors">
        <Calculator size={18} /> Hesapla
      </button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── ISI YALITIM HESAPLAMA ───────────── */
function YalitimCalc() {
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("5");
  const [material, setMaterial] = useState("eps");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a)) return;
    const t = parseInt(thickness);

    const densityMap: Record<string, number> = { eps: 16, xps: 30, tasYunu: 120, camYunu: 48 };
    const priceMap: Record<string, number> = { eps: 45, xps: 85, tasYunu: 150, camYunu: 120 };
    const nameMap: Record<string, string> = { eps: "EPS", xps: "XPS", tasYunu: "Taş Yünü", camYunu: "Cam Yünü" };

    const volume = a * (t / 100); // m³
    const weight = volume * (densityMap[material] || 16);
    const boardCount = Math.ceil(a / 0.72); // standart levha ~0.72 m²
    const estimatedCost = a * (priceMap[material] || 45) * (t / 5);

    setResults([
      { label: "Malzeme Türü", value: nameMap[material] || "EPS", unit: "" },
      { label: "Toplam Alan", value: a.toFixed(1), unit: "m²" },
      { label: "Levha Adedi (50x144cm)", value: boardCount.toString(), unit: "adet" },
      { label: "Toplam Ağırlık", value: weight.toFixed(1), unit: "kg" },
      { label: "Tahmini Maliyet", value: estimatedCost.toLocaleString("tr-TR"), unit: "₺" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">
        Yalıtım yapılacak alanı ve malzeme türünü seçerek ihtiyacınızı hesaplayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Yalıtım Alanı (m²)</label>
          <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Örn: 120" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kalınlık (cm)</label>
          <select value={thickness} onChange={(e) => setThickness(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="3">3 cm</option>
            <option value="5">5 cm</option>
            <option value="8">8 cm</option>
            <option value="10">10 cm</option>
            <option value="12">12 cm</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1.5">Malzeme Türü</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="eps">EPS (Strafor)</option>
            <option value="xps">XPS</option>
            <option value="tasYunu">Taş Yünü</option>
            <option value="camYunu">Cam Yünü</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors">
        <Calculator size={18} /> Hesapla
      </button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── SIVA HESAPLAMA ───────────── */
function SivaCalc() {
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("15");
  const [sivaType, setSivaType] = useState("makine");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a)) return;
    const t = parseInt(thickness);

    const consumptionMap: Record<string, number> = { makine: 10, alci: 8, hazir: 3, dekoratif: 2.5 };
    const bagMap: Record<string, number> = { makine: 30, alci: 25, hazir: 25, dekoratif: 20 };

    const consumption = (consumptionMap[sivaType] || 10) * (t / 10); // kg/m² per mm
    const totalKg = a * consumption;
    const bags = Math.ceil(totalKg / (bagMap[sivaType] || 30));

    setResults([
      { label: "Toplam Alan", value: a.toFixed(1), unit: "m²" },
      { label: "Toplam Sıva Miktarı", value: totalKg.toFixed(0), unit: "kg" },
      { label: "Çuval Adedi", value: bags.toString(), unit: "adet" },
      { label: "Kalınlık", value: t.toString(), unit: "mm" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">
        Sıva yapılacak alanı, kalınlığı ve sıva türünü girerek malzeme ihtiyacını hesaplayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Sıva Alanı (m²)</label>
          <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Örn: 80" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kalınlık (mm)</label>
          <select value={thickness} onChange={(e) => setThickness(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="10">10 mm</option>
            <option value="15">15 mm</option>
            <option value="20">20 mm</option>
            <option value="25">25 mm</option>
            <option value="30">30 mm</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1.5">Sıva Türü</label>
          <select value={sivaType} onChange={(e) => setSivaType(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="makine">Makine Sıvası</option>
            <option value="alci">Alçı Sıva</option>
            <option value="hazir">Hazır Sıva</option>
            <option value="dekoratif">Dekoratif Sıva</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors">
        <Calculator size={18} /> Hesapla
      </button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── SU YALITIM HESAPLAMA ───────────── */
function SuYalitimCalc() {
  const [area, setArea] = useState("");
  const [method, setMethod] = useState("membran");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a)) return;

    let res: CalcResult[] = [];

    if (method === "membran") {
      const rollArea = 10; // m² per roll
      const rolls = Math.ceil((a * 1.15) / rollArea); // %15 fire payı
      const primer = (a * 0.3).toFixed(1); // 0.3 kg/m²
      res = [
        { label: "Toplam Alan (+%15 fire)", value: (a * 1.15).toFixed(1), unit: "m²" },
        { label: "Membran Rulo", value: rolls.toString(), unit: "adet" },
        { label: "Astar (Primer)", value: primer, unit: "kg" },
      ];
    } else {
      const consumption = a * 3.5; // 3.5 kg/m² (2 kat)
      const bags = Math.ceil(consumption / 20);
      res = [
        { label: "Toplam Alan", value: a.toFixed(1), unit: "m²" },
        { label: "Likit Membran İhtiyacı", value: consumption.toFixed(1), unit: "kg" },
        { label: "Kova Adedi (20 kg)", value: bags.toString(), unit: "adet" },
      ];
    }

    setResults(res);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">
        Su yalıtımı yapılacak alanı ve yöntemi seçerek malzeme ihtiyacını hesaplayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Yalıtım Alanı (m²)</label>
          <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Örn: 50" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Yalıtım Yöntemi</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent">
            <option value="membran">Membran (Rulo)</option>
            <option value="likit">Likit Membran</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors">
        <Calculator size={18} /> Hesapla
      </button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── SONUÇ GÖSTER ───────────── */
function ResultsDisplay({ results }: { results: CalcResult[] }) {
  return (
    <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-4">
      <h4 className="font-semibold text-lg mb-4 text-accent">Hesaplama Sonucu</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map((r) => (
          <div key={r.label} className="bg-card rounded-lg p-4 border border-border">
            <div className="text-muted text-xs mb-1">{r.label}</div>
            <div className="text-xl font-bold">
              {r.value} <span className="text-sm font-normal text-muted">{r.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-4">
        * Bu hesaplama tahmini bir değerdir. Kesin malzeme ihtiyacı için lütfen teknik ekibimize danışın.
      </p>
      <Link
        href="/iletisim"
        className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-light transition-colors mt-4"
      >
        Teklif İste <ArrowRight size={16} />
      </Link>
    </div>
  );
}

/* ───────────── ANA HESAPLAMA SAYFASI ───────────── */
export default function HesaplamaPage() {
  const [activeCalc, setActiveCalc] = useState<CalcType>("boya");

  return (
    <>
      <PageBanner />
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          {/* Hesaplama türü seçimi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {calcTypes.map((ct) => (
              <button
                key={ct.id}
                onClick={() => setActiveCalc(ct.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  activeCalc === ct.id
                    ? "bg-accent text-white border-accent"
                    : "bg-card border-border hover:border-accent/30"
                }`}
              >
                <ct.icon size={24} />
                <span className="text-sm font-medium">{ct.label}</span>
              </button>
            ))}
          </div>

          {/* Hesaplama formu */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">
              {calcTypes.find((c) => c.id === activeCalc)?.label}
            </h2>

            {activeCalc === "boya" && <BoyaCalc />}
            {activeCalc === "yalitim" && <YalitimCalc />}
            {activeCalc === "siva" && <SivaCalc />}
            {activeCalc === "su-yalitim" && <SuYalitimCalc />}
          </div>

          {/* Bilgilendirme */}
          <div className="mt-10 bg-card rounded-2xl border border-border p-8">
            <h3 className="text-lg font-semibold mb-4">Hesaplama Hakkında</h3>
            <div className="text-muted text-sm space-y-2">
              <p>
                Bu hesaplama aracı, projeniz için gereken tahmini malzeme
                miktarını belirlemenize yardımcı olur.
              </p>
              <p>
                Kesin miktarlar zemin durumu, iklim koşulları, uygulama tekniği
                ve tercih edilen marka/ürüne göre değişebilir.
              </p>
              <p>
                Daha doğru bir hesaplama için teknik ekibimizle iletişime
                geçmenizi öneriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
