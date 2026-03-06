"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Droplets,
  Layers,
  Paintbrush,
  Hammer,
  Building2,
  RotateCcw,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/* ───────────── TİPLER ───────────── */
interface CalcResult {
  label: string;
  value: string;
  unit: string;
}

interface CalcType {
  id: string;
  icon: LucideIcon;
  label: string;
  desc: string;
}

const calcTypes: CalcType[] = [
  { id: "bolme-duvar", icon: Building2, label: "Bölme Duvar Sistemleri", desc: "Tek/çift iskeletli alçı levha duvar" },
  { id: "mantolama", icon: Layers, label: "Mantolama Sistemleri", desc: "Dış cephe ısı yalıtım sistemi" },
  { id: "monoblok-tavan", icon: Hammer, label: "Monoblok Asma Tavan", desc: "Alçı levha asma tavan sistemi" },
  { id: "moduler-tavan", icon: Building2, label: "Modüler Asma Tavan", desc: "T profilli modüler tavan sistemi" },
  { id: "yapistirma-giydirme", icon: Layers, label: "Yapıştırma Duvar Giydirme", desc: "Alçı levha yapıştırma sistemi" },
  { id: "agrafli-giydirme", icon: Building2, label: "Agraflı Duvar Giydirme", desc: "Metal iskeletli agraflı sistem" },
  { id: "bagimsiz-giydirme", icon: Building2, label: "Bağımsız Duvar Giydirme", desc: "Metal iskeletli bağımsız sistem" },
  { id: "boya", icon: Paintbrush, label: "Boya Hesaplama", desc: "İç/dış cephe boya ihtiyacı" },
  { id: "su-yalitim", icon: Droplets, label: "Su Yalıtım Hesaplama", desc: "Membran ve likit su yalıtımı" },
];

/* ───────────── SONUÇ GÖSTER ───────────── */
function ResultsDisplay({ results }: { results: CalcResult[] }) {
  return (
    <div className="bg-accent/5 border border-accent/20 rounded p-6 mt-6">
      <h4 className="font-semibold text-lg mb-4 text-accent">Hesaplama Sonucu</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {results.map((r) => (
          <div key={r.label} className="bg-card rounded-sm p-4 border border-border">
            <div className="text-muted text-xs mb-1">{r.label}</div>
            <div className="text-xl font-bold">
              {r.value} <span className="text-sm font-normal text-muted">{r.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-4">
        * Hesaplamalar 2.50m yükseklikte, 1m² alan için %5 fire payı ile yapılmıştır. DC/TC Profil aks aralıkları 60cm, dübel-vida her 60cm&apos;de hesaplanmıştır. Kesin ihtiyaç için teknik ekibimize danışın.
      </p>
      <Link
        href="/iletisim"
        className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-accent-light transition-colors mt-4"
      >
        Teklif İste <ArrowRight size={16} />
      </Link>
    </div>
  );
}

/* ───────────── INPUT HELPERS ───────────── */
const inputCls = "w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:border-accent";
const btnCls = "inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-sm font-semibold hover:bg-accent-light transition-colors";

function AreaInput({ value, onChange, label = "Alan (m²)", placeholder = "Örn: 100" }: { value: string; onChange: (v: string) => void; label?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inputCls} min="0" step="any" />
    </div>
  );
}

/* ───────────── 1) BÖLME DUVAR SİSTEMLERİ ───────────── */
function BolmeDuvarCalc() {
  const [area, setArea] = useState("");
  const [subType, setSubType] = useState("tek-tek");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;

    let res: CalcResult[] = [];

    if (subType === "tek-tek") {
      res = [
        { label: "Alçı Levha", value: (a * 2.1).toFixed(1), unit: "m²" },
        { label: "DU Profili", value: (a * 2.1).toFixed(1), unit: "mt" },
        { label: "DC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 4.2).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 7.35).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 29).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 3.2).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    } else if (subType === "tek-cift") {
      res = [
        { label: "Alçı Levha", value: (a * 4.2).toFixed(1), unit: "m²" },
        { label: "DU Profili", value: (a * 0.9).toFixed(1), unit: "mt" },
        { label: "DC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 4.2).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 7.35).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 13).toString(), unit: "adet" },
        { label: "Vida 35mm", value: Math.ceil(a * 29).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 3.2).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    } else {
      res = [
        { label: "Alçı Levha", value: (a * 4.2).toFixed(1), unit: "m²" },
        { label: "DU Profili", value: (a * 1.8).toFixed(1), unit: "mt" },
        { label: "DC Profili", value: (a * 4.6).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 4.2).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 7.35).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 13).toString(), unit: "adet" },
        { label: "Vida 35mm", value: Math.ceil(a * 29).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 6).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 3.2).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 2.1).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 2.1).toFixed(1), unit: "mt" },
      ];
    }
    setResults(res);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Bölme duvar sistemi için alan bilgisini girerek gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} />
        <div>
          <label className="block text-sm font-medium mb-1.5">Sistem Tipi</label>
          <select value={subType} onChange={(e) => setSubType(e.target.value)} className={inputCls}>
            <option value="tek-tek">Tek İskeletli Tek Kat Levha</option>
            <option value="tek-cift">Tek İskeletli Çift Kat Levha</option>
            <option value="cift-cift">Çift İskeletli Çift Kat Levha</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 2) MANTOLAMA SİSTEMLERİ ───────────── */
