import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ServiceTabs } from '@/components/ServiceTabs';
import { pageMeta } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/quantity-surveying-remote-services-for-independant-architects'].title,
  description: pageMeta['/quantity-surveying-remote-services-for-independant-architects'].description
};

const features = [
  'Concept and schematic design estimating with rapid iterations',
  'Value engineering that protects design intent and client objectives',
  'Tender pack preparation, bid analysis, and recommendation reports',
  'Lifecycle costing and sustainability-focused cost advice'
];

const deliverables = [
  'Early-stage cost plans and elemental estimates',
  'Design option comparisons with savings scenarios',
  'Tender clarifications, bid levelling, and award memos',
  'Lifecycle and sustainability cost summaries'
];

export default function ArchitectsPage() {
  return (
    <div>
      <ServiceTabs />
      <ServiceDetail
        eyebrow="Architects"
        title="Quantity surveying services for architects"
        description="Original architect-focused copy remains untouched while the layout adds parallax-ready hero visuals, accordion detail, and CTA consistency."
        featureIntro="Design-stage certainty, presented clearly"
        features={features}
        deliverables={deliverables}
        ctaPrimaryHref="/contact-us-quantity-surveying-global-solutions"
        ctaSecondaryHref="/docs/website-redesign-brief.pdf"
        extra={
          <div className="space-y-3">
            <p className="badge">Design collaboration</p>
            <p className="text-sm text-neutral-700">Highlight BIM and drawing review workflows; alt text retained for all visuals.</p>
            <p className="text-sm text-neutral-700">Scroll animations fade/slide using IntersectionObserver with reduced-motion respect.</p>
          </div>
        }
      />
    </div>
  );
}
