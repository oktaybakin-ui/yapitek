/**
 * Seed script - mevcut hardcoded verileri Supabase'e aktarır
 * Çalıştırma: npx tsx scripts/seed.ts
 *
 * Not: .env.local dosyasındaki SUPABASE_SERVICE_ROLE_KEY ve
 * NEXT_PUBLIC_SUPABASE_URL değişkenlerinin doldurulmuş olması gerekir.
 */

import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// .env.local dosyasını oku
const envPath = path.join(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const env: Record<string, string> = {};
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, "");
  }
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey || supabaseUrl.includes("your_")) {
  console.error("Lütfen .env.local dosyasındaki Supabase değişkenlerini doldurun!");
  process.exit(1);
}

const sb = createClient(supabaseUrl, serviceRoleKey);

// ─── KATEGORİLER ───
const categories = [
  {
    id: "su-yalitimi",
    icon_name: "Droplets",
    title: "Su Yalıtımı",
    photo_url: "/products/su-yalitimi.jpg",
    description: "Binaları su hasarından koruyan yüksek performanslı yalıtım çözümleri.",
    brands: ["FIXA", "İzocam", "Sika"],
    sort_order: 0,
  },
  {
    id: "isi-yalitimi",
    icon_name: "Layers",
    title: "Isı Yalıtımı",
    photo_url: "/products/isi-yalitimi.jpg",
    description: "Enerji tasarrufu sağlayan, TSE belgeli ısı yalıtım malzemeleri.",
    brands: ["İzocam", "Knauf", "Hekim Yapı", "Bonus XPS", "Dalsan"],
    sort_order: 1,
  },
  {
    id: "boya",
    icon_name: "Paintbrush",
    title: "Boya",
    photo_url: "/products/boya.jpg",
    description: "İç ve dış mekanlar için premium kalitede boya çözümleri.",
    brands: ["Filli Boya", "DYO", "Marshall", "Polisan", "Betek"],
    sort_order: 2,
  },
  {
    id: "yapi-kimyasallari",
    icon_name: "FlaskConical",
    title: "Yapı Kimyasalları",
    photo_url: "/products/yapi-kimyasallari.jpg",
    description: "Yapıların dayanıklılığını artıran kimyasal çözümler.",
    brands: ["FIXA", "Weber", "Kalekim"],
    sort_order: 3,
  },
  {
    id: "alci-siva",
    icon_name: "Hammer",
    title: "Alçı & Sıva",
    photo_url: "/products/alci-siva.jpg",
    description: "İç mekan düzenleme ve kaplama için alçı ve sıva ürünleri.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS"],
    sort_order: 4,
  },
  {
    id: "yapi-levhalari",
    icon_name: "Building2",
    title: "Yapı Levhaları",
    photo_url: "/products/yapi-levhalari.jpg",
    description: "Bölme duvar, asma tavan ve kaplama için yapı levhaları.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS", "Ytong"],
    sort_order: 5,
  },
];

// ─── ÜRÜNLER ───
const products: { category_id: string; name: string; image_url: string | null; sort_order: number }[] = [];

