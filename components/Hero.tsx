import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  children?: ReactNode;
}

export function Hero({ eyebrow, title, description, ctaPrimary, ctaSecondary, children }: HeroProps) {
  return (
    <section className="hero-overlay relative overflow-hidden bg-hero-gradient text-white">
      <div className="section-shell relative z-10 grid gap-10 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {eyebrow && <p className="badge bg-white/10 text-sm uppercase tracking-[0.18em] text-neutral-100">{eyebrow}</p>}
          <h1 className="font-display text-4xl leading-tight md:text-5xl">{title}</h1>
          <p className="text-lg text-neutral-100/90">{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            {ctaPrimary && (
              <Link href={ctaPrimary.href} className="button-primary">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="button-ghost">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="card bg-white/10 text-neutral-100 shadow-2xl">
          {children ?? (
            <div className="space-y-3 p-6 text-neutral-100">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-200">Preserve your SEO</p>
              <h2 className="text-2xl font-semibold">Modern look, same trusted content</h2>
              <p className="text-neutral-100/90">
                Layouts, animations, and forms are rebuilt on a performant Next.js foundation. All existing copy, headings, URLs,
                and metadata are retained for search equity.
              </p>
              <ul className="space-y-2 text-neutral-100/90">
                <li>✔ Responsive, mobile-first grids</li>
                <li>✔ Scroll-triggered reveals with reduced-motion support</li>
                <li>✔ CTA consistency across every service page</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
