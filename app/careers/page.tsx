import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { pageMeta } from '@/content/site';

const roles = [
  { title: 'Senior Quantity Surveyor', location: 'Remote', summary: 'Lead complex pre- and post-contract packages with global stakeholders.' },
  { title: 'Intermediate Quantity Surveyor', location: 'Remote', summary: 'Support estimating, take-offs, and BOQ production across sectors.' },
  { title: 'Assistant Quantity Surveyor', location: 'Remote', summary: 'Develop core QS skills while contributing to live project deliverables.' }
];

const culture = [
  'Remote-first collaboration with clear handovers',
  'Training budget for certifications and tool upskilling',
  'Inclusive, transparent communication across teams'
];

export const metadata: Metadata = {
  title: pageMeta['/careers'].title,
  description: pageMeta['/careers'].description
};

export default function CareersPage() {
  return (
    <div>
      <Hero
        eyebrow="Careers"
        title="Join a global QS team"
        description="Insert the existing careers introduction and benefits copy here without edits. The form below captures applicant info with validation and server handling."
        ctaPrimary={{ label: 'Apply now', href: '#careers-form' }}
        ctaSecondary={{ label: 'Contact HR', href: 'mailto:careers@qs-global-solutions.com' }}
      />

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        <div className="space-y-4">
          <p className="badge">Open roles</p>
          <div className="grid-auto-fit">
            {roles.map((role) => (
              <div key={role.title} className="card p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">{role.title}</h3>
                  <span className="badge bg-neutral-100 text-neutral-800">{role.location}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{role.summary}</p>
              </div>
            ))}
          </div>
          <div className="card p-6" id="careers-form">
            <p className="badge">Application form</p>
            <h2 className="text-xl font-semibold text-neutral-900">Submit your details</h2>
            <ContactForm action="careers" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-6">
            <p className="badge">Culture</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {culture.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="badge">Accessibility</p>
            <p className="text-sm text-neutral-700">Form controls include focus outlines, aria-live messaging, and keyboard-friendly layout.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
