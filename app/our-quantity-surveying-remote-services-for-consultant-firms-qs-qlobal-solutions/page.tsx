import { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ServiceTabs } from '@/components/ServiceTabs';
import { pageMeta } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions'].title,
  description: pageMeta['/our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions'].description
};

const features = [
  'Remote resourcing that uses your templates, workflows, and collaboration tools',
  'Overflow support to level bids, produce BOQs, and draft contract documentation',
  'Design-stage estimating that aligns with consultant-led design reviews',
  'Commercial advice and claims preparation with transparent audit trails'
];

const deliverables = [
  'Embedded teams that mirror your QA/QC steps',
  'BOQs, bid comparisons, and recommendation reports',
  'Programme-aware cost updates for design iterations',
  'Claims narratives and substantiation packs'
];

export default function ConsultantFirmsPage() {
  return (
    <div>
      <ServiceTabs />
      <ServiceDetail
        eyebrow="Consultant Firms"
        title="Remote quantity surveying for consultants"
        description="Existing consultant-focused copy is placed inside accordions and cards, preserving the original wording and metadata while refreshing layout and motion."
        featureIntro="Plug-in teams that adopt your standards"
        features={features}
        deliverables={deliverables}
        ctaPrimaryHref="/contact-us-quantity-surveying-global-solutions"
        ctaSecondaryHref="/docs/website-redesign-brief.pdf"
        extra={
          <div className="space-y-3">
            <p className="badge">Remote-friendly UI</p>
            <p className="text-sm text-neutral-700">Tabs and accordions are keyboard accessible with focus-visible styling.</p>
            <p className="text-sm text-neutral-700">Highlight integrations with BIM, CDE, and estimating tools as needed.</p>
          </div>
        }
      />
    </div>
  );
}
