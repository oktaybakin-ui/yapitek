import type { Metadata } from "next";
import ProductBrowser from "@/components/ProductBrowser";
import { getCategoriesWithProducts } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "YapıTek yapı malzemeleri ürün kataloğu. Su yalıtımı, ısı yalıtımı, boya, yapı kimyasalları, alçı ve yapı levhaları.",
};

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

export default async function UrunlerPage() {
  const dbCategories = await getCategoriesWithProducts();

  const productCategories = dbCategories.map((cat) => ({
    id: cat.id,
    iconName: cat.icon_name,
    title: cat.title,
    photo: cat.photo_url,
    desc: cat.description,
    brands: cat.brands,
    products: cat.products.map((p) => ({
      name: p.name,
      image: p.image_url ?? undefined,
    })),
  }));

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