function MantolamaCalc() {
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("5");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;
    const t = parseInt(thickness);
    const totalMetraj = (a * t) / 100;

    setResults([
      { label: "Isı Yalıtım Levhası", value: (a * 1.05).toFixed(1), unit: "m²" },
      { label: "Isı Levha Yapıştırma", value: (a * 0.16 * 25).toFixed(1), unit: "kg" },
      { label: "Isı Levha Sıva", value: (a * 0.2 * 25).toFixed(1), unit: "kg" },
      { label: "Dekoratif Mineral Sıva", value: (a * 0.12 * 25).toFixed(1), unit: "kg" },
      { label: "Sıva Filesi", value: (a * 1.1).toFixed(1), unit: "m²" },
      { label: "Mantolama Dübeli", value: Math.ceil(a * 6).toString(), unit: "adet" },
      { label: "PVC Fileli Köşe Profili", value: (a / 10).toFixed(1), unit: "mt" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Dış cephe mantolama sistemi için alan bilgisini girerek malzeme ihtiyacını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} />
        <div>
          <label className="block text-sm font-medium mb-1.5">Yalıtım Kalınlığı (cm)</label>
          <select value={thickness} onChange={(e) => setThickness(e.target.value)} className={inputCls}>
            <option value="3">3 cm</option>
            <option value="4">4 cm</option>
            <option value="5">5 cm</option>
            <option value="6">6 cm</option>
            <option value="8">8 cm</option>
            <option value="10">10 cm</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 3) MONOBLOK ASMA TAVAN ───────────── */
function MonoblokTavanCalc() {
  const [area, setArea] = useState("");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;
    setResults([
      { label: "Alçı Levha", value: (a * 1.05).toFixed(1), unit: "m²" },
      { label: "TU Profili", value: (a * 0.45).toFixed(1), unit: "mt" },
      { label: "TC Profili", value: (a * 3.4).toFixed(1), unit: "mt" },
      { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
      { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
      { label: "Çelik Dübel", value: Math.ceil(a * 2).toString(), unit: "adet" },
      { label: "Askı Çubuğu", value: Math.ceil(a * 2).toString(), unit: "adet" },
      { label: "Klips", value: Math.ceil(a * 5).toString(), unit: "adet" },
      { label: "Vida 25mm", value: Math.ceil(a * 160).toString(), unit: "adet" },
      { label: "Ekleme Parçası", value: Math.ceil(a * 1).toString(), unit: "adet" },
      { label: "Dübel-Vida", value: Math.ceil(a * 2).toString(), unit: "adet" },
      { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
      { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Monoblok (alçı levha) asma tavan sistemi için gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} label="Tavan Alanı (m²)" />
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 4) MODÜLER ASMA TAVAN ───────────── */
function ModulerTavanCalc() {
  const [area, setArea] = useState("");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;
    setResults([
      { label: "Tavan Plakası (60x60)", value: (a * 2.77).toFixed(0), unit: "adet" },
      { label: "T24 Ana Taşıyıcı (3.6m)", value: (a * 0.24).toFixed(1), unit: "adet" },
      { label: "T24 Uzun Tali (1.2m)", value: (a * 1.39).toFixed(1), unit: "adet" },
      { label: "T24 Kısa Tali (0.6m)", value: (a * 1.38).toFixed(1), unit: "adet" },
      { label: "L Köşebent", value: (a * 3.7).toFixed(1), unit: "mt" },
      { label: "Çelik Dübel", value: Math.ceil(a * 0.7).toString(), unit: "adet" },
      { label: "Askı Teli", value: Math.ceil(a * 0.7).toString(), unit: "adet" },
      { label: "Çiftli Yay", value: Math.ceil(a * 0.7).toString(), unit: "adet" },
      { label: "Pul Başlıklı Dübel", value: Math.ceil(a * 2.1).toString(), unit: "adet" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">T profilli modüler asma tavan sistemi için gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} label="Tavan Alanı (m²)" />
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 5) YAPIŞTIRMA DUVAR GİYDİRME ───────────── */
function YapistirmaGiydirmeCalc() {
  const [area, setArea] = useState("");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;
    setResults([
      { label: "Alçı Levha", value: (a * 2.1).toFixed(1), unit: "m²" },
      { label: "Alçı Levha Yapıştırıcısı", value: (a * 52.5).toFixed(1), unit: "kg" },
      { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
      { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
      { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Yapıştırma yöntemiyle duvar giydirme sistemi için gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} />
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 6) AGRAFLI DUVAR GİYDİRME ───────────── */
function AgrafliGiydirmeCalc() {
  const [area, setArea] = useState("");
  const [subType, setSubType] = useState("tek");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;

    let res: CalcResult[];
    if (subType === "tek") {
      res = [
        { label: "Alçı Levha", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "TU Profili", value: (a * 0.9).toFixed(1), unit: "mt" },
        { label: "TC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 13).toString(), unit: "adet" },
        { label: "Agraf", value: Math.ceil(a * 2).toString(), unit: "adet" },
        { label: "Agraf Vidası", value: Math.ceil(a * 2).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    } else {
      res = [
        { label: "Alçı Levha", value: (a * 2.1).toFixed(1), unit: "m²" },
        { label: "TU Profili", value: (a * 0.9).toFixed(1), unit: "mt" },
        { label: "TC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 13).toString(), unit: "adet" },
        { label: "Vida 35mm", value: Math.ceil(a * 29).toString(), unit: "adet" },
        { label: "Agraf", value: Math.ceil(a * 2).toString(), unit: "adet" },
        { label: "Agraf Vidası", value: Math.ceil(a * 2).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    }
    setResults(res);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Metal iskeletli agraflı duvar giydirme sistemi için gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} />
        <div>
          <label className="block text-sm font-medium mb-1.5">Levha Tipi</label>
          <select value={subType} onChange={(e) => setSubType(e.target.value)} className={inputCls}>
            <option value="tek">Tek Kat Levha</option>
            <option value="cift">Çift Kat Levha</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 7) BAĞIMSIZ DUVAR GİYDİRME ───────────── */
function BagimsizGiydirmeCalc() {
  const [area, setArea] = useState("");
  const [subType, setSubType] = useState("tek");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;

    let res: CalcResult[];
    if (subType === "tek") {
      res = [
        { label: "Alçı Levha", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "DU Profili", value: (a * 0.9).toFixed(1), unit: "mt" },
        { label: "DC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 14).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    } else {
      res = [
        { label: "Alçı Levha", value: (a * 2.1).toFixed(1), unit: "m²" },
        { label: "DU Profili", value: (a * 0.9).toFixed(1), unit: "mt" },
        { label: "DC Profili", value: (a * 2.3).toFixed(1), unit: "mt" },
        { label: "Derz Dolgu", value: (a * 2.1).toFixed(1), unit: "kg" },
        { label: "Saten Perdah", value: (a * 3.7).toFixed(1), unit: "kg" },
        { label: "Vida 25mm", value: Math.ceil(a * 13).toString(), unit: "adet" },
        { label: "Vida 35mm", value: Math.ceil(a * 29).toString(), unit: "adet" },
        { label: "Dübel-Vida", value: Math.ceil(a * 3).toString(), unit: "adet" },
        { label: "Derz Bandı", value: (a * 1.6).toFixed(1), unit: "mt" },
        { label: "Yalıtım", value: (a * 1.05).toFixed(1), unit: "m²" },
        { label: "Ses Yalıtım Bandı", value: (a * 1.05).toFixed(1), unit: "mt" },
      ];
    }
    setResults(res);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Metal iskeletli bağımsız duvar giydirme sistemi için gerekli malzeme miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} />
        <div>
          <label className="block text-sm font-medium mb-1.5">Levha Tipi</label>
          <select value={subType} onChange={(e) => setSubType(e.target.value)} className={inputCls}>
            <option value="tek">Tek Kat Levha</option>
            <option value="cift">Çift Kat Levha</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 8) BOYA HESAPLAMA ───────────── */
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
    const doors = parseInt(doorCount) * 1.8;
    const windows = parseInt(windowCount) * 1.5;
    if (isNaN(w) || isNaN(h)) return;

    const totalArea = w * h * 4 - doors - windows;
    const paintNeeded = (totalArea * c) / 12;
    const primerNeeded = totalArea / 10;

    setResults([
      { label: "Toplam Duvar Alanı", value: totalArea.toFixed(1), unit: "m²" },
      { label: "Boya İhtiyacı", value: paintNeeded.toFixed(1), unit: "litre" },
      { label: "Astar İhtiyacı", value: primerNeeded.toFixed(1), unit: "litre" },
      { label: "Boya Kovası (15 lt)", value: Math.ceil(paintNeeded / 15).toString(), unit: "adet" },
    ]);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Oda boyutlarını girerek ihtiyacınız olan boya miktarını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Oda Genişliği (m)</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Örn: 5" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Oda Yüksekliği (m)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Örn: 2.8" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kat Sayısı</label>
          <select value={coats} onChange={(e) => setCoats(e.target.value)} className={inputCls}>
            <option value="1">1 Kat</option>
            <option value="2">2 Kat</option>
            <option value="3">3 Kat</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Kapı Sayısı</label>
          <input type="number" value={doorCount} onChange={(e) => setDoorCount(e.target.value)} placeholder="1" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Pencere Sayısı</label>
          <input type="number" value={windowCount} onChange={(e) => setWindowCount(e.target.value)} placeholder="2" className={inputCls} />
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── 9) SU YALITIM HESAPLAMA ───────────── */
function SuYalitimCalc() {
  const [area, setArea] = useState("");
  const [method, setMethod] = useState("membran");
  const [results, setResults] = useState<CalcResult[] | null>(null);

  const calculate = () => {
    const a = parseFloat(area);
    if (isNaN(a) || a <= 0) return;

    let res: CalcResult[];
    if (method === "membran") {
      const rolls = Math.ceil((a * 1.15) / 10);
      res = [
        { label: "Toplam Alan (+%15 fire)", value: (a * 1.15).toFixed(1), unit: "m²" },
        { label: "Membran Rulo", value: rolls.toString(), unit: "adet" },
        { label: "Astar (Primer)", value: (a * 0.3).toFixed(1), unit: "kg" },
      ];
    } else {
      const consumption = a * 3.5;
      res = [
        { label: "Toplam Alan", value: a.toFixed(1), unit: "m²" },
        { label: "Likit Membran", value: consumption.toFixed(1), unit: "kg" },
        { label: "Kova Adedi (20 kg)", value: Math.ceil(consumption / 20).toString(), unit: "adet" },
      ];
    }
    setResults(res);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted text-sm">Su yalıtımı yapılacak alanı ve yöntemi seçerek malzeme ihtiyacını hesaplayın.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AreaInput value={area} onChange={setArea} label="Yalıtım Alanı (m²)" />
        <div>
          <label className="block text-sm font-medium mb-1.5">Yalıtım Yöntemi</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)} className={inputCls}>
            <option value="membran">Membran (Rulo)</option>
            <option value="likit">Likit Membran</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className={btnCls}><Calculator size={18} /> Hesapla</button>
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

/* ───────────── ANA COMPONENT ───────────── */
const calcMap: Record<string, React.ComponentType> = {
  "bolme-duvar": BolmeDuvarCalc,
  "mantolama": MantolamaCalc,
  "monoblok-tavan": MonoblokTavanCalc,
  "moduler-tavan": ModulerTavanCalc,
  "yapistirma-giydirme": YapistirmaGiydirmeCalc,
  "agrafli-giydirme": AgrafliGiydirmeCalc,
  "bagimsiz-giydirme": BagimsizGiydirmeCalc,
  "boya": BoyaCalc,
  "su-yalitim": SuYalitimCalc,
};

export default function CalculatorApp() {
  const [activeCalc, setActiveCalc] = useState("bolme-duvar");
  const ActiveComponent = calcMap[activeCalc] || BolmeDuvarCalc;
  const activeType = calcTypes.find((c) => c.id === activeCalc);

  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sol Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-36">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3 px-1">
                Hesaplama Araçları
              </h2>
              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {calcTypes.map((ct) => {
                  const isActive = ct.id === activeCalc;
                  return (
                    <button
                      key={ct.id}
                      onClick={() => setActiveCalc(ct.id)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 lg:px-4 lg:py-3 rounded text-xs lg:text-sm font-medium transition-all text-left ${
                        isActive
                          ? "bg-accent text-white shadow-md"
                          : "bg-card border border-border text-foreground hover:border-accent/30 hover:text-accent"
                      }`}
                    >
                      <ct.icon
                        size={16}
                        className={`shrink-0 ${isActive ? "text-white" : "text-accent"}`}
                      />
                      <span className="leading-tight">{ct.label}</span>
                      <ChevronRight
                        size={14}
                        className={`ml-auto hidden lg:block transition-transform ${
                          isActive ? "translate-x-0.5" : ""
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Sağ İçerik */}
          <main className="flex-1 min-w-0">
            <div className="bg-card rounded border border-border p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-1">{activeType?.label}</h2>
              <p className="text-muted text-sm mb-6">{activeType?.desc}</p>
              <ActiveComponent />
            </div>

            <div className="mt-8 bg-card rounded border border-border p-6">
              <h3 className="text-lg font-semibold mb-3">Hesaplama Hakkında</h3>
              <div className="text-muted text-sm space-y-2">
                <p>Bu hesaplama aracı, projeniz için gereken tahmini malzeme miktarını belirlemenize yardımcı olur.</p>
                <p>Hesaplamalar 2.50m standart yükseklikte, %5 fire payı dahil, DC/TC profil 60cm aks aralıklı hesaplanmıştır.</p>
                <p>Kesin miktarlar zemin durumu, iklim koşulları ve uygulama tekniğine göre değişebilir. Daha doğru hesaplama için teknik ekibimizle iletişime geçin.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
