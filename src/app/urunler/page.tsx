import type { Metadata } from "next";
import ProductBrowser from "@/components/ProductBrowser";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "YapıTek yapı malzemeleri ürün kataloğu. Su yalıtımı, ısı yalıtımı, boya, yapı kimyasalları, alçı ve yapı levhaları.",
};

const productCategories = [
  {
    id: "su-yalitimi",
    iconName: "Droplets",
    title: "Su Yalıtımı",
    photo: "/products/su-yalitimi.jpg",
    desc: "Binaları su hasarından koruyan yüksek performanslı yalıtım çözümleri.",
    brands: ["FIXA", "İzocam", "Sika"],
    products: [
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
  },
  {
    id: "isi-yalitimi",
    iconName: "Layers",
    title: "Isı Yalıtımı",
    photo: "/products/isi-yalitimi.jpg",
    desc: "Enerji tasarrufu sağlayan, TSE belgeli ısı yalıtım malzemeleri.",
    brands: ["İzocam", "Knauf", "Hekim Yapı", "Bonus XPS", "Dalsan"],
    products: [
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
  },
  {
    id: "boya",
    iconName: "Paintbrush",
    title: "Boya",
    photo: "/products/boya.jpg",
    desc: "İç ve dış mekanlar için premium kalitede boya çözümleri.",
    brands: ["Filli Boya", "DYO", "Marshall", "Polisan", "Betek"],
    products: [
      { name: "İç Cephe Boyaları", image: "/products/boya/ic-cephe.jpg" },
      { name: "Dış Cephe Boyaları", image: "/products/boya/dis-cephe.jpg" },
      { name: "Astar ve Primer", image: "/products/boya/astar-primer.jpg" },
      { name: "Tavan Boyaları", image: "/products/boya/tavan-boyasi.jpg" },
      { name: "Antipas ve Koruyucu Boyalar", image: "/products/boya/antipas.jpg" },
      { name: "Vernik ve Cilalar", image: "/products/boya/vernik-cila.jpg" },
      { name: "Dekoratif Boyalar", image: "/products/boya/dekoratif-boya.jpg" },
      { name: "Endüstriyel Boyalar", image: "/products/boya/endustriyel-boya.jpg" },
    ],
  },
  {
    id: "yapi-kimyasallari",
    iconName: "FlaskConical",
    title: "Yapı Kimyasalları",
    photo: "/products/yapi-kimyasallari.jpg",
    desc: "Yapıların dayanıklılığını artıran kimyasal çözümler.",
    brands: ["FIXA", "Weber", "Kalekim"],
    products: [
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
  },
  {
    id: "alci-siva",
    iconName: "Hammer",
    title: "Alçı & Sıva",
    photo: "/products/alci-siva.jpg",
    desc: "İç mekan düzenleme ve kaplama için alçı ve sıva ürünleri.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS"],
    products: [
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
  },
  {
    id: "yapi-levhalari",
    iconName: "Building2",
    title: "Yapı Levhaları",
    photo: "/products/yapi-levhalari.jpg",
    desc: "Bölme duvar, asma tavan ve kaplama için yapı levhaları.",
    brands: ["Dalsan", "Knauf", "Rigips", "ABS", "Ytong"],
    products: [
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
  },
];

function PageBanner() {
  return (
    <section className="bg-accent text-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Ürünlerimiz</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          İhtiyacınız olan tüm yapı malzemelerini en kaliteli markalarla
          tek çatı altında sunuyoruz.
        </p>
      </div>
    </section>
  );
}

export default function UrunlerPage() {
  return (
    <>
      <PageBanner />
      <div className="py-10 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <ProductBrowser categories={productCategories} />
        </div>
      </div>
    </>
  );
}
