import Image from "next/image";

const brands = [
  { name: "İzocam", logo: "/brands/izocam.svg" },
  { name: "Knauf", logo: "/brands/knauf.svg" },
  { name: "Weber", logo: "/brands/weber.svg" },
  { name: "Betek", logo: "/brands/betek.svg" },
  { name: "Filli Boya", logo: "/brands/filli-boya.svg" },
  { name: "DYO", logo: "/brands/dyo.svg" },
  { name: "Marshall", logo: "/brands/marshall.svg" },
  { name: "Polisan", logo: "/brands/polisan.svg" },
  { name: "Hekim Yapı", logo: "/brands/hekim-yapi.svg" },
  { name: "Kalekim", logo: "/brands/kalekim.svg" },
  { name: "Ytong", logo: "/brands/ytong.svg" },
  { name: "Rigips", logo: "/brands/rigips.svg" },
];

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-16 px-10 shrink-0">
      <span className="text-secondary/60 font-bold text-lg whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-10 bg-white border-y border-border overflow-hidden">
      <div className="relative">
        {/* Fade sol */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Fade sağ */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {/* İlk set */}
          {brands.map((b) => (
            <BrandItem key={b.name} name={b.name} />
          ))}
          {/* Tekrar (sonsuz döngü için) */}
          {brands.map((b) => (
            <BrandItem key={`dup-${b.name}`} name={b.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
