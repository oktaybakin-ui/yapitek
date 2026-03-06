import type { Metadata } from "next";
import CalculatorApp from "@/components/CalculatorApp";

export const metadata: Metadata = {
  title: "Malzeme Hesaplama | YapıTek",
  description:
    "Bölme duvar, mantolama, asma tavan, duvar giydirme, boya ve su yalıtımı için malzeme ihtiyacınızı hesaplayın.",
};

function PageBanner() {
  return (
    <section className="bg-accent text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Malzeme Hesaplama</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Bölme duvar, mantolama, asma tavan, duvar giydirme, boya ve su
          yalıtımı projeleriniz için gereken malzeme miktarını kolayca
          hesaplayın.
        </p>
      </div>
    </section>
  );
}

export default function HesaplamaPage() {
  return (
    <>
      <PageBanner />
      <CalculatorApp />
    </>
  );
}
