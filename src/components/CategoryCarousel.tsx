"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
};

interface Category {
  iconName: string;
  title: string;
  desc: string;
  id: string;
  photo: string;
}

export default function CategoryCarousel({
  categories,
}: {
  categories: Category[];
}) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const total = categories.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, next]);

  // Pause on hover
  const pause = () => setIsAutoPlaying(false);
  const resume = () => setIsAutoPlaying(true);

  // Intersection observer to trigger entrance animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Carousel Container */}
      <div className="relative">
        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 bg-white border border-border rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors hidden md:flex"
          aria-label="Önceki"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 bg-white border border-border rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors hidden md:flex"
          aria-label="Sonraki"
        >
          <ChevronRight size={18} />
        </button>

        {/* Track */}
        <div className="overflow-hidden rounded-sm" ref={trackRef}>
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.iconName] || Building2;
              return (
                <div
                  key={cat.id}
                  className="w-full shrink-0 px-1"
                >
                  <Link
                    href={`/urunler#${cat.id}`}
                    className="group block relative h-[420px] md:h-[480px] rounded-sm overflow-hidden"
                  >
                    {/* Background image */}
                    <Image
                      src={cat.photo}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      priority={i === 0}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      <div
                        className={`transition-all duration-700 delay-200 ${
                          current === i
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                        }`}
                      >
                        <div className="w-12 h-12 rounded bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {cat.title}
                        </h3>
                        <p className="text-white/70 text-sm md:text-base max-w-md">
                          {cat.desc}
                        </p>
                        <span className="inline-flex items-center gap-2 text-white text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                          Ürünleri İncele
                          <ChevronRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dots / Category Pills */}
      <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => goTo(i)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              current === i
                ? "bg-accent text-white shadow-md"
                : "bg-white border border-border text-muted hover:border-accent/30 hover:text-accent"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-0.5 bg-border rounded-full overflow-hidden mx-auto max-w-md">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
