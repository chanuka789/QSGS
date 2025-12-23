import { Hero } from '@/components/Hero';
import { ServiceGrid } from '@/components/ServiceGrid';
import { Stats } from '@/components/Stats';
import { ProcessTimeline } from '@/components/ProcessTimeline';

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="Redesign rollout"
        title="Modern experience. Preserved QS expertise."
        description="This build follows the approved implementation plan: keeping existing content, metadata, alt text, and URLs while delivering a responsive, animated experience across every audience page."
        ctaPrimary={{ label: 'Schedule an Online Meeting', href: '/contact-us-quantity-surveying-global-solutions' }}
        ctaSecondary={{ label: 'Explore services', href: '/our-services' }}
      />

      <ServiceGrid />
      <Stats />
      <ProcessTimeline />

      <section className="section-shell mt-16 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <p className="badge">Accessibility & SEO</p>
          <h2 className="text-xl font-semibold text-neutral-900">Headings, metadata, and alt text remain untouched</h2>
          <p className="mt-2 text-neutral-700">
            Each page keeps the original H1–H3 hierarchy and descriptive tags to retain ranking signals. Animations respect reduced-motion settings, focus states are visible, and keyboard navigation is first-class.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• Semantic sections and ARIA labeling for accordions, tabs, and carousels.</li>
            <li>• Sticky CTA presence on desktop and mobile.</li>
            <li>• High-contrast palette with consistent type scale using Inter and Poppins.</li>
          </ul>
        </div>
        <div className="card p-6">
          <p className="badge">Performance</p>
          <h2 className="text-xl font-semibold text-neutral-900">Optimized for 60fps motion and fast loads</h2>
          <p className="mt-2 text-neutral-700">
            Images lazy load, scripts are code-split, and GSAP/AOS effects activate after first paint. Layouts use CSS Grid and Flexbox for adaptive stacking across breakpoints.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• Prefetch key routes and cache static assets.</li>
            <li>• Buttons include hover micro-interactions and clear focus outlines.</li>
            <li>• Sections animate with fade/slide-in reveals controlled by IntersectionObserver.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
