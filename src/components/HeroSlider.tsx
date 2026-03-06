"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/hero-2.jpg",
    alt: "Yapı malzemeleri deposu",
  },
  {
    src: "/hero-3.jpg",
    alt: "İnşaat projesi",
  },
  {
    src: "/hero-4.jpg",
    alt: "Yalıtım malzemeleri",
  },
  {
    src: "/hero-5.jpg",
    alt: "Boya ve yapı kimyasalları",
  },
  {
    src: "/hero-6.jpg",
    alt: "Modern yapı projeleri",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-60" : "opacity-0"
          }`}
          priority={i === 0}
          quality={85}
          sizes="100vw"
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-accent"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </>
  );
}
