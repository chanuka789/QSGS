'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import gsap from 'gsap';

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    AOS.init({ duration: 700, once: true, easing: 'ease-out-quart' });

    gsap.from('.hero-overlay .card', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' });
  }, []);

  return <>{children}</>;
}
