'use client';

import { useEffect, useRef } from 'react';
import { stats } from '@/content/site';

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(containerRef.current?.querySelectorAll('[data-count]') ?? []);

    if (prefersReducedMotion) {
      elements.forEach((el) => {
        const target = Number(el.getAttribute('data-count'));
        el.textContent = target.toLocaleString();
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.getAttribute('data-count'));
            let current = 0;
            const step = Math.max(1, Math.round(target / 60));
            const interval = window.setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                window.clearInterval(interval);
              }
              el.textContent = current.toLocaleString();
            }, 16);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-shell mt-16">
      <div className="card grid gap-6 bg-white p-6 md:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 text-center" data-aos="fade-up">
            <p className="text-3xl font-semibold text-primary" data-count={stat.value}>
              0
            </p>
            <p className="text-sm text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