const productsByCategory: Record<string, { name: string; image?: string }[]> = {
  "su-yalitimi": [
    { name: "Cam Tülü Taşıyıcılı Membran", image: "/products/su-yalitimi/cam-tulu-membran.jpg" },
    { name: "Polyester Keçe Taşıyıcılı Membran", image: "/products/su-yalitimi/polyester-membran.jpg" },
    { name: "Keçe Taşıyıcısız Membran", image: "/products/su-yalitimi/kece-membran.jpg" },
    { name: "Arduazlı Membran", image: "/products/su-yalitimi/arduazli-membran.jpg" },
    { name: "PVC Geomembran", image: "/products/su-yalitimi/pvc-geomembran.jpg" },
    { name: "HDPE Membran", image: "/products/su-yalitimi/hdpe-membran.jpg" },
    { name: "TPO Membran", image: "/products/su-yalitimi/tpo-membran.jpg" },
    { name: "PVB Çatı Membranı", image: "/products/su-yalitimi/pvb-cati-membran.jpg" },
    { name: "Baca Bandı", image: "/products/su-yalitimi/baca-bandi.jpg" },
    { name: "Su Tutucu Bant", image: "/products/su-yalitimi/su-tutucu-bant.jpg" },
    { name: "Su ile Şişen Bant (Swel)", image: "/products/su-yalitimi/sisen-bant.jpg" },
    { name: "FIXA POLAN A – Poliüretan Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-a.jpg" },
    { name: "FIXA POLAN 500 – PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-500.jpg" },
    { name: "FIXA POLAN 620 – PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-620.jpg" },
    { name: "FIXA POLAN 700 – Poliürea Su Yalıtımı", image: "/products/su-yalitimi/fixa-polan-700.jpg" },
    { name: "FIXA BİTÜMFİX PU – Bitüm+PU Su Yalıtımı", image: "/products/su-yalitimi/fixa-bitumfix-pu.jpg" },
    { name: "FIXA IMPERMO PVC – Su Tutucu Bant", image: "/products/su-yalitimi/fixa-impermo-pvc.jpg" },
    { name: "FIXA IMPERMO Şişen Bant", image: "/products/su-yalitimi/fixa-impermo-sisen.jpg" },
    { name: "FIXA IMPERMO Su Yalıtım Filesi", image: "/products/su-yalitimi/fixa-impermo-file.jpg" },
    { name: "Likit Membran", image: "/products/su-yalitimi/likit-membran.jpg" },
    { name: "Kristalize Su Yalıtımı", image: "/products/su-yalitimi/kristalize-su-yalitimi.jpg" },
    { name: "Çimento Esaslı Su Yalıtımı", image: "/products/su-yalitimi/cimento-esasli.jpg" },
    { name: "Silikon Esaslı Su Yalıtımı" },
    { name: "Kapiler Su Yalıtımı", image: "/products/su-yalitimi/kapiler-su-yalitimi.jpg" },
    { name: "Hibrid Polimer Su Yalıtımı", image: "/products/su-yalitimi/hibrid-polimer.jpg" },
    { name: "MS Polimer Su Yalıtımı", image: "/products/su-yalitimi/ms-polimer.jpg" },
    { name: "Dilatasyon Bandı" },
    { name: "Drenaj Levhaları" },
  ],
  "isi-yalitimi": [
    { name: "EPS (Strafor) Levhalar", image: "/products/isi-yalitimi/eps-strafor.jpg" },
    { name: "XPS Isı Yalıtım Levhaları", image: "/products/isi-yalitimi/xps-levha.jpg" },
    { name: "Bonus XPS Platin Levha", image: "/products/isi-yalitimi/bonus-xps-platin.jpg" },
    { name: "Cam Yünü", image: "/products/isi-yalitimi/cam-yunu.jpg" },
    { name: "Cam Yünü Levha", image: "/products/isi-yalitimi/cam-yunu-levha.jpg" },
    { name: "Mineral Yün", image: "/products/isi-yalitimi/mineral-yun.jpg" },
    { name: "Mantolama Yapıştırıcıları", image: "/products/isi-yalitimi/mantolama-yapistirici.jpg" },
    { name: "Mantolama Sıvası", image: "/products/isi-yalitimi/siva.jpg" },
    { name: "Dekoratif Sıva", image: "/products/isi-yalitimi/dekoratif-siva.jpg" },
    { name: "Isı Yalıtım Dübelleri", image: "/products/isi-yalitimi/dubel.jpg" },
    { name: "Mantolama Filesi", image: "/products/isi-yalitimi/file.jpg" },
    { name: "Fileli Köşe Profili", image: "/products/isi-yalitimi/fileli-kose.jpg" },
    { name: "Çatı Şiltesi ve Levhası", image: "/products/isi-yalitimi/cati-siltesi.jpg" },
    { name: "XPE Şilte", image: "/products/isi-yalitimi/xpe-silte.jpg" },
    { name: "Ara Bölme Levhaları", image: "/products/isi-yalitimi/ara-bolme.jpg" },
    { name: "Giydirme Cephe Levhaları", image: "/products/isi-yalitimi/giydirme-cephe.jpg" },
    { name: "Bitüm Kaplı Taş Yünü Levha", image: "/products/isi-yalitimi/bitum-kapli-tasyunu.jpg" },
    { name: "Rabitz Telli Sanayi Şiltesi", image: "/products/isi-yalitimi/rabitz-sanayi.jpg" },
    { name: "Yangın Kapı Levhası", image: "/products/isi-yalitimi/yangin-kapi.jpg" },
    { name: "Prefabrik Boru Yalıtımı", image: "/products/isi-yalitimi/prefabrik-boru.jpg" },
    { name: "Dalsan Fibero Mineral Yün", image: "/products/isi-yalitimi/dalsan-fibero.jpg" },
    { name: "Şap Altı Şilteler" },
    { name: "Poliüretan Köpük" },
    { name: "Seramik Yünü" },
  ],
  "boya": [
    { name: "İç Cephe Boyaları", image: "/products/boya/ic-cephe.jpg" },
    { name: "Dış Cephe Boyaları", image: "/products/boya/dis-cephe.jpg" },
    { name: "Astar ve Primer", image: "/products/boya/astar-primer.jpg" },
    { name: "Tavan Boyaları", image: "/products/boya/tavan-boyasi.jpg" },
    { name: "Antipas ve Koruyucu Boyalar", image: "/products/boya/antipas.jpg" },
    { name: "Vernik ve Cilalar", image: "/products/boya/vernik-cila.jpg" },
    { name: "Dekoratif Boyalar", image: "/products/boya/dekoratif-boya.jpg" },
    { name: "Endüstriyel Boyalar", image: "/products/boya/endustriyel-boya.jpg" },
  ],
  "yapi-kimyasallari": [
    { name: "Epoksi Esaslı Ankraj ve Tamir Harcı", image: "/products/yapi-kimyasallari/epoksi-ankraj.jpg" },
    { name: "FIXA SS 935 Silikon Mastik", image: "/products/yapi-kimyasallari/fixa-ss935.jpg" },
    { name: "FIXA SS 930 Silikon Mastik", image: "/products/yapi-kimyasallari/fixa-ss930.jpg" },
    { name: "FIXA PU 970 Poliüretan Mastik", image: "/products/yapi-kimyasallari/fixa-pu970.jpg" },
    { name: "FIXA MS 940 MS Polimer Mastik", image: "/products/yapi-kimyasallari/fixa-ms940.jpg" },
    { name: "FIXA AS 910 Akrilik Mastik", image: "/products/yapi-kimyasallari/fixa-as910.jpg" },
    { name: "Fayans Yapıştırıcıları", image: "/products/yapi-kimyasallari/fayans-yapistirici.jpg" },
    { name: "Derz Dolgu Malzemeleri", image: "/products/yapi-kimyasallari/derz-dolgu.jpg" },
    { name: "Beton ve Harç Katkıları", image: "/products/yapi-kimyasallari/beton-harc-katki.jpg" },
    { name: "Çimento Esaslı Sıvalar", image: "/products/yapi-kimyasallari/cimento-esasli-siva.jpg" },
    { name: "Onarım Güçlendirme Ürünleri", image: "/products/yapi-kimyasallari/onarim-guclendirme.jpg" },
    { name: "Endüstriyel Zemin Ürünleri", image: "/products/yapi-kimyasallari/endustriyel-zemin.jpg" },
    { name: "Teknik Harçlar", image: "/products/yapi-kimyasallari/teknik-harc.jpg" },
    { name: "Zemin Çözüm Ürünleri", image: "/products/yapi-kimyasallari/zemin-cozum.jpg" },
    { name: "Sızdırmazlık Malzemeleri", image: "/products/yapi-kimyasallari/sizdirmazlik.jpg" },
    { name: "MS Polimer Mastikler", image: "/products/yapi-kimyasallari/ms-polimer-mastik.jpg" },
    { name: "Poliüretan Mastikler", image: "/products/yapi-kimyasallari/poliuretan-mastik.jpg" },
    { name: "Poliüretan+Katran Mastikler", image: "/products/yapi-kimyasallari/pu-katran-mastik.jpg" },
    { name: "Akrilik Mastikler", image: "/products/yapi-kimyasallari/akrilik-mastik.jpg" },
    { name: "Silikon Mastikler", image: "/products/yapi-kimyasallari/silikon-mastik.jpg" },
    { name: "Tarihi Eser Ürünleri", image: "/products/yapi-kimyasallari/tarihi-eser.jpg" },
  ],
  "alci-siva": [
    { name: "ABS M19 Makine Sıva Alçısı", image: "/products/alci-siva/abs-m19-makine.jpg" },
    { name: "ABS Sıva Alçısı", image: "/products/alci-siva/abs-siva-alcisi.jpg" },
    { name: "Dalsan Grio Saten Perdah", image: "/products/alci-siva/dalsan-grio-saten.jpg" },
    { name: "Sivatek Perlitli Sıva Alçısı", image: "/products/alci-siva/sivatek-perlitli.jpg" },
    { name: "Floortek Kendinden Yayılan Şap", image: "/products/alci-siva/floortek-sap.jpg" },
    { name: "Sıva Köşe Profili", image: "/products/alci-siva/dalsan-siva-kose.jpg" },
    { name: "Rigips Makine Alçısı", image: "/products/alci-siva/rigips-makine.jpg" },
    { name: "Rigips Perlitli Sıva", image: "/products/alci-siva/rigips-perlitli.jpg" },
    { name: "Alçıtek Gold Makine Sıva", image: "/products/alci-siva/alcitek-gold.jpg" },
    { name: "PRF/PRFMAX Makine Alçısı" },
    { name: "Maklux Makine Sıva Alçısı", image: "/products/alci-siva/maklux-makine.jpg" },
    { name: "Saten Alçı", image: "/products/alci-siva/saten-alci.jpg" },
    { name: "Kartonpiyer Alçısı", image: "/products/alci-siva/kartonpiyer.jpg" },
    { name: "Derz Dolgu Alçısı", image: "/products/alci-siva/derz-dolgu-alci.jpg" },
    { name: "Grio Silikonlu Esnek Derz Dolgu", image: "/products/alci-siva/grio-esnek-derz.jpg" },
    { name: "Dış Cephe Sıvaları", image: "/products/alci-siva/dis-cephe-siva.jpg" },
    { name: "Isı Yalıtım Sıvaları" },
  ],
  "yapi-levhalari": [
    { name: "Dalsan Beyaz COREX Alçı Plaka", image: "/products/yapi-levhalari/dalsan-beyaz-corex.jpg" },
    { name: "Dalsan A1 COREX Yangın Dayanımlı", image: "/products/yapi-levhalari/dalsan-a1-corex.jpg" },
    { name: "Dalsan Ergoboard", image: "/products/yapi-levhalari/dalsan-ergoboard.jpg" },
    { name: "Dalsan BoardeX Dış Cephe", image: "/products/yapi-levhalari/dalsan-boardex.jpg" },
    { name: "ABS Alçı Plaka FLX", image: "/products/yapi-levhalari/abs-alci-plaka.jpg" },
    { name: "Ses Yalıtım Levhaları", image: "/products/yapi-levhalari/ses-yalitim.jpg" },
    { name: "Fibercement Desenli (Bauholz)", image: "/products/yapi-levhalari/fibercement-bauholz.jpg" },
    { name: "Fibercement Siding (Bausiding)", image: "/products/yapi-levhalari/fibercement-siding.jpg" },
    { name: "Fibercement Düz Levha (Baunorm)", image: "/products/yapi-levhalari/fibercement-duz.jpg" },
    { name: "Klima Levhası", image: "/products/yapi-levhalari/klima-levha.jpg" },
    { name: "Dalsan Askı Çubuğu", image: "/products/yapi-levhalari/dalsan-aski-cubugu.jpg" },
    { name: "Dalsan Sıva Filesi", image: "/products/yapi-levhalari/dalsan-siva-filesi.jpg" },
    { name: "Dalsan Köşe Profili", image: "/products/yapi-levhalari/dalsan-kose-profili.jpg" },
    { name: "Dalsan Revizyon Kapağı", image: "/products/yapi-levhalari/dalsan-revizyon-kapak.jpg" },
    { name: "Suya Dayanıklı Alçıpan", image: "/products/yapi-levhalari/suya-dayanikli.jpg" },
    { name: "Yangına Dayanıklı Alçıpan", image: "/products/yapi-levhalari/yangina-dayanikli.jpg" },
    { name: "Taşıyıcı Profiller (C-U)", image: "/products/yapi-levhalari/tasiyici-profil.jpg" },
    { name: "Asma Tavan Profilleri" },
    { name: "OSB Levhalar" },
    { name: "Duvar U ve C Profilleri", image: "/products/yapi-levhalari/duvar-profil.jpg" },
    { name: "Kapı Destek Profili", image: "/products/yapi-levhalari/kapi-destek-profil.jpg" },
    { name: "Vidalar ve Dübeller", image: "/products/yapi-levhalari/vida-dubel.jpg" },
    { name: "Alçıpan Klips ve Pençe", image: "/products/yapi-levhalari/klips-pence.jpg" },
  ],
};

