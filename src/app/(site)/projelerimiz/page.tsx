import type { Metadata } from "next";
import ProjectsView from "@/components/ProjectsView";
import { getProjects } from "@/lib/data";

export const dynamic = "force-dynamic";

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

export default async function ProjelerimizPage() {
  const { completed, ongoing } = await getProjects();

  const completedProjects = completed.map((p) => ({
    title: p.title,
    location: p.location,
    category: p.category_type,
    desc: p.description,
    materials: p.materials,
    image: p.image_url,
    images: p.images || (p.image_url ? [p.image_url] : []),
  }));

  const ongoingProjects = ongoing.map((p) => ({
    title: p.title,
    location: p.location,
    category: p.category_type,
    desc: p.description,
    materials: p.materials,
    progress: p.progress,
    image: p.image_url,
    images: p.images || (p.image_url ? [p.image_url] : []),
  }));

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
