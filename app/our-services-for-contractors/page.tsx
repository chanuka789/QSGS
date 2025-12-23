import { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ServiceTabs } from '@/components/ServiceTabs';
import { pageMeta } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/our-services-for-contractors'].title,
  description: pageMeta['/our-services-for-contractors'].description
};

const features = [
  'Pre-contract estimating, value engineering, and constructability input',
  'Bid strategy support with procurement schedules and subcontractor engagement',
  'On-site commercial management, progress claims, and variation preparation',
  'Cost-to-complete reporting, cashflow forecasting, and risk tracking'
];

const deliverables = [
  'Work packages, tender clarifications, and bid submissions',
  'Procurement trackers with subcontractor comparisons',
  'Monthly payment applications and variation registers',
  'Cost-to-complete dashboards and risk logs'
];

export default function ContractorsPage() {
  return (
    <div>
      <ServiceTabs />
      <ServiceDetail
        eyebrow="Contractors"
        title="Quantity surveying services for contractors"
        description="Keep the contractor-focused service descriptions intact while presenting them with hoverable cards, accordions, and responsive grids."
        featureIntro="Commercial control built for delivery"
        features={features}
        deliverables={deliverables}
        ctaPrimaryHref="/contact-us-quantity-surveying-global-solutions"
        ctaSecondaryHref="/docs/website-redesign-brief.pdf"
        extra={
          <div className="space-y-3">
            <p className="badge">Site-ready</p>
            <p className="text-sm text-neutral-700">Include photos or diagrams; alt text from current site is preserved verbatim.</p>
            <p className="text-sm text-neutral-700">Micro-interactions highlight key actions like "Read more" and "Schedule meeting".</p>
          </div>
        }
      />
    </div>
  );
}
