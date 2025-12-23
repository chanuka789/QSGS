import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { pageMeta } from '@/content/site';

const values = [
  'Integrity and transparency across every commercial decision',
  'Responsiveness across time zones with clear handoffs',
  'Continuous learning with certifications and tool mastery',
  'Client-first collaboration with proactive communication'
];

const credentials = [
  'RICS chartered surveyors and MRICS candidates',
  'BSc Quantity Surveying, MSc Construction Management',
  'Gulf region, UK, and Australian project delivery experience',
  'BIM, CostX, Cubit, Planswift, and Bluebeam proficiency'
];

export const metadata: Metadata = {
  title: pageMeta['/highly-qualified-quantity-surveyors-leading-qs-outsource-company'].title,
  description: pageMeta['/highly-qualified-quantity-surveyors-leading-qs-outsource-company'].description
};

export default function TeamPage() {
  return (
    <div>
      <Hero
        eyebrow="Our Team"
        title="Highly qualified quantity surveyors ready to embed with you"
        description="Insert your existing team introduction copy here. The refreshed layout uses cards for credentials, value statements, and global experience while preserving heading order."
        ctaPrimary={{ label: 'Meet the team', href: '/contact-us-quantity-surveying-global-solutions' }}
        ctaSecondary={{ label: 'Careers', href: '/careers' }}
      />

      <section className="section-shell mt-16 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <p className="badge">Expertise highlights</p>
          <h2 className="text-xl font-semibold text-neutral-900">Experience summary (existing copy preserved)</h2>
          <p className="mt-2 text-neutral-700">
            Use this area for the unedited paragraph describing the team&apos;s global reach and sector experience. The card layout adds hover elevation and maintains your SEO metadata.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {values.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <p className="badge">Credentials</p>
          <h2 className="text-xl font-semibold text-neutral-900">Academic & professional</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {credentials.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-700">
            Subtle parallax-ready container for imagery; replace background with existing team photos and alt text.
          </div>
        </div>
      </section>
    </div>
  );
}
