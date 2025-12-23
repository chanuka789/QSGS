import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiceGrid } from '@/components/ServiceGrid';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { ServiceTabs } from '@/components/ServiceTabs';
import { pageMeta } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/our-services'].title,
  description: pageMeta['/our-services'].description
};

const scopeItems = [
  'Pre- and post-contract cost management',
  'Budget validation, estimating, and value engineering',
  'Tender management, bid leveling, and procurement support',
  'Contract administration, claims, and commercial advisory',
  'Reporting aligned to your existing templates and tools'
];

export default function ServicesPage() {
  return (
    <div>
      <Hero
        eyebrow="Service overview"
        title="Four delivery models, one consistent QS standard"
        description="Existing service descriptions are placed within refreshed cards, timelines, and tabs that guide each audience to its dedicated page without changing URLs or headings."
        ctaPrimary={{ label: 'Explore developer services', href: '/quantity-surveying-services-for-property-developers-clients' }}
        ctaSecondary={{ label: 'Talk to us', href: '/contact-us-quantity-surveying-global-solutions' }}
      />

      <ServiceTabs />
      <ServiceGrid />

      <section className="section-shell mt-16 card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="badge">Service scope</p>
            <h2 className="text-xl font-semibold text-neutral-900">Your current service copy lives here intact</h2>
            <p className="mt-2 text-neutral-700">
              Replace each bullet with the exact descriptions from the live site. Typography, spacing, and hover states lift the presentation without altering the meaning.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {scopeItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-neutral-100 p-4">
              <p className="text-sm font-semibold text-neutral-900">Process alignment</p>
              <p className="text-sm text-neutral-700">Timelines showcase discovery, design, build, and QA — matching the implementation plan.</p>
            </div>
            <div className="rounded-xl bg-neutral-100 p-4">
              <p className="text-sm font-semibold text-neutral-900">Cross-linking</p>
              <p className="text-sm text-neutral-700">Each card links to its detail page using identical permalinks to maintain SEO equity.</p>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />
    </div>
  );
}
