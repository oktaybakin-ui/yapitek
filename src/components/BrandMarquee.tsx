import Image from "next/image";

const brands = [
  { name: "İzocam", logo: "/brands/izocam.svg" },
  { name: "Knauf", logo: "/brands/knauf.png" },
  { name: "Weber", logo: "/brands/weber.svg" },
  { name: "FIXA", logo: "/brands/fixa.png" },
  { name: "Dalsan", logo: "/brands/dalsan.png" },
  { name: "ABS", logo: "/brands/abs.png" },
  { name: "Filli Boya", logo: "/brands/filli-boya.png" },
  { name: "DYO", logo: "/brands/dyo.png" },
  { name: "Marshall", logo: "/brands/marshall.png" },
  { name: "Polisan", logo: "/brands/polisan.png" },
  { name: "Betek", logo: "/brands/betek.png" },
  { name: "Hekim Yapı", logo: "/brands/hekim-yapi.png" },
  { name: "Kalekim", logo: "/brands/kalekim.svg" },
  { name: "Ytong", logo: "/brands/ytong.png" },
  { name: "Rigips", logo: "/brands/rigips.png" },
  { name: "Bonus XPS", logo: "/brands/bonus-xps.svg" },
];

function BrandItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center h-20 px-10 shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={48}
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-8 bg-white border-y border-border overflow-hidden">
      <div className="text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Çözüm Ortaklarımız
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {brands.map((b) => (
            <BrandItem key={b.name} name={b.name} logo={b.logo} />
          ))}
          {brands.map((b) => (
            <BrandItem key={`dup-${b.name}`} name={b.name} logo={b.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