for (const [catId, prods] of Object.entries(productsByCategory)) {
  prods.forEach((p, i) => {
    products.push({
      category_id: catId,
      name: p.name,
      image_url: p.image ?? null,
      sort_order: i,
    });
  });
}

// ─── PROJELER ───
const projects = [
  {
    title: "Ankara Konut Projesi",
    location: "Çankaya, Ankara",
    category_type: "Konut",
    description: "120 daireli konut projesine komple yalıtım ve boya malzemesi tedariki.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı", "Boya"],
    image_url: "/projects/konut-projesi.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 0,
  },
  {
    title: "Ticari Plaza İnşaatı",
    location: "Eryaman, Ankara",
    category_type: "Ticari",
    description: "12 katlı ticari plaza için alçı levha, profil ve yapı kimyasalları tedariki.",
    materials: ["Alçı & Sıva", "Yapı Levhaları", "Yapı Kimyasalları"],
    image_url: "/projects/plaza-insaati.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 1,
  },
  {
    title: "Okul Renovasyon Projesi",
    location: "Keçiören, Ankara",
    category_type: "Kamu",
    description: "3 okul binasının iç cephe yenileme çalışması için malzeme tedariki.",
    materials: ["Boya", "Alçı & Sıva", "Su Yalıtımı"],
    image_url: "/projects/okul-renovasyon.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 2,
  },
  {
    title: "Toplu Konut Alanı",
    location: "Sincan, Ankara",
    category_type: "Konut",
    description: "250 daireli toplu konut projesine mantolama ve dış cephe malzemesi.",
    materials: ["Isı Yalıtımı", "Boya", "Yapı Kimyasalları"],
    image_url: "/projects/toplu-konut.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 3,
  },
  {
    title: "Otel Dekorasyon Projesi",
    location: "Kızılay, Ankara",
    category_type: "Ticari",
    description: "80 odalı otel için iç mekan dekoratif sıva ve boya malzemeleri.",
    materials: ["Boya", "Alçı & Sıva"],
    image_url: "/projects/otel-dekorasyon.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 4,
  },
  {
    title: "Sanayi Tesisi Yalıtım",
    location: "OSTİM, Ankara",
    category_type: "Sanayi",
    description: "5.000 m² sanayi tesisi çatı ve cephe yalıtım malzemesi tedariki.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı"],
    image_url: "/projects/sanayi-yalitim.jpg",
    status: "completed" as const,
    progress: 100,
    sort_order: 5,
  },
  {
    title: "Karma Yaşam Projesi",
    location: "Etimesgut, Ankara",
    category_type: "Konut",
    description: "300 daireli karma yaşam alanı için komple yapı malzemesi tedariki devam ediyor.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı", "Boya", "Alçı & Sıva"],
    image_url: "/projects/karma-yasam.jpg",
    status: "ongoing" as const,
    progress: 65,
    sort_order: 6,
  },
  {
    title: "AVM Genişleme Projesi",
    location: "Batıkent, Ankara",
    category_type: "Ticari",
    description: "Mevcut AVM'ye ek bina inşaatı için yapı levhaları ve profil tedariki.",
    materials: ["Yapı Levhaları", "Alçı & Sıva", "Yapı Kimyasalları"],
    image_url: "/projects/avm-genisleme.jpg",
    status: "ongoing" as const,
    progress: 40,
    sort_order: 7,
  },
  {
    title: "Hastane Yenileme",
    location: "Mamak, Ankara",
    category_type: "Kamu",
    description: "Devlet hastanesi iç mekan yenileme projesi için malzeme tedariki.",
    materials: ["Boya", "Alçı & Sıva", "Su Yalıtımı"],
    image_url: "/projects/hastane-yenileme.jpg",
    status: "ongoing" as const,
    progress: 25,
    sort_order: 8,
  },
];

async function seed() {
  console.log("Seed başlatılıyor...\n");

  // Kategoriler
  console.log("Kategoriler ekleniyor...");
  const { error: catErr } = await sb.from("categories").upsert(categories, { onConflict: "id" });
  if (catErr) {
    console.error("Kategori hatası:", catErr.message);
  } else {
    console.log(`  ${categories.length} kategori eklendi.`);
  }

  // Ürünler - mevcut verileri temizle ve yeniden ekle
  console.log("Ürünler ekleniyor...");
  await sb.from("products").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  const { error: prodErr } = await sb.from("products").insert(products);
  if (prodErr) {
    console.error("Ürün hatası:", prodErr.message);
  } else {
    console.log(`  ${products.length} ürün eklendi.`);
  }

  // Projeler
  console.log("Projeler ekleniyor...");
  await sb.from("projects").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  const { error: projErr } = await sb.from("projects").insert(projects);
  if (projErr) {
    console.error("Proje hatası:", projErr.message);
  } else {
    console.log(`  ${projects.length} proje eklendi.`);
  }

  console.log("\nSeed tamamlandı!");
}

seed().catch(console.error);
