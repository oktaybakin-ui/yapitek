"use client";

import { useEffect, useRef, type ReactNode } from "react";

/* Mark body as JS-ready so CSS animations activate only after hydration */
let srReady = false;
function ensureSrReady() {
  if (srReady) return;
  srReady = true;
  if (typeof document !== "undefined") {
    document.body.setAttribute("data-sr-ready", "");
  }
}

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-in"
  | "blur-in";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  once?: boolean;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureSrReady();
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("sr-visible");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`sr-base sr-${animation} ${className}`}
      style={{
        "--sr-delay": `${delay}ms`,
        "--sr-duration": `${duration}ms`,
        "--sr-stagger": `${stagger}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* Stagger wrapper: assigns incremental delays to direct children */
interface StaggerProps {
  children: ReactNode;
  animation?: Animation;
  stagger?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function StaggerChildren({
  children,
  animation = "fade-up",
  stagger = 100,
  duration = 600,
  threshold = 0.1,
  className = "",
  once = true,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureSrReady();
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stagger-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("stagger-visible");
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`stagger-parent ${className}`}
      style={{
        "--sr-stagger": `${stagger}ms`,
        "--sr-duration": `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* Counter animation for stats */
export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  className = "",
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const startTime = performance.now();

          function update(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (el) el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              if (el) el.textContent = target + suffix;
            }
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
