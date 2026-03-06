import type { Metadata } from "next";
import ProjectsView from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Projelerimiz | YapıTek",
  description:
    "YapıTek olarak tamamladığımız ve devam eden yapı malzemesi tedarik projelerimiz.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20 banner-animate">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Projelerimiz</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Tamamlanan ve devam eden projelerimizle yapı sektörüne değer
          katıyoruz.
        </p>
      </div>
    </section>
  );
}

const completedProjects = [
  {
    title: "Ankara Konut Projesi",
    location: "Çankaya, Ankara",
    category: "Konut",
    desc: "120 daireli konut projesine komple yalıtım ve boya malzemesi tedariki.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı", "Boya"],
    image: "/projects/konut-projesi.jpg",
  },
  {
    title: "Ticari Plaza İnşaatı",
    location: "Eryaman, Ankara",
    category: "Ticari",
    desc: "12 katlı ticari plaza için alçı levha, profil ve yapı kimyasalları tedariki.",
    materials: ["Alçı & Sıva", "Yapı Levhaları", "Yapı Kimyasalları"],
    image: "/projects/plaza-insaati.jpg",
  },
  {
    title: "Okul Renovasyon Projesi",
    location: "Keçiören, Ankara",
    category: "Kamu",
    desc: "3 okul binasının iç cephe yenileme çalışması için malzeme tedariki.",
    materials: ["Boya", "Alçı & Sıva", "Su Yalıtımı"],
    image: "/projects/okul-renovasyon.jpg",
  },
  {
    title: "Toplu Konut Alanı",
    location: "Sincan, Ankara",
    category: "Konut",
    desc: "250 daireli toplu konut projesine mantolama ve dış cephe malzemesi.",
    materials: ["Isı Yalıtımı", "Boya", "Yapı Kimyasalları"],
    image: "/projects/toplu-konut.jpg",
  },
  {
    title: "Otel Dekorasyon Projesi",
    location: "Kızılay, Ankara",
    category: "Ticari",
    desc: "80 odalı otel için iç mekan dekoratif sıva ve boya malzemeleri.",
    materials: ["Boya", "Alçı & Sıva"],
    image: "/projects/otel-dekorasyon.jpg",
  },
  {
    title: "Sanayi Tesisi Yalıtım",
    location: "OSTİM, Ankara",
    category: "Sanayi",
    desc: "5.000 m² sanayi tesisi çatı ve cephe yalıtım malzemesi tedariki.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı"],
    image: "/projects/sanayi-yalitim.jpg",
  },
];

const ongoingProjects = [
  {
    title: "Karma Yaşam Projesi",
    location: "Etimesgut, Ankara",
    category: "Konut",
    desc: "300 daireli karma yaşam alanı için komple yapı malzemesi tedariki devam ediyor.",
    materials: ["Su Yalıtımı", "Isı Yalıtımı", "Boya", "Alçı & Sıva"],
    progress: 65,
    image: "/projects/karma-yasam.jpg",
  },
  {
    title: "AVM Genişleme Projesi",
    location: "Batıkent, Ankara",
    category: "Ticari",
    desc: "Mevcut AVM'ye ek bina inşaatı için yapı levhaları ve profil tedariki.",
    materials: ["Yapı Levhaları", "Alçı & Sıva", "Yapı Kimyasalları"],
    progress: 40,
    image: "/projects/avm-genisleme.jpg",
  },
  {
    title: "Hastane Yenileme",
    location: "Mamak, Ankara",
    category: "Kamu",
    desc: "Devlet hastanesi iç mekan yenileme projesi için malzeme tedariki.",
    materials: ["Boya", "Alçı & Sıva", "Su Yalıtımı"],
    progress: 25,
    image: "/projects/hastane-yenileme.jpg",
  },
];

export default function ProjelerimizPage() {
  return (
    <>
      <PageBanner />
      <ProjectsView
        completedProjects={completedProjects}
        ongoingProjects={ongoingProjects}
      />
    </>
  );
}
