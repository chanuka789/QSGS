import { ReactNode } from 'react';
import { Hero } from './Hero';
import { Accordion } from './Accordion';
import { projectTypes, tools } from '@/content/site';

interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  description: string;
  featureIntro: string;
  features: string[];
  deliverables: string[];
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  extra?: ReactNode;
}

export function ServiceDetail({
  eyebrow,
  title,
  description,
  featureIntro,
  features,
  deliverables,
  ctaPrimaryHref,
  ctaSecondaryHref,
  extra
}: ServiceDetailProps) {
  return (
    <div>
      <Hero
        eyebrow={eyebrow}
        title={title}
        description={description}
        ctaPrimary={{ label: 'Schedule an Online Meeting', href: ctaPrimaryHref }}
        ctaSecondary={{ label: 'Download capabilities', href: ctaSecondaryHref }}
      >
        <div className="p-6 space-y-3 text-neutral-100">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-200">Service highlights</p>
          <h2 className="text-2xl font-semibold">Feature-rich without changing your copy</h2>
          <p className="text-neutral-100/90">Headings and paragraphs from the existing page fit into accordions, grids, and cards while maintaining hierarchy.</p>
          <ul className="space-y-2 text-neutral-100/90">
            <li>✔ Tabs for cross-audience navigation</li>
            <li>✔ Accordion for detailed descriptions</li>
            <li>✔ Dual CTAs aligned to plan</li>
          </ul>
        </div>
      </Hero>

      <section className="section-shell mt-12 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p className="badge">Service detail</p>
          <h2 className="text-xl font-semibold text-neutral-900">{featureIntro}</h2>
          <Accordion items={features.map((feature) => ({ title: feature, content: 'Replace with existing paragraph copy.' }))} allowMultiple />
        </div>
        <div className="card p-6 space-y-4">
          <p className="badge">Deliverables</p>
          <h3 className="text-lg font-semibold text-neutral-900">Outcome-driven artifacts</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            {deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div>
            <p className="badge">Software</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="badge bg-neutral-100 text-neutral-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="badge">Project types</p>
            <h3 className="text-lg font-semibold text-neutral-900">Applicable sectors</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <span key={type} className="badge bg-neutral-100 text-neutral-800">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>{extra}</div>
        </div>
      </section>
    </div>
  );
}
