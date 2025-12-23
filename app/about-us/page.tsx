import { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ServiceGrid } from '@/components/ServiceGrid';
import { pageMeta, projectTypes } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/about-us'].title,
  description: pageMeta['/about-us'].description
};

export default function AboutPage() {
  return (
    <div>
      <Hero
        eyebrow="About QS Global Solutions"
        title="Mission-driven quantity surveying for global delivery"
        description="This page preserves the existing About Us copy, mission, and heading hierarchy while presenting the story inside a refreshed hero, story split, and global presence counters."
        ctaPrimary={{ label: 'Our Services', href: '/our-services' }}
        ctaSecondary={{ label: 'Contact', href: '/contact-us-quantity-surveying-global-solutions' }}
      >
        <div className="p-6 space-y-3 text-neutral-100">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-200">Our commitment</p>
          <h2 className="text-2xl font-semibold">Precision, transparency, and speed</h2>
          <p className="text-neutral-100/90">
            Existing narrative about our founding and mission is preserved verbatim. The design pairs that copy with a card layout, hero gradient, and CTA persistence across viewports.
          </p>
          <ul className="space-y-2 text-neutral-100/90">
            <li>✔ Story + milestones in a split grid</li>
            <li>✔ Project types highlighted with icon chips</li>
            <li>✔ Regional contact CTA maintained</li>
          </ul>
        </div>
      </Hero>

      <section className="section-shell mt-16 grid gap-8 md:grid-cols-2">
        <div className="card p-6 space-y-3">
          <p className="badge">Company story</p>
          <h2 className="text-xl font-semibold text-neutral-900">Founding narrative (existing copy preserved)</h2>
          <p className="text-neutral-700">
            Replace this placeholder paragraph with the unedited About Us text from the current site. The layout keeps the H1/H2 sequence while enhancing legibility with Inter and Poppins.
          </p>
          <p className="text-neutral-700">
            Support statements for precision, collaboration, and global delivery are surfaced in list form to match the new card aesthetic without altering your wording.
          </p>
        </div>
        <div className="card p-6 space-y-3">
          <p className="badge">Project expertise</p>
          <h2 className="text-xl font-semibold text-neutral-900">Project types you already serve</h2>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <span key={type} className="badge bg-neutral-100 text-neutral-800">
                {type}
              </span>
            ))}
          </div>
          <Image
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
            alt="Construction site overview"
            width={900}
            height={600}
            className="h-48 w-full rounded-[var(--radius)] object-cover"
          />
        </div>
      </section>

      <Stats />
      <ServiceGrid />

      <section className="section-shell mt-16 card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="badge">Global presence</p>
            <h2 className="text-xl font-semibold text-neutral-900">UAE • Kuwait • Australia • Sri Lanka</h2>
            <p className="mt-2 text-neutral-700">
              Regional phone numbers, emails, and contact names from the current site fit here without modification. The design includes animation-ready columns and responsive stacking.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-neutral-100 p-4">
              <p className="text-sm font-semibold text-neutral-900">CTA banner</p>
              <p className="text-sm text-neutral-700">Schedule an Online Meeting button remains sticky in navigation and repeats here for consistency.</p>
            </div>
            <div className="rounded-xl bg-neutral-100 p-4">
              <p className="text-sm font-semibold text-neutral-900">Scroll animation</p>
              <p className="text-sm text-neutral-700">Fade-in-up animation triggers on view; prefers-reduced-motion disables it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
