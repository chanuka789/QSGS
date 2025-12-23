import { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ServiceTabs } from '@/components/ServiceTabs';
import { pageMeta } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/quantity-surveying-services-for-property-developers-clients'].title,
  description: pageMeta['/quantity-surveying-services-for-property-developers-clients'].description
};

const features = [
  'Feasibility studies, cost planning, and budget validation across mixed-use schemes',
  'Design-stage value engineering while protecting programme and quality benchmarks',
  'Tender documentation, BOQs, and bid analysis aligned to your procurement strategy',
  'Post-contract cost control, cashflow tracking, and variation management'
];

const deliverables = [
  'Feasibility reports and benchmarking packs',
  'Detailed BOQs, cost plans, and procurement schedules',
  'Cashflow forecasts, monthly valuations, and change logs',
  'Risk registers with mitigation actions'
];

export default function DevelopersPage() {
  return (
    <div>
      <ServiceTabs />
      <ServiceDetail
        eyebrow="Developers & Clients"
        title="Quantity surveying services for property developers"
        description="Use your existing copy here to describe how we support residential, commercial, hospitality, retail, industrial, and infrastructure projects. URL, headings, and meta stay the same."
        featureIntro="Integrates with developer decision cycles"
        features={features}
        deliverables={deliverables}
        ctaPrimaryHref="/contact-us-quantity-surveying-global-solutions"
        ctaSecondaryHref="/docs/website-redesign-brief.pdf"
        extra={
          <div className="space-y-3">
            <p className="badge">CTA placements</p>
            <p className="text-sm text-neutral-700">Read more links remain in hero, cards, and footer for direct outreach.</p>
            <p className="text-sm text-neutral-700">Animate-in sections respect reduced-motion preferences.</p>
          </div>
        }
      />
    </div>
  );
}
